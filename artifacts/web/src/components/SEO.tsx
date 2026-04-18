import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  noindex?: boolean;
}

export function SEO({
  title = "Graylock Digital — Custom Websites for Private Practices",
  description = "Custom websites for private practices, accounting firms, and trust-based local businesses. Delivered in 7–10 business days. No long-term contracts.",
  url = "https://graylockdigital.com",
  noindex = false,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
