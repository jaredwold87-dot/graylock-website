import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function TestimonialSection() {
  const testimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1 text-orange mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="card-glow gradient-border bg-navy/80 p-8 rounded-xl border border-gunmetal/50 flex flex-col justify-between relative">
              <div>
                <Quote className="text-orange/20 mb-4" size={32} />
                <p className="text-stone font-sans italic mb-8 relative z-10 leading-relaxed">
                  {test.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gunmetal/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-orange/60 flex items-center justify-center text-white font-display text-xl shadow-lg shadow-orange/20">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-offwhite text-lg">{test.name}</h4>
                  <p className="text-stone text-sm">{test.title} • {test.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
