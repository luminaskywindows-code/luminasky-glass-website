"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown, Zap, Shield, Star, ChevronUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, SERVICES, COMPANY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/components/shared/SocialLinks";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Our Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sheet on route change
  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200] bg-white text-primary font-semibold px-4 py-2 rounded-lg shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Skip to main content
      </a>

      {/* Trust bar */}
      <div className="bg-primary text-white py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-accent-light" aria-hidden="true" />
              Licensed &amp; Insured in Ontario
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-accent-light" aria-hidden="true" />
              24/7 Emergency Service
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              5-Star Rated GTA Glass Experts
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="font-semibold text-accent-light hover:text-white transition-colors"
              aria-label={`Call us at ${PHONE}`}
            >
              {PHONE}
            </a>
            <a
              href={EMAIL_HREF}
              className="hidden md:flex items-center gap-1 text-blue-200 hover:text-white transition-colors"
              aria-label={`Email us at ${EMAIL}`}
            >
              <Mail className="w-3 h-3" aria-hidden="true" />
              {EMAIL}
            </a>
            <span className="hidden md:block w-px h-3 bg-blue-700" aria-hidden="true" />
            <SocialLinks
              size={14}
              containerClassName="hidden md:flex items-center gap-2.5"
              linkClassName="text-blue-300 hover:text-white transition-colors duration-150"
            />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-shadow duration-300",
          scrolled && "shadow-md"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-28 flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            aria-label={`${COMPANY_NAME} - Home`}
          >
            <Image
              src="/images/logo.png"
              alt={COMPANY_NAME}
              width={220}
              height={82}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  pathname === link.href
                    ? "text-primary bg-primary-50 font-semibold"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  pathname.startsWith("/services")
                    ? "text-primary bg-primary-50 font-semibold"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0 overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setSheetOpen(false)}
                >
                  <Image
                    src="/images/logo.png"
                    alt={COMPANY_NAME}
                    width={130}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setSheetOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="p-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary-50 font-semibold"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    )}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    {mobileServicesOpen ? (
                      <ChevronUp className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 mt-1">
                      <Link
                        href="/services"
                        onClick={() => setSheetOpen(false)}
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        All Services
                      </Link>
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          onClick={() => setSheetOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call {PHONE}
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setSheetOpen(false)}
                    className="flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-3 rounded-lg transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}
