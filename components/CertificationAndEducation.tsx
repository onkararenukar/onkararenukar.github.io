
import React from 'react';
import { Award, GraduationCap, Calendar } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../constants';

const CertificationAndEducation: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div id="certifications" className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                <Award size={32} />
              </div>
              <h2 className="text-3xl font-serif text-slate-900">Certifications</h2>
            </div>
            
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors group">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education" className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-serif text-slate-900">Education</h2>
            </div>
            
            <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden group shadow-xl">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">
                  <Calendar size={14} /> Graduated {EDUCATION.graduation}
                </div>
                <h3 className="text-2xl font-bold mb-2">{EDUCATION.degree}</h3>
                <p className="text-slate-400 mb-6 text-lg">{EDUCATION.institution}</p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors cursor-default">
                  Major in Advanced Computing & Systems
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl italic text-blue-800 text-sm">
              "Focused on translating complex theoretical computer science concepts into high-performance industrial applications."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationAndEducation;
