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
      className={`
        sticky top-0 z-50
        transition-all duration-300 ease-out
        ${active
          ? "-translate-y-full bg-transparent"
          : "translate-y-0 bg-[var(--background)]/90 backdrop-blur-sm"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo / Title */}
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--foreground)]">
            Licensed Clinical Psychologist
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-9 text-lg text-[var(--color-primary)]">
            <a href="/" className="transition-opacity hover:opacity-70">
              Home
            </a>
            <a href="/#about" className="transition-opacity hover:opacity-70">
              About
            </a>
            <a href="/About" className="transition-opacity hover:opacity-70">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[var(--foreground)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              /* X Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="
            md:hidden absolute top-full left-0 w-full
            bg-[var(--color-background-alt)]
            border-b border-[var(--color-primary)]/20
            shadow-lg
            py-6 px-4
            flex flex-col gap-4 text-center
          ">
            <a
              href="/"
              className="text-lg text-[var(--color-primary)] transition-opacity hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-lg text-[var(--color-primary)] transition-opacity hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/About"
              className="text-lg text-[var(--color-primary)] transition-opacity hover:opacity-70"
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
