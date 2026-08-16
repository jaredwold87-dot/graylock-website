import { SEO } from "@/components/SEO";
import { CabinetMakerHero } from "@/components/cabinet-makers/CabinetMakerHero";
import { CabinetMakerWhoSection } from "@/components/cabinet-makers/CabinetMakerWhoSection";
import { CabinetMakerGoalsSection } from "@/components/cabinet-makers/CabinetMakerGoalsSection";
import { CabinetMakerWhatSection } from "@/components/cabinet-makers/CabinetMakerWhatSection";
import { CabinetMakerProcessSection } from "@/components/cabinet-makers/CabinetMakerProcessSection";
import { CabinetMakerFeaturedProjectSection } from "@/components/cabinet-makers/CabinetMakerFeaturedProjectSection";
import { CabinetMakerPricingSection } from "@/components/cabinet-makers/CabinetMakerPricingSection";
import { CabinetMakerFinalCTASection } from "@/components/cabinet-makers/CabinetMakerFinalCTASection";
import { CabinetMakerStickyCTA } from "@/components/cabinet-makers/CabinetMakerStickyCTA";
import {
  CabinetMakerFAQSection,
  CABINET_MAKER_FAQS,
} from "@/components/cabinet-makers/CabinetMakerFAQSection";

const PAGE_URL = "https://graylockdigital.com/websites-for-cabinet-makers";
const PAGE_TITLE =
  "Custom Cabinet Maker Websites That Generate Design + Quote Requests | Graylock Digital";
const META_DESCRIPTION =
  "Graylock builds custom cabinet-maker websites that showcase premium work, improve local visibility, and turn project interest into design consultations and quote requests. Request a free custom homepage demo.";

// WebPage + Service schema (spec §5); FAQPage main entity mirrors only the
// FAQ visibly rendered on this page. No review/testimonial schema until a
// genuine approved testimonial exists.
const CABINET_MAKER_SCHEMA = {
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
      mainEntity: CABINET_MAKER_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Service",
      name: "Custom Cabinet Maker Website Design",
      serviceType:
        "Website design for custom cabinet shops, millwork companies, and kitchen specialists",
      url: PAGE_URL,
      description:
        "Custom cabinet-maker website design focused on portfolio presentation, local search visibility, and routing design consultations and quote requests to the business's designated inbox or CRM. Graylock Digital is a website design and support provider and does not perform cabinet-making or millwork services.",
      provider: {
        "@type": "Organization",
        name: "Graylock Digital",
        url: "https://graylockdigital.com",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Custom cabinet shops, millwork companies, and kitchen specialists",
      },
    },
  ],
};

/**
 * Cabinet-maker landing page (spec: exact section order §3) — the sales
 * follow-up flow: hero promise → self-identification → strategic goals →
 * tangible function → free-demo risk reversal → portfolio standard →
 * pricing/guarantee → FAQ → final demo request, plus the single mobile
 * sticky CTA.
 */
export default function CabinetMakers() {
  return (
    <div className="theme-black">
      <SEO
        title={PAGE_TITLE}
        ogTitle="Your Cabinets Are Custom. Your Website Should Be Too."
        description={META_DESCRIPTION}
        url={PAGE_URL}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CABINET_MAKER_SCHEMA) }}
      />

      <CabinetMakerHero />
      <CabinetMakerWhoSection />
      <CabinetMakerGoalsSection />
      <CabinetMakerWhatSection />
      <CabinetMakerProcessSection />
      <CabinetMakerFeaturedProjectSection />
      <CabinetMakerPricingSection />
      <CabinetMakerFAQSection />
      <CabinetMakerFinalCTASection />
      <CabinetMakerStickyCTA />
    </div>
  );
}
