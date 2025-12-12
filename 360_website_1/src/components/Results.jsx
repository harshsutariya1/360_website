import React from "react";
import { ChevronRight, Trophy, Sparkles, Medal } from "lucide-react";

const Results = () => {
  const toppers = [
    {
      name: "Viral Jain",
      score: "96%",
      subject: "Science",
      school: "St Ann's School",
      desc: "Social Science: 100/100",
      image: "/images/viral_jain.jpg",
      rank: 1,
    },
    {
      name: "Keshvi Vaghasiya",
      score: "95%",
      subject: "Maths",
      school: "Apollo International",
      desc: "Science: 91/100",
      image: "/images/keshvi_vaghasiya.jpg",
      rank: 2,
    },
    {
      name: "Tannu Jain",
      score: "87%",
      subject: "Accountancy",
      school: "GJS",
      desc: "Economics: 87 (Class XII)",
      image: "/images/tannu_jain.jpg",
      rank: 3,
    },
    {
      name: "Yashvi Thakkar",
      score: "97%",
      subject: "Social Science",
      school: "Zydus School",
      desc: "English: 89/100",
      image: "/images/yashvi_thakkar.jpg",
      rank: 1,
    },
    {
      name: "Akshat Purohit",
      score: "95.34%",
      subject: "Class X",
      school: "SNGV",
      desc: "Outstanding Performance",
      image: "/images/akshat_purohit.jpg",
      rank: 2,
    },
    {
      name: "Karnav Dave",
      score: "93%",
      subject: "Overall",
      school: "Zebar School",
      desc: "Maths: 96/100",
      image: "/images/karnav_dave.jpg",
      rank: 3,
    },
    {
      name: "Priyanshi",
      score: "90.77%",
      subject: "Class X",
      school: "Shivashish",
      desc: "Consistent Improver",
      image: "/images/priyanshi.jpg",
      rank: 4,
    },
    {
      name: "Maanya Singh",
      score: "95",
      subject: "English",
      school: "Zebar School",
      desc: "Social Science: 93",
      image: "/images/maanya_singh.jpg",
      rank: 2,
    },
  ];

  return (
    <section id="results" className="py-24 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-bold uppercase tracking-wider mb-4 animate-fade-in-up">
            <Trophy size={16} /> Hall of Fame
          </div>
          <h2 className="text-5xl md:text-6xl font-bebas text-slate-900 mb-6 leading-tight animate-fade-in-up animation-delay-150">
            Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Excellence</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-300 font-light">
            "Improving result is the real success." We take pride in the
            exceptional achievements of our students across various disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {toppers.map((student, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Score Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-20 group-hover:scale-110 transition-transform">
                <div className="text-center leading-none">
                    <span className="block text-sm font-bold">{student.score}</span>
                    <span className="text-[10px] opacity-80 uppercase">Score</span>
                </div>
              </div>

              {/* Image Container */}
              <div className="h-48 overflow-hidden rounded-t-2xl relative bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
                {student.image ? (
                   <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  /> 
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bebas text-gray-300 bg-gray-100">
                        {student.name.charAt(0)}
                    </div>
                )}
                
                <div className="absolute bottom-3 left-4 z-20 text-white">
                    <p className="text-xs uppercase tracking-wider opacity-90">{student.school}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-grow flex flex-col pt-6">
                <h3 className="font-bebas text-2xl text-slate-900 mb-1 tracking-wide">
                  {student.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">
                    {student.subject}
                </p>
                
                <div className="mt-auto pt-3 border-t border-slate-50 flex items-start gap-2">
                    <Medal size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {student.desc}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up animation-delay-500">
          <p className="text-slate-400 font-bebas text-xl tracking-widest uppercase mb-6 opacity-60">
            ...and hundreds more achievers since 2006
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-200/50"
          >
            <Sparkles size={18} className="text-yellow-400" />
            Join the League of Toppers 
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
