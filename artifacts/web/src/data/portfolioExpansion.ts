import type { FeaturedProject } from "./portfolioTypes";

const images = import.meta.glob<string>("../assets/work/devices/*-desktop.webp", { eager: true, query: "?url", import: "default" });
const sites = [
  { name: "Electrical Specialists, Inc.", category: "Electrical Services", url: "https://myelectrician618.com/", description: "Electrical repairs, upgrades, wiring, and generator services for homes and businesses in Marion and nearby Southern Illinois." },
  { name: "Montana Counseling Solutions", category: "Counseling & Therapy", url: "https://mtcounselingsolutions.com/", description: "A counseling practice website introducing Montana Counseling Solutions and helping visitors take the next step toward care." },
  { name: "Desert Manufacturing", category: "Electronics Training Equipment", url: "https://desertmfg.com/", description: "Hands-on electronics training equipment for CTE classrooms, shop labs, technical programs, and workforce training." },
  { name: "A2Z", category: "Termite & Weed Control", url: "https://a2zvpm.com/", description: "Termite inspections, treatment, new-construction pre-treatment, and specialized weed control in eastern Idaho." },
  { name: "Anesthesia Associates", category: "Anesthesia Care", url: "https://anesthesiamhk.com/", description: "CRNA anesthesia care in Manhattan, Kansas, with team information and resources for patients and facilities." },
  { name: "Beymer Auctions", category: "Auction Services", url: "https://beymerauctions.com/", description: "Live auctioneering, event strategy, and sale-day leadership for benefit events, commercial sales, and auction teams." },
  { name: "Heritage Law", category: "Estate Planning & Legal Services", url: "https://canvlaw.co/", description: "Estate planning, wills, trusts, trust administration, and probate services in Nevada and California." },
  { name: "Citrus Medical Weight Loss", category: "Medical Weight Loss", url: "https://citrusmedicalweightloss.com/", description: "Physician-guided medical weight loss in Crystal River, Florida, with information about treatment options." },
  { name: "Double R Water Well Service", category: "Water Well Services", url: "https://doublerwaterwellservice.com/", description: "Pump repair, pressure tank replacement, and well services for homes and businesses across northwestern Nevada." },
  { name: "High Peaks Anesthesia", category: "Mobile Anesthesia", url: "https://highpeaksanesthesia.com/", description: "Mobile anesthesia support for dental and plastic-surgery practices in Boulder and the Denver area." },
  { name: "Kansas Association of Nurse Anesthetists", category: "Professional Association", url: "https://kana.org/", description: "Advocacy, education, and engagement for CRNAs across Kansas." },
  { name: "Keller Drilling & Pump", category: "Well Drilling & Pump Services", url: "https://kellerdrillingandpump.com/", description: "Well drilling, pump repair, inspections, and maintenance services from Chico, California." },
  { name: "New View Movers", category: "Moving Services", url: "https://www.newviewmovers.com/", description: "Residential moving services for Twin Falls and the Magic Valley." },
  { name: "Pole Line Contractors", category: "Power & Infrastructure", url: "https://polelinecontractorsinc.com/", description: "Distribution and transmission lines, substations, underground power, fiber-optic splicing, and infrastructure consulting across the West." },
  { name: "Renewed Vitality & Wellness", category: "Integrative Medicine & Wellness", url: "https://renewedvitalityandwellness.com/", description: "Integrative medicine in Reno, including hormone care, medical weight loss, aesthetics, and specialty wellness." },
  { name: "RMB Stucco & Stone", category: "Stucco, Stone & Waterproofing", url: "https://rmbstuccoandstone.com/", description: "Stucco, stone, waterproofing, and exterior-protection services for builders, homeowners, and commercial project teams." },
  { name: "Ruby Mountain", category: "Water Delivery & Workplace Supplies", url: "https://rubymtnh2o.com/", description: "Spring and purified water delivery for Nevada homes and workplaces." },
  { name: "Sagebrush Movers", category: "Moving Services", url: "https://sagebrushnv.com/", description: "Reno-based home, office, and long-distance moving services, plus junk removal and freight." },
  { name: "Southpaw CPA Services", category: "Accounting & Tax Services", url: "https://southpawcpas.com/", description: "Tax planning, preparation, projections, and bookkeeping for individuals, businesses, and CRNAs nationwide." },
  { name: "Summit View Counseling & Assessment", category: "Counseling & Therapy", url: "https://www.summitviewtf.com/", description: "Counseling in Twin Falls, Idaho, supporting men and couples through life transitions, trauma, anxiety, and relationship concerns." },
  { name: "Superior Drilling", category: "Water Well Drilling", url: "https://www.superiordrilling.net/", description: "Water well drilling, pump service, and well abandonment in Arizona, New Mexico, and Texas." },
  { name: "The Brothers' Dream Foundation", category: "Nonprofit Foundation", url: "https://thebrothersdream.org/", description: "A foundation website sharing its mission of creating experiences for children." },
  { name: "The Cabinet Factory Eugene", category: "Custom Cabinetry", url: "https://thecabinetfactoryeugene.com/", description: "Custom cabinets made in Eugene for Oregon builders and homeowners, including whole-home packages and major remodels." },
  { name: "The Snooze Society", category: "Pediatric Sleep Consulting", url: "https://thesnoozesociety.com/", description: "Virtual sleep support for babies and young children, with options for families nationwide." },
  { name: "Vitality", category: "Telehealth & Aesthetics", url: "https://vitalityehealth.com/", description: "Telehealth primary care, hormone support, weight management, and aesthetic and wellness services." },
  { name: "Weekend Warriors Equipment Rental", category: "Equipment Rental", url: "https://weekendwarriorequipmentrental.com/", description: "Equipment rental for home, land, yard, and contractor projects in Spring Creek and Elko, Nevada." },
  { name: "Whiskers Creek", category: "Event Hosting", url: "https://whiskerscreek.com/", description: "Event hosting for fundraisers, banquets, live programs, specialty events, and wedding receptions." },
  { name: "YogaSOL", category: "Yoga & Mindfulness", url: "https://yogasolrising.com/", description: "Science-informed yoga, breathwork, and mindfulness for care teams, professional communities, and retreats." },
];

export const portfolioExpansion: FeaturedProject[] = sites.map(site => ({
  ...site,
  theme: "light",
  image: images[`../assets/work/devices/${new URL(site.url).hostname.replace(/^www\./, "").replaceAll(".", "-")}-desktop.webp`],
  delivered: ["Business and service presentation", "Desktop and mobile website layouts"],
}));
