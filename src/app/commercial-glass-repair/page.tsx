import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
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
  src: "/images/services/door-after-repaired.jpg",
  alt: "Shattered commercial front door glass after break-in, emergency glass repair by LuminaSky",
};

const BEFORE_AFTER = {
  before: {
    src: "/images/services/door-after-repaired.jpg",
    alt: "Shattered commercial front door glass after break-in: glass everywhere, security compromised",
    badge: "Before: Emergency Call",
    heading: "Shattered Glass After Break-In",
    caption:
      "Business called us at night for emergency board-up and glass replacement. Security compromised, glass everywhere, urgent response needed.",
  },
  after: {
    src: "/images/services/door-before-broken.jpg",
    alt: "Fully restored commercial front door with new tempered glass installed by LuminaSky Glass Services",
    badge: "After: Fully Restored",
    heading: "New Tempered Glass, Security Restored",
    caption:
      "Same location, next day. Emergency board-up within 2 hours, permanent glass replacement installed the following morning. Business back to normal.",
  },
};

const COMMERCIAL_TYPES = [
  {
    title: "Storefront glass replacement",
    text: "Storefront windows and display windows for shops, restaurants and offices. We replace broken, cracked or foggy storefront glass with tempered safety glass. For chips, cracks and failed seals, storefront glass repair is often possible without replacing the whole pane.",
  },
  {
    title: "Commercial door glass",
    text: "Glass entry doors, storefront doors and office doors. We replace the glass and get the door secure again.",
  },
  {
    title: "Office and lobby glass",
    text: "Glass doors, sidelites and partitions in office buildings and building lobbies.",
  },
];

const PROCESS = [
  {
    step: "Call Us",
    desc: "24/7, any day.",
  },
  {
    step: "Secure",
    desc: "We board up within 2 hours and clean up the broken glass.",
  },
  {
    step: "Measure",
    desc: "We measure for the permanent glass on the same visit.",
  },
  {
    step: "Replace",
    desc: "We install the new glass and remove the board-up.",
  },
];

const AREA_CITIES: { name: string; slug: string | null }[] = [
  { name: "Toronto", slug: "toronto" },
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Woodbridge", slug: "woodbridge" },
  { name: "Concord", slug: null },
  { name: "Thornhill", slug: "thornhill" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Markham", slug: "markham" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Brampton", slug: "brampton" },
];

const FAQS = [
  {
    q: "Do you offer emergency glass repair at night and on weekends?",
    a: "Yes. We're available 24/7, including nights, weekends and holidays. We respond within 2 hours to board up and secure your business.",
  },
  {
    q: "How fast can you replace a broken storefront window?",
    a: "We board up right away so you're secure. The permanent glass is cut to size, and we install it as soon as it's ready. We'll give you the timeline when we measure.",
  },
  {
    q: "Do you do the board-up yourselves?",
    a: "Yes. Our own crew handles the board-up, the cleanup and the permanent glass. No subcontractors.",
  },
  {
    q: "What kind of glass do you install in storefronts and commercial doors?",
    a: "Tempered safety glass, which is required for doors and storefronts. Laminated glass is available on request for extra security.",
  },
  {
    q: "Do you work with property managers and condo buildings?",
    a: "Yes. We work with property managers, condo boards and building owners across the GTA, for both emergencies and planned glass work.",
  },
];

const RELATED_SLUGS = ["front-door-glass", "foggy-windows", "skylights"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Commercial Glass Repair", url: "/commercial-glass-repair" },
];

export const metadata: Metadata = {
  title: "Commercial Glass Repair Toronto",
  description:
    "24/7 commercial glass repair in Toronto and the GTA. Storefront glass replacement, commercial door glass, emergency board-up. Call 437-344-8490.",
  alternates: { canonical: "/commercial-glass-repair" },
};

export default function CommercialGlassRepairPage() {
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
              "Commercial Glass Repair",
              "/commercial-glass-repair",
              "LuminaSky Glass Services provides 24/7 commercial glass repair across Toronto and the GTA, including storefront glass replacement, commercial door glass and emergency board-up."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Commercial glass repair hero section"
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
                Commercial Glass Repair Toronto: Storefront &amp; Office Glass
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                Broken storefront window or shattered glass door? We board up
                within 2 hours, any time, and install the permanent glass fast,
                so your business gets back to normal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now: 24/7
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Get Quote
                </Link>
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

      {/* Emergency Glass Repair, 24/7 */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="emergency-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2
              id="emergency-heading"
              className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Emergency Glass Repair Toronto, 24/7
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A broken storefront window can&apos;t wait until Monday. It leaves
              your business open to the weather, theft and liability. We&apos;re
              available 24/7, any day, any time. We respond within 2 hours to
              board up and secure the opening, then schedule the permanent glass
              replacement as fast as possible.
            </p>
          </div>

          {/* Before/After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="relative group">
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {BEFORE_AFTER.before.badge}
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
                <Image
                  src={BEFORE_AFTER.before.src}
                  alt={BEFORE_AFTER.before.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-gray-900 mb-1">
                  {BEFORE_AFTER.before.heading}
                </h3>
                <p className="text-gray-500 text-sm">
                  {BEFORE_AFTER.before.caption}
                </p>
              </div>
            </div>
            {/* After */}
            <div className="relative group">
              <div className="absolute top-4 left-4 z-10 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {BEFORE_AFTER.after.badge}
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
                <Image
                  src={BEFORE_AFTER.after.src}
                  alt={BEFORE_AFTER.after.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-gray-900 mb-1">
                  {BEFORE_AFTER.after.heading}
                </h3>
                <p className="text-gray-500 text-sm">
                  {BEFORE_AFTER.after.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Glass We Repair and Replace */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="types-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              What We Do
            </span>
            <h2
              id="types-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Commercial Glass We Repair and Replace
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_TYPES.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
            {/* Condo buildings */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Condo buildings
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lobby doors, common area glass and windows in condo buildings.
                We work with{" "}
                <Link
                  href="/property-managers"
                  className="text-primary hover:underline"
                >
                  property managers
                </Link>{" "}
                and condo boards across the GTA.
              </p>
            </div>
            {/* Foggy commercial windows */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Foggy commercial windows
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Failed sealed units in office and commercial windows. We replace
                the glass unit and keep the frame. See{" "}
                <Link
                  href="/foggy-windows"
                  className="text-primary hover:underline"
                >
                  foggy window repair
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Up Service Toronto */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="boardup-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="boardup-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Board Up Service Toronto
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our emergency board up services are available 24/7 across Toronto
            and the GTA. After a break-in, vandalism or an accident, the first step is to
            secure the property. Our own crew boards up the opening, cleans up
            the broken glass, and measures for the permanent replacement in the
            same visit. You&apos;re secure the same night.
          </p>
        </div>
      </section>

      {/* Safety Glass */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="safety-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="safety-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Safety Glass
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Commercial doors and storefronts need safety glass. We install
            tempered glass, and laminated glass is available on request for
            extra security.
          </p>
        </div>
      </section>

      {/* How It Works */}
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

      {/* Areas We Serve */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="areas-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="areas-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Areas We Serve
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Commercial glass repair across Toronto and the GTA:{" "}
            {AREA_CITIES.map((city, i) => (
              <span key={city.name}>
                {i > 0 && ", "}
                {city.slug ? (
                  <Link
                    href={`/window-repair-${city.slug}`}
                    className="text-primary hover:underline"
                  >
                    {city.name}
                  </Link>
                ) : (
                  city.name
                )}
              </span>
            ))}
            . From emergency service at night to planned window glass repair,
            one call covers it.
          </p>
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

      <CTABanner
        title="Ready for Commercial Glass Repair?"
        subtitle="Call now: 24/7 emergency response across the GTA."
      />
    </>
  );
}
