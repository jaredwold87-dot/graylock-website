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

    fetch(
      "https://graylock-os-ymwca.sevalla.app/api/public/leads/99c58e46-33ee-4c7c-ab23-eeb7badcc57b",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({
          name: data.firstName,
          email: data.email,
          phone: data.phone || undefined,
          subject: data.businessName || undefined,
          message: [
            data.primaryGoal && `Goal: ${data.primaryGoal}`,
            data.websiteUrl && `Website: ${data.websiteUrl}`,
            data.serviceArea && `Area: ${data.serviceArea}`,
            data.targetCustomer && `Ideal client: ${data.targetCustomer}`,
            data.brandingNotes && `Branding: ${data.brandingNotes}`,
            data.referralSource && `Heard about us: ${data.referralSource}`,
          ].filter(Boolean).join("\n"),
        }),
      }
    ).catch(() => {});

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
      <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
        One last thing
      </h2>
      <p className="text-slate-600 font-sans mb-10">
        You're almost done. Just hit submit and we'll get started on your custom report.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">
            How did you hear about us? <span className="text-slate-600 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={data.referralSource}
            onChange={(e) => updateData({ referralSource: e.target.value })}
            placeholder="Google, a friend, social media, etc."
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-charcoal font-sans font-semibold mb-3">Here's what happens next:</h3>
          <ol className="space-y-2">
            <li className="flex gap-3 text-slate-600 font-sans text-sm">
              <span className="text-orange font-bold">1.</span>
              We review your info and start building your custom growth report.
            </li>
            <li className="flex gap-3 text-slate-600 font-sans text-sm">
              <span className="text-orange font-bold">2.</span>
              You'll book a quick call to walk through the findings together.
            </li>
            <li className="flex gap-3 text-slate-600 font-sans text-sm">
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

        <p className="text-slate-500 text-sm font-sans text-center">
          No credit card. No obligation. We'll build your report for free.
        </p>
      </div>
    </div>
  );
}
