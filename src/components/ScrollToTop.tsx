import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-95 will-change-transform flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
}
