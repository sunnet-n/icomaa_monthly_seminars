import { Calendar, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";
import { pastSeminars } from "../data/pastSeminars";

export function PastConferences() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const images = [
   {
      url: "/images/25-24_event.jpg",
      caption: "ICOMAA 2025&2024 "
    },
    {
      url: "/images/(1).jpg",
      caption: "Keynote Presentation"
    },
    {
      url: "/images/(2).jpg",
      caption: "Panel Discussion"
    },
    {
      url: "/images/25-24_event2.jpg",
      caption: "Insightful Seminar Talk"
    },
    {
      url: "/images/25-24_event1.jpg",
      caption: "Our Collaborators David C. Uribe & Scott Rodney"
    }
  ];

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <section id="past-conferences" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center mb-8 sm:mb-12 text-3xl sm:text-4xl">
          Past Events
        </h2>

        {/* Image Carousel */}
        <div className="backdrop-blur-xl bg-white/80 rounded-[2.5rem] p-4 sm:p-8 border border-white/60 shadow-2xl mb-12">
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
            onClick={() => setModalImage({ 
              src: images[currentImageIndex].url, 
              alt: images[currentImageIndex].caption
            })}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <ImageWithFallback
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-in-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700"></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transition-all duration-700">
              <p className="text-white text-base sm:text-lg md:text-xl">{images[currentImageIndex].caption}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 will-change-transform transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="text-slate-800" size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 will-change-transform transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="text-slate-800" size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${
                  index === currentImageIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Past Seminars List */}
        <div className="mb-8">
          <h3 className="text-slate-800 text-center mb-8">Featured Past Seminars</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {pastSeminars.map((seminar) => (
            <Link
              key={seminar.id}
              to={`/past-events/${seminar.id}`}
              className="backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden border border-white/60 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="p-4 sm:p-6">
                {/* Speaker Info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg ring-2 ring-purple-500/40 flex-shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src={seminar.speakerPhoto}
                      alt={seminar.speaker}
                      className="w-full h-full object-cover object-center scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-slate-900 truncate text-sm sm:text-base">{seminar.speaker}</div>
                    <p className="text-slate-600 text-xs sm:text-sm truncate">{seminar.position}</p>
                  </div>
                </div>

                {/* Seminar Title */}
                <h4 className="text-slate-800 mb-3 sm:mb-4 leading-snug text-base sm:text-lg">
                  {seminar.title}
                </h4>

                {/* Date */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Calendar size={14} className="text-purple-600 sm:w-4 sm:h-4" />
                  <span className="text-slate-700 text-xs sm:text-sm">{seminar.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10">
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all hover:scale-105 shadow-xl text-sm sm:text-base">
            View All Past Events
          </button>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={modalImage?.src || ""}
        alt={modalImage?.alt || ""}
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
      />
    </section>
  );
}