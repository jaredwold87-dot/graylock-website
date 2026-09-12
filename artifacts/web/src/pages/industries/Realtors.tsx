import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { StandardIndustryPage } from "@/components/industry/standard/StandardIndustryPage";
import data from "@/components/industry/standard/content/realtors";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref } from "@/lib/realtorLinks";

const PAGE_TITLE = "Custom Real Estate Websites for Agents & Teams | Graylock Digital";
const PAGE_URL = "https://graylockdigital.com" + data.route;

const metaDescription = data.hero.body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export default function Realtors() {
  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    trackRealtorEvent("realtor_landing_view");
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": PAGE_URL,
        name: PAGE_TITLE,
        url: PAGE_URL,
        description: metaDescription,
        isPartOf: {
          "@type": "WebSite",
          name: "Graylock Digital",
          url: "https://graylockdigital.com",
        },
        mainEntity: data.faq.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title={PAGE_TITLE}
        description={metaDescription}
        url={PAGE_URL}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <StandardIndustryPage
        data={data}
        primaryHref={(placement) =>
          realtorGetStartedHref(
            placement === "hero"
              ? "hero"
              : placement === "offer"
                ? "package_scope"
                : "final_cta",
          )
        }
        onPrimaryClick={(placement) => {
          if (placement === "hero") {
            trackRealtorEvent("realtor_hero_cta_click", { cta_placement: "hero" });
          } else if (placement === "final_cta") {
            trackRealtorEvent("realtor_final_cta_click", { cta_placement: "final_cta" });
          }
        }}
        onProjectClick={() =>
          trackRealtorEvent("realtor_featured_project_click", {
            cta_placement: "featured_project",
          })
        }
        onFaqExpand={(question) =>
          trackRealtorEvent("realtor_faq_expand", { question })
        }
      />
    </>
  );
}