import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";

export function Team() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const teamImages = [
    {
      url: "images/our_team.jpg",
      caption: "ICOMAA Team - Dinner Event",
    },
    {
      url: "images/(4).jpg",
      caption: "Lunch with our invited speaker",
    },
  ];

  const organizers = [
    {
      id: 1,
      name: "Prof. Dr. Yusuf Zeren",
      role: "Conference Chair",
      affiliation: "Yildiz Technical University",
      photo:
        "images/yusuf_zeren.jpg",
      email: "yzeren@yildiz.edu.tr",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Dr. Sunnet Avezov",
      role: "Program Director",
      affiliation: "Yildiz Technical University",
      photo:
        "images/sunnet.jpg",
      email: "awezowsunnet@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Dr. Mehmet Özükanar",
      role: "Conference Program Coordinator",
      affiliation: "Yildiz Technical University",
      photo:
        "images/mehmet.jpg",
      email: "mehmet.ozknr13@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Dr. Elif Demir",
      role: "Logistics Coordinator",
      affiliation: "Yildiz Technical University",
      photo:
        "images/Elif_photo.jpg",
      email: "elifdemir1317@gmail.com",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const nextImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % teamImages.length,
    );
  }, [teamImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + teamImages.length) % teamImages.length,
    );
  }, [teamImages.length]);

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
    <section
      id="team"
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-amber-500"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-white mb-2 text-3xl sm:text-4xl">
            Join Our Team
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Meet the dedicated professionals behind ICOMAA
            Seminar Series
          </p>
        </div>

        {/* Organizers Container */}
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl border border-amber-200/50 shadow-2xl overflow-hidden mb-8">
          <div className="p-5 sm:p-6">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-700 text-center mb-5 text-xl sm:text-2xl">
              Conference Organizers
            </h3>

            <div className="space-y-0">
              {organizers.map((organizer, index) => (
                <div key={organizer.id}>
                  <div className="flex items-start gap-4 py-4">
                    {/* Avatar */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-xl ring-2 ring-white/40 bg-gradient-to-br ${organizer.color} overflow-hidden flex-shrink-0`}
                    >
                      <ImageWithFallback
                        src={organizer.photo}
                        alt={organizer.name}
                        className="w-full h-full object-cover object-center scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-slate-900 text-base sm:text-lg mb-0.5">
                        {organizer.name}
                      </h4>
                      <p className="text-slate-700 text-xs sm:text-sm mb-0.5">
                        {organizer.role}
                      </p>
                      <p className="text-slate-600 text-xs mb-1">
                        {organizer.affiliation}
                      </p>
                      <p className="text-xs">
                        <span className="text-slate-500">
                          Email:{" "}
                        </span>
                        <a
                          href={`mailto:${organizer.email}`}
                          className="text-blue-600 hover:text-blue-700 transition-colors break-words"
                        >
                          {organizer.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Divider Line */}
                  {index < organizers.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Photo Carousel */}
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-4 sm:p-6 border border-orange-200/50 shadow-2xl mb-8">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-700 text-center mb-5 text-xl sm:text-2xl">
            Meet the Entire Team
          </h3>

          <div
            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer mb-5"
            onClick={() =>
              setModalImage({
                src: teamImages[currentImageIndex].url,
                alt: teamImages[currentImageIndex].caption,
              })
            }
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <ImageWithFallback
              src={teamImages[currentImageIndex].url}
              alt={teamImages[currentImageIndex].caption}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-in-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700"></div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transition-all duration-700">
              <p className="text-white text-base sm:text-lg md:text-xl">
                {teamImages[currentImageIndex].caption}
              </p>
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
              <ChevronLeft
                className="text-slate-800"
                size={24}
              />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 will-change-transform transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight
                className="text-slate-800"
                size={24}
              />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-5">
            {teamImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${
                  index === currentImageIndex
                    ? "bg-gradient-to-r from-orange-600 to-pink-600 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto mb-5 text-xs sm:text-sm">
              Our team consists of dedicated researchers,
              administrative staff, volunteers, and student
              assistants who work tirelessly to make ICOMAA
              events successful.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="backdrop-blur-xl bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-3 border border-amber-200 shadow-lg">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-700 text-xl sm:text-2xl">
                  25+
                </div>
                <p className="text-slate-600 text-xs">
                  Team Members
                </p>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl p-3 border border-orange-200 shadow-lg">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-700 text-xl sm:text-2xl">
                  15+
                </div>
                <p className="text-slate-600 text-xs">
                  Volunteers
                </p>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-3 border border-pink-200 shadow-lg">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 text-xl sm:text-2xl">
                  10+
                </div>
                <p className="text-slate-600 text-xs">
                  Universities
                </p>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-3 border border-purple-200 shadow-lg">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700 text-xl sm:text-2xl">
                  5
                </div>
                <p className="text-slate-600 text-xs">
                  Countries
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center bg-neutral-800 rounded-3xl p-5 sm:p-6 border border-neutral-700 shadow-2xl">
          <h3 className="text-white mb-3 text-xl sm:text-2xl">
            Join Our Team
          </h3>
          <p className="text-neutral-300 mb-4 max-w-2xl mx-auto text-xs sm:text-sm">
            We're always looking for passionate individuals to
            help us organize amazing mathematical events. Send us an email if you want to be part of our community!
          </p>
          {/*<button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all shadow-xl text-sm">
            Become a Volunteer
          </button>*/}
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