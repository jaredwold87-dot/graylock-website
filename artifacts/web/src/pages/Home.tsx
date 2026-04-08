import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ValueDifferentiationSection } from "@/components/home/ValueDifferentiationSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { DashboardSection } from "@/components/home/DashboardSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <TrustBar />
      <OfferBreakdownSection />
      <ProblemSection />
      <HowItWorksSection />
      <ValueDifferentiationSection />
      <CaseStudySection />
      <DashboardSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
