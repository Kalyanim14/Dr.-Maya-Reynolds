import Image from "next/image";
import office from "../assets/office1.jpeg";
import office1 from "../assets/office2.jpeg";
import Reveal from "./Reveal";

export default function Office() {
  return (
    <section id="office" className="bg-[var(--color-secondary)] py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Top: Heading + Intro + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                Therapy Environment & Location
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg text-white/90 leading-relaxed">
                My Santa Monica office is a quiet, private space designed to feel
                calming, grounded, and welcoming — a place where you can slow
                down, breathe, and feel supported.
              </p>
            </Reveal>
          </div>

          {/* Office Images */}
          <Reveal delay={0.2}>
            <div className="flex gap-6 overflow-x-auto no-scrollbar">
              <Image
                src={office}
                alt="Therapy office interior"
                className="rounded-2xl w-[300px] h-[220px] object-cover flex-shrink-0"
              />
              <Image
                src={office1}
                alt="Therapy office seating area"
                className="rounded-2xl w-[300px] h-[220px] object-cover flex-shrink-0"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom: Details + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Map */}
          <Reveal delay={0.15}>
            <div className="w-full h-[360px] overflow-hidden rounded-2xl grayscale contrast-125 brightness-95">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16773.348521226086!2d-118.50350899841834!3d34.01374850853727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sin!4v1770214044211!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Office Details */}
          <div className="text-white space-y-10">

            <Reveal delay={0.2}>
              <div>
                <h3 className="text-3xl font-semibold mb-4">
                  My Office
                </h3>
                <p className="text-lg leading-relaxed text-white/90">
                  123 W 45th Street<br />
                  Santa Monica, CA 90401
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  Services & Availability
                </h4>
                <p className="text-lg leading-relaxed text-white/90">
                  In-person and telehealth sessions (California residents only)
                  <br /><br />
                  Monday – Friday<br />
                  10:00 AM – 6:00 PM
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
