import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const nicheImages: Record<string, string[]> = {
  Attorneys: [
    "/niche-lawyer-1.png",
    "/niche-lawyer-2.png",
    "/niche-lawyer-3.png",
  ],
  Therapists: [
    "/niche-therapist-1.png",
    "/niche-therapist-2.png",
    "/niche-therapist-3.png",
  ],
  Physicians: [
    "/niche-dentist-1.png",
    "/niche-dentist-2.png",
    "/niche-dentist-3.png",
  ],
  CPAs: [
    "/niche-accountant-1.png",
    "/niche-accountant-2.png",
    "/niche-accountant-3.png",
  ],
  "Group Practices": [
    "/niche-therapist-1.png",
    "/niche-consultant-1.png",
    "/niche-dentist-1.png",
  ],
  Psychiatrists: [
    "/niche-therapist-2.png",
    "/niche-therapist-3.png",
    "/niche-consultant-2.png",
  ],
};

type NicheItem = {
  type: string;
  name: string;
  tagline: string;
  imageIdx: number;
};

const niches: NicheItem[] = [
  { type: "Attorneys", name: "Gavel & Stone Law", tagline: "Case inquiry generation", imageIdx: 0 },
  { type: "Attorneys", name: "Redwood Family Law", tagline: "Consultation requests", imageIdx: 1 },
  { type: "Attorneys", name: "Pinnacle Injury Attorneys", tagline: "Free consultation signups", imageIdx: 2 },
  { type: "Therapists", name: "Mindful Care", tagline: "Private pay client attraction", imageIdx: 0 },
  { type: "Therapists", name: "Healing Space", tagline: "Family trust building", imageIdx: 1 },
  { type: "Therapists", name: "New Chapter Counseling", tagline: "Online booking integration", imageIdx: 2 },
  { type: "Physicians", name: "Summit Internal Medicine", tagline: "New patient acquisition", imageIdx: 0 },
  { type: "Physicians", name: "Valley Family Practice", tagline: "Online appointment booking", imageIdx: 1 },
  { type: "Physicians", name: "Cascade Cardiology Group", tagline: "Referral network building", imageIdx: 2 },
  { type: "CPAs", name: "Peak CPA Group", tagline: "Tax season lead generation", imageIdx: 0 },
  { type: "CPAs", name: "Vanguard Tax", tagline: "Corporate account outreach", imageIdx: 1 },
  { type: "CPAs", name: "Clear Books Bookkeeping", tagline: "Local client targeting", imageIdx: 2 },
  { type: "Group Practices", name: "Peaceful Minds Group", tagline: "Multi-provider caseload", imageIdx: 0 },
  { type: "Group Practices", name: "Synergy Wellness Center", tagline: "Clinician bio pages", imageIdx: 1 },
  { type: "Group Practices", name: "Summit Behavioral Health", tagline: "Specialty funnel pages", imageIdx: 2 },
  { type: "Psychiatrists", name: "Clarity Psychiatry", tagline: "Medication management inquiries", imageIdx: 0 },
  { type: "Psychiatrists", name: "Mindbridge Psychology", tagline: "Evaluation scheduling", imageIdx: 1 },
  { type: "Psychiatrists", name: "Northern Psych Associates", tagline: "Referral intake forms", imageIdx: 2 },
];

export function NicheExamplesSection() {
  const [activeTab, setActiveTab] = useState("Attorneys");

  const tabs = ["Attorneys", "Therapists", "Physicians", "CPAs", "Group Practices", "Psychiatrists"];

  const filteredNiches = niches.filter(n => n.type === activeTab).slice(0, 3);

  return (
    <section id="niches" className="bg-navy py-24 px-6 md:px-12 border-y border-gunmetal">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Built for Professional Practices Like Yours
          </h2>
          <p className="text-stone font-sans text-lg mb-8 max-w-2xl mx-auto">
            We specialize in websites for attorneys, therapists, physicians, CPAs, and group practices. Here are just a few examples of the practices we serve.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300",
                  activeTab === tab
                    ? "bg-orange text-white shadow-lg shadow-orange/20"
                    : "bg-gunmetal text-stone hover:text-offwhite hover:bg-gunmetal/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNiches.map((niche, i) => {
            const imageSrc = nicheImages[niche.type][niche.imageIdx];
            return (
              <ScrollReveal key={niche.name} delay={(i % 6) * 0.08} className="group cursor-pointer">
                <div className="bg-charcoal rounded-t-lg border border-gunmetal border-b-0 p-2 flex gap-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                  <div className="ml-2 flex-1 h-3 bg-gunmetal/50 rounded-sm max-w-[60%] flex items-center px-1">
                    <div className="w-1 h-1 rounded-full bg-stone/30 mr-1"></div>
                    <div className="h-0.5 flex-1 bg-stone/20 rounded"></div>
                  </div>
                </div>
                <div className="h-52 md:h-56 border border-gunmetal border-t-0 relative overflow-hidden transition-all duration-500 group-hover:border-orange">
                  <img
                    src={imageSrc}
                    alt={`${niche.name} website design`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="bg-charcoal rounded-b-lg border border-gunmetal border-t-0 p-3 transition-all duration-500 group-hover:border-orange">
                  <h3 className="text-offwhite font-display text-lg leading-tight mb-0.5">{niche.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-stone/70 font-sans text-xs">{niche.tagline}</p>
                    <span className="text-orange text-[10px] font-bold uppercase tracking-widest">{niche.type}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
