import { SEO } from "@/components/SEO";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { CheckCircle2, Heart, Handshake, Search, MapPin, Flag } from "lucide-react";
import usaFlagBw from "@/assets/usa-flag-bw.webp";
import { Link } from "wouter";

export default function About() {
  const values = [
    { title: "Done-For-You", desc: "We don't sell tools, we sell results. We take the burden entirely off your plate." },
    { title: "Transparent", desc: "No hidden fees, no confusing jargon, and no holding your digital assets hostage." },
    { title: "Fast", desc: "Professional practice clients can't wait 6–10 weeks. We built a process that delivers custom sites in 7–10 business days without cutting corners. Our structured process, proven build framework, and experienced team make this possible. Larger or more complex builds may take longer." },
    { title: "Relationship-Driven", desc: "We aren't a faceless platform. You always know exactly who is working on your site." }
  ];

  return (
    <>
      <SEO title="About Graylock Digital | Practice Website Specialists" description="We build websites for therapists, dentists, physicians, CPAs, and other private practices — for a fraction of what an agency charges. Delivered in 7–10 business days." url="https://graylockdigital.com/about" />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-about.png`} />
        <div className="absolute inset-0 bg-[#0f0f0f]/90 md:bg-[#0f0f0f]/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Built For Practice Owners</p>
            <h1 className="text-4xl md:text-6xl font-display mb-6">A Better Website Should Not Cost You Three Months and $20,000</h1>
            <p className="text-xl font-sans text-stone leading-relaxed text-left md:text-center">
              You did not start your practice to manage a website. You started it to take care of clients. But every month your site sends prospective clients to a competitor is a month of growth you do not get back — and the typical fix is a long, expensive agency engagement most practice owners cannot justify.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[#B23E16] font-sans font-semibold uppercase tracking-widest text-sm mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">We Only Work With Businesses We Genuinely Want to See Win</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#1a202c] font-sans text-lg md:text-xl leading-relaxed mb-6">
              We don't take on every business that comes our way. We look for small and local businesses — service companies, contractors, home builders, healthcare practices, and professional firms — where we know, not hope, <em className="text-[#B23E16] not-italic font-semibold">know</em>, that a better website will directly impact their ability to win more clients.
            </p>
            <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
              When a contractor loses a job because their site looked outdated, a service business can't get found on Google, or a healthcare practice can't fill its schedule because prospective clients never make it past the homepage — those are the moments we're solving for.
            </p>
            <p className="text-gray-600 font-sans text-lg leading-relaxed">
              Your growth is our portfolio.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.15} className="bg-[#f5f5f4] rounded-xl border border-gray-200 p-6 text-center">
              <Search className="text-[#B23E16] mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-[#1a202c] mb-2">We Seek You Out</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We actively look for businesses where a new site will make a measurable difference — not just anyone willing to pay.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="bg-[#f5f5f4] rounded-xl border border-gray-200 p-6 text-center">
              <Heart className="text-[#B23E16] mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-[#1a202c] mb-2">Your Success Is Personal</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We don't disappear after launch. We stay invested because watching our clients grow is genuinely the best part of this work.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.35} className="bg-[#f5f5f4] rounded-xl border border-gray-200 p-6 text-center">
              <Handshake className="text-[#B23E16] mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-[#1a202c] mb-2">Partners, Not Vendors</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We think of ourselves as part of your team. When you win, we win. It's that simple.</p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <section className="bg-[#0f0f0f] py-24 md:py-32 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span aria-hidden="true" className="block font-display text-7xl md:text-8xl leading-none text-[#E85D26] mb-2">&ldquo;</span>
            <blockquote className="text-white font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-8">
              We started Graylock because we saw too many hardworking business owners getting left behind online. These are the people who show up early, stay late, and take care of their clients. They deserve a website that works as hard as they do — and a team that actually gives a damn.
            </blockquote>
            <p className="text-[#E85D26] font-sans font-semibold text-sm uppercase tracking-widest">&mdash; The Graylock Team</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[#B23E16] font-sans font-semibold uppercase tracking-widest text-sm mb-4">The Team Behind Your Website</p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">U.S.-Based Team — Founder-Led on Every Project</h2>
            <p className="text-gray-600 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Graylock Digital was founded by <span className="text-[#1a202c] font-semibold">Tim and Jared</span>, who personally lead every engagement alongside a small, vetted team of U.S.-based strategists, designers, and developers. You will never be handed off to a junior account manager or routed through an offshore queue — the people who scope your project are the people who build it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-[#f5f5f4] rounded-2xl border border-gray-200 p-8 md:p-10 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-orange font-display text-4xl md:text-5xl mb-2">100%</p>
                  <p className="text-[#1a202c] font-sans font-semibold mb-1">U.S.-based team</p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">Strategy, design, copy, and development — all in-house, all in the United States.</p>
                </div>
                <div>
                  <p className="text-orange font-display text-4xl md:text-5xl mb-2">7–10</p>
                  <p className="text-[#1a202c] font-sans font-semibold mb-1">Business-day delivery</p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">A repeatable build framework, refined project after project, that ships fast without cutting corners.</p>
                </div>
                <div>
                  <p className="text-orange font-display text-4xl md:text-5xl mb-2">1</p>
                  <p className="text-[#1a202c] font-sans font-semibold mb-1">Named point of contact</p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">A single, accountable owner from kickoff through launch and beyond. No tickets. No phone trees.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <OfferBreakdownSection />

      <section className="relative overflow-hidden bg-[#f5f5f4] py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 bg-orange/10 text-[#B23E16] px-5 py-2 rounded-full font-sans font-semibold text-sm uppercase tracking-widest mb-6 border border-orange/20">
              <Flag size={16} />
              Proudly American
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">
              100% U.S.-Based. Zero Outsourcing.
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Every person who touches your project — from the first phone call to the final pixel — is a hardworking American who cares about your practice like it's their own.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <ScrollReveal delay={0.1} className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-display text-[#1a202c] mb-2">Built in America</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">Every website is designed, developed, and maintained by our team right here in the United States. No exceptions.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 shadow-lg ring-1 ring-black/10">
                <img src={usaFlagBw} alt="Black and white American flag" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-display text-[#1a202c] mb-2">Nothing Outsourced</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We don't cut corners by sending your work overseas. When we say done-for-you, we mean done by us — personally.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-display text-[#1a202c] mb-2">Americans Helping Americans</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We're proud to be a small American business supporting other small American businesses. Your success strengthens our communities.</p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <section className="bg-[#f5f5f4] py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">Our Core Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex gap-4 items-start">
                <CheckCircle2 className="text-orange flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-display text-[#1a202c] mb-2">{val.title}</h3>
                  <p className="text-gray-600 font-sans leading-relaxed">{val.desc}</p>
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
