import { SEO } from "@/components/SEO";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { CheckCircle2, Flag, MapPin, Heart, ArrowRight } from "lucide-react";
import usaFlagBw from "@/assets/usa-flag-bw.webp";
import founderJared from "@/assets/founder-jared.webp";
import founderTim from "@/assets/founder-tim.webp";
import { Link } from "wouter";

export default function About() {
  const values = [
    { title: "Done-For-You", desc: "We don't sell tools, we sell results. We take the burden entirely off your plate." },
    { title: "Transparent", desc: "No hidden fees, no confusing jargon, and no holding your digital assets hostage." },
    { title: "Fast", desc: "Professional practice clients can't wait 6–10 weeks. We built a process that delivers custom sites in 7–10 business days without cutting corners. Our structured process, proven build framework, and experienced team make this possible. Larger or more complex builds may take longer." },
    { title: "Relationship-Driven", desc: "We aren't a faceless platform. You always know exactly who is working on your site." }
  ];

  const milestones = [
    { label: "The Frustration", text: "We watched hardworking small businesses get burned by overpriced agencies and offshore freelancers who never delivered." },
    { label: "The Realization", text: "A great website should not require a $20K budget or a 3-month timeline. We knew there was a better way." },
    { label: "The Build", text: "We built a repeatable framework — U.S. team, proven process — that ships custom sites in 7–10 business days." },
    { label: "The Mission", text: "Serve the business owners who show up early, stay late, and deserve a website that works as hard as they do." },
  ];

  return (
    <>
      <SEO
        title="About Graylock Digital | Practice Website Specialists"
        description="We build websites for therapists, dentists, physicians, CPAs, and other private practices — for a fraction of what an agency charges. Delivered in 7–10 business days."
        url="https://graylockdigital.com/about"
      />

      {/* ── HERO ── */}
      <section className="relative py-36 md:py-52 px-6 md:px-12 text-offwhite overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-about.png`} />
        <div className="absolute inset-0 bg-[#0f0f0f]/80 md:bg-[#0f0f0f]/70" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-6">
              Built for Practice Owners
            </p>
            <h1 className="text-5xl md:text-7xl font-display leading-[1.05] mb-8 text-white">
              A Better Website Should Not Cost You Three Months and&nbsp;$20,000
            </h1>
            <p className="text-stone font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              You started your practice to take care of clients — not to manage a website. Every month your site sends prospects to a competitor is a month of growth you don't get back.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-3 bg-[#E85D26] text-white font-sans font-bold uppercase tracking-[0.18em] text-sm px-8 py-4 hover:bg-[#c94f20] transition-colors"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">Our Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-display text-[#0f0f0f] leading-[1.1] max-w-3xl">
              We Only Work With Businesses We Genuinely Want to See Win
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal delay={0.1}>
              <p className="text-[#0f0f0f] font-sans text-lg md:text-xl leading-relaxed mb-6">
                We don't take on every business that comes our way. We look for small and local businesses — service companies, contractors, healthcare practices, and professional firms — where we know, not hope,{" "}
                <em className="text-[#B23E16] not-italic font-semibold">know</em>, that a better website will directly impact their ability to win more clients.
              </p>
              <p className="text-[#555] font-sans text-lg leading-relaxed mb-6">
                When a contractor loses a job because their site looked outdated, or a healthcare practice can't fill its schedule because prospective clients never make it past the homepage — those are the moments we're solving for.
              </p>
              <p className="text-[#0f0f0f] font-sans text-lg leading-relaxed font-semibold">
                Your growth is our portfolio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {[
                  { label: "We Seek You Out", body: "We actively look for businesses where a new site will make a measurable difference — not just anyone willing to pay." },
                  { label: "Your Success Is Personal", body: "We don't disappear after launch. We stay invested because watching our clients grow is the best part of this work." },
                  { label: "Partners, Not Vendors", body: "We think of ourselves as part of your team. When you win, we win. It's that simple." },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#E85D26] pl-6">
                    <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.15em] text-xs mb-2">{item.label}</p>
                    <p className="text-[#555] font-sans text-base leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
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
      <section className="bg-[#0f0f0f] py-4 md:py-8 px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">The Founders</p>
            <h2 className="text-4xl md:text-5xl font-display text-white leading-[1.1]">
              The People Behind the Work
            </h2>
          </ScrollReveal>

          {/* Jared */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
            <ScrollReveal>
              <div className="relative">
                <img
                  src={founderJared}
                  alt="Jared, Co-Founder of Graylock Digital"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4">Co-Founder</p>
              <h3 className="text-4xl md:text-5xl font-display text-white uppercase tracking-wide mb-6">Jared</h3>
              <p className="text-stone font-sans text-lg leading-relaxed mb-4">
                Jared has spent years watching small business owners get oversold, underserved, and handed websites that don't actually work. He built Graylock to change that — and personally leads every engagement to make sure it does.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed">
                He believes that a great website shouldn't be a luxury reserved for businesses with agency budgets. It should be table stakes for every hardworking practice owner in America.
              </p>
            </ScrollReveal>
          </div>

          {/* Tim */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal delay={0.1} className="order-2 md:order-1">
              <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4">Co-Founder</p>
              <h3 className="text-4xl md:text-5xl font-display text-white uppercase tracking-wide mb-6">Tim</h3>
              <p className="text-stone font-sans text-lg leading-relaxed mb-4">
                Tim leads the strategy and process side of Graylock, having refined a build system that delivers custom, high-performing sites in 7–10 business days without cutting corners. What takes agencies months, he's made repeatable.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed">
                He stays personally involved from kickoff to launch — because when your name is on the work, you care a lot more about getting it right.
              </p>
            </ScrollReveal>
            <ScrollReveal className="order-1 md:order-2">
              <div className="relative">
                <img
                  src={founderTim}
                  alt="Tim, Co-Founder of Graylock Digital"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ORIGINS MILESTONE STRIP ── */}
      <section className="bg-[#F4F1EC] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">Our Origins</p>
            <h2 className="text-4xl md:text-5xl font-display text-[#0f0f0f] leading-[1.1]">
              How Graylock Came to Be
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Horizontal line (desktop) */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#E85D26]/30" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="relative">
                    {/* Orange dot on the line */}
                    <div className="hidden md:flex absolute -top-1.5 left-0 w-3.5 h-3.5 rounded-full bg-[#E85D26]" />
                    <div className="md:pt-10 md:pl-0 border-l-2 border-[#E85D26] md:border-l-0 pl-5 md:pl-0">
                      <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.15em] text-xs mb-2">{m.label}</p>
                      <p className="text-[#555] font-sans text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM STATS ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">The Team Behind Your Website</p>
            <h2 className="text-4xl md:text-5xl font-display text-[#0f0f0f] leading-[1.1] max-w-3xl">
              U.S.-Based Team — Founder-Led on Every Project
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mb-12">
            <p className="text-[#555] font-sans text-lg md:text-xl leading-relaxed max-w-3xl">
              Graylock Digital was founded by <span className="text-[#0f0f0f] font-semibold">Tim and Jared</span>, who personally lead every engagement alongside a small, vetted team of U.S.-based strategists, designers, and developers. You will never be handed off to a junior account manager or routed through an offshore queue — the people who scope your project are the people who build it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e8e4dd]">
              {[
                { num: "100%", label: "U.S.-based team", body: "Strategy, design, copy, and development — all in-house, all in the United States." },
                { num: "7–10", label: "Business-day delivery", body: "A repeatable build framework, refined project after project, that ships fast without cutting corners." },
                { num: "1", label: "Named point of contact", body: "A single, accountable owner from kickoff through launch and beyond. No tickets. No phone trees." },
              ].map((stat, i) => (
                <div key={i} className={`p-8 md:p-10 ${i < 2 ? "md:border-r border-b md:border-b-0 border-[#e8e4dd]" : ""}`}>
                  <p className="text-[#E85D26] font-display text-5xl md:text-6xl mb-3">{stat.num}</p>
                  <p className="text-[#0f0f0f] font-sans font-semibold uppercase tracking-wide text-sm mb-2">{stat.label}</p>
                  <p className="text-[#555] font-sans text-sm leading-relaxed">{stat.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OFFER BREAKDOWN ── */}
      <OfferBreakdownSection />

      {/* ── PROUDLY AMERICAN ── */}
      <section className="bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <div className="inline-flex items-center gap-2 text-[#B23E16] font-sans font-bold uppercase tracking-[0.18em] text-xs mb-6">
              <Flag size={14} />
              Proudly American
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-[#0f0f0f] leading-[1.1] max-w-3xl">
              100% U.S.-Based.{" "}
              <br className="hidden md:block" />
              Zero Outsourcing.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal delay={0.1}>
              <p className="text-[#555] font-sans text-lg md:text-xl leading-relaxed mb-10">
                Every person who touches your project — from the first phone call to the final pixel — is a hardworking American who cares about your practice like it's their own.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <MapPin size={18} className="text-[#E85D26]" />, label: "Built in America", body: "Every website is designed, developed, and maintained by our team right here in the United States. No exceptions." },
                  { icon: <Heart size={18} className="text-[#E85D26]" />, label: "Americans Helping Americans", body: "We're proud to be a small American business supporting other small American businesses. Your success strengthens our communities." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-[#0f0f0f] font-sans font-bold uppercase tracking-[0.12em] text-xs mb-1">{item.label}</p>
                      <p className="text-[#555] font-sans text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={usaFlagBw}
                  alt="American flag"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-display text-white leading-[1.1]">Our Core Values</h2>
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
