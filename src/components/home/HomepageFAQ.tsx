"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HOMEPAGE_SCHEMA_FAQS } from "@/lib/homepage-faq-data";

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      className="py-20 px-4 md:px-8 bg-white"
      aria-labelledby="homepage-faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="homepage-faq-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Common questions about glass repair, warranty, and service across
            the GTA
          </p>
        </div>

        <div className="space-y-3">
          {HOMEPAGE_SCHEMA_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.a}
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
