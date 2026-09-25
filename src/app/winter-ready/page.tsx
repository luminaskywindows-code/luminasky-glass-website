import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Star,
  Shield,
  MapPin,
  Snowflake,
  ArrowRight,
  Droplets,
  Flame,
  Sun,
  Wrench,
  Thermometer,
  CalendarClock,
} from "lucide-react";
import {
  PHONE,
  PHONE_HREF,
  WHATSAPP_HREF,
  TESTIMONIALS,
} from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Winter Ready Window Check - $30 Inspection | LuminaSky Glass GTA",
  description:
    "Fogged glass, drafts, a window that will not close, or a cold room? Book a $30 Winter Ready Inspection across the GTA. Credited toward any work you book. Call 437-344-8490.",
  alternates: { canonical: "/winter-ready" },
};

const CHECKLIST = [
  "Sealed units checked for failed seals and trapped moisture",
  "Windows tested for proper close and lock",
  "Cranks, hinges and locks checked for wear",
  "Skylights checked for seal failure and leaks",
  "Draft check around frames and sashes",
  "A written summary of what needs work and what does not",
];

const PROBLEM_CARDS: {
  title: string;
  body: string;
  href: string | null;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    title: "That fog is not dirt",
    body: "When a window fogs between the panes, the seal has failed and the insulating gas is gone. You are paying to heat the outside. We replace the glass unit, not the whole window, and it takes about an hour.",
    href: "/foggy-windows",
    Icon: Droplets,
  },
  {
    title: "Your heating bill went up. Your windows might be why.",
    body: "When a sealed unit fails, the cold comes straight through. Most people blame the furnace. Replacing the glass costs a fraction of a new window.",
    href: "/foggy-windows",
    Icon: Flame,
  },
  {
    title: "You cleaned the skylight. It is still foggy.",
    body: "That is not dirt. The seal has failed and moisture is trapped between the panes, which means the skylight stopped insulating. We replace the glass, not the whole skylight.",
    href: "/skylights",
    Icon: Sun,
  },
  {
    title: "Window will not close? Do not replace it yet.",
    body: "Most windows that stop closing need a crank, a hinge or a lock, not a new window. We fix the part that failed and leave the rest alone. A couple of hundred dollars instead of over a thousand.",
    href: "/cranks",
    Icon: Wrench,
  },
  {
    title: "One room always colder than the rest?",
    body: "Most people turn up the heat or just close the door. Usually it is a failed seal or a broken window unit letting the cold straight in. A small fix, and the whole house feels different.",
    href: null,
    Icon: Thermometer,
  },
  {
    title: "In January you will wait two weeks. Right now you will not.",
    body: "The first cold week is when everyone calls at once. That is when a draft or a failed window sits for two weeks before anyone can get to it. Book the check now and it is done before the cold arrives.",
    href: null,
    Icon: CalendarClock,
  },
];

const REPAIR_POINTS = [
  "Repair just the glass unit, keep your existing frames",
  "Save 60 to 80 percent versus full window replacement",
  "Most repairs done in a single visit",
  "Licensed and insured in Ontario",
  "All work backed by our warranty",
];

const STEPS = [
  {
    num: 1,
    title: "Book the inspection",
    desc: "Call, or send a photo on WhatsApp if you would rather get a price first.",
  },
  {
    num: 2,
    title: "We come out",
    desc: "We check the windows and doors and tell you what is actually wrong.",
  },
  {
    num: 3,
    title: "You get a straight price",
    desc: "No upsell, no pressure. You decide what to fix.",
  },
  {
    num: 4,
    title: "We do the work",
    desc: "The $30 comes off your total.",
  },
];

const FAQS = [
  {
    q: "What is the Winter Ready Inspection?",
    a: "A full check of the windows and doors in your home before the cold sets in. We look for failed seals, drafts, windows that will not close and worn hardware, and give you a written summary of what needs work.",
  },
  {
    q: "Why does it cost $30?",
    a: "So we can give you real time on site instead of a rushed look. The $30 comes off your total if you book any of the work, so if you go ahead, the inspection costs you nothing.",
  },
  {
    q: "Can I get a price without a visit?",
    a: "Yes. Send us a photo on WhatsApp and we will quote from it at no charge. The $30 only applies if you want us to come out.",
  },
  {
    q: "Why does my window fog up between the panes?",
    a: "The seal around the insulated glass unit has failed and moisture is trapped inside. It will not clear on its own. The glass unit needs replacing, but the frame usually does not.",
  },
  {
    q: "Can a fogged window really raise my heating bill?",
    a: "A failed sealed unit has lost the insulating gas between the panes, so it no longer insulates the way it was built to. The cold comes through where it used to be blocked.",
  },
  {
    q: "My window will not close. Do I need a new window?",
    a: "Usually not. Most windows that stop closing need a crank, hinge or lock replaced. We fix the part that failed.",
  },
  {
    q: "Do you work in my area?",
    a: "We serve the entire GTA. Call 437-344-8490 to confirm.",
  },
  {
    q: "How soon can you come?",
    a: "We aim to book most jobs within a few days. That gets harder once the first cold week hits and everyone calls at once, which is why booking early matters.",
  },
];

const SELECTED_REVIEWS = [
  TESTIMONIALS[1], // Alvin Bruney - no upsell
  TESTIMONIALS[3], // William Potalivo - expertise
  TESTIMONIALS[0], // Rick David - savings
];

export default function WinterReadyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Winter Ready Inspection", url: "/winter-ready" },
  ];

  const schemaArray = [
    generateBreadcrumbSchema(breadcrumbs),
    generateServiceSchema(
      "Winter Ready Window Inspection",
      "/winter-ready",
      "Full window and door inspection before winter. We check for failed seals, drafts, windows that will not close and worn hardware."
    ),
    generateFAQSchema(FAQS),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArray) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/foggy-window-real.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-blue-200 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-medium">
              Winter Ready Inspection
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Get Your Windows Winter Ready
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            Fogged glass, a draft you cannot find, a window that will not
            close, one room that is always cold. All of it is fixable, and
            all of it is cheaper to fix now than to live with all winter.
          </p>

          {/* Offer line */}
          <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/40 rounded-md px-6 py-4 mb-8">
            <Snowflake
              className="w-6 h-6 text-accent-light shrink-0"
              aria-hidden="true"
            />
            <p className="text-white text-lg md:text-xl font-semibold">
              Winter Ready Inspection &mdash; $30, credited toward any
              work you book.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact?utm_source=winter-ready&utm_medium=hero"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Book Your $30 Inspection
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-green-400 text-green-300 font-semibold px-8 py-4 rounded-md hover:bg-green-400 hover:text-white transition-colors active:scale-95"
            >
              Send a photo on WhatsApp
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-200">
            <span className="flex items-center gap-1.5">
              <Star
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                aria-hidden="true"
              />
              5.0 on Google
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent-light" aria-hidden="true" />
              Licensed &amp; Insured in Ontario
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent-light" aria-hidden="true" />
              Serving the entire GTA
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: What the inspection covers */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Inspection"
            title="What the Winter Ready Inspection covers"
          />
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10 -mt-6">
            One visit. We go through the windows and doors in the house and
            tell you what is actually wrong, what is worth fixing, and what
            can wait.
          </p>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto">
            $30 for the visit, and it comes off your total if you book any
            of the work. Prefer a price first? Send us a photo on{" "}
            <a
              href={WHATSAPP_HREF}
              className="text-accent font-semibold hover:underline"
            >
              WhatsApp
            </a>{" "}
            and we will quote it free.
          </p>
        </div>
      </section>

      {/* Section 2: Six problems, one visit */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Common Problems"
            title="Six problems, one visit"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEM_CARDS.map((card) => {
              const CardIcon = card.Icon;
              const content = (
                <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <CardIcon
                      className="w-6 h-6 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.body}
                  </p>
                  {card.href && (
                    <div className="mt-4 flex items-center text-accent font-medium text-sm gap-1">
                      Learn More{" "}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  )}
                </div>
              );

              return card.href ? (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group block h-full"
                >
                  {content}
                </Link>
              ) : (
                <div key={card.title} className="h-full">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Fix it. Do not replace it. */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/bright-windows-section.png')",
        }}
        aria-labelledby="winter-trust-heading"
      >
        <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent-light mb-4">
            Our Approach
          </span>
          <h2
            id="winter-trust-heading"
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Fix it. Do not replace it.
          </h2>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Most homeowners think a fogged window or a window that will not
            close means replacing the whole thing. In most cases we repair
            just the glass unit or the failed part, which keeps your
            existing frames and saves 60 to 80 percent versus a full
            replacement.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            {REPAIR_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent-light shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-blue-100">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact?utm_source=winter-ready&utm_medium=trust-section"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Book Your $30 Inspection
          </Link>
          <p className="mt-3 text-xs text-blue-300">
            Quote by visit: $30 &nbsp;|&nbsp; Quote based on photo: Free
          </p>
          <p className="text-[10px] text-blue-300/70 italic mt-0.5">
            *The $30 visit fee is credited toward your final payment if you
            proceed with the work
          </p>
        </div>
      </section>

      {/* Section 4: How it works */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="The Process" title="How it works" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section
        className="py-16 md:py-20 px-4 md:px-8 bg-gray-50"
        aria-labelledby="winter-reviews-heading"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Our Customers Say"
            subtitle="Real 5-star Google reviews from homeowners across the Greater Toronto Area."
            id="winter-reviews-heading"
          />

          <div className="flex items-center justify-center gap-3 mb-10 -mt-4">
            <div className="flex gap-0.5" aria-label="5.0 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="font-semibold text-gray-700">5.0</span>
            <span className="text-gray-400 text-sm">on Google</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SELECTED_REVIEWS.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                location={t.location}
                rating={t.rating}
                text={t.text}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://share.google/S08QWQ5FO1niAmpXy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors"
            >
              Read all reviews on Google
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section
        className="py-16 md:py-20 px-4 md:px-8 bg-white"
        aria-labelledby="winter-faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            id="winter-faq-heading"
          />

          <Accordion className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-gray-100 rounded-xl px-4 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book it now, not in January
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            The first cold week is when everyone calls at once. Right now
            we can get to you quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contact?utm_source=winter-ready&utm_medium=final-cta"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md shadow-md hover:bg-gray-50 transition-colors active:scale-95"
            >
              Book Your $30 Winter Ready Inspection
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-green-400 text-green-300 font-semibold px-8 py-4 rounded-md hover:bg-green-400 hover:text-white transition-colors active:scale-95"
            >
              Send a photo on WhatsApp
            </a>
          </div>

          <p className="text-blue-200 text-xs">
            Winter Ready Inspection $30, credited toward any work you book.
            Photo quotes are free.
          </p>
        </div>
      </section>
    </>
  );
}
