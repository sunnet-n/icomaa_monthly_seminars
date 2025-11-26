import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Plane, Info } from "lucide-react";

const venueDetails = [
  {
    icon: MapPin,
    title: "Conference Venue",
    description: "Istanbul Congress Center",
    details: "State-of-the-art facility in the heart of Istanbul with modern amenities and excellent acoustics"
  },
  {
    icon: Plane,
    title: "Getting There",
    description: "Istanbul Airport (IST)",
    details: "35 minutes from the airport. Shuttle service available for conference participants"
  }
];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1637088059602-14811066111d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjQwMjI0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Istanbul Modern Architecture"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZyUyMHBlb3BsZXxlbnwxfHx8fDE3NjQwMjI0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Conference Networking"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1662633271219-19046b1b2351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMG1vc3F1ZSUyMGhpc3RvcmljfGVufDF8fHx8MTc2NDAyMjQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Istanbul Historic Mosque"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1758685848342-b5c350727ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGFjYWRlbWljJTIwc3R1ZHl8ZW58MXx8fHwxNzY0MDIyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Academic Mathematics Study"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1686970832609-713887a01fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMGdyYW5kJTIwYmF6YWFyfGVufDF8fHx8MTc2NDAyMjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Istanbul Grand Bazaar"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwc2VtaW5hcnxlbnwxfHx8fDE3NjM5ODM3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Conference Presentation"
  }
];

export function VenueInfo() {
  return (
    <section id="venue" className="py-20 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 backdrop-blur-sm rounded-full mb-4 border border-orange-500/30">
              <MapPin className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Venue Information
            </h2>
            <p className="text-xl text-gray-300">
              ICOMAA 2026 • Istanbul, Turkey • May 6-8, 2026
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600425983819-bfa245a64f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMGJvc3Bob3J1cyUyMHZpZXd8ZW58MXx8fHwxNzYzOTMzNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Istanbul Bosphorus View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl mb-2">Experience Istanbul</h3>
                  <p className="text-lg text-gray-200">Where East meets West - A city of rich history and vibrant culture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {venueDetails.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-2 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/10 transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full flex items-center justify-center mx-auto border border-orange-500/30">
                      <IconComponent className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-white">{item.title}</h3>
                      <p className="text-orange-400 mb-2">{item.description}</p>
                      <p className="text-sm text-gray-400">{item.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Visual Gallery */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="mb-2 text-white">Discover Istanbul & ICOMAA</h3>
              <p className="text-gray-400">A glimpse of the conference experience</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border-orange-600/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="mb-2 text-white">Ready to Join Us in Istanbul?</h3>
                <p className="text-gray-300 mb-6">
                  Conference registration opens February 2026. Join our monthly seminars to prepare!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Register Interest
                  </Button>
                  <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-600/20">
                    Download Venue Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}