export const AUCTIONEER_LANDING_PATH = "/websites-for-auctioneers";
export const AUCTIONEER_INDUSTRY = "auctioneering";
/** Every public CTA on the landing page sells the free custom demo first. */
export const AUCTIONEER_FREE_DEMO_INTENT = "free_demo";

/** The one CTA label used by every primary demo CTA on this page (spec). */
export const AUCTIONEER_CTA_LABEL = "Request My Free Custom Demo";

/**
 * utm_content placement vocabulary. `hero`, `process`, `portfolio`,
 * `pricing`, and `final_cta` are the spec on-page placements; `header`
 * and `sticky_cta` cover the campaign-aware navbar CTA and the mobile
 * sticky bar (same convention as the realtor/cabinet-maker funnels).
 */
export type AuctioneerCtaPlacement =
  | "header"
  | "hero"
  | "process"
  | "portfolio"
  | "pricing"
  | "final_cta"
  | "sticky_cta";

/**
 * Campaign parameters the sales team may append to landing-page links
 * (e.g. ?rep=K&source=cold_email&utm_campaign=q3).
 * All of them must survive every CTA into /get-started.
 */
const CAMPAIGN_PARAM_KEYS = [
  "market",
  "rep",
  "source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function getAuctioneerCampaignParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const search = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  for (const key of CAMPAIGN_PARAM_KEYS) {
    const value = search.get(key);
    if (value && value.trim()) params[key] = value.trim();
  }
  return params;
}

/**
 * Every "Request My Free Custom Demo" CTA routes to the get-started form
 * with the auctioneering industry context and free-demo intent (spec):
 *
 *   /get-started?industry=auctioneering&intent=free_demo
 *     &utm_source=auctioneer_landing&utm_medium=site_cta
 *     &utm_content=[placement]
 *
 * utm_content always records the clicked placement (the spec reserves it
 * for placement attribution on this page). Inbound utm_source/utm_medium
 * and the sales-campaign params (market/rep/source/utm_campaign/utm_term)
 * are preserved verbatim; the page defaults only fill the gaps.
 */
export function auctioneerGetStartedHref(placement: AuctioneerCtaPlacement): string {
  const campaign = getAuctioneerCampaignParams();
  const params = new URLSearchParams();
  params.set("industry", AUCTIONEER_INDUSTRY);
  params.set("intent", AUCTIONEER_FREE_DEMO_INTENT);
  params.set("utm_source", campaign.utm_source ?? "auctioneer_landing");
  params.set("utm_medium", campaign.utm_medium ?? "site_cta");
  params.set("utm_content", placement);
  for (const key of ["market", "rep", "source", "utm_campaign", "utm_term"] as const) {
    const value = campaign[key];
    if (value) params.set(key, value);
  }
  return `/get-started?${params.toString()}`;
}
