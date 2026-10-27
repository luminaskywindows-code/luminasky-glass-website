import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ChevronRight,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  SERVICES,
  PHONE_HREF,
} from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const HERO_IMAGE = {
  src: "/images/services/window-screens-service.jpg",
  alt: "Sliding patio door with screen door. Window and Door Screens service by LuminaSky",
};

const BENEFITS = [
  "We measure and install ourselves, no subcontractors in your home",
  "Frame colour matched to your existing windows",
  "One visit for the whole house instead of one screen at a time",
  "Pet-resistant and solar mesh options available",
  "Sliding patio door screen rollers and tracks repaired",
];

const PROCESS = [
  {
    step: "Send a Photo",
    desc: "Text us a photo of the screen and the rough size on WhatsApp.",
  },
  {
    step: "Get a Quote",
    desc: "We reply with a price. No visit needed for most screen quotes.",
  },
  {
    step: "We Measure",
    desc: "On install day we measure on-site so the screen fits perfectly.",
  },
  {
    step: "Install",
    desc: "New mesh or frame installed on the spot. Clean up and done.",
  },
];

const FAQS = [
  {
    q: "Can you repair my window screen, or do I need a new one?",
    a: "If the frame is in good shape, we just replace the mesh. If the frame is bent, broken or missing, we make a new custom screen.",
  },
  {
    q: "Do I have to be home?",
    a: "For most ground-floor screens, no. We can measure and install from outside if you leave the screens accessible.",
  },
  {
    q: "Do you do apartment and condo screens?",
    a: "Yes. We work with individual owners, condo boards and property managers across the GTA.",
  },
  {
    q: "How much does window screen repair cost?",
    a: "It depends on the size and how many screens you have. Send us a photo and we'll give you a free quote, usually the same day.",
  },
  {
    q: "Can you make a screen for a window that never had one?",
    a: "Yes. We measure the window and make a custom screen to fit.",
  },
];

const RELATED_SLUGS = ["screen-storm-doors", "foggy-windows", "window-cranks"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Window Screens", url: "/window-screens" },
];

export const metadata: Metadata = {
  title: "Window Screen Repair Toronto & Replacement",
  description:
    "Torn, bent or missing window screens? LuminaSky repairs and replaces window and patio door screens across the GTA. Call 437-344-8490.",
  alternates: { canonical: "/window-screens" },
};

export default function WindowScreensPage() {
  const relatedServices = SERVICES.filter((s) =>
    RELATED_SLUGS.includes(s.slug)
  ).slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateServiceSchema(
              "Window Screen Repair & Replacement",
              "/window-screens",
              "LuminaSky Glass Services repairs and replaces window and patio door screens across Toronto and the GTA.",
              { minPrice: 75, maxPrice: 250, priceDescription: "Per screen, standard window sizes." }
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Window screens hero section"
      >
        <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
          <Image
            src={HERO_IMAGE.src}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid gap-10 items-center grid-cols-1 lg:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
                  {BREADCRUMBS.map((crumb, index) => (
                    <li key={crumb.url} className="flex items-center gap-2">
                      {index < BREADCRUMBS.length - 1 ? (
                        <>
                          <Link
                            href={crumb.url}
                            className="hover:text-white transition-colors"
                          >
                            {crumb.name}
                          </Link>
                          <span aria-hidden="true">/</span>
                        </>
                      ) : (
                        <span
                          className="text-white font-medium"
                          aria-current="page"
                        >
                          {crumb.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Window Screen Repair Toronto &amp; Custom Window Screens
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-4 max-w-2xl">
                A torn screen is a small problem that ruins a whole summer. Bugs
                get in, pets push through, and a bent frame stops the door from
                sliding. We repair and replace screens for windows, sliding
                patio doors and entry doors across the GTA.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl">
                We measure on site, so the screen fits the opening you actually
                have, not the one it was supposed to have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Get a Screen Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Window Screen Repair Toronto */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="repair-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="repair-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Window Screen Repair Toronto
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A torn or loose window screen lets bugs in and makes your window
            look neglected. Most screens can be fixed. We replace the torn mesh,
            re-spline it tight, and straighten or repair the frame when
            it&apos;s bent. We do window screen repair across Toronto and the
            GTA, and we handle the mesh replacement ourselves.
          </p>
        </div>
      </section>

      {/* Window Screen Replacement */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="replacement-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="replacement-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Window Screen Replacement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            When the frame is broken or the screen is missing, we make a new
            one. Window screen replacement means a new screen custom-made to
            the exact size of your window, so it fits snug with no gaps for
            bugs to get through. We make custom window screens for casement, slider
            and hung windows, plus screens for sliding patio doors.
          </p>
        </div>
      </section>

      {/* About This Service */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="about-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            About This Service
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Whether your screen has a small tear, a bent frame, or has gone
              missing entirely, we handle it. We re-screen existing frames,
              build new ones to your exact measurements, and repair sliding
              patio door screens that have jumped their tracks or lost their
              rollers.
            </p>
            <p>
              We carry multiple mesh options so you can choose what fits your
              situation. Standard fiberglass works for most homes. Pet-resistant
              mesh holds up in households with dogs and cats. Solar mesh cuts
              heat on south-facing windows. Fine mesh keeps out smaller insects.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Why Choose Us
          </span>
          <h2
            id="benefits-heading"
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Key Benefits
          </h2>
          <ul className="space-y-3" aria-label="Service benefits">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="photo-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Work
            </span>
            <h2
              id="photo-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Screen Door Installation
            </h2>
          </div>
          <figure className="flex flex-col gap-2">
            <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="text-sm text-gray-500 text-center">
              Sliding patio door with new screen door installed by LuminaSky
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Our Process */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              How It Works
            </span>
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Our Process
            </h2>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${PROCESS.length}, minmax(0, 1fr))`,
            }}
          >
            {PROCESS.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < PROCESS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[-50%] h-px bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {step.step}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Disclaimer */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-4">
        <p className="text-sm italic text-gray-500">
          Pricing shown is a general estimate based on typical jobs across the GTA. Final pricing depends on size, access, frame condition, and other site-specific factors. For an exact written quote, call{" "}
          <a href="tel:+14373448490" className="text-primary hover:underline">(437) 344-8490</a>.
        </p>
      </div>

      {/* Mid-page CTA */}
      <section className="py-12 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-semibold mb-6">
            Send us a photo of the screen and the rough size, and we will give
            you a price. No visit needed for a quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
          >
            Get a Screen Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronRight
                    className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section
          className="py-16 px-4 md:px-8 bg-gray-50"
          aria-labelledby="related-heading"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              id="related-heading"
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
            >
              Other Services You May Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <ServiceCard
                  key={s.slug}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  icon={s.icon}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Window Screen Repair Across the GTA</h2>
          <p className="text-gray-600 leading-relaxed">
            We repair and replace window screens in{" "}
            <Link href="/window-repair-toronto" className="text-primary font-semibold hover:underline">Toronto</Link>,{" "}
            <Link href="/window-repair-vaughan" className="text-primary font-semibold hover:underline">Vaughan</Link>,{" "}
            <Link href="/window-repair-oakville" className="text-primary font-semibold hover:underline">Oakville</Link>,{" "}
            <Link href="/window-repair-north-york" className="text-primary font-semibold hover:underline">North York</Link> and across the Greater Toronto Area.{" "}
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Window Screens?"
        subtitle="Call now: same-day quotes available across the GTA."
      />
    </>
  );
}
