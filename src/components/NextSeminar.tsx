import { Calendar, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

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
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-xl">
          <h2 className="text-blue-600 text-center mb-8">Next Seminar</h2>
          
          <div className="text-center mb-12">
            <h3 className="mb-4">Advanced Topics in Applied Mathematics</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join us for an exciting exploration of cutting-edge mathematical concepts and their real-world applications.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="backdrop-blur-md bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-white text-3xl sm:text-4xl mb-2">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-blue-100 uppercase text-sm">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* Event Details */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/50 rounded-2xl p-6">
              <Calendar className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <div className="text-slate-600 text-sm mb-1">Date</div>
                <div>March 15, 2024</div>
              </div>
            </div>
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/50 rounded-2xl p-6">
              <Clock className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <div className="text-slate-600 text-sm mb-1">Time</div>
                <div>9:00 AM - 5:00 PM</div>
              </div>
            </div>
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/50 rounded-2xl p-6">
              <MapPin className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <div className="text-slate-600 text-sm mb-1">Location</div>
                <div>Main Auditorium</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
