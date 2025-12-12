import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      text: "Worksheets of Basic Maths & Vedic Maths developed interest towards Maths and scores highest.",
      author: "Keshvi Vaghasiya",
      detail: "Apollo International School",
      image: "/images/keshvi_family.jpg",
    },
    {
      text: "Personal attention and limited strength in a batch has served my purpose. Helped my child transform.",
      author: "Tulsi Kikani",
      detail: "Cosmos Castle International School",
      image: "/images/tulsi_family.jpg",
    },
    {
      text: "Concentration power through meditation techniques taught by Brijesh Sir has developed recalling power.",
      author: "Aurum Shah",
      detail: "Tulip International School",
      image: "/images/aurum_family.jpg",
    },
    {
      text: "One of the safest places for a girl child. Notifications for 'in' & 'out' are very reassuring.",
      author: "AARYA & JAISAT",
      detail: "DPS, Bopal",
      image: "/images/arya_jaissat_family.jpg",
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white relative">
      <div className="absolute top-0 left-0 p-4 opacity-10">
        <Quote size={80} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Proud Parents Speak
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-blue-800 p-6 rounded-xl border border-blue-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                {review.image && (
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-20 h-20 rounded-xl object-cover border-2 border-blue-600/50 shadow-md flex-shrink-0 bg-blue-900"
                  />
                )}
                <div>
                  <p className="font-bold text-white text-base leading-tight mb-1">{review.author}</p>
                  <p className="text-xs text-blue-300 leading-tight">{review.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
