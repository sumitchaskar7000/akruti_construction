import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,     // NEW X (Twitter) ICON
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brandDark via-brandGray to-brandDark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex flex-col items-center mb-4">
              <img
                src="/images/logo/logo.png"
                alt="Akruti Construction Logo"
                className="h-16 w-auto mb-2"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Inspired by a brighter future. Building premium real estate developments across India.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/profile.php?id=61584737874190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-primary rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>


              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/akruticonstructions1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-primary rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>





            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
              <li><Link to="/projects/ongoing" className="text-gray-400 hover:text-primary">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><Link to="/projects/ongoing" className="text-gray-400 hover:text-primary">Ongoing Projects</Link></li>
              <li><Link to="/projects/completed" className="text-gray-400 hover:text-primary">Completed Projects</Link></li>
              <li><Link to="/projects/upcoming" className="text-gray-400 hover:text-primary">Upcoming Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={18} />Vadgaon Budruk, Sinhgad Road</li>
              <li>36/37 Ankur Hotel Backside</li>
              <li>Near Nanded City, Pune – 411041</li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+917219347783" className="hover:text-primary">+91 7219347783</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:akruti.construction@outlook.com" className="hover:text-primary">
                  akruti.construction@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} iClaps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
