"use client";

import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-secondary)] py-20 md:py-40 text-center text-[var(--color-background-alt)]">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Take your first step today.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-xl text-lg opacity-90">
            I believe therapy works best when clients feel respected, understood, and actively involved
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <button className="mt-25 border border-[var(--color-background-alt)] px-8 py-3 text-sm font-medium">
            <a href="/About#contact">GET IN TOUCH →</a>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
