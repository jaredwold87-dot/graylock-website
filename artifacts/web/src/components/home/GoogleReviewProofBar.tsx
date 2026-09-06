import { Star } from "lucide-react";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Graylock%20Digital";

export function GoogleReviewProofBar() {
  return (
    <section
      aria-label="Google review rating"
      className="bg-[#151515] border-y border-white/[0.08] px-6 md:px-12 py-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1 text-[#F9C440]"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-offwhite font-sans text-sm md:text-base font-semibold">
            5.0 on Google from 13 ratings
          </p>
        </div>

        <span className="hidden sm:block h-5 w-px bg-white/15" aria-hidden="true" />

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center font-sans text-sm font-semibold text-[#E85D26] underline decoration-[#E85D26]/40 underline-offset-4 transition-colors hover:text-[#F2722F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151515]"
        >
          Read our client reviews →
        </a>
      </div>
    </section>
  );
}