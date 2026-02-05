"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.intersectionRatio < 0.5);
      },
      { threshold: 0.5 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${active
          ? "-translate-y-full bg-transparent"
          : "translate-y-0  bg-[#FBF7F0]/90 backdrop-blur-sm"}
      `}
      style={{ backgroundColor: active ? 'transparent' : 'rgba(251, 247, 240, 0.9)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo / Title */}
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
            Licensed Clinical Psychologist
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between gap-9 text-xl text-[var(--color-primary)]">
            <a href="/" className="hover:text-gray-900/50">Home</a>
            <a href="/#about" className="hover:text-gray-900/50">About</a>
            <a href="/About" className="hover:text-gray-900/50">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // X Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-background-alt)] border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4 text-center">
            <a
              href="/"
              className="text-xl text-[var(--color-primary)] hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-xl text-[var(--color-primary)] hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/About"
              className="text-xl text-[var(--color-primary)] hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
