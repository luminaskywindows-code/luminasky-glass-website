import Link from "next/link";
import { getLocalCityContent } from "@/lib/local-city-content";
import { oneFor } from "@/lib/city-variety";

interface LocalCityContentProps {
  citySlug: string;
  type: "window-repair" | "foggy-windows" | "front-door-glass" | "cranks" | "patio-door-repair" | "commercial-glass-repair" | "skylights" | "emergency-glass-repair";
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
    "emergency-glass-repair": "Emergency Glass: Local Guide",
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
              {oneFor(["Building Permits and Regulations", "Do You Need a Permit?", "Permits and Local Rules"], `h:Buildi:${type}:${citySlug}`)}
            </h3>
            <p className="text-gray-600 leading-relaxed">{sections.permits}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {oneFor(["Common Window Issues in Local Homes", "What Local Homes Are Built With", "The Housing Stock Here"], `h:Common:${type}:${citySlug}`)}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {sections.housingStock}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {oneFor(["Climate and Weather Impact", "How the Weather Affects Glass Here", "Local Weather and Your Windows"], `h:Climat:${type}:${citySlug}`)}
            </h3>
            <p className="text-gray-600 leading-relaxed">{sections.climate}</p>
          </div>

          {sections.neighborhoods && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Where We Work</h3>
              <p className="text-gray-600 leading-relaxed">{sections.neighborhoods}</p>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {oneFor(["Response Time and Scheduling", "How Fast We Get There", "Travel Time and Booking"], `h:Respon:${type}:${citySlug}`)}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {sections.responseTime}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {oneFor(["Pricing and Warranty", "What It Costs and What Is Covered", "Price and Warranty"], `h:Pricin:${type}:${citySlug}`)}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {oneFor(["For a full pricing breakdown, see our", "Typical prices by size and glass type are in our", "You can compare prices for common sizes in our"], `lc:${type}:${citySlug}`)}{" "}
              <Link
                href="/glass-replacement-cost-report-2026"
                className="text-primary font-semibold hover:underline"
              >
                glass replacement cost guide
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
