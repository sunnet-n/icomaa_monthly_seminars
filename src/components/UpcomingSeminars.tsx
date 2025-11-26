import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";

const seminars = [
  {
    id: 1,
    title: "Digital Transformation Strategies",
    speaker: "Dr. Sarah Mitchell",
    date: "December 15, 2025",
    time: "2:00 PM EST",
    status: "upcoming" as const,
    description: "Exploring cutting-edge approaches to modernizing business operations"
  },
  {
    id: 2,
    title: "AI and Machine Learning in Business",
    speaker: "Prof. James Chen",
    date: "January 20, 2026",
    time: "3:00 PM EST",
    status: "scheduled" as const,
    description: "Practical applications of AI for business growth and efficiency"
  },
  {
    id: 3,
    title: "Sustainable Business Practices",
    speaker: "Elena Rodriguez",
    date: "February 18, 2026",
    time: "2:00 PM EST",
    status: "scheduled" as const,
    description: "Building environmentally responsible and profitable businesses"
  },
  {
    id: 4,
    title: "Cybersecurity in the Modern Era",
    speaker: "Michael Thompson",
    date: "March 17, 2026",
    time: "2:30 PM EST",
    status: "scheduled" as const,
    description: "Protecting your organization from emerging digital threats"
  }
];

export function UpcomingSeminars() {
  return (
    <section id="seminars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="mb-2">Monthly Schedule</Badge>
            <h2 className="text-4xl md:text-5xl">Upcoming Seminars</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these exciting sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {seminars.map((seminar) => (
              <Card
                key={seminar.id}
                className={`hover:shadow-lg transition-all ${
                  seminar.status === "upcoming" ? "border-blue-500 border-2" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <Badge variant={seminar.status === "upcoming" ? "default" : "secondary"}>
                      {seminar.status === "upcoming" ? "Next Up" : "Scheduled"}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{seminar.title}</CardTitle>
                  <CardDescription>{seminar.speaker}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">{seminar.description}</p>
                  <div className="flex flex-col gap-1 text-sm text-gray-500">
                    <span>📅 {seminar.date}</span>
                    <span>🕐 {seminar.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
