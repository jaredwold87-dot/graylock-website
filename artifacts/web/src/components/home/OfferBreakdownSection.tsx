import { Search, MessageSquare, Monitor, FileText, ShieldCheck } from "lucide-react";
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
    <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F2F3F5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Your Free Call Includes</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            See How We'd Elevate Your Site — Before You Pay Us Anything
          </h2>
          <p className="text-stone text-lg font-sans">
            Most agencies ask for thousands upfront before showing you a single thing. We do real work for you first — so you can decide with confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="card-glow gradient-border bg-charcoal/80 p-8 rounded-xl border border-gunmetal/50 flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-orange/20 to-orange/5 rounded-xl flex items-center justify-center mb-6 border border-orange/10">
                {offer.icon}
              </div>
              <h3 className="text-xl font-display text-offwhite mb-4">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed mb-6 flex-grow text-sm">{offer.desc}</p>
              <p className="text-orange/80 font-sans text-sm font-semibold border-t border-gunmetal/50 pt-4">{offer.value}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-20 max-w-4xl mx-auto">
          <div className="bg-charcoal/60 border border-gunmetal/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange/10">
                <ShieldCheck className="text-orange" size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display text-offwhite mb-3">Why We Do This for Free</h3>
                <p className="text-stone font-sans leading-relaxed mb-4">
                  We absorb the upfront cost because our clients stay with us for years. We'd rather prove our value first than ask you to take our word for it.
                </p>
                <p className="text-stone font-sans leading-relaxed mb-4">
                  We use a high-converting structural framework, then customize it to your brand, services, and local market — that's how we deliver quality in 5 days. Your homepage demo, evaluation, and written report are built around your actual business, not pulled from a template library.
                </p>
                <p className="text-stone/70 font-sans text-sm leading-relaxed">
                  Even if you don't move forward, you walk away with a professional-grade report and a clear picture of what's holding your website back. No strings attached.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6} className="text-center mt-12">
          <CTAButton href="/get-started">
            Get My Free Website Evaluation
          </CTAButton>
          <p className="text-stone/60 text-sm font-sans mt-4">No credit card. No obligation. Just answers.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
