import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE_HREF } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Insurance Claims", url: "/insurance-claims" },
];

const DOCUMENTATION = [
  "Detailed itemized invoice: materials, glass type and labour, listed separately.",
  "Before and after photos, dated, of the damage and the completed repair.",
  "Measurements and glass specifications: size and glass type (tempered, laminated, Low-E, sealed unit), and why that type is required.",
  "Emergency securing details, if we boarded up: date, time of the call and time on site.",
  "A written estimate before the repair, if your insurer wants to see the cost before you go ahead.",
];

const YOUR_STEPS = [
  { step: "1", title: "Make the area safe", desc: "After a break-in, also get a police report number." },
  { step: "2", title: "Call us, 24/7", desc: "If needed, we secure the opening as quickly as possible and photograph the damage.", link: { href: "/emergency-glass-repair", text: "Emergency glass repair" } },
  { step: "3", title: "Contact your insurer to start your claim", desc: "You handle all communication with them." },
  { step: "4", title: "Ask us for a written estimate", desc: "If your insurer wants one before approving the repair." },
  { step: "5", title: "We complete the repair", desc: "And give you the itemized invoice and job documentation to submit with your claim." },
];

const FAQS = [
  {
    q: "Do you deal with my insurance company?",
    a: "No. You handle the claim directly with your insurer. We provide a detailed invoice and job documentation suitable for your claim, and you submit it to them.",
  },
  {
    q: "Do you bill my insurance company directly?",
    a: "No. We invoice you, and you submit our invoice and documentation to your insurer for reimbursement under your policy.",
  },
  {
    q: "What documents will my insurer want?",
    a: "Usually photos of the damage, a police report number for break-ins, and an itemized invoice or estimate for the repair. We provide the repair-related documents; the police report and the claim itself come from you.",
  },
  {
    q: "Should I call my insurer or a glass company first?",
    a: "Secure the property first. An open window or storefront risks further damage, and most policies expect you to take reasonable steps to prevent it. Call us to board up and photograph the damage, then contact your insurer.",
  },
  {
    q: "Does home insurance cover broken windows in Ontario?",
    a: "Many policies cover sudden, accidental glass breakage, minus your deductible, while gradual problems like fogged sealed units or worn hardware usually aren’t covered. Check with your insurer or broker; only they can confirm your coverage.",
  },
  {
    q: "Is it worth claiming for a single broken window?",
    a: "Sometimes not. If the repair costs less than or close to your deductible, paying directly may be simpler. We give you a written price first so you can decide.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Glass Damage Insurance Claim Documents | LuminaSky",
  },
  description:
    "Filing an insurance claim for broken glass? We repair the damage and give you the itemized invoice, photos and measurements you need for your claim.",
  alternates: { canonical: "/insurance-claims" },
  openGraph: {
    title: "Glass Damage Insurance Claim Documents | LuminaSky",
    description:
      "Filing an insurance claim for broken glass? We repair the damage and give you the itemized invoice, photos and measurements you need for your claim.",
    url: "/insurance-claims",
  },
};

export default function InsuranceClaimsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateServiceSchema(
              "Glass Repair",
              "/insurance-claims",
              "LuminaSky Glass Services repairs broken glass and provides detailed documentation for insurance claims across Toronto and the GTA."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              {BREADCRUMBS.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index < BREADCRUMBS.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-white transition-colors">{crumb.name}</Link>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span className="text-white font-medium" aria-current="page">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Documentation You Need for Your Glass Damage Insurance Claim
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              If your broken glass is covered by your home or business insurance, you file the claim with your insurer, and we give you the documentation you need to do it. We repair the damage, then provide a detailed, itemized invoice and job documentation suitable for your claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call 437-344-8490
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              >
                Send Us Photos of the Damage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="how-it-works-heading" className="text-3xl font-bold text-gray-900 mb-6">
            How It Works: You Handle the Claim, We Provide the Paperwork
          </h2>
          <p className="text-gray-600 leading-relaxed">
            LuminaSky is your glass repair company, not your claims handler. We don&apos;t file, process or manage insurance claims, and we don&apos;t deal with insurance companies or bill them on your behalf. You stay in control of your claim and your communication with your insurer. Our job is to repair the damage properly and to give you clear, complete documentation to submit.
          </p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="documentation-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="documentation-heading" className="text-3xl font-bold text-gray-900 mb-8">
            What We Provide for Your Claim
          </h2>
          <ul className="space-y-3">
            {DOCUMENTATION.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Your Steps */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="steps-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="steps-heading" className="text-3xl font-bold text-gray-900 mb-8">
            Your Steps
          </h2>
          <div className="space-y-6">
            {YOUR_STEPS.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                    {item.link && (
                      <>
                        {" "}
                        <Link href={item.link.href} className="text-primary font-semibold hover:underline">
                          {item.link.text} &rarr;
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is Broken Glass Covered? */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="coverage-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="coverage-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Is Broken Glass Covered by Insurance?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            It depends on your policy. Many home and commercial policies cover sudden glass breakage, such as storm damage, break-ins and accidents, and the cost of reasonable steps to prevent further damage, like a board-up. Your deductible applies. For a smaller repair, paying directly can be simpler than claiming; we give you the price first so you can decide. Only your insurer or broker can confirm what your policy covers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We aren&apos;t an insurance company or broker, and we can&apos;t advise on coverage or deal with your insurer for you.
          </p>
          <Link href="/window-repair-cost" className="text-primary font-semibold hover:underline">
            What affects the cost? &rarr;
          </Link>
        </div>
      </section>

      {/* Commercial and Condo */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="commercial-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="commercial-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Commercial and Condo Properties
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For storefronts, offices and condo buildings, we provide the same documentation to the owner, tenant, property manager or condo board who is filing the claim.{" "}
            <Link href="/commercial-glass-repair" className="text-primary font-semibold hover:underline">Commercial glass repair</Link>
            {" | "}
            <Link href="/property-managers" className="text-primary font-semibold hover:underline">Property managers</Link>
            {" | "}
            <Link href="/blog/condo-window-repair-who-pays-ontario" className="text-primary font-semibold hover:underline">Who pays for condo window repair in Ontario?</Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Insurance Claim FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Broken Glass? Get It Repaired and Documented"
        subtitle="Call 437-344-8490 or WhatsApp us photos of the damage."
      />
    </>
  );
}
