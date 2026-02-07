import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Intro() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 md:px-16">

        {/* TEXT SECTION (layout untouched) */}
        <div className="max-w-xl mx-auto md:mx-0 order-2 md:order-1">

          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold text-textDark mb-6">
              Hi, I’m Dr. Maya Reynolds.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-base md:text-lg text-[#3A4A32] leading-relaxed mb-10">
              I’m a licensed clinical psychologist based in Santa Monica. I offer a calm,
              supportive space where we can slow down and explore what’s been weighing on you—whether that’s
              anxiety, burnout, or the lingering impact of past experiences.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <a
              href="#"
              className="
                inline-flex items-center gap-2
                border border-textDark
                px-8 py-4
                text-sm uppercase tracking-wider
                text-textDark
                transition-all duration-300
                hover:bg-textDark hover:text-white
              "
            >
              Let’s chat →
            </a>
          </Reveal>
        </div>

        {/* IMAGE SECTION (structure untouched) */}
        <div className="relative flex justify-center order-1 md:order-2">

          {/* ARCHED IMAGE */}
          <div className="relative w-72 md:w-100 h-105 md:h-150 overflow-hidden rounded-t-full">
            <Reveal className="absolute inset-0">
              <Image
                src="/Dr.MayaReynolds.png"
                alt="Therapy lifestyle imagery"
                fill
                priority
                className="object-cover"
              />
            </Reveal>
          </div>

          {/* CIRCULAR OVERLAY IMAGE */}
          <div className="absolute -bottom-4 -right-4 md:right-0 md:-bottom-10 w-36 h-36 md:w-65 md:h-65 rounded-full overflow-hidden">
            <Reveal className="absolute inset-0" delay={300}>
              <Image
                src="/img.jpg"
                alt="Decorative floral imagery"
                fill
                className="object-cover"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
