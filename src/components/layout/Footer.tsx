import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, Zap, Clock, Star } from "lucide-react";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  SERVICES,
  COMPANY_NAME,
} from "@/lib/constants";
import { SocialLinks } from "@/components/shared/SocialLinks";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt={COMPANY_NAME}
                width={140}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Professional window and door glass repair services across the
              Greater Toronto Area. Fix, don&apos;t replace.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-blue-200 text-xs">
                <Shield className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
                Licensed &amp; Insured in Ontario
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-xs">
                <Zap className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
                24/7 Emergency Service Available
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-xs">
                <Clock className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
                Mon–Sat: 8am–8pm | Sun: Emergency Only
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-blue-200 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-blue-200 mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-blue-200 mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-white font-semibold text-lg hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                aria-label={`Call us at ${PHONE}`}
              >
                <Phone className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
                {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
              >
                <Mail className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
            <div>
              <h4 className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-2">
                Service Area
              </h4>
              <p className="flex items-center gap-1.5 text-sm text-blue-100">
                <MapPin className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
                Serving the Greater Toronto Area (GTA)
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">
                Follow Us
              </h4>
              <SocialLinks
                size={22}
                containerClassName="flex items-center gap-3"
                linkClassName="text-blue-300 hover:text-white transition-colors duration-150"
              />
              <a
                href="https://share.google/S08QWQ5FO1niAmpXy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white transition-colors"
              >
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0" aria-hidden="true" />
                4.9 / 5 on Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p>Licensed &amp; Insured | Greater Toronto Area, Ontario</p>
            <span aria-hidden="true">·</span>
            <Link
              href="/privacy-policy"
              className="text-[10px] text-blue-400 hover:text-white underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
