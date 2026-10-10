import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Camera,
  FileText,
  Shield,
  Clock,
  Wrench,
} from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Process: No Surprises",
  description:
    "Transparent pricing, written quotes before work starts, and a repair-first approach. See how LuminaSky Glass Services keeps every job honest and stress-free.",
  alternates: { canonical: "/our-process" },
};

const PROCESS_STEPS = [
  {
    icon: Camera,
    title: "Send a Photo or Book a Visit",
    description:
      "Text or email us a photo for a free quote. If we need to see the window in person, book a $30 site visit. That fee is credited toward your repair.",
  },
  {
    icon: FileText,
    title: "Written Price Before Any Work",
    description:
      "You get a clear, written quote before we pick up a single tool. Nothing is done without your approval.",
  },
  {
    icon: Camera,
    title: "We Photograph the Condition First",
    description:
      "Before we touch anything, we photograph your window or door so you have a record of its condition going in.",
  },
  {
    icon: Clock,
    title: "Most Repairs Done the Same Day",
    description:
      "We carry common parts and glass sizes in our trucks. Most hardware repairs are completed on the first visit.",
  },
  {
    icon: Shield,
    title: "Written Warranty on the Invoice",
    description:
      "Every job comes with a written warranty, printed right on your invoice. No fine print, no guesswork.",
  },
];

export default function OurProcessPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Process", url: "/our-process" },
  ]);

  return (
    <>
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
                Our Process
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            No Surprises.{" "}
            <span className="text-accent-light">Ever.</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Most homeowners dread calling a repair company because they
            don&apos;t know what the bill will look like. We do things
            differently. You know the price before we start, you approve every
            step, and you get a written warranty when we&apos;re done.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="steps-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              How It Works
            </span>
            <h2
              id="steps-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Five Steps, Zero Guesswork
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From the first photo you send to the warranty on your invoice,
              every step is designed to keep you informed and in control.
            </p>
          </div>

          <ol className="flex flex-col gap-5" aria-label="Our process steps">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm flex gap-5 items-start"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        className="w-5 h-5 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Repair First Promise */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="repair-first-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <Wrench className="w-7 h-7 text-accent" aria-hidden="true" />
              </div>
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                  Our Promise
                </span>
                <h2
                  id="repair-first-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight"
                >
                  Repair First. Always.
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                  <p>
                    If a repair will solve the problem, that is what we
                    recommend. We do not push replacements to increase a sale. We
                    only recommend replacing a window or part when the existing
                    one truly cannot be fixed.
                  </p>
                  <p>
                    Our technicians are trained to assess honestly. They will
                    tell you what is wrong, what it takes to fix it, and whether
                    a repair will hold up over time. If replacement is the better
                    path, they will explain exactly why so you can make an
                    informed decision.
                  </p>
                  <p>
                    This approach saves our customers real money and keeps
                    functional windows out of the landfill. It is the right thing
                    to do, and it is how we have built our reputation across the
                    GTA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Breaks During Work */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="glass-breaks-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Shield className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                  Our Guarantee
                </span>
                <h2
                  id="glass-breaks-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight"
                >
                  If Glass Breaks During Our Work
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                  <p>
                    In rare cases, glass can break during a hardware repair or
                    seal replacement. Older panes under stress, concealed cracks,
                    or a weakened seal can cause this even with careful handling.
                  </p>
                  <p className="font-semibold text-gray-900">
                    If that happens, we take full responsibility. We order a new
                    sealed unit right away and replace it at no cost to you.
                  </p>
                  <p>
                    You will never receive an unexpected bill because something
                    went wrong on our watch. That is our commitment, and it
                    applies to every job we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Link */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="warranty-link-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="warranty-link-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            Want the Full Warranty Details?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Every repair and replacement comes with a written warranty. Visit
            our{" "}
            <Link
              href="/warranty"
              className="text-primary font-semibold hover:underline"
            >
              warranty page
            </Link>{" "}
            to see exactly what is covered and for how long.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-primary" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to See the Difference?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Send us a photo for a free quote, or call to book a visit.
            Transparent pricing, honest advice, and no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
            >
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              Get a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
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
