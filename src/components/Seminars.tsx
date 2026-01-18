import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";
import { pastSeminars } from "../data/pastSeminars";
import { motion, useReducedMotion } from "motion/react";

export function Seminars() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "past" ? "past" : "upcoming";
  
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">(initialTab);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showAllPast, setShowAllPast] = useState(false);
  const reduceMotion = useReducedMotion();

  // Update active tab when URL parameter changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "past") {
      setActiveTab("past");
    }
  }, [searchParams]);

  const images = [
    {
      url: "images/25-24_event.jpg",
      caption: "ICOMAA 2025&2024 "
    },
    {
      url: "images/(1).jpg",
      caption: "Keynote Presentation"
    },
    {
      url: "images/(2).jpg",
      caption: "Panel Discussion"
    },
    {
      url: "images/25-24_event2.jpg",
      caption: "Insightful Seminar Talk"
    },
    {
      url: "images/25-24_event1.jpg",
      caption: "Our Collaborators David C. Uribe & Scott Rodney"
    }
  ];

  const upcomingSeminars = pastSeminars.filter(s => s.isUpcoming);
  const pastSeminarsList = pastSeminars.filter(s => !s.isUpcoming);
  
  // For past seminars, show only 4 unless "showAllPast" is true
  const displayedPastSeminars = showAllPast ? pastSeminarsList : pastSeminarsList.slice(0, 4);
  const hasMorePastSeminars = pastSeminarsList.length > 4;
  
  const displayedSeminars = activeTab === "upcoming" ? upcomingSeminars : displayedPastSeminars;

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="seminars" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-purple-500 text-center mb-8 sm:mb-12 text-3xl sm:text-4xl"
        >
          Seminars
        </motion.h2>

        {/* Toggle Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8 sm:mb-12 px-2"
        >
          <div className="inline-flex bg-white backdrop-blur-xl rounded-full p-1.5 shadow-lg border border-slate-200">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                  : "text-natural-600 hover:text-natural-900"
              }`}
            >
              Upcoming Seminars
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap ${
                activeTab === "past"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Past Seminars
            </button>
          </div>
        </motion.div>

        {/* Seminars List */}
        <motion.div 
          className="mb-12 sm:mb-16 w-full"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-slate-800 text-center mb-8 text-lg sm:text-xl md:text-2xl px-4">
            {activeTab === "upcoming" ? "Upcoming Seminars" : "Past Seminars"}
          </h3>

          {displayedSeminars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                {activeTab === "upcoming" 
                  ? "No upcoming seminars scheduled at the moment." 
                  : "No past seminars available."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {displayedSeminars.map((seminar, index) => (
                <motion.div
                  key={seminar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={itemVariants}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                >
                  <Link
                    to={`/seminars/${seminar.id}`}
                    className="group relative rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-lg transition-shadow hover:shadow-2xl block"
                  >
                    {/* subtle ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" />

                    {/* Icon/Photo */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-md ring-2 ring-natural-500/40 overflow-hidden transition-transform group-hover:scale-110">
                      <ImageWithFallback
                        src={seminar.speakerPhoto}
                        alt={seminar.speaker}
                        className="w-full h-full object-cover object-center scale-110"
                        loading="eager"
                      />
                    </div>

                    {/* Speaker Name & Position */}
                    <div className="mb-3">
                      <div className="text-slate-900 font-medium text-base sm:text-lg mb-1">{seminar.speaker}</div>
                      <p className="text-slate-600 text-sm">{seminar.position}</p>
                    </div>

                    {/* Seminar Title */}
                    <h4 className="mb-6 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                      {seminar.title}
                    </h4>

                    {/* Date Badge */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                        activeTab === "upcoming"
                          ? "bg-gradient-to-r from-blue-100 to-purple-100"
                          : "bg-gradient-to-r from-purple-100 to-pink-100"
                      }`}>
                        <Calendar size={14} className={`flex-shrink-0 ${
                          activeTab === "upcoming" ? "text-blue-600" : "text-purple-600"
                        }`} />
                        <span className="text-slate-700 text-xs sm:text-sm whitespace-nowrap">{seminar.date}</span>
                      </div>
                      {activeTab === "upcoming" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs whitespace-nowrap">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* See All Past Seminars Button */}
          {activeTab === "past" && hasMorePastSeminars && !showAllPast && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8 sm:mt-10"
            >
              <button
                onClick={() => setShowAllPast(true)}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95 transition-all text-base min-h-[48px]"
              >
                See All Past Seminars
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Image Gallery - Moved to Bottom */}
        <motion.div 
          variants={itemVariants}
          className="backdrop-blur-xl bg-white/80 rounded-[2.5rem] p-4 sm:p-8 border border-white/60 shadow-2xl"
        >
          <h3 className="text-slate-800 text-center mb-6 text-xl sm:text-2xl">
            Event Gallery
          </h3>
          
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
        </motion.div>
      </motion.div>

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