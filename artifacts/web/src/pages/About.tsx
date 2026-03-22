import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { CheckCircle2, User, Heart, Handshake, Search, Shield, MapPin, Flag } from "lucide-react";

export default function About() {
  const values = [
    { title: "Done-For-You", desc: "We don't sell tools, we sell results. We take the burden entirely off your plate." },
    { title: "Transparent", desc: "No hidden fees, no confusing jargon, and no holding your digital assets hostage." },
    { title: "Fast", desc: "We value momentum. A good website launched this week beats a perfect website launched next year." },
    { title: "Relationship-Driven", desc: "We aren't a faceless platform. You always know exactly who is working on your site." }
  ];

  return (
    <>
      <SEO title="About Us | Graylock Digital" />
      
      <section className="bg-offwhite py-24 px-6 md:px-12 text-charcoal border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Why We Built Graylock Digital</h1>
            <p className="text-xl font-sans text-gray-600 leading-relaxed text-left md:text-center">
              We spent years watching small service businesses get stuck with outdated, underperforming websites. They either had to spend $10,000 on an agency they couldn't afford, or spend 50 hours trying to figure out WordPress themselves. There was no affordable, done-for-you middle ground. So we built it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 px-6 md:px-12 border-t border-gunmetal">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">We Only Work With Businesses We Genuinely Want to See Win</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-navy rounded-2xl border border-gunmetal p-8 md:p-12 mb-10">
              <p className="text-offwhite font-sans text-lg md:text-xl leading-relaxed mb-6">
                This isn't a volume play. We don't take on every business that comes our way. We look for small service businesses where we know — not hope, <em className="text-orange not-italic font-semibold">know</em> — that a better website will change their trajectory.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed mb-6">
                When a local contractor is losing bids because their site looks like it was built in 2008, or a therapist can't fill their practice because their website doesn't show up on Google — those are the businesses we seek out. Not because they're the biggest contracts, but because we can see exactly how to help them.
              </p>
              <p className="text-stone font-sans text-lg leading-relaxed">
                We measure our success by yours. When your phone starts ringing more, when you're booking more appointments, when you stop being embarrassed to share your website — that's what drives us. Your growth is our portfolio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.15} className="bg-navy/50 rounded-xl border border-gunmetal p-6 text-center">
              <Search className="text-orange mx-auto mb-4" size={28} />
              <h3 className="text-lg font-display text-offwhite mb-2">We Seek You Out</h3>
              <p className="text-stone font-sans text-sm leading-relaxed">We actively look for businesses where a new site will make a measurable difference — not just anyone willing to pay.</p>
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
            <h2 className="text-3xl md:text-5xl font-display text-offwhite">Meet the Founders</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1} className="bg-charcoal p-10 rounded-2xl border border-gunmetal hover:border-gunmetal/80 transition-colors shadow-xl">
              <div className="w-20 h-20 bg-gunmetal rounded-full flex items-center justify-center text-stone mb-6">
                <User size={32} />
              </div>
              <h3 className="text-3xl font-display text-offwhite mb-2 uppercase tracking-wide">Jared</h3>
              <p className="text-orange font-sans font-semibold mb-6">Systems & Operations</p>
              <p className="text-stone font-sans leading-relaxed">
                Jared focuses on building the processes, workflows, and technology that power Graylock Digital. He designed the operating system that allows the company to build and maintain websites efficiently at scale, ensuring every site is fast, secure, and reliably updated.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-charcoal p-10 rounded-2xl border border-gunmetal hover:border-gunmetal/80 transition-colors shadow-xl">
              <div className="w-20 h-20 bg-gunmetal rounded-full flex items-center justify-center text-stone mb-6">
                <User size={32} />
              </div>
              <h3 className="text-3xl font-display text-offwhite mb-2 uppercase tracking-wide">Tim</h3>
              <p className="text-orange font-sans font-semibold mb-6">Client Relations & Growth</p>
              <p className="text-stone font-sans leading-relaxed">
                Tim leads outreach, discovery calls, and client relationships. He's the first person you talk to — and he makes sure every client gets exactly what their business needs from day one. He bridges the gap between your business goals and our technical execution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-offwhite py-24 px-6 md:px-12" style={{ borderTop: '4px solid #1d4ed8' }}>
        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

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
              Every person who touches your project — from the first phone call to the final pixel — is a hardworking American who cares about your business like it's their own.
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
                "We started Graylock because we saw too many hardworking business owners getting left behind online. These are the people who show up early, stay late, and take care of their customers. They deserve a website that works as hard as they do — and a team that actually gives a damn."
              </p>
              <p className="text-blue-200 font-sans font-semibold mt-4 text-sm uppercase tracking-widest">— Jared & Tim, Founders</p>
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
