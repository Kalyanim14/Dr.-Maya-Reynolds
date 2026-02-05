"use client";

import office2 from "../assets/Dr. Maya Reynolds.png";
import office1 from "../assets/psy.jpg";
import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="bg-[var(--color-accent)] py-24" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">

        {/* Text */}
        <div>
          <Reveal>
            <p className="text-6xl font-semibold text-black">Hi,<br /></p>

            <h2 className="text-5xl font-semibold text-black inline-flex items-baseline mt-5">
              Dr. Maya Reynolds,
              <span className="ml-2 text-xl font-medium align-baseline">
                <b>PsyD</b>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-md text-[var(--color-foreground)]/80">
              I’m Dr. Maya Reynolds, a licensed clinical psychologist offering therapy for adults navigating anxiety, trauma, and burnout. Many of my clients are thoughtful, high-achieving individuals who feel emotionally exhausted or stuck in patterns of overthinking and self-pressure.<br /><br />

              My work is collaborative and paced with care. I integrate evidence-based approaches like CBT, EMDR, and mindfulness to support both emotional insight and nervous system regulation. I offer in-person sessions from my Santa Monica office as well as secure telehealth across California.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <button className="flex group mt-18 mx-auto  text-sm justify-center items-center gap-2 border border-[var(--color-foreground)] px-6 py-3 text-sm font-medium text-[var(--color-foreground)]">
              <a href="/About#contact">LET’S CHAT</a>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Reveal>
        </div>

        {/* Images */}
        <div className="relative flex justify-center pb-12 md:pb-0">
          <Reveal y={48}>
            <div className="relative w-full max-w-md aspect-auto mt-6 flex justify-center items-end">
              {/* Therapy Image */}
              <div className="relative z-0 w-4/5">
                <Image
                  src={office2}
                  alt="Therapy"
                  className="rounded-t-full object-cover w-full h-auto"
                />
              </div>

              {/* Overlapping Image */}
              <div className="absolute bottom-0 -right-4 md:-right-12 z-10 translate-y-10 md:translate-y-20">
                <div className="relative w-40 md:w-64 lg:w-80 aspect-square overflow-hidden rounded-full border-4 border-white">
                  <Image
                    src={office1}
                    alt="Meditation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
