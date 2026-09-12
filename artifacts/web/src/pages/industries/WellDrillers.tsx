import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { StandardIndustryPage } from "@/components/industry/standard/StandardIndustryPage";
import data from "@/components/industry/standard/content/well-drillers";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { wellDrillerGetStartedHref } from "@/lib/wellDrillerLinks";

const PAGE_TITLE = "Custom Websites for Well Drillers | Graylock Digital";
const PAGE_URL = "https://graylockdigital.com" + data.route;

const metaDescription = data.hero.body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export default function WellDrillers() {
  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    trackWellDrillerEvent("well_driller_landing_view");
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
          wellDrillerGetStartedHref(
            placement === "hero"
              ? "hero_cta"
              : placement === "offer"
                ? "offer_cta"
                : "final_cta",
          )
        }
        onPrimaryClick={(placement) =>
          trackWellDrillerEvent("well_driller_demo_cta_click", {
            cta_placement:
              placement === "hero"
                ? "hero_cta"
                : placement === "offer"
                  ? "offer_cta"
                  : "final_cta",
          })
        }
        onProjectClick={() =>
          trackWellDrillerEvent("well_driller_portfolio_click", {
            project: data.project.name,
            destination: data.project.href,
          })
        }
        onFaqExpand={(question) =>
          trackWellDrillerEvent("well_driller_faq_expand", { question })
        }
      />
    </>
  );
}