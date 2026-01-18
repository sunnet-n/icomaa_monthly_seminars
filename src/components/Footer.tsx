import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "figma:asset/648f4aef5a465702a33acc7656f71240d0017115.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Annual Conference", path: "/annual-conference" },
    { label: "Seminars", path: "/seminars" },
    { label: "About", path: "/about" },
  ];

  const resources = [
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="relative mt-20 sm:mt-24">
      {/* Decorative gradient divider */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"></div>
      
      {/* Main footer content */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="ICOMAA Logo" 
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
                <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  <h3 className="text-xl font-semibold">ICOMAA</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                International Conference on Mathematics and Applications - Fostering excellence in mathematical research and applications.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-blue-300/50 transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4 relative inline-block">
                Resources
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                    <MapPin size={16} className="text-blue-600" />
                  </div>
                  <span className="leading-relaxed">
                    Department of Mathematics<br />
                    University Campus
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                    <Mail size={16} className="text-blue-600" />
                  </div>
                  <a href="mailto:info@icomaa.org" className="hover:text-blue-600 transition-colors duration-300">
                    info@icomaa.org
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600 group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                    <Phone size={16} className="text-blue-600" />
                  </div>
                  <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600">
            <p className="text-center sm:text-left">
              &copy; {currentYear} ICOMAA. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}