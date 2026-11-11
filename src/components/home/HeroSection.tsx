"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/gtag";

const HeroFormCard = dynamic(
  () => import("@/components/home/HeroFormCard").then((m) => m.HeroFormCard),
  { ssr: false }
);

const STATS = [
  { value: "5.0★", label: "Google & HomeStars", href: "https://share.google/S08QWQ5FO1niAmpXy", external: true },
  { value: "24/7", label: "Emergency Response", href: "/contact", external: false },
  { value: "Since 2024", label: "Serving the GTA", href: "/about", external: false },
];

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } },
  };

  const item = {
    hidden: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <>
      {/* ── Main Hero ── */}
      <section
        className="relative overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image via next/image for optimized loading */}
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
          aria-hidden="true"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAABD1bVSAAAAEElEQVR42mNkYPj/n4EBAwAFAAH/VHbVJAAAAABJRU5ErkJggg=="
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15, 30, 80, 0.72)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-12 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 lg:min-h-[600px] lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            {/* ── Left side: text content (55%) ── */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 flex flex-col gap-4 lg:gap-6 text-center lg:text-left"
            >
              {/* Eyebrow pill */}
              <motion.div variants={item}>
                <span className="inline-flex items-center bg-white/10 border border-white/20 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                  Toronto&apos;s Repair-First Glass Specialists
                </span>
              </motion.div>

              {/* H1 — no motion wrapper so it's visible in SSR for crawlers/LCP */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                Glass &amp; Window Repair In Toronto
              </h1>

              {/* Accent sub-headline */}
              <motion.p
                variants={item}
                className="text-accent-light text-xl md:text-2xl font-semibold"
              >
                Fix Don&apos;t Replace
              </motion.p>

              {/* Body paragraph */}
              <motion.p
                variants={item}
                className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl lg:max-w-none"
              >
                <strong>LuminaSky Glass Services</strong> repairs windows and glass across 34 cities in the Greater Toronto Area. We serve homeowners and property managers with 24/7 emergency board-up, a 5-year warranty against seal failure on sealed glass units, and same-week measurement appointments.
              </motion.p>

              {/* Primary CTA */}
              <motion.div variants={item} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all text-lg tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Book Your Service
                </Link>
              </motion.div>

              {/* Phone + WhatsApp links */}
              <motion.div variants={item} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 text-sm">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Now: {PHONE}
                </a>
                <button
                  type="button"
                  onClick={() => { trackWhatsAppConversion(); window.open(WHATSAPP_HREF, "_blank", "noopener,noreferrer"); }}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors cursor-pointer"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Send us a photo on WhatsApp
                </button>
              </motion.div>
            </motion.div>

            {/* ── Right side: form card (45%) — hidden on mobile to keep hero compact ── */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.65, delay: prefersReduced ? 0 : 0.2, ease: "easeOut" }}
              className="hidden lg:block lg:col-span-5"
            >
              <HeroFormCard />
            </motion.div>
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
