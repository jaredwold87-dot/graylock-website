import { useEffect } from "react";
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
  const { isOpen, industry, utmParams, closeBookCall } = useBookCall();
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
      <DialogContent className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[500px] rounded-none border-0 bg-[#F4F1EC] text-[#0F0F0F] p-8 sm:p-12 gap-0 max-h-[92dvh] overflow-y-auto custom-scrollbar shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <DialogHeader className="mb-8 text-left">
          <DialogTitle className="font-display text-[#0F0F0F] text-3xl sm:text-4xl uppercase tracking-tight leading-none">
            {isWellDriller
              ? "Check My Market Availability"
              : isRealtor
                ? "Book Your Realtor Website Call"
                : "Book Your Discovery Call"}
          </DialogTitle>
          <DialogDescription className="text-[#0F0F0F]/70 font-sans text-base sm:text-lg pt-3 leading-snug">
            Tell us where to reach you and we'll take it from there.
          </DialogDescription>
        </DialogHeader>
        <BookCallForm industry={industry} utmParams={utmParams} variant="modal" />
      </DialogContent>
    </Dialog>
  );
}
