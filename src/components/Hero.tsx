import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl">
            ICOMAA Seminar Series
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mb-8">
            International Conference on Mathematics and Applications
          </p>
          <button
            onClick={() => document.querySelector("#next-seminar")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            View Next Seminar
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
