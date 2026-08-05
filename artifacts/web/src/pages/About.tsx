import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ElevatedHero } from "@/components/ui/ElevatedHero";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Compass, Target, ShieldCheck, Handshake } from "lucide-react";
import usaFlagDistressed from "@/assets/usa-flag-distressed.webp";
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
      <section className="bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16 md:mb-20 text-center">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">Our Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-[-0.02em] text-[#0f0f0f] leading-[1.05]">
              The Graylock Pillars
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-14">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <p.icon className="text-[#E85D26] mb-5" size={32} strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-display font-bold text-[#0f0f0f] uppercase tracking-wide mb-3">{p.title}</h3>
                <p className="text-[#555] font-sans text-sm md:text-base leading-relaxed">{p.desc}</p>
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
      <section className="bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">The Founders</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-[#0f0f0f] leading-[1.05]">
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
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0f0f0f] uppercase tracking-wide mb-6">
                Jared <span className="text-[#E85D26]">—</span> Co-Founder
              </h3>
              <p className="text-[#555] font-sans text-lg leading-relaxed">
                I started designing websites for friends, family, and small businesses long before Graylock existed. After watching what a well-built site could do — real leads, real revenue, real results — I couldn't go back to the templated, drag-and-drop world of WordPress and Wix. I founded Graylock because I knew what was possible, and I'd seen it work firsthand. We don't measure success by how many sites we ship. We measure it by whether your site is bringing in customers.
              </p>
            </ScrollReveal>
          </div>

          {/* Tim — photo right, text left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal delay={0.1} className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0f0f0f] uppercase tracking-wide mb-6">
                Tim <span className="text-[#E85D26]">—</span> Co-Founder
              </h3>
              <p className="text-[#555] font-sans text-lg leading-relaxed">
                Most business owners dread the website process — and honestly, I get it. It's confusing, expensive, and rarely delivers what was promised. I built my role at Graylock around changing that. I stay personally involved from the first conversation through launch, making sure the process is clear, the communication is honest, and the final product actually does what it's supposed to do: bring you more clients. Your success is the only metric that matters to me.
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── THE GRAYLOCK WAY — TIMELINE ── */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">Our Story, Our Process</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-[#0f0f0f] leading-[1.05]">
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
                    <p className="text-[#B23E16] font-sans font-bold text-[11px] uppercase tracking-[0.15em] mb-1">Step {i + 1}</p>
                    <p className="text-[#0f0f0f] font-display font-bold uppercase tracking-wide text-lg mb-2">{step.label}</p>
                    <p className="text-[#555] font-sans text-sm leading-relaxed">{step.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AMERICAN MADE ── */}
      <section id="american-made" className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
        <img
          src={usaFlagDistressed}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/30" />
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
      <section className="bg-[#F4F1EC] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-5">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-[#0f0f0f] leading-[1.05]">Our Core Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-l-2 border-[#E85D26] pl-6">
                  <h3 className="text-xl font-display text-[#0f0f0f] uppercase tracking-wide mb-3">{val.title}</h3>
                  <p className="text-[#555] font-sans text-sm leading-relaxed">{val.desc}</p>
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
