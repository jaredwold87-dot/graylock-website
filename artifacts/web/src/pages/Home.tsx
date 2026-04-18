import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { GuideSection } from "@/components/home/GuideSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ValueDifferentiationSection } from "@/components/home/ValueDifferentiationSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { DashboardSection } from "@/components/home/DashboardSection";
import { PricingSnapshotSection } from "@/components/home/PricingSnapshotSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <TrustBar />
      <OfferBreakdownSection />
      <ProblemSection />
      <GuideSection />
      <HowItWorksSection />
      <ValueDifferentiationSection />
      <CaseStudySection />
      <DashboardSection />
      <PricingSnapshotSection />
      <FinalCTASection />
    </>
  );
}
