import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { useBookCall } from "@/components/booking/BookCallContext";
import { CONTACT_PHONE_TEL } from "@/lib/contact";

export function MobileContactBar() {
  const { isOpen } = useBookCall();
  const [separator, setSeparator] = useState("?");

  useEffect(() => {
    // Apple's Messages app uses &body; Android SMS apps use ?body.
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) setSeparator("&");
    document.body.classList.add("home-mobile-contact");
    return () => document.body.classList.remove("home-mobile-contact");
  }, []);

  return (
    <>
      <div className="h-[calc(80px+env(safe-area-inset-bottom))] md:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick contact"
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-[#0F0F0F] px-3 pt-3 md:hidden ${isOpen ? "invisible" : ""}`}
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-2">
          <CTAButton href="/get-started" className="min-h-12 flex-1 px-2 py-3 text-sm tracking-normal">
            Free Homepage Demo
          </CTAButton>
          <a
            href={`sms:${CONTACT_PHONE_TEL}${separator}body=${encodeURIComponent("Graylock Digital. Website inquiry: ")}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/40 px-4 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange"
          >
            <MessageSquare size={18} aria-hidden="true" />
            Text Us
          </a>
        </div>
      </nav>
    </>
  );
}
