"use client";

import { PHONE_HREF, PHONE } from "@/lib/constants";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="text-5xl font-bold text-red-500 mb-4">Oops</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We hit an unexpected error. You can try again, or call us directly and
          we will help you right away.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </main>
  );
}
