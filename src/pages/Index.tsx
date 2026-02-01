import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import WhatIsMaria from "@/components/landing/WhatIsMaria";
import Features from "@/components/landing/Features";
import Privacy from "@/components/landing/Privacy";
import FAQ from "@/components/landing/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatIsMaria />
        <Features />
        <Privacy />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;