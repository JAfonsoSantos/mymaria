import { Shield, Trash2, EyeOff, Server } from "lucide-react";

const privacyPoints = [
  {
    icon: Shield,
    title: "You Control Your Memory",
    description: "Memory is opt-in. You decide what Maria remembers. Turn it off anytime with one command.",
  },
  {
    icon: Trash2,
    title: "Delete Your Data Anytime",
    description: "Request full deletion of your data at any time. We make it simple and fast.",
  },
  {
    icon: EyeOff,
    title: "No Selling of Personal Data",
    description: "We never sell, share, or monetize your personal information. Period.",
  },
  {
    icon: Server,
    title: "Trusted Third-Party Services",
    description: "We use Supabase, OpenAI, and Meta APIs only for essential operations. No hidden trackers.",
  },
];

const Privacy = () => {
  return (
    <section id="privacy" className="py-20 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Privacy & Trust
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your privacy isn't an afterthought — it's foundational to everything we build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {privacyPoints.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <point.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;