import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { pastSeminars } from "../data/pastSeminars";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SeminarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const seminar = pastSeminars.find(s => s.id === Number(id));

  if (!seminar) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-slate-800 mb-4">Seminar Not Found</h2>
          <Link
            to="/seminars"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:scale-105 transition-all"
          >
            Back to Seminars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 group transition-all"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Seminars</span>
          </button>

          <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-6 md:p-10 lg:p-12 border border-white/40 shadow-2xl">
            
            {/* Badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className={`inline-flex items-center gap-2 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg ${
                seminar.isUpcoming 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                  : "bg-gradient-to-r from-purple-600 to-blue-700"
              }`}>
                <Calendar size={16} />
                <span className="text-xs sm:text-sm">
                  {seminar.isUpcoming ? "Upcoming Seminar" : "Past Seminar"}
                </span>
              </div>
            </div>

            {/* Talk Title */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-blue-900 mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight px-2">
                {seminar.title}
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-600 to-purple-400 rounded-full mx-auto"></div>
            </div>

            {/* Speaker Info */}
             <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/60 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                {/* Speaker Photo */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl shadow-xl ring-4 ring-natural-500/20 overflow-hidden bg-slate-100">
                    {seminar.speakerPhoto ? (
                      <img
                        src={seminar.speakerPhoto}
                        alt={seminar.speaker}
                        className="w-full h-full object-cover object-center scale-110"
                        onError={(e) => {
                          console.log("Image failed to load:", seminar.speakerPhoto);
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100"><span class="text-4xl text-purple-600">${seminar.speaker.charAt(0)}</span></div>`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                        <span className="text-4xl text-purple-600">
                          {seminar.speaker.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Speaker Details */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm mb-2 sm:mb-3">
                    Speaker
                  </div>
                  <h3 className="text-blue-900 mb-1 sm:mb-2 text-xl sm:text-2xl">{seminar.speaker}</h3>
                  <p className="text-blue-700 mb-2 sm:mb-3 text-sm sm:text-base">
                    {seminar.position}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {seminar.speakerBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Info */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-purple-200/50 shadow-md">
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Calendar className="text-white" size={16} />
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Date</div>
                </div>
                <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">{seminar.date}</div>
              </div>

              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-purple-200/50 shadow-md">
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Clock className="text-white" size={16} />
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Time</div>
                </div>
                <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">{seminar.time}</div>
              </div>

              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50 to-blue-100/50 rounded-2xl p-3 sm:p-5 border border-purple-200/50 shadow-md">
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm hidden sm:block">Location</div>
                </div>
                <div className="text-blue-900 text-xs sm:text-base text-center sm:text-left">{seminar.location}</div>
              </div>
            </div>

            {/* Abstract */}
            <div className="backdrop-blur-sm bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-3xl p-5 sm:p-6 md:p-8 border border-slate-200/50 shadow-md">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full"></div>
                <h4 className="text-blue-900 text-lg sm:text-xl">About This Seminar</h4>
              </div>
              {seminar.abstract.map((paragraph, index) => (
                <p key={index} className={`text-slate-700 leading-relaxed text-sm sm:text-base ${index < seminar.abstract.length - 1 ? 'mb-3 sm:mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Meeting Link - Only show for past seminars with recordings OR upcoming seminars with join links */}
            {seminar.meetingLink && (
              <div className="text-center mt-6 sm:mt-8 md:mt-10">
                <a 
                  href={seminar.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95 will-change-transform text-sm sm:text-base ${
                    seminar.isUpcoming
                      ? "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800"
                      : "bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800"
                  }`}
                >
                  {seminar.isUpcoming ? "Join Meeting" : "View Recording"}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}