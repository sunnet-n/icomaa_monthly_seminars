import { Calendar, Download, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import brochureImage from "figma:asset/365251c5af40fc60ef62fa6786fe15f88ac87532.png";

export function AnnualConference() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="annual-conference" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center mb-8 sm:mb-12 text-3xl sm:text-4xl">
          Annual Event
        </h2>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">
            ICOMAA Annual Conference 2026
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Join us for the biggest mathematics event of the year
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Conference Brochure */}
          <div className="backdrop-blur-xl bg-white/80 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all">
            <div 
              className="aspect-[3/4] bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl shadow-2xl mb-6 relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setModalImage({ 
                src: "images/seminer_brochure.jpg",
                alt: "ICOMAA 2026 Conference Brochure" 
              })}
            >
              <div className="absolute inset-0 overflow-hidden">
                <ImageWithFallback
                  src= "images/seminer_brochure.jpg"
                  alt="ICOMAA 2026 Conference Brochure"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-600 hover:to-pink-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 will-change-transform text-sm sm:text-base">
              <a  href="https://2026.icomaas.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
              Register for the Conference
            </a>
            </button>
          </div>

          {/* Conference Details */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                Conference Highlights
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 backdrop-blur-sm bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-purple-900 mb-1">3 Days of Excellence</div>
                    <p className="text-slate-600 text-sm">May 6-8, 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 backdrop-blur-sm bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-pink-900 mb-1">10+ Invited Speakers</div>
                    <p className="text-slate-600 text-sm">Leading experts from around the world</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 backdrop-blur-sm bg-gradient-to-r from-orange-100 to-purple-100 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-orange-900 mb-1">Venue</div>
                    <p className="text-slate-600 text-sm">Online Zoom Sessions & YTU University, Istanbul, Turkey </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-xl text-white">
              <h4 className="text-white mb-4">What to Expect</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Presentations by experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Parallel sessions </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Poster sessions and exhibitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✦</span>
                  <span className="text-white/90">Networking event and gala dinner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
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