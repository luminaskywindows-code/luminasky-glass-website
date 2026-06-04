import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FAQ_CATEGORIES, ALL_FAQS } from "@/lib/faq-data";
import { generateFAQSchema } from "@/lib/schema";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ - Glass & Door Repair in the GTA",
  description:
    "Common questions about foggy glass repair, window crank fixes, patio door glass, emergency service, and glass repair across Toronto and the GTA. Get answers from LuminaSky.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(ALL_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">FAQ</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our glass and door repair services
            across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {FAQ_CATEGORIES.map((category, catIdx) => (
            <div key={category.title} className={catIdx > 0 ? "mt-12" : ""}>
              {/* Category heading */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-accent/30">
                {category.title}
              </h2>

              {/* Questions */}
              <div className="space-y-6">
                {category.items.map((faq) => (
                  <div key={faq.q} className="bg-gray-50 rounded-xl p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            We're happy to help. Reach out for a free quote or to discuss your
            project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call {PHONE}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors border border-white/20"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
