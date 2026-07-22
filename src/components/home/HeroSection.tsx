"use client";

import Link from "next/link";
import { Phone, CheckCircle2, Shield } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const TRUST_BADGES = [
  { icon: CheckCircle2, text: "Same-Day Service, 6 Days a Week" },
  { icon: Shield, text: "Licensed, Insured & WSIB-Registered Glaziers" },
  { icon: CheckCircle2, text: "Upfront Pricing - No Surprise Fees" },
  { icon: CheckCircle2, text: "1-Year Warranty" },
];

const STATS = [
  { value: "5,000+", label: "Windows Restored" },
  { value: "5.0★", label: "Google & HomeStars" },
  { value: "2 hrs", label: "Emergency Response" },
  { value: "Since 2024", label: "Serving the GTA" },
];

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
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
        style={{
          backgroundImage: "url('/images/hero-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15, 30, 80, 0.72)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-7"
          >
            {/* Eyebrow pill */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />
                Toronto&apos;s Repair-First Glass Specialists
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl break-words"
            >
              Glass Repair &amp; Window Service Across the GTA
              <br className="hidden sm:block" />
              <span className="block sm:inline mt-1 sm:mt-0">
                <span className="hidden sm:inline">{" "}- </span>
                <span className="text-accent-light">
                  Done Right the First Time
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-3xl"
            >
              LuminaSky restores clarity to foggy windows, replaces cracked
              glass, and repairs jammed cranks for homes and businesses across{" "}
              <span className="text-white font-medium">
                the Greater Toronto Area (GTA).
              </span>{" "}
              Our repair-first approach saves you{" "}
              <span className="text-accent-light font-semibold">
                60–80% vs. full window replacement.
              </span>
            </motion.p>

            {/* Trust badges - 2-col grid, wider cards */}
            <motion.div
              variants={item}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl"
              aria-label="Service guarantees"
            >
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-4 backdrop-blur-sm text-left"
                >
                  <Icon
                    className="w-5 h-5 text-accent-light shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white text-sm font-semibold leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-9 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              >
                Book Your Service
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold px-9 py-4 rounded-xl transition-all text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                aria-label={`Call us at ${PHONE}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now: {PHONE}
              </a>
            </motion.div>
          </motion.div>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center px-4 py-2"
              >
                <span className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  {value}
                </span>
                <span className="text-sm text-gray-500 mt-1 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
