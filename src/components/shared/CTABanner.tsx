import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready to Fix Your Windows or Doors?",
  subtitle = "Call now for a quote. We serve the entire Greater Toronto Area.",
}: CTABannerProps) {
  return (
    <section className="bg-accent py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-blue-100 text-lg mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent active:scale-95"
            aria-label={`Call us at ${PHONE}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call {PHONE}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent active:scale-95"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-3 text-blue-200 text-xs">
          Quote by visit: $30 &nbsp;|&nbsp; Quote based on photo: Free
        </p>
        <p className="mt-4 text-blue-100 text-sm flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
          Or email us:{" "}
          <a
            href={EMAIL_HREF}
            className="text-white font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
