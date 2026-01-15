import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
    { name: "Faculty", href: "#faculty" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 border-b border-white/20"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logos/360-main-logo_mid.png"
              alt="360 Institute Logo"
              className={`transition-all duration-500 ${isScrolled ? "h-12" : "h-14"
                } w-auto object-contain drop-shadow-sm`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-black/5 backdrop-blur-[2px] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${isScrolled
                  ? "text-gray-600 hover:text-blue-900"
                  : "text-gray-200 hover:text-white"
                  }`}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 ${isScrolled ? "bg-white shadow-sm" : "bg-white/10"
                    }`}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className={`group px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 ${isScrolled
                ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-blue-900/20"
                : "bg-white text-blue-900 shadow-xl"
                }`}
            >
              Enquire Now
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 transition-all duration-300 origin-top overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-4 py-3 rounded-xl text-center font-bold bg-blue-900 text-white hover:bg-blue-800 transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
