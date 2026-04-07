import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 relative overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
            Real Results From Real Clients
          </h2>
          <div className="flex justify-center gap-1 text-orange mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between relative">
              <div>
                <Quote className="text-orange/30 mb-4" size={32} />
                <div className="flex gap-1 text-orange mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={14} />)}
                </div>
                <p className="text-stone font-sans italic mb-8 relative z-10 leading-relaxed text-sm">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-orange/60 flex items-center justify-center text-white font-display text-xl shadow-md">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-charcoal text-lg">{test.name}</h4>
                  <p className="text-stone text-sm">{test.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
