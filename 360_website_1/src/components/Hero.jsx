import React from "react";
import {
  ChevronRight,
  Pi,
  Atom,
  Sigma,
  Dna,
  Calculator,
  Binary,
} from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#0f172a] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:96px_96px]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 border border-white/5 rounded-lg rotate-12 animate-float decoration-clone"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/5 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-[1px] bg-gradient-to-l from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-[20%] right-[25%] opacity-10">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path d="M20 0 V40 M0 20 H40" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-[30%] left-[25%] opacity-10">
          <svg width="30" height="30" viewBox="0 0 40 40">
            <path d="M20 0 V40 M0 20 H40" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-72 h-72 bg-yellow-500 rounded-full blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] text-blue-400/20 animate-float"
          style={{ animationDelay: "0s" }}
        >
          <Pi size={64} strokeWidth={1.5} />
        </div>
        <div
          className="absolute top-[25%] right-[15%] text-purple-400/20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Atom size={80} strokeWidth={1.5} />
        </div>
        <div
          className="absolute bottom-[20%] left-[15%] text-yellow-400/20 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <Sigma size={72} strokeWidth={1.5} />
        </div>
        <div
          className="absolute bottom-[30%] right-[10%] text-green-400/20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Dna size={64} strokeWidth={1.5} />
        </div>
        <div
          className="absolute top-[45%] left-[5%] text-pink-400/20 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <Calculator size={48} strokeWidth={1.5} />
        </div>
        <div
          className="absolute top-[10%] right-[35%] text-indigo-400/20 animate-float"
          style={{ animationDelay: "5s" }}
        >
          <Binary size={40} strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight animate-fade-in-up animation-delay-150 drop-shadow-2xl flex flex-col items-center gap-2">
          <span className="font-abril text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 drop-shadow-sm pb-2">
            360°
          </span>
          <span className="font-bebas tracking-[0.2em] text-4xl md:text-6xl text-white drop-shadow-md">
            INSTITUTE FOR DEVELOPMENT
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-blue-100/90 mb-10 font-light animate-fade-in-up animation-delay-300">
          Shaping Future Leaders Through Quality Education
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-450 z-20 relative">
          <a
            href="#courses"
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 font-bold rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Explore Courses <ChevronRight size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-12 animate-fade-in-up animation-delay-500">
          <span className="inline-block bg-white/5 backdrop-blur-md text-yellow-200/80 border border-white/10 px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg hover:bg-white/10 transition-colors cursor-default">
            Excellence Since 2006
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
