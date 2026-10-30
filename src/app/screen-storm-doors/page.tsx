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
  src: "/images/services/storm-door-hardware.jpg",
  alt: "White full-view storm door with gold lever handle installed on a brick home in the GTA",
};

const PHOTOS = [
  {
    src: "/images/services/storm-door-hardware.jpg",
    alt: "White aluminum-frame full-view storm door with gold lever handle installed by LuminaSky Glass Services",
    caption:
      "Full-view aluminum storm door: protects your entry while keeping natural light",
  },
];

const BENEFITS = [
  "Custom sizing to fit any door opening. No gaps, no drafts.",
  "Multiple finishes: white, bronze, black, mill aluminum",
  "Full-view storm doors, screen-only, and combination options",
  "Pet-resistant screening upgrade available",
  "Torn screen panels re-screened affordably",
  "Improves ventilation, energy efficiency, and curb appeal",
];

const PROCESS = [
  {
    step: "Measure",
    desc: "We measure your door opening precisely for a perfect custom fit.",
  },
  {
    step: "Select",
    desc: "Choose your door style, screen type, and finish from our product lineup.",
  },
  {
    step: "Order",
    desc: "Your custom door is ordered or fabricated to your exact specifications.",
  },
  {
    step: "Install",
    desc: "We install the door with proper hardware, closers, and handles.",
  },
  {
    step: "Adjust",
    desc: "Door closer speed and latch alignment are adjusted to your preference.",
  },
];

const DOOR_TYPES = [
  {
    title: "Screen doors",
    text: "Aluminum-frame screen doors for front doors, side doors, and back doors. We measure your opening and install a door that fits tight and swings smoothly.",
  },
  {
    title: "Full-view storm doors",
    text: "A full glass panel with interchangeable screen inserts. Maximum light, full weather protection. Popular on front entrances.",
  },
  {
    title: "Combination storm/screen doors",
    text: "Glass and screen panels that slide or swap with the seasons. Storm protection in winter, ventilation in summer.",
  },
  {
    title: "Retractable screens",
    text: "A retractable screen rolls away when you don't need it, so it doesn't block your view or your entry door. A good fit for front doors, patio doors and French doors.",
  },
];

const FAQS = [
  {
    q: "Can you replace just the screen in my existing door?",
    a: "Yes. We re-screen most aluminum or wood-framed screen doors. This is often the most cost-effective option.",
  },
  {
    q: "Do you install pet screen (heavy-duty screen)?",
    a: "Yes. We offer pet-resistant screen upgrades. Ideal for homes with dogs or cats.",
  },
  {
    q: "What finishes are available?",
    a: "We stock doors in white, bronze, mill aluminum, and black. Custom colors may be available on request.",
  },
  {
    q: "How long does installation take?",
    a: "A standard screen or storm door installation is typically completed in a single visit.",
  },
];

const RELATED_SLUGS = ["front-door-glass", "window-cranks", "skylights"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Screen & Storm Doors", url: "/screen-storm-doors" },
];

export const metadata: Metadata = {
  title: "Screen & Storm Door Installation Toronto",
  description:
    "Screen and storm door installation and repair in Toronto and the GTA. Custom-fit for your entry. Photo quote. Call 437-344-8490.",
  alternates: { canonical: "/screen-storm-doors" },
};

export default function ScreenStormDoorsPage() {
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
              "Screen & Storm Door Installation",
              "/screen-storm-doors",
              "LuminaSky Glass Services supplies and installs screen doors and storm doors across Toronto and the GTA.",
              { minPrice: 150, maxPrice: 650, priceDescription: "Storm door glass or screen repair." }
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Screen and Storm Doors hero section"
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
                Custom Screen &amp; Storm Doors: Installed Right
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                Keep bugs out, let fresh air in, and add a layer of weather
                protection. We supply and install custom-fit screen and storm
                doors for any entrance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Get Quote
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

      {/* Screen Door Installation in Toronto */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="screen-door-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2
              id="screen-door-heading"
              className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Screen Door Installation in Toronto
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              A screen door lets fresh air in and keeps bugs out. We measure
              your entry door and door frame, and install a screen door that
              fits properly, opens smoothly and closes tight. We work with
              homes across Toronto and the GTA.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Storm Door Installation and Repair
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A storm door protects your exterior door from rain, snow and
              wind, and adds an extra layer of insulation in winter. We install
              new storm doors, and we handle storm door repair: broken closers,
              torn screens, cracked glass, worn weatherstripping and doors that
              don&apos;t latch.
            </p>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="types-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              What We Install
            </span>
            <h2
              id="types-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Door Types We Carry
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOOR_TYPES.map((door) => (
              <div
                key={door.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {door.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{door.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="photos-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Work
            </span>
            <h2 id="photos-heading" className="text-3xl font-bold text-gray-900">
              Real Project Photos
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 max-w-2xl mx-auto">
            {PHOTOS.map((photo, i) => (
              <figure key={i} className="flex flex-col gap-2">
                <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {photo.caption && (
                  <figcaption className="text-sm text-gray-500 text-center">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
          <p className="text-gray-600 leading-relaxed mt-6">
            Existing torn or damaged screen panels can be re-screened at a
            fraction of the cost of a full door replacement.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
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

      {/* FAQ */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
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
          className="py-16 px-4 md:px-8 bg-white"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Screen and Storm Door Service Across the GTA</h2>
          <p className="text-gray-600 leading-relaxed">
            We install and repair screen doors and storm doors in{" "}
            <Link href="/window-repair-toronto" className="text-primary font-semibold hover:underline">Toronto</Link>,{" "}
            <Link href="/window-repair-markham" className="text-primary font-semibold hover:underline">Markham</Link>,{" "}
            <Link href="/window-repair-brampton" className="text-primary font-semibold hover:underline">Brampton</Link>,{" "}
            <Link href="/window-repair-mississauga" className="text-primary font-semibold hover:underline">Mississauga</Link> and across the Greater Toronto Area.{" "}
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Install a Screen or Storm Door?"
        subtitle="Call now: same-day quotes available across the GTA."
      />
    </>
  );
}
