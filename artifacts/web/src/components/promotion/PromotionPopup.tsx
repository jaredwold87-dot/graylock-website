import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
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
  const rawDeadline = getPromotionDeadline(campaign, preview);
  const deadline = rawDeadline.replace(/\s*—\s*preview only/i, "");
  const hasDeadline = Boolean(deadline);
  const buildFee = campaign.standardBuildFeeDisplayValue
    ?.trim()
    .replace(/^from\s+/i, "") || "$799";
  const savingsLed = variant === "savings_led";

  if (!open) return null;

  const dismiss = (
    dismissalType: "close_button" | "no_thanks" | "escape_key" | "backdrop_click",
  ) => {
    if (dismissalHandled) return;
    setDismissalHandled(true);
    onDismiss(dismissalType);
  };

  const termsUrl = campaign.legalTermsUrl;
  const rawDisclosure = "Applicable monthly plan, approved scope, and terms apply.";

  const renderDisclosure = () => {
    if (!termsUrl) return rawDisclosure;
    const matchMatch = rawDisclosure.match(/(terms apply)/i);
    if (!matchMatch) return rawDisclosure;
    const parts = rawDisclosure.split(matchMatch[0]);
    return (
      <>
        {parts[0]}
        <a href={termsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[#1A1A1A]/30 underline-offset-2 hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#F7F5F0]">
          {matchMatch[0]}
        </a>
        {parts.slice(1).join(matchMatch[0])}
      </>
    );
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(nextOpen) => !nextOpen && dismiss("backdrop_click")}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={`fixed inset-0 bg-[#0A0A0A]/75 backdrop-blur-[2px] duration-200 motion-reduce:animate-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${preview ? "z-[110]" : "z-50"}`} />
        <DialogPrimitive.Content
          onEscapeKeyDown={(event) => {
            event.preventDefault();
            dismiss("escape_key");
          }}
          onPointerDownOutside={() => dismiss("backdrop_click")}
          onInteractOutside={(event) => {
            if (dismissalHandled) event.preventDefault();
          }}
          className={`fixed left-[50%] z-50 grid w-[calc(100vw-20px)] sm:w-[calc(100vw-48px)] max-w-[720px] max-h-[calc(100dvh-48px)] overflow-y-auto translate-x-[-50%] gap-0 border border-[#1A1A1A]/10 bg-[#F7F5F0] p-0 text-[#1A1A1A] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.5)] duration-200 motion-reduce:animate-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          bottom-0 sm:bottom-auto top-auto sm:top-[50%] translate-y-0 sm:translate-y-[-50%]
          rounded-t-[20px] sm:rounded-xl
          motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none
          data-[state=closed]:slide-out-to-bottom-2 data-[state=open]:slide-in-from-bottom-2
          ${preview ? "z-[120]" : ""}`}
        >
          {/* Top utility row */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 sm:px-12 sm:pt-6 sm:pb-3">
            <div className="font-display text-sm font-bold tracking-tight text-[#1A1A1A]">
              GRAYLOCK DIGITAL
            </div>
            <button
              type="button"
              onClick={() => dismiss("close_button")}
              aria-label="Close promotion"
               className="flex h-11 w-11 items-center justify-center rounded-full text-[#1A1A1A] transition-colors hover:bg-black/5 hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#F7F5F0] -mr-3"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="px-6 pb-6 sm:px-12 sm:pb-8">
            {/* Eyebrow */}
            <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#B23E16]">
              {savingsLed ? "SEPTEMBER BUILD-FEE WAIVER" : "A LOWER-RISK WAY TO START"}
            </p>

            {/* Headline */}
            <DialogPrimitive.Title className="mb-5 font-display text-[38px] leading-[1.02] tracking-tight text-[#1A1A1A] sm:text-[56px] max-w-[600px]">
              {savingsLed
                ? `Your ${buildFee} Build Fee Is On Us This Month.`
                : "See the Direction First. Build Fee Waived If You Proceed."}
            </DialogPrimitive.Title>

            {/* Build-fee value display */}
            <div className="mb-5 flex flex-col items-start border-l-2 border-[#E85D26] pl-5 sm:pl-6">
              <span className="mb-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">
                Standard Build Fee
              </span>
              <div className="flex items-center gap-4 font-display text-[52px] leading-tight sm:text-[64px] font-medium tracking-tight">
                <span className="relative text-[#1A1A1A]">
                  {buildFee}
                  <span className="absolute left-[-5%] top-[50%] h-[3px] w-[110%] -translate-y-1/2 -rotate-6 bg-[#E85D26]"></span>
                </span>
                <span className="text-[#1A1A1A]/30">→</span>
                <span className="text-[#E85D26]">$0</span>
              </div>
              <span className="mt-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">
                Waived This Month
              </span>
            </div>

            {/* Supporting copy */}
            <DialogPrimitive.Description className="mb-3 font-sans text-[15px] leading-[1.5] text-[#1A1A1A]/80 max-w-[600px]">
              {savingsLed ? (
                <>
                  Request your Free Homepage Direction {hasDeadline ? `by ${deadline}` : ""}. If Graylock is the right fit and you choose to move forward, we will waive the standard build fee for your approved website scope.
                </>
              ) : (
                <>
                  Start with a 15-minute fit call. If Graylock is the right fit, you will see a custom Homepage Direction before deciding. {hasDeadline ? `Request by ${deadline} to receive the standard build-fee waiver if you move forward.` : "Receive the standard build-fee waiver if you move forward."}
                </>
              )}
            </DialogPrimitive.Description>

            {/* Terms */}
            <p className="mb-5 font-sans text-xs leading-[1.5] text-[#57534C]">
              {hasDeadline && `Valid through ${deadline}. `}
              {renderDisclosure()}
            </p>

            {/* CTA Area */}
            <div className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() => onCta("Get My Free Homepage Direction")}
                className="w-full bg-[#E85D26] px-5 py-3.5 font-sans text-sm font-bold tracking-wide text-[#171717] transition-colors hover:bg-[#D94F1C] focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#F7F5F0]"
              >
                Get My Free Homepage Direction
              </button>
              <button
                type="button"
                onClick={() => dismiss("no_thanks")}
                className="w-full sm:w-auto px-4 py-2 font-sans text-sm font-medium text-[#1A1A1A]/60 underline decoration-[#1A1A1A]/30 underline-offset-4 transition-colors hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#F7F5F0]"
              >
                Not now
              </button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
