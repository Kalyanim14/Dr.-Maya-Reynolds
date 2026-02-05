"use client";

import Reveal from "./Reveal";
import { useState } from "react";

const items = [
  { title: "Education", description: "blah blah" },
  { title: "Licensure", description: "blah blah" },
  { title: "Certifications", description: "blah blah" }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[var(--color-accent)] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="mb-10 flex justify-center text-3xl md:text-4xl font-semibold text-[var(--color-primary)]">
            My Professional Background
          </h2>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-b border-[var(--color-primary)]/30">
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-[var(--color-primary)] text-xl md:text-2xl font-medium text-left"
                >
                  {/* Plus Icon Animation */}
                  <span className="mr-6 md:mr-10 flex-1">{item.title}</span>
                  <span className="relative w-5 h-5 flex-shrink-0">
                    {/* Horizontal line */}
                    <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--color-primary)]/50 -translate-y-1/2" />

                    {/* Vertical line */}
                    <span
                      className={`absolute left-1/2 top-0 h-full w-[2px] bg-[var(--color-primary)]/50 -translate-x-1/2
                        transition-transform duration-300 ease-in-out
                        ${openIndex === i ? "-rotate-90" : "-rotate-0"}`}
                    />
                  </span>
                </button>

                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="pb-4 text-[var(--color-primary)]/80 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
