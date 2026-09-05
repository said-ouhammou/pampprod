"use client";
import "./BackgroundMusic.css";

import {useEffect, useRef, useState} from "react";

const UNLOCK_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;

/** How long the "playing silently" hint stays on screen. */
const HINT_TIMEOUT = 6000;

export default function BackgroundMusic() {
    const toggleRef = useRef<HTMLButtonElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState("");
    const [hint, setHint] = useState("");

    useEffect(() => {
        if (!hint) return;

        const timer = setTimeout(() => setHint(""), HINT_TIMEOUT);
        return () => clearTimeout(timer);
    }, [hint]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        let cancelled = false;
        audio.volume = 0.4;

        function removeUnlockListeners() {
            for (const event of UNLOCK_EVENTS) {
                document.removeEventListener(event, unlock);
            }
        }

        function addUnlockListeners() {
            for (const event of UNLOCK_EVENTS) {
                document.addEventListener(event, unlock, {passive: true});
            }
        }

        function unlock(event: Event) {
            const el = audioRef.current;

            // Presses on the toggle are the button's job. Running both
            // handlers would unmute here and then immediately pause there.
            // The dismiss button is deliberately not excluded: closing the
            // hint is still a gesture we can unlock on.
            if (toggleRef.current?.contains(event.target as Node)) return;

            removeUnlockListeners();
            if (!el) return;

            el.muted = false;
            setIsMuted(false);
            setError("");
            setHint("");

            void el.play().catch(() => {
                setError("Press play to start the background music.");
            });
        }

        async function startAudio() {
            const el = audio!;

            try {
                el.muted = false;
                await el.play();
                if (!cancelled) setIsMuted(false);
                return;
            } catch (cause) {
                if (cancelled) return;
                if (cause instanceof Error && cause.name === "AbortError")
                    return;
            }

            // The browser blocked audible autoplay. Start muted so the track is
            // already running, then turn the sound on at the first interaction.
            try {
                el.muted = true;
                await el.play();
                if (cancelled) return;

                setIsMuted(true);
                setHint("Music is playing silently. Turn on the sound.");
                addUnlockListeners();
            } catch (cause) {
                if (cancelled) return;
                if (cause instanceof Error && cause.name === "AbortError")
                    return;

                setError("Press play to start the background music.");
                addUnlockListeners();
            }
        }

        void startAudio();

        return () => {
            cancelled = true;
            removeUnlockListeners();
            audio.pause();
        };
    }, []);

    async function toggleMusic() {
        const audio = audioRef.current;
        if (!audio) return;

        setError("");
        setHint("");

        // Playing and audible → pause.
        if (!audio.paused && !audio.muted) {
            audio.pause();
            return;
        }

        // Muted autoplay is running → this press just turns the sound on.
        if (!audio.paused && audio.muted) {
            audio.muted = false;
            setIsMuted(false);
            return;
        }

        // Paused → start it.
        try {
            audio.muted = false;
            setIsMuted(false);
            await audio.play();
        } catch (cause) {
            if (cause instanceof Error && cause.name === "AbortError") return;
            setError("The track could not start. Try again.");
        }
    }

    const isAudible = isPlaying && !isMuted;

    // Pressing the button produces audible music whether it is currently
    // paused or muted, so those two states share one label.
    const label = isAudible
        ? "Turn off background music"
        : "Turn on background music";

    const message = error || hint;
    const dotColor = error ? "bg-[#ff3b3c]" : "bg-neutral-400";

    return (
        <div className="pamp-music">
            <audio
                ref={audioRef}
                loop
                playsInline
                preload="metadata"
                onPlaying={() => setIsPlaying(true)}
                onWaiting={() => setIsPlaying(false)}
                onVolumeChange={() => {
                    setIsMuted(Boolean(audioRef.current?.muted));
                }}
                onPause={() => setIsPlaying(false)}
                onError={() => {
                    const el = audioRef.current;

                    // A failed <source> surfaces here too. Only report a real
                    // failure, meaning every source was exhausted.
                    if (!el || el.networkState !== el.NETWORK_NO_SOURCE) return;

                    setIsPlaying(false);
                    setIsMuted(false);

                    setError(
                        `The background music could not load (code ${
                            el.error?.code ?? "unknown"
                        }).`,
                    );
                }}
            >
                {/* Main audio */}
                <source src="/bg-audio.m4a" type="audio/mp4" />
                {/* Fallback audio */}
                <source src="/bg-audio.mp3" type="audio/mpeg" />
                Your browser does not support audio playback.
            </audio>

            <button
                ref={toggleRef}
                type="button"
                onClick={toggleMusic}
                aria-label={label}
                aria-pressed={isAudible}
                title={label}
                className="pamp-music-toggle"
            >
                <span
                    aria-hidden="true"
                    data-playing={isAudible}
                    className="pamp-music-bars"
                >
                    {[0, 1, 2, 3, 4].map((bar) => (
                        <span
                            key={bar}
                            className="pamp-music-bar"
                            style={{
                                animationDelay: `${bar * -0.17}s`,
                                animationDuration: `${0.62 + bar * 0.11}s`,
                            }}
                        />
                    ))}
                </span>

                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="pamp-music-glyph"
                >
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />

                    {isAudible ? (
                        <>
                            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                            <path d="M18.5 6a9 9 0 0 1 0 12" />
                        </>
                    ) : (
                        <>
                            <path d="m16 9 5 6" />
                            <path d="m21 9-5 6" />
                        </>
                    )}
                </svg>
            </button>

            {message && (
                <div role="status" className="pamp-music-message">
                    <span className="relative flex size-3 shrink-0">
                        <span
                            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColor}`}
                        />
                        <span
                            className={`relative inline-flex size-3 rounded-full ${dotColor}`}
                        />
                    </span>

                    <p>{message}</p>

                    <button
                        type="button"
                        onClick={() => {
                            setError("");
                            setHint("");
                        }}
                        aria-label="Dismiss message"
                        title="Dismiss"
                        className="pamp-music-dismiss"
                    >
                        <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            aria-hidden="true"
                        >
                            <path d="M2.5 2.5 9.5 9.5M9.5 2.5 2.5 9.5" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
