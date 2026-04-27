"use client";

import { motion, useReducedMotion } from "framer-motion";
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
          subtitle="Real reviews from homeowners and property managers across the Greater Toronto Area."
          id="testimonials-heading"
        />

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

        <p className="text-center mt-10 text-gray-400 text-sm">
          Join hundreds of satisfied GTA homeowners who chose repair over replacement.
        </p>
      </div>
    </section>
  );
}
