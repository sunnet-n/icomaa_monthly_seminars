import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { NextSeminar } from "./components/NextSeminar";
import { SeminarDetails } from "./components/SeminarDetails";
import { PastConferences } from "./components/PastConferences";
import { JoinSection } from "./components/JoinSection";
import { FAQ } from "./components/FAQ";
import { VenueInfo } from "./components/VenueInfo";
import { BackToTop } from "./components/BackToTop";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollAnimation } from "./components/ScrollAnimation";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <ScrollProgress />
      <Navigation />
      <Hero />
      
      <ScrollAnimation animation="fade-up">
        <PastConferences />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <NextSeminar />
      </ScrollAnimation>
      
      {/* Combined Dark Background Section for Venue and FAQ */}
      <div className="bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden max-w-[100vw]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-blue-600/20 to-purple-600/20 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-orange-500/15 to-yellow-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-red-600/20 to-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/3 left-10 w-20 h-20 border-2 border-orange-400/30 rounded-lg rotate-45 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 right-20 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        <ScrollAnimation animation="fade-up" delay={100}>
          <VenueInfo />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={100}>
          <FAQ />
        </ScrollAnimation>
      </div>
      
      <section id="join" className="py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden max-w-[100vw]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-block">
              <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Ready to Join?</h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Don't miss out on our monthly seminars. Register now and be part of a growing community of professionals.
            </p>
            <button
              onClick={() => setIsJoinDialogOpen(true)}
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white rounded-xl transition-all duration-300 shadow-xl shadow-blue-800/50 hover:shadow-2xl hover:shadow-blue-800/60 transform hover:scale-105 font-semibold text-lg"
            >
              Get Your Zoom Link
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Contact Us Section */}
          <section id="contacts" className="mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-4xl font-bold mb-4">Contact Us</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
              </div>
              <div className="bg-neutral-800 rounded-3xl shadow-2xl p-8 md:p-16 border-2 border-neutral-700">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="mb-6 text-white text-2xl font-semibold">Get in Touch</h3>
                    <div className="space-y-6 text-neutral-300">
                      <p>
                        <strong className="block text-white mb-2 text-lg font-semibold">Email:</strong>
                        contact@monthlyseminars.com
                      </p>
                      <p>
                        <strong className="block text-white mb-2 text-lg font-semibold">Phone:</strong>
                        +1 (555) 123-4567
                      </p>
                      <p>
                        <strong className="block text-white mb-2 text-lg font-semibold">Address:</strong>
                        123 Conference Street<br />
                        Academic City, AC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-6 text-white text-2xl font-semibold">Office Hours</h3>
                    <div className="space-y-4 text-neutral-300">
                      <p>
                        <strong className="block text-white text-lg font-semibold">Monday - Friday:</strong>
                        9:00 AM - 5:00 PM
                      </p>
                      <p>
                        <strong className="block text-white text-lg font-semibold">Saturday - Sunday:</strong>
                        Closed
                      </p>
                      <p className="mt-8 text-sm bg-neutral-700/50 p-4 rounded-xl border border-neutral-600">
                        For urgent matters during seminars, please use the contact information provided in your confirmation email.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Copyright */}
          <div className="text-center border-t border-neutral-700 pt-8">
            <p className="text-neutral-400">
              © 2025 Monthly Seminars. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <JoinSection
        isOpen={isJoinDialogOpen}
        onClose={() => setIsJoinDialogOpen(false)}
      />
      
      <BackToTop />
      <Toaster />
    </div>
  );
}