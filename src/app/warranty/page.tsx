import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Phone, Mail, CheckCircle2, XCircle } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Warranty Coverage",
  description:
    "LuminaSky Glass Services warranty details: 1 year on hardware repairs, 3 years on sealed glass units. Learn what is covered and how to make a claim.",
  alternates: { canonical: "/warranty" },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Warranty", url: "/warranty" },
]);

const COVERED = [
  "Defective parts supplied and installed by LuminaSky",
  "Seal failure on sealed glass units within the warranty period",
  "Workmanship issues arising from our installation",
  "Glass breakage within the applicable warranty period",
];

const NOT_COVERED = [
  "Structural movement or foundation settling",
  "Damage from external impact after installation",
  "Modifications or repairs performed by others",
  "Normal wear on moving parts beyond the warranty period",
];

const CLAIM_STEPS = [
  {
    step: "1",
    title: "Contact Us",
    desc: (
      <>
        Call us at{" "}
        <a
          href={PHONE_HREF}
          className="text-primary font-semibold hover:underline"
        >
          {PHONE}
        </a>{" "}
        or email{" "}
        <a
          href={EMAIL_HREF}
          className="text-primary font-semibold hover:underline"
        >
          {EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    step: "2",
    title: "Describe the Issue",
    desc: "Let us know what happened. Photos are helpful but not required.",
  },
  {
    step: "3",
    title: "We Schedule an Inspection",
    desc: "A technician visits your home to assess the problem at no charge.",
  },
  {
    step: "4",
    title: "Covered? We Repair or Replace",
    desc: "If the issue falls within warranty, we repair or replace at no charge to you.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <li className="text-white font-medium" aria-current="page">
                Warranty
              </li>
            </ol>
          </nav>
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Warranty
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            We stand behind every repair. Our warranty covers parts, labour, and
            sealed glass units so you can have complete peace of mind.
          </p>
        </div>
      </section>

      {/* Window Hardware Repairs */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="hardware-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hardware Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                Hardware Warranty
              </span>
              <h2
                id="hardware-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Window Hardware Repairs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                All window hardware repairs, including cranks, hinges, locks, and
                handles, are covered by a{" "}
                <strong className="text-gray-900">
                  1-year warranty on parts and labour
                </strong>
                . If a part we installed fails within 12 months, we replace it at
                no charge.
              </p>
              <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-4">
                <Shield
                  className="w-6 h-6 text-primary shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-gray-900">
                  1 Year on Parts and Labour
                </p>
              </div>
            </div>

            {/* Sealed Glass Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                Glass Warranty
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                id="glass-heading"
              >
                Sealed Glass Units
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sealed glass units (IGUs) are covered by a{" "}
                <strong className="text-gray-900">
                  3-year warranty against fogging and seal failure
                </strong>
                . If condensation appears between the panes within that period,
                we replace the unit. Glass breakage is covered for{" "}
                <strong className="text-gray-900">1 year</strong> from the date
                of installation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-4">
                  <Shield
                    className="w-6 h-6 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-gray-900">
                    3 Years on Fogging and Seal Failure
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-4">
                  <Shield
                    className="w-6 h-6 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-gray-900">
                    1 Year on Glass Breakage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Covered / Not Covered */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="covered-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Covered */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2
                id="covered-heading"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                What Is Covered
              </h2>
              <ul className="space-y-4" aria-label="Covered items">
                {COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Covered */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What Is Not Covered
              </h2>
              <ul className="space-y-4" aria-label="Items not covered">
                {NOT_COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle
                      className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Make a Warranty Claim */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="claim-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Filing a Claim
            </span>
            <h2
              id="claim-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              How to Make a Warranty Claim
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              If you believe your repair is covered, follow these four simple
              steps.
            </p>
          </div>

          <ol className="flex flex-col gap-5" aria-label="Warranty claim steps">
            {CLAIM_STEPS.map((item) => (
              <li
                key={item.step}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm flex gap-5 items-start"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-center text-gray-500 text-sm mt-8 leading-relaxed">
            Want to learn more about how we work?{" "}
            <Link
              href="/our-process"
              className="text-primary font-semibold hover:underline"
            >
              See our process
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 md:px-8 bg-primary"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Have a Warranty Question?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            If something does not look right with a recent repair, get in touch.
            We will take care of it.
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
            <a
              href={EMAIL_HREF}
              className="text-white font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
