"use client";
import Image from 'next/image';
import office from '../assets/office1.jpeg';
import office1 from '../assets/office2.jpeg';
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] pt-16 pb-6 text-center text-lg text-[var(--color-foreground)] px-4">
      <Reveal delay={0.3}>
        <div className="flex flex-wrap justify-center gap-6 mb-8 underline">
          <span>Privacy & Cookies Policy</span>
          <span>Good Faith Estimate</span>
          <span>Website Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>

        <div className="mb-8">
          Website Template Credits: <u>Go Bloom Creative</u>
        </div>

        <div className="text-sm md:text-base">All Rights Reserved © 2026 Dr. Maya Reynolds psyd.</div>
      </Reveal>
    </footer>
  );
}
