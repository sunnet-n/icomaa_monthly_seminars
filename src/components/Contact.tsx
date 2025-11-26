import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-amber-500 text-center mb-12">Contact Us</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-neutral-800 rounded-3xl p-6 sm:p-8 border border-neutral-700/50 shadow-lg">
            <h3 className="text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-300 mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-600 bg-neutral-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-white placeholder-neutral-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-300 mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-600 bg-neutral-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-white placeholder-neutral-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-neutral-300 mb-2 text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-600 bg-neutral-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-white placeholder-neutral-400"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-300 mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-600 bg-neutral-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none text-white placeholder-neutral-400"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-900 px-6 py-4 rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-neutral-800/90 rounded-3xl p-6 sm:p-8 border border-neutral-700/50 shadow-lg">
              <h3 className="text-white mb-6">Get in touch</h3>
              <p className="text-neutral-300 mb-8">
                Have questions about the conference or need more information? 
                We're here to help!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 backdrop-blur-sm bg-neutral-700/50 rounded-2xl p-4 sm:p-6">
                  <Mail className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div className="min-w-0 flex-1">
                    <div className="text-neutral-200 mb-1">Email</div>
                    <a
                      href="mailto:info@icomaa.org"
                      className="text-amber-500 hover:text-amber-400 transition-colors break-words text-sm sm:text-base"
                    >
                      info@icomaa.org
                    </a>
                    <br />
                    <a
                      href="mailto:register@icomaa.org"
                      className="text-amber-500 hover:text-amber-400 transition-colors break-words text-sm sm:text-base"
                    >
                      register@icomaa.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 backdrop-blur-sm bg-neutral-700/50 rounded-2xl p-4 sm:p-6">
                  <Phone className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="text-neutral-200 mb-1">Phone</div>
                    <a
                      href="tel:+1234567890"
                      className="text-amber-500 hover:text-amber-400 transition-colors text-sm sm:text-base"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="text-neutral-400 text-sm mt-1">
                      Mon-Fri, 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-lg text-white">
              <h3 className="text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between gap-4">
                  <span className="text-amber-100">Monday - Friday</span>
                  <span className="text-right">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-amber-100">Saturday</span>
                  <span className="text-right">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-amber-100">Sunday</span>
                  <span className="text-right">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center backdrop-blur-lg bg-neutral-800/50 rounded-3xl p-6 border border-neutral-700/50">
          <p className="text-neutral-400">
            © 2024 ICOMAA Seminar Series. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}