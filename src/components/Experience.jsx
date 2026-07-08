import React from 'react';
import AnimatedPage from './AnimatedPage';
import { Briefcase, Calendar, MapPin, ArrowUpRight, Mail } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Campus Ambassador',
      company: 'Internshala',
      period: 'Sep 2025 — Dec 2025 (4 mos)',
      location: 'Coimbatore, TN · Remote',
      description: 'Promoted Internshala internships and trainings on campus, drove student registrations, and increased awareness about career opportunities through digital and peer outreach.',
      skills: ['Sales', 'Brand Ambassador Training', 'Marketing', 'Digital Outreach'],
      logo: '🎓'
    }
  ];

  return (
    <AnimatedPage className="min-h-[calc(100vh-80px)] py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary-blue uppercase mb-4">Trajectory</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Professional Experience</h3>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative pl-12 before:absolute before:left-4 before:top-4 before:bottom-0 before:w-[1px] before:bg-slate-100 last:before:hidden">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary-blue border border-primary-blue/20 flex items-center justify-center text-primary-blue z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="bg-slate-50/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-50 hover:bg-white hover:border-primary-blue/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary-blue transition-colors">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-primary-blue font-bold uppercase tracking-wider text-sm mb-4">
                      {exp.company}
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-500 font-medium">Freelance</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {exp.period}</div>
                       <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {exp.location}</div>
                    </div>
                  </div>
                  <div className="flex shrink-0">
                     <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-3xl shadow-sm italic font-black text-primary-blue/20">
                        IS
                     </div>
                  </div>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                   {exp.skills.map(skill => (
                     <span key={skill} className="px-4 py-1.5 rounded-full bg-white border border-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {skill}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action / Contact Section */}
        <div className="mt-32 p-12 md:p-16 rounded-[3rem] bg-slate-900 flex flex-col items-center text-center overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-blue/10 via-transparent to-transparent pointer-events-none"></div>
           <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 relative">Looking for a collaborative engineer?</h4>
           <p className="text-slate-400 mb-8 relative font-medium">Get in touch directly via email.</p>
           <a href="mailto:mithuneesh.k@gmail.com" className="btn-primary relative flex items-center gap-3 font-mono tracking-tight group hover:scale-105 transition-transform duration-300">
              <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> 
              mithuneesh.k@gmail.com
           </a>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Experience;
