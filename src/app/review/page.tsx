import type { Metadata } from "next";
import Image from "next/image";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leave a Review",
  robots: { index: false, follow: false },
  alternates: { canonical: "/review" },
};

const GOOGLE_REVIEW_URL =
  "https://g.page/r/CS6Q_SugmPqcEBM/review";

export default function ReviewPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-lg text-gray-700 mb-8">
          Thank you for choosing {COMPANY_NAME}. Your feedback helps us serve
          the GTA better.
        </p>

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow text-lg transition-colors"
        >
          Leave a Google Review
        </a>

        <div className="mt-10">
          <Image
            src="/images/review-qr.svg"
            alt={`QR code linking to ${COMPANY_NAME} review page`}
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
