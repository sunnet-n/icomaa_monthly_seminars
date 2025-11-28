import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { NextSeminar } from "./components/NextSeminar";
import { AnnualConference } from "./components/AnnualConference";
import { PastConferences } from "./components/PastConferences";
import { About } from "./components/About";
import { Venue } from "./components/Venue";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect } from "react";

export default function App() {
  // Preload critical hero image for better LCP
  useEffect(() => {
    const heroImage = new Image();
    heroImage.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <Hero />
      <NextSeminar />
      <AnnualConference />
      <PastConferences />
      <About />
      <Venue />
      <Team />
      <Contact />
      <ScrollToTop />
    </div>
  );
}