import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ValueDifferentiationSection } from "@/components/home/ValueDifferentiationSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PricingSnapshotSection } from "@/components/home/PricingSnapshotSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Graylock Digital — Custom Websites for Trust-Based Businesses"
        description="Mobile-first websites for private medical practices, accounting firms, and industrial & construction companies. Built in 7–10 business days. Flat monthly rate, no long-term contracts."
        url="https://graylockdigital.com/"
      />
      <HeroSection />
      <TrustBar />
      <OfferBreakdownSection />
      <ProblemSection />
      <HowItWorksSection />
      <TestimonialSection />
      <ValueDifferentiationSection />
      <PricingSnapshotSection />
      <FinalCTASection />
    </>
  );
}
