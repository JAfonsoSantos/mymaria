import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Currently in beta</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your personal AI assistant,{" "}
            <span className="text-primary">built around you.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            MyMaria helps you remember, organize, and act — through WhatsApp and the tools you already use.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/register">
                <MessageCircle className="mr-2 h-5 w-5" />
                Request early access
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/login">Sign in</Link>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            No credit card required • Cancel anytime • Your data stays yours
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;