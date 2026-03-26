import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Check } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-orange via-orange to-orange/90 py-24 px-6 md:px-12 text-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
            See What Your Website Could Become — Free
          </h2>
          <p className="text-white/85 text-lg md:text-xl font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free 20-minute call. We'll review your current site, show you exactly what's not working, and build you a custom homepage demo — all before you pay us anything.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-left max-w-lg mx-auto">
            {[
              "Free website evaluation",
              "Custom homepage demo",
              "Zero obligation"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={12} />
                </div>
                <span className="text-white/90 font-sans text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <CTAButton href="/get-started" variant="dark" className="px-10 py-5 text-lg">
              Book Your Free Website Review
            </CTAButton>
            <p className="text-white/75 text-sm font-sans mt-2">
              No pressure. No obligation. Just a clear look at what your website could become.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
