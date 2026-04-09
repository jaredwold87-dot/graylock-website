import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export function SEO({ 
  title = "Graylock Digital — Custom Websites for Private Practices & Accounting Firms", 
  description = "Custom websites for private practices and accounting firms — therapists, dentists, physicians, CPAs, and more. Delivered in 7–10 business days. No long-term contracts.",
  url = "https://graylockdigital.com" 
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
