import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Past Seminar Recordings",
    description: "Access all previous seminar recordings and presentations",
    icon: Video,
    items: [
      { name: "November 2025 - Quantum Computing Applications", link: "#" },
      { name: "October 2025 - Machine Learning in Mathematics", link: "#" },
      { name: "September 2025 - Topology and Data Science", link: "#" }
    ]
  },
  {
    id: 2,
    title: "Research Papers",
    description: "Published papers and preprints from our speakers",
    icon: FileText,
    items: [
      { name: "Advanced Computational Methods (2025)", link: "#" },
      { name: "Mathematical Modeling in AI (2024)", link: "#" },
      { name: "Theoretical Foundations (2024)", link: "#" }
    ]
  },
  {
    id: 3,
    title: "Study Materials",
    description: "Supplementary materials and reading lists",
    icon: BookOpen,
    items: [
      { name: "Recommended Reading List", link: "#" },
      { name: "Conference Preparation Guide", link: "#" },
      { name: "Mathematical Software Tools", link: "#" }
    ]
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Download className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Resources & Materials
            </h2>
            <p className="text-xl text-gray-600">
              Access recordings, papers, and study materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div>
                      <h3 className="mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>

                    <div className="space-y-2">
                      {resource.items.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-600">
                            {item.name}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </a>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="mb-2">Need More Resources?</h3>
                <p className="text-gray-600 mb-4">
                  Contact our team for access to additional materials and archives
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
