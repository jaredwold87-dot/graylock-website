import { Helmet } from "react-helmet-async";
import {
  CANONICAL_ORIGIN,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_JSONLD,
  canonicalUrl,
} from "@/lib/site-routes";

interface SEOProps {
  title?: string;
  description?: string;
  /** Absolute canonical URL. Prefer using `path` instead. */
  url?: string;
  /** Path on the site (e.g. "/pricing"). Used to compute the canonical URL. */
  path?: string;
  image?: string;
  noindex?: boolean;
  /** Set to false to suppress the site-wide Organization JSON-LD on this page. */
  includeOrganizationSchema?: boolean;
}

const DEFAULT_TITLE =
  "Graylock Digital — Custom Websites for Private Practices";
const DEFAULT_DESCRIPTION =
  "Custom websites for private practices, accounting firms, and trust-based local businesses. Delivered in 7–10 business days. No long-term contracts.";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  includeOrganizationSchema = true,
}: SEOProps) {
  const canonical = url
    ? url
    : path
      ? canonicalUrl(path)
      : CANONICAL_ORIGIN;
  const ogImage = image.startsWith("http")
    ? image
    : `${CANONICAL_ORIGIN}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Graylock Digital" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {!noindex && includeOrganizationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(ORGANIZATION_JSONLD)}
        </script>
      )}
    </Helmet>
  );
}
