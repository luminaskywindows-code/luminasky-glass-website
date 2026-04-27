import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MessageCircle, Star } from "lucide-react";
import { SOCIALS } from "@/components/shared/SocialLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact/ContactForm";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, WHATSAPP_HREF, FAQS_GENERAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us – Get a Quote",
  description:
    "Contact LuminaSky Glass for a window or door glass repair quote. Call 437-344-8490 or send a message. Proudly serving the Greater Toronto Area.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Describe your issue and we&apos;ll get back to you within 2 hours.
            Or call us now for immediate assistance.
          </p>
          <p className="mt-3 text-sm text-blue-300">
            Quote by visit: $30 &nbsp;|&nbsp; Quote based on photo: Free
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-label="Contact information">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 p-4 bg-primary rounded-xl hover:bg-primary-700 transition-colors group"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wide">
                      Call / Text
                    </p>
                    <p className="text-white font-bold text-lg">{PHONE}</p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-200 transition-colors group"
                  aria-label="Chat on WhatsApp"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                      WhatsApp
                    </p>
                    <p className="text-gray-900 font-semibold">
                      Chat with us instantly
                    </p>
                  </div>
                </a>

                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-200 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-gray-900 font-semibold">{EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                      Hours
                    </p>
                    <p className="text-gray-900 font-semibold text-sm">
                      Mon–Sat: 8:00am – 8:00pm
                    </p>
                    <p className="text-gray-500 text-sm">
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Find Us Online */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Find Us Online</h3>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ key, label, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-200 transition-colors group"
                    aria-label={label}
                  >
                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-accent/10 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                      <span className="text-gray-500 group-hover:text-accent transition-colors">
                        <Icon size={20} />
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{label}</p>
                      {key === "google" && (
                        <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                          4.9 / 5 rating
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Service Area</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 h-48">
                <iframe
                  title="LuminaSky Glass Service Area — Greater Toronto Area"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-79.9%2C43.5%2C-79.0%2C43.9&layer=mapnik"
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 text-right">
                © OpenStreetMap contributors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Frequently Asked Questions
          </h2>
          <Accordion className="space-y-3">
            {FAQS_GENERAL.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-gray-100 rounded-xl px-4 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
