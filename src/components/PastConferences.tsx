import { Calendar, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";

export function PastConferences() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1526045004414-3e7ed02f9ca1?w=1200&q=80",
      caption: "ICOMAA 2023 Opening Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1200&q=80",
      caption: "Keynote Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?w=1200&q=80",
      caption: "Panel Discussion"
    },
    {
      url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80",
      caption: "Networking Event"
    }
  ];

  const pastSeminars = [
    {
      id: 1,
      title: "Computational Methods in Differential Equations",
      date: "September 15, 2023",
      speaker: "Dr. Maria Rodriguez",
      position: "Professor, Stanford University",
      speakerPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Topology and Its Applications in Data Science",
      date: "August 22, 2023",
      speaker: "Dr. James Chen",
      position: "Research Director, MIT",
      speakerPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Algebraic Structures in Quantum Computing",
      date: "July 10, 2023",
      speaker: "Dr. Sarah Williams",
      position: "Lead Researcher, Cambridge",
      speakerPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Stochastic Processes in Financial Mathematics",
      date: "June 5, 2023",
      speaker: "Dr. Robert Kumar",
      position: "Professor, Oxford University",
      speakerPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      color: "from-orange-500 to-red-500"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="past-conferences" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center mb-12">
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
          >
            <ImageWithFallback
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <p className="text-white text-lg sm:text-xl">{images[currentImageIndex].caption}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="text-slate-800" size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
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
                className={`w-2 h-2 rounded-full transition-all ${
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

        <div className="grid sm:grid-cols-2 gap-6">
          {pastSeminars.map((seminar) => (
            <div
              key={seminar.id}
              className="backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden border border-white/60 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              {/* Colored Header */}
              <div className={`h-2 bg-gradient-to-r ${seminar.color}`}></div>
              
              <div className="p-6">
                {/* Speaker Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={`w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-offset-2 bg-gradient-to-br ${seminar.color} ring-offset-white flex-shrink-0 cursor-pointer hover:ring-4 transition-all group`}
                    onClick={() => setModalImage({ 
                      src: seminar.speakerPhoto.replace('w=400', 'w=1200'), 
                      alt: seminar.speaker 
                    })}
                  >
                    <ImageWithFallback
                      src={seminar.speakerPhoto}
                      alt={seminar.speaker}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-slate-900 truncate">{seminar.speaker}</div>
                    <p className="text-slate-600 text-sm truncate">{seminar.position}</p>
                  </div>
                </div>

                {/* Seminar Title */}
                <h4 className="text-slate-800 mb-4 leading-snug">
                  {seminar.title}
                </h4>

                {/* Date */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${seminar.color} bg-opacity-10 px-4 py-2 rounded-full`}>
                  <Calendar size={16} className="text-slate-600" />
                  <span className="text-slate-700 text-sm">{seminar.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl">
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