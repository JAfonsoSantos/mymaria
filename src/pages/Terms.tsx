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
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria ("the Service") is a personal AI assistant designed to help users manage tasks, 
                set reminders, and organize their daily activities through messaging platforms, starting with WhatsApp. 
                The Service is provided by MyMaria and is not affiliated with, endorsed by, or connected to Meta or WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Beta / MVP Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria is currently in beta / MVP (Minimum Viable Product) stage. This means:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Features may change, be added, or removed without notice</li>
                <li>The service may experience downtime or technical issues</li>
                <li>We are actively developing and improving based on user feedback</li>
                <li>No guarantees are made regarding uptime or feature availability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">You agree to use MyMaria only for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Personal, non-commercial purposes</li>
                <li>Lawful activities that comply with all applicable laws</li>
                <li>Genuine interaction with your personal assistant</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Use the service for mass messaging, spam, or automation abuse</li>
                <li>Attempt to impersonate Meta, WhatsApp, or any other entity</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to reverse engineer or exploit the service</li>
                <li>Use the service for illegal or harmful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. AI Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyMaria uses artificial intelligence to provide assistance. You understand and agree that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Maria is NOT a substitute for professional medical advice</li>
                <li>Maria is NOT a substitute for legal advice or legal services</li>
                <li>Maria is NOT a substitute for financial advice or planning</li>
                <li>Maria may make mistakes or provide inaccurate information</li>
                <li>You should always verify important information independently</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Account Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for 
                all activities that occur under your account. You agree to notify us immediately of any 
                unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to the Service at any time, 
                with or without cause, with or without notice. You may also terminate your account 
                at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. We will notify users of significant changes 
                via email or through the Service. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms, please contact us at:{" "}
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

export default Terms;