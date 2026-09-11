import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import markNelsonImage from "@/assets/reviews/mark_nelson.webp";
import franciscaRangelImage from "@/assets/reviews/francisca_rangel.webp";
import nijmaYusufImage from "@/assets/reviews/nijma_yusuf.webp";
import stephenJenningsImage from "@/assets/reviews/stephen_jennings.webp";

interface Testimonial {
  name: string;
  image: string;
  transcription: string;
}

const TESTIMONIALS_COL_1: Testimonial[] = [
  {
    name: "Francisca Rangel",
    image: franciscaRangelImage,
    transcription:
      "We couldn’t be happier with our new website! From start to finish, the entire process was professional, creative, and seamless. Tim and his team did an amazing job taking our vision for Interior Finishes Cabinets and Design and turning it into a website that truly represents our brand.\n\nThe new site looks modern, sophisticated, and professional, while showcasing our cabinetry and design work beautifully. We especially love how clean and easy to navigate it is, and the attention to detail throughout the entire website is incredible.\n\nIt’s clear that they took the time to understand our business and what we wanted to communicate to our clients. We feel like our new website finally reflects the quality of the work we provide.\n\nWe highly recommend them to anyone looking for a talented, professional, and creative website designer. Thank you for giving our business a website we’re truly proud to share!",
  },
  {
    name: "Stephen Jennings",
    image: stephenJenningsImage,
    transcription:
      "Graylock created an amazing website for my new counseling practice that far surpassed my expectations. Tim was great to work with, as was Jameson. Timely responses and very approachable guys. Highly recommend their services!",
  },
];

const TESTIMONIALS_COL_2: Testimonial[] = [
  {
    name: "Mark Nelson",
    image: markNelsonImage,
    transcription:
      "I have been extremely impressed Graylock digital, from the first meeting we had to the launch of our new website and beyond. This company is so professional, well organized, and well informed. The communication was excellent, they listened to my needs and answered my questions. Not only do we have a state of the art, beautiful, easy to use website. The lead generation has been amazing, we have been converting leads into actual customers because of this website. My previous vendor I used for our website platform generated a lot of leads, but no conversions into actual customers. I highly recommend Graylock Digital.",
  },
  {
    name: "Nijma Yusuf",
    image: nijmaYusufImage,
    transcription:
      "I have recently worked with Tim and his team to revamp our association website that was severely lacking. It is evident through their work they care about the quality and service they provide. I sent over multiple rounds of edits and questions and never faced any pushback. Tim went above and beyond to ensure our site was the best version it could be. I would recommend this service 10/10 especially relative to their pricing as compared to similar services. Thank you Tim and I will definitely be a customer for life!",
  },
];

export function ClientExperiencesSection() {
  const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);

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

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            {TESTIMONIALS_COL_1.map((testimonial, index) => (
              <ReviewCard
                key={testimonial.name}
                testimonial={testimonial}
                delay={index * 0.1}
                onClick={() => setSelectedReview(testimonial)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 md:mt-20 lg:mt-32">
            {TESTIMONIALS_COL_2.map((testimonial, index) => (
              <ReviewCard
                key={testimonial.name}
                testimonial={testimonial}
                delay={(index + 2) * 0.1}
                onClick={() => setSelectedReview(testimonial)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedReview} onOpenChange={(open) => !open && setSelectedReview(null)}>
        <DialogContent className="sm:max-w-4xl p-0 border-none bg-transparent shadow-none [&>button]:text-white [&>button]:bg-black/40 [&>button]:hover:bg-black/60 [&>button]:hover:text-white [&>button]:rounded-full [&>button]:p-2 [&>button]:right-4 [&>button]:top-4 [&>button]:w-10 [&>button]:h-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:z-50 [&>button_svg]:w-6 [&>button_svg]:h-6">
          <DialogTitle className="sr-only">
            Review from {selectedReview?.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedReview?.transcription}
          </DialogDescription>
          {selectedReview && (
            <div className="max-h-[85vh] overflow-y-auto rounded-lg bg-white relative">
              <img
                src={selectedReview.image}
                alt={`Google review from ${selectedReview.name}`}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ReviewCard({
  testimonial,
  delay,
  onClick,
}: {
  testimonial: Testimonial;
  delay: number;
  onClick: () => void;
}) {
  return (
    <ScrollReveal delay={delay}>
      <figure className="relative block group">
        <button
          type="button"
          onClick={onClick}
          className="block w-full text-left transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F7F5] rounded-xl bg-white shadow-[0_18px_50px_rgba(26,32,44,0.06)] hover:shadow-[0_22px_60px_rgba(26,32,44,0.12)] border border-[#1a202c]/5"
          aria-label={`Enlarge review from ${testimonial.name}`}
        >
          <img
            src={testimonial.image}
            alt={`Thumbnail of Google review from ${testimonial.name}`}
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </button>
        <figcaption className="sr-only">{testimonial.transcription}</figcaption>
      </figure>
    </ScrollReveal>
  );
}