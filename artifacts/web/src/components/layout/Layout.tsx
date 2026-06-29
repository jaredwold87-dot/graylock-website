import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatWidget } from "../chat/ChatWidget";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app-fade-in min-h-screen flex flex-col bg-[#0F0F0F]">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
