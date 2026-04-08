import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";

import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ValueDifferentiationSection } from "@/components/home/ValueDifferentiationSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { DashboardSection } from "@/components/home/DashboardSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { MissionBlurb } from "@/components/home/MissionBlurb";
import { NicheExamplesSection } from "@/components/home/NicheExamplesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <OfferBreakdownSection />
      <ProblemSection />
      <HowItWorksSection />
      <ValueDifferentiationSection />
      <TestimonialSection />
      <SolutionSection />
      <DashboardSection />
      <MissionBlurb />
      <NicheExamplesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
