"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import supportImage from '../assets/happy_life.jpeg';

const points = [
  "Persistent feelings of sadness or hopelessness",
  "Trouble focusing or making decisions",
  "Difficulty maintaining relationships",
  "Feeling constantly exhausted or unmotivated",
  "A pervasive sense of being overwhelmed",
];

export default function SupportSection() {
  return (
    <section id="SuppportSection" className="bg-[var(--color-accent)]">
      <div className="mx-auto grid max-w grid-cols-1 md:grid-cols-2 sm:grid-cols-1">

        {/* Image */}
        <div className="relative aspect-[7/8] h-full">
          <Image
            src={supportImage}
            alt="Support"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex justify-between flex-col">
          <div className="px-6 py-12 md:px-12 lg:px-16 lg:py-24">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--color-foreground)]">
                How Therapy Works With Me
              </h2>
            </Reveal><br />

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-black/80">
                Therapy with me is collaborative, paced, and grounded in safety. We begin by focusing on what you’re experiencing in the present—your stress, emotions, and patterns—rather than pushing into the past before you’re ready.
              </p>
            </Reveal><br />

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-black/80">
                Together, we work to understand what’s contributing to your distress, develop practical tools for coping and regulation, and create space for reflection and growth. Therapy is not about fixing you, but about helping you reconnect with yourself, build resilience, and move forward with greater clarity and ease.
              </p>
            </Reveal><br />

            <Reveal delay={0.5}>
              <p className="mt-6 text-lg text-black/80">
                I use a trauma-informed approach, which means sessions move at your pace. The priority is helping you feel more regulated and supported in your day-to-day life before exploring deeper or more difficult experiences.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.6}>
            {/* BUTTON */}
            <button
              className="
                group mt-auto w-full
                inline-flex items-center gap-2
                border-t border-[var(--color-foreground)]
                px-4 md:px-8 lg:px-16 py-5 font-medium
                text-lg text-[var(--color-foreground)]
                justify-center
                transition-all duration-1000 ease-out
                hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]
              "
            ><a href="/About">
                WORK WITH ME
              </a>
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
      </div>
    </section>
  );
}
