import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const HeroFormCard = dynamic(
  () => import("@/components/home/HeroFormCard").then((m) => m.HeroFormCard),
  { ssr: false }
);

const WhatsAppHeroButton = dynamic(
  () => import("@/components/home/WhatsAppHeroButton").then((m) => m.WhatsAppHeroButton),
  { ssr: false }
);

const STATS = [
  { value: "5.0★", label: "Google & HomeStars", href: "https://www.google.com/search?sca_esv=50e2bf8f38455036&sxsrf=ANbL-n7wSLiGxC2fDL8T78exI1FufMDcqA:1777236681407&kgmid=/g/11ylg1yw71&q=Lumina+Sky+Glass+Services&shem=dlvs1,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=de8e7fb04e2ff6dd&utm_source=dlvs1,rimspwouoe,sh/x/loc/uni/m1/1#mpd=~7335244370390807247/customers/reviews?p%3DCg51cGRhdGV0aW1lZGVzYxIDYWxs", external: true },
  { value: "24/7", label: "Emergency Response", href: "/contact", external: false },
  { value: "Since 2024", label: "Serving the GTA", href: "/about", external: false },
];

export function HeroSection() {
  return (
    <>
      {/* ── Main Hero ── */}
      <section
        className="relative overflow-hidden"
        aria-label="Hero section"
      >
        <Image
          src="/images/hero-background.webp"
          alt="Window glass repair service in Toronto"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
          aria-hidden="true"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAABD1bVSAAAAEElEQVR42mNkYPj/n4EBAwAFAAH/VHbVJAAAAABJRU5ErkJggg=="
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15, 30, 80, 0.72)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-12 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 lg:min-h-[600px] lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            {/* ── Left side: text content (55%) ── */}
            <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
              {/* Eyebrow pill */}
              <div>
                <span className="inline-flex items-center bg-white/10 border border-white/20 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                  Toronto&apos;s Repair-First Glass Specialists
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                Glass &amp; Window Repair In Toronto
              </h1>

              <p className="text-accent-light text-xl md:text-2xl font-semibold">
                Fix Don&apos;t Replace
              </p>

              <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl lg:max-w-none">
                <strong>LuminaSky Glass Services</strong> repairs windows and glass across 34 cities in the Greater Toronto Area. We serve homeowners and property managers with 24/7 emergency board-up, a 5-year warranty against seal failure on sealed glass units, and same-week measurement appointments.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all text-lg tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Book Your Service
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 text-sm">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Now: {PHONE}
                </a>
                <WhatsAppHeroButton />
              </div>
            </div>

            {/* ── Right side: form card (45%) — hidden on mobile to keep hero compact ── */}
            <div className="hidden lg:block lg:col-span-5">
              <HeroFormCard />
            </div>
          </div>
        </div>

        {/* Bottom wave into stats strip */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48 C360 0 1080 0 1440 48 L1440 48 L0 48 Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section
        className="bg-[#F8FAFC] border-b border-gray-200"
        aria-label="Company statistics"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200">
            {STATS.map(({ value, label, href, external }) => {
              const inner = (
                <>
                  <span className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                    {value}
                  </span>
                  <span className="text-sm text-gray-500 mt-1 leading-snug">
                    {label}
                  </span>
                </>
              );
              const cls = "flex flex-col items-center text-center px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors";
              return external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={label} href={href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
