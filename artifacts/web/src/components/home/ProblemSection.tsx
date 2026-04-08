import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Award, SearchX, DollarSign, Copy, HelpCircle, Clock } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <Award size={22} />,
      title: "Your Site Doesn't Reflect Your Expertise",
      desc: "Prospective clients judge your credibility in seconds. An outdated design undermines the trust you've spent years building."
    },
    {
      icon: <SearchX size={22} />,
      title: "Clients Can't Find You on Google",
      desc: "Without a proper local SEO foundation, the clients searching for your services are finding your competitors instead."
    },
    {
      icon: <DollarSign size={22} />,
      title: "Agencies Want $10K–$30K Upfront",
      desc: "Most agencies charge $10K–$30K just to build your site — before you've seen a single mockup. That's a huge gamble for a practice trying to grow responsibly."
    },
    {
      icon: <Clock size={22} />,
      title: "Then $300–$800/Month to Keep It Running",
      desc: "After paying tens of thousands to build it, agencies charge $300–$800/month for hosting and maintenance. You're locked in and paying forever for a site you already paid for."
    },
    {
      icon: <Copy size={22} />,
      title: "Your Site Looks Like Every Other Practice",
      desc: "Template platforms make every practice look the same. Your site should reflect your unique expertise — not a cookie-cutter layout."
    },
    {
      icon: <HelpCircle size={22} />,
      title: "You Don't Know What's Holding You Back",
      desc: "You know your site isn't converting — but is it the design? The copy? The SEO? You need someone to show you clearly."
    }
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-gunmetal">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Sound Familiar?</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            Most Practice Owners Know Their Website Needs Work
          </h2>
          <p className="text-stone text-lg font-sans">
            They just don't know exactly what's wrong — or how to fix it without spending a fortune.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="glass-card p-8 rounded-xl group">
              <div className="relative z-10 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/15 transition-colors text-orange">
                {prob.icon}
              </div>
              <h3 className="relative z-10 text-xl font-display text-offwhite mb-3">{prob.title}</h3>
              <p className="relative z-10 text-stone font-sans leading-relaxed text-sm">{prob.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center">
          <p className="text-lg font-sans text-stone mb-8">
            That's exactly why we review your site for free — so you finally know what to fix.
          </p>
          <CTAButton href="/get-started">
            Book Your Free Website Review
          </CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
