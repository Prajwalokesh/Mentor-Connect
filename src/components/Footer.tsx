import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              MentorConnect
            </h3>
            <p className="text-sm">
              Empowering students through mentorship and bridging the gap between potential and performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                  }`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">
                  JSS STU, Mysuru, Karnataka
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-sm">
                  +91 821 2548 400
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-sm">
                  info@mentorconnect.edu
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Newsletter
            </h3>
            <p className="text-sm">
              Subscribe to get updates on new features and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                required
                className={`flex-1 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                }`}
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} MentorConnect. All rights reserved.
            </p>
            <p className="text-sm mt-2 md:mt-0">
              Built by Students of JSS STU for Future Students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;