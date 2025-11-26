import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, BookOpen, Mail, Globe } from "lucide-react";
import { Button } from "./ui/button";

export interface Speaker {
  name: string;
  title: string;
  bio: string;
  image: string;
  education: string[];
  achievements: string[];
  email?: string;
  website?: string;
}

interface SpeakerBioModalProps {
  speaker: Speaker | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SpeakerBioModal({ speaker, isOpen, onClose }: SpeakerBioModalProps) {
  if (!speaker) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{speaker.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header with photo */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-blue-100">
              <ImageWithFallback
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl mb-2">{speaker.name}</h2>
              <p className="text-lg text-blue-600 mb-4">{speaker.title}</p>
              
              {/* Contact buttons */}
              <div className="flex flex-wrap gap-2">
                {speaker.email && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${speaker.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                )}
                {speaker.website && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={speaker.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Biography
            </h3>
            <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
          </div>

          {/* Education */}
          {speaker.education.length > 0 && (
            <div>
              <h3 className="mb-3">Education</h3>
              <ul className="space-y-2">
                {speaker.education.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {speaker.achievements.length > 0 && (
            <div>
              <h3 className="mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {speaker.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
