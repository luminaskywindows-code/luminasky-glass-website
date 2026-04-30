import { MapPin, Clock, Phone } from "lucide-react";
import { PHONE_HREF, PHONE } from "@/lib/constants";

export function ServiceAreaMap() {
  return (
    <section
      aria-labelledby="service-areas-heading"
      className="py-16 px-4 md:px-8 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Service Area
        </span>
        <h2
          id="service-areas-heading"
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Proudly Serving the Greater Toronto Area
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Wherever you are in the GTA, we can come to you - typically same-day
          or next-day. Emergency service available 7 days a week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center gap-3 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-gray-900">GTA-Wide Coverage</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We cover the full Greater Toronto Area - residential and commercial.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-gray-900">Same-Day Available</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Call before noon for same-day service. Emergency response within 2 hours.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-gray-900">Not Sure? Just Call</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              If you&apos;re in or near the GTA, we likely cover your area. Call to confirm.
            </p>
          </div>
        </div>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 text-accent font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded text-base"
          aria-label={`Call us at ${PHONE}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call {PHONE} to confirm your area
        </a>
      </div>
    </section>
  );
}
