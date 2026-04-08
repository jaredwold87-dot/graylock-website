import { Clock, Eye, FileCheck, Search } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pills = [
  { icon: Clock, label: "Live in 7–10 Days" },
  { icon: Eye, label: "See a Demo First" },
  { icon: FileCheck, label: "No Contracts" },
  { icon: Search, label: "SEO Included" },
];

export function TrustPills() {
  return (
    <div className="bg-navy/60 border-y border-gunmetal/50 py-5 px-6 md:px-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(46,123,180,0.5) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-4xl mx-auto relative z-10">
          {pills.map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-charcoal/60 border border-gunmetal/60 rounded-full px-4 py-2 md:px-5 md:py-2.5"
            >
              <pill.icon size={16} className="text-orange flex-shrink-0" />
              <span className="text-offwhite/90 font-sans text-xs md:text-sm font-medium whitespace-nowrap">
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
