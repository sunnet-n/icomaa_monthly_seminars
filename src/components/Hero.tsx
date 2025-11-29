import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const mathSymbols = ['∫', '∑', 'π', '∞', '∂', 'Δ', '√', 'θ', 'λ', 'α', 'β', 'γ'];

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

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
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

      {/* Math Symbols */}
      {mathSymbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute text-white/10 pointer-events-none select-none"
          style={{
            left: `${(index * 8.33) % 100}%`,
            top: `${(index * 12) % 80 + 10}%`,
            fontSize: `${Math.random() * 20 + 30}px`,
          }}
        >
          {symbol}
        </div>
      ))}

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/20 rounded-lg" />
      <div 
        className="absolute bottom-20 right-10 w-40 h-40 border-2 border-cyan-400/20"
        style={{ borderRadius: '30%' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div>
          {/* Title */}
          <h1 className="mb-3 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              ICOMAA
            </span>
            <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-2">
              Seminar Series
            </span>
          </h1>

          {/* Subtitle with scientific styling */}
          <div className="relative mb-8 sm:mb-12">
            <div className="inline-block relative">
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-sm border-y border-white/20">
                International Conference on Mathematics and Applications
              </p>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-3 sm:p-6 hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-4xl text-blue-400 mb-1 sm:mb-2">10+</div>
              <div className="text-white/80 text-xs sm:text-sm">Invited Speakers</div>
            </div>
            <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-3 sm:p-6 hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-4xl text-cyan-400 mb-1 sm:mb-2">20+</div>
              <div className="text-white/80 text-xs sm:text-sm">Countries</div>
            </div>
            <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-3 sm:p-6 hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-4xl text-blue-400 mb-1 sm:mb-2">200+</div>
              <div className="text-white/80 text-xs sm:text-sm">Attendees</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.querySelector("#next-seminar")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <span>View Next Seminar</span>
              <span>→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-3">
          <div className="text-blue-400/70 text-xs uppercase tracking-wider">Scroll</div>
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-12 h-12 rounded-full bg-blue-400/20 blur-xl animate-pulse"></div>
            
            {/* Main circle */}
            <div className="relative w-12 h-12 rounded-full border-2 border-blue-400/60 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center shadow-lg">
              {/* Arrow down with gradient */}
              <svg 
                className="w-6 h-6 text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            
            {/* Inner decorative dots */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}