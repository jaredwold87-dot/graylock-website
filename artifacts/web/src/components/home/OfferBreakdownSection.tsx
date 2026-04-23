import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SearchCheck, PhoneCall, LayoutDashboard, FileBarChart2 } from "lucide-react";

export function OfferBreakdownSection() {
  const offers = [
    {
      step: "Step 1",
      icon: <SearchCheck size={26} strokeWidth={2.2} />,
      title: "Website Review",
      desc: "We audit your current site and pinpoint exactly what is hurting trust, clarity, and lead generation.",
    },
    {
      step: "Step 2",
      icon: <PhoneCall size={26} strokeWidth={2.2} />,
      title: "Discovery Call",
      desc: "A short call to learn what you love about your current site, what you can't stand, and what the people you're trying to win over actually need from it.",
    },
    {
      step: "Step 3",
      icon: <LayoutDashboard size={26} strokeWidth={2.2} />,
      title: "Custom Homepage Demo",
      desc: "We design a real homepage concept tailored to your business, so you can see and feel the direction before committing.",
    },
    {
      step: "Step 4",
      icon: <FileBarChart2 size={26} strokeWidth={2.2} />,
      title: "Written Report",
      desc: "A plain-English summary of what we would change, why it matters, and exactly what your custom build would include — yours to keep, no commitment.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">How Our Free Audit & Demo Works</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            See the Work Before You Commit a Dollar.
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Every engagement starts with four free steps — a real review, a real conversation, a real demo, and a written report — so you know exactly what you're buying before you ever say yes.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mt-12">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="group bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col hover:-translate-y-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-charcoal flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:shadow-orange/10 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
                  {offer.icon}
                </div>
                <span className="text-orange font-sans font-bold uppercase tracking-widest text-[10px]">{offer.step}</span>
              </div>
              <h3 className="text-lg font-display text-charcoal mb-3">{offer.title}</h3>
              <p className="text-stone font-sans leading-relaxed text-sm">{offer.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
