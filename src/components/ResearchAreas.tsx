import { motion, useReducedMotion } from "motion/react";

export function ResearchAreas() {
  const reduceMotion = useReducedMotion();

  const areas = [
    {
      title: "Harmonic Analysis",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Partial Differential Equations",
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      title: "Functional Analysis",
      gradient: "from-teal-600 to-emerald-600",
    },
    {
      title: "Spectral Theory",
      gradient: "from-emerald-600 to-green-600",
    },
    {
      title: "Optimal Transport",
      gradient: "from-green-600 to-lime-600",
    },
    {
      title: "Geometric Analysis",
      gradient: "from-lime-600 to-yellow-600",
    },
    {
      title: "Nonlinear Analysis",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      title: "Applied Mathematics",
      gradient: "from-orange-600 to-blue-600",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: reduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" } 
        },
  };

  const headerItem = {
    hidden: { opacity: 0, y: 30 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: "easeOut" } 
        },
  };

  const ctaVariant = {
    hidden: { opacity: 0, y: 40 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } 
        },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.h2 
            variants={headerItem}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 mb-4 text-3xl sm:text-4xl"
          >
            Research Areas
          </motion.h2>
          <motion.p 
            variants={headerItem}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Topics covered in our seminar series
          </motion.p>
        </motion.div>

        {/* Research Areas Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              variants={item}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {/* Title */}
              <h3 className="text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300 text-base sm:text-lg leading-snug">
                {area.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={ctaVariant}
        >
          <div className="backdrop-blur-xl bg-slate-700 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-white mb-4 text-2xl sm:text-3xl">
              Interested in Presenting?
            </h3>
            <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto">
              We welcome proposals from researchers working in these and related areas. Send us email.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}