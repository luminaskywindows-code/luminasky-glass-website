import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE_HREF } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Patio Door Repair", url: "/patio-door-repair" },
];

const PROBLEMS = [
  { title: "Hard to slide, grinding or jerking", desc: "The rollers are worn or seized, or the track is full of grit." },
  { title: "The door comes off the track", desc: "The rollers are damaged, the track lip is bent, or the panel is out of adjustment." },
  { title: "It won’t lock or latch", desc: "The panel has dropped and no longer meets the lock keeper." },
  { title: "Drafts and water at the bottom", desc: "The panel is sitting low and not compressing the weatherstripping." },
  { title: "Foggy glass", desc: "The sealed unit in the panel has failed.", link: { href: "/foggy-windows", text: "Foggy glass repair" } },
  { title: "Cracked or broken glass", desc: "We make tempered patio door glass to size.", link: { href: "/glass-replacement", text: "Glass replacement" } },
  { title: "A torn or broken screen door", desc: "We fit new mesh, rollers and frames.", link: { href: "/window-screens", text: "Screen repair" } },
];

const PROCESS_STEPS = [
  { step: "1", title: "Send a photo, or a short video of the door moving", desc: "It tells us most of what we need." },
  { step: "2", title: "Get a written price", desc: "Quotes are free from photos, or book a $30 site visit, credited back if the work goes ahead." },
  { step: "3", title: "We do the work", desc: "Roller, track and hardware repairs are usually done on the first visit. Glass is measured, made in 5-15 business days, and installed on a second visit." },
  { step: "4", title: "You get the warranty on your invoice", desc: "2 years on parts and labour for hardware." },
];

const FAQS = [
  {
    q: "Why is my sliding patio door so hard to open?",
    a: "Usually the rollers under the panel are worn or the track is full of grit, so the door drags instead of rolling. Cleaning the track helps for a while, but worn rollers need replacing to fix the problem properly.",
  },
  {
    q: "Can you replace the rollers on a sliding door?",
    a: "Yes. We remove the panel, fit new rollers, clean or cap the track, then re-hang and adjust the door so it slides, seals and locks correctly.",
  },
  {
    q: "Can you fix a damaged sliding door track?",
    a: "Yes. If the track is dirty we clean it, and if the running lip is dented or worn we cap it with a new track cover, without replacing the door or sill.",
  },
  {
    q: "Can you replace just the glass in a patio door?",
    a: "Yes. We replace the sealed glass unit in your existing panel with tempered safety glass made to size, which takes 5-15 business days depending on glass type and size.",
  },
  {
    q: "My patio door won’t lock. Is the lock broken?",
    a: "Often the lock is fine and the panel has dropped on worn rollers, so it no longer lines up with the lock keeper. New rollers and an adjustment usually fix it. If the lock is worn, we replace it.",
  },
  {
    q: "How much does patio door repair cost?",
    a: "It depends on what’s worn and the parts your door takes, so we quote per job. It’s typically a fraction of the cost of a new patio door. Send a photo or video for a free quote.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Patio Door Repair Toronto | LuminaSky Glass Services" },
  description:
    "Sliding patio door sticking or won’t lock? We replace rollers, fix tracks, adjust the panel and replace glass, with no new door needed. Free photo quote.",
  alternates: { canonical: "/patio-door-repair" },
  openGraph: {
    title: "Patio Door Repair Toronto | LuminaSky Glass Services",
    description:
      "Sliding patio door sticking or won’t lock? We replace rollers, fix tracks, adjust the panel and replace glass, with no new door needed. Free photo quote.",
    url: "/patio-door-repair",
  },
};

export default function PatioDoorRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateServiceSchema(
              "Patio Door Repair",
              "/patio-door-repair",
              "Sliding patio door repair in Toronto and the GTA: rollers, tracks, locks, handles and glass replacement."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Sliding Patio Door Repair in Toronto: Rollers, Tracks, Locks &amp; Glass
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              A patio door that drags, jumps the track or won&apos;t lock almost never needs replacing, because the glass and frame outlast the moving parts by decades. We replace worn rollers, clean or cap damaged tracks, and adjust the panel so it slides, seals and locks again. We also replace broken glass in your existing frame.
            </p>
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
            <Link href="/lifetime-warranty" className="inline-flex items-center gap-2 text-accent-light text-sm mt-4 hover:text-white transition-colors">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
              Transferable Lifetime Warranty on sealed glass
            </Link>
          </div>
        </div>
      </section>

      {/* Common Patio Door Problems We Fix */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="problems-heading" className="text-3xl font-bold text-gray-900 mb-8">
            Common Patio Door Problems We Fix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROBLEMS.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href} className="text-primary font-semibold hover:underline">
                        {item.link.text} &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sliding Door Roller Replacement */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="rollers-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="rollers-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Sliding Door Roller Replacement
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Rollers are the small wheels under the door panel that carry its full weight. Once they flatten or seize, the door drags on the track and wears the track out too. We lift the panel out and replace the rollers with matching or compatible parts. Then we clean the track, or cap it if the running lip is damaged, re-hang the panel and adjust it so it closes and locks properly. Most roller repairs are finished in one visit.
          </p>
          <Link href="/blog/sliding-patio-door-wont-slide" className="text-primary font-semibold hover:underline">
            Want to try a quick fix first? Read our guide: Patio Door Won&apos;t Slide &rarr;
          </Link>
        </div>
      </section>

      {/* Damaged Track Repair */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="track-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="track-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Damaged Track Repair
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A dented or worn track will chew through new rollers. Where the track is still sound we clean it thoroughly. Where the running lip is damaged, we cap it with a new track cover so the rollers have a smooth surface again, without replacing the door or the sill.
          </p>
        </div>
      </section>

      {/* Patio Door Glass Replacement */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="glass-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="glass-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Patio Door Glass Replacement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Building code requires tempered safety glass in patio doors. We measure the panel, have a new tempered sealed unit made (5-15 business days, depending on glass type and size), and install it in your existing panel. You can upgrade to Low-E or argon-filled glass at the same time. New sealed units carry a transferable Lifetime Warranty against seal failure, with the first 2 years including parts and labour.
          </p>
        </div>
      </section>

      {/* Locks, Handles and Weatherstripping */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="hardware-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="hardware-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Locks, Handles and Weatherstripping
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Worn locks, loose handles and flattened weatherstripping let cold air in and make the door feel insecure. Often the lock itself is fine and only the panel needs adjusting. Where the hardware is worn, we replace it with compatible parts and renew the weatherstripping so the door closes tight again.
          </p>
        </div>
      </section>

      {/* Repair or Replace */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="repair-replace-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="repair-replace-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Repair or Replace Your Patio Door?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Repair it if the frame is straight and solid. Replace it if the frame is rotted, badly bent or beyond adjustment. A new patio door is a big project, and a repair usually costs a fraction of it. We&apos;ll tell you which one you actually need.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/window-replacement" className="text-primary font-semibold hover:underline">
              Window replacement &rarr;
            </Link>
            <Link href="/window-repair-cost" className="text-primary font-semibold hover:underline">
              What affects the cost? &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="process-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Patio Door Repair FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Get Your Patio Door Sliding Again"
        subtitle="Send a photo for a free quote, or call for same-day service."
      />
    </>
  );
}
