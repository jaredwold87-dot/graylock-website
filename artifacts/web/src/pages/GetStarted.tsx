import { useEffect, useMemo, useRef } from "react";
import { useSearch } from "wouter";
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
import { StepRealtorDetails } from "@/components/wizard/steps/StepRealtorDetails";
import { StepFinalReferral } from "@/components/wizard/steps/StepFinalReferral";
import { BookingState } from "@/components/wizard/BookingState";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

function WizardContent() {
  const { currentStep, data, phase, isRealtor } = useWizard();

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
    if (isRealtor) {
      if (currentStep === 7) return <StepRealtorDetails />;
      if (currentStep === 8) return <StepFinalReferral />;
    } else if (currentStep === 7) {
      return <StepFinalReferral />;
    }
  }

  if (hasWebsite === false) {
    if (currentStep === 3) return <Step3B_BusinessType />;
    if (currentStep === 4) return <Step4B_BusinessStage />;
    if (currentStep === 5) return <Step5B_LeadGen />;
    if (currentStep === 6) return <Step6B_TargetCustomer />;
    if (isRealtor) {
      if (currentStep === 7) return <StepRealtorDetails />;
      if (currentStep === 8) return <StepFinalReferral />;
    } else if (currentStep === 7) {
      return <StepFinalReferral />;
    }
  }

  return <Step1BasicInfo />;
}

export default function GetStarted() {
  const search = useSearch();

  const { industry, utmParams } = useMemo(() => {
    const params = new URLSearchParams(search);
    const utm: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) utm[key] = value;
    });
    return { industry: params.get("industry") ?? "", utmParams: utm };
  }, [search]);

  const isRealtor = industry === "real-estate";

  const landingPagePath = useMemo(() => {
    if (utmParams["utm_source"] === "realtor_landing") return "/websites-for-realtors";
    if (typeof document !== "undefined" && document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (ref.origin === window.location.origin) return ref.pathname;
      } catch {
        /* unparseable referrer — ignore */
      }
    }
    return "";
  }, [utmParams]);

  // realtor_form_view — fires once when the realtor-context form becomes visible.
  const formSectionRef = useRef<HTMLElement>(null);
  const formViewFired = useRef(false);
  useEffect(() => {
    if (!isRealtor || formViewFired.current) return;
    const el = formSectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !formViewFired.current) {
            formViewFired.current = true;
            trackRealtorEvent("realtor_form_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isRealtor]);

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
      <section ref={formSectionRef} className="bg-white min-h-[60vh]">
        {isRealtor && (
          <div className="max-w-2xl mx-auto px-6 pt-10">
            <div className="bg-orange/[0.07] border-l-4 border-orange rounded-r-lg px-5 py-4">
              <p className="text-charcoal font-sans text-sm md:text-base leading-relaxed">
                You're booking a <span className="font-semibold">Realtor Website Call</span>.
                We'll come prepared to talk about your market, your website, and
                property-search needs.
              </p>
            </div>
          </div>
        )}
        <WizardProvider industry={industry} utmParams={utmParams} landingPagePath={landingPagePath}>
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
