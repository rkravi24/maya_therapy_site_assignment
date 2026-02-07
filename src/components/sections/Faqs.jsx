"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "Who do you typically work with?",
    answer:
      "I primarily work with adults who feel overwhelmed by anxiety, trauma, burnout, or chronic stress. Many of my clients are thoughtful, high-achieving individuals who appear functional on the outside but feel exhausted or emotionally strained internally.",
  },
  {
    question: "What approaches do you use in therapy?",
    answer:
      "My work integrates evidence-based approaches such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. Sessions are collaborative, structured, and paced to support both insight and emotional regulation.",
  },
  {
    question: "Do you offer in-person or online therapy?",
    answer:
      "I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located in California. Both options are designed to feel supportive, private, and grounded.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-primary py-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">

        {/* LEFT IMAGE */}
        <Reveal>
          <div className="flex justify-center">
            <div className="relative w-65 md:w-110 h-105 md:h-155 overflow-hidden rounded-t-full">
              <Image
                src="/faq.jpg"
                alt="Decorative floral image"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* FAQ CONTENT */}
        <div>

          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold text-textDark mb-12">
              FAQs
            </h2>
          </Reveal>

          <div className="border-t border-textDark">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={index} delay={index * 120}>
                  <div
                    className={`border-b border-textDark ${
                      isOpen ? "py-6" : "py-5"
                    }`}
                  >
                    {/* QUESTION */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex items-center w-full text-left text-textDark"
                    >
                      <span className="text-2xl md:text-3xl">
                        {isOpen ? "−" : "+"}
                      </span>
                      <span className="px-4 text-xl md:text-2xl">
                        {item.question}
                      </span>
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <p className="mt-4 text-base text-[#3A4A32] px-6">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
