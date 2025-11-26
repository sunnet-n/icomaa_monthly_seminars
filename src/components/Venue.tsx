import { Building2, Car, MapPin, Train } from "lucide-react";

export function Venue() {
  return (
    <section id="venue" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-600 text-center mb-12">Venue</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Venue Information */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 border border-white/20 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <Building2 className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-blue-900 mb-2">Conference Center</h3>
                  <p className="text-slate-700">
                    International Mathematics Research Institute
                  </p>
                  <p className="text-slate-600 mt-2">
                    1234 Academic Drive, University District
                  </p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-blue-50/50 rounded-2xl p-6">
                <h4 className="text-blue-900 mb-4">Facilities</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Main auditorium with 500 seats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>4 breakout rooms for parallel sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Exhibition area for poster presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Cafeteria and networking spaces</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Getting There */}
            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-blue-900 mb-6">Getting There</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/50 rounded-2xl p-4">
                  <Train className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-slate-900 mb-1">Public Transit</div>
                    <p className="text-slate-600 text-sm">Metro Line 2, University Station (5 min walk)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/50 rounded-2xl p-4">
                  <Car className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-slate-900 mb-1">Parking</div>
                    <p className="text-slate-600 text-sm">On-site parking available for attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-4 border border-white/20 shadow-lg">
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
                <p className="text-slate-600 mb-4">Interactive Map</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105 shadow-md text-sm">
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
