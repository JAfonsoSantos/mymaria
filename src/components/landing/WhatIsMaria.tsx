import { Bot, Shield, Heart } from "lucide-react";

const WhatIsMaria = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What is MyMaria?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Maria is your personal AI assistant — designed to help you manage your life through natural conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Bot className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Personal Assistant</h3>
            <p className="text-sm text-muted-foreground">
              Maria learns your preferences and helps you stay organized, set reminders, and automate tasks.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Independent & Secure</h3>
            <p className="text-sm text-muted-foreground">
              MyMaria is not affiliated with Meta or WhatsApp. We're an independent service focused on your privacy.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Beta Program</h3>
            <p className="text-sm text-muted-foreground">
              We're currently in beta, actively improving based on user feedback. Join early and shape the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMaria;