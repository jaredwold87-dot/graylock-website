import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { X, Check } from "lucide-react";

export function ValueDifferentiationSection() {
  const comparisons = [
    { theirs: "Ask for thousands before showing real work", ours: "Show you a custom homepage direction before you commit" },
    { theirs: "Take weeks to pitch and scope", ours: "Move quickly with a clear process" },
    { theirs: "Lock you into long-term contracts", ours: "Month-to-month support, cancel anytime" },
    { theirs: "Deliver generic templates", ours: "Build custom sites around your business and positioning" },
    { theirs: "Build it once, then forget you", ours: "Refresh your site every 2 years — free, as long as you're subscribed" },
  ];

  return (
    <section className="bg-[#242323] py-24 px-6 md:px-12 border-t border-[#AEA7A3]/10">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="text-center mb-12">
          <p className="text-[#B0784E] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">Why Graylock</p>
          <h2 className="text-3xl md:text-5xl font-display text-[#ECE8E4] mb-4">
            A Lower-Risk Way to Build a Better Website
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-[#363636] rounded-2xl border border-[#AEA7A3]/14 overflow-hidden shadow-lg">
            <div className="grid grid-cols-2 text-center">
              <div className="p-4 md:p-6 border-b border-r border-[#AEA7A3]/14">
                <h3 className="font-display text-[#AEA7A3] text-lg md:text-xl">Traditional Agencies</h3>
              </div>
              <div className="p-4 md:p-6 border-b border-[#AEA7A3]/14 bg-[#795238]/10">
                <h3 className="font-display text-[#B0784E] text-lg md:text-xl">Graylock Digital</h3>
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="p-4 md:p-6 border-b border-r border-[#AEA7A3]/14 flex items-start gap-3">
                  <X className="text-[#959595] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-[#AEA7A3] font-sans text-sm leading-relaxed">{row.theirs}</span>
                </div>
                <div className="p-4 md:p-6 border-b border-[#AEA7A3]/14 bg-[#795238]/5 flex items-start gap-3">
                  <Check className="text-[#B0784E] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-[#ECE8E4] font-sans text-sm leading-relaxed">{row.ours}</span>
                </div>
              </div>
            ))}
            {/* Emphasized price-anchor row */}
            <div className="grid grid-cols-2">
              <div className="p-4 md:p-6 border-r border-[#AEA7A3]/14 bg-[#2E2D2C] flex items-start gap-3">
                <X className="text-[#959595] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-[#AEA7A3] font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">Upfront Cost &amp; Risk</p>
                  <p className="text-[#959595] font-sans text-sm leading-relaxed">$10,000–$20,000 upfront. No refunds if you hate it.</p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-[#795238]/15 flex items-start gap-3">
                <Check className="text-[#B0784E] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-[#B0784E] font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">Upfront Cost &amp; Risk</p>
                  <p className="text-[#ECE8E4] font-sans text-sm leading-relaxed font-semibold">$0 to see your custom demo. Build fee paid only after you approve it.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
