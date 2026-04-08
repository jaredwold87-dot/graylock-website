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
    q: "Why do you do this for free?",
    a: "We absorb the upfront cost because our clients stay with us for years — we'd rather prove our value first than ask you to take our word for it. We use a high-converting structural framework, then customize it to your brand, services, and local market. That's how we deliver quality in 5 days. Your homepage demo, evaluation, and written report are built around your actual business, not pulled from a template library. Even if you don't move forward, you walk away with a professional-grade report and a clear picture of what's holding your website back. No strings attached."
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
    q: "How do you build a website in just 5 days?",
    a: "We don't reinvent the wheel for every client. We use a proven, high-converting structural framework — then we customize the design, copy, and SEO strategy entirely around your practice. Think of it like a custom-built home using tested construction methods. The foundation and engineering are proven — but the layout, finishes, and details are designed specifically for you. Not a prefab kit. Not a template. A real website built on a system that works."
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work with any local service business that relies on trust, reputation, and local visibility to grow — accountants, therapists, contractors, consultants, dentists, physicians, lawyers, and more. If that sounds like you, we're a great fit."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
            Common Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-4 mb-10">
          {homepageFaqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div 
                className="bg-white border border-charcoal rounded-lg overflow-hidden cursor-pointer"
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
