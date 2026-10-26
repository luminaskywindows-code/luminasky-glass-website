import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Phone, Mail, CheckCircle2, XCircle, Clock, Wrench } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Warranty", url: "/warranty" },
  { name: "Lifetime Warranty", url: "/lifetime-warranty" },
];

const FAQS = [
  {
    q: "Does the Lifetime Warranty transfer if I sell my property?",
    a: "Yes. The Lifetime Warranty stays with the property, not the person. If you sell, it passes to the new owner automatically. They just need the invoice number or the installation address to file a claim.",
  },
  {
    q: "What counts as seal failure?",
    a: "Seal failure means moisture or fogging appears between the panes of a sealed glass unit we installed. This happens when the perimeter seal breaks down and lets humid air inside. A single failed unit does not mean every unit in your home will fail.",
  },
  {
    q: "Is glass breakage covered?",
    a: "No. Glass broken by impact, break-ins, vandalism, storms, or accidents is not covered under any warranty. You would pay for both the replacement glass and the installation labour.",
  },
  {
    q: "Are window cranks, hinges, and locks covered under the Lifetime Warranty?",
    a: "No. Hardware carries our standard 2-year warranty on parts and labour. The Lifetime Warranty applies only to sealed glass units against seal failure.",
  },
  {
    q: "Do I need to register my warranty?",
    a: "No. Your invoice is your warranty. Keep it for your records and reference your invoice number if you ever need to file a claim.",
  },
  {
    q: "How do I file a Lifetime Warranty claim?",
    a: "Call or text 437-344-8490 with your invoice number, a photo of the fogging, and the address. We respond within 1 business day.",
  },
  {
    q: "Do I have the Lifetime Warranty on glass you installed last year?",
    a: "No. The Lifetime Warranty applies only to sealed glass units installed November 1, 2026 and later. Prior installations are covered under the warranty that was in effect at the time of installation (typically 3-year or 5-year). Call us with your invoice date to confirm your coverage.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Lifetime Warranty on Sealed Glass Units | LuminaSky Glass Services" },
  description:
    "Lifetime Warranty on every sealed glass unit against seal failure. Years 0-2: full coverage. Year 3+: replacement glass covered, you pay labour only.",
  alternates: { canonical: "/lifetime-warranty" },
  openGraph: {
    title: "Lifetime Warranty on Sealed Glass Units | LuminaSky Glass Services",
    description:
      "Lifetime Warranty on every sealed glass unit against seal failure. Years 0-2: full coverage. Year 3+: replacement glass covered, you pay labour only.",
    url: "/lifetime-warranty",
  },
};

export default function LifetimeWarrantyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-blue-200 flex-wrap">
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
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            LuminaSky Lifetime Warranty on Sealed Glass Units
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            LuminaSky backs every sealed glass unit we install with a Lifetime Warranty against seal failure. For as long as the glass is in your property, if the seal fails on glass we installed, we have you covered.
          </p>
        </div>
      </section>

      {/* Effective date notice */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-5">
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Effective Date:</strong> The Lifetime Warranty applies to sealed glass units installed <strong>November 1, 2026 and later</strong>. Installations before this date are covered under the warranty in effect at the time of installation (typically 3-year or 5-year). Call us with your invoice date to confirm your coverage.
          </p>
        </div>
      </div>

      {/* Scope notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-5">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Important:</strong> This Lifetime Warranty applies only to sealed glass units against seal failure (fogging). Hardware repairs (cranks, hinges, locks), window mechanisms, patio door rollers, and screens carry our standard 2-year warranty on parts and labour. Glass breakage is not covered under any warranty.
          </p>
        </div>
      </div>

      {/* How the Lifetime Warranty Works */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Coverage Breakdown
            </span>
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              How the Lifetime Warranty Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Years 0-2 */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
                  Years 0-2
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Coverage</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If the seal fails on a sealed glass unit we installed, we replace it at no cost to you.
              </p>
              <ul className="space-y-3">
                {["Free replacement glass unit", "Free installation labour", "Free service call"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Years 3+ */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Years 3+ Lifetime
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Replacement Credit</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If the seal fails after year 2, we cover the cost of the replacement glass unit. Customer pays for installation and standard service call. Pricing varies by size, location, and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="comparison-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="comparison-heading" className="text-3xl font-bold text-gray-900">
              Coverage at a Glance
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">What Failed</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-900">Years 0-2</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-900">Years 3+ Lifetime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Sealed glass unit (seal failure / fogging)</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Free glass + free labour</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">Free glass, you pay labour</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Cranks, hinges, locks, rollers</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Free parts + free labour</td>
                  <td className="px-6 py-4 text-center text-gray-400">Standard warranty ended</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Glass breakage (impact, vandalism)</td>
                  <td className="px-6 py-4 text-center text-gray-400">Not covered</td>
                  <td className="px-6 py-4 text-center text-gray-400">Not covered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is NOT covered */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="not-covered-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <h2 id="not-covered-heading" className="text-2xl font-bold text-gray-900 mb-6">
                What the Lifetime Warranty Covers
              </h2>
              <ul className="space-y-4">
                {[
                  "Seal failure (fogging) on sealed glass units we installed",
                  "Applies for as long as the glass remains in the property",
                  "No registration required. Your invoice is your warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What Is Not Covered
              </h2>
              <ul className="space-y-4">
                {[
                  "Glass breakage from impact, break-ins, vandalism, or storms",
                  "Window hardware (cranks, hinges, locks) after the 2-year period",
                  "Damage from building settlement or structural changes",
                  "Modifications or repairs done by other contractors",
                  "Window film, tint or coatings applied to the glass after installation",
                  "Windows or glass not installed by LuminaSky",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty terms */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="terms-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="terms-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Warranty Terms
          </h2>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 space-y-4">
            {[
              { icon: Shield, text: "The Lifetime Warranty begins on the date of installation printed on your invoice." },
              { icon: Clock, text: "\"Lifetime\" means for as long as the sealed glass unit we installed remains in the property where it was installed." },
              { icon: Wrench, text: "Coverage applies to sealed glass units (IGUs) only. Single-pane glass, hardware, screens, and accessories are covered under our standard 2-year warranty." },
              { icon: Shield, text: "The warranty is transferable. If the property is sold, it passes to the new owner automatically. The new owner only needs the original invoice number or the installation address." },
              { icon: CheckCircle2, text: "No registration required. Your invoice is your proof of warranty." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Lifetime Warranty FAQ
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to file a claim */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="claim-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="claim-heading" className="text-3xl font-bold text-gray-900 mb-4">
              How to File a Warranty Claim
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Call or text{" "}
              <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">{PHONE}</a>{" "}
              with three things:
            </p>
          </div>

          <ol className="flex flex-col gap-5">
            {[
              { step: "1", title: "Your Invoice Number", desc: "This lets us pull up the original job details quickly." },
              { step: "2", title: "A Photo of the Fogging", desc: "A clear photo of the condensation between the panes." },
              { step: "3", title: "The Installation Address", desc: "So we can match it to the original work order." },
            ].map((item) => (
              <li key={item.step} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-5 items-start">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-center text-gray-600 text-sm mt-8 leading-relaxed bg-white border border-gray-100 rounded-xl p-5">
            We respond within <strong className="text-gray-900">1 business day</strong> with next steps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-primary" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Your Warranty?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            If something does not look right with glass we installed, get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-blue-200 text-sm flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
            Or email us:{" "}
            <a href={EMAIL_HREF} className="text-white font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded">
              {EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
