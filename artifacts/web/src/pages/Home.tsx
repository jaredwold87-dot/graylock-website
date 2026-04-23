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
import { LeadMagnetSection } from "@/components/home/LeadMagnetSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Graylock Digital — Websites for Practices & Contractors"
        description="Mobile-first websites for practices, construction firms, and accounting offices. Built in 7–10 days. Flat monthly rate, no long-term contracts."
        url="https://graylockdigital.com/"
      />
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
      <LeadMagnetSection />
    </>
  );
}
