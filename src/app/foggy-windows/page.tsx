import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Star,
  Droplets,
  MessageCircle,
  FileText,
  MapPin,
  Snowflake,
  Users,
  Thermometer,
  Eye,
  CloudRain,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  SERVICES,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  WINTER_READY_ENABLED,
} from "@/lib/constants";
import { FOGGY_GLASS_CITY_PAGES } from "@/lib/foggy-glass-city-data";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

/* ── Data ── */

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

const TRUST_BADGES = [
  { icon: Star, label: "60+ 5-Star Google Reviews" },
  { icon: ShieldCheck, label: "5-Year Glass Warranty" },
  { icon: Users, label: "Family-Owned Since 2024" },
  { icon: MapPin, label: "Serves All GTA" },
  { icon: FileText, label: "Written Quote on the Spot" },
];

const SEAL_FAILURE_SIGNS = [
  {
    icon: CloudRain,
    title: "Fog or haze between panes",
    desc: "Moisture trapped between the glass that won’t wipe away from either side.",
  },
  {
    icon: Droplets,
    title: "Water droplets inside the glass",
    desc: "Condensation forming between the panes, especially on cold mornings.",
  },
  {
    icon: Eye,
    title: "White mineral stains",
    desc: "Dried mineral deposits on the inner glass surface from repeated condensation cycles.",
  },
  {
    icon: Thermometer,
    title: "Cold glass in winter",
    desc: "The insulating gas has escaped. The glass feels noticeably colder than surrounding windows.",
  },
  {
    icon: CloudRain,
    title: "Distorted or wavy view",
    desc: "The glass panes flex inward once the seal breaks and the gas escapes, distorting the view.",
  },
  {
    icon: Droplets,
    title: "Getting worse over time",
    desc: "Seal failure is progressive. The fog spreads, water accumulates, and stains become permanent.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Send a photo or call for a quote",
    desc: "Send a photo of your foggy window and we will confirm it can be fixed and give you a quote. In-person assessments are $30, credited toward the job.",
  },
  {
    step: "2",
    title: "We measure and order your glass",
    desc: "A technician measures the exact size of each glass unit on-site. Your new sealed unit is custom-made to fit your existing frame.",
  },
  {
    step: "3",
    title: "New glass installed, old frame kept",
    desc: "We remove the failed glass unit and install the new one. Installation takes under an hour per window. Your trim, sills and walls stay untouched.",
  },
];

const WINDOW_BRANDS = [
  "North Star",
  "Vinylbilt",
  "All Weather Windows",
  "Jeld-Wen",
  "Loewen",
  "Gentek",
  "Pella",
  "Dusco",
  "Ply Gem",
  "Marvin",
];

const FAQS = [
  {
    q: "Can all foggy windows be repaired without replacing the frame?",
    a: "Most can. If the frame, sash and hardware are in good shape, we replace only the sealed glass unit. If the frame is rotting or damaged, we will tell you honestly and quote the right fix.",
  },
  {
    q: "Will the fog come back after a window seal replacement?",
    a: "Not from the old problem. You get a brand new sealed unit with a new seal, new gas fill and new desiccant. It is a permanent fix, not a temporary one, and it is covered by our written warranty.",
  },
  {
    q: "How long does the repair take?",
    a: "Glass is measured first, custom-made, then installed, typically within 5 to 15 business days from measurement. Installation takes under an hour per window.",
  },
  {
    q: "Will my new glass be energy efficient?",
    a: "We offer low-E glass and argon gas filled units, which insulate better than most original builder-grade glass. Ask about upgrade options during your quote.",
  },
  {
    q: "What does the warranty cover?",
    a: "All glass unit replacements come with a 5-year warranty on the sealed glass unit (manufacturer pass-through) and a 2-year warranty on our installation labour. Excludes vandalism, impact damage and physical breakage.",
  },
  {
    q: "Can you match my existing glass type (frosted, tinted, etc.)?",
    a: "Yes. We match frosted, tinted, patterned and tempered glass so the new unit looks like the rest of your windows.",
  },
  {
    q: "Is window defogging a good alternative?",
    a: "Defogging drills small holes in the glass and cleans out the moisture. It can make the glass look clearer for a while, but the original seal stays broken and the insulating gas is gone. A new sealed unit fixes the actual problem.",
  },
  {
    q: "How does the $30 site visit work?",
    a: "The $30 covers the technician’s travel, on-site measurement and professional assessment. If you proceed with the repair, the full $30 is credited toward your invoice. If you decide not to proceed, the $30 covers the visit and there are no other charges.",
  },
  {
    q: "Do you replace patio door glass?",
    a: "Yes. We replace sealed glass units in sliding patio doors, French doors and fixed panels. Same process: we measure the unit, have it custom-made, and install it in your existing door frame.",
  },
  {
    q: "Can you do multiple windows at once?",
    a: "Yes. Many homeowners fix several foggy windows in one visit. We measure all units during a single appointment, order them together, and install everything on the same day. Multi-window jobs are common and we handle them regularly.",
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
  title: "Foggy Window Repair Toronto | 5-Year Warranty | LuminaSky Glass",
  description:
    "Foggy windows? We replace the sealed glass unit and keep your frame. A fraction of full replacement cost. 5-year glass warranty + 2-year labour. Call 437-344-8490.",
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
              "LuminaSky Glass Services replaces failed sealed glass units across Toronto and the GTA, at a fraction of the cost of full window replacement."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* ── Hero ── */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Foggy window repair hero"
      >
        <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
          <Image
            src={HERO_IMAGE.src}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
                  {BREADCRUMBS.map((crumb, i) => (
                    <li key={crumb.url} className="flex items-center gap-2">
                      {i < BREADCRUMBS.length - 1 ? (
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
                Foggy Window Repair Toronto: Replace the Glass, Keep the Frame
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                Glass specialists, not a handyman side gig. We replace the
                failed sealed unit only, not the whole window, at a fraction of
                the cost of full replacement. Every job is backed by a{" "}
                <strong className="text-white">
                  5-year glass warranty + 2-year labour warranty
                </strong>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                >
                  Get a Written Quote
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15"
              >
                <Icon
                  className="w-5 h-5 text-accent shrink-0"
                  aria-hidden="true"
                />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Causes Foggy Windows ── */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="causes-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="causes-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            What Causes Foggy Windows?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Most windows in GTA homes use double or triple pane glass. Two or
              three panes are sealed together into one insulated glass unit
              (IGU). The space between the panes is filled with argon gas, and a
              desiccant inside the spacer absorbs moisture.
            </p>
            <p>
              Over time, heat, cold and UV break down the seal. Moisture gets
              in, the insulating gas escapes, and condensation forms between the
              panes. That is seal failure. Once it starts, the fog will not clear
              on its own, and it usually gets worse: haze, water droplets, and
              white mineral stains on the inside of the glass.
            </p>
            <p>
              The fix is replacing the sealed glass unit only, not the whole
              window. The frame, sash and hardware are usually still in good
              shape. We remove the failed unit and install a new one in your
              existing frame. Our sealed glass units are made by an
              IGMAC-certified manufacturer to the CGSB 12.8 standard.
            </p>
          </div>
        </div>
      </section>

      {/* ── Signs of a Failed Seal ── */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="signs-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Is Your Seal Failing?
            </span>
            <h2
              id="signs-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Signs Your Window Seal Has Failed
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              If you notice any of these, the sealed unit has likely failed and
              needs replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEAL_FAILURE_SIGNS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Repair vs Replacement ── */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="compare-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Know the Difference
            </span>
            <h2
              id="compare-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Sealed Unit Replacement vs. Full Window Replacement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full window replacement */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-500 mb-6">
                Full Window Replacement
              </h3>
              <ul className="space-y-4">
                {[
                  "Replaces the entire window, frame and all",
                  "Costs several times more than glass-only",
                  "Requires trim removal and drywall repair",
                  "Multi-day project per window",
                  "Often unnecessary when only the glass has failed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle
                      className="w-5 h-5 text-gray-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LuminaSky sealed unit replacement */}
            <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-6">
                LuminaSky Sealed Unit Replacement
              </h3>
              <ul className="space-y-4">
                {[
                  "Replaces only the failed glass unit",
                  "A fraction of the cost of full replacement",
                  "No trim removal, no drywall, no mess",
                  "Under one hour per window to install",
                  "5-year glass warranty + 2-year labour warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before / After Video ── */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="photos-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Real Results
            </span>
            <h2
              id="photos-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Before &amp; After: Foggy Window Repair
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

      {/* ── How It Works ── */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="process-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Simple Process
            </span>
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gray-900"
            >
              How It Works
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Glass is measured first, custom-made, then installed. Most jobs
              take 5 to 15 business days from measurement to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
            <p className="text-gray-700 font-medium">
              The $30 site visit fee is credited toward your repair. If you go
              ahead, the visit is free.
            </p>
          </div>
        </div>
      </section>

      {/* ── Warranty ── */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="warranty-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck
            className="w-12 h-12 text-accent mx-auto mb-4"
            aria-hidden="true"
          />
          <h2
            id="warranty-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            2-Year Labour + 5-Year Glass Warranty
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every foggy window repair is backed by a{" "}
            <strong className="text-primary">
              2-year warranty on our installation labour
            </strong>{" "}
            and a{" "}
            <strong className="text-primary">
              5-year manufacturer warranty on the sealed glass unit
            </strong>
            . If anything goes wrong with the seal or our workmanship, we come
            back and fix it at no cost.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Excludes vandalism, impact damage and physical breakage. Licensed
            and insured in Ontario.
          </p>
          <Link
            href="/warranty"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Read our full warranty policy
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── Window Brands ── */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="brands-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Works With All Brands
            </span>
            <h2
              id="brands-heading"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Common Window Brands We Service
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Foggy window repair works on virtually every window brand
              installed in GTA homes. Here are some of the brands we see most
              often:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {WINDOW_BRANDS.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-2 hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <CheckCircle2
                  className="w-4 h-4 text-accent shrink-0"
                  aria-hidden="true"
                />
                <span className="text-gray-900 text-sm font-medium">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-primary">
                Not sure if your windows can be repaired?
              </strong>{" "}
              Send us a photo of the foggy window. We will tell you if the glass
              unit can be replaced and give you a quote.
            </p>
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center gap-2 mt-4 text-accent font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email a Photo: {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── Have Multiple Foggy Windows? ── */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="multi-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="multi-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Have Multiple Foggy Windows?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Many homeowners discover that several windows have failed seals at
              the same time, especially in homes built during the same period.
              This is normal. Windows installed together tend to age together.
            </p>
            <p>
              We measure all units during a single appointment, order them
              together, and install everything on the same day. Multi-window
              jobs are common and we handle them regularly. You get one visit,
              one invoice, and one warranty covering all the work.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-md shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
            >
              Get a Written Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group shadow-sm"
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

      {/* ── Final CTA ── */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-label="Contact call to action"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/10 border border-accent/25 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
              Ready for Clear Windows Again?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              Send us a photo of your foggy window and we will confirm it can be
              fixed, give you a straight answer on timeline, and provide a
              written quote. No sales pitch, no surprise fees. Foggy window
              repair is part of our full{" "}
              <Link
                href="/services"
                className="text-primary font-semibold hover:underline"
              >
                glass repair service
              </Link>{" "}
              across the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Get a Written Quote
              </Link>
            </div>
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded text-sm"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
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

      <CTABanner
        title="Foggy Windows? We Fix Them."
        subtitle="Same-week measurement appointments available across the GTA."
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

      {/* ── Service Areas ── */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Foggy Window Repair Across the GTA
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We replace sealed glass units in{" "}
            <Link
              href="/foggy-glass-repair-toronto"
              className="text-primary font-semibold hover:underline"
            >
              Toronto
            </Link>
            ,{" "}
            <Link
              href="/foggy-glass-repair-vaughan"
              className="text-primary font-semibold hover:underline"
            >
              Vaughan
            </Link>
            ,{" "}
            <Link
              href="/foggy-glass-repair-mississauga"
              className="text-primary font-semibold hover:underline"
            >
              Mississauga
            </Link>
            ,{" "}
            <Link
              href="/foggy-glass-repair-thornhill"
              className="text-primary font-semibold hover:underline"
            >
              Thornhill
            </Link>{" "}
            and across the Greater Toronto Area. Glass is measured first,
            custom-made, then installed.{" "}
            <Link
              href="/areas-we-serve"
              className="text-primary font-semibold hover:underline"
            >
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Foggy Glass Repair by City ── */}
      <section className="bg-white border-t border-gray-200 py-12 md:py-16">
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
