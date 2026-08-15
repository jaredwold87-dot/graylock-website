import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface WizardData {
  firstName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceArea: string;
  hasWebsite: boolean | null;
  websiteUrl: string;
  primaryGoal: string;
  targetCustomer: string;
  brandingNotes: string;
  businessType: string;
  businessStage: string;
  leadGenMethod: string;
  referralSource: string;
  // Realtor-context fields (only collected when industry=real-estate)
  localMls: string;
  idxNeed: string;
  realtorGoals: string;
}

const initialData: WizardData = {
  firstName: "",
  businessName: "",
  email: "",
  phone: "",
  serviceArea: "",
  hasWebsite: null,
  websiteUrl: "",
  primaryGoal: "",
  targetCustomer: "",
  brandingNotes: "",
  businessType: "",
  businessStage: "",
  leadGenMethod: "",
  referralSource: "",
  localMls: "",
  idxNeed: "",
  realtorGoals: "",
};

type WizardPhase = "form" | "booking" | "confirmed";

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
  /** Industry context from the landing page that linked here ("" when absent). */
  industry: string;
  isRealtor: boolean;
  /** utm_* parameters carried on the /get-started URL. */
  utmParams: Record<string, string>;
  /** Pathname of the landing page that sent the visitor ("" when unknown). */
  landingPagePath: string;
}

const WizardContext = createContext<WizardContextType | null>(null);

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within WizardProvider");
  return ctx;
}

interface WizardProviderProps {
  children: ReactNode;
  industry?: string;
  utmParams?: Record<string, string>;
  landingPagePath?: string;
}

export function WizardProvider({
  children,
  industry = "",
  utmParams = {},
  landingPagePath = "",
}: WizardProviderProps) {
  const [data, setData] = useState<WizardData>(initialData);
  const [currentStep, setCurrentStep] = useState(1);
  const [phase, setPhase] = useState<WizardPhase>("form");

  const isRealtor = industry === "real-estate";
  // Realtor flow adds one step (market / MLS / IDX details) before the final step.
  const totalSteps = isRealtor ? 8 : 7;

  const updateData = useCallback((updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, totalSteps));
  }, [totalSteps]);

  const goBack = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  }, []);

  const goToStep = useCallback(
    (step: number) => {
      setCurrentStep(Math.max(1, Math.min(step, totalSteps)));
    },
    [totalSteps],
  );

  return (
    <WizardContext.Provider
      value={{
        data,
        updateData,
        currentStep,
        totalSteps,
        goNext,
        goBack,
        goToStep,
        phase,
        setPhase,
        canGoBack: currentStep > 1,
        industry,
        isRealtor,
        utmParams,
        landingPagePath,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}
