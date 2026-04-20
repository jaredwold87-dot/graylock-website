import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { X, Check } from "lucide-react";

export function ValueDifferentiationSection() {
  const comparisons = [
    { theirs: "Ask for thousands before showing real work", ours: "Show you a custom homepage direction before you commit" },
    { theirs: "Take weeks to pitch and scope", ours: "Move quickly with a clear process" },
    { theirs: "Lock you into long-term contracts", ours: "Month-to-month support, cancel anytime" },
    { theirs: "Deliver generic templates", ours: "Build custom sites around your business and positioning" },
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="text-center mb-12">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Why Graylock</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            A Lower-Risk Way to Build a Better Website
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-navy rounded-2xl border border-gunmetal overflow-hidden">
            <div className="grid grid-cols-2 text-center">
              <div className="p-4 md:p-6 border-b border-r border-gunmetal">
                <h3 className="font-display text-stone text-lg md:text-xl">Traditional Agencies</h3>
              </div>
              <div className="p-4 md:p-6 border-b border-gunmetal bg-orange/5">
                <h3 className="font-display text-orange text-lg md:text-xl">Graylock Digital</h3>
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="p-4 md:p-6 border-b border-r border-gunmetal flex items-start gap-3">
                  <X className="text-red-400/60 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-stone/70 font-sans text-sm leading-relaxed">{row.theirs}</span>
                </div>
                <div className="p-4 md:p-6 border-b border-gunmetal bg-orange/5 flex items-start gap-3">
                  <Check className="text-orange flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-offwhite font-sans text-sm leading-relaxed">{row.ours}</span>
                </div>
              </div>
            ))}
            {/* Emphasized price-anchor row */}
            <div className="grid grid-cols-2">
              <div className="p-4 md:p-6 border-r border-gunmetal bg-navy/60 flex items-start gap-3">
                <X className="text-red-400/70 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-stone/60 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">Upfront Cost & Risk</p>
                  <p className="text-stone/80 font-sans text-sm leading-relaxed">$10,000–$20,000 upfront. No refunds if you hate it.</p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-orange/10 flex items-start gap-3">
                <Check className="text-orange flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-orange font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">Upfront Cost & Risk</p>
                  <p className="text-offwhite font-sans text-sm leading-relaxed font-semibold">$799 upfront. 30-Day 100% Money-Back Guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
