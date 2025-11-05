import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
// NEW: Import the Particle Background
import ParticleBackground from "./components/ParticleBackground";


const App = () => {
  return (
    // Set the overall container background to the deep dark color
    <div className="relative min-h-screen bg-[#050414] font-sans">
      
      {/* Background Layer (Fixed, Z-0) */}
      <ParticleBackground />

      {/* Content Layer (Relative, Z-10) */}
      <div className="relative z-10">
        
        {/* Navbar is fixed and needs no change */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        
      </div>
    </div>
  );
};

export default App;