import Image from "next/image";

export default function NotAlone() {
    return (
        <section className="">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE */}
                <div className="relative w-full min-h-105 md:min-h-162">
                    <Image
                        src="/alone.jpg"
                        alt="Calm, grounding lifestyle imagery"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* TEXT */}
                <div className="bg-secondary max-w-3xl pt-24 flex flex-col justify-center">

                    <div className="px-6 md:px-14">
                        {/* HEADING */}
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#2E3F1E] leading-tight mb-8">
                            You don’t have to do this all <em>alone</em>.
                        </h2>

                        {/* INTRO */}
                        <p className="text-lg md:text-xl text-[#2E3F1E] mb-8">
                            If any of these feel familiar, you’re not alone.
                        </p>

                        {/* LIST */}
                        <ul className="list-disc pl-6 space-y-5 text-lg md:text-xl text-[#2E3F1E] mb-10">
                            <li>Feeling anxious or tense much of the time</li>
                            <li>Getting stuck in overthinking or second-guessing yourself</li>
                            <li>Feeling disconnected in relationships, even when you care deeply</li>
                            <li>Pushing through exhaustion or burnout just to keep going</li>
                            <li>Carrying a constant sense of internal pressure or emotional strain</li>
                        </ul>

                        {/* FOOTER */}
                        <p className="text-lg md:text-xl text-[#2E3F1E] mb-16">
                           With care and support, we can work through what life is bringing your way—together.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className="">
                        <a
                            href="#" className=" inline-flex items-center justify-center w-full
                            border-t border-textDark py-6 text-sm uppercase tracking-wider
                            not-even:text-textDark transition-all duration-300 hover:bg-textDark hover:text-white">
                            Work with me
                             <span className="text-lg leading-none ml-2">→</span>
                        </a>
                        
                    </div>

                </div>
            </div>
        </section>
    );
}
