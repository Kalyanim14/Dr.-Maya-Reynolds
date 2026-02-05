"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import faqImage from "../assets/faq.png";
import { useState } from "react";

const items = [
  { title: "How do I know if therapy is right for me?", description: "If you feel overwhelmed, stuck, or emotionally exhausted—even while functioning well—therapy can help. You don’t need to be in crisis to begin." },
  { title: "What kinds of concerns do you work with?", description: "I work with adults experiencing anxiety, burnout, trauma, chronic stress, and relationship challenges, particularly high-achieving individuals." },
  { title: "What does “trauma-informed care” mean?", description: "Therapy moves at your pace, with an emphasis on safety and stabilization before deeper work." },
  { title: "What if I’ve tried therapy before and it didn’t help?", description: "That’s a very common experience. Not every therapeutic approach or relationship is the right fit, and a trauma-informed, paced style of therapy can feel very different from what you may have tried before." },
  { title: "Do you offer online sessions?", description: "Yes. I offer in-person sessions in Santa Monica and telehealth for clients located in California." }
];

export default function BackgroundSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#fbf6f2] py-24">

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 gap-12 items-center">
          <Reveal y={48}>
            <div >
              <Image src={faqImage} alt="Lilac" className="mx-auto mb-8 h-auto w-full max-w-sm md:max-w-md lg:max-w-lg rounded-t-full" />
            </div>
          </Reveal>
          <div className="divide-y flex flex-col justify-center items-center text-3xl md:text-5xl font-semibold divide-[var(--color-primary)]/30">FAQs<br /><br />
            <hr />
            <div className="max-w-2xl mx-auto">
              {items.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border-b border-[var(--color-primary)]/30">
                    {/* Header */}
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex w-full items-center justify-between py-4 text-[var(--color-primary)] text-2xl font-medium"
                    >
                      {/* Plus Icon Animation */}
                      <span className="relative w-5 h-5">
                        {/* Horizontal line */}
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--color-primary)]/50 -translate-y-1/2" />

                        {/* Vertical line */}
                        <span
                          className={`absolute left-1/2 top-0 h-full w-[2px] bg-[var(--color-primary)]/50 -translate-x-1/2
                        transition-transform duration-300 ease-in-out
                        ${openIndex === i ? "-rotate-90" : "-rotate-0"}`}
                        />
                      </span>
                      <span className="ml-10">{item.title}</span>
                    </button>

                    {/* Description */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="pb-4 text-[var(--color-primary)]/80 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
