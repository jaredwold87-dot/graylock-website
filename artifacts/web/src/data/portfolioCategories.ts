import type { FeaturedProject } from "./portfolioTypes";

export const portfolioCategories = [
  "Services & Trades",
  "Medical & Wellness",
  "Professional Services",
  "Nonprofits & Associations",
  "Real Estate",
  "Retail & Creative",
] as const;
export type PortfolioCategory = typeof portfolioCategories[number];

const domains: Record<PortfolioCategory, string[]> = {
  "Services & Trades": [
    "greenfieldweldingandrepair.com",
    "myelectrician618.com",
    "spokanekitchenconcierge.com", "championwaterwellservice.com", "legacyoutdoorlivingnv.com",
    "camascreeklumber.com", "meagherbuilders.com", "interiorfinishesreno.com",
    "wicklandandyard.com", "perkspetroleum.com", "rosenlunddrilling.com", "tekmarkwellcasingtools.com",
    "jcswellservices.com", "a2zvpm.com", "doublerwaterwellservice.com", "kellerdrillingandpump.com",
    "newviewmovers.com", "polelinecontractorsinc.com", "rmbstuccoandstone.com", "rubymtnh2o.com",
    "sagebrushnv.com", "superiordrilling.net", "thecabinetfactoryeugene.com", "weekendwarriorequipmentrental.com",
  ],
  "Medical & Wellness": [
    "mtcounselingsolutions.com",
    "citrusmmc.com", "liquidsoulhydration.com", "backroads-beauty.com", "kingsburychiropractictahoe.com",
    "bluegrassanes.com", "atlasanesthesia.co", "westcoasteye.com", "anesthesiamhk.com",
    "citrusmedicalweightloss.com", "highpeaksanesthesia.com",
    "renewedvitalityandwellness.com", "summitviewtf.com", "thesnoozesociety.com", "vitalityehealth.com", "yogasolrising.com",
  ],
  "Professional Services": [
    "benevolentauctions.com", "smarttaxcrna.com", "bentoneducation.com", "crnamentor.com",
    "beymerauctions.com", "canvlaw.co", "southpawcpas.com", "whiskerscreek.com",
  ],
  "Nonprofits & Associations": ["ilcrnapac.com", "kana.org", "thebrothersdream.org"],
  "Real Estate": ["willowrealestategroup.com", "erinsells775.com"],
  "Retail & Creative": ["shanecampcomedian.com", "emboxed.com", "olivecreeknursery.com", "shootingperformanceinstitute.com", "desertmfg.com"],
};

export function getPortfolioCategory(project: FeaturedProject): PortfolioCategory | undefined {
  if (!project.url) return undefined;
  const domain = new URL(project.url).hostname.replace(/^www\./, "");
  return portfolioCategories.find(category => domains[category].includes(domain));
}
