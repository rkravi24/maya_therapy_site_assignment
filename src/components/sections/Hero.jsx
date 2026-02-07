import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary pt-28">
      {/* pt-28 = space for fixed navbar */}

      <div className="max-w-8xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 pb-12 md:pb-0 gap-4 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-2xl max-w-md md:max-w-lg h-120 md:h-180">
              <div className="absolute inset-0 rounded-t-full overflow-hidden">
                <Image src="/heroimg.jpg"  alt="Calm therapy space in Santa Monica"
                  fill className="object-cover" priority />
              </div>
            </div>
          </div>

          {/* TEXT — RIGHT ON DESKTOP */}
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-textDark mb-6">
              A place to rest, reflect, and reconnect
            </h1>

            <p className="text-base md:text-lg text-[#3A4A32] mb-10 max-w-xl mx-auto md:mx-0">
              Compassionate therapy for adults in Santa Monica, CA.
            </p>

            <button
              className="
                inline-flex items-center gap-2 border border-textDark px-10 py-4 text-sm uppercase tracking-wider
                text-textDark transition-all duration-300 ease-in-out hover:bg-textDark hover:text-white">
              Connect with me
              <span className="text-lg leading-none">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
