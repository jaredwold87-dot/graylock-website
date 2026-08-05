import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ElevatedHero } from "@/components/ui/ElevatedHero";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { CheckCircle2, Compass, Target, ShieldCheck, Handshake } from "lucide-react";
import usaFlagBw from "@/assets/usa-flag-bw.webp";
import founderJared from "@/assets/founder-jared.webp";
import founderTim from "@/assets/founder-tim.webp";

/** Subtle grit/noise overlay to break up flat digital backgrounds */
const GRIT_OVERLAY = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
};

export default function About() {
  const values = [
    { title: "Done-For-You", desc: "We don't sell tools, we sell results. We take the burden entirely off your plate." },
    { title: "Transparent", desc: "No hidden fees, no confusing jargon, and no holding your digital assets hostage." },
    { title: "Fast", desc: "Professional practice clients can't wait 6–10 weeks. We built a process that delivers custom sites in 7–10 business days without cutting corners. Our structured process, proven build framework, and experienced team make this possible. Larger or more complex builds may take longer." },
    { title: "Relationship-Driven", desc: "We aren't a faceless platform. You always know exactly who is working on your site." }
  ];

  const pillars = [
    { icon: Compass, title: "Craftsmanship", desc: "Custom builds, no templates. Every pixel is intentional." },
    { icon: Target, title: "Conversion", desc: "We don't build brochures. We build lead-generation machines." },
    { icon: ShieldCheck, title: "Compliance", desc: "Built to federal, state, and industry advertising standards." },
    { icon: Handshake, title: "Commitment", desc: "Month-to-month support. We maintain it forever." },
  ];

  const timeline = [
    { label: "The Problem", text: "Small businesses were getting burned by overpriced agencies." },
    { label: "The Solution", text: "We engineered a 7-10 day custom build framework." },
    { label: "The Demo", text: "We prove it first. You see a custom homepage before paying." },
    { label: "The Launch", text: "Your site goes live, optimized for SEO and conversion." },
    { label: "The Partnership", text: "We maintain, host, and update it forever." },
  ];

  return (
    <>
      <SEO
        title="About Graylock Digital | Practice Website Specialists"
        description="We build websites for therapists, dentists, physicians, CPAs, and other private practices — for a fraction of what an agency charges. Delivered in 7–10 business days."
        url="https://graylockdigital.com/about"
      />

      {/* ── HERO ── */}
      <ElevatedHero />

      {/* ── THE 4 PILLARS ── */}
      <section className="relative bg-[#111111] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] pointer-events-none" style={GRIT_OVERLAY} />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">Our Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[1.05]">
              The Graylock Pillars
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08} className="h-full">
                <div className={`h-full p-6 md:p-10 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b lg:border-b-0 border-white/10" : ""} ${i === 1 ? "lg:border-r lg:border-white/10" : ""} ${i === 2 ? "lg:border-r lg:border-white/10" : ""}`}>
                  <p.icon className="text-[#E85D26] mb-5" size={30} strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wide mb-3">{p.title}</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-black py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span aria-hidden="true" className="block font-display text-7xl md:text-8xl leading-none text-[#E85D26] mb-2">&ldquo;</span>
            <blockquote className="text-white font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-8">
              We started Graylock because we saw too many hardworking business owners getting left behind online. These are the people who show up early, stay late, and take care of their clients. They deserve a website that works as hard as they do.
            </blockquote>
            <p className="text-[#E85D26] font-sans font-bold text-xs uppercase tracking-[0.2em]">&mdash; Tim &amp; Jared, Founders</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="bg-[#111111] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">The Founders</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[1.05]">
              The People Behind the Work
            </h2>
          </ScrollReveal>

          {/* Jared — photo left, text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
            <ScrollReveal>
              <div className="relative">
                <img
                  src={founderJared}
                  alt="Jared, Co-Founder of Graylock Digital"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top grayscale contrast-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111111] to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wide mb-6">
                Jared <span className="text-[#E85D26]">—</span> Co-Founder
              </h3>
              <p className="text-stone font-sans text-lg leading-relaxed">
                I got tired of watching hardworking local business owners get taken advantage of by flashy agencies selling $20,000 digital brochures that didn't make the phone ring. I built Graylock Digital because the trades deserve better. A great website isn't a luxury for the Fortune 500 — it's the most important tool in your truck. I personally lead every engagement to make sure your site actually does its job: getting you more jobs.
              </p>
            </ScrollReveal>
          </div>

          {/* Tim — photo right, text left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal delay={0.1} className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wide mb-6">
                Tim <span className="text-[#E85D26]">—</span> Co-Founder
              </h3>
              <p className="text-stone font-sans text-lg leading-relaxed">
                Speed and quality usually don't mix in this industry. Agencies take months; cheap freelancers cut corners. I spent years engineering a build system that solves that. We deliver custom, high-converting sites in 7 to 10 days, built entirely in the USA. I oversee the strategy and architecture from kickoff to launch because when our name is on the product, it has to be perfect.
              </p>
            </ScrollReveal>
            <ScrollReveal className="order-1 md:order-2">
              <div className="relative">
                <img
                  src={founderTim}
                  alt="Tim, Co-Founder of Graylock Digital"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top grayscale contrast-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111111] to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── THE GRAYLOCK WAY — TIMELINE ── */}
      <section className="relative bg-black py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] pointer-events-none" style={GRIT_OVERLAY} />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal className="mb-16">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">Our Story, Our Process</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[1.05]">
              The Graylock Way
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Horizontal line (desktop) */}
            <div className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-[#E85D26]/30" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
              {timeline.map((step, i) => (
                <ScrollReveal key={step.label} delay={i * 0.1}>
                  <div className="relative pl-8 md:pl-0">
                    {/* Vertical connector segment (mobile) — dot center to next dot center, none after last step */}
                    {i < timeline.length - 1 && (
                      <div className="md:hidden absolute left-[7px] top-[7px] -bottom-[47px] w-px bg-[#E85D26]/30" />
                    )}
                    <div className="absolute top-0 left-0 md:relative md:mb-6 w-3.5 h-3.5 rounded-full bg-[#E85D26]" />
                    <p className="text-[#E85D26] font-sans font-bold text-[11px] uppercase tracking-[0.15em] mb-1">Step {i + 1}</p>
                    <p className="text-white font-display font-bold uppercase tracking-wide text-lg mb-2">{step.label}</p>
                    <p className="text-stone font-sans text-sm leading-relaxed">{step.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFER BREAKDOWN ── */}
      <OfferBreakdownSection />

      {/* ── AMERICAN MADE ── */}
      <section className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
        <img
          src={usaFlagBw}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] pointer-events-none" style={GRIT_OVERLAY} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[1.05] mb-8">
              100% U.S.-Based.{" "}
              <br className="hidden md:block" />
              <span className="text-[#E85D26]">Zero Outsourcing.</span>
            </h2>
            <p className="text-white/85 font-sans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Every line of code, every word of copy, and every design decision is made right here in the United States. We are a small American business supporting other hardworking American businesses. No offshore teams. No call centers. Just partners who care about your livelihood as much as you do.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-[#111111] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[1.05]">Our Core Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white/10">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`p-8 md:p-10 ${i % 2 === 0 ? "sm:border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10" : ""}`}>
                  <CheckCircle2 className="text-[#E85D26] mb-4" size={22} />
                  <h3 className="text-xl font-display text-white uppercase tracking-wide mb-3">{val.title}</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
