import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is MyMaria official from WhatsApp or Meta?",
    answer: "No. MyMaria is an independent service and is not affiliated with, endorsed by, or connected to Meta or WhatsApp in any way. We use WhatsApp's official Business API to enable messaging, but we are a separate company.",
  },
  {
    question: "Does MyMaria store my messages?",
    answer: "We only store what's necessary for the service to function. If you enable memory, Maria will remember your preferences and context. You can delete this data anytime. We never store messages beyond what's needed for your experience.",
  },
  {
    question: "Is this a finished product?",
    answer: "No. MyMaria is currently in beta / MVP stage. We're actively developing new features and improving existing ones based on user feedback. By joining early, you help shape the product.",
  },
  {
    question: "What languages does Maria support?",
    answer: "Maria currently supports Portuguese, English, and Spanish. She can detect your language automatically and respond accordingly.",
  },
  {
    question: "How do I delete my data?",
    answer: "You can request data deletion at any time by contacting us at support@mymaria.io or through your dashboard settings. We'll process your request promptly.",
  },
  {
    question: "Is there a cost to use MyMaria?",
    answer: "During the beta period, MyMaria is free to use. We may introduce paid features in the future, but we'll always maintain a free tier for basic functionality.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;