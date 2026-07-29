"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { getSourceData, type SourceData } from "@/lib/source-tracking";

const HEARD_OPTIONS = [
  "Google search",
  "Google Maps",
  "Facebook",
  "Instagram",
  "Flyer in my mailbox",
  "Referred by a friend or neighbour",
  "Referred by a contractor, realtor or property manager",
  "I've used LuminaSky before",
  "Saw your van or a job in my area",
  "Other",
] as const;

const REFERRAL_OPTIONS = new Set<string>([
  "Referred by a friend or neighbour",
  "Referred by a contractor, realtor or property manager",
]);

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  contactMethod: "phone" | "email" | "whatsapp";
  heardAbout: string;
  referredBy: string;
  heardAboutOther: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  message?: string;
  heardAbout?: string;
  heardAboutOther?: string;
}

const INITIAL: FormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  city: "",
  message: "",
  contactMethod: "phone",
  heardAbout: "",
  referredBy: "",
  heardAboutOther: "",
};

export function ContactForm() {
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
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "heardAbout") {
        if (!REFERRAL_OPTIONS.has(value)) next.referredBy = "";
        if (value !== "Other") next.heardAboutOther = "";
      }
      return next;
    });
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = "Please enter your name";
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
    if (!formData.service) e.service = "Please select a service";
    if (!formData.city) e.city = "Please select your city";
    if (!formData.message.trim()) e.message = "Please describe your issue";
    if (!formData.heardAbout) e.heardAbout = "Please select how you heard about us";
    if (formData.heardAbout === "Other" && !formData.heardAboutOther.trim()) {
      e.heardAboutOther = "Please tell us where you heard about us";
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

    let heardAboutFull = formData.heardAbout;
    if (formData.heardAbout === "Other" && formData.heardAboutOther) {
      heardAboutFull = `Other: ${formData.heardAboutOther}`;
    }

    const referredByLine = REFERRAL_OPTIONS.has(formData.heardAbout) && formData.referredBy
      ? formData.referredBy
      : "";

    const firstVisitFormatted = sd.first_visit_at
      ? new Date(sd.first_visit_at).toLocaleDateString("en-CA", { timeZone: "America/Toronto" })
      : "-";

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          city: formData.city,
          contact_method: formData.contactMethod,
          message: formData.message,
          heard_about: heardAboutFull,
          referred_by: referredByLine,
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

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We&apos;ll be in touch within 2 hours.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="text-accent font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const showReferredBy = REFERRAL_OPTIONS.has(formData.heardAbout);
  const showOtherInput = formData.heardAbout === "Other";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm" role="alert">
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:+14373448490" className="font-semibold underline">437-344-8490</a>.
        </div>
      )}

      {/* Name + Phone */}
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
            placeholder="Jane Smith"
            autoComplete="name"
            className={inputClass("fullName")}
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
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
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          autoComplete="email"
          className={inputClass("email")}
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Service + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass("service")}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.shortTitle}>
                {s.shortTitle}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
          {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your City *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={inputClass("city")}
          >
            <option value="">Select your city</option>
            {SERVICE_AREAS.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
            <option value="Brampton">Brampton</option>
            <option value="Etobicoke">Etobicoke</option>
            <option value="Oakville">Oakville</option>
            <option value="Other GTA">Other GTA Area</option>
          </select>
          {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Describe Your Issue *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="e.g. Two bedroom windows are foggy / I need my front door glass replaced / My window crank is broken..."
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* How did you hear about us? */}
      <div>
        <label htmlFor="heardAbout" className="block text-sm font-semibold text-gray-700 mb-1.5">
          How did you hear about us? *
        </label>
        <select
          id="heardAbout"
          name="heardAbout"
          value={formData.heardAbout}
          onChange={handleChange}
          className={inputClass("heardAbout")}
        >
          <option value="">Please select</option>
          {HEARD_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.heardAbout && <p className="text-red-600 text-xs mt-1">{errors.heardAbout}</p>}
      </div>

      {/* Conditional: Referred by */}
      {showReferredBy && (
        <div>
          <label htmlFor="referredBy" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Who referred you? <span className="font-normal text-gray-400">(so we can thank them)</span>
          </label>
          <input
            id="referredBy"
            name="referredBy"
            type="text"
            value={formData.referredBy}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900"
          />
        </div>
      )}

      {/* Conditional: Other */}
      {showOtherInput && (
        <div>
          <label htmlFor="heardAboutOther" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Where did you hear about us? *
          </label>
          <input
            id="heardAboutOther"
            name="heardAboutOther"
            type="text"
            value={formData.heardAboutOther}
            onChange={handleChange}
            placeholder="e.g. Kijiji, HomeStars, a sign..."
            className={inputClass("heardAboutOther")}
          />
          {errors.heardAboutOther && <p className="text-red-600 text-xs mt-1">{errors.heardAboutOther}</p>}
        </div>
      )}

      {/* Preferred contact */}
      <div>
        <p className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</p>
        <div className="flex flex-wrap gap-6">
          {(["phone", "email", "whatsapp"] as const).map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.contactMethod === method}
                onChange={handleChange}
                className="w-4 h-4 text-accent accent-accent focus:ring-accent"
              />
              <span className="text-gray-700 text-sm capitalize">
                {method === "whatsapp" ? "WhatsApp" : method === "phone" ? "Phone Call" : "Email"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
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
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </>
        )}
      </button>

      <div className="text-center">
        <p className="text-xs text-gray-400">
          Quote by visit: $30 &nbsp;|&nbsp; Quote based on photo: Free
        </p>
        <p className="text-[10px] text-gray-400 italic mt-0.5">
          *The $30 visit fee is credited toward your final payment if you proceed with the work
        </p>
      </div>
    </form>
  );
}
