"use client";
import {useId} from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import PartnersSection from "../partners/PartnersSection";

const reviews = [
    {
        id: 1,
        name: "[Client name]",
        service: "Wedding photography",
        quote: "[Add your client's actual review here.]",
    },
    {
        id: 2,
        name: "[Client name]",
        service: "Brand film",
        quote: "[Add your client's actual review here.]",
    },
    {
        id: 3,
        name: "[Client name]",
        service: "Documentary",
        quote: "[Add your client's actual review here.]",
    },

    {
        id: 4,
        name: "[Client name]",
        service: "Wedding photography",
        quote: "[Add your client's actual review here.]",
    },
    {
        id: 5,
        name: "[Client name]",
        service: "Brand film",
        quote: "[Add your client's actual review here.]",
    },
    {
        id: 6,
        name: "[Client name]",
        service: "Documentary",
        quote: "[Add your client's actual review here.]",
    },
];

export default function ReviewsSection() {
    const headingId = useId();

    return (
        <section
            aria-labelledby={headingId}
            className="overflow-hidden bg-white min-h-screen"
        >
            <div className="rotated bg-white py-16 font-sans text-neutral-950 sm:py-24">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    <Carousel
                        opts={{align: "start", slidesToScroll: 1}}
                        aria-label="Client reviews"
                        className="w-full"
                    >
                        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff3b3c]">
                                    Client experiences
                                </p>

                                <h2
                                    id={headingId}
                                    className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
                                >
                                    Their stories.
                                    <br />
                                    <span className="text-[#ff3b3c]">
                                        In their words.
                                    </span>
                                </h2>
                            </div>

                            <div className="flex shrink-0 gap-2">
                                <CarouselPrevious
                                    className="
                                        static size-12 translate-y-0
                                        border-neutral-200 bg-white text-neutral-950
                                        shadow-none transition-colors
                                        hover:border-[#ff3b3c]
                                        hover:bg-[#ff3b3c] hover:text-white
                                    "
                                />
                                <CarouselNext
                                    className="
                                        static size-12 translate-y-0
                                        border-neutral-200 bg-white text-neutral-950
                                        shadow-none transition-colors
                                        hover:border-[#ff3b3c]
                                        hover:bg-[#ff3b3c] hover:text-white
                                    "
                                />
                            </div>
                        </header>

                        <CarouselContent className="-ml-5 mt-10 items-stretch lg:mt-14">
                            {reviews.map((review) => (
                                <CarouselItem
                                    key={review.id}
                                    className="flex basis-full pl-5 md:basis-1/2 lg:basis-1/3"
                                >
                                    <figure
                                        className=" bg-[#ff3b3c]
                                            group relative flex w-full flex-col
                                            overflow-hidden
                                            p-7 transition-colors duration-300
                                            sm:p-8
                                        "
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="
                                                absolute inset-x-8 top-0 h-0.5
                                                origin-left scale-x-0 bg-[#ff3b3c]
                                                transition-transform duration-300
                                                group-hover:scale-x-100
                                                motion-reduce:transition-none
                                            "
                                        />

                                        <div className="flex items-center justify-between gap-4">
                                            <span className="rounded-full border border-neutral-200 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                                                {review.service}
                                            </span>

                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                                className="size-8 shrink-0 text-[#ff3b3c]"
                                            >
                                                <path d="M3 10h6v6H3zM15 10h6v6h-6zM3 10V8a4 4 0 0 1 4-4M15 10V8a4 4 0 0 1 4-4" />
                                            </svg>
                                        </div>

                                        <blockquote className="flex-1 py-8">
                                            <p className="text-xl font-medium text-white leading-relaxed tracking-[-0.02em]">
                                                {review.quote}
                                            </p>
                                        </blockquote>

                                        <figcaption className="flex items-center gap-4 border-t border-neutral-200 pt-6">
                                            <span
                                                aria-hidden="true"
                                                className="
                                                    flex size-12 shrink-0 items-center
                                                    justify-center rounded-full
                                                    bg-white/10 text-sm
                                                    font-semibold text-white 
                                                "
                                            >
                                                {review.name
                                                    .trim()
                                                    .split(/\s+/)
                                                    .slice(0, 2)
                                                    .map((part) => part[0])
                                                    .join("")
                                                    .toUpperCase()}
                                            </span>

                                            <div className="min-w-0 text-white ">
                                                <p className="break-words text-sm font-semibold">
                                                    {review.name}
                                                </p>

                                                <p className="mt-1 text-xs">
                                                    {review.service}
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <PartnersSection />
                </div>
            </div>
        </section>
    );
}
