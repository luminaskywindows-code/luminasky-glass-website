"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const CHECKPOINTS = [
  "Repair just the glass - keep your existing frames",
  "Save 60–80% versus full window or door replacement",
  "Same-day service available across the GTA",
  "All work backed by our satisfaction guarantee",
  "Licensed & insured in Ontario",
];

export function TrustSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative py-20 px-4 md:px-8 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bright-windows-section.png')" }}
      aria-labelledby="trust-heading"
    >
      {/* Semi-transparent blue overlay - keeps text readable while window shows through */}
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReduced ? 0 : 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent-light mb-4">
            Our Approach
          </span>
          <h2
            id="trust-heading"
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Fix It. Don&apos;t Replace It.
          </h2>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Most homeowners think foggy windows or broken door glass means replacing the
            entire window frame. In most cases, we can repair just the glass unit -
            saving you thousands and keeping your home looking great.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            {CHECKPOINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-accent-light shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-blue-100">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
          >
            Contact Us Today
          </Link>
          <p className="mt-3 text-xs text-blue-300">
            Quote by visit: $30 &nbsp;|&nbsp; Quote based on photo: Free
          </p>
          <p className="text-[10px] text-blue-300/70 italic mt-0.5">
            *The $30 visit fee is credited toward your final payment if you proceed with the work
          </p>
        </motion.div>
      </div>
    </section>
  );
}
