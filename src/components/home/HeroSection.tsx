"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { getSourceData, type SourceData } from "@/lib/source-tracking";

const SERVICE_OPTIONS = [
  "Foggy Glass Repair",
  "Window Crank / Hardware Repair",
  "Front Door Glass",
  "Full Window Replacement",
  "Window & Door Screens",
  "Skylight Repair",
  "Something else / not sure",
];

const STATS = [
  { value: "5,000+", label: "Windows Restored" },
  { value: "5.0★", label: "Google & HomeStars" },
  { value: "2 hrs", label: "Emergency Response" },
  { value: "Since 2024", label: "Serving the GTA" },
];

interface HeroFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface HeroFormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

const INITIAL: HeroFormData = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

function HeroFormCard() {
  const [formData, setFormData] = useState<HeroFormData>(INITIAL);
  const [errors, setErrors] = useState<HeroFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [sourceData, setSourceData] = useState<SourceData | null>(null);

  useEffect(() => {
    setSourceData(getSourceData());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof HeroFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): HeroFormErrors => {
    const e: HeroFormErrors = {};
    if (!formData.name.trim()) e.name = "Please enter your name";
    if (!formData.phone.trim()) {
      e.phone = "Please enter your phone number";
    } else if (!/^[\d\s\-\+\(\)]{10,15}$/.test(formData.phone)) {
      e.phone = "Please enter a valid phone number";
    }
    if (!formData.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const sd = sourceData || getSourceData();
    const firstVisitFormatted = sd.first_visit_at
      ? new Date(sd.first_visit_at).toLocaleDateString("en-CA", { timeZone: "America/Toronto" })
      : "-";

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          phone: formData.phone,
          email: "-",
          service: formData.service,
          city: "-",
          contact_method: "phone",
          message: formData.message || "(No description provided)",
          heard_about: "Hero form",
          referred_by: "",
          source: sd.source || "unknown",
          utm_source: sd.utm_source || "-",
          utm_medium: sd.utm_medium || "-",
          utm_campaign: sd.utm_campaign || "-",
          gclid: sd.gclid || "-",
          fbclid: sd.fbclid || "-",
          referrer: sd.referrer || "direct",
          landing_page: sd.landing_page || "-",
          first_visit: firstVisitFormatted,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      setFormData(INITIAL);
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof HeroFormErrors) =>
    `w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 text-sm ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  if (submitStatus === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
        <div className="text-center py-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Thanks! We got it.
          </h3>
          <p className="text-gray-600">Expect a call shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Get Your Free Quote</h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Quick quote form">
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm" role="alert">
            Something went wrong. Please call{" "}
            <a href={PHONE_HREF} className="font-semibold underline">{PHONE}</a>{" "}
            or try again.
          </div>
        )}

        {/* Name */}
        <div>
          <label htmlFor="hero-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            autoComplete="name"
            className={inputClass("name")}
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="hero-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="416-555-0100"
            autoComplete="tel"
            className={inputClass("phone")}
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="hero-service" className="block text-sm font-semibold text-gray-700 mb-1.5">
            What do you need? *
          </label>
          <select
            id="hero-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass("service")}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Message (optional) */}
        <div>
          <label htmlFor="hero-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Message <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            id="hero-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us what's going on, or leave blank and we'll ask when we call."
            className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-700 hover:bg-primary disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Get My Free Quote"
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          No pressure. No spam. Just expert help from a local team.
        </p>
      </form>
    </div>
  );
}

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-16 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 lg:min-h-[600px] lg:flex lg:items-center">
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

              {/* H1 */}
              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                Glass Repair &amp; Window Service Across the GTA
              </motion.h1>

              {/* Accent sub-headline */}
              <motion.p
                variants={item}
                className="text-accent-light text-xl md:text-2xl font-semibold"
              >
                Done Right the First Time
              </motion.p>

              {/* Body paragraph */}
              <motion.p
                variants={item}
                className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl lg:max-w-none"
              >
                LuminaSky restores clarity to foggy windows, replaces cracked
                glass, and repairs jammed cranks for homes and businesses across
                the Greater Toronto Area. Our repair-first approach saves you{" "}
                <span className="text-white font-semibold">60–80%</span> vs.
                full window replacement.
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
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Send us a photo on WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* ── Right side: form card (45%) ── */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.65, delay: prefersReduced ? 0 : 0.2, ease: "easeOut" }}
              className="lg:col-span-5"
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
