import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for LuminaSky Glass Services. Learn about quotes, warranty, scheduling, payment terms, and customer responsibilities for our window and glass repair services across the GTA.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: October 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the LuminaSky Glass Services
            website (luminasky.com) and the services we provide. By using our website, submitting a service
            request, or booking any work with us, you agree to these Terms. If you do not agree, please do
            not use our website or services.
          </p>
          <p>
            LuminaSky Glass Services (&ldquo;LuminaSky,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is a family-run glass and window repair business operating in the Greater
            Toronto Area, Ontario, Canada.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Services We Provide</h2>
            <p className="mb-3">
              LuminaSky provides residential and commercial glass and window repair services, including but
              not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Foggy glass and sealed unit replacement</li>
              <li>Window crank and hardware repair</li>
              <li>Front door glass replacement</li>
              <li>Window and door screen repair and replacement</li>
              <li>Skylight glass repair and replacement</li>
              <li>Emergency glass repair</li>
              <li>Full window replacement when repair is not practical</li>
            </ul>
            <p>
              Our service area is the Greater Toronto Area and surrounding municipalities. We reserve the
              right to decline service to any location, property, or project at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Quotes, Estimates, and Pricing</h2>
            <p className="mb-3">
              <strong>Quotes are estimates, not binding contracts.</strong> Any price we provide, whether
              verbally, in writing, by email, by text, or through our website contact forms, is an initial
              estimate based on the information provided to us at the time.
            </p>
            <p className="mb-3">Final pricing may differ based on:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Actual condition of the window, glass, or hardware upon on-site inspection</li>
              <li>Additional repairs discovered during service</li>
              <li>Changes in material costs or availability</li>
              <li>Access challenges (high-rise, difficult window positions, scaffolding needs)</li>
              <li>Scope changes requested by the customer</li>
              <li>Local building code or permit requirements</li>
            </ul>
            <p>
              Written quotes are valid for 30 days from the date issued, unless otherwise specified. We
              reserve the right to update pricing at any time before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Photo Quotes</h2>
            <p>
              For many jobs, we provide a complimentary quote based on photos sent to us. Photo quotes are
              estimates only. The final price may be adjusted after on-site inspection if the actual condition
              differs from what the photos showed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Scheduling and Service Times</h2>
            <p className="mb-3">
              We make reasonable efforts to accommodate your preferred scheduling. However:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service times are approximate, not guaranteed</li>
              <li>
                Weather, traffic, previous appointment delays, parts availability, and other factors beyond
                our control may affect timing
              </li>
              <li>
                Emergency and same-day availability is subject to our workload and cannot be guaranteed in
                advance
              </li>
              <li>We will communicate scheduling updates as soon as reasonably possible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Materials and Substitutions</h2>
            <p className="mb-4">
              We use quality replacement glass, hardware, and parts sourced from reputable suppliers. Specific
              brands, finishes, or models may vary based on availability. We reserve the right to substitute
              equivalent materials of similar or better quality without prior notice when the specified item is
              unavailable or discontinued.
            </p>
            <p>
              For custom orders (decorative glass, special shapes, non-standard hardware), lead times may
              vary. We will provide reasonable estimates but cannot guarantee specific delivery dates for
              custom items.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Workmanship Warranty</h2>
            <p className="mb-3">
              LuminaSky provides a workmanship warranty on repairs and installations we perform. Specific
              warranty terms vary by service type and will be provided in writing at the time of service or on
              your invoice.
            </p>
            <p className="mb-3">
              The warranty covers defects in our workmanship under normal use. The warranty does NOT cover:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Damage from accidents, misuse, abuse, vandalism, break-in attempts, or impact</li>
              <li>Damage from severe weather (hail, windstorms, fire, flooding, earthquakes)</li>
              <li>Normal wear and tear</li>
              <li>Damage caused by work performed by other contractors after our installation</li>
              <li>Damage from customer modifications or repairs after our service</li>
              <li>Pre-existing conditions in the frame, sash, structure, or surrounding materials</li>
              <li>Issues caused by building settlement or structural problems</li>
              <li>Scratches or damage to glass that occur after we leave the site</li>
              <li>
                Factory defects in materials (these are covered by the manufacturer&apos;s warranty, which we
                will facilitate)
              </li>
            </ul>
            <p>
              Warranty claims must be submitted to{" "}
              <a href={EMAIL_HREF} className="text-primary hover:underline">
                {EMAIL}
              </a>{" "}
              in writing, with photos and a description of the issue, within the warranty period. We will
              respond within a reasonable time and arrange inspection or service as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Payment Terms</h2>
            <p className="mb-3">
              Payment is due upon completion of work unless otherwise agreed in writing. We accept:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                E-Transfer to{" "}
                <a href={EMAIL_HREF} className="text-primary hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li>Cash</li>
              <li>Other methods as agreed in advance</li>
            </ul>
            <p className="mb-4">
              HST (Harmonized Sales Tax) is applied where applicable per Canadian tax law.
            </p>
            <p>
              Late payments may result in collection action, suspension of warranty coverage, or refusal of
              future service. Any legal fees or collection costs incurred to recover unpaid amounts may be
              added to the amount owed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Customer Responsibilities</h2>
            <p className="mb-3">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Provide accurate information about the issue, property, and access requirements</li>
              <li>Grant us safe access to the work area during the scheduled service time</li>
              <li>Secure pets, valuables, and fragile items near the work area before our arrival</li>
              <li>
                Disclose any known structural issues, lead paint, asbestos, mold, or safety hazards in or
                around the work area
              </li>
              <li>
                Have the authority to authorize the work (if you are not the property owner, confirm you have
                the owner&apos;s permission in writing if requested)
              </li>
              <li>Pay for completed work per the agreed terms</li>
            </ul>
            <p>
              If you are a condominium owner, you are responsible for obtaining any approvals required by your
              condominium corporation before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p className="mb-3">To the fullest extent permitted by Ontario law:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                LuminaSky&apos;s total liability for any claim arising from our services, website, or these
                Terms is limited to the amount you paid for the specific service that is the subject of the
                claim.
              </li>
              <li>
                We are not liable for indirect, incidental, special, consequential, or punitive damages,
                including lost profits, business interruption, property damage beyond the window or glass
                serviced, or data loss.
              </li>
              <li>
                We are not responsible for pre-existing damage to windows, frames, trim, drywall, paint, or
                finishes that becomes visible after we remove existing materials.
              </li>
              <li>
                We are not liable for damage caused by hidden conditions (rotted framing, mold, pest damage,
                structural issues) that could not have been reasonably known before work began.
              </li>
            </ul>
            <p>
              This section does not limit any rights you have under the Ontario Consumer Protection Act, 2002
              or other mandatory consumer protection laws that cannot be waived.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Website Content</h2>
            <p className="mb-3">
              The content on luminasky.com, including text, images, logos, graphics, and layout, is the
              property of LuminaSky Glass Services or licensed to us. You may view and share this content for
              personal, non-commercial purposes only. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Copy, reproduce, or republish our website content for commercial use</li>
              <li>Use our brand name, logo, or photos to represent any other business</li>
              <li>Scrape, data-mine, or extract information from our website in bulk</li>
              <li>Attempt to disrupt, hack, or interfere with our website operations</li>
            </ul>
            <p className="mb-4">
              Project photos displayed on our website show actual work completed by LuminaSky. Results on your
              project may vary based on condition, materials, and site-specific factors.
            </p>
            <p>
              Customer testimonials and reviews are from real LuminaSky customers. No compensation is provided
              in exchange for reviews.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              11. Third-Party Links and Services
            </h2>
            <p>
              Our website may link to third-party websites or services (such as Google Maps, WhatsApp, EmailJS
              forms, review platforms). We are not responsible for the content, privacy practices, or
              availability of third-party services. Use of those services is governed by their own terms and
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Changes to Services or Scope</h2>
            <p className="mb-3">
              If, during an on-site visit, we identify additional work beyond the original quote (for example,
              discovering rotted framing while replacing glass), we will:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Stop work and inform you of the additional scope and estimated cost</li>
              <li>Obtain your approval before proceeding with the additional work</li>
              <li>Not perform additional billable work without your consent</li>
            </ul>
            <p>
              Minor adjustments necessary to complete the originally quoted work (such as additional sealant,
              minor hardware adjustments) are included in the original quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Cancellations and Rescheduling</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">By you:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                You may cancel or reschedule service with reasonable notice (typically 24 hours before the
                scheduled appointment)
              </li>
              <li>
                Custom orders (special glass, decorative inserts) once placed may be subject to a restocking
                fee or cannot be cancelled, as disclosed at the time of order
              </li>
              <li>Deposits on custom work are non-refundable once materials are ordered</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">By us:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                We may need to reschedule due to weather, previous job overruns, parts delays, or other
                operational factors
              </li>
              <li>We will communicate as soon as possible and work with you to find an alternative time</li>
              <li>We do not charge for reschedules initiated by us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14. No Guarantees on Appearance</h2>
            <p className="mb-3">
              Window and glass repair involves working with existing structures that may show age, wear, or
              imperfections. We make reasonable efforts to produce a clean, professional result, but:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                We cannot guarantee that paint, caulking, or trim surrounding the work area will perfectly
                match pre-existing finishes
              </li>
              <li>
                Minor touch-up painting or caulking may be needed after service, which the customer is
                responsible for unless specifically included in the quote
              </li>
              <li>
                Replacement glass may show slight differences in tint, texture, or reflection compared to
                adjacent original glass, especially in older homes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Emergency Service</h2>
            <p className="mb-3">
              For emergency glass repair (break-ins, accidents, severe weather damage):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Availability depends on our current workload and location</li>
              <li>Emergency response is not guaranteed within specific timeframes</li>
              <li>
                Temporary board-up or weatherproofing may be provided as an interim measure, with permanent
                repair scheduled separately
              </li>
              <li>Emergency rates may apply for after-hours, weekend, or holiday service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Communication and Marketing</h2>
            <p className="mb-4">
              By submitting a service request through our website, phone, text, WhatsApp, email, or in-person,
              you consent to LuminaSky contacting you about your request by phone, text, email, or messaging
              apps. You may unsubscribe from marketing communications at any time by replying
              &ldquo;STOP&rdquo; to texts, clicking unsubscribe in emails, or emailing{" "}
              <a href={EMAIL_HREF} className="text-primary hover:underline">
                {EMAIL}
              </a>
              .
            </p>
            <p>
              For details on how we handle your information, see our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">17. Dispute Resolution</h2>
            <p className="mb-4">
              Before pursuing any legal action, we encourage you to contact us directly at{" "}
              <a href={EMAIL_HREF} className="text-primary hover:underline">
                {EMAIL}
              </a>{" "}
              or{" "}
              <a href={PHONE_HREF} className="text-primary hover:underline">
                {PHONE}
              </a>{" "}
              to resolve any concerns. Most issues are resolved through direct communication.
            </p>
            <p>
              If a dispute cannot be resolved informally, both parties agree to attempt good-faith negotiation
              before pursuing legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              18. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada
              applicable therein. Any legal action relating to these Terms or our services must be brought in
              the courts of Ontario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">19. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last Updated&rdquo; date at the top
              will reflect the most recent revision. Significant changes will be posted on this page. By
              continuing to use our website or services after changes are posted, you accept the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">20. Contact Us</h2>
            <p className="mb-3">Questions about these Terms? Contact us:</p>
            <p className="font-semibold text-gray-900">LuminaSky Glass Services</p>
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
