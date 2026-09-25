"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, X } from "lucide-react";
import { getSourceData, type SourceData } from "@/lib/source-tracking";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const ISSUE_OPTIONS = [
  "Foggy Glass Repair",
  "Broken Window",
  "Window Won't Close",
  "Door Glass",
  "Skylight Repair",
  "Something Else",
];

const DELAY_MS = 15_000;
const SCROLL_THRESHOLD = 0.5;

function storageGet(key: string, session = false): string | null {
  try {
    return (session ? sessionStorage : localStorage).getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key: string, value: string, session = false) {
  try {
    (session ? sessionStorage : localStorage).setItem(key, value);
  } catch {
    /* private browsing */
  }
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  issue: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  issue?: string;
}

const INITIAL: FormData = { name: "", phone: "", email: "", issue: "" };

export function HomepagePopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [sourceData, setSourceData] = useState<SourceData | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closePopup = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (storageGet("popup-form-submitted")) return;
    if (storageGet("popup-dismissed-session", true)) return;
    if (typeof window !== "undefined" && window.innerWidth < 375) return;

    setSourceData(getSourceData());

    timerRef.current = setTimeout(() => {
      if (storageGet("popup-form-submitted")) return;
      if (storageGet("popup-dismissed-session", true)) return;

      const scrollRatio =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollRatio > SCROLL_THRESHOLD) return;

      if (
        document.activeElement &&
        (document.activeElement.tagName === "INPUT" ||
          document.activeElement.tagName === "TEXTAREA" ||
          document.activeElement.tagName === "SELECT")
      )
        return;

      setOpen(true);
      document.body.style.overflow = "hidden";
    }, DELAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        storageSet("popup-dismissed-session", "true", true);
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, closePopup]);

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", trap);
    return () => window.removeEventListener("keydown", trap);
  }, [open]);

  useEffect(() => {
    if (submitStatus !== "success") return;
    const t = setTimeout(() => closePopup(), 3000);
    return () => clearTimeout(t);
  }, [submitStatus, closePopup]);

  const handleOverlayClick = () => {
    storageSet("popup-dismissed-session", "true", true);
    closePopup();
  };

  const handleClose = () => {
    storageSet("popup-dismissed-session", "true", true);
    closePopup();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Please enter your name";
    if (!formData.phone.trim()) {
      e.phone = "Please enter your phone number";
    } else if (!/^[\d\s\-+()]{10,15}$/.test(formData.phone)) {
      e.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      e.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Please enter a valid email address";
    }
    if (!formData.issue) e.issue = "Please select an issue";
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
      ? new Date(sd.first_visit_at).toLocaleDateString("en-CA", {
          timeZone: "America/Toronto",
        })
      : "-";

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.issue,
          city: "-",
          contact_method: "phone",
          message: "(Submitted via homepage popup)",
          heard_about: "Homepage popup",
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
      storageSet("popup-form-submitted", "true");
      setFormData(INITIAL);
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-3 py-2 sm:py-2.5 border rounded-md text-sm focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-gray-900 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get your free quote"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-[480px] max-h-[min(50vh,420px)] sm:max-h-[min(85vh,640px)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6"
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {submitStatus === "success" ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2
                className="w-7 h-7 text-green-600"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Thanks! We got it.
            </h3>
            <p className="text-gray-600">Expect a call shortly.</p>
          </div>
        ) : (
          <>
            <div className="mb-2 sm:mb-4 pr-8">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
                Get Your Free Quote in Under 2 Minutes
              </h2>
              <p className="text-sm text-gray-500">
                Send us your info and we&apos;ll call back with a real price. No
                visit required for most quotes.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-2 sm:space-y-3"
              aria-label="Lead capture form"
            >
              {submitStatus === "error" && (
                <div
                  className="bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded-md text-sm"
                  role="alert"
                >
                  Something went wrong. Please call{" "}
                  <a href={PHONE_HREF} className="font-semibold underline">
                    {PHONE}
                  </a>{" "}
                  or try again.
                </div>
              )}

              <div>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="437-XXX-XXXX"
                  autoComplete="tel"
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  autoComplete="email"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <select
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className={inputClass("issue")}
                >
                  <option value="">What&apos;s the issue?</option>
                  {ISSUE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.issue && (
                  <p className="text-red-600 text-xs mt-1">{errors.issue}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2.5 sm:py-3 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Get My Free Quote"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                We&apos;ll get back to you within business hours. No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
