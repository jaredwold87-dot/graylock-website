export interface IndustryTextItem {
  title: string;
  body: string;
}

export interface IndustrySection {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: IndustryTextItem[];
}

export interface IndustryProof {
  kind: "quote" | "process";
  eyebrow: string;
  heading: string;
  intro?: string;
  quote?: string;
  attribution?: string;
  source?: string;
  sourceUrl?: string;
  qualifier?: string;
  paragraphs?: string[];
  items?: IndustryTextItem[];
}

/** Exact approved page copy; proof is gated separately against live sources. */
export interface StandardIndustryContent {
  route: string;
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
    secondaryLabel: string;
    secondaryHref: string;
    microcopy: string;
  };
  offer: {
    eyebrow: string;
    heading: string;
    body: string;
    points?: string[];
    microcopy?: string;
    clarification?: string;
    links?: { label: string; href: string }[];
  };
  review?: IndustryProof;
  project: {
    key: "willow" | "jcs" | "interior" | "benevolent" | "meagher" |
      "perks" | "wicks" | "west-coast-eye" | "bluegrass" | "kingsbury";
    eyebrow: string;
    name: string;
    descriptor: string;
    body: string;
    cta: string;
    href: string;
    alt: string;
    note?: string;
  };
  problems: IndustrySection;
  delivery: IndustrySection;
  process: IndustrySection;
  finalProof?: IndustryProof;
  finalProofAfterTeam?: boolean;
  faq: { question: string; answer: string }[];
  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
    support?: string;
    microcopy?: string;
    links?: { label: string; href: string }[];
  };
}