import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { CheckCircle2, User, Heart, Handshake, Search, Shield, MapPin, Flag } from "lucide-react";

export default function About() {
  const values = [
    { title: "Done-For-You", desc: "We don't sell tools, we sell results. We take the burden entirely off your plate." },
    { title: "Transparent", desc: "No hidden fees, no confusing jargon, and no holding your digital assets hostage." },
    { title: "Fast", desc: "Professional practice clients can't wait 6–10 weeks. We built a process that delivers custom sites in 7–10 business days without cutting corners. Our structured process, proven build framework, and experienced team make this possible. Larger or more complex builds may take longer." },
    { title: "Relationship-Driven", desc: "We aren't a faceless platform. You always know exactly who is working on your site." }
  ];

  return (
    <>
      <SEO title="About Graylock Digital | Professional Practice Website Specialists" description="Graylock Digital builds custom websites for private practices and accounting firms — therapists, dentists, physicians, CPAs, and more. Delivered in 7–10 business days. No long-term contracts." />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-about.png)` }}
        />
        <div className="absolute inset-0 bg-charcoal/75" />
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

      <section className="bg-navy py-20 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Why We Built Graylock Digital</p>
            <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-6">The Middle Ground That Did Not Exist</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-charcoal rounded-2xl border border-gunmetal p-8 md:p-10">
              <p className="text-stone font-sans text-lg leading-relaxed mb-5">
                We kept meeting practice owners with great reputations and embarrassing websites — therapists with full waiting lists, CPAs with loyal books, dentists with five-star reviews — all losing prospective clients online before they ever had a chance to help them.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed mb-5">
                Their options were brutal: pay an agency $10,000–$20,000 upfront and wait three months for a result they could not predict, or fight with Squarespace on weekends between client sessions.
              </p>
              <p className="text-offwhite font-sans text-lg leading-relaxed">
                There was no affordable, done-for-you middle ground for professional practices. So we built it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">We Only Work With Practices We Genuinely Want to See Win</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-navy rounded-2xl border border-gunmetal p-8 md:p-12 mb-10">
              <p className="text-offwhite font-sans text-lg md:text-xl leading-relaxed mb-6">
                We don't take on every practice that comes our way. We look for therapists, physicians, dentists, and CPAs where we know — not hope, <em className="text-orange not-italic font-semibold">know</em> — that a better website will directly impact their ability to serve more clients.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed mb-6">
                When a therapist loses a prospective client because their site looked outdated, or a group practice can't fill an open clinician's caseload because they don't show up on Google — those are the moments we're solving for.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed">
                Your growth is our portfolio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.15} className="bg-navy/50 rounded-xl border border-gunmetal p-6 text-center">
              <Search className="text-orange mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-offwhite mb-2">We Seek You Out</h3>
              <p className="text-stone font-sans text-sm leading-relaxed">We actively look for practices where a new site will make a measurable difference — not just anyone willing to pay.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="bg-navy/50 rounded-xl border border-gunmetal p-6 text-center">
              <Heart className="text-orange mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-offwhite mb-2">Your Success Is Personal</h3>
              <p className="text-stone font-sans text-sm leading-relaxed">We don't disappear after launch. We stay invested because watching our clients grow is genuinely the best part of this work.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.35} className="bg-navy/50 rounded-xl border border-gunmetal p-6 text-center">
              <Handshake className="text-orange mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-offwhite mb-2">Partners, Not Vendors</h3>
              <p className="text-stone font-sans text-sm leading-relaxed">We think of ourselves as part of your team. When you win, we win. It's that simple.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite">Meet the Team</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1} className="bg-charcoal p-10 rounded-2xl border border-gunmetal hover:border-gunmetal/80 transition-colors shadow-xl">
              <div className="w-20 h-20 bg-gunmetal rounded-full flex items-center justify-center text-stone mb-6">
                <User size={32} />
              </div>
              <h3 className="text-3xl font-display text-offwhite mb-2 uppercase tracking-wide">Jared</h3>
              <p className="text-orange font-sans font-semibold mb-6">Systems & Operations</p>
              <p className="text-stone font-sans leading-relaxed">
                Jared designed and built the operating system that powers Graylock Digital. He handles every website build, the technology infrastructure behind our process, and the proprietary tools that let us deliver custom professional practice websites in days, not months.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="bg-charcoal p-10 rounded-2xl border border-gunmetal hover:border-gunmetal/80 transition-colors shadow-xl">
              <div className="w-20 h-20 bg-gunmetal rounded-full flex items-center justify-center text-stone mb-6">
                <User size={32} />
              </div>
              <h3 className="text-3xl font-display text-offwhite mb-2 uppercase tracking-wide">Tim</h3>
              <p className="text-orange font-sans font-semibold mb-6">Client Relations & Growth</p>
              <p className="text-stone font-sans leading-relaxed">
                Tim leads all client discovery, proposals, and account relationships. He's the first person you talk to and the person you'll always be able to reach. His background in professional services outreach means he understands what private practices and accounting firms actually need from a web partner.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25} className="mt-10">
            <div className="bg-charcoal/50 rounded-xl border border-gunmetal p-6 text-center max-w-3xl mx-auto">
              <p className="text-stone font-sans leading-relaxed">
                For specialized projects, we collaborate with a trusted network of U.S.-based professionals who share our standards and commitment to client outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-offwhite py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 bg-blue-900/10 text-blue-800 px-5 py-2 rounded-full font-sans font-semibold text-sm uppercase tracking-widest mb-6 border border-blue-200">
              <Flag size={16} />
              Proudly American
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
              100% U.S.-Based. Zero Outsourcing.
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Every person who touches your project — from the first phone call to the final pixel — is a hardworking American who cares about your practice like it's their own.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <ScrollReveal delay={0.1} className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-display text-charcoal mb-2">Built in America</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">Every website is designed, developed, and maintained by our team right here in the United States. No exceptions.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="text-center">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-display text-charcoal mb-2">Nothing Outsourced</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We don't cut corners by sending your work overseas. When we say done-for-you, we mean done by us — personally.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-display text-charcoal mb-2">Americans Helping Americans</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">We're proud to be a small American business supporting other small American businesses. Your success strengthens our communities.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.35}>
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 md:p-10 text-center shadow-xl">
              <p className="text-white font-sans text-lg md:text-xl leading-relaxed italic">
                "We started Graylock because we saw too many hardworking practice owners getting left behind online. These are the people who show up early, stay late, and take care of their clients. They deserve a website that works as hard as they do — and a team that actually gives a damn."
              </p>
              <p className="text-blue-200 font-sans font-semibold mt-4 text-sm uppercase tracking-widest">— The Graylock Team</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">Our Core Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex gap-4 items-start">
                <CheckCircle2 className="text-orange flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-display text-charcoal mb-2">{val.title}</h3>
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
