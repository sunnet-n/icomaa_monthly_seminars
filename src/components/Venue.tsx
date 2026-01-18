import { Building2, Car, MapPin, Train } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useReducedMotion } from "motion/react";

export function Venue() {
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
    <section id="venue" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-slate-800 text-center mb-8 sm:mb-12 text-3xl sm:text-4xl"
        >
          Venue
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Venue Information */}
          <div className="space-y-4 sm:space-y-6">
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-6 sm:p-8 border border-purple-200/30 shadow-lg">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <Building2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-1 sm:mb-2 text-lg sm:text-xl">Conference Hall & Zoom Meetings</h3>
                  <p className="text-slate-700 text-sm sm:text-base">
                    Matematics Departmen, E block,
                  </p>
                  <p className="text-slate-600 mt-1 sm:mt-2 text-sm sm:text-base">
                    Yidiz Technical University, Davutpasa District, Istanbul, Turkey
                  </p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 border border-purple-100">
                <h4 className="text-purple-900 mb-3 sm:mb-4 text-base sm:text-lg">Facilities</h4>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">•</span>
                    <span>3 breakout rooms for parallel sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">•</span>
                    <span>Exhibition area for poster presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">•</span>
                    <span>Cafeteria and networking spaces</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Getting There */}
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-6 sm:p-8 border border-pink-200/30 shadow-lg">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-blue-700 mb-4 sm:mb-6 text-lg sm:text-xl">Getting There</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4 backdrop-blur-sm bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-3 sm:p-4 border border-pink-100">
                  <Train className="text-pink-600 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-slate-900 mb-1 text-sm sm:text-base">Public Transit</div>
                    <p className="text-slate-600 text-xs sm:text-sm">Metro Line M1 A, University Station (10 min walk)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-3 sm:p-4 border border-blue-100">
                  <Car className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-slate-900 mb-1 text-sm sm:text-base">Parking</div>
                    <p className="text-slate-600 text-xs sm:text-sm">On-site parking available for attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map with Istanbul Photo */}
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-4 border border-purple-200/30 shadow-lg overflow-hidden">
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600425983819-bfa245a64f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc3RhbmJ1bCUyMGNpdHlzY2FwZSUyMGJvc3Bob3J1c3xlbnwxfHx8fDE3NjQzOTkyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Istanbul Bosphorus Cityscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-6 sm:p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <MapPin className="text-white drop-shadow-lg" size={28} />
                    <p className="text-white drop-shadow-lg text-lg sm:text-xl">Istanbul, Turkey</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:scale-105 shadow-md hover:shadow-lg active:scale-95 will-change-transform text-xs sm:text-sm backdrop-blur-sm">
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
