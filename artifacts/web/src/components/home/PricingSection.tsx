import { Check, RefreshCw, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PLAN_FOR_LABELS: Record<string, string> = {
  Starter: "Solo Operators",
  Growth: "Growing Teams",
  Scale: "Multi-Location",
  Custom: "Beyond Standard",
};

const PLAN_CTA_LABELS: Record<string, string> = {
  Starter: "Get Started with Starter",
  Growth: "Get Started with Growth",
  Scale: "Get Started with Scale",
  Custom: "Schedule a Scoping Call",
};

interface PricingSectionProps {
  hideHeader?: boolean;
}

export function PricingSection({ hideHeader = false }: PricingSectionProps = {}) {
  const popularIndex = Math.max(0, PRICING_TIERS.findIndex((t: any) => t.popular));
  const [activeIndex, setActiveIndex] = useState<number>(popularIndex);
  const activeTier: any = PRICING_TIERS[activeIndex];

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
              A one-time site development fee, then a flat monthly rate. No surprises. No long-term contracts. Not sure which plan fits your business? Book a free review and we'll recommend the right one.
            </p>
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {PRICING_TIERS.map((tier: any, i: number) => {
            const isActive = i === activeIndex;
            return (
            <ScrollReveal key={tier.name} delay={i * 0.1} className={cn(
              "flex flex-col group",
              tier.popular && "md:-translate-y-4"
            )}>
              <div
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={cn(
                "rounded-2xl border flex flex-col p-8 relative transition-all duration-300 flex-1 cursor-pointer",
                tier.popular
                  ? "bg-charcoal border-orange/50 shadow-xl shadow-orange/10"
                  : "bg-white/80 backdrop-blur-sm border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]",
                isActive && !tier.popular && "border-orange/60 shadow-[0_4px_16px_rgba(46,123,180,0.12),0_20px_48px_rgba(46,123,180,0.10)] -translate-y-1",
                isActive && tier.popular && "border-orange shadow-[0_8px_24px_rgba(46,123,180,0.25)]"
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
                  For {PLAN_FOR_LABELS[tier.name] || "Your Business"}
                </p>
                <h3 className={cn("text-2xl font-display mb-5", tier.popular ? "text-offwhite" : "text-charcoal")}>{tier.name}</h3>
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
                  {tier.features.map((feature: string, idx: number) => {
                    const isRefresh = /website refresh/i.test(feature);
                    return (
                      <li key={idx}>
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                            isRefresh ? "bg-orange" : "bg-orange/10"
                          )}>
                            {isRefresh ? (
                              <RefreshCw className="text-white" size={12} strokeWidth={2.5} />
                            ) : (
                              <Check className="text-orange" size={12} />
                            )}
                          </div>
                          {isRefresh ? (
                            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <span className={cn("font-sans text-sm font-semibold", tier.popular ? "text-offwhite" : "text-charcoal")}>
                                {feature}
                              </span>
                              <span className={cn(
                                "inline-flex items-center font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap",
                                tier.popular
                                  ? "bg-orange/20 text-orange"
                                  : "bg-orange/10 text-orange"
                              )}>
                                Stay-Current Guarantee
                              </span>
                            </span>
                          ) : (
                            <span className={cn("font-sans text-sm", tier.popular ? "text-offwhite" : "text-charcoal")}>{feature}</span>
                          )}
                        </div>
                        {!tier.isCustom && /site updates/i.test(feature) && (
                          <p className={cn("font-sans text-xs mt-1.5 ml-8 leading-snug", tier.popular ? "text-stone" : "text-charcoal/70")}>
                            Additional updates billed at $100/hr — quoted and approved before any work begins
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <CTAButton 
                href="/get-started" 
                variant={tier.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {PLAN_CTA_LABELS[tier.name] || 'Get Your Free Homepage Demo'}
              </CTAButton>
              {tier.isCustom && (
                <p className={cn(
                  "text-xs font-sans text-center mt-3",
                  tier.popular ? "text-stone" : "text-charcoal/70"
                )}>
                  30-min call · Written quote · No obligation
                </p>
              )}
              </div>
            </ScrollReveal>
          );
          })}
        </div>

        <ScrollReveal delay={0.3} className="mt-10 md:mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-white via-white to-[#f5f7fa] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_24px_56px_rgba(15,30,53,0.08)]">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange via-orange/80 to-orange/40" />
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange/10 blur-3xl" />

            <div className="relative px-6 md:px-10 py-7 md:py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:min-w-[180px]">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange">
                  Best fit for
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`label-${activeTier.name}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-baseline gap-2"
                  >
                    <h4 className="text-2xl md:text-3xl font-display text-charcoal leading-none">
                      {activeTier.name}
                    </h4>
                    <span className="text-xs font-sans font-semibold text-stone">
                      {PLAN_FOR_LABELS[activeTier.name]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${activeTier.name}`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="text-charcoal text-base md:text-lg font-sans leading-relaxed"
                  >
                    {activeTier.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex md:flex-col items-center gap-2 md:gap-1 md:min-w-[140px] md:items-end">
                <div className="flex gap-1.5">
                  {PRICING_TIERS.map((t: any, i: number) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      onMouseEnter={() => setActiveIndex(i)}
                      aria-label={`Show ${t.name} description`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIndex
                          ? "w-8 bg-orange"
                          : "w-4 bg-charcoal/15 hover:bg-charcoal/30"
                      )}
                    />
                  ))}
                </div>
                <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-sans font-semibold uppercase tracking-wider text-stone mt-2">
                  Hover a plan <ArrowRight size={11} />
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <p className="text-charcoal font-sans font-semibold mb-3">
            Not sure which plan is right? Get a free homepage demo and we'll tell you exactly what your business needs.
          </p>
          <p className="text-charcoal/70 text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            All plans include hosting, SSL, mobile optimization, dashboard access, monthly reporting, and ongoing maintenance. No long-term contracts. Cancel anytime with 30 days' notice. Client retains domain and all content.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
