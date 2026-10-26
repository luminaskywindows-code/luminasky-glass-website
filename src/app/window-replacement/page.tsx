import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ChevronRight,
} from "lucide-react";
import InlineVideoPlayer from "@/components/video/InlineVideoPlayer";
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
  src: "/images/services/window-replacement-service.jpg",
  alt: "LuminaSky team member installing new window frame with professional flashing tape during full window replacement",
};

const BENEFITS = [
  "Honest assessment: we quote both repair and replacement when both are realistic",
  "A written fixed price before any work begins",
  "Family-run crew: the people who quote are the people who install",
  "All window types: casement, hung, slider, fixed, bay, bow, basement",
  "Old window removed, new one installed, trim finished, debris taken away",
];

const PROCESS = [
  {
    step: "Book a Visit",
    desc: "We come to your home to measure and assess. No all-day sales presentation.",
  },
  {
    step: "Fixed Quote",
    desc: "You get a written, fixed price for the job before any work begins.",
  },
  {
    step: "Order & Schedule",
    desc: "We order your windows and book the install date that works for you.",
  },
  {
    step: "Install & Cleanup",
    desc: "We remove the old window, install the new one, finish the trim, and take the debris.",
  },
];

const REPLACEMENT_TRIGGERS = [
  "The frame is rotted, warped or cracked",
  "Parts for your window are no longer made",
  "The window leaks air or water even after repairs",
  "You're renovating and want a new style or size",
];

const FAQS = [
  {
    q: "When does replacement make sense over repair?",
    a: "When the frame is rotted, cracked, or out of square. When the window will not open, close, or lock properly and parts are discontinued. When you feel a draft along the frame even with the window shut. When condensation and mould keep coming back on the frame itself.",
  },
  {
    q: "What types of windows do you install?",
    a: "Casement and awning, double and single hung, sliders, fixed and picture windows, bay and bow windows, and basement and egress windows.",
  },
  {
    q: "Will you try to upsell me on a replacement?",
    a: "No. Our business runs on repeat customers and referrals, so talking you into a project you do not need would cost us more than it makes us. We quote both repair and replacement when both are realistic and tell you honestly which we would choose.",
  },
  {
    q: "How much does window replacement cost in Toronto?",
    a: "It depends on the window size, type, glass package and how many windows you're replacing. We give you a written fixed price before any work begins, so there are no surprises.",
  },
  {
    q: "How long does window replacement take?",
    a: "Windows are custom-made to size, so there's a production time after measurement. Installation day is usually one visit. We'll give you the timeline with your quote.",
  },
];

const RELATED_SLUGS = ["foggy-windows", "window-cranks", "skylights"];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Window Replacement", url: "/window-replacement" },
];

export const metadata: Metadata = {
  title: "Window Replacement Toronto & Vaughan",
  description:
    "Full window replacement for GTA homes. LuminaSky replaces old, drafty and failing windows with a fixed quote and no pressure sales.",
  alternates: { canonical: "/window-replacement" },
};

export default function WindowReplacementPage() {
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
              "Full Window Replacement",
              "/window-replacement",
              "LuminaSky Glass Services replaces old, drafty and failing windows across Toronto and the GTA with a written fixed price.",
              { minPrice: 800, maxPrice: 3000, priceDescription: "Full window replacement including frame." }
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Window replacement hero section"
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
                Window Replacement Toronto &amp; Vaughan
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-4 max-w-2xl">
                Old, drafty or rotting windows? We replace them with a written
                fixed price, and we&apos;ll tell you honestly if a repair is enough.
              </p>
              <p className="text-blue-100 leading-relaxed mb-4 max-w-2xl">
                Sometimes glass and hardware are not the answer. If the frame
                itself is rotted, warped or so old that parts no longer exist,
                replacing the window is the cheaper decision over the next ten
                years.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl">
                We are a repair company first, which means we will tell you when
                a repair is enough. When it is not, we handle the replacement
                from measurement to cleanup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Book a Measurement
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

            <div>
              <InlineVideoPlayer
                videoId="3d920rntHYw"
                title="Watch a full window replacement in Toronto"
                isShort={true}
                className="w-full max-w-sm mx-auto"
              />
              <div className="mt-4 text-center">
                <a
                  href="https://youtube.com/shorts/3d920rntHYw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white underline underline-offset-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="about-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            About This Service
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We replace windows when repair no longer makes financial sense:
              when the frame is rotted, warped, or so old that replacement parts
              are discontinued. Our focus on repair means we will always tell you
              honestly which option saves you more over the long run.
            </p>
            <p>
              We handle the full job: measure, order, remove the old window,
              install the new one, finish the interior and exterior trim, and
              haul away the debris. One crew, one visit for the install, no
              subcontractors.
            </p>
          </div>
        </div>
      </section>

      {/* When Window Replacement Makes Sense */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="when-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="when-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            When Window Replacement Makes Sense
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most foggy or hard-to-open windows can be repaired. Replacement is
            the right call when:
          </p>
          <ul className="space-y-3 mb-6" aria-label="Replacement triggers">
            {REPLACEMENT_TRIGGERS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            If a repair will do the job, we&apos;ll tell you and quote that instead.
          </p>
        </div>
      </section>

      {/* Vinyl Windows Built for Ontario Winters */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="vinyl-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="vinyl-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Vinyl Windows Built for Ontario Winters
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Toronto homeowners need energy efficient windows that can handle long,
            cold winters. Most of the windows we install are vinyl windows, custom-made to the
            exact window size of your opening. Vinyl doesn&apos;t rot, doesn&apos;t need
            painting, and insulates well. We offer double pane glass with low-E
            coating and argon gas fill for better energy efficiency. Energy Star
            certified windows and triple pane windows are available on request.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
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

      {/* Photo */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="photo-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Work
            </span>
            <h2
              id="photo-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Window Replacement in Progress
            </h2>
          </div>
          <figure className="flex flex-col gap-2">
            <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="text-sm text-gray-500 text-center">
              New window frame being installed with professional flashing and
              sealing
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Our Installation Process */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              How It Works
            </span>
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Our Installation Process
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Our window installation service is done by our own family-run crew,
            from measurement to cleanup. No subcontractors.
          </p>
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

      {/* Mid-page CTA */}
      <section className="py-12 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-semibold mb-6">
            Book an on-site measurement ($30, credited toward your job) and get
            a written, fixed-price quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
          >
            Book a Measurement
          </Link>
        </div>
      </section>

      {/* Window Replacement in Vaughan, Toronto and the GTA */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="areas-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="areas-heading"
            className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Window Replacement in Vaughan, Toronto and the GTA
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We&apos;re based in{" "}
            <Link
              href="/window-repair-vaughan"
              className="text-primary hover:underline"
            >
              Vaughan
            </Link>{" "}
            and{" "}
            <Link
              href="/window-repair-thornhill"
              className="text-primary hover:underline"
            >
              Thornhill
            </Link>
            , so window replacement Vaughan homeowners need is close to home for
            us. We also do window replacement in{" "}
            <Link
              href="/window-repair-toronto"
              className="text-primary hover:underline"
            >
              Toronto
            </Link>
            ,{" "}
            <Link
              href="/window-repair-north-york"
              className="text-primary hover:underline"
            >
              North York
            </Link>
            ,{" "}
            <Link
              href="/window-repair-richmond-hill"
              className="text-primary hover:underline"
            >
              Richmond Hill
            </Link>
            ,{" "}
            <Link
              href="/window-repair-markham"
              className="text-primary hover:underline"
            >
              Markham
            </Link>
            ,{" "}
            <Link
              href="/window-repair-woodbridge"
              className="text-primary hover:underline"
            >
              Woodbridge
            </Link>
            ,{" "}
            <Link
              href="/window-repair-maple"
              className="text-primary hover:underline"
            >
              Maple
            </Link>{" "}
            and across the GTA.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
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
        title="Ready to Replace Your Windows?"
        subtitle="Call now: same-day quotes available across the GTA."
      />
    </>
  );
}
