import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart, Flag } from "lucide-react";
import { Link } from "wouter";

export function MissionBlurb() {
  return (
    <section className="bg-charcoal py-20 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-6 leading-tight">
              We Only Work With Businesses We Genuinely Want to See Win
            </h2>
            <p className="text-stone font-sans text-lg leading-relaxed mb-6">
              We're not trying to work with everyone. We look for dedicated practice owners who deserve a website that matches the quality of their work — and we pour everything we have into making that happen.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              When your phone starts ringing more, when clients tell you they found you online, when you're no longer embarrassed to share your URL — that's our win too.
            </p>
            <Link href="/about">
              <span className="text-orange font-sans font-semibold hover:underline cursor-pointer">
                Read our full story &rarr;
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5">
              <div className="bg-navy rounded-xl border border-gunmetal p-6 flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-orange" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-display text-offwhite mb-1">Your Success Is Personal</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">We don't disappear after launch. We stay invested in your growth because watching our clients succeed is genuinely the best part of this work.</p>
                </div>
              </div>
              <div className="bg-navy rounded-xl border border-gunmetal p-6 flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-800/30">
                  <Flag className="text-blue-400" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-display text-offwhite mb-1">100% American Team</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">Every person who touches your project is based in the United States. Nothing is outsourced. We're proud American professionals helping fellow professionals grow.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
