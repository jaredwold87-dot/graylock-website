import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  /** Overrides the share-preview title (og/twitter) without changing the tab title. */
  ogTitle?: string;
  description?: string;
  url?: string;
  image?: string;
  noindex?: boolean;
}

const DEFAULT_IMAGE = "https://graylockdigital.com/og-image.jpg";

export function SEO({
  title = "Graylock Digital — Custom Websites for Trust-Based Businesses",
  ogTitle,
  description = "Custom websites for trust-based local businesses. Delivered in 7–10 business days. No long-term contracts.",
  url = "https://graylockdigital.com",
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  const shareTitle = ogTitle ?? title;
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Graylock Digital" />
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={shareTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
