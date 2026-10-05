"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, Wrench, Droplets, DoorOpen, Paintbrush, Wind, Sun, CheckCircle2, ClipboardList, PhoneCall, Star } from "lucide-react";
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

interface FormData {
  fullName: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  buildingsCount: string;
  cityArea: string;
  servicesNeeded: string[];
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
  buildingsCount: "",
  cityArea: "",
  servicesNeeded: [],
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

  const handleCheckbox = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service],
    }));
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
      formData.buildingsCount ? `Buildings / units: ${formData.buildingsCount}` : "",
      formData.cityArea ? `City / area: ${formData.cityArea}` : "",
      formData.servicesNeeded.length > 0
        ? `Services needed: ${formData.servicesNeeded.join(", ")}`
        : "",
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
          service: formData.servicesNeeded.length > 0
            ? formData.servicesNeeded.join(", ")
            : "Property Management Inquiry",
          city: formData.cityArea || "GTA",
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
    `w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
            Window, Door and Glass Repair for Condos and Managed Properties
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            One reliable vendor for repairs across all your buildings. Fast response, clean documentation for the board.
          </p>
          <div className="bg-accent/20 border border-accent/40 rounded-xl px-6 py-4 inline-block mb-8">
            <p className="text-lg sm:text-xl font-semibold text-white">
              Your first window crank repair is free. Try us before you add us to your vendor list.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#form"
              className="btn-primary text-lg px-8 py-4"
            >
              Request a Call Back
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-blue-100 hover:text-white text-lg transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {PHONE}
            </a>
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

      {/* ── How It Works ── */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ClipboardList, step: "1", title: "Fill Out the Form", desc: "Tell us about your properties and what you need." },
              { icon: PhoneCall, step: "2", title: "Dan Calls You", desc: "We learn about your buildings and discuss how we can help." },
              { icon: Star, step: "3", title: "Free First Repair", desc: "We do the first crank repair free, then you decide." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                  Step {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section id="form" className="section-padding bg-gray-50 scroll-mt-8">
        <div className="container-max max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            Request a Call Back
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Fill out the form below and Dan will call you within one business day.
          </p>

          {submitStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
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
            <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100" aria-label="Property manager contact form">
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm" role="alert">
                  Something went wrong. Please try again or call us at{" "}
                  <a href={PHONE_HREF} className="font-semibold underline">{PHONE}</a>.
                </div>
              )}

              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name *
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
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company / Management Company *
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
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900"
                >
                  <option value="">Select your role</option>
                  {ROLE_OPTIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone *
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
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email *
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

              {/* Buildings + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="buildingsCount" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Number of Buildings or Units Managed
                  </label>
                  <input
                    id="buildingsCount"
                    name="buildingsCount"
                    type="text"
                    value={formData.buildingsCount}
                    onChange={handleChange}
                    placeholder="e.g. 3 buildings, 200 units"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="cityArea" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City / Area of the Properties
                  </label>
                  <input
                    id="cityArea"
                    name="cityArea"
                    type="text"
                    value={formData.cityArea}
                    onChange={handleChange}
                    placeholder="e.g. North York, Markham"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900"
                  />
                </div>
              </div>

              {/* Services checkboxes */}
              <div>
                <p className="block text-sm font-semibold text-gray-700 mb-2">
                  What do you need help with?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_LIST.map((s) => (
                    <label key={s.title} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 p-2 rounded hover:bg-gray-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.servicesNeeded.includes(s.title)}
                        onChange={() => handleCheckbox(s.title)}
                        className="w-4 h-4 rounded border-gray-300 text-accent accent-accent focus:ring-accent"
                      />
                      {s.title}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your properties or any specific needs..."
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 resize-none"
                />
              </div>

              {/* Best time to call */}
              <div>
                <p className="block text-sm font-semibold text-gray-700 mb-2">Best Time to Call</p>
                <div className="flex flex-wrap gap-4">
                  {TIME_OPTIONS.map((time) => (
                    <label key={time} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="bestTime"
                        value={time}
                        checked={formData.bestTime === time}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent accent-accent focus:ring-accent"
                      />
                      <span className="text-gray-700 text-sm">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
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
                  "Request a Call Back"
                )}
              </button>

              <p className="text-xs text-gray-500 leading-relaxed text-center">
                By submitting this form, you consent to LuminaSky Glass contacting you by phone or email regarding your inquiry. See our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          )}
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
