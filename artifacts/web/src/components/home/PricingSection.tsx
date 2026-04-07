import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 relative overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
            Most of our clients start on Group Practice. Here's what's right for where you are now.
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto">
            A one-time site development fee, then a flat monthly rate. No surprises. No long-term contracts. Not sure which plan fits your practice? Book a free review and we'll recommend the right one.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {PRICING_TIERS.map((tier: any, i: number) => (
            <ScrollReveal key={tier.name} delay={i * 0.1} className={cn(
              "rounded-2xl border flex flex-col p-7 relative",
              tier.popular 
                ? "bg-charcoal border-orange/50 shadow-lg shadow-orange/10 md:-translate-y-4" 
                : "bg-white border-gray-200 shadow-sm"
            )}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange to-orange/80 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange/30">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
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
                    <p className={cn("text-sm font-semibold mt-2 border-t pt-3", tier.popular ? "text-stone border-gunmetal/50" : "text-stone border-gray-200")}>
                      + {tier.setup}
                    </p>
                  </>
                )}
                {tier.isCustom && (
                  <p className={cn("text-sm font-semibold mt-2 border-t pt-3", tier.popular ? "text-stone border-gunmetal/50" : "text-stone border-gray-200")}>
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
                      <span className={cn("font-sans text-sm", tier.popular ? "text-offwhite" : "text-charcoal")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton 
                href="/get-started" 
                variant={tier.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {tier.isCustom ? 'Contact Us' : tier.popular ? 'Claim My Free Website Review' : "Book a Free Review"}
              </CTAButton>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-stone font-sans mb-2">
            Not sure which plan is right? Book a free website review and we'll tell you exactly what your practice needs.
          </p>
          <p className="text-stone/60 text-sm font-sans max-w-2xl mx-auto">
            All plans include hosting, SSL, mobile optimization, dashboard access, monthly reporting, and ongoing maintenance. No long-term contracts. Cancel anytime with 30 days' notice. Client retains domain and all content.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
