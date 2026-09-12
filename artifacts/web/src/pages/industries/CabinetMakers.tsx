import { SEO } from "@/components/SEO";
import { StandardIndustryPage } from "@/components/industry/standard/StandardIndustryPage";
import data from "@/components/industry/standard/content/cabinet-makers";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";
import { cabinetMakerGetStartedHref } from "@/lib/cabinetMakerLinks";

const PAGE_TITLE = "Custom Websites for Cabinet Makers | Graylock Digital";
const PAGE_URL = "https://graylockdigital.com" + data.route;

const metaDescription = data.hero.body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export default function CabinetMakers() {
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
          cabinetMakerGetStartedHref(
            placement === "hero"
              ? "hero"
              : placement === "offer"
                ? "process"
                : "final_cta",
          )
        }
        onPrimaryClick={(placement) => {
          if (placement === "hero") {
            trackCabinetMakerEvent("cabinet_maker_hero_cta_click", {
              cta_placement: "hero",
            });
          } else if (placement === "offer") {
            trackCabinetMakerEvent("cabinet_maker_process_cta_click", {
              cta_placement: "process",
            });
          }
        }}
        onProjectClick={() =>
          trackCabinetMakerEvent("cabinet_maker_featured_project_click", {
            cta_placement: "portfolio",
          })
        }
        onFaqExpand={(question) =>
          trackCabinetMakerEvent("cabinet_maker_faq_expand", { question })
        }
      />
    </>
  );
}