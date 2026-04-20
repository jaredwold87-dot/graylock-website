import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-charcoal pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-offwhite border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center">
                  <ShieldCheck className="text-orange" size={36} strokeWidth={1.75} />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-orange font-sans font-semibold uppercase tracking-widest text-xs mb-2">
                  Our Promise To You
                </p>
                <h2 className="text-2xl md:text-3xl font-display text-charcoal mb-3 leading-tight">
                  The 30-Day "Love It or Leave It" Guarantee
                </h2>
                <p className="text-stone font-sans text-base leading-relaxed">
                  If your new website is live for 30 days and you genuinely don't love it, just tell us. We will refund every dollar of your setup fee — no clawbacks, no fine print, no awkward conversations. You keep the full website code, copy, and assets we built for you. We are confident enough in our work to put our money behind it, so you never have to gamble on yours.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
