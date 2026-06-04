import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { HOMEPAGE_FAQS } from "@/lib/faq-data";

export function FAQSection() {
  return (
    <section
      className="py-20 px-4 md:px-8 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Quick answers about our glass and door repair services."
          id="faq-heading"
        />

        <div className="space-y-5">
          {HOMEPAGE_FAQS.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            View all FAQs
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
