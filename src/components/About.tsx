import { Award, BookOpen, Globe, Target, Users, TrendingUp, Calendar } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export function About() {
  const reduceMotion = useReducedMotion();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To advance mathematical research and foster collaboration among researchers worldwide.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting mathematicians and researchers from over 40 countries across continents.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "Providing a platform for presenting cutting-edge research and innovative solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in mathematical research and academic discourse.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "ICOMAA was established with the vision of creating a global mathematics community.",
      website: "https://2018.icomaas.com",
      images: [
        {
          url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
          caption: "ICOMAA Foundation Ceremony 2018"
        },
        {
          url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
          caption: "Founding Team Meeting"
        }
      ]
    },
    {
      year: "2019",
      title: "First Conference",
      description: "Hosted our inaugural conference with 200+ participants from 25 countries.",
      website: "https://2019.icomaas.com",
      images: [
        {
          url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
          caption: "Opening Ceremony 2019"
        },
        {
          url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
          caption: "First Conference Participants"
        },
        {
          url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
          caption: "Keynote Presentation"
        }
      ]
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Launched online seminars and webinars, reaching a global audience.",
      website: "https://2020.icomaas.com",
      images: [
        {
          url: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80",
          caption: "Online Seminar Series Launch"
        },
        {
          url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
          caption: "Virtual Conference Setup"
        }
      ]
    },
    {
      year: "2023",
      title: "Record Participation",
      description: "Over 500 researchers joined our annual conference and weekly seminars.",
      website: "https://2023.icomaas.com",
      images: [
        {
          url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
          caption: "Record Breaking Conference 2023"
        },
        {
          url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
          caption: "Full Auditorium"
        },
        {
          url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
          caption: "Networking Sessions"
        }
      ]
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Expanded to include specialized tracks and collaborative research initiatives.",
      website: "https://2024.icomaas.com",
      images: [
        {
          url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
          caption: "2024 Conference Highlights"
        },
        {
          url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
          caption: "Specialized Track Sessions"
        }
      ]
    }
  ];

  const stats = [
    { icon: Users, number: "2000+", label: "Total Participants" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: BookOpen, number: "100+", label: "Seminars Held" },
    { icon: TrendingUp, number: "98%", label: "Satisfaction Rate" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
          About ICOMAA
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="backdrop-blur-lg bg-white/70 rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-xl mb-12"
        >
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            The International Conference on Mathematics and Applications (ICOMAA) is a premier platform 
            for researchers, academics, and professionals to share their latest findings and innovations 
            in the field of mathematics and its applications.
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Since its inception, ICOMAA has been committed to fostering intellectual exchange, 
            promoting collaborative research, and advancing the frontiers of mathematical knowledge 
            across diverse disciplines.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.02 }}
                className="backdrop-blur-sm bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-2xl p-5 sm:p-6 border border-purple-200/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="backdrop-blur-sm bg-gradient-to-br from-purple-600 to-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700 mb-2 text-base sm:text-lg">{feature.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl sm:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600" />
            
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg transform -translate-x-1/2 z-10">
                    <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-75" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 w-full sm:w-5/12 ${index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                    <button
                      onClick={() => setSelectedYear(index)}
                      className="w-full text-left backdrop-blur-xl bg-white/80 rounded-2xl p-5 sm:p-6 border border-white/60 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="text-purple-600 group-hover:scale-110 transition-transform" size={20} />
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            {item.year}
                          </span>
                        </div>
                        <div className="text-xs text-purple-600 group-hover:text-purple-700">
                          Click to view
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">{item.title}</h4>
                      <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                      
                      {/* Preview of images */}
                      <div className="flex gap-2 mb-3">
                        {item.images.slice(0, 3).map((img, imgIndex) => (
                          <div key={imgIndex} className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all">
                            <img
                              src={img.url}
                              alt={img.caption}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Globe size={14} />
                        <span className="truncate">{item.website}</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/60 shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                <stat.icon className="text-purple-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                {stat.number}
              </div>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Year Gallery Modal */}
      {selectedYear !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedYear(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedYear(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
            >
              ✕
            </button>

            {/* Year Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-purple-600" size={28} />
                <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {timeline[selectedYear].year}
                </h3>
              </div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">{timeline[selectedYear].title}</h4>
              <p className="text-slate-600 text-lg mb-4">{timeline[selectedYear].description}</p>
              
              {/* Website Link */}
              <a
                href={timeline[selectedYear].website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 shadow-md"
              >
                <Globe size={16} />
                <span>Visit {timeline[selectedYear].year} Website</span>
              </a>
            </div>

            {/* Image Gallery */}
            <div className="grid sm:grid-cols-2 gap-4">
              {timeline[selectedYear].images.map((image, imgIndex) => (
                <div key={imgIndex} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}