import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2 mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about admissions, courses, or our teaching
            methodology? We're here to help you shape a brighter future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Call Us Widget */}
              <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <Phone size={24} />
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-4">
                  Call Us
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group/item cursor-pointer">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                        Brijesh Sir
                      </p>
                      <p className="text-gray-900 font-semibold text-sm">
                        +91 98255 61386
                      </p>
                    </div>
                    <a
                      href="tel:+919825561386"
                      className="w-8 h-8 rounded-full bg-white text-blue-600 shadow-sm flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-all"
                    >
                      <Phone size={14} />
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group/item cursor-pointer">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                        Jigar Sir
                      </p>
                      <p className="text-gray-900 font-semibold text-sm">
                        +91 94271 45046
                      </p>
                    </div>
                    <a
                      href="tel:+919427145046"
                      className="w-8 h-8 rounded-full bg-white text-blue-600 shadow-sm flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-all"
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Us Widget */}
              {/* Email Us Widget */}
              <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100/50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                <div className="w-12 h-12 bg-yellow-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-200">
                  <Mail size={24} />
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-4">
                  Email Us
                </h3>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Drop us a line anytime for inquiries, we'll get back to you soon.
                </p>

                <div className="mt-auto">
                  <a
                    href="mailto:info@360institute.com"
                    className="flex items-center justify-between p-4 rounded-xl bg-yellow-50 border border-yellow-100 group-hover:border-yellow-300 transition-all cursor-pointer group/email"
                  >
                    <span className="font-semibold text-gray-800 text-sm break-all">
                      info@360institute.com
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white text-yellow-600 shadow-sm flex flex-shrink-0 items-center justify-center group-hover/email:bg-yellow-500 group-hover/email:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Visit Our Center
                  </h3>
                  <p className="text-gray-600 mt-1">
                    302-303, Daffodils Plaza, Above Angat22 Restaurant,
                    <br />
                    Gala Gymkhana Road, South Bopal, Ahmedabad - 380058
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7344.057095858215!2d72.471771!3d23.022724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0f63cd70af%3A0x852b6a7e1adcd31c!2s360%C2%B0%20Institute%20for%20Development!5e0!3m2!1sen!2sin!4v1765404602706!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="360 Institute Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600 to-blue-800 rounded-bl-full rounded-tr-3xl opacity-10"></div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600">
                  <option>Class 1-10 (All Subjects)</option>
                  <option>Class 11-12 Science</option>
                  <option>Class 11-12 Commerce</option>
                  <option>Vedic Maths / Olympiad</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
