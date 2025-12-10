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
  Mail,
  Send,
  Clock,
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
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
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
              className={`transition-all duration-500 ${
                isScrolled ? "h-12" : "h-14"
              } w-auto object-contain drop-shadow-sm`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-black/5 backdrop-blur-[2px] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-900"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 ${
                    isScrolled ? "bg-white shadow-sm" : "bg-white/10"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className={`group px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 ${
                isScrolled
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
              className={`p-2 rounded-full transition-colors ${
                isScrolled
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
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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

const EinsteinQuote = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-gray-900 rounded-[2.5rem] overflow-hidden">
        {/* Einstein Section */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-bottom-left"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16 relative z-10">
          {/* Image Side */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
                alt="Albert Einstein"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest">
                Inspiration
              </div>
            </div>
          </div>

          {/* Quote Side */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <Quote
              size={40}
              className="text-yellow-400 mb-6 mx-auto md:mx-0 opacity-50"
            />
            <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-8">
              "Everybody is a genius. But if you judge a fish by its ability to
              climb a tree, it will live its whole life believing that it is
              stupid."
            </blockquote>
            <div className="w-16 h-1 bg-yellow-400 rounded-full mb-4 mx-auto md:mx-0"></div>
            <p className="text-blue-200 font-bebas text-2xl tracking-widest">
              Albert Einstein
            </p>
          </div>
        </div>
      </div>
    </div>
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

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2 mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about admissions, courses, or our teaching
            methodology? We're here to help you shape a brighter future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Call Us
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Brijesh Sir
                    </p>
                    <a
                      href="tel:+919825561386"
                      className="text-blue-700 font-medium hover:underline"
                    >
                      +91 98255 61386
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Jigar Sir
                    </p>
                    <a
                      href="tel:+919427145046"
                      className="text-blue-700 font-medium hover:underline"
                    >
                      +91 94271 45046
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Drop us a line anytime for inquiries.
                </p>
                <a
                  href="mailto:info@360institute.com"
                  className="text-yellow-700 font-medium hover:underline"
                >
                  info@360institute.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Visit Our Center
                  </h3>
                  <p className="text-gray-600 mt-1">
                    302-303, Daffodils Plaza, Above Angat22 Restaurant,
                    <br />
                    Gala Gymkhana Road, South Bopal, Ahmedabad - 380058
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7344.057095858215!2d72.471771!3d23.022724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0f63cd70af%3A0x852b6a7e1adcd31c!2s360%C2%B0%20Institute%20for%20Development!5e0!3m2!1sen!2sin!4v1765404602706!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="360 Institute Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600 to-blue-800 rounded-bl-full rounded-tr-3xl opacity-10"></div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600">
                  <option>Class 1-10 (All Subjects)</option>
                  <option>Class 11-12 Science</option>
                  <option>Class 11-12 Commerce</option>
                  <option>Vedic Maths / Olympiad</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-500 text-blue-900 p-1.5 rounded font-bold text-lg">
                360°
              </div>
              <span className="font-bold text-xl">Institute</span>
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
      <EinsteinQuote />
      <Courses />
      <Faculty />
      <Results />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
