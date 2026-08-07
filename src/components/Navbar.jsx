"use client";

import { useState } from "react";

const links = ["About", "Projects", "Experience", "Skills", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-[#f7f8f5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-slate-950"
        >
          KM<span className="text-teal-700">.</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition hover:text-teal-700"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="rounded border border-slate-300 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-[#f7f8f5] px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}