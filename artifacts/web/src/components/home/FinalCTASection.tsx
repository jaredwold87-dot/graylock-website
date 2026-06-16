import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">Ready When You Are</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            See What Your New Homepage Could Look Like
          </h2>
          <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            Get a free, custom homepage demo built for your business. See the strategy and design before you spend a dollar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton href="/get-started" variant="funnel" className="px-10 py-5 text-lg group">
              Book a Discovery Call
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </CTAButton>
            <p className="text-stone text-sm font-sans mt-2">
              No pressure. No obligation. Just a clearer path forward.
            </p>
            <p className="text-stone/70 text-xs font-sans mt-1">
              Every plan includes a free website refresh every 2 years.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
