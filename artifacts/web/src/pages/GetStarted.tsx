import { SEO } from "@/components/SEO";
import { ElevatedHero } from "@/components/ui/ElevatedHero";
import getStartedHeroBg from "@/assets/get-started-hero-bg.webp";
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
      <SEO title="Get Your Free Custom Homepage Demo | Graylock Digital" description="Book a free 15-minute discovery call with Tim and get a custom homepage demo for your practice — before you spend a dollar. No obligation, no pressure." url="https://graylockdigital.com/get-started" />
      <ElevatedHero
        lines={[
          { text: "Let's Get" },
          { text: "Your Site" },
          { text: "Started.", accent: true },
        ]}
        subheadline="This is the easy part. Fill out the form below and we'll take it from here."
        backgroundImage={getStartedHeroBg}
      />
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
