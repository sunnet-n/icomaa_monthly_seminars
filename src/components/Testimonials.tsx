import { Star, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  const testimonials = [
    {
      name: "Dr. Emily Chen",
      position: "Professor, Harvard University",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      text: "ICOMAA seminars have been invaluable to my research. The quality of presentations and the opportunity to network with leading mathematicians from around the world is truly exceptional.",
      rating: 5
    },
    {
      name: "Prof. Michael Rodriguez",
      position: "Research Director, MIT",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      text: "The annual conference is a highlight of my academic calendar. The organization is impeccable, and the breadth of topics covered ensures there's something valuable for everyone.",
      rating: 5
    },
    {
      name: "Dr. Sarah Williams",
      position: "Senior Lecturer, Oxford",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      text: "I've been attending ICOMAA events for three years now. The platform has significantly contributed to my professional development and opened doors to exciting collaborations.",
      rating: 5
    }
  ];

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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-slate-800 mb-4 text-3xl sm:text-4xl">
            What Researchers Say
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Hear from our community of mathematicians and researchers
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 sm:p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <Quote className="text-slate-600" size={24} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-slate-400 fill-slate-400" size={16} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-200 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-slate-900 font-medium">{testimonial.name}</div>
                  <p className="text-slate-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "500+", label: "Participants" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-700 mb-2">
                {stat.number}
              </div>
              <p className="text-slate-600 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}