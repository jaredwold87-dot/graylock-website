import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBookCall } from "./BookCallContext";
import { BookCallForm } from "./BookCallForm";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";

export function BookCallModal() {
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const { isOpen, industry, utmParams, leadParams, closeBookCall } = useBookCall();
  const isRealtor = industry === "real-estate";
  const isWellDriller = industry === "well-drilling";

  // realtor_form_view — the realtor-context form became visible. The CTA's
  // utm context is passed explicitly: the page URL no longer carries it now
  // that booking CTAs open in place instead of navigating.
  useEffect(() => {
    if (isOpen && isRealtor) {
      trackRealtorEvent("realtor_form_view", utmParams);
    }
    if (isOpen && isWellDriller) {
      trackWellDrillerEvent("well_driller_form_view", utmParams);
    }
  }, [isOpen, isRealtor, isWellDriller, utmParams]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeBookCall()}>
      <DialogContent
        onOpenAutoFocus={() => {
          returnFocusRef.current = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          returnFocusRef.current?.focus({ preventScroll: true });
        }}
        className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[760px] rounded-xl border border-white/15 bg-white text-[#0F0F0F] p-0 gap-0 max-h-[94dvh] overflow-y-auto custom-scrollbar shadow-[0_24px_100px_rgba(0,0,0,0.5)] [&>button]:text-white [&>button]:right-5 [&>button]:top-5">
        <DialogHeader className="px-6 py-5 sm:px-8 text-left bg-[#292B2E] border-b border-[#E85D26]/40">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#EFA17F] mb-2">Your next step · Graylock Digital</p>
          <DialogTitle className="font-display text-white text-2xl sm:text-3xl tracking-tight leading-tight pr-7">
            {isWellDriller
              ? "Let's Build Your Free Custom Demo."
              : isRealtor
                ? "15-Minute Real Estate Website + IDX Fit Call"
                : "Get Your Free Homepage Direction"}
          </DialogTitle>
          <DialogDescription className="text-white/75 font-sans text-sm pt-1 leading-relaxed">
            {isWellDriller
              ? "Tell us a little about the business and what you want the website to do. We will use the conversation to prepare a homepage direction that is actually relevant to your company."
              : isRealtor
                ? "We will review your market, MLS path, current website, team structure, buyer/seller goals, and the right scope before you commit."
                : "Start with a 15-minute fit call. Tell us what you want your website to improve; if Graylock is the right fit, we will create a custom homepage direction before any build fee."}
          </DialogDescription>
        </DialogHeader>
        <div className="p-5 sm:px-8 sm:py-6">
        <BookCallForm
          industry={industry}
          utmParams={utmParams}
          leadParams={leadParams}
          variant="modal"
          compact
        />
        </div>
      </DialogContent>
    </Dialog>
  );
}
