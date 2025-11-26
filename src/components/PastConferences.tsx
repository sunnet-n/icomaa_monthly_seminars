import { Calendar, Users } from "lucide-react";

export function PastConferences() {
  const conferences = [
    {
      id: 1,
      title: "ICOMAA 2023",
      date: "September 2023",
      participants: 250,
      theme: "Computational Mathematics in Modern Science",
      description: "A comprehensive exploration of computational methods and their applications.",
    },
    {
      id: 2,
      title: "ICOMAA 2022",
      date: "June 2022",
      participants: 200,
      theme: "Mathematical Modeling and Analysis",
      description: "Focusing on innovative approaches to mathematical modeling in various fields.",
    },
    {
      id: 3,
      title: "ICOMAA 2021",
      date: "November 2021",
      participants: 180,
      theme: "Applied Mathematics in Engineering",
      description: "Bridging the gap between pure mathematics and engineering applications.",
    },
  ];

  return (
    <section id="past-conferences" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-600 text-center mb-12">Past Conferences</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.map((conference) => (
            <div
              key={conference.id}
              className="backdrop-blur-lg bg-white/80 rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-blue-600 mb-4">{conference.title}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 text-slate-600">
                  <Calendar size={18} className="flex-shrink-0" />
                  <span className="text-sm">{conference.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Users size={18} className="flex-shrink-0" />
                  <span className="text-sm">{conference.participants} Participants</span>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-blue-50/50 rounded-2xl p-4 mb-4">
                <div className="text-sm text-slate-600 mb-2">Theme</div>
                <div className="text-blue-900">{conference.theme}</div>
              </div>

              <p className="text-slate-600 text-sm">{conference.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
