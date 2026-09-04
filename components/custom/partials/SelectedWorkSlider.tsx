// "use client";

// import {useId, useState} from "react";
// import Image from "next/image";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";

// type Photograph = {
//     id: number;
//     src: string;
//     title: string;
//     description: string;
// };

// const images: Photograph[] = Array.from({length: 10}, (_, index) => ({
//     id: index + 1,
//     src: index % 2 === 0 ? "/hero.jpg" : "/hero-1.jpg",
//     title: `Sunset Shooting ${index + 1}`,
//     description:
//         "A golden-hour photography session capturing warm light and natural moments.",
// }));

// function PhotoCard({photograph}: {photograph: Photograph}) {
//     const [isOpen, setIsOpen] = useState(false);
//     const panelId = useId();

//     return (
//         <article
//             className="relative isolate overflow-hidden "
//             // onPointerEnter={(event) => {
//             //     if (event.pointerType === "mouse") setIsOpen(true);
//             // }}
//             // onPointerLeave={(event) => {
//             //     if (
//             //         event.pointerType === "mouse" &&
//             //         !event.currentTarget.contains(document.activeElement)
//             //     ) {
//             //         setIsOpen(false);
//             //     }
//             // }}
//             // onBlur={(event) => {
//             //     if (!event.currentTarget.contains(event.relatedTarget)) {
//             //         setIsOpen(false);
//             //     }
//             // }}
//             onKeyDown={(event) => {
//                 if (event.key === "Escape") setIsOpen(false);
//             }}
//         >
//             <Image
//                 src={photograph.src}
//                 alt={photograph.title}
//                 width={1200}
//                 height={800}
//                 sizes="(min-width: 768px) 50vw, 100vw"
//                 className="block h-auto w-full"
//             />

//             <button
//                 type="button"
//                 aria-expanded={isOpen}
//                 aria-controls={panelId}
//                 aria-label={`${isOpen ? "Hide" : "Show"} details for ${photograph.title}`}
//                 onClick={() => setIsOpen((open) => !open)}
//                 className="
//                     absolute right-4 top-4 z-20 inline-flex min-h-11
//                     items-center justify-center rounded-full
//                     border border-black/5 bg-white px-5
//                     text-xs font-medium tracking-wide text-neutral-900
//                     shadow-sm transition-colors hover:bg-neutral-100
//                     focus-visible:outline-none focus-visible:ring-2
//                     focus-visible:ring-neutral-900 focus-visible:ring-offset-2
//                 "
//             >
//                 {isOpen ? "Close" : "Details"}
//             </button>

//             <div
//                 id={panelId}
//                 aria-hidden={!isOpen}
//                 className={`
//                     absolute inset-x-0 bottom-0 z-10 h-[80%]
//                     overflow-y-auto  bg-white
//                     p-6 text-neutral-900 sm:p-8 lg:p-10
//                     transition-transform duration-500
//                     ease-[cubic-bezier(0.22,1,0.36,1)]
//                     motion-reduce:transition-none
//                     ${
//                         isOpen
//                             ? "translate-y-0"
//                             : "pointer-events-none translate-y-full"
//                     }
//                 `}
//             >
//                 <div className="flex min-h-full flex-col">
//                     <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
//                         Behind the photograph
//                     </span>

//                     <h3 className="mt-5 text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
//                         {photograph.title}
//                     </h3>

//                     <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600 lg:text-base">
//                         {photograph.description}
//                     </p>

//                     <div className="mt-auto pt-8">
//                         <div className="h-px w-12 bg-neutral-300" />
//                         <p className="mt-4 text-xs uppercase tracking-[0.18em] text-neutral-500">
//                             Selected photograph
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </article>
//     );
// }

// export default function SelectedWorkSlider() {
//     const headingId = useId();

//     return (
//         <div aria-labelledby={headingId} className="mt-16 min-w-0 font-sans">
//             <Carousel
//                 opts={{align: "start"}}
//                 className="w-full"
//                 aria-label="Selected photography"
//             >
//                 <header className="mb-6 flex items-end justify-between gap-6 md:mb-8">
//                     <div>
//                         <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
//                             Portfolio
//                         </p>

//                         <h2
//                             id={headingId}
//                             className="mt-2 text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl"
//                         >
//                             Selected work
//                         </h2>
//                     </div>

//                     <div className="flex shrink-0 gap-2">
//                         <CarouselPrevious
//                             className="
//                                 static size-11 translate-y-0 rounded-full
//                                 border-neutral-200 bg-[#ff3b3c] text-white hover:text-neutral-900
//                                 shadow-none hover:bg-neutral-100
//                             "
//                         />
//                         <CarouselNext
//                             className="
//                                 static size-11 translate-y-0 rounded-full
//                                 border-neutral-200 bg-[#ff3b3c] text-white hover:text-neutral-900
//                                 shadow-none hover:bg-neutral-100
//                             "
//                         />
//                     </div>
//                 </header>

//                 <CarouselContent className="-ml-4 md:-ml-6">
//                     {images.map((photograph) => (
//                         <CarouselItem
//                             key={photograph.id}
//                             className="basis-full pl-4 md:basis-1/2 md:pl-6"
//                         >
//                             <PhotoCard photograph={photograph} />
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//             </Carousel>
//         </div>
//     );
// }

"use client";

import {useId, useState} from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type Photograph = {
    id: number;
    src: string;
    alt: string;
    title: string;
    category: string;
    description: string;
    location?: string;
    year?: string;
};

const photographs: Photograph[] = [
    {
        id: 1,
        src: "/hero.jpg",
        alt: "Bride and groom during their wedding ceremony",
        title: "A Day to Remember",
        category: "Wedding",
        description:
            "An intimate wedding story shaped by honest emotion, natural light, and the moments shared between two families.",
        location: "Marrakech",
        year: "2026",
    },
    {
        id: 2,
        src: "/hero-1.jpg",
        alt: "Portrait photographed in the Agafay desert",
        title: "Desert Silence",
        category: "Portrait",
        description:
            "A quiet portrait series exploring movement, warm desert tones, and the relationship between a person and the landscape.",
        location: "Agafay",
        year: "2026",
    },
    {
        id: 3,
        src: "/hero-2.jpg",
        alt: "Lifestyle image created for a brand campaign",
        title: "Made to Be Seen",
        category: "Campaign",
        description:
            "A visual campaign created around the brand’s personality, combining considered direction with natural, energetic moments.",
        location: "Marrakech",
        year: "2025",
    },
    {
        id: 4,
        src: "/DSC06073.jpg",
        alt: "Documentary portrait of a local artisan",
        title: "Hands of the City",
        category: "Documentary",
        description:
            "A documentary series following local artisans and preserving the gestures, knowledge, and stories behind their work.",
        location: "Marrakech Medina",
        year: "2025",
    },
    {
        id: 5,
        src: "/DSC06077.jpg",
        alt: "Outdoor podcast recording with two guests",
        title: "Outside the Studio",
        category: "Podcast",
        description:
            "An outdoor podcast production designed around clear sound, a relaxed atmosphere, and a setting connected to the conversation.",
        location: "Marrakech",
        year: "2026",
    },
    {
        id: 6,
        src: "/DSC04400.jpg",
        alt: "Guests sharing a moment during an evening event",
        title: "After Sunset",
        category: "Event",
        description:
            "A visual record of an evening brought to life through atmosphere, spontaneous interactions, and carefully observed details.",
        location: "Marrakech",
        year: "2025",
    },
];

function PhotoCard({photograph}: {photograph: Photograph}) {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();

    return (
        <article
            className="relative isolate overflow-hidden bg-neutral-100"
            onKeyDown={(event) => {
                if (event.key === "Escape") setIsOpen(false);
            }}
        >
            <div className="relative aspect-[4/3]">
                <Image
                    src={photograph.src}
                    alt={photograph.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setIsOpen((open) => !open)}
                className="
                    absolute right-4 top-4 z-20 inline-flex min-h-11
                    items-center justify-center rounded-full
                    bg-white px-5 text-xs font-medium tracking-wide
                    text-neutral-900 shadow-sm transition-colors
                    hover:bg-[#ff3b3c] hover:text-white
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#ff3b3c] focus-visible:ring-offset-2
                "
            >
                {isOpen ? "Close" : "Details"}
            </button>

            <div
                id={panelId}
                aria-hidden={!isOpen}
                className={`
                    absolute inset-x-0 bottom-0 z-10 h-[80%]
                    overflow-y-auto bg-white p-6 text-neutral-900
                    transition-transform duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    sm:p-8 lg:p-10
                    ${
                        isOpen
                            ? "translate-y-0"
                            : "pointer-events-none translate-y-full"
                    }
                `}
            >
                <div className="flex min-h-full flex-col">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ff3b3c]">
                        {photograph.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
                        {photograph.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600 lg:text-base">
                        {photograph.description}
                    </p>

                    {(photograph.location || photograph.year) && (
                        <dl className="mt-auto flex flex-wrap gap-x-8 gap-y-4 border-t border-neutral-200 pt-5">
                            {photograph.location && (
                                <div>
                                    <dt className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                                        Location
                                    </dt>
                                    <dd className="mt-1 text-sm font-medium">
                                        {photograph.location}
                                    </dd>
                                </div>
                            )}

                            {photograph.year && (
                                <div>
                                    <dt className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                                        Year
                                    </dt>
                                    <dd className="mt-1 text-sm font-medium">
                                        {photograph.year}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function SelectedWorkSlider() {
    const headingId = useId();

    return (
        <div aria-labelledby={headingId} className="mt-16 min-w-0 font-sans">
            <Carousel
                opts={{align: "start", slidesToScroll: 1}}
                aria-label="Selected photography"
                className="w-full"
            >
                <header className="mb-6 flex items-end justify-between gap-6 md:mb-8">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                            Portfolio
                        </p>

                        <h2
                            id={headingId}
                            className="mt-2 text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl"
                        >
                            Selected work
                        </h2>
                    </div>

                    <div className="flex shrink-0 gap-2">
                        <CarouselPrevious className="static size-11 translate-y-0 rounded-full border-neutral-200 bg-[#ff3b3c] text-white shadow-none hover:bg-neutral-100 hover:text-neutral-900" />

                        <CarouselNext className="static size-11 translate-y-0 rounded-full border-neutral-200 bg-[#ff3b3c] text-white shadow-none hover:bg-neutral-100 hover:text-neutral-900" />
                    </div>
                </header>

                <CarouselContent className="-ml-4 md:-ml-6">
                    {photographs.map((photograph) => (
                        <CarouselItem
                            key={photograph.id}
                            className="basis-full pl-4 md:basis-1/2 md:pl-6"
                        >
                            <PhotoCard photograph={photograph} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
