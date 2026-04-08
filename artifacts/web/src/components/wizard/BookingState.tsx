import { useWizard } from "./WizardContext";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const CALENDLY_URL = "";

export function BookingState() {
  const { data, phase, setPhase } = useWizard();

  if (phase === "confirmed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto px-6 py-16 md:py-24 text-center"
      >
        <div className="bg-navy rounded-3xl p-10 md:p-16 border border-gunmetal shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

          <CheckCircle className="text-orange w-20 h-20 mx-auto mb-8 relative z-10" />

          <h2 className="text-4xl md:text-5xl font-display text-offwhite mb-6 relative z-10">
            You're All Set, {data.firstName}!
          </h2>

          <p className="text-stone font-sans text-lg mb-10 relative z-10 max-w-lg mx-auto">
            We're reviewing your info now and will reach out within one business day to schedule your free call. Keep an eye on <span className="text-offwhite font-semibold">{data.email}</span> — that's where we'll reach you.
          </p>

          <div className="bg-charcoal rounded-xl p-6 text-left border border-gunmetal mb-10 relative z-10">
            <h3 className="font-display text-offwhite text-xl mb-4 uppercase tracking-wide">What Happens Next:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-orange font-bold">1.</span>
                <span className="text-stone font-sans">Our team reviews your info and builds your custom report.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold">2.</span>
                <span className="text-stone font-sans">We'll walk you through the findings on your review call.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold">3.</span>
                <span className="text-stone font-sans">You'll receive a custom homepage mockup — completely free.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link href="/how-it-works" className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1">
              See how we build sites <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1">
              Learn about our team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-6 py-12 md:py-20"
    >
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CalendarCheck className="text-orange" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-4">
          We've started building your report, {data.firstName}!
        </h2>
        <p className="text-stone font-sans text-lg max-w-xl mx-auto">
          Book your review call below so we can walk you through the findings together.
        </p>
      </div>

      {CALENDLY_URL ? (
        <div className="bg-navy rounded-2xl border border-gunmetal overflow-hidden mb-8">
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="660"
            frameBorder="0"
            title="Book your review call"
            className="w-full"
          />
        </div>
      ) : (
        <div className="bg-navy rounded-2xl border border-gunmetal p-10 md:p-14 text-center mb-8">
          <CalendarCheck className="text-orange mx-auto mb-6" size={48} />
          <h3 className="text-2xl font-display text-offwhite mb-4">
            We'll reach out to schedule your call
          </h3>
          <p className="text-stone font-sans max-w-md mx-auto mb-8">
            Check your email at <span className="text-offwhite font-semibold">{data.email}</span> — we'll send you a link to book your review call within 1 business day.
          </p>
          <button
            onClick={() => setPhase("confirmed")}
            className="bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,99,26,0.25)] hover:shadow-[0_6px_20px_rgba(232,99,26,0.35)] hover:-translate-y-0.5"
          >
            Got it — I'll check my email
          </button>
        </div>
      )}

      {CALENDLY_URL && (
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setPhase("confirmed")}
            className="bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,99,26,0.25)] hover:shadow-[0_6px_20px_rgba(232,99,26,0.35)] hover:-translate-y-0.5"
          >
            I've booked my call
          </button>
          <button
            onClick={() => setPhase("confirmed")}
            className="text-stone font-sans hover:text-offwhite transition-colors underline underline-offset-4 text-sm"
          >
            Skip for now — I'll book later
          </button>
        </div>
      )}
    </motion.div>
  );
}
