import { HeroSection } from "@/sections/HeroSection";
import { SocialProofSection } from "@/sections/SocialProofSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { DemoPreviewSection } from "@/sections/DemoPreviewSection";
import { PainPointsSection } from "@/sections/PainPointsSection";
import { ComparisonSection } from "@/sections/ComparisonSection";
import { AudienceSection } from "@/sections/AudienceSection";
import { PricingSection } from "@/sections/PricingSection";
import { FAQSection } from "@/sections/FAQSection";
import { FinalCTASection } from "@/sections/FinalCTASection";

export const Index = () => {
  return (
    <div className="bg-obsidian-void text-foreground">
      <section id="hero">
        <HeroSection />
      </section>
      <SocialProofSection />
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <DemoPreviewSection />
      <PainPointsSection />
      <ComparisonSection />
      <AudienceSection />
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <FinalCTASection />
    </div>
  );
};

export default Index;
