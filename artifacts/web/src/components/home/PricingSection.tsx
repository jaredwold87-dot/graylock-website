import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto">
            Pay a one-time build fee, then a flat monthly rate. No surprises. Not sure which plan fits? Book a free review and we'll recommend the right one for your business.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15} className={cn(
              "bg-navy rounded-2xl border flex flex-col p-8 relative",
              tier.popular ? "border-orange shadow-[0_0_30px_rgba(232,99,26,0.15)] md:-translate-y-4" : "border-gunmetal"
            )}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display text-offwhite mb-2">{tier.name}</h3>
                <p className="text-stone text-sm mb-6 h-10">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display text-orange">{tier.price}</span>
                  <span className="text-stone font-sans">/mo</span>
                </div>
                <p className="text-stone text-sm font-semibold mt-2 border-t border-gunmetal pt-4">
                  + {tier.setup}
                </p>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-orange mt-0.5 flex-shrink-0" size={18} />
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
                Book Your Free Website Review
              </CTAButton>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-stone font-sans mb-2">
            Not sure which plan is right? Book a free website review and we'll tell you exactly what your business needs.
          </p>
          <p className="text-stone/60 text-sm font-sans max-w-2xl mx-auto">
            All plans include hosting, SSL, mobile optimization, and ongoing maintenance. No long-term contracts. Cancel anytime.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
