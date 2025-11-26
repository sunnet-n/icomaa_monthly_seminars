import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Calendar, Home, Mail, Menu, X, HelpCircle } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Track scroll position for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-4 md:py-2">
      <div className="w-[85%] md:w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-2.5 py-1.5 md:px-8 md:py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/40 shadow-lg w-full">
          <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-800 flex-shrink-0" />
            <span className="text-[10px] md:text-sm font-semibold text-neutral-900">Monthly Seminars</span>
          </div>
          
          {/* Desktop Navigation - Slightly away from borders */}
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("home")}
              className="backdrop-blur-sm bg-white/40 hover:bg-white/60 text-neutral-800 border border-white/30 font-medium text-xs px-3 py-1 h-8"
            >
              <Home className="w-3 h-3 mr-1" />
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("next-event")}
              className="backdrop-blur-sm bg-white/40 hover:bg-white/60 text-neutral-800 border border-white/30 font-medium text-xs px-3 py-1 h-8"
            >
              <Calendar className="w-3 h-3 mr-1" />
              Next Event
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("faq")}
              className="backdrop-blur-sm bg-white/40 hover:bg-white/60 text-neutral-800 border border-white/30 font-medium text-xs px-3 py-1 h-8"
            >
              <HelpCircle className="w-3 h-3 mr-1" />
              Q&A
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contacts")}
              className="backdrop-blur-sm bg-white/40 hover:bg-white/60 text-neutral-800 border border-white/30 font-medium text-xs px-3 py-1 h-8"
            >
              <Mail className="w-3 h-3 mr-1" />
              Contacts
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("join")}
              className="backdrop-blur-sm bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white shadow-lg font-semibold text-xs px-4 py-1 h-8"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/50 backdrop-blur-sm border border-white/40 shadow-lg hover:bg-white/70 transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-3 h-3 md:w-4 md:h-4 text-gray-800" />
            ) : (
              <Menu className="w-3 h-3 md:w-4 md:h-4 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay to catch outside clicks */}
            <div className="fixed inset-0 bg-black/10 z-40 mt-16 md:hidden" />
            
            {/* Mobile Menu Content - Also with rounded corners */}
            <div 
              ref={mobileMenuRef}
              className="fixed top-20 right-4 z-50 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 md:hidden"
            >
              <div className="p-3 space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/50 hover:bg-white/70 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </button>
                
                <button
                  onClick={() => scrollToSection("next-event")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/50 hover:bg-white/70 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Next Event</span>
                </button>
                
                <button
                  onClick={() => scrollToSection("faq")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/50 hover:bg-white/70 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Q&A</span>
                </button>
                
                <button
                  onClick={() => scrollToSection("contacts")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/50 hover:bg-white/70 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contacts</span>
                </button>
                
                <button
                  onClick={() => scrollToSection("join")}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium mt-2"
                >
                  Join Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}