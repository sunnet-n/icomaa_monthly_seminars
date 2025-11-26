import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Users, Award, BookOpen } from "lucide-react";

export function SeminarDetails() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="mb-2">About Our Seminars</Badge>
            <h2 className="text-4xl md:text-5xl">Next Seminar Details</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for an engaging session on innovation and leadership in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Calendar className="w-10 h-10 text-blue-600" />
                  <Badge>Upcoming</Badge>
                </div>
                <CardTitle>Date & Time</CardTitle>
                <CardDescription>December 15, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>2:00 PM - 4:00 PM EST</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-10 h-10 text-blue-600" />
                <CardTitle>Location</CardTitle>
                <CardDescription>Virtual Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join from anywhere via Zoom. Link will be provided upon registration.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 text-blue-600" />
                <CardTitle>Speaker</CardTitle>
                <CardDescription>Dr. Sarah Mitchell</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chief Innovation Officer at TechCorp, 15+ years of industry experience
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-blue-600" />
                <CardTitle>Topic</CardTitle>
                <CardDescription>Digital Transformation Strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploring cutting-edge approaches to modernizing business operations
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-blue-600" />
                <div>
                  <CardTitle>What You'll Learn</CardTitle>
                  <CardDescription>Key takeaways from this seminar</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Innovative strategies for digital transformation in modern organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Leadership techniques for managing remote and hybrid teams effectively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Best practices for implementing emerging technologies in your workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Networking opportunities with industry professionals and thought leaders</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
