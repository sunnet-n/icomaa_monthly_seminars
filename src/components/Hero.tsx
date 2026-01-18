import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.8, ease: "easeOut" } 
        },
  };

  const subtitleVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: reduceMotion
      ? { opacity: 1, scale: 1 }
      : { 
          opacity: 1, 
          scale: 1, 
          transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } 
        },
  };

  const statsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 20 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.5, ease: "easeOut" } 
        },
  };

  const ctaVariant = {
    hidden: { opacity: 0, y: 20 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: "easeOut", delay: 0.8 } 
        },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
          alt="Conference background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-blue-900/85 to-slate-900/90"></div>
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="show"
        >
          {/* Title */}
          <motion.h1 
            variants={titleVariant}
            className="mb-3 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              ICOMAA
            </span>
            <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-2">
              Seminar Series
            </span>
          </motion.h1>

          {/* Subtitle with scientific styling */}
          <motion.div 
            variants={subtitleVariant}
            className="relative mb-8 sm:mb-12"
          >
            <div className="inline-block relative">
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-sm border-y border-white/20">
                International Conference on Mathematics and Applications
              </p>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div 
            variants={statsContainer}
            className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto"
          >
            <motion.div 
              variants={statItem}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-3 sm:p-6 transition-transform"
            >
              <div className="text-2xl sm:text-4xl text-blue-400 mb-1 sm:mb-2">50+</div>
              <div className="text-white/80 text-xs sm:text-sm">Speakers</div>
            </motion.div>
            <motion.div 
              variants={statItem}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-3 sm:p-6 transition-transform"
            >
              <div className="text-2xl sm:text-4xl text-cyan-400 mb-1 sm:mb-2">15+</div>
              <div className="text-white/80 text-xs sm:text-sm">Countries</div>
            </motion.div>
            <motion.div 
              variants={statItem}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-3 sm:p-6 transition-transform"
            >
              <div className="text-2xl sm:text-4xl text-blue-400 mb-1 sm:mb-2">200+</div>
              <div className="text-white/80 text-xs sm:text-sm">Attendees</div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={ctaVariant}
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            onClick={() => document.querySelector("#next-seminar")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all text-base sm:text-lg relative overflow-hidden group min-h-[48px] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <span>View Next Seminar</span>
              <span className="text-xl">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}