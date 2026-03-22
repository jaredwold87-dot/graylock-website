import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HowItWorks() {
  const steps = [
    {
      day: "Day 1",
      title: "Call + Evaluation",
      desc: "We start with a free 20-minute consultation. We review your current online presence, discuss your target audience, and determine exactly what features your business needs to succeed."
    },
    {
      day: "Day 1-2",
      title: "The Build",
      desc: "Once you approve the plan and pay the setup fee, our team gets to work. We craft custom copy, source high-quality imagery, and build a blazing-fast site on our proprietary stack."
    },
    {
      day: "Day 2-3",
      title: "Client Review",
      desc: "We send you a private link to review your new website. You provide feedback, and we make any necessary adjustments to ensure it's exactly what you envisioned."
    },
    {
      day: "Day 3",
      title: "Launch",
      desc: "We connect your domain, set up SSL security, configure your basic SEO, and push the site live to the world. Your monthly subscription begins here."
    }
  ];

  return (
    <>
      <SEO title="How It Works | Graylock Digital" />
      
      <section className="bg-offwhite py-24 px-6 md:px-12 text-charcoal border-b border-gray-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}about-hero.png)` }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Our Proven Process</h1>
            <p className="text-xl font-sans text-gray-600">From an outdated liability to a lead-generating asset in less than a week.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gunmetal -translate-x-1/2 rounded-full"></div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-orange rounded-full -translate-x-1/2 border-4 border-navy z-10 shadow-[0_0_10px_rgba(232,99,26,0.8)]"></div>

              {/* Empty Spacer */}
              <div className="hidden md:block md:w-[45%]"></div>

              {/* Content Card */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display text-charcoal mb-4">Total Maintenance</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                We handle all the invisible technical work. Software updates, plugin management, security scans, uptime monitoring, and daily backups. You never have to log into a complicated dashboard or worry about your site getting hacked.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display text-charcoal mb-4">Easy Change Requests</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Need to update your team page or change your holiday hours? Just email us. We treat your requests like an internal IT team would. Most content updates are reviewed and completed within 3 business days.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
