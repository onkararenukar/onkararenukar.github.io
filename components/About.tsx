
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Professional Profile</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-blue-600">
              {PERSONAL_INFO.profileSummary}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div>
                <div className="text-3xl font-bold text-slate-900">6+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Core Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">3</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Global Regions</div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
             <div className="absolute top-0 right-0 p-4 opacity-5">
               <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                 <path d="M0,0 L100,0 L100,100 L0,100 Z" />
               </svg>
             </div>
             <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-widest">Core Values</h3>
             <ul className="space-y-4">
               {[
                 "Scalable microservices architecture",
                 "AI-driven development (GitHub Copilot expert)",
                 "Strict adherence to TDD & Agile standards",
                 "Banking domain subject matter expertise",
                 "Quality-first engineering mindset"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"></span>
                    <span className="text-slate-700 font-medium">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
