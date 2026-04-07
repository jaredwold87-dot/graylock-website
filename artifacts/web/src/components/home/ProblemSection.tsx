import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function ProblemSection() {
  const problems = [
    {
      title: "Your Site Doesn't Reflect Your Expertise",
      desc: "You've built a respected practice — but your website tells a different story. Prospective clients judge your credibility in seconds. An outdated design undermines the trust you've spent years building."
    },
    {
      title: "Prospective Clients Can't Find You on Google",
      desc: "Without a proper local SEO foundation, attorneys, therapists, CPAs, and physicians in your area are invisible. The clients searching for your services are finding your competitors instead."
    },
    {
      title: "Agencies Want $10K–$20K Upfront",
      desc: "Most agencies quote $5,000–$20,000 before showing you anything. That's a huge gamble — especially for a solo practitioner or small firm trying to grow responsibly."
    },
    {
      title: "Your Website Looks Like Every Other Practice",
      desc: "Template platforms like TherapySites, Brighter Vision, and LawLytics make every practice look the same. Your site should reflect your unique expertise — not a cookie-cutter layout that's broken on mobile."
    },
    {
      title: "You Don't Know What's Holding Your Site Back",
      desc: "You know your site isn't converting — but is it the design? The copy? The SEO? You need someone to show you, clearly, what's costing you clients."
    },
    {
      title: "Every Month Without a Great Site Is Lost Referrals",
      desc: "While you put it off, prospective clients are choosing other practices with better online presences. Every month you wait is another month of lost consultations and referrals."
    }
  ];

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-y border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            Most Practice Owners Know Their Website Needs Work
          </h2>
          <p className="text-gray-600 text-lg font-sans">
            They just don't know exactly what's wrong — or how to fix it without spending a fortune. Sound familiar?
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange/20 transition-all duration-400 group">
              <div className="w-10 h-10 rounded-lg bg-orange/5 flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-orange" />
              </div>
              <h3 className="text-xl font-display text-charcoal mb-3">{prob.title}</h3>
              <p className="text-gray-600 font-sans leading-relaxed">{prob.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center">
          <p className="text-xl font-display text-orange tracking-wide uppercase mb-8">
            That's exactly why we review your site for free — so you finally know what to fix.
          </p>
          <CTAButton href="/get-started">
            Find Out What's Costing Me Clients
          </CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
