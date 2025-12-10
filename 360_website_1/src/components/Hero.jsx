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
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-72 h-72 bg-yellow-500 rounded-full blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
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
        <div className="inline-block mb-6 animate-fade-in-up">
          <span className="bg-white/10 backdrop-blur-md text-yellow-300 border border-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
            Excellence Since 2006
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight animate-fade-in-up animation-delay-150 drop-shadow-2xl">
          Everybody is a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Genius.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 mb-10 italic animate-fade-in-up animation-delay-300 font-light">
          "But if you judge a fish by its ability to climb a tree, it will live
          its whole life believing that it is stupid." <br />
          <span className="text-sm not-italic mt-4 inline-block px-4 py-1 bg-blue-900/50 rounded-lg border border-blue-700/50">
            — Albert Einstein
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-450">
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
      </div>
    </div>
  );
};

export default Hero;
