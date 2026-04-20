import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, RefreshCw, Clock } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-charcoal pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="relative bg-gradient-to-br from-navy/80 via-navy/60 to-charcoal border border-orange/40 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-orange/30 to-orange/10 border-2 border-orange/40 flex items-center justify-center shadow-[0_0_40px_rgba(46,123,180,0.3)]">
                  <ShieldCheck className="text-orange" size={52} strokeWidth={1.75} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-orange font-sans font-bold uppercase tracking-widest text-xs mb-3">
                  Our Promise To You
                </p>
                <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-4 leading-tight">
                  30-Day "Love It or Leave It" Guarantee
                </h2>
                <p className="text-stone font-sans text-base md:text-[17px] leading-relaxed mb-6">
                  If your new website is live for 30 days and you genuinely don't love it, tell us. We will refund every dollar of your setup fee — no clawbacks, no fine print, and you keep the full website code, copy, and assets we built for you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="text-orange flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-offwhite font-sans text-sm font-semibold">Full setup-fee refund</p>
                      <p className="text-stone/70 font-sans text-xs">No hoops. No haggling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-orange flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-offwhite font-sans text-sm font-semibold">30 days from launch day</p>
                      <p className="text-stone/70 font-sans text-xs">Plenty of time to see real results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
