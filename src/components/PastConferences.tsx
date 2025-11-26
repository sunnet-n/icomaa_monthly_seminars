import { useRef, useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

const brochures = [
  {
    id: 1,
    title: "Innovation Summit 2024",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1707299651614-18f443d09e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYnJvY2h1cmUlMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzYzOTAyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Leadership Forum 2024",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1600606154131-7e2f9183e60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwZXZlbnQlMjBwb3N0ZXJ8ZW58MXx8fHwxNzYzOTAyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Tech Symposium 2024",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1707299651614-18f443d09e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBmbHllcnxlbnwxfHx8fDE3NjM5MDI3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Digital Transformation 2024",
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1603430416744-a47cee46b0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc2NDAwOTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Research Excellence 2024",
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1599357706559-6ded6886ff78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHNlbWluYXIlMjBmbHllcnxlbnwxfHx8fDE3NjQwMDkxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Global Knowledge Forum 2024",
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1760992004210-44a502a2872d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGJyb2NodXJlJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc2NDAwOTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 7,
    title: "Professional Development 2024",
    date: "May 2024",
    image: "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25mZXJlbmNlJTIwYmFubmVyfGVufDF8fHx8MTc2NDAwOTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 8,
    title: "Innovation Workshop 2024",
    date: "April 2024",
    image: "https://images.unsplash.com/photo-1735665114740-b1fe03b51b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGV2ZW50JTIwcG9zdGVyfGVufDF8fHx8MTc2NDAwOTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function PastConferences() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Create tripled array for infinite scroll effect
  const infiniteBrochures = [...brochures, ...brochures, ...brochures];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start at the middle set
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 166 : 296; // 150px width + 16px gap for mobile, 280px + 16px for desktop
    const initialScroll = cardWidth * brochures.length;
    container.scrollLeft = initialScroll;
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 166 : 296; // 150px width + 16px gap for mobile, 280px + 16px for desktop
      const scrollAmount = cardWidth;
      
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Check if we need to loop after the animation completes
      setTimeout(() => {
        const maxScroll = cardWidth * brochures.length * 2;
        const minScroll = cardWidth * brochures.length;

        if (container.scrollLeft >= maxScroll - 10) {
          // Jump back to the middle set (without smooth scroll)
          container.scrollLeft = minScroll;
        } else if (container.scrollLeft <= 10) {
          // Jump forward to the middle set (without smooth scroll)
          container.scrollLeft = minScroll;
        }
      }, 500); // Wait for smooth scroll animation to complete
    }
  };

  const [selectedBrochure, setSelectedBrochure] = useState<{ id: number, title: string, date: string, image: string } | null>(null);

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Half - Carousel */}
            <div className="space-y-8 md:col-span-1 col-span-1 w-full md:w-auto" style={{ width: 'calc(66.666vw)' }}>
              <div className="-mt-[200px] md:-mt-[200px] -mt-[100px]">
                <div className="relative max-w-full overflow-hidden">
                  {/* Scroll Left Button */}
                  <button
                    onClick={() => scroll('left')}
                    className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-blue-600" />
                  </button>

                  {/* Scroll Right Button */}
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-blue-600" />
                  </button>

                  {/* Carousel Container */}
                  <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-10 md:px-2"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    {infiniteBrochures.map((brochure, index) => (
                      <div
                        key={`${brochure.id}-${index}`}
                        className="flex-shrink-0 w-[150px] md:w-[280px] group cursor-pointer"
                        onClick={() => setSelectedBrochure(brochure)}
                      >
                        <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="aspect-[3/5] relative">
                            <ImageWithFallback
                              src={brochure.image}
                              alt={brochure.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h4 className="text-sm mb-1">{brochure.title}</h4>
                                <p className="text-xs text-gray-200">{brochure.date}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-4">
                <Badge className="mb-2">Past Events</Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl">Previous Conference Brochures</h2>
                <p className="text-base md:text-lg text-gray-600">
                  Take a look at our successful past seminars and conferences
                </p>
              </div>
            </div>

            {/* Right Half - Empty for now */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Ensure buttons are properly visible on all devices */
        @media (max-width: 768px) {
          .relative > button {
            min-width: 44px;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>

      {/* Dialog for selected brochure */}
      {selectedBrochure && (
        <Dialog open={true} onOpenChange={() => setSelectedBrochure(null)}>
          <DialogContent className="max-w-[90vw] md:max-w-3xl max-h-[90vh] overflow-hidden p-0 bg-white/95 backdrop-blur-md border-white/40 rounded-3xl [&>button]:hidden">
            {/* Hidden title and description for accessibility */}
            <DialogTitle className="sr-only">{selectedBrochure.title}</DialogTitle>
            <DialogDescription className="sr-only">
              Conference brochure from {selectedBrochure.date}
            </DialogDescription>
            
            <div className="relative">
              {/* Custom round close button */}
              <button
                className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-xl border-2 border-gray-200 transition-all duration-300 hover:scale-110"
                onClick={() => setSelectedBrochure(null)}
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
              
              {/* Content wrapper with scroll */}
              <div className="max-h-[90vh] overflow-y-auto">
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-xl">{selectedBrochure.title}</h2>
                    <p className="text-sm text-gray-500">{selectedBrochure.date}</p>
                  </div>
                  
                  {/* Image with proper aspect ratio constraints */}
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={selectedBrochure.image}
                      alt={selectedBrochure.title}
                      className="w-full h-auto object-contain bg-gray-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}