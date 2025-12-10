import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Phone,
  MapPin,
  Menu,
  X,
  Star,
  Quote,
  Facebook,
  Youtube,
  Instagram,
  ChevronRight,
  Brain,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

// --- Components ---

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logos/360-main-logo_mid.png"
              alt="360 Institute Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-yellow-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-md"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-400 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-purple-400 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-pink-400 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-block mb-6 animate-fade-in-up">
          <span className="bg-blue-800 bg-opacity-50 text-yellow-300 border border-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            Excellence Since 2006
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight animate-fade-in-up animation-delay-150">
          Everybody is a <span className="text-yellow-400">Genius.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 mb-10 italic animate-fade-in-up animation-delay-300">
          "But if you judge a fish by its ability to climb a tree, it will live
          its whole life believing that it is stupid." <br />
          <span className="text-sm not-italic mt-2 block opacity-80">
            — Albert Einstein
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-450">
          <a
            href="#courses"
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
          >
            Explore Courses <ChevronRight size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-yellow-500" />,
      title: "Holistic Development",
      desc: "Developing social, emotional, and spiritual factors alongside academics.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Small Batches",
      desc: "Limited student strength ensuring 100% personal attention.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Proven Success",
      desc: "Record of achieving 100% results across all batches.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Unique Methods",
      desc: "Mind maps, meditation, and creative teaching methodologies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vision & Mission
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We believe in creating an environment of learning where students
            develop their interest in studies and love to learn. We aim for
            result improvement while motivating students to develop internally
            to become stronger individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 bg-white p-4 rounded-full w-fit shadow-sm group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive coaching for Commerce & Science streams across all
              major boards.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-blue-900 font-semibold">
              <CheckCircle2 size={20} className="text-green-500" />
              Serving 35+ Schools
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300">
            <div className="p-8">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Class 1 to 10
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  All Subjects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Foundation Building
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Vedic Maths Workshops
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Olympiad Prep
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["CBSE", "GSEB", "ICSE", "IB"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300 transform scale-105 z-10">
            <div className="p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Class 11 & 12 (Science)
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Physics, Chemistry, Maths, Bio
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  JEE / NEET Foundation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Practical Labs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Regular Mock Tests
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300">
            <div className="p-8">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Class 11 & 12 (Commerce)
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Accountancy, Stats, Eco, BA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Concept Clarity
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Board Exam Strategy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Career Counselling
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["CBSE", "GSEB", "NIOS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  // Sample data from PDF
  const toppers = [
    {
      name: "Viral Jain",
      score: "96% Sci",
      school: "St Ann",
      desc: "Social Sci: 100",
    },
    {
      name: "Yashvi Thakkar",
      score: "97% SS",
      school: "Zydus",
      desc: "English: 89",
    },
    {
      name: "Priyanshi",
      score: "95.34%",
      school: "Shivashish",
      desc: "Class X Result",
    },
    {
      name: "Akshat Purohit",
      score: "93%",
      school: "SNGV",
      desc: "Class X Result",
    },
    { name: "Karnav Dave", score: "93%", school: "Zebar", desc: "Maths: 96" },
    {
      name: "Keshvi Vaghasiya",
      score: "95% Maths",
      school: "Apollo",
      desc: "Science: 91",
    },
    {
      name: "Tannu Jain",
      score: "Acc: 87",
      school: "GJS",
      desc: "Eco: 87 (Class XII)",
    },
    {
      name: "Maanya Singh",
      score: "Eng: 95",
      school: "Zebar",
      desc: "Social Sci: 93",
    },
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hall of Fame
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            "Improving result is the real success, not just scoring the
            highest." <br />
            Celebrating our consistent performers across various schools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {toppers.map((student, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-900 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {student.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg text-gray-900 truncate">
                {student.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{student.school}</p>
              <div className="bg-yellow-100 text-yellow-800 text-sm font-bold py-1 px-3 rounded-full inline-block mb-2">
                {student.score}
              </div>
              <p className="text-xs text-gray-400">{student.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic mb-4">
            ...and many more achievers from 2019 to 2025.
          </p>
          <a
            href="#contact"
            className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-1"
          >
            Join the league of toppers <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Mentors
          </h2>
          <p className="text-gray-600">
            The pillars behind the success of 360° Institute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Brijesh Sir */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-blue-900 h-24 relative">
              <div className="absolute -bottom-12 left-8 w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-3xl font-bold text-gray-400">
                BK
              </div>
            </div>
            <div className="pt-16 pb-8 px-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">
                Brijesh Kathiriya
              </h3>
              <p className="text-yellow-600 font-medium mb-4">
                M.A. & B.Ed. (English) • Founder
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                With over 18 years of experience, including 7 years at Adani
                Vidya Mandir. He is a trainer for GPSC exams and has been
                awarded the "Best English Teacher of District" by the Science
                Olympiad Foundation.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  "I never teach my pupils, I only provide the conditions in
                  which they can learn."
                </p>
              </div>
            </div>
          </div>

          {/* Jigar Sir */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-blue-900 h-24 relative">
              <div className="absolute -bottom-12 left-8 w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-3xl font-bold text-gray-400">
                JG
              </div>
            </div>
            <div className="pt-16 pb-8 px-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">Jigar Gajera</h3>
              <p className="text-yellow-600 font-medium mb-4">
                B.E. IT (GIT) • Founder
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                An expert in Mathematics with 10+ years of managing the
                Satellite branch. Known for his creative teaching methodologies
                that inspire students to love learning rather than just study.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  "Quality teaching, hard work and discipline can bring real
                  success."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Worksheets of Basic Maths & Vedic Maths developed interest towards Maths and scores highest.",
      author: "Keshvi Vaghasiya",
      detail: "Apollo International School",
    },
    {
      text: "Personal attention and limited strength in a batch has served my purpose. Helped my child transform.",
      author: "Tulsi Kikani",
      detail: "Cosmos Castle International School",
    },
    {
      text: "Concentration power through meditation techniques taught by Brijesh Sir has developed recalling power.",
      author: "Aurum Shah",
      detail: "Tulip International School",
    },
    {
      text: "One of the safest places for a girl child. Notifications for 'in' & 'out' are very reassuring.",
      author: "Parent of Aarya",
      detail: "DPS, Bopal",
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white relative">
      <div className="absolute top-0 left-0 p-4 opacity-10">
        <Quote size={80} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Proud Parents Speak
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-blue-800 p-6 rounded-xl border border-blue-700"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-bold text-white">{review.author}</p>
                <p className="text-xs text-blue-300">{review.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-yellow-500 text-blue-900 p-1.5 rounded font-bold text-lg">
                360°
              </div>
              <span className="font-bold text-xl">Institute</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Developing interest & improving academic performance is real
              success! Not only scoring highest!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="text-yellow-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-sm text-gray-300">
                  302-303, Daffodils Plaza, Above Angat22 Restaurant,
                  <br />
                  Gala Gymkhana Road, South Bopal,
                  <br />
                  Ahmedabad - 380058
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500 flex-shrink-0" size={20} />
                <div className="text-sm text-gray-300">
                  <p>
                    Brijesh Sir:{" "}
                    <a
                      href="tel:+919825561386"
                      className="hover:text-white transition"
                    >
                      +91 98255 61386
                    </a>
                  </p>
                  <p>
                    Jigar Sir:{" "}
                    <a
                      href="tel:+919427145046"
                      className="hover:text-white transition"
                    >
                      +91 94271 45046
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">
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
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">
                  Courses (Class 1-12)
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition">
                  Student Results
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Map & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">
              Locate Us
            </h3>
            <div className="bg-gray-800 h-40 rounded-lg mb-6 flex items-center justify-center text-gray-500 text-xs">
              {/* Placeholder for map */}
              [Interactive Google Map Integration]
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-red-600 rounded-full hover:bg-red-500 transition"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-pink-600 rounded-full hover:bg-pink-500 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} 360° Institute for Development.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <Results />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
