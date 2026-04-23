import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Gift, Star, CalendarX, BookOpen } from "lucide-react";

const bonuses = [
  {
    icon: <Star className="text-orange" size={26} />,
    label: "Bonus #1",
    title: "5-Star Review Script",
    desc: "A done-for-you message sequence your team can send to every happy client — designed to turn quiet appreciation into public 5-star Google reviews that compound your local search rankings month after month.",
  },
  {
    icon: <CalendarX className="text-orange" size={26} />,
    label: "Bonus #2",
    title: "No-Show & Drop-Off Reduction Sequence",
    desc: "An automated reminder and confirmation sequence built to cut no-show appointments, ghosted estimates, and missed consult calls — recovering revenue most businesses quietly write off as a cost of doing business.",
  },
  {
    icon: <BookOpen className="text-orange" size={26} />,
    label: "Bonus #3",
    title: "Industry Growth Playbook",
    desc: "Our complete book on building a thriving, owner-led business — with a tailored edition for private practices, construction companies, or accounting firms covering positioning, client acquisition, retention, referrals, and the operational moves that separate businesses that grow from businesses that stall.",
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
            The Client Growth Bundle
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            Three high-leverage extras built to help you fill the calendar, keep it full, and grow with confidence — included with every Graylock plan, at no additional cost, and tailored to your industry.
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
                <h3 className="text-xl font-display text-offwhite mb-3 leading-snug">{bonus.title}</h3>
                <p className="text-stone font-sans text-sm leading-relaxed">{bonus.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-10">
          <p className="text-offwhite font-display text-lg md:text-xl">
            A <span className="text-orange font-bold">$1,500+ value</span> — included free with every Graylock plan.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
