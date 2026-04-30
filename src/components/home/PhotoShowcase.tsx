"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery/foggy-window.png",
    alt: "Foggy window requiring repair - condensation between panes",
    label: "Foggy window seal failure",
  },
  {
    src: "/images/gallery/bright-clean-windows.png",
    alt: "Clean bright windows with natural light after repair",
    label: "Clear after glass unit replacement",
  },
  {
    src: "/images/gallery/living-room-windows.png",
    alt: "Modern living room with large repaired windows",
    label: "Large window glass restoration",
  },
  {
    src: "/images/gallery/kitchen-window.png",
    alt: "Kitchen window above sink - residential repair",
    label: "Kitchen window repair",
  },
];

export function PhotoShowcase() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* Before / After */}
      <section
        className="py-20 px-4 md:px-8 bg-white"
        aria-labelledby="before-after-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              The Difference We Make
            </span>
            <h2
              id="before-after-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              From Problem to Perfect
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              We transform the way your home looks and feels - without the cost
              of full replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: prefersReduced ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: prefersReduced ? 0 : 0.55, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/foggy-window.png"
                  alt="Foggy window with condensation between panes - seal failure requiring repair"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-2">
                    Before
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug">
                    Failed window seal - moisture trapped between panes
                  </p>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: prefersReduced ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: prefersReduced ? 0 : 0.55,
                delay: prefersReduced ? 0 : 0.12,
                ease: "easeOut",
              }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/bright-clean-windows.png"
                  alt="Crystal-clear windows with natural light after LuminaSky glass repair"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-2">
                    After
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug">
                    Crystal-clear glass - same frame, fraction of the cost
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="gallery-strip-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="gallery-strip-heading"
            className="text-2xl font-bold text-gray-900 text-center mb-8"
          >
            Transforming Windows Across the GTA
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: prefersReduced ? 0 : 0.45,
                  delay: prefersReduced ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
