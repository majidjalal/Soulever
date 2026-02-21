import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 pb-16">
        <div className="section-container max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          <h1 className="heading-display mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-body">
            <section>
              <h2 className="font-display text-xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Soulever by Beyond ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or
                submit an inquiry through our contact form. Please read this policy carefully to understand our
                practices regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number (including WhatsApp number),
                  and city/country when you register your interest or contact us.
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages and inquiries you submit through our contact form.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and pages visited when
                  you browse our website.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We may use cookies and similar tracking technologies
                  to enhance your experience and analyze site usage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide information about our developments</li>
                <li>Send you exclusive pricing, floor plans, and investment insights as requested</li>
                <li>Improve our website, services, and user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (only with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We may share your data with trusted third parties who assist
                us in operating our website, conducting our business, or servicing you (e.g., CRM providers, analytics
                services), provided they agree to keep this information confidential. We may also disclose information
                when required by law or to protect our rights, property, or safety.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this policy, unless a longer retention period is required by law. You may request deletion of your
                data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the details provided below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">8. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure that such transfers comply with applicable data protection laws and that appropriate
                safeguards are in place.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the updated policy on this page and updating the "Last updated" date. We encourage you to
                review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Soulever by Beyond</strong>
                <br />
                Dubai Maritime City
                <br />
                Madinat Dubai Al Melaheyah, Dubai, UAE
                <br />
                <a href="mailto:info@soulever.ae" className="text-gold font-medium hover:underline">
                  info@soulever.ae
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/"
              className="inline-flex items-center text-gold font-medium hover:underline"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
