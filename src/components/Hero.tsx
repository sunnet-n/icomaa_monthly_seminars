import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import heroBackground from "figma:asset/b187e5bbab21da26ba5a17293f83b52486fa210e.png";

export function Hero() {
  return (
    <div
      id="home"
      className="relative h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden max-w-[100vw]"
      style={{
        backgroundImage: `url('${heroBackground}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-white drop-shadow-2xl">
            Professional Development Seminars
          </h1>
          
          <p className="text-sm md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
            Join industry experts every month for insightful discussions, networking opportunities, and professional growth
          </p>
          
          <div className="flex justify-center items-center pt-2 md:pt-4">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl md:rounded-2xl p-1 border border-white/30 shadow-2xl">
              <Button
                size="sm"
                onClick={() => {
                  const element = document.getElementById("conference");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent hover:bg-white/20 text-white px-4 py-3 text-xs md:px-10 md:py-7 md:text-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}