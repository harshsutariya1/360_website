import React from "react";
import { CheckCircle2, BookOpen, GraduationCap, Users } from "lucide-react";

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

export default Courses;
