import { Bell, Brain, MessageSquare, Globe, Lock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Set reminders based on time or events. Maria will nudge you at exactly the right moment.",
  },
  {
    icon: Brain,
    title: "Personal Memory",
    description: "Maria remembers your preferences, habits, and context — only with your explicit consent.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-based",
    description: "Interact naturally through WhatsApp. No new apps to download, no learning curve.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Speak to Maria in Portuguese, English, or Spanish. She adapts to your language.",
  },
  {
    icon: Lock,
    title: "Secure Auth",
    description: "Your account is protected with modern authentication. Your data stays safe.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Trigger automations, check your schedule, or get instant answers with simple commands.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Core Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to stay organized and in control — built for the MVP, ready to grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;