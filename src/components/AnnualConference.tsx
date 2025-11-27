import { Calendar, Download, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

export function AnnualConference() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="annual-conference" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm mb-4 shadow-lg">
            Annual Event
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">
            ICOMAA Annual Conference 2024
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Join us for the biggest mathematics event of the year
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Conference Brochure */}
          <div className="backdrop-blur-xl bg-white/80 rounded-[2.5rem] p-8 sm:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all">
            <div 
              className="aspect-[3/4] bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl overflow-hidden shadow-2xl mb-6 relative group cursor-pointer"
              onClick={() => setModalImage({ 
                src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80", 
                alt: "Conference Brochure" 
              })}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                alt="Conference Brochure"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-white mb-2 drop-shadow-lg">Conference 2024</h3>
                <p className="text-white drop-shadow-md text-sm">October 20-23, 2024</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3 mb-4">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>

            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
              Register for Conference
            </button>
          </div>

          {/* Conference Details */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                Conference Highlights
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 backdrop-blur-sm bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-purple-900 mb-1">4 Days of Excellence</div>
                    <p className="text-slate-600 text-sm">October 20-23, 2024</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 backdrop-blur-sm bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-pink-900 mb-1">50+ Speakers</div>
                    <p className="text-slate-600 text-sm">Leading experts from around the world</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 backdrop-blur-sm bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-orange-900 mb-1">Premium Venue</div>
                    <p className="text-slate-600 text-sm">International Convention Center</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-xl text-white">
              <h4 className="text-white mb-4">What to Expect</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Keynote presentations by Fields medalists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Parallel sessions across 12 tracks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Poster sessions and exhibitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Networking events and gala dinner</span>
                </li>
              </ul>
            </div>
          </div>
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
