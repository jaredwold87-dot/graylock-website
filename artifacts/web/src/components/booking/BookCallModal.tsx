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

export function BookCallModal() {
  const { isOpen, industry, utmParams, closeBookCall } = useBookCall();
  const isRealtor = industry === "real-estate";

  // realtor_form_view — the realtor-context form became visible. The CTA's
  // utm context is passed explicitly: the page URL no longer carries it now
  // that booking CTAs open in place instead of navigating.
  useEffect(() => {
    if (isOpen && isRealtor) {
      trackRealtorEvent("realtor_form_view", utmParams);
    }
  }, [isOpen, isRealtor, utmParams]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeBookCall()}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[440px] rounded-2xl border-0 bg-white p-6 sm:p-8 gap-0 max-h-[92dvh] overflow-y-auto">
        <DialogHeader className="mb-5 text-left">
          <DialogTitle className="font-display text-charcoal text-2xl sm:text-[1.7rem] uppercase tracking-wide leading-tight">
            {isRealtor ? "Book Your Realtor Website Call" : "Book Your Discovery Call"}
          </DialogTitle>
          <DialogDescription className="text-slate-600 font-sans text-base pt-1">
            Tell us where to reach you and we'll take it from there.
          </DialogDescription>
        </DialogHeader>
        <BookCallForm industry={industry} utmParams={utmParams} variant="modal" />
      </DialogContent>
    </Dialog>
  );
}
