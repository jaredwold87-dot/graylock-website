import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Gift, FileText, Search, MapPin } from "lucide-react";

const bonuses = [
  {
    icon: <Search className="text-orange" size={26} />,
    label: "Bonus #1",
    title: "Local SEO Audit",
    value: "$500 Value",
    desc: "A line-by-line review of your local search presence — Google Business Profile, citations, reviews, schema, and the keywords your competitors are stealing from you. Yours to keep, even if you never become a client.",
  },
  {
    icon: <FileText className="text-orange" size={26} />,
    label: "Bonus #2",
    title: "Custom Homepage Demo",
    value: "$500 Value",
    desc: "We design a real homepage concept for your practice — your brand, your services, your local market — so you can see exactly how a Graylock site would look and feel before you commit a dollar.",
  },
  {
    icon: <MapPin className="text-orange" size={26} />,
    label: "Bonus #3",
    title: "90-Day Practice Growth Plan",
    value: "$500 Value",
    desc: "A written 90-day roadmap covering content priorities, funnel pages, review-generation strategy, and the highest-leverage moves for your specialty and service area. Built around your practice — not a template.",
  },
];

export function PracticeGrowthBundleSection() {
  return (
    <section className="bg-charcoal pt-12 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-[160px] pointer-events-none -translate-y-1/2" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/30 mb-5">
            <Gift className="text-orange" size={16} />
            <span className="text-orange text-xs font-sans font-bold uppercase tracking-widest">Included Free With Every Plan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-5 leading-tight">
            The Practice Growth Bundle
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Three premium deliverables — a $1,500 value — included free when you start with any Graylock plan. Yours to keep regardless of whether you stay with us.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="h-full bg-navy/60 border border-gunmetal/60 rounded-2xl p-7 hover:border-orange/40 transition-colors duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0">
                    {bonus.icon}
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange/80">{bonus.label}</span>
                </div>
                <h3 className="text-xl font-display text-offwhite mb-2 leading-snug">{bonus.title}</h3>
                <p className="text-orange font-sans text-sm font-bold mb-4">{bonus.value}</p>
                <p className="text-stone font-sans text-sm leading-relaxed">{bonus.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-10">
          <p className="text-stone/60 font-sans text-sm">
            Total bundle value: <span className="text-orange font-bold">$1,500</span> — included free, even if you never become a client.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
