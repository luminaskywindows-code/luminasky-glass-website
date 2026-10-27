"use client";

import { useState, useEffect } from "react";
import { SERVICES } from "@/lib/constants";
import { getSourceData, type SourceData } from "@/lib/source-tracking";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  smsAppointments: boolean;
  smsOffers: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
}

const INITIAL: FormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  smsAppointments: false,
  smsOffers: false,
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
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

    const smsConsent = [
      formData.smsAppointments ? "SMS: Appointments & updates" : "",
      formData.smsOffers ? "SMS: Offers & reminders" : "",
    ].filter(Boolean).join(", ") || "No SMS consent";

    const firstVisitFormatted = sd.first_visit_at
      ? new Date(sd.first_visit_at).toLocaleDateString("en-CA", { timeZone: "America/Toronto" })
      : "-";

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: `${formData.message}\n\n--- SMS Consent ---\n${smsConsent}`,
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
    `w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 ${
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
          Thank you for reaching out. We&apos;ll be in touch shortly.
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

  return (
    <form onSubmit={handleSubmit} method="post" noValidate className="space-y-5" aria-label="Contact form">
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm" role="alert">
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
            required
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
            required
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
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          autoComplete="email"
          className={inputClass("email")}
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
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

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Describe Your Issue
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="e.g. Two bedroom windows are foggy / I need my front door glass replaced / My window crank is broken..."
          className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 resize-none"
        />
      </div>

      {/* SMS Consent */}
      <div className="space-y-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="smsAppointments"
            checked={formData.smsAppointments}
            onChange={handleChange}
            className="w-4 h-4 mt-0.5 accent-accent shrink-0"
          />
          <span className="text-sm text-gray-700">
            Text me about my appointment and service updates from LuminaSky Glass Services.
          </span>
        </label>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="smsOffers"
            checked={formData.smsOffers}
            onChange={handleChange}
            className="w-4 h-4 mt-0.5 accent-accent shrink-0"
          />
          <span className="text-sm text-gray-700">
            Text me occasional offers and seasonal reminders.
          </span>
        </label>
        <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
          Message frequency varies. Message and data rates may apply. Reply STOP to cancel or HELP for help. Your mobile information will not be sold or shared with third parties.
        </p>
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
          "Get My Quote"
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

      <p className="text-xs text-gray-600 leading-relaxed mt-3">
        By submitting this form, you consent to LuminaSky Glass Services contacting you by phone or email regarding your service inquiry. We will only text you if you check a box above. You can unsubscribe at any time. See our{" "}
        <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for details.
      </p>
    </form>
  );
}
