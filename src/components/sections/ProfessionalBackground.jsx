"use client";

import { useState } from "react";

const sections = [
  {
    title: "Education",
    content:"Doctor of Psychology (PsyD) in Clinical Psychology, with advanced training in evidence-based and trauma-informed therapeutic approaches for adults.",
  },
  {
    title: "Licensure",
    content: "Licensed Clinical Psychologist in the state of California, providing both in-person therapy and secure telehealth services to adult clients.",
  },
  {
    title: "Certifications & Training",
    content: "Trained in cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, with a strong focus on trauma, anxiety, and burnout treatment.",

  },
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState(0);

 return (
    <section className="bg-secondary py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-semibold text-textDark text-center mb-14">
          My Professional Background
        </h2>

        {/* ACCORDION */}
        <div className="border-t border-textDark">
          {sections.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-textDark"
              >
                {/* HEADER */}
                <button
                  onClick={() =>  setOpenIndex(isOpen ? null : index) }
                  className="w-full flex items-center justify-between py-6 text-left" >
                  <span className="text-2xl md:text-3xl text-textDark"> {item.title} </span>
                  <span className="text-2xl text-textDark"> {isOpen ? "−" : "+"} </span>
                </button>

                {/* CONTENT (animated) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-96" : "max-h-0"}`} >
                  <p className="pb-6 text-lg text-textDark leading-relaxed max-w-3xl">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
