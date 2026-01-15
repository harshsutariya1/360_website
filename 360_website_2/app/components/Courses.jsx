import React from "react";
import { CheckCircle2, BookOpen, GraduationCap, Users, ArrowRight } from "lucide-react";

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Dark Theme Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-2 block animate-fade-in-up">
              Our Curriculum
            </span>
            <h2 className="text-5xl md:text-6xl font-bebas text-white mb-4 animate-fade-in-up animation-delay-150">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Programs</span>
            </h2>
            <p className="text-lg text-slate-400 animate-fade-in-up animation-delay-300 font-light max-w-xl">
              Comprehensive coaching for School, Science & Commerce streams tailored for success across all major boards.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
              <CheckCircle2 size={20} className="text-green-400" />
              Trusted by students from 35+ Schools
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Foundation */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-1 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="h-full bg-slate-900/50 rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                <BookOpen size={28} />
              </div>

              <h3 className="text-3xl font-bebas text-white mb-2">Class 1 to 10</h3>
              <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700/50">Building a strong academic foundation for future success.</p>

              <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                {["All Subjects Covered", "Foundation Building", "Vedic Maths Workshops", "Olympiad Preparation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["CBSE", "GSEB", "ICSE", "IB"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Science */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-1 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="h-full bg-slate-900/50 rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={28} />
              </div>

              <h3 className="text-3xl font-bebas text-white mb-2">Class 11 & 12 (Science)</h3>
              <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700/50">Specialized coaching for competitive & board exams.</p>

              <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                {["Physics, Chemistry, Maths, Biology", "JEE / NEET Foundation", "Hands-on Practical Labs", "Regular Mock Tests Series"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["CBSE", "GSEB", "ICSE", "IB"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Commerce */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-1 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="h-full bg-slate-900/50 rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                <Users size={28} />
              </div>

              <h3 className="text-3xl font-bebas text-white mb-2">Class 11 & 12 (Commerce)</h3>
              <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700/50">Expert guidance for mastering financial concepts.</p>

              <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                {["Accountancy, Statistics, Eco, BA", "In-depth Concept Clarity", "Board Exam Strategy", "Career Counselling"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["CBSE", "GSEB", "NIOS"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-lg border border-slate-700">
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

export default Courses;
