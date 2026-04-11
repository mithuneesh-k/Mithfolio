import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HealthDrop (HealthSurveillanceSystem)',
      description: 'A regional health tracker designed to monitor water quality and disease outbreaks.',
      tags: ['React Native', 'Expo', 'React.js', 'TypeScript'],
      github: 'https://github.com/mithuneesh-k/HealthDrop-HealthSurveillanceSystem',
      link: '#'
    },
    {
      title: 'Morse-Maxx & Tkinter GUI',
      description: 'A Python-powered Morse converter with a robust Graphical User Interface built using Tkinter.',
      tags: ['Python', 'Tkinter (GUI)', 'Automation'],
      github: 'https://github.com/mithuneesh-k/Morse-Maxx',
      link: '#'
    },
    {
      title: 'AttMate (Smart Attendance)',
      description: 'Digital management system for high-accuracy student attendance tracking.',
      tags: ['Python', 'System Design', 'Management'],
      github: 'https://github.com/mithuneesh-k/AttMate',
      link: '#'
    },
    {
      title: 'FilmPedia',
      description: 'Responsive movie discovery platform with high-fidelity web design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Web Design'],
      github: 'https://github.com/mithuneesh-k/FilmPedia',
      link: '#'
    },
    {
      title: 'tadaTasks',
      description: 'A task management application built with a focus on responsive UI/UX.',
      tags: ['Bootstrap', 'Tailwind', 'HTML', 'CSS'],
      github: 'https://github.com/mithuneesh-k/tadaTasks',
      link: '#'
    },
    {
      title: 'Number-word-converter',
      description: 'Utility tool for large-scale numeric to semantic word conversion.',
      tags: ['Python', 'CustomTkinter', 'Utility'],
      github: 'https://github.com/mithuneesh-k/Number-word-converter',
      link: '#'
    }
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-0 leading-[1.1]">Featured Missions</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right hidden lg:block">
            Architecting solutions from mobile surveillance to semantic automation tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary-blue/30 transition-all flex flex-col hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="aspect-video bg-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/5 transition-colors"></div>
                <div className="px-6 py-3 bg-white/80 backdrop-blur rounded-full border border-white shadow-sm font-bold text-slate-400 group-hover:text-primary-blue transition-colors text-xs uppercase tracking-widest italic font-inter shadow-inner">Build Details</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase font-bold tracking-widest rounded-full">{tag}</span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-blue transition-colors flex items-center justify-between leading-tight">
                   <span className="max-w-[80%]">{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow mb-8 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-6 border-t border-slate-50">
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                      <Github className="w-4 h-4" /> Source
                   </a>
                   <a href={project.link} className="text-sm font-bold text-slate-400 hover:text-primary-blue transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Preview
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
