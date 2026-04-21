import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { CTAButton } from "@/components/ui/CTAButton";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Wrench, MessagesSquare, UserCheck, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      day: "Step 1",
      title: "Initial Call & Evaluation",
      desc: "We start with a free call to learn your practice, your patients or clients, and your goals — paired with a hands-on review of your current website. You walk away with a clear picture of what's working, what isn't, and the strategy we'd recommend for your custom site."
    },
    {
      day: "Step 2",
      title: "Free Demo Page",
      desc: "Before you commit a dollar, we build a real homepage demo tailored to your business. You see the layout, the copy direction, and the design language in action — and we collect your feedback and input so the final concept genuinely fits your practice."
    },
    {
      day: "Step 3",
      title: "Build to 90%",
      desc: "Once you approve the demo concept, our team completes the full website build to roughly 90% — every page, every funnel, every integration. Custom copy, professional imagery, fast performance, and your branding throughout."
    },
    {
      day: "Step 4",
      title: "Client Review",
      desc: "We hand you a private preview link and walk you through the completed build page by page. You see the entire site exactly as your visitors will, flag anything that needs tightening, and give us a clear list of what to refine before launch."
    },
    {
      day: "Step 5",
      title: "Final Adjustments",
      desc: "We take your feedback and make the final adjustments — copy tweaks, design refinements, image swaps, page additions — until the site is something you're genuinely proud to put your name on."
    },
    {
      day: "Step 6",
      title: "Launch Together",
      desc: "When you give the green light, we launch the site with you — connecting your domain, configuring SSL, finalizing SEO, and pushing it live. Your new website is officially in front of the world, and your monthly subscription kicks in."
    }
  ];

  return (
    <>
      <SEO title="How It Works | Practice Website Process | Graylock Digital" description="From free website evaluation to a live, lead-generating site in 7–10 business days. See our proven process for therapists, dentists, physicians, and CPAs." url="https://graylockdigital.com/how-it-works" />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-how-it-works.png`} />
        <div className="absolute inset-0 bg-charcoal/90 md:bg-charcoal/75" />
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
            {[
              {
                icon: <Wrench className="text-orange" size={22} />,
                title: "Total Maintenance",
                desc: "We handle all the invisible technical work. Software updates, plugin management, security scans, and uptime monitoring. You never have to log into a complicated dashboard or worry about your site getting hacked.",
                delay: 0.1,
              },
              {
                icon: <MessagesSquare className="text-orange" size={22} />,
                title: "Easy Change Requests",
                desc: "Need to update your team page or change your holiday hours? Just email us. We treat your requests like an internal IT team would. Most content updates are reviewed and completed within 3 business days.",
                delay: 0.2,
              },
              {
                icon: <UserCheck className="text-orange" size={22} />,
                title: "Dedicated Account Manager",
                desc: "Every plan includes a dedicated account manager — a real person who knows your practice and your website. Need to discuss performance, request changes, or ask a question? You have a direct line. No support tickets, no chatbots.",
                delay: 0.3,
              },
              {
                icon: <TrendingUp className="text-orange" size={22} />,
                title: "Ongoing SEO & Performance Monitoring",
                desc: "Your dedicated account manager monitors your site's SEO performance and keeps your site competitive in local search results. We also offer a long-term website refresh and strategy review at the 2-year mark — because great websites evolve with your practice.",
                delay: 0.4,
              },
            ].map((card) => (
              <ScrollReveal key={card.title} delay={card.delay} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-display text-charcoal mb-4">{card.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{card.desc}</p>
              </ScrollReveal>
            ))}
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
              Get a Free Demo
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
