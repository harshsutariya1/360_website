import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logos/360-main-logo_mid.png"
                alt="360 Institute Logo"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Developing interest & improving academic performance is real
              success! We believe in holistic development alongside academic
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-yellow-500 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition">
                  Results
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-yellow-500 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} 360° Institute for Development.
            All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> for Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
