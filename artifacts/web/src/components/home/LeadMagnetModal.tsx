import { useEffect, useRef, useState } from "react";
import { X, CheckCircle2, Download, Loader2 } from "lucide-react";

interface LeadMagnetModalProps {
  open: boolean;
  onClose: () => void;
}

const PDF_URL = `${import.meta.env.BASE_URL}website-playbook.pdf`;

export function LeadMagnetModal({ open, onClose }: LeadMagnetModalProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
        ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0]!;
        const last = focusable[focusable.length - 1]!;
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && (active === first || !dialogRef.current.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(focusTimer);
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setFirstName("");
      setEmail("");
      setConsent(true);
      setSubmitting(false);
      setSuccess(false);
      setError(null);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !consent) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName.trim(),
          email: email.trim(),
          consent,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        let serverMessage: string | null = null;
        try {
          const data = await res.json();
          if (data && typeof data.error === "string") {
            serverMessage = data.error;
          }
        } catch {
          // non-JSON response; fall through to generic message
        }
        if (serverMessage) {
          setError(serverMessage);
        } else if (res.status === 429) {
          setError("Too many requests. Please try again in a few minutes.");
        } else {
          setError("Something went wrong. Please try again or email hello@graylockdigital.com.");
        }
        return;
      }
      setSuccess(true);
      try {
        window.open(PDF_URL, "_blank", "noopener,noreferrer");
      } catch {
        // ignore — link is shown in success view
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email hello@graylockdigital.com.");
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-magnet-title"
    >
      <div
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div ref={dialogRef} className="relative w-full max-w-md bg-navy border border-gunmetal rounded-2xl shadow-2xl shadow-black/40 overflow-hidden max-h-[90vh] flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-stone hover:text-offwhite hover:bg-charcoal/60 transition-colors"
          aria-label="Close"
          data-testid="button-close-lead-magnet"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto p-7 sm:p-9">
          {!success ? (
            <>
              <h3 id="lead-magnet-title" className="text-2xl font-display text-offwhite mb-2 leading-snug pr-8">
                Download the Free Guide
              </h3>
              <p className="text-stone font-sans text-sm leading-relaxed mb-6">
                Tell us where to send it. Instant download — and a copy emailed to you for safekeeping.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="lm-first-name" className="block text-stone font-sans text-sm font-semibold mb-1.5">
                    First Name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="lm-first-name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-charcoal border border-gunmetal rounded-lg px-4 py-3 text-offwhite font-sans placeholder:text-stone/40 focus:outline-none focus:border-orange/60 focus:ring-2 focus:ring-orange/20 transition-colors"
                    placeholder="Jane"
                    autoComplete="given-name"
                    data-testid="input-first-name"
                  />
                </div>

                <div>
                  <label htmlFor="lm-email" className="block text-stone font-sans text-sm font-semibold mb-1.5">
                    Email
                  </label>
                  <input
                    id="lm-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-charcoal border border-gunmetal rounded-lg px-4 py-3 text-offwhite font-sans placeholder:text-stone/40 focus:outline-none focus:border-orange/60 focus:ring-2 focus:ring-orange/20 transition-colors"
                    placeholder="you@yourpractice.com"
                    autoComplete="email"
                    data-testid="input-email"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-orange flex-shrink-0"
                    required
                    data-testid="input-consent"
                  />
                  <span className="text-stone/80 font-sans text-xs leading-relaxed">
                    I'd like to receive the guide plus occasional helpful emails from Graylock Digital. Unsubscribe anytime.
                  </span>
                </label>

                {error && (
                  <p className="text-red-400 font-sans text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting || !firstName.trim() || !email.trim() || !consent}
                  className="cta-shimmer w-full inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 disabled:bg-orange/50 disabled:cursor-not-allowed text-white font-sans font-bold px-6 py-3.5 rounded shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_24px_rgba(46,123,180,0.4)] transition-all duration-300"
                  data-testid="button-submit-lead-magnet"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Download size={18} />
                      Send Me the Guide
                    </>
                  )}
                </button>

                <p className="text-stone/50 font-sans text-[11px] leading-relaxed text-center">
                  We respect your inbox. No spam. No selling your data.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center mb-5">
                <CheckCircle2 className="text-orange" size={36} />
              </div>
              <h3 className="text-2xl font-display text-offwhite mb-3 leading-snug">
                Check your inbox — your guide is on the way.
              </h3>
              <p className="text-stone font-sans leading-relaxed mb-6">
                We've emailed your copy. Your download should also have opened in a new tab — if not, grab it here:
              </p>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-shimmer inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-white font-sans font-bold px-6 py-3 rounded shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_24px_rgba(46,123,180,0.4)] transition-all duration-300"
                data-testid="link-download-playbook"
              >
                <Download size={18} />
                Download the Guide
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
