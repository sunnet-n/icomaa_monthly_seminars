import { Users, Calendar, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export function ForumIntro() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const features = [
    {
      icon: Users,
      title: "Invited Speakers",
      description:
        "Researchers from top institutions worldwide present their latest findings.",
      buttonText: "View speakers",
      gradient: "from-indigo-600 via-sky-600 to-indigo-600",
      bgGradient: "from-sky-50 to-teal-50",
      onClick: () => navigate("/seminars?tab=past"),
    },
    {
      icon: Calendar,
      title: "Weekly Sessions",
      description:
        "A 45-minute research presentation, followed by an interactive Q&A session.",
      buttonText: "See schedule",
      gradient: "from-indigo-600 via-sky-600 to-indigo-600",
      bgGradient: "from-sky-50 to-teal-50",
      onClick: () =>
        document
          .querySelector("#next-seminar")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: Bell,
      title: "Stay Informed",
      description:
        "Announcements, abstracts, and Zoom access for upcoming seminars.",
      buttonText: "Subscribe",
      gradient: "from-indigo-600 via-sky-600 to-indigo-600",
      bgGradient: "from-teal-50 to-indigo-50",
      onClick: () => navigate("/contact"),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="relative max-w-6xl mx-auto">
        {/* Intro */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.h2
            variants={item}
            className="mt-6 mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600"
          >
            A Forum for Mathematical Research
          </motion.h2>

          <motion.p
            variants={item}
            className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            The ICOMAA Seminar Series brings together researchers from around the world to share and discuss recent advances in mathematics.
            Organized as an online seminar series via Zoom, ICOMAA provides an open and accessible platform
             for presenting new research, fostering collaboration, and connecting with the mathematical community.
              Participation is free, and each seminar features a high-quality talk by an expert in the field.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group relative rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-shadow hover:shadow-2xl"
            >
              {/* subtle ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" />

              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.bgGradient} shadow-md transition-transform group-hover:scale-110`}
              >
                <feature.icon
                  size={32}
                  strokeWidth={2.5}
                  className="text-slate-700"
                />
              </div>

              {/* Content */}
              <h3
                className={`mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}
              >
                {feature.title}
              </h3>
              <p className="mb-8 text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* CTA */}
              <button
                onClick={feature.onClick}
                className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r ${feature.gradient} px-6 py-3.5 text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 active:scale-95 min-h-[48px] text-base`}
              >
                {feature.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}