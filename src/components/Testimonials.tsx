import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Dr. Maria Santos",
    role: "Associate Professor, MIT",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzYzODUzMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "These monthly seminars have been invaluable in preparing my research team for ICOMAA 2026. The quality of speakers and content is exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Prof. Ahmed Hassan",
    role: "Mathematics Department Head, Cairo University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2Mzg5NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The networking opportunities alone are worth attending. I've connected with researchers from around the world and established several collaborations.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    role: "Research Scientist, Stanford",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM4MDkzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The presentations are cutting-edge and the Q&A sessions are incredibly insightful. I recommend these seminars to all my colleagues.",
    rating: 5
  },
  {
    id: 4,
    name: "Prof. Li Wei",
    role: "Applied Mathematics, Tsinghua University",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4MDkxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Excellent organization and fascinating topics. The recordings are also a great resource that I share with my students.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl mb-4">
              What Participants Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community of researchers and professionals
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
                    <ImageWithFallback
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-200 opacity-50" />
                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                      "{currentTestimonial.quote}"
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">{currentTestimonial.name}</p>
                    <p className="text-gray-600">{currentTestimonial.role}</p>
                  </div>

                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-blue-600"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
