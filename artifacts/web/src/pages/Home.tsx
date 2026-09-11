import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { HeroBenefitsSection } from "@/components/home/HeroBenefitsSection";
import { GoogleReviewProofBar } from "@/components/home/GoogleReviewProofBar";
import { ClientExperiencesSection } from "@/components/home/ClientExperiencesSection";
import { WhatWeDeliverSection } from "@/components/home/WhatWeDeliverSection";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ValueDifferentiationSection } from "@/components/home/ValueDifferentiationSection";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { FounderAccountabilitySection } from "@/components/home/FounderAccountabilitySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <div className="[--home-dark-surface:#292B2E]">
      <SEO
        title="Graylock Digital — Custom Websites for Trust-Based Businesses"
        ogTitle="Your Website. Your Reputation. Elevated."
        description="Mobile-first websites for private medical practices, accounting firms, and industrial & construction companies. Built in 7–10 business days. Flat monthly rate, no long-term contracts."
        url="https://graylockdigital.com/"
      />
      <HeroSection />
      <HeroBenefitsSection />
      <GoogleReviewProofBar />
      <ClientExperiencesSection />
      <FeaturedWorkSection />
      <ProblemSection />
      <WhatWeDeliverSection homepage />
      <OfferBreakdownSection />
      <TestimonialSection />
      <ValueDifferentiationSection />
      <HomeFAQSection />
      <FounderAccountabilitySection />
      <FinalCTASection />
    </div>
  );
}
