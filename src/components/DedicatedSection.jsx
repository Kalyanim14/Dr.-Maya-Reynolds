import Image from "next/image";
import office1 from "../assets/office1.jpeg";
import office2 from "../assets/office2.jpeg";
import Reveal from "./Reveal";

export default function DedicatedSection() {
  return (
    <section className="bg-[var(--color-background-alt)] py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Card 1 — Trauma-Informed Care */}
        <Reveal>
          <div
            className="
              bg-[var(--color-accent)]
              border border-[var(--color-primary)]/20
              rounded-2xl p-10
              grid grid-cols-1 md:grid-cols-[320px_1fr]
              gap-8
              items-start md:items-center
            "
          >
            {/* Office Image */}
            <Image
              src={office1}
              alt="Calm therapy office environment"
              className="w-full h-[240px] rounded-xl object-cover"
            />

            {/* Text Content */}
            <div className="max-w-xl">
              {/* Tag */}
              <span className="inline-block mb-3 text-xs tracking-wide uppercase text-[var(--color-primary)]/70">
                In-Person & Telehealth
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-4">
                Trauma-Informed Care
              </h2>

              <p className="text-[var(--foreground)]/80 leading-relaxed">
                Trauma affects more than memory—it shapes how the nervous system
                responds to stress, relationships, and everyday life. Trauma-informed
                care places safety, choice, and pacing at the center of therapy.
                <br /><br />

                Sessions take place in a quiet, private office designed to feel
                grounding and contained, allowing your nervous system to settle
                before deeper work begins.
                <br /><br />

                We focus first on stabilization and regulation, moving into deeper
                processing only when it feels supportive and manageable.
              </p>

              {/* Subtle Office Link */}
              <a
                href="#office"
                className="mt-4 inline-block text-sm text-[var(--color-primary)] underline underline-offset-4 hover:opacity-70"
              >
                View the therapy space
              </a>

              {/* CTA */}
              <p className="mt-6 text-sm italic text-[var(--foreground)]/70">
                A steady, respectful approach that prioritizes safety and trust.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 2 — Burnout & High Achievers */}
        <Reveal>
          <div
            className="
              bg-[var(--color-accent)]
              border border-[var(--color-primary)]/20
              rounded-2xl p-10
              grid grid-cols-1 md:grid-cols-[320px_1fr]
              gap-8
              items-start md:items-center
            "
          >
            {/* Office Image */}
            <Image
              src={office2}
              alt="Private therapy office seating area"
              className="w-full h-[240px] rounded-xl object-cover"
            />

            {/* Text Content */}
            <div className="max-w-xl">
              {/* Tag */}
              <span className="inline-block mb-3 text-xs tracking-wide uppercase text-[var(--color-primary)]/70">
                In-Person & Telehealth
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-4">
                Burnout, High Achievers & Professionals
              </h2>

              <p className="text-[var(--foreground)]/80 leading-relaxed">
                Many high-achieving professionals appear successful externally
                while feeling exhausted, disconnected, or overwhelmed internally.
                Burnout often develops through sustained pressure and chronic stress.
                <br /><br />

                In-person sessions provide a quiet, distraction-free environment
                away from work demands—creating space to slow down, reflect, and
                reset outside of performance roles.
                <br /><br />

                Therapy focuses on restoring balance, setting healthier boundaries,
                and supporting sustainable change.
              </p>

              {/* Subtle Office Link */}
              <a
                href="#office"
                className="mt-4 inline-block text-sm text-[var(--color-primary)] underline underline-offset-4 hover:opacity-70"
              >
                See where sessions take place
              </a>

              {/* CTA */}
              <p className="mt-6 text-sm italic text-[var(--foreground)]/70">
                Support designed for high performers who need space to recalibrate.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
