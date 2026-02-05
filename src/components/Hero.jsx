"use client";

import Image from "next/image";
import maya from "../assets/Dr. Maya Reynolds.png";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="bg-[#FBF7F0]" id="hero">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image – slide up from bottom */}
          <Reveal y={48}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md lg:max-w-xl overflow-hidden rounded-t-full">
              <Image
                src={maya}
                alt="Dr. Maya Reynolds"
                fill
                priority
                className="object-cover transition-transform duration-700 will-change-transform"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="text-center lg:text-left pb-10 lg:pb-0">
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-[#2E3D1F]">
                Dr. Maya Reynolds, <p className="text-3xl">PsyD</p>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 sm:mt-6 text-xl sm:text-2xl text-[#2E3D1F]/80">
                Commited to provide a better solution to all your psychological Problems.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 sm:mt-10">
                <a
                  href="/About"
                  className="group inline-flex items-center gap-2 border border-[var(--color-primary)] px-8 py-3 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-background-alt)]"
                >
                  CONNECT WITH ME
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
