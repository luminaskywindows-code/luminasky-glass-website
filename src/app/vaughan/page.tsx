import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Star,
  Clock,
  Camera,
  FileText,
  CalendarCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Glass & Window Repair in Vaughan",
  description:
    "LuminaSky serves all of Vaughan: Woodbridge, Maple, Kleinburg, Concord. Window repair, glass replacement, skylights, patio doors. 24/7 service. 5-year warranty.",
  alternates: { canonical: "/vaughan" },
};

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Areas We Serve", url: "/areas-we-serve" },
  { name: "Vaughan", url: "/vaughan" },
];

const VAUGHAN_SERVICES = [
  {
    href: "/window-repair-vaughan",
    title: "Window Repair",
    desc: "Broken seals, cracked panes, hardware and balance repairs for all window types.",
  },
  {
    href: "/foggy-glass-repair-vaughan",
    title: "Foggy Glass Repair",
    desc: "Condensation between panes? We replace the sealed glass unit and keep your frame.",
  },
  {
    href: "/front-door-glass-vaughan",
    title: "Front Door Glass",
    desc: "Decorative, frosted and clear glass inserts for entry doors and sidelites.",
  },
  {
    href: "/window-crank-repair-vaughan",
    title: "Window Crank Repair",
    desc: "Broken casement operators and crank handles repaired or replaced. Most jobs done same day.",
  },
  {
    href: "/patio-door-repair-vaughan",
    title: "Patio Door Repair",
    desc: "Rollers, tracks, locks and glass for sliding and hinged patio doors.",
  },
  {
    href: "/skylight-repair-vaughan",
    title: "Skylight Repair",
    desc: "Leak repair, glass replacement, flashing and seal work for all skylight types.",
  },
  {
    href: "/commercial-glass-repair-vaughan",
    title: "Commercial Glass",
    desc: "Storefront glass, commercial door glass and emergency board-up for Vaughan businesses.",
  },
  {
    href: "/emergency-glass-repair-vaughan",
    title: "Emergency Glass Repair",
    desc: "24/7 emergency board-up and glass replacement. No after-hours surcharge.",
  },
];

const NEIGHBOURHOODS = [
  "Woodbridge (L4L, L4H)",
  "Maple (L6A)",
  "Kleinburg (L0J)",
  "Concord (L4K)",
  "Thornhill (L4J, L3T)",
  "Vellore Village",
  "Sonoma Heights",
  "Patterson",
  "Brownridge",
  "West Woodbridge",
];

const PROCESS_STEPS = [
  {
    icon: Camera,
    step: "Send Photos",
    desc: "Snap a few pictures of the problem and send them by WhatsApp or our contact form. We quote from photos at no charge.",
  },
  {
    icon: FileText,
    step: "Written Quote",
    desc: "You get a written price covering glass, labour, materials and warranty before any work starts. No surprises.",
  },
  {
    icon: CalendarCheck,
    step: "Schedule",
    desc: "Pick a time that works for you. Glass is measured first, custom-made to size, then installed. Most window hardware repairs are completed on the same day, on the first visit.",
  },
  {
    icon: Wrench,
    step: "Repair and Warranty",
    desc: "We complete the work, clean up, and hand you a warranty. Sealed glass units carry a 5-year seal warranty and 2 years on workmanship. Hardware repairs carry 1 year on parts and labour.",
  },
];

const TRUST_SIGNALS = [
  { icon: Star, text: "70+ 5-Star Google Reviews" },
  { icon: ShieldCheck, text: "Licensed & Insured in Ontario" },
  { icon: Clock, text: "Available 24/7" },
  { icon: FileText, text: "Written Quote on the Spot" },
  { icon: ShieldCheck, text: "5-Year Seal Warranty" },
  { icon: Star, text: "Family-Owned Since 2024" },
];

const NEARBY_AREAS = [
  { href: "/window-repair-thornhill", name: "Thornhill" },
  { href: "/window-repair-richmond-hill", name: "Richmond Hill" },
  { href: "/window-repair-maple", name: "Maple" },
  { href: "/window-repair-woodbridge", name: "Woodbridge" },
  { href: "/window-repair-toronto", name: "Toronto" },
  { href: "/window-repair-mississauga", name: "Mississauga" },
  { href: "/window-repair-markham", name: "Markham" },
  { href: "/window-repair-king-city", name: "King City" },
];

const FAQS = [
  {
    q: "What areas of Vaughan do you serve?",
    a: "We serve all of Vaughan, including Woodbridge, Maple, Kleinburg, Concord, Vellore Village, Sonoma Heights, Patterson, Brownridge and the Thornhill side of Vaughan. If you are in Vaughan, we cover your area.",
  },
  {
    q: "Do you offer emergency glass repair in Vaughan?",
    a: "Yes. We respond to glass emergencies 24/7 across Vaughan. Broken windows, smashed patio doors and storm damage are all covered. There is no after-hours surcharge.",
  },
  {
    q: "What warranty do you provide on glass and window repairs?",
    a: "Sealed glass units carry a 5-year warranty against seal failure and 2 years on glass workmanship. Window hardware repairs (cranks, hinges, locks) carry 1 year on parts and labour. All warranties exclude vandalism, impact damage and physical breakage.",
  },
  {
    q: "How do I get a quote for window or glass repair in Vaughan?",
    a: "Send us a few photos of the problem by WhatsApp or through our contact form. We provide a written quote from photos at no charge. If an in-person look is needed, the site visit is $30 and gets credited toward your repair.",
  },
  {
    q: "Do you replace the whole window or just the glass?",
    a: "In most cases we replace only the part that failed: the sealed glass unit, the crank mechanism, or the door glass insert. Your existing frame stays in place. This costs a fraction of full window replacement and is less disruptive.",
  },
];

function generateSchemas() {
  return [
    generateOrganizationSchema(),
    generateBreadcrumbSchema(BREADCRUMBS),
    generateFAQSchema(FAQS),
  ];
}

export default function VaughanHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchemas()) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <nav
            className="flex items-center gap-1.5 text-blue-200 text-sm mb-6 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <Link
              href="/areas-we-serve"
              className="hover:text-white transition-colors"
            >
              Areas We Serve
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-white font-medium">Vaughan</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Glass & Window Repair in Vaughan
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mb-2">
            Serving Woodbridge, Maple, Kleinburg, Concord and all of Vaughan.
            Repair-first approach: fix the glass or hardware, keep the frame.
          </p>

          <Link
            href="/warranty"
            className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors text-sm mt-2"
          >
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>5-Year Seal Warranty + 2-Year Glass Workmanship</span>
          </Link>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-md shadow hover:shadow-lg transition-all"
            >
              Get a Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <WhatsAppLink className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition-colors cursor-pointer">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Send a Photo
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST_SIGNALS.map((signal) => (
              <div
                key={signal.text}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <signal.icon
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Vaughan */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Window and Glass Repair Across Vaughan
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Vaughan is one of the fastest-growing cities in the GTA, and its
              housing stock reflects that. From established two-storey homes in
              Woodbridge built in the late 1980s and 1990s to the newer
              subdivisions spreading north through Maple and Vellore Village,
              every generation of home has its own glass and hardware problems.
              Older sealed units fog up, builder-grade crank operators wear out,
              and front door glass cracks after years of UV and temperature
              swings.
            </p>
            <p>
              Kleinburg brings a different challenge: estate homes with large
              architectural windows, custom skylights and oversized patio doors
              that need precision measurement and larger sealed units.
              Concord sits at the commercial and residential crossover, where
              storefronts along Highway 7 and Keele need commercial glass
              service alongside the residential streets behind them.
            </p>
            <p>
              LuminaSky is based in nearby Thornhill and works in Vaughan every
              day. We specialise in repair, not replacement. That means we fix
              the part that failed (the glass unit, the crank, the door insert)
              and leave the frame in place. It is faster, less disruptive, and
              costs a fraction of tearing out and replacing a whole window.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Services in Vaughan
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Every service below has a dedicated Vaughan page with local detail,
            neighbourhoods served and pricing information.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VAUGHAN_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight
                    className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, i) => (
            <div key={item.step} className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <item.icon
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.step}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Vaughan Neighbourhoods We Serve
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl">
            We serve every neighbourhood in the City of Vaughan and the
            surrounding areas:
          </p>
          <div className="flex flex-wrap gap-2">
            {NEIGHBOURHOODS.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200"
              >
                <MapPin
                  className="w-3.5 h-3.5 text-primary"
                  aria-hidden="true"
                />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vaughan Guides */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Vaughan Guides & Articles
        </h2>
        <p className="text-gray-500 mb-8 max-w-2xl">
          In-depth guides covering window and glass repair topics specific to
          Vaughan neighbourhoods and housing stock.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/blog/window-repair-vaughan-neighbourhood-guide"
            className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary/30 transition-all"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Guide
            </span>
            <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-primary transition-colors">
              Window Repair in Vaughan: A Neighbourhood-by-Neighbourhood Guide
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              What we see in Woodbridge, Maple, Kleinburg, Concord, Thornhill
              and Vellore, and how repairs differ by area.
            </p>
          </Link>
          <Link
            href="/blog/vaughan-sealed-unit-replacement-winter"
            className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary/30 transition-all"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Seasonal
            </span>
            <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-primary transition-colors">
              Why Vaughan Homes Need Sealed Unit Replacement Before Winter
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Signs of seal failure, what happens if you wait, and why fall
              is the best time to replace foggy glass.
            </p>
          </Link>
          <Link
            href="/blog/commercial-glass-repair-vaughan-guide"
            className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary/30 transition-all"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Commercial
            </span>
            <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-primary transition-colors">
              Commercial Glass Repair in Vaughan: Storefronts, Offices and
              Plazas
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Highway 7 corridor, Woodbridge commercial district, Maple plazas,
              emergency board-ups and the repair process.
            </p>
          </Link>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          We Also Serve Nearby
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {NEARBY_AREAS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <MapPin
                className="w-4 h-4 text-primary shrink-0"
                aria-hidden="true"
              />
              {area.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
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

      {/* Final CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Fix Your Glass or Windows in Vaughan?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Send us a photo for a written quote, or call any time. We are
            available 24/7, including evenings, weekends and holidays.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Get a Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
