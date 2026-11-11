"use client";

import { useState, useEffect } from "react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
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

interface HeroFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
  smsAppointments: boolean;
  smsOffers: boolean;
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
  smsAppointments: false,
  smsOffers: false,
};

export function HeroFormCard() {
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
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
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

    const smsConsent = [
      formData.smsAppointments ? "SMS: Appointments & updates" : "",
      formData.smsOffers ? "SMS: Offers & reminders" : "",
    ].filter(Boolean).join(", ") || "No SMS consent";

    try {
      const emailjs = (await import("@emailjs/browser")).default;
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
          message: `${formData.message || "(No description provided)"}\n\n--- SMS Consent ---\n${smsConsent}`,
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
      <h2 className="text-xl font-bold text-gray-900 mb-5">Get Your Quote</h2>

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
            "Get My Quote"
          )}
        </button>

        <p className="text-xs text-gray-600 leading-relaxed mt-3">
          By submitting this form, you consent to LuminaSky Glass Services contacting you by phone or email regarding your service inquiry. We will only text you if you check a box above. You can unsubscribe at any time. See our{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for details.
        </p>
      </form>
    </div>
  );
}
