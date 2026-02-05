"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import trauma from "../assets/trauma.jpg";
import perfection from "../assets/perfection.jpg";
import anxiety from "../assets/anxiety.jpg";

const items = [
  {
    title: "Stress & Anxiety Therapy",
    text: "Support to reduce chronic worry, tension, and overwhelm, helping you feel more grounded in daily life.",
    image: anxiety,
  },
  {
    title: "Trauma-Informed Care",
    text: "A trauma-informed approach that prioritizes safety, pacing, and nervous system regulation without overwhelm.",
    image: trauma,
  },
  {
    title: "Burnout & Perfectionism",
    text: "Therapy focused on easing pressure, restoring balance, and developing healthier, more sustainable ways of relating to work and self-expectations.",
    image: perfection,
  },
];

export default function Specialities() {
  return (
    <section className="bg-[var(--color-background-alt)] py-24 overflow-hidden">
      <Reveal y={100}>
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-16 text-center text-3xl font-semibold text-[var(--color-primary)]">
            What I Help With
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="border border-[var(--color-primary)]/30 bg-[var(--color-accent)] p-6">

                  <h3 className="mb-2 font-medium text-[var(--color-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--color-primary)]/80">
                    {item.text}
                  </p>

                  <div className="relative mt-8 aspect-square overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}
