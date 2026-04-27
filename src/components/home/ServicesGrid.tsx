"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES, PHONE_HREF } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function ServicesGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="py-20 px-4 md:px-8 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Glass & Door Solutions"
          subtitle="From foggy windows to front door glass — we fix it all across the Greater Toronto Area."
          id="services-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: prefersReduced ? 0 : 0.5,
                delay: prefersReduced ? 0 : index * 0.07,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                imageSrc={service.imageSrc}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-gray-500 text-sm">
          Need something not listed?{" "}
          <a
            href={PHONE_HREF}
            className="text-accent font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded"
          >
            Give us a call
          </a>{" "}
          — we&apos;re happy to help.
        </p>
      </div>
    </section>
  );
}
