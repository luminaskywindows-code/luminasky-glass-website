import Link from "next/link";
import {
  Shield,
  Wrench,
  Clock,
  FileText,
  Phone,
  MapPin,
  Award,
  Camera,
} from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Wrench,
    label: "Repair First",
    href: "/our-process",
  },
  {
    icon: FileText,
    label: "Written Price Before Work",
    href: "/our-process",
  },
  {
    icon: Shield,
    label: "Licensed & Insured",
    href: "/about",
  },
  {
    icon: Clock,
    label: "Available 24/7",
    href: "/contact",
  },
  {
    icon: Award,
    label: "Warranty on Every Job",
    href: "/warranty",
  },
  {
    icon: Camera,
    label: "Free Photo Quotes",
    href: "/contact",
  },
  {
    icon: MapPin,
    label: "Serving the Entire GTA",
    href: "/areas-we-serve",
  },
  {
    icon: Phone,
    label: "Same-Day Hardware Repair",
    href: "/cranks",
  },
];

export function TrustStrip() {
  return (
    <section className="py-8 px-4 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-2 py-3 px-2 rounded-xl hover:bg-white hover:shadow-sm transition-all text-center group"
              >
                <Icon
                  className="w-5 h-5 text-primary group-hover:text-accent transition-colors"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-gray-600 leading-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
