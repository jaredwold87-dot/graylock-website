import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { RealtorHero } from "@/components/realtors/RealtorHero";
import { RealtorTrustBar } from "@/components/realtors/RealtorTrustBar";
import { RealtorProblemSection } from "@/components/realtors/RealtorProblemSection";
import { RealtorWhatWeBuildSection } from "@/components/realtors/RealtorWhatWeBuildSection";
import { RealtorIdxSection } from "@/components/realtors/RealtorIdxSection";
import { RealtorProcessSection } from "@/components/realtors/RealtorProcessSection";
import { RealtorProofBridgeSection } from "@/components/realtors/RealtorProofBridgeSection";
import { RealtorTestimonialSection } from "@/components/realtors/RealtorTestimonialSection";
import { RealtorComparisonSection } from "@/components/realtors/RealtorComparisonSection";
import { RealtorPricingBridgeSection } from "@/components/realtors/RealtorPricingBridgeSection";
import { RealtorFinalCTASection } from "@/components/realtors/RealtorFinalCTASection";
import { RealtorFAQSection, REALTOR_FAQS } from "@/components/realtors/RealtorFAQSection";

const PAGE_URL = "https://graylockdigital.com/websites-for-realtors";
const PAGE_TITLE = "IDX Real Estate Websites for Agents & Teams | Graylock Digital";
const META_DESCRIPTION =
  "Custom real estate websites with IDX property search, local MLS approval guidance, and lead-generation strategy for agents, teams, and brokerages.";

const REALTOR_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": PAGE_URL,
      name: PAGE_TITLE,
      url: PAGE_URL,
      description: META_DESCRIPTION,
      isPartOf: {
        "@type": "WebSite",
        name: "Graylock Digital",
        url: "https://graylockdigital.com",
      },
      // FAQPage main entity mirrors the FAQ rendered visibly on this page.
      mainEntity: REALTOR_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Service",
      name: "Custom Real Estate Website Design",
      serviceType: "Website design for real estate agents, teams, and brokerages",
      url: PAGE_URL,
      description:
        "Custom real estate website design with IDX property-search integration support when MLS and brokerage eligibility allow. Graylock Digital is a website design and support provider, not an MLS or real estate data provider.",
      provider: {
        "@type": "Organization",
        name: "Graylock Digital",
        url: "https://graylockdigital.com",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Real estate agents, teams, and brokerages",
      },
    },
  ],
};

export default function Realtors() {
  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    trackRealtorEvent("realtor_landing_view");
  }, []);

  return (
    <div className="theme-black">
      <SEO
        title={PAGE_TITLE}
        ogTitle="Real Estate Websites That Turn Searches Into Conversations"
        description={META_DESCRIPTION}
        url={PAGE_URL}
        image="https://graylockdigital.com/og-realtors.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REALTOR_SCHEMA) }}
      />

      <RealtorHero />
      <RealtorTrustBar />
      <RealtorProblemSection />
      <RealtorWhatWeBuildSection />
      <RealtorIdxSection />
      <RealtorProcessSection />
      <RealtorProofBridgeSection />
      {/* Testimonial stays unpublished until a real, approved realtor
          testimonial is supplied (see RealtorTestimonialSection docs). */}
      <RealtorTestimonialSection testimonial={null} />
      <RealtorComparisonSection />
      <RealtorPricingBridgeSection />
      <RealtorFinalCTASection />
      <RealtorFAQSection />
    </div>
  );
}
