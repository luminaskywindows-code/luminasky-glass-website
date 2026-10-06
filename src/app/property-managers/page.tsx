"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Phone, Mail, Wrench, Droplets, DoorOpen, Paintbrush, Wind, Sun, CheckCircle2, ClipboardList, PhoneCall, Star, Check, ChevronRight } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import { getSourceData, type SourceData } from "@/lib/source-tracking";

// ─── Video embed URL (paste YouTube/Vimeo embed URL here) ───
const VIDEO_EMBED_URL = "";

const SERVICES_LIST = [
  { icon: Wrench, title: "Window Crank and Hardware Repair", desc: "Casement operators, handles, hinges, locks" },
  { icon: Droplets, title: "Foggy / Failed Sealed Glass Units", desc: "Condensation between panes, seal failures" },
  { icon: DoorOpen, title: "Balcony and Patio Door Repair", desc: "Rollers, tracks, locks, alignment" },
  { icon: Paintbrush, title: "Exterior Caulking and Resealing", desc: "Weatherproofing, draft elimination, block projects" },
  { icon: Wind, title: "Screens, Weatherstripping, Drafts", desc: "Screen repair, replacement, draft sealing" },
  { icon: Sun, title: "Skylights", desc: "Glass replacement, leak repair, seal restoration" },
] as const;

const ROLE_OPTIONS = [
  "Property Manager",
  "Community Manager",
  "Board Member",
  "Superintendent",
  "Other",
] as const;

const TIME_OPTIONS = ["Morning", "Afternoon", "Evening"] as const;

const TRUST_POINTS = [
  "Written quotes for board approval",
  "Invoices ready for your A/P process",
  "Multi-building and full block projects",
] as const;

interface FormData {
  fullName: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  message: string;
  bestTime: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  phone?: string;
  email?: string;
}

const INITIAL: FormData = {
  fullName: "",
  company: "",
  role: "",
  phone: "",
  email: "",
  message: "",
  bestTime: "",
};

export default function PropertyManagersPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = "Please enter your name";
    if (!formData.company.trim()) e.company = "Please enter your company name";
    if (!formData.phone.trim()) {
      e.phone = "Please enter your phone number";
    } else if (!/^[\d\s\-\+\(\)]{10,15}$/.test(formData.phone)) {
      e.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      e.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = "Please enter a valid email address";
    }
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

    const messageLines = [
      "PROPERTY MANAGER LEAD",
      `Company: ${formData.company}`,
      formData.role ? `Role: ${formData.role}` : "",
      formData.bestTime ? `Best time to call: ${formData.bestTime}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ].filter(Boolean).join("\n");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `[Property Manager Lead] ${formData.fullName}`,
          phone: formData.phone,
          email: formData.email,
          service: "Property Management Inquiry",
          city: "GTA",
          contact_method: "phone",
          message: messageLines,
          heard_about: "Property Manager Landing Page",
          referred_by: formData.company,
          source: "property-managers-page",
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

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3.5 border-2 rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-gray-900 text-sm ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
    }`;

  const baseInputClass =
    "w-full px-4 py-3.5 border-2 border-gray-200 bg-white hover:border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-gray-900 text-sm";

  return (
    <>
      {/* ── Hero with Form ── */}
      <section id="form" className="relative overflow-hidden text-white scroll-mt-8">
        <Image
          src="/images/hero/property-managers-hero.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/65 via-blue-900/45 to-blue-900/25" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,420px)] gap-8 lg:gap-8 items-start">
            {/* Left: Copy + How it works */}
            <div className="lg:py-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] mb-4 tracking-tight">
                Your First Window Crank Repair Is{" "}
                <span className="text-accent-light text-[1.4em] italic">Free</span>
              </h1>
              <p className="text-lg lg:text-xl font-semibold text-blue-100 mb-4">
                Window, door and glass repair for condos and managed properties across the GTA
              </p>
              <p className="text-blue-200 leading-relaxed mb-6 max-w-lg">
                Try us on one repair before you add us to your vendor list. One reliable vendor for all your buildings, fast response, clean documentation for the board.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent-light" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-blue-100">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-blue-200">
                <Phone className="w-4 h-4 text-accent-light" aria-hidden="true" />
                <span className="text-sm">Or call now:</span>
                <a href={PHONE_HREF} className="font-semibold text-white hover:text-accent-light transition-colors">
                  {PHONE}
                </a>
              </div>

              {/* How it works - desktop only (mobile version below form) */}
              <div className="hidden lg:block mt-8">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">How it works</p>
                <div className="flex flex-col gap-0">
                  {[
                    { icon: ClipboardList, label: "Fill out the form" },
                    { icon: PhoneCall, label: "Dan calls you" },
                    { icon: Star, label: "First repair is free, then you decide" },
                  ].map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <step.icon className="w-3.5 h-3.5 text-accent-light" aria-hidden="true" />
                        </div>
                        {i < 2 && <div className="w-px h-5 bg-blue-400/30" />}
                      </div>
                      <span className="text-sm text-blue-100 pt-1">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form card */}
            <div>
              {submitStatus === "success" ? (
                <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks. Dan will call you within one business day.</h3>
                  <p className="text-gray-600">
                    If it&apos;s urgent, call us directly at{" "}
                    <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">{PHONE}</a>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 space-y-4"
                  aria-label="Property manager contact form"
                >
                  <div className="text-center mb-1">
                    <h2 className="text-xl font-bold text-gray-900">Claim Your Free Repair</h2>
                    <p className="text-gray-500 text-sm mt-1">Dan will call you within one business day.</p>
                  </div>

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm" role="alert">
                      Something went wrong. Please try again or call us at{" "}
                      <a href={PHONE_HREF} className="font-semibold underline">{PHONE}</a>.
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      className={inputClass("fullName")}
                    />
                    {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
                      Company / Management Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={inputClass("company")}
                    />
                    {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                  </div>

                  {/* Role + Best Time (side by side on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={baseInputClass}
                      >
                        <option value="">Select role</option>
                        {ROLE_OPTIONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="bestTime" className="block text-sm font-semibold text-gray-700 mb-1">
                        Best Time to Call
                      </label>
                      <select
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className={baseInputClass}
                      >
                        <option value="">Any time</option>
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Phone + Email (side by side on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className={inputClass("phone")}
                      />
                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className={inputClass("email")}
                      />
                      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your buildings or any specific needs..."
                      className={`${baseInputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Claim My Free Repair"
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No obligation. We never share your information.
                  </p>
                </form>
              )}

            </div>

            {/* How it works - mobile only */}
            <div className="lg:hidden col-span-1 flex items-center justify-between gap-2 px-3 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              {[
                { icon: ClipboardList, label: "Fill out the form" },
                { icon: PhoneCall, label: "Dan calls you" },
                { icon: Star, label: "Free first repair" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 min-w-0">
                  {i > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300/60 shrink-0 hidden sm:block" aria-hidden="true" />
                  )}
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-3 h-3 text-accent-light" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium text-blue-100 whitespace-nowrap">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      {VIDEO_EMBED_URL && (
        <section className="section-padding bg-gray-50">
          <div className="container-max max-w-3xl">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={VIDEO_EMBED_URL}
                title="LuminaSky Glass - Property Manager Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── What We Handle ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            What We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Property Managers Work With Us ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
            Why Property Managers Work With Us
          </h2>
          <div className="space-y-4">
            {[
              "One point of contact for the whole property",
              "Written quotes the board can approve",
              "Invoices and documentation ready for your accounts payable process",
              "Fully insured, WSIB clearance available",
              "Multi-unit and multi-building work, including full block recaulking projects",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Contact Block ── */}
      <section className="bg-primary text-white py-10 px-4 md:px-8">
        <div className="container-max flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <span className="font-bold text-lg">LuminaSky Glass</span>
          <span className="hidden sm:inline text-blue-400" aria-hidden="true">|</span>
          <a href={PHONE_HREF} className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <Phone className="w-4 h-4" aria-hidden="true" />
            {PHONE}
          </a>
          <span className="hidden sm:inline text-blue-400" aria-hidden="true">|</span>
          <a href={EMAIL_HREF} className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <Mail className="w-4 h-4" aria-hidden="true" />
            {EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
