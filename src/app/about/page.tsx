import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Star,
  MapPin,
  CheckCircle2,
  Leaf,
  User,
  Phone,
  Mail,
  ClipboardList,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { ServiceAreaMap } from "@/components/shared/ServiceAreaMap";
import { SOCIALS } from "@/components/shared/SocialLinks";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About LuminaSky - GTA's Repair-First Glass Specialists",
  description:
    "Learn about LuminaSky Glass - licensed glaziers serving the Greater Toronto Area. We believe in honest assessments and repair-first solutions for windows and doors.",
  alternates: { canonical: "/about" },
};

const CREDENTIALS = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured Glaziers",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Award,
    title: "WSIB-Registered Technicians",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: BadgeCheck,
    title: "1-Year Warranty on Materials",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Star,
    title: "4.9★ Rating on Google & HomeStars",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: MapPin,
    title: "Serving the GTA with Pride",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const STANDARDS = [
  {
    title: "Written Quote Before Work Begins",
    desc: "No surprise fees or upsells. You approve the cost in writing before a single tool comes out.",
  },
  {
    title: "Arrival Window Confirmed by Text",
    desc: "Never a 4-hour waiting game. We confirm your arrival window so you can plan your day.",
  },
  {
    title: "Site Left Cleaner Than We Found It",
    desc: "Drop cloths go down on every job. Broken glass is disposed of safely - your home stays tidy.",
  },
  {
    title: "First-Visit Fix Commitment",
    desc: "If we say we'll fix it, we fix it on the first visit. If we can't, your service call is free.",
  },
  {
    title: "Honest Assessments Always",
    desc: "We'll tell you plainly if repair isn't the right option, and we'll explain exactly why.",
  },
];

const TEAM_PLACEHOLDERS = [
  {
    name: "Team Member Name",
    role: "Lead Glazier",
    experience: "12+ years experience",
    specialty: "IGU & Seal Repair",
    quote:
      "I take pride in giving every homeowner a straight answer. If a repair will solve the problem, that's what I recommend - every time.",
  },
  {
    name: "Team Member Name",
    role: "Window Hardware Specialist",
    experience: "8+ years experience",
    specialty: "Cranks, Hinges & Locks",
    quote:
      "Most crank and hardware problems can be solved in under 30 minutes with the right part. We carry them so you don't have to wait.",
  },
  {
    name: "Team Member Name",
    role: "Door Glass Technician",
    experience: "10+ years experience",
    specialty: "Door Inserts & Decorative Glass",
    quote:
      "Replacing a door glass insert instead of the whole door saves the customer hundreds. That's the job I love doing.",
  },
];

export default function AboutPage() {
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
                About
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            About LuminaSky -{" "}
            <span className="text-accent-light">
              GTA&apos;s Repair-First Glass Specialists
            </span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Licensed glaziers. Honest assessments. A commitment to fixing what
            others say needs replacing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                Our Story
              </span>
              <h2
                id="story-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight"
              >
                Built on Honest Repairs,{" "}
                <span className="text-primary">Not Unnecessary Sales</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  LuminaSky was founded with a simple mission: to provide
                  honest, reliable glass and window repair services across the
                  Greater Toronto Area. We saw too many homeowners being pushed
                  into expensive full-window replacements when a simple repair
                  would solve their problem.
                </p>
                <p>
                  Over the years, we&apos;ve restored clarity to thousands of
                  windows across the GTA, repaired countless broken cranks and
                  hinges, and replaced door glass inserts - always with the same
                  philosophy: repair first, replace only when necessary.
                </p>
                <p>
                  Today, our team of licensed glaziers serves homes and
                  businesses throughout the GTA, and we&apos;re proud to be
                  your honest second opinion when it comes to glass and window
                  repair.
                </p>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "5,000+", label: "Windows Repaired", color: "bg-primary" },
                { stat: "4.9★", label: "Average Rating", color: "bg-accent" },
                { stat: "Since 2024", label: "Serving the GTA", color: "bg-primary" },
                { stat: "90%+", label: "First-Visit Fix Rate", color: "bg-accent" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-2xl p-6 text-white flex flex-col justify-between min-h-[120px]`}
                >
                  <p className="text-3xl font-bold">{item.stat}</p>
                  <p className="text-sm text-white/80 font-medium mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Purpose
            </span>
            <h2
              id="why-heading"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Why We Exist
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              Too many homeowners are told they need full window replacement when
              the real problem is a simple part or a failed seal. We exist to
              give you the honest assessment and the cost-effective fix - not
              the most expensive sale.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Our goal is to save you money while delivering quality work that
              lasts. When a repair is the right answer, we&apos;ll tell you so.
              When it isn&apos;t, we&apos;ll tell you that too - and explain
              exactly why.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image divider */}
      <div className="relative h-72 md:h-96 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/hero-background.png"
          alt="Modern interior windows - quality glass repair results"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/55 flex items-center justify-center px-4">
          <blockquote className="text-center max-w-2xl">
            <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed italic">
              &ldquo;Our goal is to save you money while delivering quality work
              that lasts - every single time.&rdquo;
            </p>
            <cite className="text-blue-200 text-sm font-medium mt-3 block not-italic">
              - The LuminaSky Team
            </cite>
          </blockquote>
        </div>
      </div>

      {/* Credentials */}
      <section className="py-20 px-4 md:px-8 bg-white" aria-labelledby="credentials-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Credentials
            </span>
            <h2
              id="credentials-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Licensed, Insured &amp; Accountable
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CREDENTIALS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <Icon
                      className={`w-6 h-6 ${item.color}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm leading-snug">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-20 px-4 md:px-8 bg-gray-50" aria-labelledby="standards-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Promises
            </span>
            <h2
              id="standards-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Service Standards
            </h2>
            <p className="text-gray-500 text-lg">
              Five commitments we make on every job - no exceptions.
            </p>
          </div>

          <ol className="flex flex-col gap-5" aria-label="Service standards">
            {STANDARDS.map((item, index) => (
              <li
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-5 items-start"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2
                      className="w-4 h-4 text-accent shrink-0"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 md:px-8 bg-white" aria-labelledby="area-heading">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Where We Work
          </span>
          <h2
            id="area-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Service Area
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We proudly serve the entire Greater Toronto Area, including all
            major communities and neighbourhoods. Whether you&apos;re in a
            downtown condo, a suburban home, or a commercial property, we&apos;re
            here to help.
          </p>
        </div>
        <ServiceAreaMap />
      </section>

      {/* Sustainability */}
      <section className="py-20 px-4 md:px-8 bg-green-50" aria-labelledby="sustainability-heading">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
              <Leaf className="w-8 h-8 text-green-600" aria-hidden="true" />
            </div>
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-green-600 mb-2">
                Environmental Commitment
              </span>
              <h2
                id="sustainability-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight"
              >
                Our Commitment to Sustainability
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  By focusing on repair instead of replacement, we keep
                  thousands of pounds of vinyl frames and intact glass out of
                  Ontario landfills every year.
                </p>
                <p>
                  When a window can be fixed, fixing it is not just more
                  affordable - it&apos;s better for the environment. Every
                  repair we complete is one less window frame in a landfill and
                  one less set of resources consumed to manufacture a new unit.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Repair-first philosophy",
                  "Less landfill waste",
                  "Lower carbon footprint",
                  "Longer window lifespan",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    <Leaf className="w-3 h-3" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4 md:px-8 bg-white" aria-labelledby="team-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              The People Behind the Work
            </span>
            <h2
              id="team-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Meet Our Team
            </h2>
            <p className="text-sm text-gray-400 italic max-w-xl mx-auto mb-10">
              Team photos coming soon - we believe in transparency and will be
              adding our team members&apos; photos and bios shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_PLACEHOLDERS.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-8 h-8 text-primary/40" aria-hidden="true" />
                </div>

                <div className="text-center">
                  <p className="font-bold text-gray-900">{member.name}</p>
                  <p className="text-sm text-accent font-semibold">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {member.experience} &middot; {member.specialty}
                  </p>
                </div>

                <blockquote className="border-t border-gray-200 pt-4 text-sm text-gray-500 italic leading-relaxed text-center">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with us */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="social-heading">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Stay Connected
          </span>
          <h2
            id="social-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Connect with Us on Social Media
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Follow our work, see recent projects, and read what GTA homeowners
            are saying about LuminaSky Glass.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {SOCIALS.map(({ key, label, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-accent hover:text-accent text-gray-700 font-medium text-sm transition-all shadow-sm hover:shadow-md group"
              >
                <span className="text-gray-400 group-hover:text-accent transition-colors">
                  <Icon size={20} />
                </span>
                {label}
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-accent transition-colors" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            Rated 4.9 / 5 on Google Reviews
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-primary" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Get an Honest Assessment?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Tell us what&apos;s going on with your windows or doors. We&apos;ll
            give you a straight answer - no pressure, no upsell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
            >
              <ClipboardList className="w-5 h-5" aria-hidden="true" />
              Contact Us Today
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm flex items-center justify-center gap-2">
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
    </>
  );
}
