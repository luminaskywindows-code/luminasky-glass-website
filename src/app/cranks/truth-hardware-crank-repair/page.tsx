import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Star,
  Wrench,
  MessageCircle,
  FileText,
  XCircle,
  AlertTriangle,
  Users,
  MapPin,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Truth Hardware Window Crank Repair GTA | 1-Year Warranty | LuminaSky Glass",
  description:
    "Truth Hardware crank repair across the GTA. We stock AmesburyTruth operators, handles and arms for casement and awning windows. $30 visit credited back. 1-year warranty. Call 437-344-8490.",
  alternates: { canonical: "/cranks/truth-hardware-crank-repair" },
};

/* ── Data ── */

const TRUST_BADGES = [
  { icon: Star, label: "60+ 5-Star Google Reviews" },
  { icon: ShieldCheck, label: "1-Year Warranty" },
  { icon: Users, label: "Family-Owned Since 2024" },
  { icon: MapPin, label: "Serves All GTA" },
  { icon: FileText, label: "Written Quote on the Spot" },
];

const TRUTH_LINES = [
  {
    name: "Encore Operator",
    desc: "The most common Truth operator found in Canadian homes. Used in single-arm casement and awning windows from the 1990s onward.",
  },
  {
    name: "Entrygard Operator",
    desc: "A heavy-duty operator used in older commercial and residential casement windows. Known for its metal housing and worm-gear drive.",
  },
  {
    name: "Maxim Operator",
    desc: "A compact operator line used in builder-grade vinyl windows. Common in townhomes and tract housing built between 2000 and 2015.",
  },
  {
    name: "Roto Gear Operator",
    desc: "Found in European-style tilt-turn and casement windows. Uses a different gear profile than North American operators.",
  },
  {
    name: "Dyad Dual-Arm System",
    desc: "A twin-arm operator for wide casement windows. Both arms must move in sync, and failure on one side puts stress on the other.",
  },
];

const TRUTH_PROBLEMS = [
  {
    title: "Stripped operator gears",
    desc: "Internal nylon or brass gears wear down over years of use, causing the handle to spin without moving the sash. We replace the full operator assembly.",
  },
  {
    title: "Broken folding crank handle",
    desc: "The handle snaps at the base or the fold joint. We match the spline count and install a compatible Truth replacement handle.",
  },
  {
    title: "Bent or disconnected operator arm",
    desc: "The arm that pushes the window open bends from forced operation or detaches from the track. We straighten or replace the arm and re-seat it.",
  },
  {
    title: "Seized operator from corrosion",
    desc: "Moisture and condensation corrode the gearbox housing over time. If the mechanism cannot be freed, we replace the entire operator unit.",
  },
  {
    title: "Split operator housing",
    desc: "Plastic housings on older Truth operators crack from UV exposure or overtightening. We swap the full assembly with a matching unit.",
  },
  {
    title: "Window won't close flush",
    desc: "Worn hinges or a misaligned operator prevent the sash from sealing. We adjust or replace the hardware so the window closes tight and locks securely.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Call or send a photo on WhatsApp",
    desc: "Snap a picture of the broken Truth operator and send it over. We will identify the part and let you know what to expect.",
  },
  {
    step: "2",
    title: "$30 visit with a written quote",
    desc: "Our technician visits, assesses the hardware on the spot, and gives you a written quote before starting any work.",
  },
  {
    step: "3",
    title: "$30 credited back when you proceed",
    desc: "The visit fee is applied directly to the cost of your repair. If you go ahead, the visit is free.",
  },
];

const FAQS = [
  {
    q: "My windows are 20+ years old. Can you still get Truth Hardware parts?",
    a: "Yes. Truth Hardware (now AmesburyTruth) has been the dominant operator manufacturer in North America for decades. We maintain supplier relationships for both current and discontinued Truth product lines, including Encore, Entrygard, and Maxim operators.",
  },
  {
    q: "How do I know which Truth operator I have?",
    a: "Send us a photo of the operator (the metal box attached to the window frame near the handle). Most Truth operators have a model or part number stamped on the housing. If the number is worn off, we identify it during the $30 assessment visit.",
  },
  {
    q: "Do you replace the whole window if the Truth operator is discontinued?",
    a: "No. Even when the exact model is discontinued, compatible replacement operators are almost always available. Full window replacement is only recommended when the frame or sash is structurally compromised, not because of a worn crank.",
  },
  {
    q: "What is covered under the 1-year warranty?",
    a: "The 1-year warranty covers the parts we install and the labour on the specific repair performed. It does not cover new damage from vandalism, impact, forced operation, or wear on hardware we did not service. If the same hardware we repaired fails within 12 months, we return at no charge.",
  },
  {
    q: "Can you fix Truth operators in condo buildings?",
    a: "Yes. We work in condos, high-rises, and townhome complexes across the GTA. If building access requires scheduling or a permit, we coordinate with property management ahead of time.",
  },
  {
    q: "How long does a Truth operator replacement take?",
    a: "Most Truth operator replacements are completed in under an hour per window. If we have the part in stock (which covers the majority of Encore and Entrygard models), the repair is done on the first visit.",
  },
];

export default function TruthHardwareCrankRepairPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Window Crank Repair", url: "/cranks" },
    { name: "Truth Hardware Crank Repair", url: "/cranks/truth-hardware-crank-repair" },
  ]);

  const serviceSchema = generateServiceSchema(
    "Truth Hardware Window Crank Repair",
    "/cranks/truth-hardware-crank-repair",
    "Professional Truth Hardware (AmesburyTruth) window crank and operator repair across the Greater Toronto Area. Encore, Entrygard, Maxim, Roto and Dyad operators serviced. 1-year warranty on parts and labour."
  );

  const faqSchema = generateFAQSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema, faqSchema]),
        }}
      />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 px-4 md:px-8">
        <ol className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/cranks" className="hover:text-primary transition-colors">Window Crank Repair</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">Truth Hardware Crank Repair</li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Truth Hardware Specialists
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Truth Hardware Window Crank Repair Across the GTA
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
            We stock AmesburyTruth operators, handles and arms for casement and awning windows.
            Most repairs are completed on the same day, on the first visit. $30 assessment credited back when you proceed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Get a Written Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="bg-white border-b border-gray-100 py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-xs font-semibold text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is Truth Hardware? ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="what-is-truth">
        <div className="max-w-3xl mx-auto">
          <h2 id="what-is-truth" className="text-3xl font-bold text-gray-900 mb-6">
            What Is Truth Hardware?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Truth Hardware is the original brand name behind the majority of casement and awning window
              operators installed in Canadian homes. In 2006, Truth merged with Amesbury Group to form{" "}
              <strong className="text-gray-900">AmesburyTruth</strong>, but most homeowners still
              know it simply as &ldquo;Truth Hardware.&rdquo;
            </p>
            <p>
              If your window has a crank handle that folds flat, and a metal operator box mounted on
              the frame near the bottom of the sash, there is a strong chance it uses a Truth-manufactured
              operator. These operators are found in windows from dozens of major brands, including
              North Star, Jeld-Wen, Loewen, All Weather, and many others.
            </p>
            <p>
              The operator is the mechanical heart of the window. When it fails, the window either
              won&apos;t open, won&apos;t close, or won&apos;t seal properly. The good news: operator replacement
              is a repair, not a window replacement. We carry the parts and complete most Truth
              operator repairs on the first visit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Common Truth Operator Lines ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="operator-lines">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Hardware We Service
            </span>
            <h2 id="operator-lines" className="text-3xl font-bold text-gray-900">
              Common Truth Operator Lines
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {TRUTH_LINES.map((line) => (
              <div
                key={line.name}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-1">{line.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{line.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Truth Crank Problems ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Problems We Fix
            </span>
            <h2 id="problems-heading" className="text-3xl font-bold text-gray-900">
              Common Truth Hardware Crank Problems
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {TRUTH_PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="bg-gray-50 rounded-xl border border-gray-100 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Wrench className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{problem.title}</h3>
                    <p className="text-gray-500 text-sm leading-snug">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Your Window Brand Doesn't Matter ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="brand-section">
        <div className="max-w-3xl mx-auto">
          <h2 id="brand-section" className="text-3xl font-bold text-gray-900 mb-6">
            Why Your Window Brand Does Not Matter
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Many homeowners call and say &ldquo;I have North Star windows&rdquo; or &ldquo;I have Jeld-Wen windows&rdquo;
              and assume they need to contact the window manufacturer. In most cases, the window
              company did not make the crank. They bought it from Truth Hardware (now AmesburyTruth)
              and installed it during assembly.
            </p>
            <p>
              That means the replacement operator comes from the same hardware supplier, regardless
              of what name is on the window frame. We match the operator by its mechanical profile:
              arm length, gear type, mounting pattern, and spline count. The window brand label is
              helpful but not what determines the part.
            </p>
            <p>
              This is why calling your window company for a crank repair often leads to a
              full-window replacement quote. They sell windows, not hardware. We repair hardware.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison: Handyman vs. LuminaSky ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="comparison-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="comparison-heading" className="text-3xl font-bold text-gray-900">
              Who Should Fix Your Truth Operator?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Handyman column */}
            <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Handyman Option</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "General repairs, not window hardware",
                  "May not carry Truth operator parts",
                  "No written warranty or unclear terms",
                  "Price may change once work begins",
                  "May recommend full window replacement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* LuminaSky column */}
            <div className="rounded-2xl border-2 border-accent p-6 bg-accent/5 relative">
              <span className="absolute -top-3 left-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Recommended
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-4">LuminaSky Glass Services</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Window hardware specialists",
                  "AmesburyTruth parts in stock",
                  "1-year full warranty on every repair",
                  "Written quote before work begins",
                  "Repair first, replace only when necessary",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="how-it-works">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Simple Process
            </span>
            <h2 id="how-it-works" className="text-3xl font-bold text-gray-900">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="warranty-heading">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" aria-hidden="true" />
          <h2 id="warranty-heading" className="text-3xl font-bold text-gray-900 mb-4">
            1-Year Full Warranty on Truth Hardware Repairs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every Truth operator repair is backed by a{" "}
            <strong className="text-primary">1-year full warranty covering parts and labour</strong>.
            If anything goes wrong with the repair within a year, we come back and fix it at no cost.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Excludes vandalism, impact damage, and physical breakage.
            Licensed and insured in Ontario.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Truth Hardware FAQ
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
      <section className="py-16 px-4 md:px-8 bg-white" aria-label="Contact call to action">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/10 border border-accent/25 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
              Truth Operator Broken? Let Us Fix It
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              Send us a photo of the operator and we will identify the part and
              give you a straight answer on cost and availability. No sales pitch,
              no surprise fees. Truth Hardware repair is part of our full{" "}
              <Link
                href="/cranks"
                className="text-primary font-semibold hover:underline"
              >
                window crank repair
              </Link>{" "}
              service across the GTA.
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

      {/* ── Service Areas ── */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Truth Hardware Repair Across the GTA</h2>
          <p className="text-gray-600 leading-relaxed">
            We repair Truth Hardware operators, handles and arms in{" "}
            <Link href="/window-repair-toronto" className="text-primary font-semibold hover:underline">Toronto</Link>,{" "}
            <Link href="/window-repair-vaughan" className="text-primary font-semibold hover:underline">Vaughan</Link>,{" "}
            <Link href="/window-repair-mississauga" className="text-primary font-semibold hover:underline">Mississauga</Link>,{" "}
            <Link href="/window-repair-thornhill" className="text-primary font-semibold hover:underline">Thornhill</Link> and across the Greater Toronto Area. Most window hardware repairs are completed on the same day, on the first visit.{" "}
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Legal Disclaimer ── */}
      <section className="py-6 px-4 md:px-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-xs leading-relaxed text-center">
            <AlertTriangle className="w-3 h-3 inline-block mr-1 -mt-0.5" aria-hidden="true" />
            LuminaSky Glass Services is not affiliated with, endorsed by, or sponsored by
            AmesburyTruth, Truth Hardware, or any window manufacturer. All brand names and
            trademarks mentioned on this page are the property of their respective owners and
            are used for identification purposes only.
          </p>
        </div>
      </section>

      <CTABanner
        title="Need a Different Window Crank Repaired?"
        subtitle="We repair all major operator brands, not just Truth. See our full crank repair service."
      />
    </>
  );
}
