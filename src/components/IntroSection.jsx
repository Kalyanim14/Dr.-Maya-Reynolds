import Image from "next/image";
import office1 from "../assets/psyProblems.png";
import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <section className="bg-[var(--color-background-alt)]">
      <div className="mx-auto max-w">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

          {/* LEFT COLUMN */}
          <div className="flex flex-col h-full">

            {/* TEXT */}
            <div className="px-6 md:px-8 lg:px-16 py-12 lg:py-0 flex flex-col justify-center h-full">

              <Reveal>
                <h2 className="text-3xl md:text-5xl font-semibold text-[var(--color-primary)]">
                  Do You See Yourself Here?
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 text-[var(--color-primary)]/80 text-lg bg-white/70 px-4 py-3 border-l-4 border-[var(--color-primary)]/40">
                  Feeling functional on the outside, exhausted inside
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-4 text-[var(--color-primary)]/80 text-lg bg-white/70 px-4 py-3 border-l-4 border-[var(--color-primary)]/40">
                  Constant worry or overthinking
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="mt-4 text-[var(--color-primary)]/80 text-lg bg-white/70 px-4 py-3 border-l-4 border-[var(--color-primary)]/40">
                  Body tension, sleep issues, always bracing for something going wrong
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="mt-4 text-[var(--color-primary)]/80 text-lg bg-white/70 px-4 py-3 border-l-4 border-[var(--color-primary)]/40">
                  High-achieving, self-aware, but stuck!
                </p>
              </Reveal>

            </div>

            {/* BUTTON */}
            <Reveal delay={0.5}>
              <button
                className="
                  group mt-auto w-full
                  inline-flex items-center gap-2
                  border-t border-[var(--color-primary)]
                  px-4 md:px-8 lg:px-16 py-5
                  text-sm font-medium
                  text-[var(--color-primary)]
                  justify-center
                  transition-all duration-1000 ease-out
                  hover:bg-[var(--color-primary)] hover:text-[var(--color-background-alt)]
                "
              >
                <a href="/About#contact">KNOW MORE</a>
                <span
                  className="
                    transition-transform duration-1000 ease-out
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </button>
            </Reveal>

          </div>

          {/* RIGHT COLUMN */}
          <Reveal delay={0.2}>
            <div className="relative aspect-[1.1/1] w-full overflow-hidden">
              <Image
                src={office1}
                alt="Lifestyle flatlay"
                fill
                className="
                  object-cover
                  transition-transform duration-1000 ease-out
                  hover:scale-105
                "
                priority
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
