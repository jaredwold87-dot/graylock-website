import { useEffect, useState, useMemo } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { PromotionCampaign, PromotionVariant } from "@/lib/promotion";
import { X } from "lucide-react";
import { getCountdownState } from "./PromotionCountdownHelper";

const PREVIEW_DEADLINE_TIMESTAMP = Date.parse("2026-10-01T06:59:00Z");

function getHeadlineDate(timestamp: number, timezone?: string): string {
  if (!Number.isFinite(timestamp)) return "September 30";
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone || "UTC",
      month: "long",
      day: "numeric",
    }).format(new Date(timestamp));
  } catch {
    return "September 30";
  }
}

function formatCompactDeadline(timestamp: number, timezone?: string): string {
  if (!Number.isFinite(timestamp)) return "SEPTEMBER 30 • 11:59 PM PT";
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone || "UTC",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
    const parts = formatter.formatToParts(new Date(timestamp));

    let month = "", day = "", hour = "", minute = "", dayPeriod = "", tz = "";
    parts.forEach(p => {
      if (p.type === 'month') month = p.value;
      if (p.type === 'day') day = p.value;
      if (p.type === 'hour') hour = p.value;
      if (p.type === 'minute') minute = p.value;
      if (p.type === 'dayPeriod') dayPeriod = p.value;
      if (p.type === 'timeZoneName') tz = p.value;
    });

    return `${month.toUpperCase()} ${day} • ${hour}:${minute} ${dayPeriod} ${tz}`.toUpperCase();
  } catch {
    return "SEPTEMBER 30 • 11:59 PM PT";
  }
}

interface PromotionPopupProps {
  open: boolean;
  campaign: PromotionCampaign;
  variant: Exclude<PromotionVariant, "control">;
  preview?: boolean;
  serverTimeOffsetMs?: number;
  onDismiss: (dismissalType: "close_button" | "no_thanks" | "escape_key" | "backdrop_click") => void;
  onCta: (label: string) => void;
}

export function PromotionPopup({
  open,
  campaign,
  variant,
  preview = false,
  serverTimeOffsetMs = 0,
  onDismiss,
  onCta,
}: PromotionPopupProps) {
  const [dismissalHandled, setDismissalHandled] = useState(false);

  const hasConfiguredDeadline = Boolean(campaign.endDateTime?.trim());
  const parsedDeadline = hasConfiguredDeadline
    ? Date.parse(campaign.endDateTime ?? "")
    : Number.NaN;
  const hasValidDeadline = Number.isFinite(parsedDeadline);

  const countdownDeadline = hasValidDeadline
    ? parsedDeadline
    : (!hasConfiguredDeadline && preview)
      ? PREVIEW_DEADLINE_TIMESTAMP
      : null;

  const [now, setNow] = useState(() => Date.now() + serverTimeOffsetMs);

  useEffect(() => {
    // Only tick if we have a real deadline to count down to.
    if (!hasValidDeadline) return;
    setNow(Date.now() + serverTimeOffsetMs);
    const interval = window.setInterval(() => {
      setNow(Date.now() + serverTimeOffsetMs);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [hasValidDeadline, serverTimeOffsetMs]);

  const countdown = useMemo(() => {
    // No real countdown for unconfigured preview.
    if (countdownDeadline === null || (!hasConfiguredDeadline && preview)) {
      return { expired: false, showCountdown: false, days: "00", hours: "00", minutes: "00" };
    }
    return getCountdownState(countdownDeadline, now);
  }, [countdownDeadline, now, preview, hasConfiguredDeadline]);

  const savingsLed = variant === "savings_led";
  const effectivelyOpen = open && (hasValidDeadline || preview) && !countdown.expired;

  const dismiss = (
    dismissalType: "close_button" | "no_thanks" | "escape_key" | "backdrop_click",
  ) => {
    if (dismissalHandled) return;
    setDismissalHandled(true);
    onDismiss(dismissalType);
  };

  const termsUrl = campaign.legalTermsUrl;
  const rawDisclosure = "Qualified new projects. Monthly plans start at $199/month. Approved scope and terms apply.";

  const renderDisclosure = () => {
    if (!termsUrl) return rawDisclosure;
    const matchMatch = rawDisclosure.match(/(terms apply)/i);
    if (!matchMatch) return rawDisclosure;
    const parts = rawDisclosure.split(matchMatch[0]);
    return (
      <>
        {parts[0]}
        <a href={termsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#111111]">
          {matchMatch[0]}
        </a>
        {parts.slice(1).join(matchMatch[0])}
      </>
    );
  };

  const configuredDeadlineText = preview
    ? campaign.deadlineDisplayText?.replace(/\s*—\s*preview only/i, "").trim()
    : campaign.deadlineDisplayText?.trim();
  const deadlineDisplayText = (!hasConfiguredDeadline && preview ? "" : configuredDeadlineText) || (countdownDeadline !== null
    ? formatCompactDeadline(countdownDeadline, campaign.timezone)
    : "");

  const headlineDate = countdownDeadline !== null
    ? getHeadlineDate(countdownDeadline, campaign.timezone)
    : "September 30";

  return (
    <DialogPrimitive.Root open={effectivelyOpen} onOpenChange={(nextOpen) => !nextOpen && dismiss("backdrop_click")}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={`fixed inset-0 bg-black/75 duration-200 motion-reduce:animate-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${preview ? "z-[110]" : "z-50"}`} />
        <DialogPrimitive.Content
          onEscapeKeyDown={(event) => {
            event.preventDefault();
            dismiss("escape_key");
          }}
          onPointerDownOutside={() => dismiss("backdrop_click")}
          onInteractOutside={(event) => {
            if (dismissalHandled) event.preventDefault();
          }}
          className={`fixed left-[50%] z-50 grid w-[calc(100vw-16px)] sm:w-[calc(100vw-48px)] max-w-[640px] max-h-[calc(100dvh-48px)] overflow-y-auto translate-x-[-50%] gap-0 bg-[#111111] p-0 text-[#F5F5F0] shadow-[0_32px_120px_-12px_rgba(0,0,0,0.8)] duration-200 motion-reduce:animate-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          bottom-0 sm:bottom-auto top-auto sm:top-[50%] translate-y-0 sm:translate-y-[-50%]
          rounded-t-[20px] sm:rounded-xl border border-white/5
          motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none
          data-[state=closed]:slide-out-to-bottom-2 data-[state=open]:slide-in-from-bottom-2
          ${preview ? "z-[120]" : ""}`}
        >
          {/* Subtle logo watermark */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-[20px] sm:rounded-xl" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}logo-stacked.png`}
              alt=""
              className="absolute right-[-10%] bottom-[-10%] w-[80%] max-w-[500px] opacity-[0.04] grayscale invert"
            />
          </div>

          {/* Top orange strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E85D26] rounded-t-[20px] sm:rounded-t-xl" />

          {/* Top utility row */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-5 pb-3 sm:px-12 sm:pt-6 sm:pb-3">
            <img
              src={`${import.meta.env.BASE_URL}logo-horizontal.png`}
              alt="Graylock Digital"
              className="h-5 sm:h-6 w-auto opacity-90 brightness-0 invert"
            />
            <button
              type="button"
              onClick={() => dismiss("close_button")}
              aria-label="Close promotion"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#111111] -mr-3"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative z-10 px-6 pb-6 sm:px-12 sm:pb-6">
            {/* Eyebrow */}
            <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#F08454]">
              {savingsLed ? "SEPTEMBER BUILD-FEE WAIVER" : "A LOWER-RISK WAY TO START"}
            </p>

            {/* Headline */}
            <DialogPrimitive.Title className="mb-4 font-display text-[34px] leading-[1.05] tracking-tight text-white sm:text-[44px] max-w-[500px]">
              {savingsLed
                ? `Your Build Fee Is $0 Through ${headlineDate}.`
                : "See the Direction First. Pay $0 in Build Fees If You Proceed."}
            </DialogPrimitive.Title>

            {/* Offer lockup */}
            <div className="mb-4 flex flex-col items-start">
              <span className="mb-1 font-sans text-[11px] font-bold uppercase tracking-widest text-white/70">
                BUILD FEE
              </span>
              <div className="font-display text-[64px] sm:text-[80px] leading-none tracking-tight text-[#E85D26] font-semibold mb-2">
                $0
              </div>
              <span className="font-sans text-[13px] font-bold uppercase tracking-wider text-white/90">
                SAVE UP TO $1,499
              </span>
              <span className="mt-1 font-sans text-[11px] text-white/65">Based on your selected plan.</span>
            </div>

            {/* Deadline Row */}
            <div className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#F08454]">
              {countdown.showCountdown ? (
                <span>
                  ENDS IN {countdown.days} DAYS {countdown.hours} HRS {countdown.minutes} MIN
                </span>
              ) : (
                <span>
                  REQUEST BY {deadlineDisplayText}
                </span>
              )}
            </div>

            {/* Supporting copy */}
            <DialogPrimitive.Description className="mb-5 font-sans text-[14px] leading-[1.5] text-white/80 max-w-[480px]">
              {savingsLed ? (
                <>
                  Request your Free Homepage Direction before the deadline. If Graylock is the right fit and you choose to move forward, we will waive the build fee for your approved website scope.
                </>
              ) : (
                <>
                  Start with a 15-minute fit call. If Graylock is the right fit, you will see a custom Homepage Direction before deciding whether to move forward.
                </>
              )}
            </DialogPrimitive.Description>

            {/* CTA Area */}
            <div className="flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={() => onCta("Lock In My $0 Build Fee")}
                className="w-full bg-[#E85D26] px-8 py-3.5 font-sans text-[15px] font-bold tracking-wide text-[#111111] transition-colors hover:bg-[#D94F1C] focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                Lock In My $0 Build Fee
              </button>

              {/* Terms line */}
              <p className="font-sans text-[12px] leading-[1.5] text-white/65 max-w-[480px]">
                {renderDisclosure()}
              </p>

              <button
                type="button"
                onClick={() => dismiss("no_thanks")}
                className="py-1 font-sans text-[13px] text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85D26] focus:ring-offset-2 focus:ring-offset-[#111111] underline decoration-white/30 underline-offset-4"
              >
                Keep browsing
              </button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
