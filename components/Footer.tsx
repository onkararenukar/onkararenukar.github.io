
import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif mb-8 leading-tight">
              Ready to build something <br />
              <span className="text-blue-400">extraordinary?</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              I'm always open to discussing backend architecture, microservices challenges, or new senior engineering opportunities.
            </p>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-4 group transition-transform hover:translate-x-1"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</div>
                  <div className="text-lg font-medium">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-4 group transition-transform hover:translate-x-1"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Call Me</div>
                  <div className="text-lg font-medium">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Based In</div>
                  <div className="text-lg font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 p-8 rounded-3xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"></textarea>
              </div>
              <button className="sm:col-span-2 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Github size={18} /> GitHub
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
