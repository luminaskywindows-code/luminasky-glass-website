"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function TestimonialsSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="py-20 px-4 md:px-8 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          subtitle="Real 5-star Google reviews from homeowners across the Greater Toronto Area."
          id="testimonials-heading"
        />

        {/* Star rating summary */}
        <div className="flex items-center justify-center gap-3 mb-10 -mt-4">
          <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <span className="font-semibold text-gray-700">4.9</span>
          <span className="text-gray-400 text-sm">on Google</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: prefersReduced ? 0 : 0.5,
                delay: prefersReduced ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <TestimonialCard
                name={t.name}
                location={t.location}
                rating={t.rating}
                text={t.text}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col items-center gap-3">
          <a
            href="https://share.google/S08QWQ5FO1niAmpXy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors"
          >
            Read all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-gray-400 text-sm">
            Join hundreds of satisfied GTA homeowners who chose repair over replacement.
          </p>
        </div>
      </div>
    </section>
  );
}
