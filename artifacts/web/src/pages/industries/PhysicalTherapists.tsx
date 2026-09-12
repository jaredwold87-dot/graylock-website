import { SEO } from "@/components/SEO";
import { StandardIndustryPage } from "@/components/industry/standard/StandardIndustryPage";
import data from "@/components/industry/standard/content/physical-therapists";

const PAGE_TITLE = "Websites for Physical Therapists | Graylock Digital";
const PAGE_URL = "https://graylockdigital.com" + data.route;

// Strip markdown links for SEO description
const metaDescription = "Custom website direction for physical therapy practices, starting with a 15-minute fit call and a Free Homepage Direction before any build fee is due.";

export default function PhysicalTherapists() {
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
      <StandardIndustryPage data={data} />
    </>
  );
}
