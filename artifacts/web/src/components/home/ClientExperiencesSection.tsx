import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import markNelsonHighlighted from "@/assets/reviews/mark_nelson_highlighted.webp";
import franciscaRangelHighlighted from "@/assets/reviews/francisca_rangel_highlighted.webp";
import franciscaRangelHighlightedExcerpt from "@/assets/reviews/francisca_rangel_highlighted_excerpt.webp";
import nijmaYusufHighlighted from "@/assets/reviews/nijma_yusuf_highlighted.webp";

interface Testimonial {
  name: string;
  image: string;
  previewImage: string;
  transcription: string;
  highlightedText: string;
}

const TESTIMONIALS: Record<string, Testimonial> = {
  francisca: {
    name: "Francisca Rangel",
    image: franciscaRangelHighlighted,
    previewImage: franciscaRangelHighlightedExcerpt,
    highlightedText: "It’s clear that they took the time to understand our business and what we wanted to communicate to our clients.",
    transcription:
      "We couldn’t be happier with our new website! From start to finish, the entire process was professional, creative, and seamless. Tim and his team did an amazing job taking our vision for Interior Finishes Cabinets and Design and turning it into a website that truly represents our brand.\n\nThe new site looks modern, sophisticated, and professional, while showcasing our cabinetry and design work beautifully. We especially love how clean and easy to navigate it is, and the attention to detail throughout the entire website is incredible.\n\nIt’s clear that they took the time to understand our business and what we wanted to communicate to our clients. We feel like our new website finally reflects the quality of the work we provide.\n\nWe highly recommend them to anyone looking for a talented, professional, and creative website designer. Thank you for giving our business a website we’re truly proud to share!",
  },
  mark: {
    name: "Mark Nelson",
    image: markNelsonHighlighted,
    previewImage: markNelsonHighlighted,
    highlightedText: "The lead generation has been amazing, we have been converting leads into actual customers because of this website.",
    transcription:
      "I have been extremely impressed Graylock digital, from the first meeting we had to the launch of our new website and beyond. This company is so professional, well organized, and well informed. The communication was excellent, they listened to my needs and answered my questions. Not only do we have a state of the art, beautiful, easy to use website. The lead generation has been amazing, we have been converting leads into actual customers because of this website. My previous vendor I used for our website platform generated a lot of leads, but no conversions into actual customers. I highly recommend Graylock Digital.",
  },
  nijma: {
    name: "Nijma Yusuf",
    image: nijmaYusufHighlighted,
    previewImage: nijmaYusufHighlighted,
    highlightedText: "It is evident through their work they care about the quality and service they provide.",
    transcription:
      "I have recently worked with Tim and his team to revamp our association website that was severely lacking. It is evident through their work they care about the quality and service they provide. I sent over multiple rounds of edits and questions and never faced any pushback. Tim went above and beyond to ensure our site was the best version it could be. I would recommend this service 10/10 especially relative to their pricing as compared to similar services. Thank you Tim and I will definitely be a customer for life!",
  },
};

export function ClientExperiencesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-14 md:px-12 md:pt-28 md:pb-[4.5rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,32,44,0.055) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E85D26]/50 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#E85D26] md:text-sm">
            Client Experiences
          </p>
          <h2 className="font-display text-4xl leading-tight text-[#1a202c] md:text-5xl">
            Trusted By Business Owners Who Expect More From Their Website.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#1a202c]/70 md:text-lg">
            What our customers have to say
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-[1000px] flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-0 md:items-start relative">
          <div className="md:col-span-6 md:col-start-1 md:mt-12 z-10">
            <ReviewCard testimonial={TESTIMONIALS.francisca} delay={0} />
          </div>
          
          <div className="md:col-span-6 md:col-start-7 z-20">
            <ReviewCard testimonial={TESTIMONIALS.mark} delay={0.1} />
          </div>
          
          <div className="md:col-span-6 md:col-start-4 md:mt-4 lg:mt-2 lg:translate-x-8 z-30">
            <ReviewCard testimonial={TESTIMONIALS.nijma} delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  return (
    <Dialog>
      <ScrollReveal delay={delay}>
        <figure className="relative block group">
          <DialogTrigger asChild>
            <button
              type="button"
              className="block w-full text-left transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F7F5] rounded-lg bg-white shadow-[0_6px_20px_rgba(26,32,44,0.12)] hover:shadow-[0_10px_28px_rgba(26,32,44,0.16)] border border-[#1a202c]/5"
              aria-label={`Enlarge review from ${testimonial.name}`}
            >
              <img
                src={testimonial.previewImage}
                alt={`Google review from ${testimonial.name}`}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </button>
          </DialogTrigger>
          {testimonial.name === "Francisca Rangel" && (
            <p className="mt-3 text-xs text-[#1a202c]/65 text-center">
              Review excerpt · Select to read the full review
            </p>
          )}
          <figcaption className="sr-only">
            <p>Review from {testimonial.name}</p>
            <p>Highlighted quote: {testimonial.highlightedText}</p>
            <p>Full transcription: {testimonial.transcription}</p>
          </figcaption>
        </figure>
      </ScrollReveal>
      <DialogContent className="sm:max-w-4xl p-0 border-none bg-transparent shadow-none [&>button]:text-white [&>button]:bg-black/40 [&>button]:hover:bg-black/60 [&>button]:hover:text-white [&>button]:rounded-full [&>button]:p-2 [&>button]:right-4 [&>button]:top-4 [&>button]:w-10 [&>button]:h-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:z-50 [&>button_svg]:w-6 [&>button_svg]:h-6">
        <DialogTitle className="sr-only">
          Review from {testimonial.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {testimonial.transcription}
        </DialogDescription>
        <div className="max-h-[85vh] overflow-y-auto rounded-lg bg-white relative">
          <img
            src={testimonial.image}
            alt={`Full Google review from ${testimonial.name}`}
            className="w-full h-auto object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}