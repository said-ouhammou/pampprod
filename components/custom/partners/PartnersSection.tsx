import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
    {
        id: 1,
        name: "Partner One",
        logo: "/partners/waikiki.png",
        website: "https://example.com",
    },
    {
        id: 2,
        name: "Partner Two",
        logo: "/partners/motard.png",
        website: "https://example.com",
    },
    {
        id: 3,
        name: "Partner Three",
        logo: "/partners/tamadot.png",
        website: "https://example.com",
    },
    {
        id: 4,
        name: "Partner Four",
        logo: "/partners/virgin.png",
        website: "https://example.com",
    },
    {
        id: 5,
        name: "Partner Five",
        logo: "/partners/partner-5.png",
        website: "https://example.com",
    },
    {
        id: 6,
        name: "Partner Six",
        logo: "/partners/partner-6.png",
        website: "https://example.com",
    },
];

export default function PartnersSection() {
    return (
        <div
            aria-labelledby="partners-heading"
            className="overflow-hidden bg-white font-sans text-neutral-950"
        >
            <div className="pb-10 pt-2">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    <Carousel
                        opts={{align: "start", slidesToScroll: 1}}
                        aria-label="Our partners"
                        className="w-full"
                    >
                        <header className="mb-5 flex items-center justify-between gap-4">
                            <h2
                                id="partners-heading"
                                className="text-2xl font-medium tracking-tight sm:text-3xl"
                            >
                                Meet our partners
                                <span className="text-[#ff3b3c]">.</span>
                            </h2>

                            <div className="flex shrink-0 gap-2">
                                <CarouselPrevious className="static size-11 translate-y-0 border-neutral-200 bg-white text-[#ff3b3c] shadow-none hover:bg-[#ff3b3c] hover:text-white" />
                                <CarouselNext className="static size-11 translate-y-0 border-neutral-200 bg-white text-[#ff3b3c] shadow-none hover:bg-[#ff3b3c] hover:text-white" />
                            </div>
                        </header>

                        <CarouselContent className="-ml-3">
                            {partners.map((partner) => (
                                <CarouselItem
                                    key={partner.id}
                                    className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/5"
                                >
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${partner.name} website (opens in a new tab)`}
                                        className="
                                            group flex h-24 items-center justify-center
                                            rounded-xl border border-neutral-200
                                            bg-white px-5
                                            transition-colors hover:border-[#ff3b3c]
                                            focus-visible:outline-none
                                            focus-visible:ring-2 focus-visible:ring-inset
                                            focus-visible:ring-[#ff3b3c]
                                            sm:h-28
                                        "
                                    >
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={160}
                                            height={64}
                                            sizes="(min-width: 640px) 160px, 40vw"
                                            className="
                                                h-12 w-full max-w-40 object-contain
                                                grayscale opacity-60
                                                transition-[filter,opacity] duration-200
                                                group-hover:grayscale-0
                                                group-hover:opacity-100
                                                group-focus-visible:grayscale-0
                                                group-focus-visible:opacity-100
                                            "
                                        />
                                    </a>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
