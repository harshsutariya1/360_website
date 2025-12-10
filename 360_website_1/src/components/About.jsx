import React from "react";
import { Brain, Users, Award, Lightbulb } from "lucide-react";

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

export default About;
