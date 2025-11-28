import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoImage from "figma:asset/648f4aef5a465702a33acc7656f71240d0017115.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Next Seminar", href: "#next-seminar" },
    { label: "Past Events", href: "#past-conferences" },
    { label: "About", href: "#about" },
    { label: "Venue", href: "#venue" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div 
          ref={navRef}
          className={`backdrop-blur-xl rounded-3xl transition-all duration-300 shadow-lg ${
            scrolled 
              ? "bg-white/95 shadow-xl" 
              : "bg-white/80"
          }`}
        >
          <div className="flex justify-between items-center h-16 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <img 
                  src={logoImage} 
                  alt="ICOMAA Logo" 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  loading="eager"
                />
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  <h1>ICOMAA</h1>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-slate-700 hover:text-blue-600 transition-all rounded-2xl hover:bg-blue-50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isOpen 
                    ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white rotate-90" 
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`mobile-menu-curtain ${isOpen ? 'mobile-menu-open' : ''}`}
          >
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="mobile-menu-item"
                  style={{
                    animation: isOpen 
                      ? `slideIn 0.4s ease-out ${index * 0.07}s both` 
                      : "none"
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .mobile-menu-curtain {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s ease-out, opacity 0.4s ease-out;
        }

        .mobile-menu-curtain.mobile-menu-open {
          max-height: 500px;
          opacity: 1;
        }

        .mobile-menu-content {
          padding: 0.5rem 1rem 1rem;
          border-top: 1px solid rgba(226, 232, 240, 0.5);
          margin-top: 0.5rem;
        }

        .mobile-menu-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 1rem 1.5rem;
          color: #374151;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 10px;
          margin-bottom: 0.25rem;
        }

        .mobile-menu-item:hover {
          background: rgba(59, 130, 246, 0.1);
          color: rgb(37, 99, 235);
          padding-left: 2rem;
        }

        .mobile-menu-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 768px) {
          .mobile-menu-curtain {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}