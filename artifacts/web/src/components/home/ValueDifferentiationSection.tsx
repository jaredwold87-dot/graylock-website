import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { X, Check } from "lucide-react";

export function ValueDifferentiationSection() {
  const comparisons = [
    { theirs: "Ask for thousands before showing real work", ours: "Show you a custom homepage direction before you commit" },
    { theirs: "Take weeks to pitch and scope", ours: "Move quickly with a clear process" },
    { theirs: "Lock you into long-term contracts", ours: "Month-to-month support, cancel anytime" },
    { theirs: "Deliver generic templates", ours: "Build custom sites around your business and positioning" },
    { theirs: "Build it once, then forget you", ours: "Refresh your site every 2 years — free, while subscribed" },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="text-center mb-14">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">Why Graylock</p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            A Lower-Risk Way to Build a Better Website
          </h2>
          <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Most agencies make you pay — and gamble — before you ever see results. We flip the model.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 items-stretch">

            {/* VS badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#0f0f0f] border border-white/10 shadow-xl flex items-center justify-center">
                <span className="font-display text-stone text-lg italic">vs</span>
              </div>
            </div>

            {/* Traditional Agencies — muted, the old way */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 md:pr-10 opacity-90">
              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone/50 font-sans font-semibold mb-1.5">The Old Way</p>
                <h3 className="font-display text-2xl text-stone">Traditional Agencies</h3>
              </div>
              <ul className="space-y-5">
                {comparisons.map((row, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                      <X className="text-red-400/70" size={13} />
                    </span>
                    <span className="text-stone/75 font-sans text-sm leading-relaxed">{row.theirs}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-white/10">
                <p className="text-stone/50 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1.5">Upfront Cost &amp; Risk</p>
                <p className="text-stone/80 font-sans text-sm leading-relaxed">$10,000–$20,000 upfront. No refunds if you hate it.</p>
              </div>
            </div>

            {/* Graylock Digital — elevated, the better way */}
            <div className="relative rounded-2xl border border-[#E85D26]/40 bg-gradient-to-b from-[#E85D26]/[0.10] to-[#E85D26]/[0.02] p-7 md:p-8 md:pl-10 shadow-[0_0_50px_-12px_rgba(232,93,38,0.45)] md:scale-[1.04] z-10">
              <div className="absolute -top-3 right-6 md:right-8 px-3 py-1 rounded-full bg-[#E85D26] shadow-lg">
                <span className="text-white font-sans text-[11px] font-bold uppercase tracking-wider">Recommended</span>
              </div>
              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E85D26] font-sans font-semibold mb-1.5">The Graylock Way</p>
                <h3 className="font-display text-2xl text-white">Graylock Digital</h3>
              </div>
              <ul className="space-y-5">
                {comparisons.map((row, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E85D26] flex items-center justify-center">
                      <Check className="text-white" size={13} strokeWidth={3} />
                    </span>
                    <span className="text-white font-sans text-sm leading-relaxed">{row.ours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#E85D26]/20">
                <p className="text-[#E85D26] font-sans text-[11px] uppercase tracking-widest font-semibold mb-1.5">Upfront Cost &amp; Risk</p>
                <p className="text-white font-sans text-sm leading-relaxed font-semibold">$0 to see your custom demo. Build fee paid only after you approve it.</p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 md:mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 text-center">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Pricing That Sets Us Apart
            </p>
            <p className="font-display text-2xl md:text-3xl text-white leading-snug mb-3">
              Fully custom websites from{" "}
              <span className="text-[#E85D26]">$199/month</span>.
            </p>
            <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              No templates. No thrown-together drag-and-drop. Every site is designed
              and built from scratch around your business — a real custom website,
              not a recycled theme.
            </p>
            <CTAButton href="/pricing" variant="funnel">
              See Our Pricing
            </CTAButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
