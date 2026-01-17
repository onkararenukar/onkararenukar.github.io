
import React from 'react';
import { Briefcase, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Professional Journey</h2>
          <p className="text-slate-500">Over 6 years of excellence in backend development.</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-200 md:before:-translate-x-1/2">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative">
              {/* Desktop Timeline Dot */}
              <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md z-10 items-center justify-center text-white">
                <Briefcase size={16} />
              </div>

              <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow`}>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-tighter">
                    {exp.period}
                  </span>
                  <div className="flex items-center text-slate-400 text-xs gap-1">
                    <MapPin size={12} /> {exp.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                <div className="text-blue-600 font-medium mb-4">{exp.company}</div>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed italic">
                  "{exp.description}"
                </p>

                <div className="space-y-4 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={16} className="text-slate-300" />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {exp.impacts && exp.impacts.length > 0 && (
                  <div className="pt-6 border-t border-slate-50">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <TrendingUp size={14} className="text-green-500" /> Key Impacts
                    </h4>
                    <ul className="space-y-2">
                      {exp.impacts.map((impact, idx) => (
                        <li key={idx} className="text-sm font-medium text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
