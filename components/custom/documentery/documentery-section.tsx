import DocumenteryVideoSlider from "./DocumenteryVideoSlider";

export default function DocumenterySection() {
    return (
        <section
            aria-labelledby="documentary-heading"
            className="overflow-hidden animate-text"
        >
            <div className="rotated w-full bg-[#F3F1EB] py-16 font-sans text-neutral-950 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    <header className="flex items-center justify-between gap-6 border-b border-neutral-300 pb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                            Documentary
                        </p>

                        <span className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                            Pampprod Studio
                        </span>
                    </header>

                    <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-12">
                        <div className="lg:col-span-7">
                            <h2
                                data-animated-heading
                                id="documentary-heading"
                                className="
                               text-[clamp(3rem,7vw,7rem)]
                               font-medium leading-[0.95] tracking-[-0.06em]
                           "
                            >
                                <span data-heading-line>Real lives.</span>

                                <br />
                                <span
                                    data-heading-line
                                    className="text-neutral-500"
                                >
                                    Deeper stories.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-lg space-y-5 text-base leading-relaxed text-neutral-600 lg:col-span-5 lg:pt-2">
                            <p>
                                Every story begins with listening. We take time
                                to understand the people, places, and
                                experiences behind what you see.
                            </p>

                            <p>
                                Through thoughtful interviews and patient
                                observation, we create documentaries that make
                                room for complexity, preserve individual voices,
                                and bring audiences closer.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:items-stretch lg:gap-12">
                        <figure className="lg:col-span-8">
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-950">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/K2jD5m1xAJ8"
                                    title="Pampprod documentary"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="absolute inset-0 size-full border-0"
                                />
                            </div>

                            <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
                                People and places, seen up close.
                            </figcaption>
                        </figure>

                        <div className="flex flex-col justify-between gap-10 lg:col-span-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                    Our approach
                                </p>

                                <div className="mt-6 space-y-6">
                                    {[
                                        {
                                            number: "01",
                                            title: "Listen first",
                                            description:
                                                "Understand the context and build trust before the camera starts rolling.",
                                        },
                                        {
                                            number: "02",
                                            title: "Stay curious",
                                            description:
                                                "Follow the details, ask thoughtful questions, and leave room for the unexpected.",
                                        },
                                        {
                                            number: "03",
                                            title: "Edit with care",
                                            description:
                                                "Shape a compelling narrative while respecting the people at its heart.",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.number}
                                            className="flex gap-5 border-t border-neutral-300 pt-5"
                                        >
                                            <span className="pt-1 text-xs tabular-nums text-neutral-500">
                                                {item.number}
                                            </span>

                                            <div>
                                                <h3 className="text-lg font-medium tracking-tight">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20your%20photography%20and%20video%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                               group flex min-h-16 items-center justify-between
                               gap-6 rounded-full bg-neutral-950
                               py-2 pl-6 pr-2 text-sm font-medium text-white
                               transition-colors hover:bg-neutral-800
                               focus-visible:outline-none focus-visible:ring-2
                               focus-visible:ring-neutral-950
                               focus-visible:ring-offset-4
                               focus-visible:ring-offset-[#F3F1EB]
                           "
                            >
                                Tell us your story
                                <span
                                    aria-hidden="true"
                                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ff3b3c] text-neutral-950"
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
                    <DocumenteryVideoSlider />

                    <div className="mt-10 flex flex-col gap-6 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div className="max-w-xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff3b3c]">
                                Every story starts somewhere
                            </p>

                            <h3 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-neutral-950">
                                What’s the story you want to tell?
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                Share an idea, a person, or a place. Let’s
                                explore what it could become.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/212661388591?text=Hello%21%20I%27d%20like%20to%20discuss%20a%20documentary%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
               group inline-flex min-h-12 w-fit shrink-0 items-center
               justify-center gap-4 rounded-full bg-[#ff3b3c]
               px-6 py-3 text-sm font-medium text-white
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-[#ff3b3c] focus-visible:ring-offset-4
           "
                        >
                            Discuss your project
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                className="
                   size-5 transition-transform duration-200
                   group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                   motion-reduce:transform-none motion-reduce:transition-none
               "
                            >
                                <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                            <span className="sr-only">
                                on WhatsApp (opens in a new tab)
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
