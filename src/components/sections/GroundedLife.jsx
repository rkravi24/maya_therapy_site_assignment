import Image from "next/image";

export default function GroundedLife() {
  return (
    <section className="bg-secondary">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* TEXT SECTION */}
        <div
          className="relative max-w-3xl mx-auto px-6 md:px-16 pt-14 md:pt-24 pb-28">
          {/* CONTENT */}
          <h2 className="text-3xl md:text-5xl font-semibold text-textDark mb-6"> Live a more grounded life. </h2>
          <p className="text-base md:text-lg text-[#3A4A32] mb-4">
            Life can feel overwhelming—especially when you’re trying to balance
            professional demands, personal responsibilities, and internal  pressure to keep going.
          </p>

          <p className="text-base md:text-lg text-[#3A4A32]">
            It’s common to feel alone in these experiences, but you don’t have to
            navigate them by yourself. Therapy can be a space for support, reflection, and meaningful change.
          </p>

          {/* BUTTON – FIXED TO BOTTOM OF SECTION */}
          <a
            href="/#"
            className="
              absolute bottom-0 left-0 w-full inline-flex items-center justify-center  border-t border-textDark
              py-6 text-sm uppercase tracking-wider
              text-textDark transition-all duration-300 ease-in-out hover:bg-textDark hover:text-white
            ">
            Get in touch
            <span className="text-lg leading-none ml-2">→</span>
          </a>
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-105 md:h-150">
          <Image src="/groundlife.jpg" alt="Calm, grounding lifestyle imagery" fill priority className="object-cover"/>
        </div>
      </div>
    </section>
  );
}
