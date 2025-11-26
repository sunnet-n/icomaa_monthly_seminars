import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, User, Video, X } from "lucide-react";
import conferenceBrochure from "figma:asset/714a6dd208d43acf34c6da74eea1215b3273b86b.png";
import conferenceBrochureDetailed from "figma:asset/365251c5af40fc60ef62fa6786fe15f88ac87532.png";

const committee = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Event Chair",
    image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg1MzA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Prof. James Chen",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM4OTcwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Communications Lead",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYzODA5MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Technical Coordinator",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzgwOTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function NextSeminar() {
  // Set target date to December 15, 2025 at 2:00 PM EST
  const targetDate = new Date("2025-12-15T14:00:00-05:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Conference Brochure - Featured Section */}
          <div className="relative">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-sm px-6 py-2 shadow-lg">
                <Calendar className="w-4 h-4 mr-2" />
                ICOMAA 2026 - Main Conference
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-3 text-neutral-900 font-semibold tracking-tight">
                9th International Hybrid Conference
              </h2>
              <p className="text-lg md:text-xl text-neutral-600">
                Mathematical Advances and Applications
              </p>
            </div>

            {/* Integrated background */}
            <div className="relative max-w-6xl mx-auto">
              {/* Large decorative gradient backgrounds */}
              <div className="absolute -inset-20 bg-gradient-to-br from-blue-900/10 via-amber-500/5 to-orange-500/10 rounded-[4rem] blur-3xl" />
              <div className="absolute -inset-10 bg-gradient-to-tl from-orange-400/10 via-transparent to-blue-800/10 rounded-[3rem] blur-2xl" />
              
              <div 
                className="relative max-w-5xl mx-auto cursor-pointer group"
                onClick={() => setIsBrochureOpen(true)}
              >
                {/* Black frame container with rounded edges - like a photo collage frame */}
                <div className="relative bg-neutral-900 p-6 md:p-8 rounded-[2.5rem] shadow-2xl">
                  
                  {/* Conference Brochure Only */}
                  <div className="rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                    <img
                      src={conferenceBrochureDetailed}
                      alt="ICOMAA 2026 Conference Brochure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12 rounded-[2.5rem] pointer-events-none">
                    <span className="text-white px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/30 font-medium text-lg shadow-2xl">
                      Click to view full brochure
                    </span>
                  </div>
                  
                  {/* Corner accent decorations */}
                  <div className="absolute -top-2 -left-2 w-12 h-12 border-l-4 border-t-4 border-amber-400 rounded-tl-2xl opacity-90" />
                  <div className="absolute -top-2 -right-2 w-12 h-12 border-r-4 border-t-4 border-amber-400 rounded-tr-2xl opacity-90" />
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 border-l-4 border-b-4 border-orange-500 rounded-bl-2xl opacity-90" />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-4 border-b-4 border-orange-500 rounded-br-2xl opacity-90" />
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-neutral-600 mb-4 text-base">
                Our monthly seminars prepare participants for this prestigious international conference
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-50 border-2 border-amber-200 rounded-full shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="text-xs font-medium text-amber-900">May 6-8, 2026 • Istanbul, Turkey</span>
              </div>
            </div>
          </div>

          {/* Modal for detailed brochure */}
          {isBrochureOpen && (
            <div 
              className="fixed inset-0 z-50 bg-white/40 backdrop-blur-xl overflow-y-auto"
              onClick={() => setIsBrochureOpen(false)}
            >
              <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
                <div className="relative w-full max-w-5xl">
                  <button
                    onClick={() => setIsBrochureOpen(false)}
                    className="absolute -top-12 right-0 p-2 bg-white/90 hover:bg-white rounded-full backdrop-blur-sm border border-gray-200 text-gray-700 transition-colors z-10 shadow-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <img
                    src={conferenceBrochureDetailed}
                    alt="ICOMAA 2026 Conference Detailed Brochure"
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Separator */}
          <div className="relative py-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-neutral-50 px-4 text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Monthly Seminar Series</span>
            </div>
          </div>

          {/* Countdown Timer - EXTRA COMPACT VERSION */}
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-2">
              <h3 className="text-sm md:text-base text-neutral-900 font-bold mb-1">Next Seminar Starts In</h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-4 gap-1.5 md:gap-2">
              {/* DAYS */}
              <div className="bg-white border-2 border-blue-800 rounded-xl p-2 md:p-3 text-center shadow-md">
                <div className="text-xl md:text-3xl font-bold text-blue-900 mb-0.5 tabular-nums">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-[9px] md:text-[10px] text-neutral-600 font-bold uppercase tracking-wide border-t border-neutral-200 pt-0.5">Days</div>
              </div>
              
              {/* HOURS */}
              <div className="bg-white border-2 border-amber-500 rounded-xl p-2 md:p-3 text-center shadow-md">
                <div className="text-xl md:text-3xl font-bold text-amber-600 mb-0.5 tabular-nums">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[9px] md:text-[10px] text-neutral-600 font-bold uppercase tracking-wide border-t border-neutral-200 pt-0.5">Hrs</div>
              </div>
              
              {/* MINUTES */}
              <div className="bg-white border-2 border-blue-800 rounded-xl p-2 md:p-3 text-center shadow-md">
                <div className="text-xl md:text-3xl font-bold text-blue-900 mb-0.5 tabular-nums">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[9px] md:text-[10px] text-neutral-600 font-bold uppercase tracking-wide border-t border-neutral-200 pt-0.5">Min</div>
              </div>
              
              {/* SECONDS */}
              <div className="bg-white border-2 border-amber-500 rounded-xl p-2 md:p-3 text-center shadow-md">
                <div className="text-xl md:text-3xl font-bold text-amber-600 mb-0.5 tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[9px] md:text-[10px] text-neutral-600 font-bold uppercase tracking-wide border-t border-neutral-200 pt-0.5">Sec</div>
              </div>
            </div>
          </div>

          {/* Badge - Compact */}
          <div id="next-event" className="text-center relative py-3">
            <Badge className="relative text-xs px-4 py-1.5 bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0 shadow-md font-semibold">
              <Calendar className="w-3 h-3 mr-1.5" />
              Next Event Details
            </Badge>
          </div>

          {/* Combined Title, Details, and Abstract Container - EXTRA COMPACT */}
          <Card className="relative bg-white border-2 border-neutral-300 rounded-2xl shadow-xl overflow-hidden">
            {/* Decorative accent bar at top */}
            <div className="h-1.5 bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500"></div>
            
            <CardContent className="relative z-10 p-4 md:p-6 space-y-4">
              {/* Title - Extra Compact */}
              <div className="text-center space-y-2 max-w-5xl mx-auto">
                <h2 className="text-lg md:text-2xl lg:text-3xl text-blue-900 leading-tight font-bold tracking-tight">
                  Modeling the Role of Immune Cells in Resistance to Oncolotic Viral Therapy with Time Delays
                </h2>
              </div>

              {/* Speaker Highlight - EXTRA COMPACT WITH PORTRAIT */}
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-amber-5 via-orange-50 to-amber-100 border-2 border-amber-300 rounded-xl shadow-md overflow-hidden">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                      {/* Speaker Portrait - Extra Small */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-3 ring-amber-400 shadow-lg">
                            <ImageWithFallback
                              src="https://images.unsplash.com/photo-1758685848226-eedca8f6bce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1Mzc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              alt="Prof. Dr. Sophia JANG"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Badge on portrait */}
                          <div className="absolute -bottom-0.5 -right-0.5 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full p-1 shadow-md ring-2 ring-white">
                            <User className="w-2.5 h-2.5 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Speaker Info - Extra Compact */}
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-[9px] font-bold text-amber-700 uppercase tracking-wider mb-0.5">Featured Speaker</p>
                        <h3 className="text-base md:text-lg font-bold text-blue-900 mb-0.5">
                          Prof. Dr. Sophia JANG
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-700 font-medium mb-1">
                          Texas Tech University, USA
                        </p>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/70 backdrop-blur-sm rounded-full border border-amber-300 shadow-sm">
                          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-[9px] font-semibold text-neutral-700">Expert in Mathematical Biology</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Event Details Card - Extra Compact */}
              <Card className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 border-2 border-blue-200 rounded-xl shadow-md max-w-4xl mx-auto">
                <CardContent className="p-3 md:p-4">
                  <div className="grid md:grid-cols-3 gap-2 md:gap-3 text-center">
                    <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center shadow-sm">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[9px] text-neutral-600 uppercase tracking-wide font-bold mb-0.5">Date</p>
                        <p className="text-neutral-900 font-bold text-xs md:text-sm">December 15, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-amber-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-sm">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[9px] text-neutral-600 uppercase tracking-wide font-bold mb-0.5">Time</p>
                        <p className="text-neutral-900 font-bold text-xs md:text-sm">2:00 PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-200 border-2 border-indigo-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                        <Video className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[9px] text-neutral-600 uppercase tracking-wide font-bold mb-0.5">Platform</p>
                        <p className="text-neutral-900 font-bold text-xs md:text-sm">Zoom</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Abstract Card - Extra Compact */}
              <Card className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-xl shadow-md max-w-5xl mx-auto">
                <CardContent className="p-3 md:p-4 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-800 to-amber-500 rounded-full" />
                    <h3 className="text-blue-900 text-sm md:text-base font-bold">Abstract</h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-xs md:text-sm">
                    This seminar presents an extended tumor-virus interaction model that incorporates immune cells to study 
                   their impact on resistance during oncolytic viral therapy (OVT). We'll explore mathematical modeling 
                   approaches and their clinical implications in cancer treatment.
                  </p>
                  
                  {/* Zoom Link Button - Extra Compact */}
                  <div className="pt-1">
                    <a 
                      href="https://yildiz-edu-tr.zoom.us/meeting/register/vqo-EI7AQvaNRydh9FB_fQ?_x_zm_rtaid=7L9m7ZkDTQ6YZl89c6NYAA.1764020593493.50a4683856509337f668a749d54bcc27&_x_zm_rhtaid=486#/registration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg w-full md:w-auto bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white transition-all duration-300 shadow-lg shadow-blue-800/50 hover:shadow-xl hover:shadow-blue-800/70 transform hover:scale-105 font-bold text-sm"
                    >
                      <Video className="w-4 h-4 mr-1.5" />
                      Join Event on Zoom
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Organizing Committee */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="mb-2">Organizing Committee</h3>
              <p className="text-gray-600">Meet the team behind this event</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {committee.map((member) => (
                <div key={member.id} className="text-center space-y-3 group">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300 transform group-hover:scale-105">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 shadow-lg">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About ICOMAA Conference Section */}
          <div id="conference" className="space-y-8 pt-12">
            <div className="text-center">
              <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-base px-6 py-2">
                About ICOMAA
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-4">
                International Conference on Mathematical Advances and Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A premier annual gathering of mathematicians, researchers, and professionals from around the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-orange-900 mb-4">Conference Aims</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Foster international collaboration among mathematicians and researchers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Present cutting-edge research in mathematical sciences and applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Bridge theoretical mathematics with real-world industrial applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Provide networking opportunities for early-career researchers and established scholars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Promote interdisciplinary approaches to solving complex mathematical problems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-blue-900 mb-4">Monthly Seminar Series</h3>
                  <p className="text-gray-700 mb-4">
                    Our monthly seminars serve as a preparatory platform for the annual ICOMAA conference, 
                    offering participants valuable opportunities to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Stay updated with the latest mathematical research and methodologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Engage with expert speakers and thought leaders in the field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Build connections with fellow researchers and practitioners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Prepare presentations and refine research for the main conference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Access professional development in a convenient online format</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-gray-200 bg-white rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-3 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-3">Join Our Community</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you're preparing for ICOMAA 2026 or simply interested in advancing your knowledge 
                      in mathematical sciences, our monthly seminars provide an accessible and engaging platform 
                      for continuous learning. Each session is carefully designed to complement the annual conference 
                      themes while addressing current trends and challenges in the field. Register for our upcoming 
                      seminar to become part of this vibrant international community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}