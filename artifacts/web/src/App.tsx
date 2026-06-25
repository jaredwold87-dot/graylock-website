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
import AcceptableUsePolicy from "@/pages/AcceptableUsePolicy";
import Compliance from "@/pages/Compliance";
import Sitemap from "@/pages/Sitemap";
import NotFound from "@/pages/not-found";

const AccountantsIndustry = lazy(() => import("@/pages/industries/Accountants"));
const Chiropractors = lazy(() => import("@/pages/industries/Chiropractors"));
const Dentists = lazy(() => import("@/pages/industries/Dentists"));
const Optometrists = lazy(() => import("@/pages/industries/Optometrists"));
const PhysicalTherapists = lazy(() => import("@/pages/industries/PhysicalTherapists"));
const Physicians = lazy(() => import("@/pages/industries/Physicians"));
const Psychologists = lazy(() => import("@/pages/industries/Psychologists"));
const IndustrialConstruction = lazy(() => import("@/pages/industries/IndustrialConstruction"));
const LocalServiceBusinesses = lazy(() => import("@/pages/industries/LocalServiceBusinesses"));
const HomeBuilders = lazy(() => import("@/pages/industries/HomeBuilders"));

const WebsiteDesignOverview = lazy(() => import("@/pages/WebsiteDesignOverview"));
const OurStrategy = lazy(() => import("@/pages/strategy/OurStrategy"));
const WebsiteDesign = lazy(() => import("@/pages/strategy/WebsiteDesign"));
const SEOPage = lazy(() => import("@/pages/strategy/SEO"));
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
        <Route path="/featured-projects" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/contact" component={ContactRedirect} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/websites-for-accountants" component={AccountantsIndustry} />
        <Route path="/other-service-businesses" component={LocalServiceBusinesses} />
        <Route path="/websites-for-chiropractors" component={Chiropractors} />
        <Route path="/websites-for-dentists" component={Dentists} />
        <Route path="/websites-for-optometrists" component={Optometrists} />
        <Route path="/websites-for-physical-therapists" component={PhysicalTherapists} />
        <Route path="/websites-for-physicians" component={Physicians} />
        <Route path="/websites-for-psychologists" component={Psychologists} />
        <Route path="/websites-for-industrial-construction" component={IndustrialConstruction} />
        <Route path="/websites-for-home-builders" component={HomeBuilders} />
        <Route path="/services" component={WebsiteDesignOverview} />
        <Route path="/our-strategy" component={OurStrategy} />
        <Route path="/website-design" component={WebsiteDesign} />
        <Route path="/seo-for-small-business" component={SEOPage} />
        <Route path="/google-business-profile" component={GoogleBusinessProfilePage} />
        <Route path="/lead-generation-for-small-business" component={LeadGenerationPage} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/aup" component={AcceptableUsePolicy} />
        <Route path="/compliance" component={Compliance} />
        <Route path="/sitemap" component={Sitemap} />

        <Route path="/work">{() => <Redirect to="/featured-projects" />}</Route>
        <Route path="/our-work">{() => <Redirect to="/featured-projects" />}</Route>
        <Route path="/strategy">{() => <Redirect to="/our-strategy" />}</Route>
        <Route path="/terms-of-service">{() => <Redirect to="/terms" />}</Route>
        <Route path="/privacy-policy">{() => <Redirect to="/privacy" />}</Route>
        <Route path="/acceptable-use-policy">{() => <Redirect to="/aup" />}</Route>

        <Route path="/home-builders">{() => <Redirect to="/websites-for-home-builders" />}</Route>
        <Route path="/contractors">{() => <Redirect to="/websites-for-industrial-construction" />}</Route>
        <Route path="/accountants">{() => <Redirect to="/websites-for-accountants" />}</Route>
        <Route path="/funnel-pages">{() => <Redirect to="/our-strategy" />}</Route>
        <Route path="/home-builders-playbook/thank-you">{() => <Redirect to="/" />}</Route>
        <Route path="/home-builders-playbook">{() => <Redirect to="/" />}</Route>

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
              <Layout>
                <Router />
              </Layout>
            </SiteSettingsProvider>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
