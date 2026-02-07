import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="bg-secondary py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-16">

        {/* TEXT */}
        <div className="max-w-7xl mb-16">
          <h2 className="text-3xl md:text-4xl text-center font-semibold text-textDark mb-6">
            My Office
          </h2>

          <p className="text-base text-center md:text-lg text-[#3A4A32]">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding. With natural light and a comfortable,
            uncluttered environment, many people find that simply arriving
            helps them begin to settle.
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Image 1 */}
          <div className="relative w-full h-90 md:h-105 rounded-xl overflow-hidden">
            <Image src="/office1.jpeg" alt="Therapy office with natural light in Santa Monica" fill className="object-cover"/>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-90 md:h-105 rounded-xl overflow-hidden">
            <Image src="/office2.jpeg" alt="Calm and private counseling space" fill className="object-cover"/>
          </div>

        </div>

        {/* ADDRESS */}
        <div className="mt-12 text-sm text-[#3A4A32]">
          <p>
            <strong>Office location:</strong> 123th Street 45 W, Santa Monica, CA 90401
          </p>
        </div>

      </div>
    </section>
  );
}
