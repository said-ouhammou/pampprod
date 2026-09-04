import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative isolate min-h-svh overflow-hidden bg-neutral-950 font-sans text-white"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: 'url("/p.jpg")'}}
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/15 to-black/80"
            />

            <div className="mx-auto flex min-h-svh max-w-[1440px] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
                <div className="flex items-center justify-between gap-6">
                    <Link
                        href="/"
                        aria-label="Pampprod home"
                        className="
                    text-2xl font-semibold tracking-[-0.06em] sm:text-3xl
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-white focus-visible:ring-offset-4
                    focus-visible:ring-offset-neutral-950
                "
                    >
                        Pampprod
                        <span className="text-[#ff3b3c]">.</span>
                    </Link>

                    <a
                        href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp (opens in a new tab)"
                        className="
        inline-flex min-h-11 items-center justify-center
        rounded-full border border-white/40 px-5
        text-xs font-medium tracking-wide
        transition-colors hover:bg-white hover:text-neutral-950
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-white focus-visible:ring-offset-4
        focus-visible:ring-offset-neutral-950
    "
                    >
                        Let’s talk on WhatsApp ↗
                    </a>
                </div>

                <div className="flex flex-1 flex-col justify-end pb-10 pt-24 sm:pb-14 lg:pt-32">
                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/75">
                        Photography & visual storytelling
                    </p>

                    <h1
                        id="hero-heading"
                        className="
                    max-w-5xl text-[clamp(3.5rem,9vw,9rem)]
                    font-medium leading-[0.92] tracking-[-0.065em]
                "
                    >
                        Moments fade.
                        <br />
                        <span className="text-[#ff3b3c]">Feeling stays.</span>
                    </h1>

                    <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:items-end lg:justify-between">
                        <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                            Thoughtful photography for people, brands, and the
                            moments that matter. Captured with intention.
                            Remembered with feeling.
                        </p>

                        <a
                            href="#portfolio"
                            className="
                        group inline-flex min-h-14 w-fit items-center gap-6
                        rounded-full bg-white py-2 pl-6 pr-2
                        text-sm font-semibold text-neutral-950
                        transition-colors hover:bg-neutral-200
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-white focus-visible:ring-offset-4
                        focus-visible:ring-offset-neutral-950
                    "
                        >
                            Explore the work
                            <span
                                aria-hidden="true"
                                className="flex size-10 items-center justify-center rounded-full bg-neutral-950 text-white"
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
                                group-hover:translate-y-0.5
                                motion-reduce:transform-none
                                motion-reduce:transition-none
                            "
                                >
                                    <path d="M12 5v14m-6-6 6 6 6-6" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/25 pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 sm:text-xs">
                    <span>People. Stories. Perspectives.</span>
                    <span>Pampprod Studio</span>
                </div>
            </div>
        </section>
    );
}
