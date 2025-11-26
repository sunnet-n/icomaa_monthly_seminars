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
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-600 text-center mb-12">About ICOMAA</h2>

        <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-xl mb-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            The International Conference on Mathematics and Applications (ICOMAA) is a premier platform 
            for researchers, academics, and professionals to share their latest findings and innovations 
            in the field of mathematics and its applications.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Since its inception, ICOMAA has been committed to fostering intellectual exchange, 
            promoting collaborative research, and advancing the frontiers of mathematical knowledge 
            across diverse disciplines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="backdrop-blur-lg bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="backdrop-blur-sm bg-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
