import { Mail, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";
import backgroundImage from "figma:asset/b564ddf7b1f7a62342a64bd68e941672a8edd26f.png";
import { useState } from "react";

export function Team() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const organizers = [
    {
      id: 1,
      name: "Dr. Emily Thompson",
      role: "Conference Chair",
      affiliation: "MIT",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      email: "emily.thompson@icomaa.org",
      bio: "Leading researcher in computational mathematics with over 15 years of experience organizing international conferences.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Prof. Michael Zhang",
      role: "Program Director",
      affiliation: "Stanford University",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      email: "michael.zhang@icomaa.org",
      bio: "Expert in applied mathematics and curriculum development, dedicated to fostering academic excellence.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      role: "Logistics Coordinator",
      affiliation: "Cambridge University",
      photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
      email: "sarah.martinez@icomaa.org",
      bio: "Specializes in event management and international collaboration, ensuring seamless conference experiences.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white drop-shadow-lg mb-4">
            Our Team
          </h2>
          <p className="text-white drop-shadow-md text-lg max-w-2xl mx-auto">
            Meet the dedicated professionals behind ICOMAA Seminar Series
          </p>
        </div>

        {/* Organizers */}
        <div className="mb-16">
          <h3 className="text-white drop-shadow-lg text-center mb-8">Conference Organizers</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {organizers.map((organizer) => (
              <div
                key={organizer.id}
                className="backdrop-blur-2xl bg-black/60 rounded-[2rem] overflow-hidden border border-white/30 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 group"
              >
                {/* Avatar at Top */}
                <div className="pt-8 flex justify-center">
                  <div 
                    className={`w-24 h-24 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 bg-gradient-to-br ${organizer.color} cursor-pointer hover:ring-white/70 transition-all`}
                    onClick={() => setModalImage({ 
                      src: organizer.photo.replace('w=400', 'w=1200'), 
                      alt: organizer.name 
                    })}
                  >
                    <ImageWithFallback
                      src={organizer.photo}
                      alt={organizer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 pb-6 px-6 text-center">
                  <h4 className="text-white drop-shadow-md mb-2">{organizer.name}</h4>
                  <div className={`inline-block bg-gradient-to-r ${organizer.color} text-white px-4 py-1.5 rounded-full text-sm mb-3 shadow-lg`}>
                    {organizer.role}
                  </div>
                  <p className="text-white/90 drop-shadow-md text-sm mb-4">{organizer.affiliation}</p>
                  
                  <p className="text-white/80 drop-shadow-md text-sm leading-relaxed mb-6">
                    {organizer.bio}
                  </p>

                  {/* Contact & Social */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={`mailto:${organizer.email}`}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${organizer.color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="#"
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${organizer.color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${organizer.color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Team Photo */}
        <div className="backdrop-blur-2xl bg-black/50 rounded-[2.5rem] p-6 sm:p-10 border border-white/30 shadow-2xl">
          <h3 className="text-white drop-shadow-lg text-center mb-8">Meet the Entire Team</h3>
          
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => setModalImage({ 
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80", 
              alt: "ICOMAA Team" 
            })}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="ICOMAA Team"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/90 drop-shadow-md leading-relaxed max-w-3xl mx-auto mb-6">
              Our team consists of dedicated researchers, administrative staff, volunteers, and student 
              assistants who work tirelessly to make ICOMAA events successful. Together, we bring diverse 
              expertise from mathematics, event management, communications, and technology to create 
              exceptional academic experiences.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-4 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-2xl sm:text-3xl mb-1">25+</div>
                <p className="text-white/80 drop-shadow-md text-sm">Team Members</p>
              </div>
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-4 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-2xl sm:text-3xl mb-1">15+</div>
                <p className="text-white/80 drop-shadow-md text-sm">Volunteers</p>
              </div>
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-4 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-2xl sm:text-3xl mb-1">10+</div>
                <p className="text-white/80 drop-shadow-md text-sm">Universities</p>
              </div>
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-4 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-2xl sm:text-3xl mb-1">8</div>
                <p className="text-white/80 drop-shadow-md text-sm">Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="mt-12 text-center backdrop-blur-2xl bg-white/20 rounded-3xl p-8 sm:p-10 border border-white/30 text-white shadow-2xl">
          <h3 className="text-white drop-shadow-lg mb-4">Join Our Team</h3>
          <p className="text-white/90 drop-shadow-md mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help us organize amazing mathematical events. 
            Whether you're a researcher, student, or enthusiast, there's a place for you!
          </p>
          <button className="bg-white text-neutral-900 px-8 py-4 rounded-full hover:scale-105 transition-all shadow-xl">
            Become a Volunteer
          </button>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={modalImage?.src || ""}
        alt={modalImage?.alt || ""}
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
      />
    </section>
  );
}