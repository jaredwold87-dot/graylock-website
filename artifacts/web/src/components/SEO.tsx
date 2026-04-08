import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export function SEO({ 
  title = "Graylock Digital — Professional Practice Websites | Law, Medical, Therapy, CPA", 
  description = "Custom websites for law firms, therapists, medical practices, and CPAs. Delivered in 7–10 business days. Starting at $199/month. No long-term contracts.",
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
