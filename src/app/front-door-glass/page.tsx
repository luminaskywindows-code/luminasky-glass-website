import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ChevronRight,
  MapPin,
  Droplets,
  ShieldAlert,
  Wind,
  Paintbrush,
  AlertTriangle,
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
  src: "/images/services/foggy-leaded-glass.jpg",
  alt: "Double front doors with decorative iron scrollwork glass inserts installed by LuminaSky Glass Services",
};

const PHOTOS = [
  {
    src: "/images/services/foggy-leaded-glass.jpg",
    alt: "Double front doors with decorative wrought iron scrollwork glass inserts installed by LuminaSky Glass Services",
    caption: "Double doors with custom decorative iron scrollwork glass",
  },
  {
    src: "/images/services/front-door-decorative-2.jpg",
    alt: "Double front doors with art deco leaded glass inserts featuring elegant arched design",
    caption: "Art deco leaded glass inserts: full double door replacement",
  },
];

const PROCESS = [
  {
    step: "Consultation",
    desc: "We discuss your style preferences and measure the existing glass insert or opening.",
  },
  {
    step: "Glass Selection",
    desc: "Choose from our range of decorative, frosted, clear, and privacy glass options.",
  },
  {
    step: "Removal",
    desc: "The old or damaged glass insert is carefully removed without damaging the door or frame.",
  },
  {
    step: "Installation",
    desc: "Your new glass panel is installed and sealed for a weather-tight, secure fit.",
  },
  {
    step: "Final Inspection",
    desc: "We inspect the installation and clean up before leaving you with a renewed entrance.",
  },
];

const BEFORE_AFTER = {
  title: "Emergency Door Glass Replacement",
  subtitle:
    "From break-in damage to fully restored security: same-day service available across the GTA.",
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

const FAQS = [
  {
    q: "How much does front door glass replacement cost in Toronto?",
    a: "It depends on the size, the type of glass, and how many panels you're replacing. Send us a photo and we'll give you a free quote, usually the same day.",
  },
  {
    q: "Can you match my existing decorative glass pattern?",
    a: "Yes. Send us a photo of your current glass and we'll match the design, so your new glass fits the rest of your entrance.",
  },
  {
    q: "Do you replace sidelite glass too?",
    a: "Yes. We replace sidelite glass on its own or together with the door insert, so the whole entrance matches.",
  },
  {
    q: "Is replacing the glass cheaper than replacing the whole door?",
    a: "Yes, in most cases. You keep your door, frame, and hardware, and only the glass is replaced.",
  },
  {
    q: "My door glass is foggy between the panes. Can it be fixed?",
    a: "Fog between the panes means the seal in the insulating glass has failed. It won't clear on its own. We replace the glass unit and keep your door.",
  },
  {
    q: "How long does the job take?",
    a: "Most installations are done in one visit. Custom and decorative glass is ordered to size, and the lead time depends on the size and the design you choose. We'll give you a clear timeline with your quote.",
  },
  {
    q: "Do you handle emergency door glass repair?",
    a: "Yes. We're available 24/7. We secure the opening first, then install the permanent glass.",
  },
];

const SIGNS = [
  { text: "Cracked or broken glass", icon: AlertTriangle },
  { text: "Fog, haze, or water droplets between the panes", icon: Droplets },
  { text: "Drafts or cold spots around the insert", icon: Wind },
  { text: "Glass damaged in a break-in or by an impact", icon: ShieldAlert },
  {
    text: "A dated design that doesn't match the rest of your home",
    icon: Paintbrush,
  },
];

const AREA_CITIES = [
  { name: "Toronto", slug: "toronto" },
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Woodbridge", slug: "woodbridge" },
  { name: "Maple", slug: "maple" },
  { name: "Thornhill", slug: "thornhill" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Markham", slug: "markham" },
  { name: "Aurora", slug: "aurora" },
  { name: "Newmarket", slug: "newmarket" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Brampton", slug: "brampton" },
  { name: "Oakville", slug: "oakville" },
  { name: "Burlington", slug: "burlington" },
];

const RELATED_SLUGS = ["foggy-windows", "window-cranks", "screen-storm-doors"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Front Door Glass", url: "/front-door-glass" },
];

export const metadata: Metadata = {
  title: "Front Door Glass Replacement Toronto",
  description:
    "Replace cracked or foggy front door glass inserts across the Greater Toronto Area. Decorative, frosted & clear glass. LuminaSky Glass Services: Call 437-344-8490.",
  alternates: { canonical: "/front-door-glass" },
};

export default function FrontDoorGlassPage() {
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
              "Front Door Glass Replacement",
              "/front-door-glass",
              "LuminaSky Glass Services replaces front door glass inserts in entry doors across Toronto and the GTA."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Front Door Glass Replacement hero section"
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
                Front Door Glass Replacement in Toronto &amp; the GTA
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                Cracked, foggy, or outdated door glass? We replace front door
                glass inserts, sidelites and transom glass without replacing your
                door.
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

      {/* Replace the Glass, Keep Your Door */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="overview-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              About This Service
            </span>
            <h2
              id="overview-heading"
              className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Replace the Glass, Keep Your Door
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Your front door is the first thing guests and buyers see. Broken
                glass, fog between the panes, or a dated design can make a whole
                home look tired. It can also let in drafts and weaken security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In most cases, the door itself is fine. Only the glass needs to
                change. LuminaSky Glass Services replaces front door glass
                inserts in entry doors across Toronto and the GTA, so you get a
                new look and a sealed, secure entrance for a fraction of the
                cost of a new door.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work on single doors, double entry doors, doors with
                sidelites, and transom windows above the door. Most replacements
                are done in one visit, and same-day service is available for
                urgent repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Replace */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="what-we-replace-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Scope
            </span>
            <h2
              id="what-we-replace-heading"
              className="text-3xl font-bold text-gray-900"
            >
              What We Replace
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Front door glass inserts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full, half, and decorative inserts in steel and fibreglass entry
                doors. We remove the old insert, install the new one, and seal
                it for a weather-tight fit.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Sidelite glass replacement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sidelites are the narrow glass panels beside the door. They
                crack, fog up, and fade just like the door glass. We can replace
                one sidelite on its own or match a full set.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Transom glass
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The glass panel above the door. We replace clear, frosted, and
                decorative transom glass.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Double entry doors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Matching inserts for both doors, so the entrance looks balanced
                and complete.
              </p>
            </div>
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
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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

      {/* Glass Options */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="glass-options-heading"
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Choose Your Style
          </span>
          <h2
            id="glass-options-heading"
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Glass Options
          </h2>
          <ul className="space-y-4" aria-label="Glass types available">
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                <strong>Clear glass:</strong> maximum light and a clean, modern
                look.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                <strong>Frosted and privacy glass:</strong> light comes in, but
                people can&apos;t see inside. A popular choice for doors facing the
                street.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                <strong>Decorative glass:</strong> leaded, bevelled, wrought
                iron scrollwork and art deco designs. See the real projects
                above.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                <strong>Patterned glass:</strong> textured glass that adds
                privacy and style.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                <strong>Safety glass:</strong> door glass must be safety glass.
                We usually install tempered glass, and laminated glass is
                available on request.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            Most door inserts are insulating glass units: two panes with a
            sealed space between them. When that seal fails, fog and moisture
            appear between the panes. If your door glass looks foggy, the glass
            unit needs replacing, not the whole door.{" "}
            <Link
              href="/foggy-windows"
              className="text-primary font-semibold hover:underline"
            >
              Learn more about foggy glass repair
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Signs It's Time to Replace */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="signs-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="signs-heading"
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Signs It&apos;s Time to Replace Your Door Glass
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SIGNS.map((sign) => (
              <div
                key={sign.text}
                className="flex items-start gap-3 bg-gray-50 rounded-xl border border-gray-100 p-5"
              >
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <sign.icon
                    className="w-5 h-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {sign.text}
                </p>
              </div>
            ))}
          </div>
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

      {/* Door Glass Replacement vs. a New Door */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="vs-new-door-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="vs-new-door-heading"
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Door Glass Replacement vs. a New Door
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A new entry door means a new frame, new hardware, painting, and
            often trim work. If your door is solid and only the glass is damaged
            or outdated, replacing the insert is faster, cleaner, and costs much
            less. You keep your door, your locks, and your frame.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If the door itself is damaged or rotting, we&apos;ll tell you honestly
            during the quote.
          </p>
        </div>
      </section>

      {/* Emergency Before/After */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="before-after-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Real Results
            </span>
            <h2
              id="before-after-heading"
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              {BEFORE_AFTER.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {BEFORE_AFTER.subtitle}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Broken glass after a break-in or an accident can&apos;t wait. We&apos;re
            available 24/7 for emergency glass repair across the GTA. We board
            up the opening to secure your home or business, then install the
            permanent replacement glass.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Before */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={BEFORE_AFTER.before.src}
                  alt={BEFORE_AFTER.before.alt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {BEFORE_AFTER.before.badge}
                </span>
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {BEFORE_AFTER.before.heading}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {BEFORE_AFTER.before.caption}
                </p>
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={BEFORE_AFTER.after.src}
                  alt={BEFORE_AFTER.after.alt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {BEFORE_AFTER.after.badge}
                </span>
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {BEFORE_AFTER.after.heading}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {BEFORE_AFTER.after.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Emergency CTA */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                Available 24/7, Any Day, Any Time
              </h3>
              <p className="text-gray-600 text-sm">
                We respond within 2 hours for emergency board-ups across the
                GTA. Permanent glass replacement scheduled for next-day
                installation.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors whitespace-nowrap shadow"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now: 24/7
            </a>
          </div>
        </div>
      </section>

      {/* How Much Does It Cost */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="cost-heading"
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            How Much Does Front Door Glass Replacement Cost?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every door is different, so we quote each job individually. The
            price depends on:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                The size of the insert or sidelite
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                The type of glass: clear, frosted, decorative, or leaded
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                How many panels are being replaced
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-700">
                Whether the existing insert frame can be reused
              </span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Send us a photo of your door and we&apos;ll give you a free quote,
            usually the same day. If you prefer an in-person visit, the visit is
            $30 and it&apos;s credited toward your job.
          </p>
        </div>
      </section>

      {/* Areas We Serve */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="areas-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="areas-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            Areas We Serve
          </h2>
          <p className="text-gray-500 mb-6 max-w-3xl">
            We replace front door glass across Toronto and the GTA, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/window-repair-${city.slug}`}
                className="inline-flex items-center gap-1.5 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
              >
                <MapPin
                  className="w-3.5 h-3.5 text-primary"
                  aria-hidden="true"
                />
                {city.name}
              </Link>
            ))}
          </div>
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
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden group"
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
        title="Ready to Fix Your Front Door Glass?"
        subtitle="Call now: same-day service available across the GTA."
      />
    </>
  );
}
