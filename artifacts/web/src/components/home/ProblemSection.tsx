import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Award, SearchX, DollarSign, Copy, HelpCircle, Clock } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export function ProblemSection() {
  const problems = [
    {
      icon: <Award size={18} />,
      title: "Your Site Doesn't Reflect Your Expertise",
      desc: "Prospective clients judge your credibility in seconds. An outdated design undermines the trust you've spent years building."
    },
    {
      icon: <SearchX size={18} />,
      title: "Clients Can't Find You on Google",
      desc: "Without a proper local SEO foundation, the clients searching for your services are finding your competitors instead."
    },
    {
      icon: <DollarSign size={18} />,
      title: "Agencies Want $10K–$30K Upfront",
      desc: "Most agencies charge $10K–$30K just to build your site — before you've seen a single mockup. That's a huge gamble for a practice trying to grow responsibly."
    },
    {
      icon: <Clock size={18} />,
      title: "Then $300–$800/Month to Keep It Running",
      desc: "After paying tens of thousands to build it, agencies charge $300–$800/month for hosting and maintenance. You're locked in and paying forever for a site you already paid for."
    },
    {
      icon: <Copy size={18} />,
      title: "Your Site Looks Like Every Other Practice",
      desc: "Template platforms make every practice look the same. Your site should reflect your unique expertise — not a cookie-cutter layout."
    },
    {
      icon: <HelpCircle size={18} />,
      title: "You Don't Know What's Holding You Back",
      desc: "You know your site isn't converting — but is it the design? The copy? The SEO? You need someone to show you clearly."
    }
  ];

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-gunmetal">
      <div className="max-w-6xl mx-auto">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Sound Familiar?</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            Most Practice and Business Owners Know Their Website Needs Work
          </h2>
          <p className="text-stone text-lg font-sans">
            They just don't know exactly what's wrong — or how to fix it without spending a fortune.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gunmetal/50">
              <img
                src={`${BASE}outdated-practice-website.png`}
                alt="Example of an outdated practice website"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {problems.map((prob, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange/10 text-orange">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="text-offwhite font-sans font-semibold text-base md:text-lg mb-1">
                      {prob.title}
                    </h3>
                    <p className="text-stone font-sans text-sm leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center mt-14">
          <p className="text-lg font-sans text-stone mb-5">
            That's exactly why we review your site for free — so you finally know what to fix.
          </p>
          <CTAButton href="/get-started">
            Schedule a Free Consultation
          </CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
