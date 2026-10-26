import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ChevronRight,
  MapPin,
  Snowflake,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  SERVICES,
  PHONE_HREF,
  WINTER_READY_ENABLED,
} from "@/lib/constants";
import { FOGGY_GLASS_CITY_PAGES } from "@/lib/foggy-glass-city-data";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const HERO_IMAGE = {
  src: "/images/services/foggy-window-real.jpg",
  alt: "Real foggy window with condensation between panes, failed seal captured on-site",
};

const VIDEOS = [
  {
    src: "/videos/foggy-glass-before.mp4",
    alt: "Foggy double-pane window with hazy sealed unit blocking the street view, before repair",
    caption:
      "Before: Foggy window with trapped condensation blocking the view",
  },
  {
    src: "/videos/foggy-glass-after.mp4",
    alt: "Crystal-clear window after sealed glass unit replacement, sharp view of houses and street",
    caption:
      "After: Sealed glass unit replaced, crystal-clear view restored without changing the frame",
  },
];

const BENEFITS = [
  "Save 50-70% versus replacing the entire window and frame",
  "Fast turnaround: measured, custom-made and installed, typically within 5 to 15 business days",
  "Crystal-clear results: restores full visibility and insulation",
  "No mess: we vacuum and clean up after every job",
  "Warranty on all glass unit replacements",
  "Works with all window styles: casement, slider, fixed, bay",
];

const PROCESS = [
  {
    step: "Free Photo Assessment",
    desc: "Send us a photo of your window. We confirm it can be repaired and give you a free quote. In-person visits are $30, credited toward your job.",
  },
  {
    step: "Clear Quote",
    desc: "You get a firm, written price upfront before any work begins. No surprises at the door.",
  },
  {
    step: "Glass Removal",
    desc: "We carefully remove the failed glass unit from your existing frame, protecting trim and sills.",
  },
  {
    step: "New Unit Installed",
    desc: "A new sealed insulated glass unit is installed and sealed for maximum energy efficiency.",
  },
  {
    step: "Cleanup & Warranty",
    desc: "We clean up completely and provide your written warranty before we leave.",
  },
];

const WHAT_WE_REPLACE = [
  "Casement, slider, fixed, awning and bay windows",
  "Double pane units",
  "Large picture windows",
  "Patio door glass",
  "Leaded and decorative glass in doors and sidelites (see front door glass)",
  "Frosted, tinted and patterned glass",
  "Skylight glass (see skylight repair)",
];

const COST_FACTORS = [
  "The size of each glass unit",
  "The glass thickness and the size of the gap between the panes",
  "Glass type: clear, low-E, frosted, tinted or tempered",
  "How many windows you're fixing",
  "Access (ground floor or upper floors)",
];

const FAQS = [
  {
    q: "Can all foggy windows be repaired without replacing the frame?",
    a: "Most can. If the frame, sash and hardware are in good shape, we replace only the sealed glass unit. If the frame is rotting or damaged, we'll tell you honestly and quote the right fix.",
  },
  {
    q: "Will the fog come back after a window seal replacement?",
    a: "Not from the old problem. You get a brand new sealed unit with a new seal, new gas fill and new desiccant. It's a permanent fix, not a temporary one, and it's covered by our written warranty.",
  },
  {
    q: "How long does the repair take?",
    a: "Typically 5 to 15 business days from measurement to installation, because each unit is custom-made. Installation takes under an hour per window.",
  },
  {
    q: "Will my new glass be energy efficient?",
    a: "Yes. We offer low-E glass and argon gas filled units, which insulate better than most original builder-grade glass.",
  },
  {
    q: "Do you warranty the repair?",
    a: "Yes. All glass unit replacements come with a transferable Lifetime Warranty against seal failure on sealed glass units.",
  },
  {
    q: "Can you match my existing glass type (frosted, tinted, etc.)?",
    a: "Yes. We match frosted, tinted, patterned and tempered glass so the new unit looks like the rest of your windows.",
  },
  {
    q: "Is window defogging a good alternative?",
    a: "Defogging can make the glass look clearer for a while, but the seal stays broken and the insulating gas is gone. A new sealed unit fixes the actual problem.",
  },
  {
    q: "Do you work outside Toronto?",
    a: "Yes. We serve the entire GTA, including Vaughan, Thornhill, Richmond Hill, Markham, Mississauga, Brampton and Oakville. See the city links below.",
  },
];

const RELATED_SLUGS = ["front-door-glass", "window-cranks", "skylights"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Foggy Window Repair", url: "/foggy-windows" },
];

export const metadata: Metadata = {
  title: "Foggy Window Repair Toronto",
  description:
    "Foggy windows? We replace the sealed glass unit and keep your frame. Foggy window repair across Toronto and the GTA, 50-70% less than a new window. Free photo quote.",
  alternates: { canonical: "/foggy-windows" },
};

export default function FoggyWindowsPage() {
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
              "Foggy Window Repair",
              "/foggy-windows",
              "LuminaSky Glass Services replaces failed sealed glass units across Toronto and the GTA, saving homeowners 50-70% versus full window replacement."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Foggy window repair hero section"
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
                Foggy Window Repair Toronto: Sealed Unit Replacement
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                <strong>Foggy windows happen when the seal between the glass panes fails, letting moisture inside the sealed unit.</strong> The fix is replacing the glass unit only, not the whole window. At LuminaSky, foggy window repair is 40-60% cheaper than full window replacement, carries a transferable Lifetime Warranty against seal failure (first 2 years include labour), and takes 1 to 2 weeks from the free measurement visit. We service all 34 cities across the GTA with same-week measurement appointments.
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
              <Link href="/lifetime-warranty" className="inline-flex items-center gap-2 text-accent-light text-sm mt-4 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                Transferable Lifetime Warranty on sealed glass
              </Link>
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

      {/* Why Windows Get Foggy */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="why-foggy-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="why-foggy-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why Windows Get Foggy
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Most windows in GTA homes use double glazing or triple glazing (double or triple pane). Two or
              three panes of glass are sealed together into one insulated glass
              unit. The space between the panes is gas filled, usually with
              argon, and a desiccant inside the spacer absorbs moisture.
            </p>
            <p>
              Over time, heat, cold and sun break down the seal. Moisture gets
              in, the gas escapes, and condensation forms between the panes.
              That&apos;s seal failure. Once it starts, the fog won&apos;t clear on its
              own, and it usually gets worse: haze, water droplets, and white
              mineral stains on the inside of the glass.
            </p>
            <p>
              Windows with a failed seal also lose insulation. You&apos;ll often feel the glass
              is colder in winter than the windows around it.
            </p>
          </div>
        </div>
      </section>

      {/* Window Seal Replacement Without a New Window */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="seal-replacement-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="seal-replacement-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Window Seal Replacement Without a New Window
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The frame, the sash and the hardware are usually still in good
              shape. Only the glass unit has failed. So we don&apos;t replace the
              whole window. We do sealed unit replacement: we remove the failed
              glass unit and install a new one in your existing frame.
            </p>
            <p>
              Glass unit replacement is faster, cleaner and much cheaper than
              replacing the window. Installation takes under an hour per window,
              and your trim, sills and walls stay untouched.
            </p>
          </div>
        </div>
      </section>

      {/* Is Window Defogging Worth It? */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="defogging-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="defogging-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Is Window Defogging Worth It?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Some companies offer window defogging: they drill small holes in the
            glass, clean out the moisture and seal the holes. It can make the
            glass look clearer for a while, but the original seal is still
            broken and the insulating gas is gone. A new sealed unit fixes the
            cause, not just the look, and it comes with a warranty.
          </p>
        </div>
      </section>

      {/* What We Replace */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="what-we-replace-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="what-we-replace-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            What We Replace
          </h2>
          <ul className="space-y-3" aria-label="Types of glass we replace">
            {WHAT_WE_REPLACE.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700">
                  {item.includes("front door glass") ? (
                    <>
                      Leaded and decorative glass in doors and sidelites (see{" "}
                      <Link
                        href="/front-door-glass"
                        className="text-primary hover:underline"
                      >
                        front door glass
                      </Link>
                      )
                    </>
                  ) : item.includes("skylight repair") ? (
                    <>
                      Skylight glass (see{" "}
                      <Link
                        href="/skylights"
                        className="text-primary hover:underline"
                      >
                        skylight repair
                      </Link>
                      )
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
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
            <h2
              id="photos-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Real Project Video
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {VIDEOS.map((video, i) => (
              <figure key={i} className="flex flex-col gap-2">
                <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={video.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {video.caption && (
                  <figcaption className="text-sm text-gray-500 text-center">
                    {video.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
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
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Energy-Efficient Replacement Glass
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every new sealed unit is an opportunity to upgrade. We offer low-E
            coated glass and argon gas filled units, which keep more heat inside
            in winter and cut down condensation on the inside of the glass.
          </p>
        </div>
      </section>

      {/* How Long Does It Take? */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="timeline-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            How Long Does It Take?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Each glass unit is made to the exact size of your window. We
            measure, the unit is custom-made, and we install it, typically
            within 5 to 15 business days. On installation day, each window
            takes under an hour.
          </p>
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

      {/* Sealed Unit Replacement Cost */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="cost-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Sealed Unit Replacement Cost
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The price depends on:
          </p>
          <ul className="space-y-3 mb-6" aria-label="Cost factors">
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
            Send us a photo of your window and we&apos;ll give you a free quote,
            usually the same day. Most homeowners save 50-70% compared to full
            window replacement. For detailed market pricing, see our{" "}
            <Link href="/glass-replacement-cost-report-2026" className="text-primary font-semibold hover:underline">GTA Glass Replacement Cost Report 2026</Link>.
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
        title="Ready for Clear Windows Again?"
        subtitle="Call now: same-day quotes available across the GTA."
      />

      {/* Winter Ready Banner */}
      {WINTER_READY_ENABLED && (
        <section className="bg-accent/5 border-t border-accent/10 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <Snowflake
              className="w-5 h-5 text-accent shrink-0"
              aria-hidden="true"
            />
            <p className="text-gray-700">
              Getting ready for winter?{" "}
              <Link
                href="/winter-ready"
                className="text-accent font-semibold hover:underline"
              >
                Book a $30 Winter Ready Inspection.
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Foggy Glass Repair by City */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Foggy Glass Repair by City
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            We serve homeowners across the Greater Toronto Area. Find foggy
            glass repair information specific to your city:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {FOGGY_GLASS_CITY_PAGES.map((c) => (
              <Link
                key={c.slug}
                href={`/foggy-glass-repair-${c.slug}`}
                className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-primary/30 hover:text-primary hover:shadow-sm transition-all"
              >
                <MapPin
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                {c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
