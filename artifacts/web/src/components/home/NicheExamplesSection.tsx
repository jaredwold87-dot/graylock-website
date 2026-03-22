import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const nicheImages: Record<string, string[]> = {
  Accountants: [
    "/niche-accountant-1.png",
    "/niche-accountant-2.png",
    "/niche-accountant-3.png",
  ],
  Therapists: [
    "/niche-therapist-1.png",
    "/niche-therapist-2.png",
    "/niche-therapist-3.png",
  ],
  Contractors: [
    "/niche-contractor-1.png",
    "/niche-contractor-2.png",
    "/niche-contractor-3.png",
  ],
  Consultants: [
    "/niche-consultant-1.png",
    "/niche-consultant-2.png",
    "/niche-consultant-3.png",
  ],
  Dentists: [
    "/niche-dentist-1.png",
    "/niche-dentist-2.png",
    "/niche-dentist-3.png",
  ],
  Lawyers: [
    "/niche-lawyer-1.png",
    "/niche-lawyer-2.png",
    "/niche-lawyer-3.png",
  ],
};

type NicheItem = {
  type: string;
  name: string;
  tagline: string;
  imageIdx: number;
};

const niches: NicheItem[] = [
  { type: "Accountants", name: "Peak CPA Group", tagline: "Tax season lead generation", imageIdx: 0 },
  { type: "Therapists", name: "Mindful Care", tagline: "Private pay client attraction", imageIdx: 0 },
  { type: "Contractors", name: "Solid Built Construction", tagline: "High-end remodel showcases", imageIdx: 0 },
  { type: "Consultants", name: "Synergy Management", tagline: "Discovery call bookings", imageIdx: 0 },
  { type: "Dentists", name: "Bright Smile Family Dental", tagline: "New patient acquisition", imageIdx: 0 },
  { type: "Lawyers", name: "Gavel & Stone Law", tagline: "Case inquiry generation", imageIdx: 0 },
  { type: "Accountants", name: "Vanguard Tax", tagline: "Corporate account outreach", imageIdx: 1 },
  { type: "Therapists", name: "Healing Space", tagline: "Family trust building", imageIdx: 1 },
  { type: "Contractors", name: "IronClad Roofing", tagline: "Local search dominance", imageIdx: 1 },
  { type: "Consultants", name: "Apex HR Solutions", tagline: "Authority positioning", imageIdx: 1 },
  { type: "Dentists", name: "Summit Dental Care", tagline: "Appointment scheduling", imageIdx: 1 },
  { type: "Lawyers", name: "Redwood Family Law", tagline: "Consultation requests", imageIdx: 1 },
  { type: "Accountants", name: "Clear Books Bookkeeping", tagline: "Local retailer targeting", imageIdx: 2 },
  { type: "Therapists", name: "New Chapter Counseling", tagline: "Online booking integration", imageIdx: 2 },
  { type: "Contractors", name: "Precision Plumbing Co.", tagline: "Emergency call conversions", imageIdx: 2 },
  { type: "Consultants", name: "Meridian Strategy Group", tagline: "Lead magnet funnels", imageIdx: 2 },
  { type: "Dentists", name: "Lakewood Orthodontics", tagline: "Treatment plan inquiries", imageIdx: 2 },
  { type: "Lawyers", name: "Pinnacle Injury Attorneys", tagline: "Free consultation signups", imageIdx: 2 },
];

export function NicheExamplesSection() {
  const [activeTab, setActiveTab] = useState("Accountants");

  const tabs = ["Accountants", "Therapists", "Contractors", "Consultants", "Dentists", "Lawyers"];

  const filteredNiches = niches.filter(n => n.type === activeTab).slice(0, 3);

  return (
    <section id="niches" className="bg-navy py-24 px-6 md:px-12 border-y border-gunmetal">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Built for Businesses Like Yours
          </h2>
          <p className="text-stone font-sans text-lg mb-8 max-w-2xl mx-auto">
            We specialize in service businesses that rely on trust, reputation, and local visibility to grow.
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
