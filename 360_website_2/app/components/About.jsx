import React from "react";
import { Brain, Users, Award, Lightbulb, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Holistic Development",
      desc: "Nurturing social, emotional, and spiritual growth alongside academic excellence.",
      color: "bg-blue-50",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Small Batches",
      desc: "Limited class strength ensuring 100% personal attention and mentorship.",
      color: "bg-purple-50",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Proven Success",
      desc: "Consistent track record of achieving 100% results across all batches.",
      color: "bg-yellow-50",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Unique Methods",
      desc: "Innovative techniques like mind maps and meditation for enhanced recall.",
      color: "bg-green-50",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Vision & Mission Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block animate-fade-in-up">
              Unlike Any Other
            </span>
            <h2 className="text-5xl md:text-7xl font-bebas text-slate-900 mb-6 leading-[0.9] animate-fade-in-up animation-delay-150">
              More Than Just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Coaching.
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8 animate-fade-in-up animation-delay-300">
              We believe in creating an environment where curiosity thrives.
              Our goal isn't just grade improvement—it's about transforming
              students into stronger, more capable individuals who genuinely
              love to learn.
            </p>

            <div className="flex gap-8 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-600 font-bold text-2xl border border-slate-100">
                  18+
                </div>
                <div className="text-sm font-semibold text-slate-700 leading-tight">
                  Years Of <br /> Excellence
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-yellow-600 font-bold text-2xl border border-slate-100">
                  1k+
                </div>
                <div className="text-sm font-semibold text-slate-700 leading-tight">
                  Students <br /> Mentored
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-300">
            {/* Mission Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 transform rotate-3 rounded-3xl opacity-10 blur-sm"></div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 rounded-xl">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed italic border-l-4 border-yellow-400 pl-6">
                "To empower students not just with academic knowledge, but with
                the social, emotional, and spiritual values that nurture them
                into complete, compassionate human beings."
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${feature.color} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 opacity-50`}
              ></div>
              <div className="relative z-10 mb-4 p-3 bg-white rounded-xl w-fit shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
