import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
