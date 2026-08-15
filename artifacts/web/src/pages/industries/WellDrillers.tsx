import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { WellDrillerAnchorStrip } from "@/components/well-drillers/WellDrillerAnchorStrip";
import { WellDrillerHero } from "@/components/well-drillers/WellDrillerHero";
import { WellDrillerWhySection } from "@/components/well-drillers/WellDrillerWhySection";
import { WellDrillerReflectionSection } from "@/components/well-drillers/WellDrillerReflectionSection";
import { WellDrillerWhatWeBuildSection } from "@/components/well-drillers/WellDrillerWhatWeBuildSection";
import { WellDrillerFreeDemoSection } from "@/components/well-drillers/WellDrillerFreeDemoSection";
import { WellDrillerProcessSection } from "@/components/well-drillers/WellDrillerProcessSection";
import { WellDrillerProofSection } from "@/components/well-drillers/WellDrillerProofSection";
import { WellDrillerTestimonialSection } from "@/components/well-drillers/WellDrillerTestimonialSection";
import { WellDrillerPricingBridgeSection } from "@/components/well-drillers/WellDrillerPricingBridgeSection";
import { WellDrillerFinalCTASection } from "@/components/well-drillers/WellDrillerFinalCTASection";
import {
  WellDrillerFAQSection,
  WELL_DRILLER_FAQS,
} from "@/components/well-drillers/WellDrillerFAQSection";

const PAGE_URL = "https://graylockdigital.com/websites-for-well-drillers";
const PAGE_TITLE = "Well Driller Websites That Generate Local Leads | Graylock Digital";
const META_DESCRIPTION =
  "Custom well-drilling websites built to improve local visibility, route service and estimate requests to your inbox, and help you out-compete local alternatives.";

const WELL_DRILLER_SCHEMA = {
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
      mainEntity: WELL_DRILLER_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Service",
      name: "Custom Well Driller Website Design",
      serviceType: "Website design for well-drilling, well pump, and water-system contractors",
      url: PAGE_URL,
      description:
        "Custom well-drilling website design focused on local search visibility and routing service or estimate requests to the business's designated inbox. Graylock Digital is a website design and support provider and does not perform drilling or well services.",
      provider: {
        "@type": "Organization",
        name: "Graylock Digital",
        url: "https://graylockdigital.com",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Well-drilling, well pump, and water-system contractors",
      },
    },
  ],
};

/**
 * Single-page sales flow (demo-first): the section order mirrors the real
 * call — why we called → is the site doing its job → what a better site does
 * → free custom demo + market offer → process → proof → pricing/guarantee →
 * FAQ → final demo request. One public page; no internal sales views.
 */
export default function WellDrillers() {
  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    trackWellDrillerEvent("well_driller_landing_view");
  }, []);

  return (
    <div className="theme-black">
      <SEO
        title={PAGE_TITLE}
        ogTitle="A Better Well-Drilling Website Starts Here"
        description={META_DESCRIPTION}
        url={PAGE_URL}
        image="https://graylockdigital.com/og-well-drillers.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WELL_DRILLER_SCHEMA) }}
      />

      {/* Clears the fixed global navbar so the anchor strip sits directly beneath it */}
      <div className="h-[72px] bg-[#0f0f0f]" aria-hidden="true" />
      <WellDrillerAnchorStrip />
      <WellDrillerHero />
      <WellDrillerWhySection />
      <WellDrillerReflectionSection />
      <WellDrillerWhatWeBuildSection />
      <WellDrillerFreeDemoSection />
      <WellDrillerProcessSection />
      <WellDrillerProofSection />
      {/* Testimonial stays unpublished until a real, approved well-driller
          testimonial is supplied (see WellDrillerTestimonialSection docs). */}
      <WellDrillerTestimonialSection testimonial={null} />
      <WellDrillerPricingBridgeSection />
      <WellDrillerFAQSection />
      <WellDrillerFinalCTASection />
    </div>
  );
}
