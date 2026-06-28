import { Helmet } from "react-helmet-async";
import { CONTACT_PHONE_TEL } from "@/lib/contact";

const SITE_URL = "https://graylockdigital.com";

const GLOBAL_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Graylock Digital",
    legalName: "Graylock Digital, LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      "Custom websites for trust-based local businesses — conversion-focused design, lead generation, SEO, and industry compliance, built in 7–10 business days.",
    areaServed: "United States",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE_TEL,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Graylock Digital",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "Graylock Digital",
    },
  },
];

export function GlobalSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(GLOBAL_SCHEMA)}
      </script>
    </Helmet>
  );
}
