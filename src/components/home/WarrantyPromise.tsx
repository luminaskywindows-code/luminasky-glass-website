import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const POINTS = [
  "5-year warranty against seal failure on every sealed glass unit we install",
  "2-year warranty on parts and labour for all repair work",
  "Clear terms, no fine print, no hidden conditions",
];

export function WarrantyPromise() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Our Promise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Glass That&apos;s Covered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {POINTS.map((point) => (
            <div
              key={point}
              className="flex flex-col items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-6"
            >
              <CheckCircle2
                className="w-6 h-6 text-accent shrink-0"
                aria-hidden="true"
              />
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/warranty"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-md shadow-sm hover:shadow-md transition-all"
        >
          <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          See the full warranty
        </Link>
      </div>
    </section>
  );
}
