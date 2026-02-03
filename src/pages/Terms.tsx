import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using MyMaria ("the Service," "we," "us," or "our"), you agree to be bound 
                by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access 
                or use the Service. These Terms constitute a legally binding agreement between you and MyMaria.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>Important:</strong> MyMaria is an independent service and is not affiliated with, 
                endorsed by, or connected to Meta Platforms, Inc. or WhatsApp LLC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria is a Software-as-a-Service (SaaS) platform that provides an AI-powered personal 
                assistant accessible through messaging platforms, including WhatsApp. The Service helps 
                users manage tasks, set reminders, store personal memories, and organize daily activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The Service includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>AI-powered conversational assistance via WhatsApp</li>
                <li>Task and reminder management</li>
                <li>Optional memory storage for personalized experiences</li>
                <li>Web-based dashboard for account management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Beta / Early Access Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria is currently in beta / MVP (Minimum Viable Product) stage. By using the Service, 
                you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Features may change, be added, or removed without prior notice</li>
                <li>The Service may experience downtime, bugs, or technical issues</li>
                <li>We are actively developing and improving based on user feedback</li>
                <li>No guarantees are made regarding uptime, availability, or feature completeness</li>
                <li>Data loss may occur, though we take reasonable precautions to prevent it</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Account Registration & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use the Service, you must create an account by providing accurate and complete information. 
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Provide truthful registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Not share your account credentials with third parties</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You must be at least 13 years old to use this Service. If you are under 18, you must have 
                parental or guardian consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription & Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria may offer free and paid subscription tiers. For paid subscriptions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Fees are billed in advance on a recurring basis (monthly or annually)</li>
                <li>All fees are non-refundable unless otherwise stated or required by law</li>
                <li>We reserve the right to change pricing with 30 days' notice</li>
                <li>Failure to pay may result in suspension or termination of your account</li>
                <li>You are responsible for all taxes associated with your subscription</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                During the beta period, access may be provided free of charge. This does not guarantee 
                continued free access once the Service exits beta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed">You agree to use MyMaria only for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Personal, lawful purposes that comply with all applicable laws</li>
                <li>Genuine interaction with your personal AI assistant</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Use the Service for mass messaging, spam, or automation abuse</li>
                <li>Attempt to impersonate Meta, WhatsApp, or any other entity</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Circumvent any security measures or access restrictions</li>
                <li>Use the Service to harass, abuse, or harm others</li>
                <li>Transmit malware, viruses, or malicious code</li>
                <li>Violate any applicable laws or third-party rights</li>
                <li>Resell or commercially exploit the Service without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. AI Limitations & Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria uses artificial intelligence to provide assistance. You understand and agree that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>AI responses may contain errors or inaccuracies</li>
                <li>The Service is NOT a substitute for professional medical advice</li>
                <li>The Service is NOT a substitute for legal counsel or services</li>
                <li>The Service is NOT a substitute for financial or investment advice</li>
                <li>You should always verify important information independently</li>
                <li>AI-generated content should not be relied upon for critical decisions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service, including its design, features, content, and underlying technology, is owned 
                by MyMaria and protected by intellectual property laws. You retain ownership of any content 
                you submit to the Service ("User Content").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                By using the Service, you grant us a limited license to process your User Content solely 
                for the purpose of providing and improving the Service. We do not claim ownership of your 
                personal data or conversations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data & Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Our collection and use of personal data is governed by 
                our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                By using the Service, you consent to the collection and processing of your data as described 
                in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Service Availability & Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain high availability but do not guarantee uninterrupted access. We reserve 
                the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Modify, suspend, or discontinue features at any time</li>
                <li>Perform scheduled or emergency maintenance</li>
                <li>Limit access during periods of high demand</li>
                <li>Update these Terms with reasonable notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYMARIA SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
                LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Our total liability for any claims arising from these Terms or the Service shall not 
                exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless MyMaria and its officers, directors, 
                employees, and agents from any claims, damages, losses, or expenses (including reasonable 
                attorneys' fees) arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may terminate your account at any time by contacting us. We reserve the right to 
                suspend or terminate your access immediately, with or without cause or notice, for any 
                reason, including violation of these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Upon termination, your right to use the Service ceases immediately. Sections that by their 
                nature should survive termination will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law & Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable law. Any 
                disputes arising from these Terms or the Service shall be resolved through good-faith 
                negotiation, and if necessary, binding arbitration or courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. We will notify users of material changes 
                via email or through the Service at least 30 days before they take effect. Continued 
                use of the Service after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions 
                will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">17. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms, please contact us at:{" "}
                <a href="mailto:support@mymaria.io" className="text-primary hover:underline">
                  support@mymaria.io
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You can also reach us through our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;