import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto">
            Pay a one-time build fee, then a flat monthly rate. No surprises. Not sure which plan fits? Book a free review and we'll recommend the right one for your business.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {PRICING_TIERS.map((tier: any, i: number) => (
            <ScrollReveal key={tier.name} delay={i * 0.1} className={cn(
              "card-glow rounded-2xl border flex flex-col p-7 relative",
              tier.popular 
                ? "bg-gradient-to-b from-navy to-charcoal border-orange/50 shadow-[0_0_40px_rgba(232,99,26,0.12)] md:-translate-y-4" 
                : "bg-navy/80 border-gunmetal/50 gradient-border"
            )}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange to-orange/80 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange/30">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-display text-offwhite mb-2">{tier.name}</h3>
                <p className="text-stone text-sm mb-5 min-h-[40px]">{tier.description}</p>
                {tier.isCustom ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display text-gradient">Let's Talk</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display text-gradient">{tier.price}</span>
                      <span className="text-stone font-sans">/mo</span>
                    </div>
                    <p className="text-stone text-sm font-semibold mt-2 border-t border-gunmetal/50 pt-3">
                      + {tier.setup}
                    </p>
                  </>
                )}
                {tier.isCustom && (
                  <p className="text-stone text-sm font-semibold mt-2 border-t border-gunmetal/50 pt-3">
                    Custom quote
                  </p>
                )}
              </div>

              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {tier.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center mt-0.5">
                        <Check className="text-orange" size={12} />
                      </div>
                      <span className="text-offwhite font-sans text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton 
                href="/get-started" 
                variant={tier.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {tier.isCustom ? 'Contact Us' : 'Book Your Free Website Review'}
              </CTAButton>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-stone font-sans mb-2">
            Not sure which plan is right? Book a free website review and we'll tell you exactly what your business needs.
          </p>
          <p className="text-stone/60 text-sm font-sans max-w-2xl mx-auto">
            All plans include hosting, SSL, mobile optimization, dashboard access, monthly reporting, and ongoing maintenance. No long-term contracts. Cancel anytime.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
