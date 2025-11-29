import { Award, BookOpen, Globe, Target } from "lucide-react";

export function About() {
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

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center mb-8 sm:mb-12 text-3xl sm:text-4xl">About ICOMAA</h2>

        <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-xl mb-8 sm:mb-12">
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
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 rounded-3xl p-6 sm:p-8 border border-purple-200/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="backdrop-blur-sm bg-gradient-to-br from-purple-600 to-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700 mb-2 sm:mb-3 text-lg sm:text-xl">{feature.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
