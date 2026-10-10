"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Phone } from "lucide-react";
import { getSourceData, type SourceData } from "@/lib/source-tracking";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Foggy Glass Repair",
  "Window Crank / Hardware Repair",
  "Front Door Glass",
  "Full Window Replacement",
  "Window & Door Screens",
  "Skylight Repair",
  "Something else / not sure",
];

interface FormData {
  name: string;
  phone: string;
  service: string;
  description: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

const INITIAL: FormData = {
  name: "",
  phone: "",
  service: "",
  description: "",
};

export function HeroLeadForm() {
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
          message: formData.description || "(No description provided)",
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

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column — pitch + trust markers */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Get Your Free Quote
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Send us a photo and get a price without a visit. Most jobs quoted from photos alone.
            </p>

            <ul className="space-y-4" aria-label="Trust markers">
              {[
                "No obligation, no pressure",
                "Available 24/7 — any day, any time",
                "5-Star rated across the GTA",
                "Licensed & insured in Ontario",
              ].map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-gray-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 text-gray-500 text-sm">
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                Prefer to call?{" "}
                <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                  {PHONE}
                </a>
              </span>
            </div>
          </div>

          {/* Right column — the form */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            {submitStatus === "success" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Thanks! We got it.
                </h3>
                <p className="text-gray-600">Expect a call shortly.</p>
              </div>
            ) : (
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
                    Phone *
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

                {/* Description (optional) */}
                <div>
                  <label htmlFor="hero-description" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Brief description <span className="font-normal text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    id="hero-description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What's going on? Feel free to leave blank and we'll ask when we call."
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
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
                  By submitting this form, you consent to LuminaSky Glass Services contacting you by phone, text, or email regarding your service inquiry. You can unsubscribe from marketing communications at any time. See our{" "}
                  <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
