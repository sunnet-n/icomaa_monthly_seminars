import { Calendar, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NextSeminar() {
  const targetDate = new Date("2024-03-15T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="next-seminar" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-white/40 shadow-2xl">
          
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm">Next Seminar Starts In</span>
            </div>
          </div>

          {/* Countdown Timer - Compact */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="backdrop-blur-md bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-center shadow-lg min-w-[70px] sm:min-w-[80px]"
              >
                <div className="text-white text-2xl sm:text-3xl mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-blue-100 uppercase text-xs">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* Talk Title */}
          <div className="text-center mb-10">
            <h2 className="text-blue-900 mb-3 text-3xl sm:text-4xl lg:text-5xl">
              Advanced Topics in Applied Mathematics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto"></div>
          </div>

          {/* Speaker Info */}
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-6 sm:p-8 mb-8 border border-white/60 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Speaker Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-xl ring-4 ring-blue-500/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="Dr. John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Speaker Details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm mb-3">
                  Keynote Speaker
                </div>
                <h3 className="text-blue-900 mb-2">Dr. John Smith</h3>
                <p className="text-blue-700 mb-3">
                  Professor of Applied Mathematics
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Director of Computational Research Institute, MIT. Internationally recognized expert 
                  in numerical analysis and scientific computing with over 150 publications and numerous 
                  awards including the Fields Medal nomination.
                </p>
              </div>
            </div>
          </div>

          {/* Date & Info */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Calendar className="text-white" size={16} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Date</div>
              </div>
              <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">March 15, 2024</div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Time</div>
              </div>
              <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">9:00 AM - 5:00 PM</div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin className="text-white" size={16} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Location</div>
              </div>
              <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">Main Auditorium</div>
            </div>
          </div>

          {/* Abstract */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              <h4 className="text-blue-900">Abstract</h4>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              This seminar will explore cutting-edge developments in applied mathematics, focusing on 
              computational methods for solving complex real-world problems. We will discuss recent 
              breakthroughs in numerical optimization, machine learning integration with classical 
              mathematical frameworks, and applications in engineering and physics.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Attendees will gain insights into modern computational techniques, learn about the latest 
              research directions in the field, and discover opportunities for interdisciplinary 
              collaboration. The session will include interactive discussions and Q&A segments, 
              providing a platform for meaningful academic exchange.
            </p>
          </div>

          {/* Register Button */}
          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
              Register for This Seminar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}