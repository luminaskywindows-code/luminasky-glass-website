import Link from "next/link";
import { getLocalCityContent } from "@/lib/local-city-content";

interface LocalCityContentProps {
  citySlug: string;
  type: "window-repair" | "foggy-windows" | "front-door-glass" | "cranks" | "patio-door-repair" | "commercial-glass-repair" | "skylights";
}

export function LocalCityContent({ citySlug, type }: LocalCityContentProps) {
  const content = getLocalCityContent(citySlug);
  if (!content) return null;

  const { sections } = content;
  const headingMap: Record<string, string> = {
    "foggy-windows": "Foggy Window Repair: Local Guide",
    "window-repair": "What Local Homeowners Should Know",
    "front-door-glass": "Front Door Glass: Local Guide",
    "cranks": "Window Crank Repair: Local Guide",
    "patio-door-repair": "Patio Door Repair: Local Guide",
    "commercial-glass-repair": "Commercial Glass Repair: Local Guide",
    "skylights": "Skylight Repair: Local Guide",
  };
  const heading = headingMap[type] || "Glass Services: Local Guide";

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {heading}
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Building Permits and Regulations
            </h3>
            <p className="text-gray-600 leading-relaxed">{sections.permits}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Common Window Issues in Local Homes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {sections.housingStock}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Climate and Weather Impact
            </h3>
            <p className="text-gray-600 leading-relaxed">{sections.climate}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Response Time and Scheduling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {sections.responseTime}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Pricing and Warranty
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              {sections.pricingWarranty}
            </p>
            <p className="text-gray-600 leading-relaxed">
              For a full pricing breakdown, see our{" "}
              <Link
                href="/glass-replacement-cost-report-2026"
                className="text-primary font-semibold hover:underline"
              >
                glass replacement cost guide
              </Link>
              . Call{" "}
              <a
                href="tel:+14373448490"
                className="text-primary font-semibold hover:underline"
              >
                437-344-8490
              </a>{" "}
              for a quote specific to your address.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
