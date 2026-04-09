import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { X, Check } from "lucide-react";

export function ValueDifferentiationSection() {
  const comparisons = [
    { theirs: "Charge $5,000–$20,000 before showing you anything", ours: "Show you a custom homepage demo before you pay a dollar" },
    { theirs: "Take weeks for a generic pitch deck", ours: "Walk you through real findings in a 20-minute call" },
    { theirs: "Lock you into long-term contracts", ours: "Month-to-month, cancel anytime" },
    { theirs: "Hand you a template and call it custom", ours: "Build a site designed specifically for your practice and specialty" },
    { theirs: "Leave you alone after launch", ours: "Handle hosting, updates, and maintenance every month" },
    { theirs: "No visibility into how your site performs", ours: "Business dashboard with traffic insights and performance reporting" },
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="text-center mb-12">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Why Graylock</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Every other agency wants you to pay first.{" "}
            <span className="text-orange">We think that's backwards.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-navy rounded-2xl border border-gunmetal overflow-hidden">
            <div className="grid grid-cols-2 text-center">
              <div className="p-4 md:p-6 border-b border-r border-gunmetal">
                <h3 className="font-display text-stone text-lg md:text-xl">Traditional Agencies</h3>
              </div>
              <div className="p-4 md:p-6 border-b border-gunmetal bg-orange/5">
                <h3 className="font-display text-orange text-lg md:text-xl">Graylock Digital</h3>
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="p-4 md:p-6 border-b border-r border-gunmetal flex items-start gap-3">
                  <X className="text-red-400/60 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-stone/70 font-sans text-sm leading-relaxed">{row.theirs}</span>
                </div>
                <div className="p-4 md:p-6 border-b border-gunmetal bg-orange/5 flex items-start gap-3">
                  <Check className="text-orange flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-offwhite font-sans text-sm leading-relaxed">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <CTAButton href="/get-started">
            Schedule a Free Consultation
          </CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
