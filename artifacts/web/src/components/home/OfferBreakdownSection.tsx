import { Search, MessageSquare, Monitor, FileText } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function OfferBreakdownSection() {
  const offers = [
    {
      icon: <Search className="text-orange" size={28} />,
      title: "Full Website Evaluation",
      desc: "We evaluate your current site and identify every issue that's costing you leads — from design and messaging problems to mobile usability and SEO gaps. You'll see exactly what's broken and why.",
      value: "Most agencies charge $500+ for this alone"
    },
    {
      icon: <MessageSquare className="text-orange" size={28} />,
      title: "Live Strategy Walkthrough",
      desc: "We hop on a 20-minute call with you and walk through the findings in plain English. No jargon, no fluff — just a clear explanation of what's hurting your site and what we'd do differently.",
      value: "Clarity you can act on, whether you hire us or not"
    },
    {
      icon: <FileText className="text-orange" size={28} />,
      title: "Comprehensive Written Report",
      desc: "You receive a full PDF report covering competitive analysis, customer and audience insights, website performance analysis, and strategic opportunity recommendations. It's a high-value deliverable you keep regardless of whether you move forward.",
      value: "A professional-grade report — yours to keep forever"
    },
    {
      icon: <Monitor className="text-orange" size={28} />,
      title: "Custom Homepage Demo",
      desc: "We design a custom homepage concept for your business showing exactly how we'd improve your messaging, layout, and brand presentation. You get to see what your site could become.",
      value: "A real design, not a generic mockup"
    }
  ];

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 relative overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Your Free Call Includes</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            See How We'd Elevate Your Site — Before You Pay Us Anything
          </h2>
          <p className="text-stone text-lg font-sans">
            Most agencies ask for thousands upfront before showing you a single thing. We do real work for you first — so you can decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-orange/20 to-orange/5 rounded-xl flex items-center justify-center mb-6 border border-orange/10">
                {offer.icon}
              </div>
              <h3 className="text-xl font-display text-charcoal mb-4">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed mb-6 flex-grow text-sm">{offer.desc}</p>
              <p className="text-orange/80 font-sans text-sm font-semibold border-t border-gray-200 pt-4">{offer.value}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-12">
          <CTAButton href="/get-started">
            Get My Free Website Evaluation
          </CTAButton>
          <p className="text-stone/60 text-sm font-sans mt-4">No credit card. No obligation. Just answers.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
