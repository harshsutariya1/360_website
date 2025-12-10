import React from "react";

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Mentors
          </h2>
          <p className="text-gray-600">
            The pillars behind the success of 360° Institute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Brijesh Sir */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-blue-900 h-24 relative">
              <div className="absolute -bottom-12 left-8 w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-3xl font-bold text-gray-400">
                BK
              </div>
            </div>
            <div className="pt-16 pb-8 px-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">
                Brijesh Kathiriya
              </h3>
              <p className="text-yellow-600 font-medium mb-4">
                M.A. & B.Ed. (English) • Founder
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                With over 18 years of experience, including 7 years at Adani
                Vidya Mandir. He is a trainer for GPSC exams and has been
                awarded the "Best English Teacher of District" by the Science
                Olympiad Foundation.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  "I never teach my pupils, I only provide the conditions in
                  which they can learn."
                </p>
              </div>
            </div>
          </div>

          {/* Jigar Sir */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-blue-900 h-24 relative">
              <div className="absolute -bottom-12 left-8 w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-3xl font-bold text-gray-400">
                JG
              </div>
            </div>
            <div className="pt-16 pb-8 px-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">Jigar Gajera</h3>
              <p className="text-yellow-600 font-medium mb-4">
                B.E. IT (GIT) • Founder
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                An expert in Mathematics with 10+ years of managing the
                Satellite branch. Known for his creative teaching methodologies
                that inspire students to love learning rather than just study.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  "Quality teaching, hard work and discipline can bring real
                  success."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
