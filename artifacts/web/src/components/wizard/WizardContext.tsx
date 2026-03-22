import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface WizardData {
  firstName: string;
  businessName: string;
  email: string;
  hasWebsite: boolean | null;
  websiteUrl: string;
  primaryGoal: string;
  targetCustomer: string;
  brandingNotes: string;
  businessType: string;
  businessStage: string;
  leadGenMethod: string;
  referralSource: string;
}

const initialData: WizardData = {
  firstName: "",
  businessName: "",
  email: "",
  hasWebsite: null,
  websiteUrl: "",
  primaryGoal: "",
  targetCustomer: "",
  brandingNotes: "",
  businessType: "",
  businessStage: "",
  leadGenMethod: "",
  referralSource: "",
};

type WizardPhase = "form" | "submitting" | "booking" | "confirmed";

interface WizardContextType {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
  currentStep: number;
  totalSteps: number;
  goNext: () => void;
  goBack: () => void;
  goToStep: (step: number) => void;
  phase: WizardPhase;
  setPhase: (phase: WizardPhase) => void;
  canGoBack: boolean;
}

const WizardContext = createContext<WizardContextType | null>(null);

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within WizardProvider");
  return ctx;
}

const TOTAL_STEPS = 6;

export function WizardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WizardData>(initialData);
  const [currentStep, setCurrentStep] = useState(1);
  const [phase, setPhase] = useState<WizardPhase>("form");

  const updateData = useCallback((updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }, []);

  const goBack = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    setCurrentStep(Math.max(1, Math.min(step, TOTAL_STEPS)));
  }, []);

  return (
    <WizardContext.Provider
      value={{
        data,
        updateData,
        currentStep,
        totalSteps: TOTAL_STEPS,
        goNext,
        goBack,
        goToStep,
        phase,
        setPhase,
        canGoBack: currentStep > 1,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}
