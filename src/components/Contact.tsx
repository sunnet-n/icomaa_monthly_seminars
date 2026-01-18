import { Mail, Phone, Send, Globe } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // ===========================================
    // EMAILJS CONFIGURATION
    // ===========================================
    // Replace these with your actual EmailJS credentials:
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "awezowsunnet@gmail.com", // Your email
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm mb-4 shadow-lg">
            Get in Touch
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-3xl sm:text-4xl">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-5 sm:p-6 md:p-8 border border-blue-200/50 shadow-xl">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700 mb-5 sm:mb-6 text-xl sm:text-2xl">Send us a message</h3>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-5"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-blue-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400 text-base disabled:opacity-50 min-h-[48px]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-blue-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400 text-base disabled:opacity-50 min-h-[48px]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-700 mb-2 text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-blue-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400 text-base disabled:opacity-50 min-h-[48px]"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-blue-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-slate-900 placeholder-slate-400 text-base disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500 text-green-700 px-4 py-3 rounded-2xl text-sm">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500 text-red-700 px-4 py-3 rounded-2xl text-sm">
                  ✗ Oops! Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-full hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <Send size={18} className="flex-shrink-0" />}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-5 sm:space-y-6">
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-5 sm:p-6 md:p-8 border border-cyan-200/50 shadow-xl">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-teal-700 mb-5 sm:mb-6 text-xl sm:text-2xl">Get in touch</h3>
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Have questions about the conference or need more information? 
                We're here to help!
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4 backdrop-blur-sm bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-4 sm:p-5 border border-cyan-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-slate-900 mb-1.5 text-sm sm:text-base">Email</div>
                    <a
                      href="mailto:awezowsunnet@gmail.com"
                      className="text-cyan-700 hover:text-cyan-800 transition-colors break-words text-sm sm:text-base block"
                    >
                      awezowsunnet@gmail.com
                    </a>
                    <a
                      href="mailto:icomaa.info@gmail.com"
                      className="text-cyan-700 hover:text-cyan-800 transition-colors break-words text-sm sm:text-base block mt-1"
                    >
                      icomaa.info@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 backdrop-blur-sm bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-4 sm:p-5 border border-teal-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-900 mb-1.5 text-sm sm:text-base">Phone</div>
                    <a
                      href="tel:+905526656430"
                      className="text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base block"
                    >
                      +90 (552) 665-64-30
                    </a>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
                      Mon-Fri, 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-5 sm:p-6 md:p-8 border border-blue-500/20 shadow-xl">
              <div className="flex items-start gap-4">
                <Globe className="text-white flex-shrink-0 mt-1" size={28} />
                <div className="flex-1">
                  <h3 className="text-white mb-2 text-xl sm:text-2xl">Visit Our Website</h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4">
                    Explore more about our seminars and events
                  </p>
                  <a
                    href="https://2026.icomaas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-white/90 px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    <span>2026.icomaas.com</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}