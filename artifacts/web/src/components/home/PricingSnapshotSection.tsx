import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

const SHORT_DESCRIPTIONS: Record<string, string> = {
  Starter: "For solo operators and small teams.",
  Growth: "For growing teams and small firms that need more visibility.",
  Scale: "For established and multi-location businesses.",
  Custom: "For businesses with unique needs beyond our standard plans.",
};

const HIGHLIGHTS: Record<string, string[]> = {
  Starter: [
    "Custom 8-page conversion website",
    "Mobile-first professional design",
    "Local SEO foundation",
    "Secure client inquiry flow",
  ],
  Growth: [
    "Custom 15-page conversion website",
    "Up to 5 provider bio pages",
    "10 SEO-optimized funnel pages",
    "Full local SEO implementation",
  ],
  Scale: [
    "Custom 20+ page conversion website",
    "Up to 10 provider bio pages",
    "Multi-location SEO strategy",
    "Advanced analytics & reporting",
  ],
  Custom: [
    "Everything in Scale",
    "Custom page count",
    "Custom apps & dashboards",
    "Operating-system builds",
  ],
};

export function PricingSnapshotSection() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Choose the plan that fits your stage today. Every option includes a custom-built website, fast turnaround, and ongoing support.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {PRICING_TIERS.map((tier: any, i: number) => (
            <ScrollReveal key={tier.name} delay={i * 0.1} className={cn(
              "rounded-2xl border flex flex-col p-7 relative transition-all duration-300",
              tier.popular
                ? "bg-charcoal border-orange/50 shadow-xl shadow-orange/10 md:-translate-y-2"
                : "bg-white/80 backdrop-blur-sm border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]"
            )}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange to-orange/80 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-orange/30">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn("text-xl font-display mb-2", tier.popular ? "text-offwhite" : "text-charcoal")}>{tier.name}</h3>
                <p className={cn("text-sm font-sans mb-5 min-h-[40px]", tier.popular ? "text-stone" : "text-stone")}>
                  {SHORT_DESCRIPTIONS[tier.name] || tier.description}
                </p>
                {tier.isCustom ? (
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-2xl font-display", tier.popular ? "text-gradient" : "text-orange")}>Let's Talk</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className={cn("text-4xl font-display", tier.popular ? "text-gradient" : "text-orange")}>{tier.price}</span>
                      <span className="text-stone font-sans">/mo</span>
                    </div>
                    <p className={cn("text-xs font-sans mt-2", tier.popular ? "text-stone/80" : "text-stone/80")}>
                      + {tier.setup}
                    </p>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {(HIGHLIGHTS[tier.name] || []).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className={cn("flex-shrink-0 mt-0.5", tier.popular ? "text-orange" : "text-orange")}
                    />
                    <span className={cn("font-sans text-sm leading-snug", tier.popular ? "text-offwhite/90" : "text-charcoal/85")}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3">
                <CTAButton
                  href="/get-started"
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {tier.isCustom ? 'Contact Us' : 'Get a Free Demo'}
                </CTAButton>
                <Link
                  href="/pricing"
                  className={cn(
                    "block text-center text-xs font-sans font-semibold transition-colors",
                    tier.popular ? "text-stone hover:text-orange" : "text-stone hover:text-orange",
                  )}
                >
                  See full plan →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-charcoal hover:text-orange font-sans font-semibold transition-colors group"
          >
            View Full Pricing
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
