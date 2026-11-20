import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { MobileContactBar } from "./MobileContactBar";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return (
    <div className="app-fade-in min-h-screen flex flex-col bg-[#0F0F0F]">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {location === "/" && <MobileContactBar />}
    </div>
  );
}
