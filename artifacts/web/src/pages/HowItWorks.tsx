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
      title: "15-Minute Discovery Call",
      desc: "We start with a quick 15-minute call. We hear what you like and dislike about your current site, who your target clients are, and what you want your new homepage to do for your business. No pitch deck, no pressure — just enough information for us to come back with something real to show you."
    },
    {
      day: "Step 2",
      title: "Free Custom Homepage Demo",
      desc: "We turn what we heard on the call into a real, custom demo of what your new homepage could look like. You see actual layout, copy direction, and visual style applied to your business — not a template or a slide. There's no payment required to see the demo, and no obligation to move forward after you do."
    },
    {
      day: "Step 3",
      title: "Approve the Demo & Pay the Build Fee",
      desc: "If you like the direction, this is the point where you pay the build fee — after the demo, not before. Approving the demo locks in your spot on the build calendar and tells us to start on the rest of the site. If the demo isn't right for you, you walk away with no cost and no commitment."
    },
    {
      day: "Step 4",
      title: "Build (7–10 Business Days)",
      desc: "Our team builds out the full site from the approved homepage direction. We craft the remaining pages, write custom copy, source high-quality imagery, and tune everything for speed and SEO. Most builds finish in 7–10 business days, and you have a direct line to us throughout for assets, questions, and progress updates."
    },
    {
      day: "Step 5",
      title: "Review & Launch on Your Domain",
      desc: "We walk you through the finished site page by page on a review call, gather your feedback, and make final adjustments. Once you sign off, we connect your domain, set up SSL, configure SEO, and launch the site live on your domain. From there, your monthly support kicks in and we keep the site healthy and improving."
    }
  ];

  return (
    <>
      <SEO title="How It Works | Our 5-Step Website Process | Graylock Digital" description="See our 5-step process: a 15-minute call, a free custom homepage demo, then a full build in 7–10 business days launched on your domain. No payment until after you approve the demo." url="https://graylockdigital.com/how-it-works" />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-how-it-works.png`} />
        <div className="absolute inset-0 bg-charcoal/90 md:bg-charcoal/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Our 5-Step Process</h1>
            <p className="text-xl font-sans text-stone">From a 15-minute call to a free custom demo to a fully built site launched on your domain — most builds finish in 7–10 business days, and you don't pay anything until after you've seen and approved the demo.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gunmetal -translate-x-1/2 rounded-full"></div>

          {steps.slice(0, 2).map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-orange rounded-full -translate-x-1/2 border-4 border-navy z-10 shadow-[0_0_10px_rgba(232,93,38,0.8)]"></div>

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

      <section className="bg-navy pt-12 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gunmetal -translate-x-1/2 rounded-full"></div>

          {steps.slice(2).map((step, i) => {
            const originalIndex = i + 2;
            return (
              <ScrollReveal key={originalIndex} delay={i * 0.15} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${originalIndex % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-orange rounded-full -translate-x-1/2 border-4 border-navy z-10 shadow-[0_0_10px_rgba(232,93,38,0.8)]"></div>

                <div className="hidden md:block md:w-[45%]"></div>

                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <div className="bg-charcoal p-8 rounded-xl border border-gunmetal hover:border-orange/50 transition-colors shadow-lg">
                    <span className="text-orange font-display tracking-widest uppercase text-sm mb-2 block">{step.day}</span>
                    <h3 className="text-2xl font-display text-offwhite mb-4">{step.title}</h3>
                    <p className="text-stone font-sans leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
              Book a free 15-minute call. We'll hear what you want from your new site, then turn it into a real custom homepage demo for you to review.
            </p>
            <p className="text-stone text-sm font-sans mb-8 max-w-xl mx-auto">
              No payment until you've seen the demo and decided you want to move forward.
            </p>
            <CTAButton href="/get-started" className="px-8 py-4">
              Get Your Free Homepage Demo
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
