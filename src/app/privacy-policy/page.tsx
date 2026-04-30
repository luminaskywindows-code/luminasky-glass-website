import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | LuminaSky Glass",
  description:
    "Privacy Policy for Lumina Sky Glass Services - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-600 font-medium" aria-current="page">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-1">Lumina Sky Glass Services</p>
        <p className="text-sm text-gray-400 mb-12">Last Updated: January 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <p>
            Lumina Sky Glass Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, and protect
            the personal information you submit through our Facebook Lead Forms or any other contact method.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-3">When you submit a Facebook Lead Form or contact us directly, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address (if provided)</li>
              <li>City / location</li>
              <li>Description of the issue (foggy window, screen repair, crank replacement, etc.)</li>
              <li>Photos you submit (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information only for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To contact you regarding your service request</li>
              <li>To provide quotes or schedule a visit</li>
              <li>To communicate about your appointment</li>
              <li>To improve our customer service</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">
              We do NOT sell, rent, or share your information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Data Storage &amp; Security</h2>
            <p>
              Your information is stored securely and only accessible to staff responsible for handling
              customer inquiries. We take reasonable physical and digital precautions to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. How Long We Keep Your Information</h2>
            <p>
              We keep your information only as long as needed to provide the service or follow up on your
              request. You may ask us to delete your information at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
            <p className="mb-3">You can request at any time:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access to the information we have</li>
              <li>Corrections to your information</li>
              <li>Deletion of your information</li>
            </ul>
            <p className="mt-4">
              Contact us at:{" "}
              <a href={EMAIL_HREF} className="text-primary hover:underline font-medium">
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact Information</h2>
            <p className="mb-1">If you have questions about this Privacy Policy, contact:</p>
            <p className="font-semibold text-gray-900">Lumina Sky Glass Services</p>
            <p>
              Phone:{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">
                {PHONE}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={EMAIL_HREF} className="text-primary hover:underline">
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be reflected on this
              page with a new &ldquo;Last Updated&rdquo; date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
