import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Video, Mail, User, CheckCircle, Copy } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface JoinSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinSection({ isOpen, onClose }: JoinSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showZoomLink, setShowZoomLink] = useState(false);

  const zoomLink = "https://zoom.us/j/1234567890?pwd=examplepassword123";
  const meetingId = "123 456 7890";
  const passcode = "seminar2025";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setShowZoomLink(true);
      toast.success("Registration successful! Here's your Zoom link.");
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleClose = () => {
    setShowZoomLink(false);
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-blue-600" />
            Join Monthly Seminar
          </DialogTitle>
          <DialogDescription>
            {showZoomLink
              ? "Your registration is confirmed! Here are your meeting details."
              : "Register now to receive the Zoom link for our upcoming seminar."}
          </DialogDescription>
        </DialogHeader>

        {!showZoomLink ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              <CheckCircle className="w-4 h-4 mr-2" />
              Register & Get Link
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Zoom Meeting Details</CardTitle>
                <CardDescription>Save these details to join the seminar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs text-gray-500">Meeting Link</Label>
                  <div className="flex gap-2">
                    <Input
                      value={zoomLink}
                      readOnly
                      className="text-sm"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => copyToClipboard(zoomLink, "Link")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-gray-500">Meeting ID</Label>
                  <div className="flex gap-2">
                    <Input
                      value={meetingId}
                      readOnly
                      className="text-sm"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => copyToClipboard(meetingId, "Meeting ID")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-gray-500">Passcode</Label>
                  <div className="flex gap-2">
                    <Input
                      value={passcode}
                      readOnly
                      className="text-sm"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => copyToClipboard(passcode, "Passcode")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-gray-600 text-center">
              A confirmation email has been sent to <strong>{email}</strong>
            </p>

            <Button
              variant="outline"
              className="w-full"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}