
import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-100/40 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-indigo-100/30 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
              Available for Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] mb-6">
              Engineering Robust <br />
              <span className="text-blue-600">Backend Systems</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-semibold text-slate-900">{PERSONAL_INFO.name}</span>. A Senior Software Engineer with a passion for building scalable Java applications and microservices that power global banking and telecom industries.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#experience"
                onClick={(e) => scrollToSection(e, 'experience')}
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                View Experience <ArrowRight size={18} />
              </a>
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 border border-slate-200 bg-white text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-6 items-center">
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Follow Me</span>
              <div className="h-[1px] w-12 bg-slate-200"></div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github size={22} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-red-500 transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block md:col-span-4 lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Profile Workspace"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-2xl font-serif mb-1">Onkar Renukar</div>
                <div className="text-sm font-light opacity-80 uppercase tracking-widest">Backend Architect</div>
              </div>
            </div>
            {/* Visual element representing code */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden lg:block animate-bounce-slow">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <code className="text-xs text-slate-600 block">
                <span className="text-purple-600">@Service</span><br/>
                <span className="text-blue-600">public class</span> <span className="text-amber-600">BackendService</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-slate-400">// Building scalability</span><br/>
                {'}'}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
