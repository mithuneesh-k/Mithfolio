import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HealthDrop (HealthSurveillanceSystem)',
      description: 'A regional health tracker designed to monitor water quality and disease outbreaks.',
      tags: ['React Native', 'Expo', 'React.js', 'TypeScript'],
      github: 'https://github.com/mithuneesh-k/HealthDrop-HealthSurveillanceSystem',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' // Medical tech context
    },
    {
      title: 'Morse-Maxx & Tkinter GUI',
      description: 'A Python-powered Morse converter with a robust Graphical User Interface built using Tkinter.',
      tags: ['Python', 'Tkinter (GUI)', 'Automation'],
      github: 'https://github.com/mithuneesh-k/Morse-Maxx',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800' // Code/Terminal matrix context
    },
    {
      title: 'AttMate (Smart Attendance)',
      description: 'Digital management system for high-accuracy student attendance tracking.',
      tags: ['Python', 'System Design', 'Management'],
      github: 'https://github.com/mithuneesh-k/AttMate',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' // Dashboard system context
    },
    {
      title: 'FilmPedia',
      description: 'Responsive movie discovery platform with high-fidelity web design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Web Design'],
      github: 'https://github.com/mithuneesh-k/FilmPedia',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' // Media app context
    },
    {
      title: 'tadaTasks',
      description: 'A task management application built with a focus on responsive UI/UX.',
      tags: ['Bootstrap', 'Tailwind', 'HTML', 'CSS'],
      github: 'https://github.com/mithuneesh-k/tadaTasks',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fd3af?auto=format&fit=crop&q=80&w=800' // Productivity context
    },
    {
      title: 'Number-word-converter',
      description: 'Utility tool for large-scale numeric to semantic word conversion.',
      tags: ['Python', 'CustomTkinter', 'Utility'],
      github: 'https://github.com/mithuneesh-k/Number-word-converter',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' // Microprocessor/Utility context
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
              
              {/* Image Context Header */}
              <div className="aspect-video bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-primary-blue/20 to-transparent mix-blend-multiply"></div>
                <div className="relative px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl font-bold text-white group-hover:bg-white group-hover:text-primary-blue transition-all duration-500 text-xs uppercase tracking-widest italic font-inter">
                  Build Details
                </div>
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
