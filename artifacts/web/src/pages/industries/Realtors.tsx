import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { RealtorHero } from "@/components/realtors/RealtorHero";
import { RealtorTrustStrip } from "@/components/realtors/RealtorTrustStrip";
import { RealtorTwoPathsSection } from "@/components/realtors/RealtorTwoPathsSection";
import { RealtorPackageSection } from "@/components/realtors/RealtorPackageSection";
import { RealtorIdxSection } from "@/components/realtors/RealtorIdxSection";
import { RealtorComparisonSection } from "@/components/realtors/RealtorComparisonSection";
import { RealtorInvestmentSection } from "@/components/realtors/RealtorInvestmentSection";
import { RealtorFinalCTASection } from "@/components/realtors/RealtorFinalCTASection";
import { RealtorFAQSection, REALTOR_FAQS } from "@/components/realtors/RealtorFAQSection";
import { RealtorStickyCTA } from "@/components/realtors/RealtorStickyCTA";

const PAGE_URL = "https://graylockdigital.com/websites-for-realtors";
const PAGE_TITLE = "Custom IDX Real Estate Websites for Agents & Teams | Graylock Digital";
const META_DESCRIPTION =
  "Graylock builds custom real-estate websites for agents and teams with buyer search when eligible, seller lead capture, local-market pages, MLS guidance, and ongoing support. Get a free custom website + IDX plan.";

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
        ogTitle="Custom IDX Real Estate Websites for Agents & Teams"
        description={META_DESCRIPTION}
        url={PAGE_URL}
        image="https://graylockdigital.com/og-realtors.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REALTOR_SCHEMA) }}
      />

      {/* Section order per the conversion-redesign scope: hero → trust strip →
          Willow proof → buyer/seller paths → package scope → IDX stages →
          comparison → investment → FAQ → final CTA. */}
      <RealtorHero />
      <RealtorTrustStrip />
      <RealtorTwoPathsSection />
      <RealtorPackageSection />
      <RealtorIdxSection />
      <RealtorComparisonSection />
      <RealtorInvestmentSection />
      <RealtorFAQSection />
      <RealtorFinalCTASection />

      {/* Mobile-only sticky bottom CTA (single action per the scope) */}
      <RealtorStickyCTA />
    </div>
  );
}
