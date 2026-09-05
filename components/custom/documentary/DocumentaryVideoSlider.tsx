"use client";

import {useEffect, useState} from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

type Film = {
    id: string;
    url: string;
    title: string;
    category: string;
    description: string;
};

const films: Film[] = [
    {
        id: "1",
        url: "https://www.youtube.com/watch?v=AOzxWwCCdXU",
        title: "Your first film",
        category: "Brand film",
        description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, ducimus eligendi nam nostrum expedita soluta ut reiciendis rerum corrupti maxime, laudantium alias sed, commodi inventore quae ad tenetur! Atque?",
    },
    {
        id: "2",
        url: "https://www.youtube.com/watch?v=FtukH_bCDHg",
        title: "Your second film",
        category: "Event film",
        description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, ducimus eligendi nam nostrum expedita soluta ut reiciendis rerum corrupti maxime, laudantium alias sed, commodi inventore quae ad tenetur! Atque?",
    },
    {
        id: "3",
        url: "https://www.youtube.com/watch?v=sdhh7AYzsTY",
        title: "Your third film",
        category: "Visual story",
        description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, ducimus eligendi nam nostrum expedita soluta ut reiciendis rerum corrupti maxime, laudantium alias sed, commodi inventore quae ad tenetur! Atque?",
    },
    {
        id: "4",
        url: "https://www.youtube.com/watch?v=AOzxWwCCdXU",
        title: "Your first film",
        category: "Brand film",
        description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, ducimus eligendi nam nostrum expedita soluta ut reiciendis rerum corrupti maxime, laudantium alias sed, commodi inventore quae ad tenetur! Atque?",
    },
    {
        id: "5",
        url: "https://www.youtube.com/watch?v=FtukH_bCDHg",
        title: "Your second film",
        category: "Event film",
        description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, ducimus eligendi nam nostrum expedita soluta ut reiciendis rerum corrupti maxime, laudantium alias sed, commodi inventore quae ad tenetur! Atque?",
    },
    {
        id: "6",
        url: "https://www.youtube.com/watch?v=sdhh7AYzsTY",
        title: "Your third film",
        category: "Visual story",
        description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, ducimus eligendi nam nostrum expedita soluta ut reiciendis rerum corrupti maxime, laudantium alias sed, commodi inventore quae ad tenetur! Atque?",
    },
];

function getYouTubeId(value: string): string | null {
    try {
        const url = new URL(value);
        const host = url.hostname.toLowerCase();

        let id: string | null = null;

        if (host === "youtu.be") {
            id = url.pathname.split("/")[1];
        } else if (
            ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(host)
        ) {
            const segments = url.pathname.split("/").filter(Boolean);

            id =
                segments[0] === "watch"
                    ? url.searchParams.get("v")
                    : ["embed", "shorts", "live"].includes(segments[0])
                      ? segments[1]
                      : null;
        }

        return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    } catch {
        return null;
    }
}

export default function DocumentaryVideoSlider() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const [detailsIndex, setDetailsIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
            setPlayingIndex(null);
            setDetailsIndex(null);
        };

        handleSelect();
        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            opts={{align: "start", slidesToScroll: 1}}
            aria-label="Selected films"
            className="mt-12 w-full sm:mt-16"
        >
            <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Selected films
                </p>

                <div className="flex items-center gap-3">
                    <span className="mr-2 text-xs tabular-nums">
                        {String(current + 1).padStart(2, "0")}
                        <span className="mx-2 opacity-50">/</span>
                        {String(films.length).padStart(2, "0")}
                    </span>

                    <CarouselPrevious
                        className="
                            static size-11 translate-y-0
                            border-black/20 bg-transparent text-neutral-950
                            shadow-none hover:bg-neutral-950 hover:text-white
                        "
                    />
                    <CarouselNext
                        className="
                            static size-11 translate-y-0
                            border-black/20 bg-transparent text-neutral-950
                            shadow-none hover:bg-neutral-950 hover:text-white
                        "
                    />
                </div>
            </div>

            <CarouselContent className="-ml-5">
                {films.map((film, index) => {
                    const videoId = getYouTubeId(film.url);
                    const isPlaying = playingIndex === index;

                    return (
                        <CarouselItem
                            key={film.id}
                            className="basis-full pl-5 md:basis-1/2 lg:basis-1/3"
                        >
                            <figure
                                onKeyDown={(event) => {
                                    if (event.key === "Escape")
                                        setDetailsIndex(null);
                                }}
                            >
                                {/* Video */}
                                <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-950">
                                    {!videoId ? (
                                        <div className="flex h-full items-center justify-center p-6 text-sm text-white/70">
                                            Add a valid YouTube link.
                                        </div>
                                    ) : isPlaying ? (
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
                                            title={film.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            className="absolute inset-0 size-full border-0"
                                        />
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setPlayingIndex(index)
                                            }
                                            aria-label={`Play ${film.title}`}
                                            className="
                    group absolute inset-0 size-full cursor-pointer
                    focus-visible:outline-none focus-visible:ring-4
                    focus-visible:ring-inset focus-visible:ring-white
                "
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                                className="absolute inset-0 size-full object-cover"
                                            />

                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 bg-black/25"
                                            />

                                            <span className="absolute inset-0 flex items-center justify-center">
                                                <span
                                                    className="
                            flex size-14 items-center justify-center
                            rounded-full bg-white text-neutral-950
                            transition-colors group-hover:bg-[#ff3b3c]
                        "
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="ml-1 size-6"
                                                    >
                                                        <path d="M8 5v14l11-7L8 5Z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </button>
                                    )}
                                </div>

                                {/* Title, button, and details — outside the video */}
                                <figcaption>
                                    <div className="mt-4 flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-medium uppercase tracking-[0.16em]">
                                                {film.category}
                                            </p>

                                            <h3 className="mt-1 text-lg font-medium leading-tight tracking-tight">
                                                {film.title}
                                            </h3>
                                        </div>

                                        <button
                                            type="button"
                                            aria-expanded={
                                                detailsIndex === index
                                            }
                                            aria-label={`${detailsIndex === index ? "Hide" : "Show"} details for ${film.title}`}
                                            onClick={() => {
                                                setDetailsIndex((current) =>
                                                    current === index
                                                        ? null
                                                        : index,
                                                );
                                            }}
                                            className="
                    inline-flex min-h-11 shrink-0 items-center gap-3
                    rounded-full border border-black/20 px-4
                    text-xs font-medium bg-white
                    transition-colors hover:bg-neutral-950 hover:text-white
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-neutral-950 focus-visible:ring-offset-2
                "
                                        >
                                            {detailsIndex === index
                                                ? "Close"
                                                : "Details"}
                                            <span aria-hidden="true">
                                                {detailsIndex === index
                                                    ? "−"
                                                    : "+"}
                                            </span>
                                        </button>
                                    </div>

                                    <div
                                        aria-hidden={detailsIndex !== index}
                                        className={`
                grid transition-[grid-template-rows,opacity]
                duration-300 ease-out motion-reduce:transition-none
                ${
                    detailsIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "pointer-events-none grid-rows-[0fr] opacity-0"
                }
            `}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <div className="mt-4 rounded-2xl bg-white p-6 text-neutral-950">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                                    Behind the film
                                                </p>

                                                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                                                    {film.description}
                                                </p>

                                                <div className="mt-6 border-t border-neutral-200 pt-4">
                                                    <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                                                        {film.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
}
