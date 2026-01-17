
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CertificationAndEducation from './components/CertificationAndEducation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        
        <div id="experience" className="scroll-mt-20">
          <Experience />
        </div>
        
        <CertificationAndEducation />
      </main>
      
      <Footer />

      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-100/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default App;
