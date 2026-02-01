import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Whether you have feedback, questions, or just want to say hi — 
              we're here during the beta and beyond.
            </p>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Email Us</h2>
                  <p className="text-muted-foreground mb-4">
                    For support, feedback, or general inquiries
                  </p>
                  <a 
                    href="mailto:support@mymaria.io" 
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    support@mymaria.io
                  </a>
                </div>

                <div className="w-full border-t border-border pt-6 mt-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MessageCircle className="h-5 w-5" />
                    <p className="text-sm">
                      We typically respond within 24-48 hours during the beta period.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Your feedback helps us build a better Maria. Thank you for being part of the early access program!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;