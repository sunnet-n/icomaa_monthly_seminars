import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { NextSeminar } from "./components/NextSeminar";
import { AnnualConference } from "./components/AnnualConference";
import { PastConferences } from "./components/PastConferences";
import { About } from "./components/About";
import { Venue } from "./components/Venue";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";

export default function App() {
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
    </div>
  );
}