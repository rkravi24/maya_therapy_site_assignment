"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Who do you typically work with?",
    answer: "Answer goes here.",
  },
  {
    question: "What approaches do you use in therapy?",
    answer: "Answer goes here.",
  },
  {
    question: "Do you offer in-person or online therapy?",
    answer: "Answer goes here.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-primary py-20 md:py-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-65 md:w-110 h-105 md:h-155 overflow-hidden rounded-t-full">
            <Image src="/faq.jpg" alt="Decorative floral image" fill className="object-cover" priority/>
          </div>
        </div>

        {/* FAQ CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-textDark mb-12"> FAQs </h2>

          <div className="border-t border-textDark">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border-b border-textDark ${ isOpen ? "py-6" : "py-5"}`} >
                  {/* QUESTION */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex items-center justify-between text-left text-xl md:text-2xl text-textDark ${ isOpen ? "" : "px-0" }`} >
                    <span className="text-2xl md:text-3xl ">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span className="px-4 text-2xl md:text-3xl">{item.question}</span>
                    
                  </button>

                  {/* ANSWER */}
                  {isOpen && item.answer && (
                    <p className="mt-4 text-base text-[#3A4A32] px-6"> {item.answer} </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
