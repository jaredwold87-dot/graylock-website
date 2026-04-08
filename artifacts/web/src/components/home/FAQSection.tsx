import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const homepageFaqs = [
  {
    q: "Is the website review really free?",
    a: "Yes, 100%. We evaluate your current website, walk you through what's working and what isn't, and give you clear recommendations — all at no cost. You also receive a comprehensive written PDF report covering competitive analysis, website performance, SEO gaps, and market opportunities. You receive the full report and the custom homepage demo regardless of whether you choose to work with us. There's no hidden fee and no obligation."
  },
  {
    q: "Is the homepage demo actually custom to my business?",
    a: "Absolutely. We don't send you a generic template. We research your business, your market, and your competitors, then design a homepage concept that's specific to you — your brand, your services, your audience."
  },
  {
    q: "Am I obligated to move forward after the call?",
    a: "Not at all. The review, report, and demo are genuinely free. If you love what you see and want to move forward, great. If not, you keep the evaluation insights, the full written report, and the demo concept. We'd rather earn your trust than push a sale."
  },
  {
    q: "What is the business dashboard?",
    a: "It's a simple, private dashboard included with every plan. Solo Practice clients get basic access to view traffic and edit business info. Group Practice and Enterprise plans include full dashboard features — lead activity tracking, announcement banners, update request submission, and performance reports."
  },
  {
    q: "Which plans include dashboard access?",
    a: "All plans include dashboard access. Solo Practice includes basic features (view traffic, edit hours/phone/address). Group Practice and Enterprise plans include full features (announcement banner, lead activity, update requests, performance reports). Custom plans offer a tailored dashboard configuration."
  },
  {
    q: "What do I own, and what happens if I cancel?",
    a: "You own your domain, your written content, your images, and your brand assets — always. Our service is an all-inclusive subscription. We own the code, the design framework, and the hosting infrastructure. If you cancel, we package up all of your content and data, and transfer your domain to wherever you choose — with 30 days' notice and no cancellation fees. You'll never lose your domain authority, your content, or your brand."
  },
  {
    q: "What types of practices do you work with?",
    a: "We specialize in websites for professional practices — attorneys, therapists, CPAs, physicians, and group practices. We understand that your website needs to convey expertise, build trust quickly, and convert visitors into consultations or appointments."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f7] via-[#f7f8fa] to-[#f0f1f3]" />
      <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
            Common Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3 mb-12">
          {homepageFaqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div 
                className={cn(
                  "bg-white/80 backdrop-blur-sm border rounded-xl overflow-hidden cursor-pointer transition-all duration-300",
                  openIndex === i 
                    ? "border-orange/30 shadow-[0_2px_8px_rgba(46,123,180,0.08)]" 
                    : "border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                )}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="font-sans font-semibold text-charcoal text-lg">{faq.q}</h3>
                  <ChevronDown className={cn("text-orange transition-transform duration-300 flex-shrink-0", openIndex === i ? "rotate-180" : "rotate-0")} />
                </div>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === i ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-stone font-sans leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link href="/faq" className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2">
            See all FAQs &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
