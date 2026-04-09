import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HowItWorks() {
  const steps = [
    {
      day: "Day 1",
      title: "Call + Evaluation",
      desc: "We start with a free 20-minute consultation. We review your current online presence, discuss your target clients, and determine exactly what features your practice needs to succeed. After the call, you receive a comprehensive written report covering website analysis, SEO gaps, competitive landscape, and growth opportunities. You keep the full report regardless of whether you move forward — it's yours as a premium standalone deliverable."
    },
    {
      day: "Day 1–2",
      title: "The Build",
      desc: "Once you approve the plan and pay the setup fee, our team gets to work. We craft custom copy, source high-quality imagery, and build a blazing-fast site — typically within 7–10 business days on average. Throughout the build, you'll have full transparency: a dedicated project portal where you can upload assets, communicate directly with our team, and track progress in real time."
    },
    {
      day: "Day 3–4",
      title: "Client Review",
      desc: "We send you a private link to review your new website and schedule a review call to walk you through the completed site together. This is a structured opportunity for feedback — we go page by page, answer your questions, and make any adjustments to ensure it's exactly what you envisioned. We don't launch until you sign off."
    },
    {
      day: "Day 5",
      title: "Launch",
      desc: "We connect your domain, set up SSL security, configure your SEO, and push the site live to the world. Your site is live and working for you — every visitor is now a potential client. Google indexing begins, leads start flowing, and your monthly subscription kicks in."
    }
  ];

  return (
    <>
      <SEO title="How It Works | Professional Practice Websites | Graylock Digital" description="From free website evaluation to a live, lead-generating website in 7–10 business days. See our proven process for therapists, dentists, physicians, CPAs, and private practices." />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-how-it-works.png)` }}
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Our Proven Process</h1>
            <p className="text-xl font-sans text-stone">From an outdated liability to a lead-generating asset — within 7–10 business days on average.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gunmetal -translate-x-1/2 rounded-full"></div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-orange rounded-full -translate-x-1/2 border-4 border-navy z-10 shadow-[0_0_10px_rgba(46,123,180,0.8)]"></div>

              <div className="hidden md:block md:w-[45%]"></div>

              <div className="w-full md:w-[45%] pl-16 md:pl-0">
                <div className="bg-charcoal p-8 rounded-xl border border-gunmetal hover:border-orange/50 transition-colors shadow-lg">
                  <span className="text-orange font-display tracking-widest uppercase text-sm mb-2 block">{step.day}</span>
                  <h3 className="text-2xl font-display text-offwhite mb-4">{step.title}</h3>
                  <p className="text-stone font-sans leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-offwhite py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">What Happens After Launch?</h2>
            <p className="text-gray-600 text-lg font-sans">Our relationship doesn't end when the site goes live. In fact, that's just the beginning.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ScrollReveal delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display text-charcoal mb-4">Total Maintenance</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                We handle all the invisible technical work. Software updates, plugin management, security scans, and uptime monitoring. You never have to log into a complicated dashboard or worry about your site getting hacked.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display text-charcoal mb-4">Easy Change Requests</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Need to update your team page or change your holiday hours? Just email us. We treat your requests like an internal IT team would. Most content updates are reviewed and completed within 3 business days.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display text-charcoal mb-4">Dedicated Account Manager</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Every plan includes a dedicated account manager — a real person who knows your practice and your website. Need to discuss performance, request changes, or ask a question? You have a direct line. No support tickets, no chatbots.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display text-charcoal mb-4">Ongoing SEO & Performance Monitoring</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Your dedicated account manager monitors your site's SEO performance and keeps your site competitive in local search results. We also offer a long-term website refresh and strategy review at the 2-year mark — because great websites evolve with your practice.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5} className="bg-orange/5 border border-orange/20 rounded-xl p-8 text-center">
            <p className="text-charcoal font-sans text-lg leading-relaxed">
              We're not a launch-and-leave service. We're your long-term website partner — maintaining, improving, and growing your online presence month after month.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-4">
              Ready to See What Your Website Could Become?
            </h2>
            <p className="text-stone text-lg font-sans mb-4 max-w-xl mx-auto leading-relaxed">
              Book a free 20-minute call. We'll review your current site, walk you through what's not working, and build you a custom homepage demo.
            </p>
            <p className="text-stone/70 text-sm font-sans mb-8 max-w-xl mx-auto">
              You'll also receive a comprehensive written report covering your competitive landscape, SEO gaps, and growth opportunities — yours to keep no matter what.
            </p>
            <CTAButton href="/get-started" className="px-8 py-4">
              Schedule a Free Consultation
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
