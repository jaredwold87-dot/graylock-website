import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PLAN_FOR_LABELS: Record<string, string> = {
  Starter: "Solo Provider",
  Growth: "Growing Practice",
  Scale: "Multi-Location",
  Custom: "Beyond Standard",
};

const PLAN_CTA_LABELS: Record<string, string> = {
  Starter: "Get a Free Demo",
  Growth: "Get a Free Demo",
  Scale: "Get a Free Demo",
  Custom: "Schedule a Scoping Call",
};

interface PricingSectionProps {
  hideHeader?: boolean;
}

export function PricingSection({ hideHeader = false }: PricingSectionProps = {}) {
  return (
    <section className={cn("relative px-6 md:px-12 overflow-hidden", hideHeader ? "pt-12 pb-28" : "py-28")}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {!hideHeader && (
          <ScrollReveal className="text-center mb-20">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
              Most of our clients start on Growth. Here's what's right for where you are now.
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-stone text-lg font-sans max-w-2xl mx-auto leading-relaxed">
              A one-time site development fee, then a flat monthly rate. No surprises. No long-term contracts. Not sure which plan fits your practice? Book a free review and we'll recommend the right one.
            </p>
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {PRICING_TIERS.map((tier: any, i: number) => (
            <ScrollReveal key={tier.name} delay={i * 0.1} className={cn(
              "rounded-2xl border flex flex-col p-8 relative transition-all duration-300",
              tier.popular 
                ? "bg-charcoal border-orange/50 shadow-xl shadow-orange/10 md:-translate-y-4" 
                : "bg-white/80 backdrop-blur-sm border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.06)]"
            )}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange to-orange/80 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange/30">
                  Most Popular
                </div>
              )}
              
              <div className="mb-7">
                <p className={cn(
                  "text-[10px] font-sans font-bold uppercase tracking-widest mb-2",
                  tier.popular ? "text-orange" : "text-orange/80"
                )}>
                  For {PLAN_FOR_LABELS[tier.name] || "Your Practice"}
                </p>
                <h3 className={cn("text-2xl font-display mb-2", tier.popular ? "text-offwhite" : "text-charcoal")}>{tier.name}</h3>
                <p className="text-stone text-sm mb-5 min-h-[60px]">{tier.description}</p>
                {tier.isCustom ? (
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-3xl font-display", tier.popular ? "text-gradient" : "text-orange")}> Let's Talk</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className={cn("text-4xl font-display", tier.popular ? "text-gradient" : "text-orange")}>{tier.price}</span>
                      <span className="text-stone font-sans">/mo</span>
                    </div>
                    <p className={cn("text-sm font-semibold mt-2 border-t pt-3", tier.popular ? "text-stone border-gunmetal/50" : "text-stone border-gray-100")}>
                      + {tier.setup}
                    </p>
                  </>
                )}
                {tier.isCustom && (
                  <p className={cn("text-sm font-semibold mt-2 border-t pt-3", tier.popular ? "text-stone border-gunmetal/50" : "text-stone border-gray-100")}>
                    Custom quote
                  </p>
                )}
              </div>

              <div className="flex-grow mb-7">
                <ul className="space-y-3">
                  {tier.features.map((feature: string, idx: number) => (
                    <li key={idx}>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center mt-0.5">
                          <Check className="text-orange" size={12} />
                        </div>
                        <span className={cn("font-sans text-sm", tier.popular ? "text-offwhite" : "text-charcoal")}>{feature}</span>
                      </div>
                      {!tier.isCustom && /site updates/i.test(feature) && (
                        <p className={cn("font-sans text-xs mt-1.5 ml-8 leading-snug", tier.popular ? "text-stone/70" : "text-stone/60")}>
                          Additional updates billed at $100/hr — quoted and approved before any work begins
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton 
                href="/get-started" 
                variant={tier.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {PLAN_CTA_LABELS[tier.name] || 'Get a Free Demo'}
              </CTAButton>
              {tier.isCustom && (
                <p className={cn(
                  "text-xs font-sans text-center mt-3",
                  tier.popular ? "text-stone/70" : "text-stone/60"
                )}>
                  30-min call · Written quote · No obligation
                </p>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-stone font-sans mb-2">
            Not sure which plan is right? Get a free demo and we'll tell you exactly what your practice needs.
          </p>
          <p className="text-stone/50 text-sm font-sans max-w-2xl mx-auto">
            All plans include hosting, SSL, mobile optimization, dashboard access, monthly reporting, and ongoing maintenance. No long-term contracts. Cancel anytime with 30 days' notice. Client retains domain and all content.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
