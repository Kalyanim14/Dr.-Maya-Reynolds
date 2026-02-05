import Image from "next/image";
import trauma from "../assets/trauma.jpg";
import anxiety from "../assets/anxiety.jpg";
import Reveal from "./Reveal";

export default function DedicatedSection() {
  return (
    <section className="bg-[var(--color-background-alt)] py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <Reveal>
        {/* Card 1 */}
        <div className="bg-[var(--color-accent)] border border-[var(--color-primary)]/20 rounded-2xl p-10 
                        grid grid-cols-1 md:grid-cols-[260px_1fr] 
                        gap-6 md:gap-8 items-center">

          {/* Image */}
          <Image
            src={trauma}
            alt="Trauma-Informed Care"
            className="aspect-square rounded-full object-cover mx-auto md:mx-0"
          />

          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-4">
              Trauma-Informed Care
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Trauma affects more than memory—it shapes how the nervous system responds to stress, relationships, and everyday life. Trauma-informed care recognizes this and places safety, choice, and pacing at the center of therapy.<br /><br />

              In our work together, we focus first on stabilization and regulation. This means helping your body and nervous system feel more grounded before exploring difficult experiences. Therapy is not about reliving trauma or pushing through painful memories, but about creating a sense of safety and control in the present.<br /><br />

              We move at a pace that feels manageable for you, whether you’re working through a single distressing event or long-standing, complex trauma. The goal is to support healing in a way that feels respectful, empowering, and sustainable—not overwhelming.<br />
              <br /><br />
              <span className="italic">This builds serious trust.</span>
            </p>
          </div>
        </div>
        </Reveal>
        <Reveal>
        {/* Card 2 */}
        <div className="bg-[var(--color-accent)] border border-[var(--color-primary)]/20 rounded-2xl p-10 
                        grid grid-cols-1 md:grid-cols-[260px_1fr] 
                        gap-6 md:gap-8 items-center">

          <Image
            src={anxiety}
            alt="Burnout and High Achievers"
            className="aspect-square rounded-full object-cover mx-auto md:mx-0"
          />

          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-4">
              Burnout, High Achievers & Professionals
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Many high-achieving professionals appear capable and successful on the outside while feeling exhausted, disconnected, or overwhelmed internally. Burnout often develops gradually—through chronic stress, high expectations, and the pressure to keep performing without rest.<br /><br />

              In therapy, we focus on understanding how stress, perfectionism, and over-responsibility affect both your emotional well-being and your nervous system. Rather than pushing for quick fixes, the work centers on slowing down, restoring balance, and developing sustainable ways to manage pressure.<br /><br />

              This approach supports you in reconnecting with your needs, setting healthier boundaries, and building a life that feels more regulated, meaningful, and aligned—not just productive.
              <br /><br />
              <span className="italic">Support that meets you where you are.</span>
            </p>
          </div>
        </div>
        </Reveal>

      </div>
    </section>
  );
}
