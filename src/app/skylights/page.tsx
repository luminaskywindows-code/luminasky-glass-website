import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ChevronRight,
  MapPin,
  Droplets,
  ShieldCheck,
  Wind,
  Snowflake,
  AlertTriangle,
  Thermometer,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  SERVICES,
  PHONE_HREF,
  WINTER_READY_ENABLED,
} from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const HERO_IMAGE = {
  src: "/images/services/skylight-foggy-before.jpg",
  alt: "Foggy skylight with heavy condensation between panes, failed seal causing fogging and reduced light",
};

const PROCESS = [
  {
    step: "Inspection",
    desc: "We inspect the skylight from inside and outside to identify the glass failure or leak source.",
  },
  {
    step: "Quote",
    desc: "You receive a clear, itemized quote for glass replacement or leak repair. No surprises.",
  },
  {
    step: "Glass Removal",
    desc: "The failed glass unit is carefully removed from the frame without disturbing the surrounding roofing.",
  },
  {
    step: "Installation",
    desc: "A new sealed, energy-efficient glass unit is installed and fully sealed against weather.",
  },
  {
    step: "Leak Test",
    desc: "We test for leaks and confirm the repair is weathertight before completing the job.",
  },
];

const SHOWCASE_IMAGE = {
  src: "/images/skylight-before-after.png",
  alt: "Skylight restoration process: before with damage, in progress with technician working, after fully restored and crystal clear",
};

const PROBLEMS = [
  {
    title: "Skylight leaks",
    text: "Water stains, drips, or damp drywall around the skylight. We inspect from inside and outside to find the real source: failed sealant, worn flashing, or a failed glass seal. Then we repair that, not just the symptom.",
  },
  {
    title: "Foggy skylight glass",
    text: "Condensation or haze between the panes means the seal in the glass unit has failed. It won't clear on its own. We replace the glass unit and keep your frame.",
  },
  {
    title: "Cracked or broken skylight glass",
    text: "Hail, falling branches, or impact damage. We replace the glass with a new sealed unit.",
  },
  {
    title: "Full skylight replacement",
    text: "When the frame itself is damaged or rotting, we replace the whole skylight. We'll tell you honestly whether a glass replacement, a leak repair, or a full replacement makes sense for your skylight.",
  },
];

const SKYLIGHT_TYPES = [
  "Fixed skylights (non-opening)",
  "Venting skylights that open for fresh air",
  "Flat roof skylights",
  "Skylights in vaulted and cathedral ceilings",
  "Tubular skylights (sun tunnels)",
  "Velux, Fakro, ODL and custom skylights",
];

const SIGNS = [
  { text: "Water stains or bubbling paint on the ceiling around the skylight", icon: Droplets },
  { text: "Fog or moisture trapped between the panes", icon: Wind },
  { text: "Drips or condensation running down the skylight well", icon: Droplets },
  { text: "Cracked or chipped glass", icon: AlertTriangle },
  { text: "Cold drafts near the skylight in winter", icon: Thermometer },
  { text: "Ice buildup around the skylight on the roof", icon: Snowflake },
];

const COST_FACTORS = [
  "What's causing the leak or fog (sealant, flashing, or the glass unit)",
  "The size and type of skylight",
  "Whether the glass is standard or energy-efficient low-E",
  "Roof access and the height of the skylight",
];

const FAQS = [
  {
    q: "My skylight is foggy. Do I need to replace the whole skylight?",
    a: "Usually not. Fog between the panes means the glass seal failed. We replace the glass unit inside your existing frame, which costs much less than a new skylight.",
  },
  {
    q: "Can you repair a leaking skylight?",
    a: "Yes. We find where the water is getting in (sealant, flashing, or the glass unit) and repair the source. Every repair ends with a leak test.",
  },
  {
    q: "How much does skylight leak repair cost in Toronto?",
    a: "It depends on the cause of the leak and the size of the skylight. Send us a photo and we'll give you a free quote, usually the same day.",
  },
  {
    q: "Do you service Velux skylights?",
    a: "Yes. We service Velux, Fakro, ODL and custom skylights.",
  },
  {
    q: "Can you repair a skylight in winter?",
    a: "In many cases, yes. It depends on the weather and the condition of the roof. Some repairs can be done right away, and some roof work is safer to schedule when conditions improve. We'll tell you what we can do now and what should wait.",
  },
  {
    q: "Is skylight work safe? Are you insured?",
    a: "Yes. We're fully insured for at-height work, and we protect your roof and home during the job.",
  },
  {
    q: "How long does a skylight glass replacement take?",
    a: "The new glass unit is made to the size of your skylight, so we measure first and order the unit. Installation is usually done in one visit. We'll give you a clear timeline with your quote.",
  },
];

const AREA_CITIES = [
  { name: "Toronto", slug: "toronto" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Thornhill", slug: "thornhill" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Markham", slug: "markham" },
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "Woodbridge", slug: "woodbridge" },
  { name: "Maple", slug: "maple" },
  { name: "Aurora", slug: "aurora" },
  { name: "Newmarket", slug: "newmarket" },
  { name: "Brampton", slug: "brampton" },
  { name: "Oakville", slug: "oakville" },
];

const RELATED_SLUGS = ["foggy-windows", "front-door-glass", "screen-storm-doors"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Skylight Repair", url: "/skylights" },
];

export const metadata: Metadata = {
  title: "Skylight Repair Toronto & Replacement",
  description:
    "Leaking or foggy skylight? LuminaSky Glass Services repairs skylight leaks and replaces skylight glass units across Toronto and the GTA. All brands serviced. Call 437-344-8490.",
  alternates: { canonical: "/skylights" },
};

export default function SkylightsPage() {
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
              "Skylight Repair & Replacement",
              "/skylights",
              "LuminaSky Glass Services repairs skylight leaks and replaces skylight glass units across Toronto and the GTA."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Skylight Repair hero section"
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
                Skylight Repair Toronto: Leaks, Foggy Glass &amp; Replacement
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                Leaking, foggy, or cracked skylight? We fix the problem at the
                source, and in most cases you keep your existing skylight frame.
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

      {/* Skylight Repair Without a Full Tear-Out */}
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
              Skylight Repair Without a Full Tear-Out
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Skylights bring natural light into your home. When the glass seal
                fails or the skylight starts to leak, they turn into a problem
                fast: fog between the panes, water stains on the ceiling, drafts,
                and higher heating bills.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most of the time, the skylight frame is still in good shape. Only
                the glass unit or the seal around it has failed. LuminaSky Glass
                Services replaces the insulated glass unit inside your existing
                frame and repairs leaks at the source, so you avoid the cost and
                mess of a full skylight replacement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work on homes and businesses across Toronto and the GTA. We
                service all major skylight brands, including Velux, Fakro and ODL,
                as well as custom skylights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skylight Problems We Fix */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="problems-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Scope
            </span>
            <h2
              id="problems-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Skylight Problems We Fix
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Skylights We Service */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="types-heading"
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            What We Work On
          </span>
          <h2
            id="types-heading"
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Types of Skylights We Service
          </h2>
          <ul className="space-y-3" aria-label="Skylight types">
            {SKYLIGHT_TYPES.map((type) => (
              <li key={type} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700">{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Energy-Efficient Replacement Glass */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="energy-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="energy-heading"
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Energy-Efficient Replacement Glass
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Older skylights often lose a lot of heat in winter. When we replace a
            skylight glass unit, we offer energy-efficient options: low-E coated
            glass and argon-filled sealed units. They help keep heat inside in
            winter, reduce heat gain in summer, and cut down condensation on the
            inside of the glass.
          </p>
        </div>
      </section>

      {/* Signs Your Skylight Needs Repair */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="signs-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="signs-heading"
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Signs Your Skylight Needs Repair
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

      {/* Showcase Before/After Image */}
      <section className="bg-white px-4 md:px-8 py-16" aria-label="Project showcase">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Real Results
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Skylight Restoration
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={SHOWCASE_IMAGE.src}
              alt={SHOWCASE_IMAGE.alt}
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Skylight Leak Repair Cost */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="cost-heading"
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Skylight Leak Repair Cost
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Skylight leak repair cost depends on the cause of the leak and the
            size and type of the skylight. A sealant repair costs much less than
            replacing a glass unit, and replacing the glass costs much less than
            replacing the whole skylight.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The price depends on:
          </p>
          <ul className="space-y-2 mb-6">
            {COST_FACTORS.map((factor) => (
              <li key={factor} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700">{factor}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Send us a photo of your skylight from inside, and we&apos;ll give
            you a free quote, usually the same day. If you prefer an in-person
            inspection, the visit is $30 and it&apos;s credited toward your job.
          </p>
        </div>
      </section>

      {/* Safe, Insured Roof Work */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="safety-heading"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="safety-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Safe, Insured Roof Work
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Skylight work means working at height on your roof. Our team is
                fully insured for at-height work, and we protect your roof and
                interior while we work. Every repair finishes with a leak test
                before we leave.
              </p>
            </div>
          </div>
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
            We provide skylight repair across Toronto and the GTA, including:
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
                  {index === 4 ? (
                    <>
                      {faq.a}{" "}
                      <Link
                        href="/blog/skylights-in-winter-leaks-ice-dams-condensation"
                        className="text-primary font-semibold hover:underline"
                      >
                        Read more about skylights in winter
                      </Link>
                      .
                    </>
                  ) : index === 0 ? (
                    <>
                      {faq.a}{" "}
                      <Link
                        href="/foggy-windows"
                        className="text-primary font-semibold hover:underline"
                      >
                        Learn more about foggy glass repair
                      </Link>
                      .
                    </>
                  ) : (
                    faq.a
                  )}
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
        title="Ready to Fix Your Skylight?"
        subtitle="Call now: same-day service available across the GTA."
      />

      {WINTER_READY_ENABLED && (
        <section className="bg-accent/5 border-t border-accent/10 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <Snowflake className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
            <p className="text-gray-700">
              Getting ready for winter?{" "}
              <Link href="/winter-ready" className="text-accent font-semibold hover:underline">
                Book a $30 Winter Ready Inspection.
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
