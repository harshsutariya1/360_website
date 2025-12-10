import React from "react";
import { Quote } from "lucide-react";

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

export default EinsteinQuote;
