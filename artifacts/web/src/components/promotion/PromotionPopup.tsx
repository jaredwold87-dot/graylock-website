import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PromotionCampaign, PromotionVariant } from "@/lib/promotion";
import { getPromotionDeadline } from "@/lib/promotion";
import { X } from "lucide-react";

interface PromotionPopupProps {
  open: boolean;
  campaign: PromotionCampaign;
  variant: Exclude<PromotionVariant, "control">;
  preview?: boolean;
  onDismiss: (dismissalType: "close_button" | "no_thanks" | "escape_key" | "backdrop_click") => void;
  onCta: (label: string) => void;
}

export function PromotionPopup({
  open,
  campaign,
  variant,
  preview = false,
  onDismiss,
  onCta,
}: PromotionPopupProps) {
  const [dismissalHandled, setDismissalHandled] = useState(false);
  const deadline = getPromotionDeadline(campaign, preview);
  const hasDeadline = Boolean(deadline);
  const buildFee = campaign.standardBuildFeeDisplayValue
    ?.trim()
    .replace(/^from\s+/i, "");
  const savingsLed = variant === "savings_led";

  if (!open) return null;

  const dismiss = (
    dismissalType: "close_button" | "no_thanks" | "escape_key" | "backdrop_click",
  ) => {
    if (dismissalHandled) return;
    setDismissalHandled(true);
    onDismiss(dismissalType);
  };

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && dismiss("backdrop_click")}>
      <DialogContent
        onEscapeKeyDown={(event) => {
          event.preventDefault();
          dismiss("escape_key");
        }}
        onPointerDownOutside={() => dismiss("backdrop_click")}
        onInteractOutside={(event) => {
          // The pointer handler above records the reason.  Keep Radix's normal
          // dismissal behavior while preventing an accidental second event.
          if (dismissalHandled) event.preventDefault();
        }}
        className={`w-[calc(100%-2rem)] max-w-[520px] rounded-t-2xl sm:rounded-xl border border-[#E85D26]/45 bg-[#292B2E] p-0 text-white shadow-[0_24px_100px_rgba(0,0,0,0.6)] bottom-0 top-auto translate-x-[-50%] translate-y-0 data-[state=open]:slide-in-from-bottom-3 data-[state=closed]:slide-out-to-bottom-3 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=closed]:slide-out-to-bottom-0 [&>button]:hidden ${preview ? "z-[120]" : ""}`}
      >
        <div className="absolute right-4 top-4 z-10">
          <button
            type="button"
            onClick={() => dismiss("close_button")}
            aria-label="Close promotion"
            className="rounded-sm p-1 text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#292B2E]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <DialogHeader className="border-b border-white/10 px-6 pb-5 pt-7 text-left sm:px-9 sm:pt-8">
          {preview && (
            <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.17em] text-[#EFA17F]">
              Preview only — no request will be sent
            </p>
          )}
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EFA17F]">
            {savingsLed ? "LIMITED-TIME GRAYLOCK OFFER" : "A LOWER-RISK WAY TO START"}
          </p>
          <DialogTitle className="pr-6 font-display text-3xl leading-[1.02] tracking-tight text-white sm:text-[2.55rem]">
            {savingsLed
              ? "This Month, We’re Waiving Standard Website Build Fees."
              : "See Your Homepage Direction This Month. Your Standard Build Fee Is Waived If You Move Forward."}
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 py-5 sm:px-9 sm:py-7">
          <DialogDescription className="font-sans text-base leading-relaxed text-white/78">
            {savingsLed ? (
              <>
                {hasDeadline
                  ? <>Request your Free Homepage Direction by {deadline}. </>
                  : <>Request your Free Homepage Direction. </>}
                If Graylock is
                the right fit and you choose to move forward, we will waive the
                standard build fee for your approved website scope.
              </>
            ) : (
              <>
                Start with a 15-minute fit call. If Graylock is the right fit, you
                will see a custom Homepage Direction before deciding whether to move
                forward.
                {hasDeadline && (
                  <> Request by {deadline} to receive the standard build-fee waiver if you proceed.</>
                )}
              </>
            )}
          </DialogDescription>
          {buildFee && (
            <p className="mt-4 font-sans text-sm text-white/65">
              Standard build fees currently begin at {buildFee}.
            </p>
          )}
          <p className="mt-5 border-t border-white/10 pt-4 font-sans text-xs leading-relaxed text-white/60">
            {campaign.monthlyPlanDisclosure || "Applicable monthly plan, scope, and terms apply."}{" "}
            {hasDeadline && <>Offer ends {deadline}.</>}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => onCta("Get My Free Homepage Direction")}
              className="w-full bg-[#E85D26] px-5 py-3.5 font-sans text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#D94F1C] focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#292B2E]"
            >
              Get My Free Homepage Direction
            </button>
            <button
              type="button"
              onClick={() => dismiss("no_thanks")}
              className="mx-auto px-3 py-1 font-sans text-sm text-white/65 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#292B2E]"
            >
              No thanks
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}