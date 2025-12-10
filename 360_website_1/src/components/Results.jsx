import React from "react";
import { ChevronRight } from "lucide-react";

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

export default Results;
