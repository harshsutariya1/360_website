import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Faculty from "./components/Faculty";
import EinsteinQuote from "./components/EinsteinQuote";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <EinsteinQuote />
      <Results />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
