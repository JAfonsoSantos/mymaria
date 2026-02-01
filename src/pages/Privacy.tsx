import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At MyMaria, your privacy is foundational to everything we build. This Privacy Policy explains 
                what data we collect, why we collect it, and how we protect it. We are committed to transparency 
                and giving you control over your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. What Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We collect the following types of data:</p>
              
              <h3 className="text-lg font-medium text-foreground mb-2">Account Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Email address (for authentication and communication)</li>
                <li>Name (for personalization)</li>
                <li>Password (encrypted, never stored in plain text)</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">Usage Data</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Messages sent to Maria (processed for responses)</li>
                <li>Preferences and settings you configure</li>
                <li>Memory data (only if you opt-in to memory features)</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">Technical Data</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device type and browser information</li>
                <li>IP address (for security purposes)</li>
                <li>Usage analytics (anonymized)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Why We Collect Data</h2>
              <p className="text-muted-foreground leading-relaxed">We collect data to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Provide and operate the MyMaria service</li>
                <li>Personalize your experience with Maria</li>
                <li>Improve our service based on usage patterns</li>
                <li>Communicate with you about your account</li>
                <li>Ensure security and prevent abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Processors</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use trusted third-party services to operate MyMaria. These services have their own privacy 
                policies and are contractually obligated to protect your data:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Supabase</strong> – Database and authentication infrastructure</li>
                <li><strong>OpenAI</strong> – AI processing for Maria's responses (when enabled)</li>
                <li><strong>Meta / WhatsApp</strong> – Messaging platform integration</li>
                <li><strong>Resend</strong> – Email delivery service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data only for as long as necessary to provide the service and comply with 
                legal obligations. When you delete your account, we delete your personal data within 30 days, 
                except where required by law to retain it longer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li><strong>Access</strong> – Request a copy of your personal data</li>
                <li><strong>Correction</strong> – Update or correct inaccurate data</li>
                <li><strong>Deletion</strong> – Request deletion of your data</li>
                <li><strong>Export</strong> – Receive your data in a portable format</li>
                <li><strong>Opt-out</strong> – Disable memory and other optional features</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:support@mymaria.io" className="text-primary hover:underline">
                  support@mymaria.io
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Encryption in transit (TLS/SSL)</li>
                <li>Encryption at rest</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria is not intended for users under the age of 13. We do not knowingly collect 
                personal information from children under 13. If we become aware of such data, we will 
                delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant 
                changes via email or through the Service. The "Last updated" date at the top indicates 
                when the policy was last revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or your personal data, please contact us at:{" "}
                <a href="mailto:support@mymaria.io" className="text-primary hover:underline">
                  support@mymaria.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;