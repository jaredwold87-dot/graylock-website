import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-charcoal mb-6 leading-tight">
            See What Your New Homepage Could Look Like
          </h2>
          <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            Get a free, custom homepage demo built for your business. See the strategy and design before you spend a dollar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton href="/get-started" className="px-10 py-5 text-lg group">
              Get Your Free Homepage Demo
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </CTAButton>
            <p className="text-charcoal/70 text-sm font-sans mt-2">
              No pressure. No obligation. Just a clearer path forward.
            </p>
            <p className="text-charcoal/60 text-xs font-sans mt-1">
              Every plan includes a free website refresh every 2 years.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
