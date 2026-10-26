import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Snowflake,
  AlertTriangle,
  Clock,
  Building2,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import {
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

const SHOWCASE_IMAGE = {
  src: "/images/skylight-before-after.png",
  alt: "Skylight restoration process: before with damage, in progress with technician working, after fully restored and crystal clear",
};

const PROBLEMS = [
  {
    title: "Active leaks",
    text: "Water dripping through or pooling around the skylight during rain or snowmelt. We inspect from inside and outside to find the real source: failed sealant, worn flashing, or a cracked glass seal.",
  },
  {
    title: "Condensation and fogging between panes",
    text: "Haze or moisture trapped between the glass layers means the sealed unit has failed. It will not clear on its own. We replace the glass unit inside your existing frame.",
    link: { href: "/foggy-windows", label: "Foggy glass repair" },
  },
  {
    title: "Cracked or broken skylight glass",
    text: "Hail, falling branches, thermal shock or impact damage. We replace the glass with a new sealed, tempered unit made to your skylight's size.",
  },
  {
    title: "Failed perimeter seals (IGU failure)",
    text: "The insulated glass unit seal breaks down over time, letting moisture in and reducing insulation. A new sealed unit restores clarity and energy performance.",
  },
  {
    title: "Damaged or missing flashing",
    text: "Flashing is the metal or membrane that seals the gap between the skylight frame and the roof. When it corrodes, lifts or cracks, water finds a way in.",
  },
  {
    title: "Rotted or warped skylight frames",
    text: "Wood-framed skylights can rot from prolonged moisture exposure. When the frame is too far gone for repair, we replace the full skylight, frame and glass.",
  },
  {
    title: "Ice dam damage after winter",
    text: "Ice dams form when heat escapes through the roof and melts snow that refreezes at the eaves. The backed-up water forces its way under flashing and into the skylight well.",
  },
  {
    title: "Hardware issues on venting skylights",
    text: "Operators, cranks and hinges on venting skylights wear out. We replace the hardware so the skylight opens, closes and seals properly again.",
  },
];

const SKYLIGHT_TYPES = [
  "Fixed skylights (non-opening)",
  "Venting skylights that open for fresh air",
  "Flat roof skylights",
  "Skylights in vaulted and cathedral ceilings",
  "Tubular skylights (sun tunnels)",
  "Dome skylights (supply and install, including building a new curb)",
  "Pyramid skylights and glass towers",
  "Velux, Fakro, ODL and custom skylights",
];

const PROCESS_STEPS = [
  { title: "Send photos or call 437-344-8490", desc: "A few photos from inside, and one from outside if safe to take, tell us most of what we need." },
  { title: "Get a written quote", desc: "Quotes from photos are free. If an in-person inspection is needed, the visit is $30, credited back if the work goes ahead." },
  { title: "We measure for glass", desc: "If the glass unit needs replacing, we measure the skylight and order a new sealed unit made to size." },
  { title: "New parts or glass delivered", desc: "Custom glass takes 5-15 business days depending on type and size. Leak and flashing repairs are often done sooner." },
  { title: "Clean installation with warranty", desc: "We install the new glass or complete the repair, leak-test the skylight, and leave you with a 2-year workmanship warranty on your invoice." },
];

const AREA_CITIES = [
  { name: "Toronto", slug: "toronto" },
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Thornhill", slug: "thornhill" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Markham", slug: "markham" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Brampton", slug: "brampton" },
  { name: "Oakville", slug: "oakville" },
  { name: "Burlington", slug: "burlington" },
  { name: "Woodbridge", slug: "woodbridge" },
  { name: "Aurora", slug: "aurora" },
  { name: "Newmarket", slug: "newmarket" },
  { name: "Caledon", slug: "caledon" },
  { name: "Pickering", slug: "pickering" },
  { name: "Ajax", slug: "ajax" },
];

const FAQS = [
  {
    q: "How much does it cost to fix a leaking skylight in Toronto?",
    a: "It depends on the cause of the leak, the size of the skylight, and how accessible the roof is. A sealant or flashing repair costs much less than a full glass replacement. Send us a photo for a free quote, or book a $30 site visit that gets credited back if the work goes ahead.",
  },
  {
    q: "Can you repair a skylight without replacing it?",
    a: "In most cases, yes. If the frame is sound, we replace only the failed glass unit or repair the flashing and seals. Full replacement is only needed when the frame itself is rotted or structurally damaged.",
  },
  {
    q: "My skylight is foggy between the panes. Can you fix it?",
    a: "Yes. Fog between the panes means the sealed glass unit has failed. We remove the old unit and install a new one inside your existing frame. The fog clears completely because the new unit is factory-sealed.",
    link: { href: "/foggy-windows", label: "Learn more about foggy glass repair" },
  },
  {
    q: "How long does skylight repair take?",
    a: "Leak and flashing repairs are often completed in a single visit. Glass replacement requires a measurement visit first, then 5-15 business days for the custom glass to be made, followed by a second visit for installation.",
  },
  {
    q: "Do you work on skylights for homes and businesses?",
    a: "Yes. We repair residential skylights of all types, as well as commercial skylights including pyramid skylights, flat skylights and glass towers in condos, offices and retail spaces.",
  },
  {
    q: "What causes skylights to leak?",
    a: "The most common causes in Toronto are failed flashing, dried-out perimeter sealant, cracked glass seals, and ice dam damage. Toronto's freeze-thaw cycles are especially hard on skylight seals and flashing membranes.",
  },
  {
    q: "Is a leaking skylight an emergency?",
    a: "An active leak during rain or snowmelt should be addressed quickly to prevent water damage to drywall, insulation and framing. We offer 24/7 emergency response and can tarp the skylight temporarily if a full repair cannot be done the same day.",
    link: { href: "/emergency-glass-repair", label: "Emergency glass repair" },
  },
  {
    q: "Can you replace just the glass in a skylight?",
    a: "Yes, and that is the most common skylight repair we do. We replace the insulated glass unit (IGU) with a new tempered, sealed unit made to the exact size of your skylight. You can upgrade to low-E or argon-filled glass at the same time.",
    link: { href: "/glass-replacement", label: "Glass replacement" },
  },
  {
    q: "Do you work with my insurance company?",
    a: "We provide all the documentation your insurer needs: photos, a written scope of work, and an itemized invoice. We do not deal with the insurer directly, but our paperwork is designed to make the claim straightforward.",
    link: { href: "/insurance-claims", label: "Insurance claims" },
  },
  {
    q: "Do you service skylights across the GTA or just Toronto?",
    a: "We service skylights across the entire Greater Toronto Area, from Burlington and Oakville in the west to Ajax and Pickering in the east, and north to Aurora, Newmarket and Caledon.",
    link: { href: "/areas-we-serve", label: "Full service area" },
  },
  {
    q: "What's the warranty on skylight repair?",
    a: "All skylight repairs come with a 2-year workmanship warranty. New sealed glass units carry a transferable Lifetime Warranty against seal failure.",
  },
  {
    q: "My skylight is old. Should I repair or replace it?",
    a: "Repair it if the frame is solid and only the glass or seals have failed. Replace it if the frame is rotted, warped, or structurally compromised. Most skylights from the 1990s and 2000s have sound frames but failed glass units, making glass replacement the better value.",
  },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Skylight Repair", url: "/skylights" },
];

export const metadata: Metadata = {
  title: {
    absolute: "Skylight Repair Toronto - Leaks, Glass, Hardware | LuminaSky",
  },
  description:
    "Leaking skylight or cracked glass? We repair all skylight types across Toronto and the GTA. Fast response, written price, 2-year workmanship warranty.",
  alternates: { canonical: "/skylights" },
  openGraph: {
    title: "Skylight Repair Toronto - Leaks, Glass, Hardware | LuminaSky",
    description:
      "Leaking skylight or cracked glass? We repair all skylight types across Toronto and the GTA. Fast response, written price, 2-year workmanship warranty.",
    url: "/skylights",
  },
};

export default function SkylightsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateServiceSchema(
              "Skylight Repair",
              "/skylights",
              "Skylight leak repair, skylight glass replacement, flashing repair and full skylight replacement across Toronto and the GTA. All brands serviced."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden">
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
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              {BREADCRUMBS.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index < BREADCRUMBS.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-white transition-colors">{crumb.name}</Link>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span className="text-white font-medium" aria-current="page">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Skylight Repair in Toronto: Leaks, Glass, Flashing &amp; Seals
            </h1>
            <p className="text-lg text-accent font-semibold mb-4">Fix Don&apos;t Replace</p>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              LuminaSky repairs all types of skylights across Toronto and the GTA, from active leaks and condensation to cracked glass and failed seals. In most cases we fix the problem without replacing the entire skylight, saving you a fraction of the cost of full replacement.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200 mb-8">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden="true" />24/7 emergency</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" aria-hidden="true" />Licensed &amp; insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" aria-hidden="true" />Written price before work</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" aria-hidden="true" />2-year workmanship warranty</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              >
                Send a Photo for a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call 437-344-8490
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Skylight Problems We Fix in Toronto */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="problems-heading" className="text-3xl font-bold text-gray-900 mb-8">
            Common Skylight Problems We Fix in Toronto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROBLEMS.map((problem) => (
              <div key={problem.title} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.text}
                  {problem.link && (
                    <>
                      {" "}
                      <Link href={problem.link.href} className="text-primary font-semibold hover:underline">
                        {problem.link.label} &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skylight Leak Repair in Toronto */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="leak-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="leak-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Skylight Leak Repair in Toronto
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Toronto&apos;s climate is one of the hardest on skylights in Canada. Freeze-thaw cycles crack sealant, ice dams force water under flashing, and UV exposure degrades rubber gaskets over a few seasons. When a skylight starts leaking, the source is rarely obvious from inside. Water can travel along rafters and sheathing before dripping onto the ceiling, making the stain appear far from the actual entry point.
            </p>
            <p>
              We inspect from both inside and outside to trace the leak to its source. Common causes include cracked or lifted flashing, dried-out perimeter sealant, a failed glass seal, and ice dam damage to the curb or membrane. Once we know where the water is getting in, we repair that specific point rather than applying sealant over the top, which is a temporary fix that traps moisture and makes the problem worse.
            </p>
            <p>
              For active leaks during rain or snowmelt, we offer{" "}
              <Link href="/emergency-glass-repair" className="text-primary font-semibold hover:underline">24/7 emergency response</Link>.
              If a full repair cannot be completed the same day, we tarp the skylight to stop the water until we can return with the right materials.
            </p>
          </div>
        </div>
      </section>

      {/* Skylight Glass Replacement */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="glass-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="glass-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Skylight Glass Replacement
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              When the glass itself is the problem, whether fogged, cracked, or shattered, we replace the insulated glass unit (IGU) inside your existing skylight frame. This is the most common skylight repair we perform, and it costs a fraction of replacing the entire skylight.
            </p>
            <p>
              Building code requires tempered safety glass in skylights. We measure the existing unit, order a new tempered sealed unit made to size, and install it once it arrives, typically 5-15 business days depending on glass type and dimensions. You can upgrade to low-E coated or argon-filled glass at the same time for better energy performance.
            </p>
            <p>
              New sealed glass units carry a transferable Lifetime Warranty against seal failure, plus our 2-year workmanship warranty on installation.{" "}
              <Link href="/glass-replacement" className="text-primary font-semibold hover:underline">Learn more about glass replacement &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why Skylights Fail in Toronto's Climate */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="climate-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="climate-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Why Skylights Fail in Toronto&apos;s Climate
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Toronto sees over 40 freeze-thaw cycles per winter. Each cycle expands and contracts the sealant between the glass and the frame, and between the frame and the roof. After 15-20 years, most sealants crack and let moisture in.
            </p>
            <p>
              UV exposure is the other factor. Skylights face the sky all day, so their gaskets and sealants degrade faster than those on vertical windows. Ice dams compound the problem: when warm air escapes through the roof and melts snow, the meltwater refreezes at the eave and backs up under flashing. Many of Toronto&apos;s skylights were installed in the 1990s and early 2000s. They are now entering the age where seal failure becomes common, making skylight glass replacement one of the most frequent repairs we do across the GTA.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Before/After */}
      <section className="bg-white px-4 md:px-8 py-16" aria-label="Project showcase">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Real Results
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Skylight Repair in Toronto
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

      {/* Emergency Skylight Repair */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="emergency-heading">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-500" aria-hidden="true" />
            </div>
            <div>
              <h2 id="emergency-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Emergency Skylight Repair
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  An active skylight leak can damage drywall, insulation and framing within hours. We respond 24/7 for emergency skylight leaks and storm damage across Toronto and the GTA, with no after-hours surcharge.
                </p>
                <p>
                  If a permanent repair cannot be completed on the same visit, we tarp or temporarily seal the skylight to stop the water and schedule the full repair as soon as materials are ready. We provide all the documentation you need for an{" "}
                  <Link href="/insurance-claims" className="text-primary font-semibold hover:underline">insurance claim</Link>:
                  photos, scope of work, and an itemized invoice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Condo Skylights */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="commercial-heading">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 id="commercial-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Commercial &amp; Condo Skylights
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We repair and replace glass in commercial skylights including pyramid skylights, flat skylights, and glass towers in condos, offices and retail spaces. For condo common-area skylights, we work directly with{" "}
                  <Link href="/property-managers" className="text-primary font-semibold hover:underline">property managers</Link>{" "}
                  and provide the documentation boards need for approval.
                </p>
                <p>
                  <Link href="/commercial-glass-repair" className="text-primary font-semibold hover:underline">Commercial glass repair &rarr;</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Skylights We Service */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="types-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="types-heading" className="text-3xl font-bold text-gray-900 mb-8">
            Types of Skylights We Service
          </h2>
          <ul className="space-y-3" aria-label="Skylight types">
            {SKYLIGHT_TYPES.map((type) => (
              <li key={type} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700">{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Does Skylight Repair Cost in Toronto? */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="cost-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="cost-heading" className="text-3xl font-bold text-gray-900 mb-6">
            What Does Skylight Repair Cost in Toronto?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Skylight repair cost depends on what is causing the problem, the size and type of skylight, whether the glass is standard or energy-efficient, and how accessible the roof is. A sealant or flashing repair costs much less than replacing a glass unit, and replacing the glass costs far less than replacing the entire skylight.
            </p>
            <p>
              We quote per job after seeing photos or inspecting in person. There are no hidden fees: you get a written price before any work starts. If you prefer an in-person inspection, the site visit is $30 and it gets credited toward the job.
            </p>
            <p>
              <Link href="/window-repair-cost" className="text-primary font-semibold hover:underline">What affects repair cost &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Safe, Insured Roof Work */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="safety-heading">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 id="safety-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Safe, Insured Roof Work
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Skylight repair means working at height on your roof. Our crews are fully insured for at-height work, and we protect your roof and interior during every job. Every repair finishes with a leak test so your skylight is weathertight before we leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Skylight Repair Process */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="process-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-gray-900 mb-8">
            Our Skylight Repair Process
          </h2>
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skylight Repair Service Area */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="areas-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Skylight Repair Service Area
          </h2>
          <p className="text-gray-500 mb-6 max-w-3xl">
            We repair skylights across Toronto and the Greater Toronto Area:
          </p>
          <div className="flex flex-wrap gap-2">
            {AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/window-repair-${city.slug}`}
                className="inline-flex items-center gap-1.5 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                {city.name}
              </Link>
            ))}
          </div>
          <p className="mt-4">
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline text-sm">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Skylight Repair FAQs */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Skylight Repair FAQs
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
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.a}
                  {faq.link && (
                    <>
                      {" "}
                      <Link href={faq.link.href} className="text-primary font-semibold hover:underline">
                        {faq.link.label} &rarr;
                      </Link>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Get Your Skylight Fixed Before the Next Rain"
        subtitle="Send a photo for a free quote, or call for same-day service."
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
