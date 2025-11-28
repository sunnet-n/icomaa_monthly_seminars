import { ImageWithFallback } from "./figma/ImageWithFallback";
import backgroundImage from "figma:asset/b564ddf7b1f7a62342a64bd68e941672a8edd26f.png";

export function Team() {
  const organizers = [
    {
      id: 1,
      name: "Dr. Emily Thompson",
      role: "Conference Chair",
      affiliation: "MIT",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      email: "emily.thompson@icomaa.org",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Prof. Michael Zhang",
      role: "Program Director",
      affiliation: "Stanford University",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      email: "michael.zhang@icomaa.org",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      role: "Logistics Coordinator",
      affiliation: "Cambridge University",
      photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
      email: "sarah.martinez@icomaa.org",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="team" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover object-center scale-105 md:scale-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-white drop-shadow-lg mb-2 text-3xl sm:text-4xl">
            Our Team
          </h2>
          <p className="text-white drop-shadow-md text-sm sm:text-base max-w-2xl mx-auto px-4">
            Meet the dedicated professionals behind ICOMAA Seminar Series
          </p>
        </div>

        {/* Organizers Container */}
        <div className="backdrop-blur-2xl bg-black/60 rounded-3xl border border-white/30 shadow-2xl overflow-hidden mb-8">
          <div className="p-5 sm:p-6">
            <h3 className="text-white drop-shadow-lg text-center mb-5 text-xl sm:text-2xl">Conference Organizers</h3>
            
            <div className="space-y-0">
              {organizers.map((organizer, index) => (
                <div key={organizer.id}>
                  <div className="flex items-start gap-4 py-4">
                    {/* Avatar */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-xl ring-2 ring-white/40 bg-gradient-to-br ${organizer.color} overflow-hidden flex-shrink-0`}>
                      <ImageWithFallback
                        src={organizer.photo}
                        alt={organizer.name}
                        className="w-full h-full object-cover object-center scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white drop-shadow-md text-base sm:text-lg mb-0.5">{organizer.name}</h4>
                      <p className="text-white/80 drop-shadow-md text-xs sm:text-sm mb-0.5">{organizer.role}</p>
                      <p className="text-white/70 drop-shadow-md text-xs mb-1">{organizer.affiliation}</p>
                      <p className="text-xs">
                        <span className="text-white/60 drop-shadow-md">Email: </span>
                        <a
                          href={`mailto:${organizer.email}`}
                          className="text-amber-500 hover:text-amber-400 transition-colors break-words"
                        >
                          {organizer.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider Line */}
                  {index < organizers.length - 1 && (
                    <div className="h-px bg-white/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Team Photo */}
        <div className="backdrop-blur-2xl bg-black/50 rounded-3xl p-5 sm:p-6 border border-white/30 shadow-2xl mb-8">
          <h3 className="text-white drop-shadow-lg text-center mb-5 text-xl sm:text-2xl">Meet the Entire Team</h3>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-5">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="ICOMAA Team"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="text-center">
            <p className="text-white/90 drop-shadow-md leading-relaxed max-w-3xl mx-auto mb-5 text-xs sm:text-sm">
              Our team consists of dedicated researchers, administrative staff, volunteers, and student 
              assistants who work tirelessly to make ICOMAA events successful.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="backdrop-blur-xl bg-white/20 rounded-xl p-3 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-xl sm:text-2xl">25+</div>
                <p className="text-white/80 drop-shadow-md text-xs">Team Members</p>
              </div>
              <div className="backdrop-blur-xl bg-white/20 rounded-xl p-3 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-xl sm:text-2xl">15+</div>
                <p className="text-white/80 drop-shadow-md text-xs">Volunteers</p>
              </div>
              <div className="backdrop-blur-xl bg-white/20 rounded-xl p-3 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-xl sm:text-2xl">10+</div>
                <p className="text-white/80 drop-shadow-md text-xs">Universities</p>
              </div>
              <div className="backdrop-blur-xl bg-white/20 rounded-xl p-3 border border-white/30 shadow-lg">
                <div className="text-white drop-shadow-md text-xl sm:text-2xl">8</div>
                <p className="text-white/80 drop-shadow-md text-xs">Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center backdrop-blur-2xl bg-white/20 rounded-3xl p-5 sm:p-6 border border-white/30 text-white shadow-2xl">
          <h3 className="text-white drop-shadow-lg mb-3 text-xl sm:text-2xl">Join Our Team</h3>
          <p className="text-white/90 drop-shadow-md mb-4 max-w-2xl mx-auto text-xs sm:text-sm">
            We're always looking for passionate individuals to help us organize amazing mathematical events.
          </p>
          <button className="bg-white text-neutral-900 px-6 py-3 rounded-full hover:scale-105 transition-all shadow-xl text-sm">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}
