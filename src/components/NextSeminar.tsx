import { Calendar, Clock, MapPin } from "lucide-react";
import { useEffect, useState, memo } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Memoized countdown display component for better performance
const CountdownTimer = memo(({ timeLeft }: { timeLeft: { days: number; hours: number; minutes: number; seconds: number } }) => (
  <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
    {Object.entries(timeLeft).map(([unit, value]) => (
      <div
        key={unit}
        className="backdrop-blur-md bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-center shadow-lg min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
      >
        <div className="text-white text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="text-blue-100 uppercase text-[10px] sm:text-xs">
          {unit}
        </div>
      </div>
    ))}
  </div>
));

export function NextSeminar() {
  // HOW TO CHANGE THE COUNTDOWN DATE:
  // Update the date below in the format: "YYYY-MM-DDTHH:MM:SS+03:00"
  // For GMT+3 timezone, always add "+03:00" at the end
  // Example: "2025-12-03T15:00:00+03:00" means December 3, 2025 at 3:00 PM (GMT+3)
  const targetDate = new Date("2025-12-03T15:00:00+03:00").getTime();
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
    <section id="next-seminar" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-6 md:p-10 lg:p-12 border border-white/40 shadow-2xl">
          
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">Next Seminar Starts In</span>
            </div>
          </div>

          {/* Countdown Timer - Compact */}
          <CountdownTimer timeLeft={timeLeft} />

          {/* Talk Title */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-blue-900 mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight px-2">
               Modeling the Role of Immune Cells in Resistance to Oncolotic Viral Therapy with Time Delays
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto"></div>
          </div>

          {/* Speaker Info */}
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/60 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Speaker Photo */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl shadow-xl ring-4 ring-blue-500/20 overflow-hidden">
                  <ImageWithFallback
                    src="images/my photo.jpg"
                    alt="Dr. John Smith"
                    className="w-full h-full object-cover object-center scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Speaker Details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm mb-2 sm:mb-3">
                  Speaker
                </div>
                <h3 className="text-blue-900 mb-1 sm:mb-2 text-xl sm:text-2xl">Prof. Dr. Sophia JANG, Texas Tech University, USA</h3>
                <p className="text-blue-700 mb-2 sm:mb-3 text-sm sm:text-base">
                  Professor of Applied Mathematics
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Sophia R.-J. Jang received her Ph.D. in 1990 from Texas Tech University. She joined Texas Tech as an associate professor in Fall of 2008.
                  Before returning to Tech, she was a faculty member at the University of Louisiana at Lafayette. Her main research activities are in 
                  mathematical biology and applied mathematics.
                </p>
              </div>
            </div>
          </div>

          {/* Date & Info */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Calendar className="text-white" size={16} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Date</div>
              </div>
              <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">December 3, 2025</div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Time</div>
              </div>
              <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">3:00 PM (GMT+3)</div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin className="text-white" size={16} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Location</div>
              </div>
              <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">Zoom Meeting</div>
            </div>
          </div>

          {/* Abstract */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-5 sm:p-6 md:p-8 border border-slate-200/50 shadow-md">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              <h4 className="text-blue-900 text-lg sm:text-xl">Abstract</h4>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              This seminar presents an extended tumor-virus interaction model that incorporates immune cells to study 
                 their impact on resistance during oncolytic viral therapy (OVT). We'll explore mathematical modeling 
                 approaches and their clinical implications in cancer treatment.
            </p>
          </div>

          {/* Join Meeting Button */}
          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <a  href="https://online.yildiz.edu.tr/joinmeeting?meetingid=e979cb87-36eb-41be-9eb6-ac5dc862519c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95 will-change-transform text-sm sm:text-base"
            >
              Join Zoom Meeting
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}