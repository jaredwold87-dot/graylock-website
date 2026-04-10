import { useState } from "react";
import { useWizard } from "../WizardContext";
import { Loader2 } from "lucide-react";

export function StepFinalReferral() {
  const { data, updateData, setPhase } = useWizard();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const payload = {
      first_name: data.firstName,
      business_name: data.businessName,
      email: data.email,
      phone: data.phone || "",
      service_area: data.serviceArea || "",
      has_website: !!data.hasWebsite,
      website_url: data.websiteUrl || "",
      primary_goal: data.primaryGoal || "",
      ideal_customer: data.targetCustomer || "",
      branding_notes: data.brandingNotes || "",
      heard_about_us: data.referralSource || "",
    };

    try {
      await fetch(`${import.meta.env.BASE_URL || "/"}api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    setPhase("booking");
    setIsSubmitting(false);
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
          className="mt-2 bg-orange text-white font-sans font-semibold text-lg px-8 py-5 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_20px_rgba(46,123,180,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
