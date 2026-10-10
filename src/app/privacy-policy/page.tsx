import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for LuminaSky Glass Services — how we collect, use, and protect your personal information in compliance with PIPEDA and Ontario privacy laws.",
  alternates: { canonical: "/privacy-policy" },
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
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 28, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <p>
            LuminaSky Glass Services (&ldquo;LuminaSky,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal
            information in compliance with the Personal Information Protection and Electronic Documents
            Act (PIPEDA) and applicable Ontario privacy laws.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, and your rights
            regarding that information.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Information you provide directly:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address (when provided)</li>
              <li>Physical address or city / neighborhood</li>
              <li>Description of the service you need (e.g., foggy window, broken glass, crank repair)</li>
              <li>Photos of the issue (optional)</li>
              <li>Any additional information you include in messages to us</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Information collected automatically when you visit our website:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>IP address and general geographic location</li>
              <li>Browser type and device information</li>
              <li>Pages you visit and time spent on the site</li>
              <li>Referring website or ad source</li>
              <li>Marketing campaign identifiers (UTM parameters like utm_source, utm_medium, utm_campaign)</li>
              <li>Google click identifiers (gclid) and Facebook click identifiers (fbclid)</li>
              <li>First visit date, landing page, and referrer</li>
              <li>Cookie and localStorage data used to remember your preferences (e.g., dismissed popup banners)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Information from third-party platforms:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>If you contact us through Facebook Lead Forms, Instagram, WhatsApp, or Google Ads, we receive the information you submitted on those platforms</li>
              <li>If you leave a Google review, we may see your public review content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information only for these purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To contact you regarding your service request</li>
              <li>To prepare and send you quotes or estimates</li>
              <li>To schedule and coordinate on-site visits</li>
              <li>To communicate about your appointment (confirmations, reminders, follow-ups)</li>
              <li>To send invoices and payment reminders</li>
              <li>To follow up after service to ensure satisfaction</li>
              <li>To improve our services, website, and marketing</li>
              <li>To measure the effectiveness of our advertising campaigns</li>
              <li>To comply with legal obligations (tax records, warranty claims)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Marketing Communications (CASL Compliance)</h2>
            <p className="mb-3">
              Under Canada&apos;s Anti-Spam Legislation (CASL), we only send you commercial electronic
              messages if:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>You have given us express consent (e.g., by submitting a form or requesting information), or</li>
              <li>You have an existing business relationship with us (previous customer, active quote, etc.)</li>
            </ul>
            <p className="mb-3">You can unsubscribe from marketing communications at any time by:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Clicking the unsubscribe link in any email we send you</li>
              <li>Replying &ldquo;STOP&rdquo; to any text message</li>
              <li>Emailing us at{" "}
                <a href={EMAIL_HREF} className="text-primary hover:underline">
                  {EMAIL}
                </a>
                {" "}with &ldquo;Unsubscribe&rdquo; in the subject line
              </li>
              <li>Calling us at{" "}
                <a href={PHONE_HREF} className="text-primary hover:underline">
                  {PHONE}
                </a>
              </li>
            </ul>
            <p>We will honor unsubscribe requests within 10 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Text Messages (SMS)</h2>
            <p className="mb-3">
              We only send text messages to people who have opted in through our website or by
              requesting text communication directly. You may receive appointment confirmations,
              service updates, or occasional offers and seasonal reminders depending on the
              consent you provided.
            </p>
            <p className="mb-3">
              We will never sell or share your phone number with third parties for their
              marketing purposes.
            </p>
            <p>
              You can stop receiving text messages at any time by replying STOP to any message.
              Reply HELP for assistance. Message frequency varies. Message and data rates may apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Sharing Your Information</h2>
            <p className="mb-4 font-semibold text-gray-900">
              We do not sell, rent, or trade your personal information.
            </p>
            <p className="mb-3">
              We share information only with the following service providers who help us operate our
              business, and only to the extent necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>EmailJS</strong> — receives contact form submissions and forwards them to our email</li>
              <li><strong>Vercel</strong> — hosts our website and processes traffic data</li>
              <li><strong>Google</strong> — Google Analytics (site usage), Google Business Profile (reviews and inquiries), Google Ads (advertising performance)</li>
              <li><strong>Meta (Facebook/Instagram)</strong> — Facebook Pixel (ad performance and retargeting) when running ads</li>
              <li><strong>Our accountant, bookkeeper, and payment processors</strong> — for invoicing, tax records, and payment processing</li>
              <li><strong>Legal or government authorities</strong> — only when required by law (court order, subpoena, tax audit)</li>
            </ul>
            <p>
              All third-party providers we use have their own privacy policies. Some of them (Google, Meta,
              Vercel) may store data outside of Canada, including in the United States. By using our website
              or contacting us, you consent to this cross-border data transfer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Data Storage &amp; Security</h2>
            <p className="mb-4">
              Your personal information is stored securely in encrypted email systems and password-protected
              business tools. Only authorized LuminaSky staff who need the information to serve you have access.
            </p>
            <p className="mb-4">
              We take reasonable physical, administrative, and technical safeguards to protect against
              unauthorized access, loss, misuse, or alteration of your information. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p>
              If we ever experience a data breach involving your personal information, we will notify you
              as required by PIPEDA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. How Long We Keep Your Information</h2>
            <p className="mb-3">
              We retain your information for as long as needed to fulfill the purpose it was collected for,
              and to comply with Canadian legal requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Active leads and inquiries:</strong> up to 2 years after last contact</li>
              <li><strong>Customer records (completed jobs):</strong> up to 7 years, as required by Canadian tax law</li>
              <li><strong>Marketing consent records:</strong> for the duration of the consent, plus 3 years for CASL record-keeping</li>
              <li><strong>Website analytics data:</strong> up to 26 months (Google Analytics default)</li>
            </ul>
            <p>You may request earlier deletion of your information at any time (see Section 9 below).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Our website uses cookies and similar technologies (localStorage, sessionStorage) for the
              following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Essential:</strong> Remembering that you dismissed a popup or banner</li>
              <li><strong>Analytics:</strong> Google Analytics to understand how visitors use our site</li>
              <li><strong>Advertising:</strong> Facebook Pixel and Google Ads tags to measure ad effectiveness and enable retargeting (when we run ads)</li>
              <li><strong>Attribution:</strong> UTM parameters to track which marketing source you came from</li>
            </ul>
            <p>
              You can disable cookies in your browser settings, but some parts of the site (like the
              dismissible popup) may not work as expected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Your Rights Under PIPEDA</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request that we delete your information (subject to our legal record-keeping obligations)</li>
              <li><strong>Withdraw consent:</strong> Withdraw your consent to our use of your information at any time</li>
              <li><strong>Data portability:</strong> Request your information in a portable format</li>
              <li><strong>Complaint:</strong> File a complaint about how we handle your information</li>
            </ul>
            <p className="mb-3">To exercise any of these rights, contact us at:</p>
            <ul className="list-none pl-0 space-y-1 mb-4">
              <li>
                Email:{" "}
                <a href={EMAIL_HREF} className="text-primary hover:underline font-medium">
                  {EMAIL}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={PHONE_HREF} className="text-primary hover:underline font-medium">
                  {PHONE}
                </a>
              </li>
            </ul>
            <p className="mb-4">We will respond to your request within 30 days.</p>
            <p>
              If you are not satisfied with our response, you have the right to file a complaint with the
              Office of the Privacy Commissioner of Canada:
            </p>
            <ul className="list-none pl-0 space-y-1 mt-2">
              <li>
                Website:{" "}
                <a
                  href="https://www.priv.gc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  www.priv.gc.ca
                </a>
              </li>
              <li>Phone: 1-800-282-1376</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
            <p>
              Our services are intended for homeowners and business owners aged 18 and over. We do not
              knowingly collect personal information from children under 18. If you believe a child has
              provided us with personal information, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. When we do, we will update the
              &ldquo;Last Updated&rdquo; date at the top of the page. For significant changes, we may
              also notify you by email.
            </p>
            <p>We encourage you to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your
              personal information, please contact:
            </p>
            <p className="font-semibold text-gray-900">LuminaSky Glass Services</p>
            <p className="text-gray-600 mb-2">Privacy Officer</p>
            <p>
              Email:{" "}
              <a href={EMAIL_HREF} className="text-primary hover:underline">
                {EMAIL}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">
                {PHONE}
              </a>
            </p>
            <p>Address: Thornhill, Ontario, Canada</p>
          </section>
        </div>
      </div>
    </main>
  );
}
