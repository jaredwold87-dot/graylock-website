import { SEO } from "@/components/SEO";
import { AuctioneerHero } from "@/components/auctioneers/AuctioneerHero";
import { AuctioneerWhoSection } from "@/components/auctioneers/AuctioneerWhoSection";
import { AuctioneerGoalsSection } from "@/components/auctioneers/AuctioneerGoalsSection";
import { AuctioneerWhatSection } from "@/components/auctioneers/AuctioneerWhatSection";
import { AuctioneerProcessSection } from "@/components/auctioneers/AuctioneerProcessSection";
import { AuctioneerFeaturedProjectSection } from "@/components/auctioneers/AuctioneerFeaturedProjectSection";
import { AuctioneerPricingSection } from "@/components/auctioneers/AuctioneerPricingSection";
import { AuctioneerFinalCTASection } from "@/components/auctioneers/AuctioneerFinalCTASection";
import { AuctioneerStickyCTA } from "@/components/auctioneers/AuctioneerStickyCTA";
import {
  AuctioneerFAQSection,
  AUCTIONEER_FAQS,
} from "@/components/auctioneers/AuctioneerFAQSection";

const PAGE_URL = "https://graylockdigital.com/websites-for-auctioneers";
const PAGE_TITLE =
  "Custom Auctioneer Websites That Win More Bookings | Graylock Digital";
const META_DESCRIPTION =
  "Custom auctioneer websites that market your services to the nonprofits, event committees, and sellers who hire you. Request a free custom homepage demo.";

// WebPage + Service schema (spec); FAQPage main entity mirrors only the
// FAQ visibly rendered on this page. No Review, Event, Auction, or
// testimonial schema until genuine, approved, attributed data exists.
const AUCTIONEER_SCHEMA = {
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
      mainEntity: AUCTIONEER_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Service",
      name: "Custom Auctioneer Website Design",
      serviceType:
        "Website design and marketing sites for auctioneers and auction companies, including general, contract-sale, benefit and gala, livestock, equipment, estate, and real-estate auction services",
      url: PAGE_URL,
      description:
        "Custom auctioneer website design focused on promoting the auctioneer's services to the nonprofits, event committees, sellers, and estates that hire them—presenting services and credibility and routing booking inquiries to the business's designated inbox or CRM. Graylock Digital is a website design and support provider and does not conduct auctions or operate bidding platforms.",
      provider: {
        "@type": "Organization",
        name: "Graylock Digital",
        url: "https://graylockdigital.com",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Auctioneers and auction companies, including general, contract-sale, benefit, livestock, equipment, estate, and real-estate auctioneers",
      },
    },
  ],
};

/**
 * Auctioneer landing page (spec: exact section order) — the nationwide
 * sales follow-up flow: hero promise → self-identification → strategic
 * goals → tangible function → free-demo risk reversal → portfolio standard
 * → pricing/guarantee → FAQ → final demo request, plus the single mobile
 * sticky CTA. No local-market-exclusivity framing anywhere (spec).
 */
export default function Auctioneers() {
  return (
    <div className="theme-black">
      <SEO
        title={PAGE_TITLE}
        ogTitle="When Someone Needs an Auctioneer, Your Website Should Reflect Your Skill and Expertise."
        description={META_DESCRIPTION}
        url={PAGE_URL}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AUCTIONEER_SCHEMA) }}
      />

      <AuctioneerHero />
      <AuctioneerWhoSection />
      <AuctioneerGoalsSection />
      <AuctioneerWhatSection />
      <AuctioneerProcessSection />
      <AuctioneerFeaturedProjectSection />
      <AuctioneerPricingSection />
      <AuctioneerFAQSection />
      <AuctioneerFinalCTASection />
      <AuctioneerStickyCTA />
    </div>
  );
}
