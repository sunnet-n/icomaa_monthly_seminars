import { Building2, Car, MapPin, Train } from "lucide-react";

export function Venue() {
  return (
    <section id="venue" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-center mb-8 sm:mb-12 text-3xl sm:text-4xl">Venue</h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Venue Information */}
          <div className="space-y-4 sm:space-y-6">
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-6 sm:p-8 border border-purple-200/30 shadow-lg">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <Building2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-1 sm:mb-2 text-lg sm:text-xl">Conference Center</h3>
                  <p className="text-slate-700 text-sm sm:text-base">
                    International Mathematics Research Institute
                  </p>
                  <p className="text-slate-600 mt-1 sm:mt-2 text-sm sm:text-base">
                    1234 Academic Drive, University District
                  </p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 border border-purple-100">
                <h4 className="text-purple-900 mb-3 sm:mb-4 text-base sm:text-lg">Facilities</h4>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">•</span>
                    <span>Main auditorium with 500 seats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">•</span>
                    <span>4 breakout rooms for parallel sessions</span>
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
                    <p className="text-slate-600 text-xs sm:text-sm">Metro Line 2, University Station (5 min walk)</p>
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

          {/* Map Placeholder */}
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-4 border border-purple-200/30 shadow-lg">
            <div className="w-full h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-center px-4">
                <MapPin className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-3 sm:mb-4" size={40} />
                <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">Interactive Map</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:scale-105 shadow-md hover:shadow-lg active:scale-95 will-change-transform text-xs sm:text-sm">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
