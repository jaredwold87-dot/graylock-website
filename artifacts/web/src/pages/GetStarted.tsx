import { SEO } from "@/components/SEO";
import { WizardProvider, useWizard } from "@/components/wizard/WizardContext";
import { WizardShell } from "@/components/wizard/WizardShell";
import { Step1BasicInfo } from "@/components/wizard/steps/Step1BasicInfo";
import { Step2HasWebsite } from "@/components/wizard/steps/Step2HasWebsite";
import { Step3A_WebsiteUrl } from "@/components/wizard/steps/Step3A_WebsiteUrl";
import { Step4A_PrimaryGoal } from "@/components/wizard/steps/Step4A_PrimaryGoal";
import { Step5A_TargetCustomer } from "@/components/wizard/steps/Step5A_TargetCustomer";
import { Step3B_BusinessType } from "@/components/wizard/steps/Step3B_BusinessType";
import { Step4B_BusinessStage } from "@/components/wizard/steps/Step4B_BusinessStage";
import { Step5B_LeadGen } from "@/components/wizard/steps/Step5B_LeadGen";
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
    if (currentStep === 6) return <StepFinalReferral />;
  }

  if (hasWebsite === false) {
    if (currentStep === 3) return <Step3B_BusinessType />;
    if (currentStep === 4) return <Step4B_BusinessStage />;
    if (currentStep === 5) return <Step5B_LeadGen />;
    if (currentStep === 6) return <StepFinalReferral />;
  }

  return <Step1BasicInfo />;
}

export default function GetStarted() {
  return (
    <>
      <SEO title="Get Your Free Growth Report | Graylock Digital" />
      <section className="bg-charcoal min-h-[80vh]">
        <WizardProvider>
          <WizardShell>
            <WizardContent />
          </WizardShell>
        </WizardProvider>
      </section>
    </>
  );
}
