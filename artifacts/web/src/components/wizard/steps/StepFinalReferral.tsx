import { useState } from "react";
import { useWizard } from "../WizardContext";
import { Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/REPLACE";

export function StepFinalReferral() {
  const { data, updateData, setPhase } = useWizard();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    const payload: Record<string, string> = {
      firstName: data.firstName,
      businessName: data.businessName,
      email: data.email,
      hasWebsite: data.hasWebsite ? "Yes" : "No",
    };

    if (data.hasWebsite) {
      payload.websiteUrl = data.websiteUrl;
      payload.primaryGoal = data.primaryGoal;
      if (data.targetCustomer) payload.targetCustomer = data.targetCustomer;
      if (data.brandingNotes) payload.brandingNotes = data.brandingNotes;
    } else {
      payload.businessType = data.businessType;
      payload.businessStage = data.businessStage;
      payload.leadGenMethod = data.leadGenMethod;
      payload.targetCustomer = data.targetCustomer;
    }

    if (data.referralSource) payload.referralSource = data.referralSource;

    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      setPhase("booking");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again, or email us directly at hello@graylockdigital.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
        One last thing
      </h2>
      <p className="text-stone font-sans mb-10">
        You're almost done. Just hit submit and we'll get started on your custom report.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-offwhite font-sans text-sm font-semibold">
            How did you hear about us? <span className="text-stone font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={data.referralSource}
            onChange={(e) => updateData({ referralSource: e.target.value })}
            placeholder="Google, a friend, social media, etc."
            className="bg-charcoal border border-gunmetal rounded-lg p-4 text-offwhite font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-400 font-sans text-sm">{error}</p>
          </div>
        )}

        <div className="bg-navy rounded-xl p-6 border border-gunmetal">
          <h3 className="text-offwhite font-sans font-semibold mb-3">Here's what happens next:</h3>
          <ol className="space-y-2">
            <li className="flex gap-3 text-stone font-sans text-sm">
              <span className="text-orange font-bold">1.</span>
              We review your info and start building your custom growth report.
            </li>
            <li className="flex gap-3 text-stone font-sans text-sm">
              <span className="text-orange font-bold">2.</span>
              You'll book a quick call to walk through the findings together.
            </li>
            <li className="flex gap-3 text-stone font-sans text-sm">
              <span className="text-orange font-bold">3.</span>
              You get a custom homepage mockup — all before paying anything.
            </li>
          </ol>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="mt-2 bg-orange text-white font-sans font-semibold text-lg px-8 py-5 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,99,26,0.25)] hover:shadow-[0_6px_20px_rgba(232,99,26,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Submitting...
            </>
          ) : (
            "Get My Free Report"
          )}
        </button>

        <p className="text-stone/60 text-sm font-sans text-center">
          No credit card. No obligation. We'll build your report for free.
        </p>
      </div>
    </div>
  );
}
