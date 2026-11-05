import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { Phone, Home, Wrench, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for may have moved or no longer exists. Try
          one of these instead:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 justify-center bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Homepage
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 justify-center bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            <Wrench className="w-4 h-4" aria-hidden="true" />
            Our Services
          </Link>
          <Link
            href="/areas-we-serve"
            className="flex items-center gap-2 justify-center bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Areas We Serve
          </Link>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 justify-center bg-primary text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </main>
  );
}
