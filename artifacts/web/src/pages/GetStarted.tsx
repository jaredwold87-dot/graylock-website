import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WizardProvider, useWizard } from "@/components/wizard/WizardContext";
import { WizardShell } from "@/components/wizard/WizardShell";
import { Step1BasicInfo } from "@/components/wizard/steps/Step1BasicInfo";
import { Step2HasWebsite } from "@/components/wizard/steps/Step2HasWebsite";
import { Step3A_WebsiteUrl } from "@/components/wizard/steps/Step3A_WebsiteUrl";
import { Step4A_PrimaryGoal } from "@/components/wizard/steps/Step4A_PrimaryGoal";
import { Step5A_TargetCustomer } from "@/components/wizard/steps/Step5A_TargetCustomer";
import { Step6A_Branding } from "@/components/wizard/steps/Step6A_Branding";
import { Step3B_BusinessType } from "@/components/wizard/steps/Step3B_BusinessType";
import { Step4B_BusinessStage } from "@/components/wizard/steps/Step4B_BusinessStage";
import { Step5B_LeadGen } from "@/components/wizard/steps/Step5B_LeadGen";
import { Step6B_TargetCustomer } from "@/components/wizard/steps/Step6B_TargetCustomer";
import { StepFinalReferral } from "@/components/wizard/steps/StepFinalReferral";
import { BookingState } from "@/components/wizard/BookingState";

function WizardContent() {
  const { currentStep, data, phase } = useWizard();

  if (phase === "booking" || phase === "confirmed") {
    return <BookingState />;
  }

  const hasWebsite = data.hasWebsite;

  if (currentStep === 1) return <Step1BasicInfo />;
  if (currentStep === 2) return <Step2HasWebsite />;

  if (hasWebsite === true) {
    if (currentStep === 3) return <Step3A_WebsiteUrl />;
    if (currentStep === 4) return <Step4A_PrimaryGoal />;
    if (currentStep === 5) return <Step5A_TargetCustomer />;
    if (currentStep === 6) return <Step6A_Branding />;
    if (currentStep === 7) return <StepFinalReferral />;
  }

  if (hasWebsite === false) {
    if (currentStep === 3) return <Step3B_BusinessType />;
    if (currentStep === 4) return <Step4B_BusinessStage />;
    if (currentStep === 5) return <Step5B_LeadGen />;
    if (currentStep === 6) return <Step6B_TargetCustomer />;
    if (currentStep === 7) return <StepFinalReferral />;
  }

  return <Step1BasicInfo />;
}

export default function GetStarted() {
  return (
    <>
      <SEO title="Get Your Free Website Evaluation | Graylock Digital" description="Book a free 20-minute call with Tim and get a custom homepage demo for your business — before you spend a dollar. No obligation, no pressure." url="https://graylockdigital.com/get-started" />
      <section className="bg-white pt-28 md:pt-32 pb-6 px-6 md:px-12 border-b border-slate-200">
        <div className="max-w-3xl mx-auto mb-6">
          <Breadcrumbs
            variant="light"
            items={[
              { name: "Home", path: "/" },
              { name: "Get Started", path: "/get-started" },
            ]}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-xs mb-3">Free Demo</p>
          <h1 className="text-3xl md:text-5xl font-display text-charcoal mb-4 leading-tight">
            See Exactly What Your Website Could Become — Before You Spend a Dollar
          </h1>
          <p className="text-slate-600 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3">
            Tell us a little about your business and we'll get back to you within 1 business day to schedule your free 20-minute review and homepage demo.
          </p>
          <p className="text-slate-500 font-sans text-sm">
            Takes about 2 minutes · No commitment · We never share your info
          </p>
        </div>
      </section>
      <section className="bg-white min-h-[60vh]">
        <WizardProvider>
          <WizardShell>
            <WizardContent />
          </WizardShell>
        </WizardProvider>
        <div className="max-w-2xl mx-auto px-6 pb-12 text-center">
          <p className="text-slate-500 text-sm font-sans">
            Prefer to email us? Reach out at{" "}
            <a href="mailto:hello@graylockdigital.com" className="text-orange hover:underline">
              hello@graylockdigital.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
