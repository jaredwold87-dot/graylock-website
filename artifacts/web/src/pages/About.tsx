import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { CheckCircle2, User } from "lucide-react";

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
      
      <section className="bg-offwhite py-24 px-6 md:px-12 text-charcoal border-b border-gray-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}about-hero.png)` }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Why We Built Graylock Digital</h1>
            <p className="text-xl font-sans text-gray-600 leading-relaxed text-left md:text-center">
              We spent years watching small service businesses get stuck with outdated, underperforming websites. They either had to spend $10,000 on an agency they couldn't afford, or spend 50 hours trying to figure out WordPress themselves. There was no affordable, done-for-you middle ground. So we built it.
            </p>
          </ScrollReveal>
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
              <h3 className="text-3xl font-display text-offwhite mb-2 uppercase tracking-wide">Jared Wold</h3>
              <p className="text-orange font-sans font-semibold mb-6">Systems & Operations</p>
              <p className="text-stone font-sans leading-relaxed">
                Jared focuses on building the processes, workflows, and technology that power Graylock Digital. He designed the operating system that allows the company to build and maintain websites efficiently at scale, ensuring every site is fast, secure, and reliably updated.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-charcoal p-10 rounded-2xl border border-gunmetal hover:border-gunmetal/80 transition-colors shadow-xl">
              <div className="w-20 h-20 bg-gunmetal rounded-full flex items-center justify-center text-stone mb-6">
                <User size={32} />
              </div>
              <h3 className="text-3xl font-display text-offwhite mb-2 uppercase tracking-wide">Tim Monahan</h3>
              <p className="text-orange font-sans font-semibold mb-6">Client Relations & Growth</p>
              <p className="text-stone font-sans leading-relaxed">
                Tim leads outreach, discovery calls, and client relationships. He's the first person you talk to — and he makes sure every client gets exactly what their business needs from day one. He bridges the gap between your business goals and our technical execution.
              </p>
            </ScrollReveal>
          </div>
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
