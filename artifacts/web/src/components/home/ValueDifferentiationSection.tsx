import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { X, Check } from "lucide-react";

export function ValueDifferentiationSection() {
  const comparisons = [
    { theirs: "Charge $5,000–$20,000 before showing you anything", ours: "Show you a custom homepage demo before you pay a dollar" },
    { theirs: "Take weeks for a generic pitch deck", ours: "Walk you through real findings in a 20-minute call" },
    { theirs: "Lock you into long-term contracts", ours: "Month-to-month, cancel anytime" },
    { theirs: "Leave you alone after launch", ours: "Handle hosting, updates, and maintenance every month" },
    { theirs: "Hand you a template and call it custom", ours: "Build a site designed specifically for your practice and specialty" },
    { theirs: "No way to see what's happening on your site", ours: "Business dashboard with traffic insights and easy info updates" },
    { theirs: "No visibility into how your site performs", ours: "Monthly performance reporting included on every plan" },
    { theirs: "Set it and forget it — never revisit", ours: "Quarterly SEO reviews and a long-term refresh at the 2-year mark" },
    { theirs: "Rarely — usually generic small business focus", ours: "Purpose-built for professional practices" },
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="text-center mb-12">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Why Graylock</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Every other agency wants you to pay first.{" "}
            <span className="text-gradient">We think that's backwards.</span>
          </h2>
          <p className="text-stone/80 text-lg md:text-xl font-sans max-w-2xl mx-auto">
            We do the work first. You see the results first. Then you decide.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-navy rounded-2xl border border-gunmetal overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 text-center">
              <div className="p-3 md:p-5 border-b border-r border-gunmetal">
                <h3 className="font-display text-stone/80 text-base md:text-lg uppercase tracking-wide">Other Agencies</h3>
              </div>
              <div className="p-3 md:p-5 border-b border-gunmetal bg-gradient-to-br from-orange/10 to-orange/5">
                <h3 className="font-display text-orange text-base md:text-lg uppercase tracking-wide">Graylock Digital</h3>
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i === comparisons.length - 1 ? '' : ''}`}>
                <div className="p-3 md:p-5 border-b border-r border-gunmetal/60 flex items-start gap-2.5">
                  <X className="text-red-400/50 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-stone/60 font-sans text-xs md:text-sm leading-relaxed">{row.theirs}</span>
                </div>
                <div className="p-3 md:p-5 border-b border-gunmetal/60 bg-orange/[0.04] flex items-start gap-2.5">
                  <Check className="text-orange flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-offwhite/90 font-sans text-xs md:text-sm leading-relaxed">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <CTAButton href="/get-started">
            See What This Looks Like for My Practice
          </CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
