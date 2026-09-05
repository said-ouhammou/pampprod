"use client";

import {useRef} from "react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {useSectionScrollAnimation} from "@/hooks/useSectionScrollAnimation";

import SelectedWorkSlider from "@/components/custom/partials/SelectedWorkSlider";
import VideoSlider from "@/components/custom/partials/VideoSlider";
import BackgroundMusic from "@/components/custom/partials/BackgroundMusic";
import HeroSection from "@/components/custom/home/hero-section";
import DocumentarySection from "@/components/custom/documentary/documentary-section";
import ReviewsSection from "@/components/custom/home/reviews-section";

export default function HomePage() {
    const containerRef = useRef<HTMLElement | null>(null);

    useSectionScrollAnimation(containerRef);

    return (
        <>
            <BackgroundMusic />
            <main ref={containerRef}>
                <HeroSection />

                <DocumentarySection />

                <section
                    aria-labelledby="experience-heading"
                    className="overflow-hidden animate-text"
                    id="portfolio"
                >
                    <div className="bg-white py-16 rotated font-sans text-neutral-900 sm:py-24 lg:py-32">
                        <div className="mx-auto container  w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ">
                            <header className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                                <div className="lg:col-span-7">
                                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                                        The approach
                                    </p>

                                    <h2
                                        data-animated-heading
                                        id="heading"
                                        className="max-w-3xl text-[clamp(3rem,6.5vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#ff3b3c]"
                                    >
                                        <span className="block overflow-hidden pb-[0.12em]">
                                            <span
                                                data-heading-line
                                                className="block"
                                            >
                                                Real moments.
                                            </span>
                                        </span>

                                        <span className="block overflow-hidden pb-[0.12em]">
                                            <span
                                                data-heading-line
                                                className="block"
                                            >
                                                Lasting impressions.
                                            </span>
                                        </span>
                                    </h2>
                                </div>

                                <div className="max-w-lg space-y-4 text-base leading-relaxed text-neutral-600 lg:col-span-5 lg:pb-1">
                                    <p data-text-reveal>
                                        Every shoot starts with a conversation.
                                        We take time to understand your story,
                                        your vision, and how you want the
                                        photographs to feel.
                                    </p>

                                    <p data-text-reveal>
                                        From the first ideas to the final
                                        selection, we offer clear guidance and a
                                        relaxed experience—giving genuine
                                        moments room to unfold.
                                    </p>
                                </div>
                            </header>

                            <SelectedWorkSlider />

                            <div className="mt-20 border-t border-neutral-200 pt-12 sm:mt-28 sm:pt-16 lg:mt-32">
                                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 lg:col-span-3">
                                        Our philosophy
                                    </p>

                                    <div className="lg:col-span-9">
                                        <p
                                            data-text-reveal
                                            className="max-w-4xl text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl"
                                        >
                                            A photograph should do more than
                                            show how a moment looked.
                                            <span className="text-neutral-500">
                                                {" "}
                                                It should bring you back to how
                                                it felt.
                                            </span>
                                        </p>

                                        <div
                                            aria-hidden="true"
                                            className="mt-8 h-1 w-12 rounded-full bg-[#ff3b3c]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 sm:mt-16">
                                <a
                                    href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
        group relative isolate flex w-full
        items-center justify-between gap-6 overflow-hidden
        rounded-[2rem] bg-[#ff3b3c] p-6 text-neutral-950
        sm:gap-10 sm:rounded-[2.5rem] sm:p-9
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-neutral-900 focus-visible:ring-offset-4
    "
                                >
                                    <span
                                        aria-hidden="true"
                                        className="
                absolute inset-0 -z-10 origin-bottom scale-y-0
                bg-neutral-950 transition-transform duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-y-100 group-focus-visible:scale-y-100
                motion-reduce:transition-none
            "
                                    />

                                    <span
                                        className="
                transition-colors duration-300
                text-white group-focus-visible:text-white
                motion-reduce:transition-none
            "
                                    >
                                        <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                                            Your story. Through our lens.
                                        </span>

                                        <span className="block text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                                            Let’s plan
                                            <br />
                                            your shoot.
                                        </span>
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="
                flex size-16 shrink-0 items-center justify-center
                rounded-full bg-white text-neutral-950 sm:size-24
            "
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="
                    size-7 transition-transform duration-300 sm:size-10
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-focus-visible:-translate-y-1
                    group-focus-visible:translate-x-1
                    motion-reduce:transform-none motion-reduce:transition-none
                "
                                        >
                                            <path d="M7 17 17 7M7 7h10v10" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="videography-heading"
                    className="overflow-hidden animate-text"
                >
                    <div className="rotated w-full bg-[#ff3b3c] py-16 font-sans text-neutral-950 sm:py-24 lg:py-32">
                        <div className="mx-auto max-w-[1440px] h-fit px-5 sm:px-8 lg:px-12">
                            <header className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                                <div className="lg:col-span-8">
                                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
                                        Videography · Pampprod
                                    </p>

                                    <h2
                                        data-animated-heading
                                        id="videography-heading"
                                        className="
                            text-[clamp(3rem,7.5vw,7.5rem)]
                            font-medium leading-[0.95] tracking-[-0.06em]
                        "
                                    >
                                        Your story.
                                        <br />
                                        <span className="text-white">
                                            In motion.
                                        </span>
                                    </h2>
                                </div>

                                <p className="max-w-md text-base text-white leading-relaxed lg:col-span-4 lg:pb-2">
                                    The atmosphere. The movement. The moments
                                    between. We bring them together through
                                    thoughtful direction, considered sound, and
                                    an edit that makes you feel something.
                                </p>
                            </header>

                            <VideoSlider />

                            <div className="mt-12 grid gap-8 border-t border-black/20 pt-8 sm:mt-16 lg:grid-cols-12 lg:items-center lg:gap-12">
                                <div className="lg:col-span-7">
                                    <p className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                                        Have a story worth telling?
                                    </p>

                                    <p className="mt-3 max-w-lg text-sm leading-relaxed sm:text-base">
                                        Tell us what you have in mind. We’ll
                                        help shape the idea, plan the shoot, and
                                        bring it to the screen.
                                    </p>
                                </div>

                                <div className="lg:col-span-5 lg:justify-self-end">
                                    <a
                                        href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                            group inline-flex min-h-16 w-full
                            items-center justify-between gap-8
                            rounded-full bg-neutral-950 py-2 pl-7 pr-2
                            text-base font-medium text-white
                            transition-colors hover:bg-neutral-800
                            sm:w-auto
                            focus-visible:outline-none focus-visible:ring-2
                            focus-visible:ring-neutral-950
                            focus-visible:ring-offset-4
                            focus-visible:ring-offset-[#ff3b3c]
                        "
                                    >
                                        Let’s make a film
                                        <span
                                            aria-hidden="true"
                                            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="
                                    size-6 transition-transform duration-200
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    motion-reduce:transform-none
                                    motion-reduce:transition-none
                                "
                                            >
                                                <path d="M7 17 17 7M7 7h10v10" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="podcast-heading"
                    className="overflow-hidden"
                >
                    <div className="rotated w-full bg-[#242831] py-16 font-sans text-white sm:py-24 lg:py-32">
                        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D6E6A5]">
                                    Outdoor podcast production
                                </p>

                                <span className="text-xs uppercase tracking-[0.16em] text-white/60">
                                    Pampprod Studio
                                </span>
                            </header>

                            <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-12">
                                <h2
                                    id="podcast-heading"
                                    className="
                        text-[clamp(3rem,7vw,7rem)]
                        font-medium leading-[0.95] tracking-[-0.06em]
                        lg:col-span-8
                    "
                                >
                                    Good conversations.
                                    <br />
                                    <span className="text-[#D6E6A5]">
                                        A different setting.
                                    </span>
                                </h2>

                                <p className="max-w-md text-base leading-relaxed text-white/75 lg:col-span-4 lg:pb-2">
                                    Take the conversation beyond the studio. We
                                    bring thoughtful framing, clear sound, and a
                                    relaxed atmosphere to outdoor podcast
                                    sessions.
                                </p>
                            </div>

                            <figure className="mt-12 sm:mt-16">
                                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
                                    <iframe
                                        src="https://www.youtube.com/embed/AS7i25he4NE?si=d3l7Xh2Z1IvH2ZLk"
                                        title="Pampprod outdoor podcast"
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        className="absolute inset-0 size-full border-0"
                                    ></iframe>
                                </div>

                                <figcaption className="mt-4 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.14em] text-white/60">
                                    <span>Outside the studio</span>
                                    <span>Room for real conversation</span>
                                </figcaption>
                            </figure>

                            <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-3 lg:gap-12">
                                {[
                                    {
                                        number: "01",
                                        title: "The right location",
                                        description:
                                            "A setting that suits your conversation, with attention to light, background, and surrounding noise.",
                                    },
                                    {
                                        number: "02",
                                        title: "A natural conversation",
                                        description:
                                            "A considered camera and microphone setup that helps your guests settle in and speak comfortably.",
                                    },
                                    {
                                        number: "03",
                                        title: "Ready to share",
                                        description:
                                            "A carefully edited episode, with short excerpts available for your social channels.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="border-t border-white/20 pt-6"
                                    >
                                        <span className="text-xs tabular-nums text-[#D6E6A5]">
                                            {item.number}
                                        </span>

                                        <h3 className="mt-4 text-xl font-medium tracking-tight">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 flex flex-col gap-8 rounded-3xl bg-white/5 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                                        Who’s joining the conversation?
                                    </p>

                                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
                                        Tell us about your format, your guests,
                                        and the setting you have in mind.
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                        group inline-flex min-h-16 w-fit shrink-0
                        items-center justify-between gap-6 rounded-full
                        bg-[#D6E6A5] py-2 pl-6 pr-2
                        text-sm font-semibold text-[#182D27]
                        transition-colors hover:bg-white
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-[#D6E6A5]
                        focus-visible:ring-offset-4
                        focus-visible:ring-offset-[#182D27]
                    "
                                >
                                    Plan your podcast
                                    <span
                                        aria-hidden="true"
                                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#182D27] text-white"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="
                                size-6 transition-transform duration-200
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                motion-reduce:transform-none
                                motion-reduce:transition-none
                            "
                                        >
                                            <path d="M7 17 17 7M7 7h10v10" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="wedding-heading"
                    className="overflow-hidden"
                >
                    <div className="rotated w-full bg-white py-16 font-sans text-[#ff3b3c] sm:py-24 lg:py-32">
                        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                            <header className="mx-auto max-w-4xl text-center">
                                <p className="text-xs font-medium uppercase tracking-[0.24em]">
                                    Wedding photography & films
                                </p>

                                <h2
                                    id="wedding-heading"
                                    className="
                        mt-8 text-[clamp(3rem,7.5vw,7.5rem)]
                        font-medium leading-[0.95] tracking-[-0.06em]
                    "
                                >
                                    Your day.
                                    <br />
                                    All the feeling.
                                </h2>

                                <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
                                    The quiet anticipation. The familiar faces.
                                    The laughter you didn’t see coming. We
                                    capture the moments that make your wedding
                                    yours.
                                </p>
                            </header>

                            <Carousel
                                opts={{align: "start"}}
                                aria-label="Wedding photography"
                                className="mt-12 w-full sm:mt-16 lg:mt-20"
                            >
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <p className="text-xs font-medium uppercase tracking-[0.18em]">
                                        Wedding moments
                                    </p>

                                    <div className="flex gap-2">
                                        <CarouselPrevious
                                            className="
                    static size-11 translate-y-0
                    border-[#ff3b3c] bg-white text-[#ff3b3c]
                    hover:bg-[#ff3b3c] hover:text-white
                "
                                        />
                                        <CarouselNext
                                            className="
                    static size-11 translate-y-0
                    border-[#ff3b3c] bg-white text-[#ff3b3c]
                    hover:bg-[#ff3b3c] hover:text-white
                "
                                        />
                                    </div>
                                </div>

                                <CarouselContent className="-ml-4 items-start sm:-ml-6">
                                    {[
                                        {
                                            src: "/wedding/1.jpg",
                                            alt: "Wedding photograph 1",
                                        },
                                        {
                                            src: "/wedding/2.jpg",
                                            alt: "Wedding photograph 2",
                                        },
                                        {
                                            src: "/wedding/3.jpg",
                                            alt: "Wedding photograph 3",
                                        },
                                        {
                                            src: "/wedding/4.jpg",
                                            alt: "Wedding photograph 4",
                                        },
                                        {
                                            src: "/wedding/5.jpg",
                                            alt: "Wedding photograph 1",
                                        },
                                        {
                                            src: "/wedding/6.jpg",
                                            alt: "Wedding photograph 2",
                                        },
                                        {
                                            src: "/wedding/7.jpg",
                                            alt: "Wedding photograph 3",
                                        },
                                        {
                                            src: "/wedding/8.jpg",
                                            alt: "Wedding photograph 4",
                                        },
                                    ].map((photo, index) => (
                                        <CarouselItem
                                            key={`${photo.src}-${index}`}
                                            className="basis-full pl-4 md:basis-1/3 sm:pl-6"
                                        >
                                            <div className="overflow-hidden rounded-2xl">
                                                {/* Replace these paths with your wedding photos. */}
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="block object-cover h-[500px] w-full"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>

                            <div className="mt-16 grid gap-10 border-t border-[#ff3b3c]/25 pt-10 lg:mt-24 lg:grid-cols-12 lg:gap-16 lg:pt-14">
                                <div className="lg:col-span-5">
                                    <p className="text-xs font-medium uppercase tracking-[0.2em]">
                                        Present for every moment
                                    </p>

                                    <h3 className="mt-5 max-w-md text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl">
                                        Enjoy your day.
                                        <br />
                                        We’ll help you remember it.
                                    </h3>
                                </div>

                                <div className="space-y-8 lg:col-span-7">
                                    {[
                                        {
                                            number: "01",
                                            title: "Your story comes first",
                                            description:
                                                "We get to know you, your plans, and the people and traditions that matter most to you.",
                                        },
                                        {
                                            number: "02",
                                            title: "Space to be yourselves",
                                            description:
                                                "Gentle guidance when you need it, and a discreet presence when the moment speaks for itself.",
                                        },
                                        {
                                            number: "03",
                                            title: "Memories to return to",
                                            description:
                                                "Thoughtfully selected photographs and carefully edited films that preserve the atmosphere of your day.",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.number}
                                            className="flex gap-5 sm:gap-8"
                                        >
                                            <span className="pt-1 text-xs tabular-nums">
                                                {item.number}
                                            </span>

                                            <div>
                                                <h4 className="text-xl text-black font-medium tracking-tight">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16 rounded-3xl bg-[#ff3b3c] px-6 py-10 text-center text-white sm:mt-24 sm:px-10 sm:py-14">
                                <p className="text-xs font-medium uppercase tracking-[0.2em]">
                                    Let’s start with your date
                                </p>

                                <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                                    A day worth remembering.
                                </h3>

                                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed sm:text-base">
                                    Share your wedding date, location, and a
                                    little about what you’re planning.
                                </p>

                                <a
                                    href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                        group mt-8 inline-flex min-h-16 items-center
                        justify-between gap-6 rounded-full
                        bg-white py-2 pl-7 pr-2
                        text-sm font-medium text-[#ff3b3c]
                        transition-colors hover:bg-white/90
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-white focus-visible:ring-offset-4
                        focus-visible:ring-offset-[#ff3b3c]
                    "
                                >
                                    Enquire about your date
                                    <span
                                        aria-hidden="true"
                                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ff3b3c] text-white"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="
                                size-6 transition-transform duration-200
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                motion-reduce:transform-none
                                motion-reduce:transition-none
                            "
                                        >
                                            <path d="M7 17 17 7M7 7h10v10" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="photographer-heading"
                    className="overflow-hidden"
                >
                    <div className=" w-full min-h-screen rotated pt-16 bg-white pb-16 font-sans text-[#ff3b3c]">
                        <div className="mx-auto container  max-w-[1440px] px-5 sm:px-8 lg:px-12">
                            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
                                {/* Video — left */}
                                <figure className="min-w-0 lg:col-span-6">
                                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#ff3b3c] sm:rounded-3xl">
                                        <iframe
                                            src="https://www.youtube-nocookie.com/embed/AS7i25he4NE"
                                            title="A word from the photographer behind Pampprod"
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            className="absolute inset-0 size-full border-0"
                                        />
                                    </div>

                                    <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.18em]">
                                        Meet the person behind the lens
                                    </figcaption>
                                </figure>

                                {/* Introduction — right */}
                                <div className="lg:col-span-6">
                                    <p className="text-xs font-medium uppercase tracking-[0.2em]">
                                        A word from the photographer
                                    </p>

                                    <h2
                                        id="photographer-heading"
                                        className="
                            mt-6 text-[clamp(2.5rem,4.5vw,4.5rem)]
                            font-medium leading-[1] tracking-[-0.05em]
                        "
                                    >
                                        Before the picture,
                                        <br />
                                        there’s a connection.
                                    </h2>

                                    <div className="mt-8 max-w-xl text-black space-y-5 text-base leading-relaxed">
                                        <p>
                                            What draws me to photography is the
                                            chance to notice things we might
                                            otherwise miss—a glance, a gesture,
                                            the way someone lights up when they
                                            feel at ease.
                                        </p>

                                        <p>
                                            My approach starts with getting to
                                            know you. I want you to feel
                                            comfortable being yourself, with
                                            enough guidance to feel confident
                                            and enough freedom for something
                                            natural to happen.
                                        </p>

                                        <p>
                                            Whether I’m photographing a person
                                            or telling a story on film, I want
                                            the result to feel personal.
                                            Something you recognise yourself in.
                                        </p>
                                    </div>

                                    <div className="mt-8 border-t text-gray-400 border-[#ff3b3c]/25 pt-6">
                                        <p className="text-xl font-semibold tracking-tight">
                                            Pampprod
                                        </p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em]">
                                            Photographer & filmmaker
                                        </p>
                                    </div>

                                    <a
                                        href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" w-full
                            group mt-8 inline-flex min-h-14 items-center
                            justify-between gap-6 rounded-full
                            bg-[#ff3b3c] py-2 pl-6 pr-2
                            text-sm font-medium text-white
                            focus-visible:outline-none focus-visible:ring-2
                            focus-visible:ring-[#ff3b3c]
                            focus-visible:ring-offset-4
                        "
                                    >
                                        Let’s get to know each other
                                        <span
                                            aria-hidden="true"
                                            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ff3b3c]"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="
                                    size-5 transition-transform duration-200
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    motion-reduce:transform-none
                                    motion-reduce:transition-none
                                "
                                            >
                                                <path d="M7 17 17 7M7 7h10v10" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ReviewsSection />

                <footer
                    id="contact"
                    aria-labelledby="footer-heading"
                    className="relative bg-[#ff3b3c] font-sans text-white animate-text"
                >
                    <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-32">
                        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
                            <div className="lg:col-span-8">
                                <p className="text-xs font-medium uppercase tracking-[0.22em]">
                                    Have something in mind?
                                </p>

                                <h2
                                    id="footer-heading"
                                    className="
                        mt-6 text-[clamp(3rem,7vw,7rem)]
                        font-medium leading-[0.95] tracking-[-0.06em]
                    "
                                >
                                    Let’s make
                                    <br />
                                    something worth
                                    <br />
                                    remembering.
                                </h2>
                            </div>

                            <div className="lg:col-span-4">
                                <p className="max-w-sm text-base leading-relaxed">
                                    A film, a photograph, a conversation. Tell
                                    us what you’re planning, and we’ll take it
                                    from there.
                                </p>

                                {/* Replace with your actual contact email. */}
                                <a
                                    href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                        group mt-8 inline-flex min-h-16 items-center
                        justify-between gap-8 rounded-full
                        bg-white py-2 pl-7 pr-2
                        text-sm font-semibold text-[#ff3b3c]
                        transition-colors hover:bg-white/90
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-white focus-visible:ring-offset-4
                        focus-visible:ring-offset-[#ff3b3c]
                    "
                                >
                                    Start a conversation
                                    <span
                                        aria-hidden="true"
                                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ff3b3c] text-white"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="
                                size-6 transition-transform duration-200
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                motion-reduce:transform-none
                                motion-reduce:transition-none
                            "
                                        >
                                            <path d="M7 17 17 7M7 7h10v10" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-10 border-t border-white/30 pt-8 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.18em]">
                                    Get in touch
                                </p>

                                <a
                                    href="mailto:contact@pampprod.com"
                                    className="
        mt-4 flex min-h-11 w-fit items-center gap-3 text-lg
        underline decoration-white/40 underline-offset-8
        transition-colors hover:decoration-white
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-white
    "
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className="size-5 shrink-0"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="18"
                                            height="14"
                                            rx="2"
                                        />
                                        <path d="m3 7 9 6 9-6" />
                                    </svg>

                                    <span className="break-all">
                                        contact@pampprod.com
                                    </span>
                                </a>

                                <a
                                    href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp: +212 661 388 591 (opens in a new tab)"
                                    className="
        mt-4 flex min-h-11 w-fit items-center gap-3 text-lg
        underline decoration-white/40 underline-offset-8
        transition-colors hover:decoration-white
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-white
    "
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className="size-5 shrink-0"
                                    >
                                        <path d="M21 11.5a9 9 0 0 1-13.4 7.85L3 21l1.65-4.6A9 9 0 1 1 21 11.5Z" />
                                        <path d="m8 7 1.5-.5L11 9l-1 1a8 8 0 0 0 4 4l1-1 2.5 1.5L17 16c-.3.8-1.2 1.2-2 1-4.2-1-7-3.8-8-8-.2-.8.2-1.7 1-2Z" />
                                    </svg>

                                    <span>+212 661 388 591</span>
                                </a>

                                <a
                                    href="tel:+212661388591"
                                    className="
        mt-4 inline-flex min-h-11 items-center gap-3 text-lg
        underline decoration-white/40 underline-offset-8
        transition-colors hover:decoration-white
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-white
    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className="size-5 shrink-0"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" />
                                    </svg>

                                    <span>+212 661 388 591</span>
                                </a>

                                {/* -------------------------------------------------------------- */}
                                <div className="flex items-center gap-4 mt-6">
                                    {/* Instagram */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className="size-8 shrink-0"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="5"
                                        />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle
                                            cx="17.5"
                                            cy="6.5"
                                            r="1"
                                            fill="currentColor"
                                            stroke="none"
                                        />
                                    </svg>

                                    {/* Facebook */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="size-8 shrink-0"
                                    >
                                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                                    </svg>

                                    {/* X / Twitter */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="size-8 shrink-0"
                                    >
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
                                    </svg>

                                    {/* YouTube */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className="size-8 shrink-0"
                                    >
                                        <rect
                                            x="2"
                                            y="5"
                                            width="20"
                                            height="14"
                                            rx="4"
                                        />
                                        <path
                                            d="m10 9 5 3-5 3V9Z"
                                            fill="currentColor"
                                            stroke="none"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <nav aria-label="Footer navigation">
                                <p className="text-xs font-medium uppercase tracking-[0.18em]">
                                    Explore
                                </p>

                                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                                    <li>
                                        <Link
                                            href="/"
                                            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="#portfolio"
                                            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                        >
                                            Selected work
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="max-w-xs">
                                <p className="text-xs font-medium uppercase tracking-[0.18em]">
                                    Behind the lens
                                </p>

                                <p className="mt-4 text-sm leading-relaxed">
                                    Photography and filmmaking for people,
                                    brands, and the stories that bring them
                                    together.
                                </p>
                            </div>
                        </div>

                        <div
                            aria-hidden="true"
                            className="
                overflow-hidden pb-3 pt-12
                text-[clamp(3.5rem,15vw,14rem)]
                font-semibold leading-none tracking-[-0.065em]
                sm:pt-16
            "
                        >
                            Pampprod.
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/30 pt-6 text-xs leading-relaxed">
                            <p>
                                © {new Date().getFullYear()} Pampprod. All
                                rights reserved.
                            </p>
                            <p>Photography & visual storytelling.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
