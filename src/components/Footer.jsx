import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-white dark:bg-blue-950 border-t border-slate-100 dark:border-blue-800 font-inter">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <h4 className="text-2xl font-bold text-slate-900 dark:text-blue-50 mb-6 underline underline-offset-8 decoration-primary-blue/30 italic">Mithuneesh.</h4>
             <p className="text-slate-500 dark:text-blue-300 max-w-sm mb-8 leading-relaxed font-medium">
                A Computer Science student focused on building clean, efficient, and thoughtful digital solutions across AI and Software Engineering.
             </p>
             <div className="flex gap-4">
               {[
                 { icon: <Github className="w-5 h-5" />, href: 'https://github.com/mithuneesh-k' },
                 { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/mithuneesh-kanagaraj-b9b220369/' },
                 { icon: <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="w-[18px] h-[18px] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />, href: 'https://leetcode.com/u/mithuneesh-k/' },
                 { icon: <Mail className="w-5 h-5" />, href: 'mailto:mithuneesh.k@gmail.com' }
               ].map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.href} 
                   target="_blank"
                   className="group w-10 h-10 rounded-full border border-slate-100 dark:border-blue-800 flex items-center justify-center text-slate-400 hover:text-primary-blue hover:border-primary-blue hover:bg-blue-50 transition-all shadow-sm"
                 >
                   {social.icon}
                 </a>
               ))}
             </div>
          </div>
          <div className="md:text-right">
             <div className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] mb-6">Navigation</div>
             <nav className="flex flex-col gap-3 font-bold text-slate-500 dark:text-blue-300 uppercase text-[11px] tracking-widest">
                <a href="/" className="hover:text-primary-blue transition-colors">Home</a>
                <a href="/about" className="hover:text-primary-blue transition-colors">About</a>
                <a href="/skills" className="hover:text-primary-blue transition-colors">Skills</a>
                <a href="/experience" className="hover:text-primary-blue transition-colors">Experience</a>
                <a href="/performance" className="hover:text-primary-blue transition-colors">Performance</a>
                <a href="/certificates" className="hover:text-primary-blue transition-colors">Certificates</a>
                <a href="/projects" className="hover:text-primary-blue transition-colors">Projects</a>
             </nav>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-50 flex justify-center items-center">
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest text-center">© 2026 Mithuneesh Kanagaraj. Coimbatore, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
