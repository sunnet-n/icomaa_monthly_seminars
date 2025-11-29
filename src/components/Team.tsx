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

  const teamImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      caption: "ICOMAA Team - Annual Meeting 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&q=80",
      caption: "Team Workshop Session",
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      caption: "Conference Planning Meeting",
    },
    {
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
      caption: "Team Collaboration",
    },
  ];

  const organizers = [
    {
      id: 1,
      name: "Dr. Emily Thompson",
      role: "Conference Chair",
      affiliation: "MIT",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      email: "emily.thompson@icomaa.org",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Prof. Michael Zhang",
      role: "Program Director",
      affiliation: "Stanford University",
      photo:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      email: "michael.zhang@icomaa.org",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      role: "Logistics Coordinator",
      affiliation: "Cambridge University",
      photo:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
      email: "sarah.martinez@icomaa.org",
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
                  8
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
            help us organize amazing mathematical events.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all shadow-xl text-sm">
            Become a Volunteer
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