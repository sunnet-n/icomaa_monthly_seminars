import { Calendar, Clock, MapPin } from "lucide-react";
import { useEffect, useState, memo } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useReducedMotion } from "motion/react";

// Memoized countdown display component for better performance
const CountdownTimer = memo(({ timeLeft }: { timeLeft: { days: number; hours: number; minutes: number; seconds: number } }) => (
  <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
    {Object.entries(timeLeft).map(([unit, value], index) => (
      <motion.div
        key={unit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="backdrop-blur-md bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-center shadow-lg min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
      >
        <div className="text-white text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="text-blue-100 uppercase text-[10px] sm:text-xs">
          {unit}
        </div>
      </motion.div>
    ))}
  </div>
));

export function NextSeminar() {
  const reduceMotion = useReducedMotion();
  
  const targetDate = new Date("2026-02-04T15:00:00+03:00").getTime();
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
    <section id="next-seminar" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <div className="backdrop-blur-xl bg-white rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-6 md:p-10 lg:p-12 border border-slate-200 shadow-xl">
          
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">
                Next Seminar Starts In
              </span>
            </div>
          </motion.div>


          {/* Countdown Timer */}
          <CountdownTimer timeLeft={timeLeft} />

          {/* Talk Title */}
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-blue-900 mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight px-2">
              On Fractional-Order Discrete-Time Systems: Chaos, Stabilization, and Synchronization.
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto"></div>
          </motion.div>

          {/* Speaker Info */}
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/60 rounded-3xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/60 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl shadow-xl ring-4 ring-blue-500/20 overflow-hidden">
                  <ImageWithFallback
                    src="images/photo_Lozi.jpg"
                    alt="Prof.Dr. Rene LOZI"
                    className="w-full h-full object-cover object-center scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm mb-2 sm:mb-3">
                  Speaker
                </div>
                <h3 className="text-blue-900 mb-1 sm:mb-2 text-xl sm:text-2xl">Prof.Dr. Rene LOZI</h3>
                <p className="text-blue-700 mb-2 sm:mb-3 text-sm sm:text-base">
                  Professor of Applied Mathematics
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Prof. René Lozi is a Professor of Mathematics at Université Côte d’Azur (Dieudonné Center of Mathematics, France) and a leading
                  figure in nonlinear dynamics and chaos theory. He is best known for discovering the Lozi map, a planar system with a strange attractor. 
                  His research spans dynamical systems, complexity and emergence, chaos control, and applications to cryptography, memristors, and 
                  artificial intelligence. He currently serves as Vice President of the International Society of Difference Equations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Date & Info */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8"
          >
            {[
              { icon: Calendar, label: "Date", value: "February 4, 2026" },
              { icon: Clock, label: "Time", value: "3:00 PM (GMT+3)" },
              { icon: MapPin, label: "Location", value: "Zoom Meeting" },
            ].map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-blue-200/50 shadow-md"
              >
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <info.icon className="text-white" size={16} />
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">{info.label}</div>
                </div>
                <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">{info.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Abstract */}
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-sm bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-5 sm:p-6 md:p-8 border border-slate-200/50 shadow-md"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              <h4 className="text-blue-900 text-lg sm:text-xl">Abstract</h4>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              This talk presents three fractional-order systems: the fractional Lozi map, the fractional 
              Lorenz map, and the fractional flow map. Their main dynamical features, including bifurcation behavior, 
              are examined. Control laws for stabilization and synchronization among combinations of these systems are introduced, 
              with convergence of the stabilized states and synchronization errors established via linearization methods. 
              Numerical simulations are provided to illustrate and support the theoretical results.
            </p>
          </motion.div>

          {/* Join Meeting Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-6 sm:mt-8 md:mt-10"
          >
            <motion.a 
              href="https://online.yildiz.edu.tr/joinmeeting?meetingid=30835276-342b-4732-ab92-7a9e862d59f2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all text-sm sm:text-base"
            >
              Join Meeting
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}