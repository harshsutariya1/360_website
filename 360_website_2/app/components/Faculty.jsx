import React from "react";
import { Quote, GraduationCap, Award, Star } from "lucide-react";

const Faculty = () => {
  const mentors = [
    {
      name: "Brijesh Kathiriya",
      role: "Founder & English Expert",
      qual: "M.A. & B.Ed. (English)",
      exp: "18+ Years Exp.",
      desc: "With over 18 years of experience, including 7 years at Adani Vidya Mandir. He is a trainer for GPSC exams and has been awarded the 'Best English Teacher of District' by the Science Olympiad Foundation.",
      quote: "I never teach my pupils, I only provide the conditions in which they can learn.",
      image: "/images/brijesh_sir2.png",
      color: "blue",
    },
    {
      name: "Jigar Gajera",
      role: "Founder & Maths Expert",
      qual: "B.E. IT (GIT)",
      exp: "10+ Years Exp.",
      desc: "An expert in Mathematics with 10+ years of managing the Satellite branch. Known for his creative teaching methodologies that inspire students to love learning rather than just study.",
      quote: "Quality teaching, hard work and discipline can bring real success.",
      image: "/images/jigar_sir3.png",
      color: "yellow",
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block animate-fade-in-up">
            Expert Guidance
          </span>
          <h2 className="text-5xl md:text-6xl font-bebas text-slate-900 mb-6 animate-fade-in-up animation-delay-150">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mentors</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 animate-fade-in-up animation-delay-300">
            The visionary pillars behind the success of 360° Institute, dedicated to shaping futures with passion and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Header colored bar */}
              <div className={`h-32 ${mentor.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-800' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
              </div>

              {/* Profile Image - Floating over header */}
              <div className="relative px-8 -mt-16 mb-6">
                <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-2xl bg-slate-100"
                  />
                </div>
              </div>

              <div className="px-8 pb-8">
                {/* Name & Role */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bebas text-slate-900 tracking-wide mb-1">
                    {mentor.name}
                  </h3>
                  <p className={`font-semibold text-sm uppercase tracking-wider ${mentor.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'}`}>
                    {mentor.role}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">
                    <GraduationCap size={14} /> {mentor.qual}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">
                    <Award size={14} /> {mentor.exp}
                  </span>
                </div>

                <div className="w-full h-px bg-slate-100 mb-6"></div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                  {mentor.desc}
                </p>

                {/* Quote Box */}
                <div className={`relative p-6 rounded-2xl ${mentor.color === 'blue' ? 'bg-blue-50/50' : 'bg-yellow-50/50'} border ${mentor.color === 'blue' ? 'border-blue-100' : 'border-yellow-100'}`}>
                  <Quote size={20} className={`absolute top-4 left-4 ${mentor.color === 'blue' ? 'text-blue-300' : 'text-yellow-300'}`} />
                  <p className={`relative z-10 text-sm italic font-medium pt-2 text-center text-slate-700`}>
                    "{mentor.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
