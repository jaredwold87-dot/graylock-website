export const CANONICAL_ORIGIN = "https://graylockdigital.com";
export const DEFAULT_OG_IMAGE = `${CANONICAL_ORIGIN}/og-image.jpg`;

export type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SiteRoute {
  path: string;
  priority: number;
  changefreq: ChangeFreq;
  lastmod?: string;
  indexable: boolean;
}

const TODAY = new Date().toISOString().slice(0, 10);

export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", priority: 1.0, changefreq: "weekly", lastmod: TODAY, indexable: true },
  { path: "/how-it-works", priority: 0.8, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/pricing", priority: 0.9, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/work", priority: 0.8, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/about", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/faq", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/get-started", priority: 0.9, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/accountants", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/other-service-businesses", priority: 0.6, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-accountants", priority: 0.8, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-chiropractors", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-dentists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-dermatologists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-ophthalmologists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-optometrists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-physical-therapists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-physicians", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-psychologists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-therapists", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-veterinarians", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/websites-for-industrial-construction", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/our-strategy", priority: 0.8, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/website-design", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/seo-for-small-business", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/geo-generative-engine-optimization", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/funnel-pages", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/google-business-profile", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/lead-generation-for-small-business", priority: 0.7, changefreq: "monthly", lastmod: TODAY, indexable: true },
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly", lastmod: TODAY, indexable: true },
  { path: "/terms-of-service", priority: 0.3, changefreq: "yearly", lastmod: TODAY, indexable: true },
];

export function canonicalUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path !== "/" && path.endsWith("/")) path = path.replace(/\/+$/, "");
  return `${CANONICAL_ORIGIN}${path}`;
}

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Graylock Digital",
  url: CANONICAL_ORIGIN,
  logo: `${CANONICAL_ORIGIN}/logo-stacked.png`,
  description:
    "Custom websites for private practices, accounting firms, and trust-based local businesses.",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${CANONICAL_ORIGIN}/get-started`,
      availableLanguage: ["English"],
    },
  ],
};
