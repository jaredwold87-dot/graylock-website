import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
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
import AccountantsFunnel from "@/pages/AccountantsFunnel";
import SmallBusinessOwners from "@/pages/industries/SmallBusinessOwners";
import Contractors from "@/pages/industries/Contractors";
import SoloPractitioners from "@/pages/industries/SoloPractitioners";
import GroupPractices from "@/pages/industries/GroupPractices";
import AccountantsIndustry from "@/pages/industries/Accountants";
import LawyersIndustry from "@/pages/industries/Lawyers";
import HouseCleaners from "@/pages/industries/HouseCleaners";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
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
      <Route path="/websites-for-small-business-owners" component={SmallBusinessOwners} />
      <Route path="/websites-for-contractors" component={Contractors} />
      <Route path="/websites-for-solo-practitioners" component={SoloPractitioners} />
      <Route path="/websites-for-group-practices" component={GroupPractices} />
      <Route path="/websites-for-accountants" component={AccountantsIndustry} />
      <Route path="/websites-for-lawyers" component={LawyersIndustry} />
      <Route path="/websites-for-house-cleaners" component={HouseCleaners} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
