export const WELL_DRILLER_LANDING_PATH = "/websites-for-well-drillers";
export const WELL_DRILLER_INDUSTRY = "well-drilling";
/** Every public CTA on the landing page sells the free custom demo first. */
export const WELL_DRILLER_FREE_DEMO_INTENT = "free_demo";

export type WellDrillerCtaPlacement =
  | "header_cta"
  | "hero_cta"
  | "reflection_cta"
  | "offer_cta"
  | "pricing_cta"
  | "final_cta";

/**
 * Campaign parameters the sales team may append to landing-page links
 * (e.g. ?market=Elko%2C%20NV&rep=K&source=cold_call&utm_source=outbound).
 * All of them must survive every CTA into /get-started (spec §4 & §15).
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
 * plausibly read as a place name; anything else falls back to generic copy.
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
 * Every "Request My Free Custom Demo" CTA routes to the get-started form with
 * the well-drilling industry context and the free-demo intent (spec §14).
 * Inbound attribution parameters are preserved verbatim; the landing page's
 * own utm_source/utm_medium (well_driller_landing / CTA placement) only fill
 * the gaps. The reflection cards additionally pass the selected card label as
 * stated_goal — only when the visitor clicks through (spec §6).
 */
export function wellDrillerGetStartedHref(
  placement: WellDrillerCtaPlacement,
  extra?: { statedGoal?: string },
): string {
  const campaign = getWellDrillerCampaignParams();
  const params = new URLSearchParams();
  params.set("industry", WELL_DRILLER_INDUSTRY);
  params.set("intent", WELL_DRILLER_FREE_DEMO_INTENT);
  params.set("utm_source", campaign.utm_source ?? "well_driller_landing");
  params.set("utm_medium", campaign.utm_medium ?? placement);
  for (const key of ["market", "rep", "source", "utm_campaign", "utm_term", "utm_content"] as const) {
    const value = campaign[key];
    if (value) params.set(key, value);
  }
  if (extra?.statedGoal) params.set("stated_goal", extra.statedGoal);
  return `/get-started?${params.toString()}`;
}
