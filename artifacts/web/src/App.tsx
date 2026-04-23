import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { usePageTracking } from "@/hooks/usePageTracking";
import { SiteSettingsProvider } from "@/hooks/SiteSettingsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Pricing from "@/pages/Pricing";
import Work from "@/pages/Work";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import GetStarted from "@/pages/GetStarted";
import ContactRedirect from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import AccountantsFunnel from "@/pages/AccountantsFunnel";
import HomeBuildersPlaybook from "@/pages/HomeBuildersPlaybook";
import HomeBuildersPlaybookThankYou from "@/pages/HomeBuildersPlaybookThankYou";
import NotFound from "@/pages/not-found";

const AccountantsIndustry = lazy(() => import("@/pages/industries/Accountants"));
const Chiropractors = lazy(() => import("@/pages/industries/Chiropractors"));
const Dentists = lazy(() => import("@/pages/industries/Dentists"));
const Dermatologists = lazy(() => import("@/pages/industries/Dermatologists"));
const Ophthalmologists = lazy(() => import("@/pages/industries/Ophthalmologists"));
const Optometrists = lazy(() => import("@/pages/industries/Optometrists"));
const PhysicalTherapists = lazy(() => import("@/pages/industries/PhysicalTherapists"));
const Physicians = lazy(() => import("@/pages/industries/Physicians"));
const Psychologists = lazy(() => import("@/pages/industries/Psychologists"));
const Therapists = lazy(() => import("@/pages/industries/Therapists"));
const Veterinarians = lazy(() => import("@/pages/industries/Veterinarians"));
const IndustrialConstruction = lazy(() => import("@/pages/industries/IndustrialConstruction"));
const LocalServiceBusinesses = lazy(() => import("@/pages/industries/LocalServiceBusinesses"));
const HomeBuilders = lazy(() => import("@/pages/industries/HomeBuilders"));

const OurStrategy = lazy(() => import("@/pages/strategy/OurStrategy"));
const WebsiteDesign = lazy(() => import("@/pages/strategy/WebsiteDesign"));
const SEOPage = lazy(() => import("@/pages/strategy/SEO"));
const FunnelPagesPage = lazy(() => import("@/pages/strategy/FunnelPages"));
const GoogleBusinessProfilePage = lazy(() => import("@/pages/strategy/GoogleBusinessProfile"));
const LeadGenerationPage = lazy(() => import("@/pages/strategy/LeadGeneration"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function PageTracker() {
  usePageTracking();
  return null;
}

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/contact" component={ContactRedirect} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/accountants" component={AccountantsFunnel} />
        <Route path="/websites-for-accountants" component={AccountantsIndustry} />
        <Route path="/other-service-businesses" component={LocalServiceBusinesses} />
        <Route path="/websites-for-chiropractors" component={Chiropractors} />
        <Route path="/websites-for-dentists" component={Dentists} />
        <Route path="/websites-for-dermatologists" component={Dermatologists} />
        <Route path="/websites-for-ophthalmologists" component={Ophthalmologists} />
        <Route path="/websites-for-optometrists" component={Optometrists} />
        <Route path="/websites-for-physical-therapists" component={PhysicalTherapists} />
        <Route path="/websites-for-physicians" component={Physicians} />
        <Route path="/websites-for-psychologists" component={Psychologists} />
        <Route path="/websites-for-therapists" component={Therapists} />
        <Route path="/websites-for-veterinarians" component={Veterinarians} />
        <Route path="/websites-for-industrial-construction" component={IndustrialConstruction} />
        <Route path="/websites-for-home-builders" component={HomeBuilders} />
        <Route path="/our-strategy" component={OurStrategy} />
        <Route path="/website-design" component={WebsiteDesign} />
        <Route path="/seo-for-small-business" component={SEOPage} />
        <Route path="/funnel-pages" component={FunnelPagesPage} />
        <Route path="/google-business-profile" component={GoogleBusinessProfilePage} />
        <Route path="/lead-generation-for-small-business" component={LeadGenerationPage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />

        <Route path="/our-work">{() => <Redirect to="/work" />}</Route>
        <Route path="/strategy">{() => <Redirect to="/our-strategy" />}</Route>
        <Route path="/terms">{() => <Redirect to="/terms-of-service" />}</Route>
        <Route path="/privacy">{() => <Redirect to="/privacy-policy" />}</Route>

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <PageTracker />
            <SiteSettingsProvider>
              <Switch>
                <Route path="/home-builders-playbook" component={HomeBuildersPlaybook} />
                <Route path="/home-builders-playbook/thank-you" component={HomeBuildersPlaybookThankYou} />
                <Route>
                  <Layout>
                    <Router />
                  </Layout>
                </Route>
              </Switch>
            </SiteSettingsProvider>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
