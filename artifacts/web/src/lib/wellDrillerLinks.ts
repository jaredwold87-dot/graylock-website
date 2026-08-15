export const WELL_DRILLER_LANDING_PATH = "/websites-for-well-drillers";
export const WELL_DRILLER_INDUSTRY = "well-drilling";

export type WellDrillerCtaPlacement =
  | "header_cta"
  | "hero_cta"
  | "offer_cta"
  | "pricing_cta"
  | "final_cta";

/**
 * Campaign parameters the sales team may append to landing-page links
 * (e.g. ?market=Elko%2C%20NV&rep=Tim&source=cold_call&utm_source=outbound).
 * All of them must survive every CTA into /get-started (spec Sections 1 & 3).
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

export function getWellDrillerCampaignParams(): Record<string, string> {
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
 * Market values render into public page copy, so only accept strings that
 * plausibly read as a place name; anything else falls back to the generic
 * availability line ("valid market parameter" rule, spec Section 3).
 */
const MARKET_ALLOWED = /^[A-Za-z0-9][A-Za-z0-9 .,'()&/-]{0,59}$/;

export function getWellDrillerMarket(): string | null {
  const raw = getWellDrillerCampaignParams().market?.replace(/\s+/g, " ").trim();
  if (!raw) return null;
  if (!MARKET_ALLOWED.test(raw)) return null;
  if ((raw.match(/[A-Za-z]/g) ?? []).length < 2) return null;
  return raw;
}

/**
 * Every market-check CTA routes to the get-started wizard with the
 * well-drilling industry context. Inbound attribution parameters are
 * preserved verbatim; the landing page's own utm_source/utm_medium
 * (well_driller_landing / CTA placement) only fill the gaps, matching the
 * spec's default destinations while honoring its "preserve for attribution"
 * rule for sales-link parameters.
 */
export function wellDrillerGetStartedHref(placement: WellDrillerCtaPlacement): string {
  const campaign = getWellDrillerCampaignParams();
  const params = new URLSearchParams();
  params.set("industry", WELL_DRILLER_INDUSTRY);
  params.set("utm_source", campaign.utm_source ?? "well_driller_landing");
  params.set("utm_medium", campaign.utm_medium ?? placement);
  for (const key of ["market", "rep", "source", "utm_campaign", "utm_term", "utm_content"] as const) {
    const value = campaign[key];
    if (value) params.set(key, value);
  }
  return `/get-started?${params.toString()}`;
}
