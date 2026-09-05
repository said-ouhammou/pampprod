"use client";

import {type RefObject} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Must match the angle in `.rotated` in globals.css.
 * The CSS value provides the pre-hydration state so the sections don't
 * flash upright before GSAP takes over; this constant is what the tween
 * animates *from*, so the two have to agree.
 */
const START_ROTATION = 30;

/** How long to wait after the last resize before measuring. */
const RESIZE_DEBOUNCE = 150;

/** How long after the last scroll event we consider the user idle. */
const SCROLL_IDLE = 200;

export function useSectionScrollAnimation(
    containerRef: RefObject<HTMLElement | null>,
) {
    useGSAP(
        () => {
            const root = containerRef.current;
            if (!root) return;

            // Mobile browsers fire a resize every time the address bar
            // collapses. Without this, ScrollTrigger runs a full refresh
            // mid-scroll and every pin below the current one jumps.
            ScrollTrigger.config({ignoreMobileResize: true});

            const sections = Array.from(
                root.querySelectorAll<HTMLElement>(":scope > section"),
            );

            if (!sections.length) return;

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            const observedContent: HTMLElement[] = [];

            sections.forEach((section, index) => {
                const content =
                    section.querySelector<HTMLElement>(":scope > .rotated");

                if (content) {
                    observedContent.push(content);

                    if (prefersReducedMotion) {
                        // Keep the pinned layout, drop the scrubbed rotation.
                        gsap.set(content, {rotation: 0});
                    } else {
                        // fromTo, not to: `to` caches whatever rotation the
                        // element happens to have when the tween is built,
                        // which after a refresh is the inline transform GSAP
                        // itself wrote — so the section would settle at the
                        // wrong angle or stop animating entirely.
                        gsap.fromTo(
                            content,
                            {rotation: START_ROTATION},
                            {
                                rotation: 0,
                                ease: "none",
                                overwrite: "auto",
                                // Don't flatten every section on mount;
                                // let the ScrollTrigger position decide.
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: section,
                                    start: "top bottom",
                                    end: "top 20%",
                                    scrub: true,
                                    invalidateOnRefresh: true,
                                },
                            },
                        );
                    }
                }

                // The last section has nothing to pin against.
                if (index === sections.length - 1) return;

                ScrollTrigger.create({
                    trigger: section,
                    start: "bottom bottom",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    // Locks the pin slightly early so fast scrolling doesn't
                    // show the section sliding before it catches.
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                });
            });

            // ---- Refresh scheduling ------------------------------------
            // Every refresh recalculates all pin start/end values. Doing that
            // while the user is scrolling through a pinned section is what
            // makes the page lurch, so queue it until they stop.

            let cancelled = false;
            let isScrolling = false;
            let refreshPending = false;
            let resizeTimer: ReturnType<typeof setTimeout> | undefined;
            let scrollIdleTimer: ReturnType<typeof setTimeout> | undefined;

            function refreshNow() {
                if (cancelled) return;
                ScrollTrigger.refresh();
            }

            function requestRefresh() {
                if (cancelled) return;

                if (isScrolling) {
                    refreshPending = true;
                    return;
                }

                refreshNow();
            }

            function handleScroll() {
                isScrolling = true;
                clearTimeout(scrollIdleTimer);

                scrollIdleTimer = setTimeout(() => {
                    isScrolling = false;

                    if (refreshPending) {
                        refreshPending = false;
                        refreshNow();
                    }
                }, SCROLL_IDLE);
            }

            window.addEventListener("scroll", handleScroll, {passive: true});

            // Height changes come from the Details panels expanding, lazy
            // iframes settling, and unsized images loading in.
            const observer = new ResizeObserver(() => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(requestRefresh, RESIZE_DEBOUNCE);
            });

            observedContent.forEach((content) => {
                observer.observe(content);
            });

            // Albert Sans loads with display:swap, so every heading reflows
            // when it arrives. Measure again once that has happened.
            document.fonts?.ready.then(() => {
                if (!cancelled) refreshNow();
            });

            // Catch anything still loading (images without dimensions).
            window.addEventListener("load", refreshNow);

            return () => {
                cancelled = true;
                observer.disconnect();
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("load", refreshNow);
                clearTimeout(resizeTimer);
                clearTimeout(scrollIdleTimer);
            };
        },
        {scope: containerRef},
    );
}
