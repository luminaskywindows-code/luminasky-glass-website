import { getCityArea } from "@/lib/city-area";
import { oneFor, type ServiceKey } from "@/lib/city-variety";
import { cityJobsFor } from "@/lib/city-jobs";

/** "Homes in [City]" section: local history, landscape and route, with a lead-in that fits the service */
const HEADINGS: Record<ServiceKey, string[]> = {
  "window-repair": ["Homes and Windows in {city}", "How {city} Was Built", "Know Your {city} Windows"],
  foggy: ["Why Glass Fogs in {city} Homes", "{city} Homes and Their Sealed Units", "Sealed Glass in {city}"],
  "front-door": ["Front Doors Across {city}", "{city} Homes and Their Entrances", "Entry Doors in {city}"],
  cranks: ["Casement Windows in {city}", "{city} Homes and Their Cranks", "Crank Windows Around {city}"],
  patio: ["Patio Doors in {city} Homes", "{city} Backyards and Sliding Doors", "Sliding Doors Around {city}"],
  skylight: ["Skylights and Roofs in {city}", "{city} Weather and Your Skylight", "Skylights Around {city}"],
  commercial: ["Doing Business in {city}", "{city} Storefronts and Offices", "Commercial Glass Around {city}"],
  emergency: ["Getting to You in {city}", "{city}: What to Know", "Emergency Calls in {city}"],
};


export function CityAreaSection({ citySlug, city, service }: { citySlug: string; city: string; service: ServiceKey }) {
  const area = getCityArea(citySlug);
  if (!area) return null;
  const heading = oneFor(HEADINGS[service], `${service}:area:${citySlug}`).replace("{city}", city);
  // order of the paragraphs changes by service, so the same city reads differently on each service page
  const parts = service === "emergency" || service === "commercial"
    ? [area.route, area.growth, area.land]
    : service === "skylight" || service === "foggy"
      ? [area.land, area.growth, area.route]
      : [area.growth, area.land, area.route];
  const jobs = cityJobsFor(citySlug, service);
  const jobsHeading = oneFor([`Recent Jobs in ${city}`, `What We Fixed Lately in ${city}`, `A Few ${city} Jobs`], `${service}:jobs:${citySlug}`);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-balance">{heading}</h2>
        <div className="space-y-4">
          {parts.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
          ))}
          {area.tip && (
            <p className="text-gray-700 leading-relaxed border-l-4 border-accent pl-4"><strong>Local tip:</strong> {area.tip}</p>
          )}
        </div>
        {jobs.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{jobsHeading}</h3>
            <ul className="space-y-3">
              {jobs.map((j, i) => (
                <li key={i} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-primary bg-blue-50 rounded-full px-2.5 py-1 h-fit">{j.where}</span>
                  <p className="text-gray-700 leading-relaxed text-sm">{j.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
