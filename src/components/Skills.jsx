import React from 'react';
import AnimatedPage from './AnimatedPage';
import { 
  BrainCircuit, 
  Code2, 
  Terminal, 
  Star, 
  BarChart3, 
  MessageSquare, 
  Settings,
  Cpu,
  Globe,
  Database,
  Smartphone,
  ShieldCheck,
  Zap,
  Briefcase,
  Users,
  Rocket,
  Languages
} from 'lucide-react';

const Skills = () => {
  const techIcons = {
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    c: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  };

  const technicalGroups = [
    {
      title: 'AI & Machine Intelligence',
      icon: <BrainCircuit className="w-5 h-5 text-primary-blue" />,
      skills: [
        { name: 'Vision Language Models', desc: 'CLIP, Qwen2.5-VL', icon: <Cpu className="w-6 h-6" /> },
        { name: 'Gemini Ecosystem', desc: 'Google Certified', icon: <BrainCircuit className="w-6 h-6" /> },
        { name: 'Prompt Engineering', desc: 'Design Patterns', icon: <Zap className="w-6 h-6" /> },
        { name: 'Computer Vision', desc: 'OpenCV University', icon: <Globe className="w-6 h-6" /> },
        { name: 'Multimodal AI', desc: 'Zero-Shot Systems', icon: <ShieldCheck className="w-6 h-6" /> }
      ]
    },
    {
      title: 'Core Engineering',
      icon: <Code2 className="w-5 h-5 text-primary-blue" />,
      skills: [
        { name: 'Java Architecture', desc: 'Object Oriented Dev', logo: techIcons.java },
        { name: 'JavaScript / ES6+', desc: 'Modern Web Logic', logo: techIcons.javascript },
        { name: 'C / C++ Programs', desc: 'System Programming', logo: techIcons.cplusplus },
        { name: 'Python Engineering', desc: 'Automation & AI', logo: techIcons.python },
        { name: 'TypeScript Systems', desc: 'Type-Safe Builds', logo: techIcons.typescript }
      ]
    },
    {
      title: 'Frameworks & Systems',
      icon: <Terminal className="w-5 h-5 text-primary-blue" />,
      skills: [
        { name: 'React Development', desc: 'v18/19 Specialist', logo: techIcons.react },
        { name: 'React Native Expo', desc: 'Mobile Architecture', logo: techIcons.react },
        { name: 'UI Frameworks', desc: 'Tailwind / Bootstrap', logo: techIcons.tailwind },
        { name: 'SQL & Database', desc: 'MySQL / Structured', logo: techIcons.mysql },
        { name: 'Git & Workflows', desc: 'GitHub Automation', logo: techIcons.github }
      ]
    }
  ];

  const businessGroups = [
    {
      title: 'Strategic Leadership',
      icon: <BarChart3 className="w-5 h-5 text-primary-blue" />,
      skills: [
        { name: 'Lean Startup', icon: <Rocket className="w-5 h-5" /> },
        { name: 'Business Strategy', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Project Finance', icon: <Briefcase className="w-5 h-5" /> },
        { name: 'Entrepreneurship', icon: <Star className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Language Proficiency',
      icon: <Languages className="w-5 h-5 text-primary-blue" />,
      skills: [
        { name: 'English', icon: '🇺🇸', desc: 'Duolingo 130 (Prof.)' },
        { name: 'Tamil', icon: '🇮🇳', desc: 'Native Proficiency' },
        { name: 'Kannada', icon: '🇮🇳', desc: 'Native Proficiency' },
        { name: 'French', icon: '🇫🇷', desc: 'Duolingo 14 (Elem.)' }
      ]
    },
    {
      title: 'Professional Impact',
      icon: <Users className="w-5 h-5 text-primary-blue" />,
      skills: [
        { name: 'Public Speaking', icon: <MessageSquare className="w-5 h-5" /> },
        { name: 'Leadership', icon: <Users className="w-5 h-5" /> },
        { name: 'Social Media', icon: <Zap className="w-5 h-5" /> },
        { name: 'Accounting', icon: <Settings className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <AnimatedPage className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary-blue uppercase mb-6 flex items-center gap-4">
             <span className="h-[1px] w-8 bg-primary-blue/30"></span>
             Expertise Matrix
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 !leading-tight tracking-tighter">
            Architecting solutions with <span className="text-primary-blue italic">precision.</span>
          </h3>
          <p className="text-lg text-slate-500 font-medium">
            Bridging complex software engineering with multilingual communication and strategic leadership.
          </p>
        </div>

        {/* Technical Section */}
        <div className="mb-32">
           <div className="grid lg:grid-cols-3 gap-12">
              {technicalGroups.map((group, idx) => (
                <div key={idx} className="space-y-10">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    {group.icon}
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{group.title}</h4>
                  </div>
                  <div className="space-y-6">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 group-hover:bg-white group-hover:border-primary-blue/30 group-hover:shadow-lg transition-all duration-300">
                           {skill.logo ? (
                             <img src={skill.logo} alt={skill.name} className="w-full h-full grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                           ) : (
                             <div className="text-slate-400 group-hover:text-primary-blue transition-colors">
                               {skill.icon}
                             </div>
                           )}
                        </div>
                        <div>
                           <div className="text-sm font-bold text-slate-900 uppercase tracking-wide group-hover:text-primary-blue transition-colors">{skill.name}</div>
                           <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-widest">{skill.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Strategic Section */}
        <div className="pt-24 border-t border-slate-100">
           <div className="grid md:grid-cols-3 gap-8">
              {businessGroups.map((group, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50/50 border border-slate-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    {group.icon}
                    <h5 className="text-base font-bold text-slate-900 uppercase tracking-widest">{group.title}</h5>
                  </div>
                  <div className="grid gap-4 flex-grow">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between group p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">
                         <div className="flex items-center gap-3">
                            <div className="text-slate-300 group-hover:text-primary-blue transition-colors text-lg">
                               {skill.icon}
                            </div>
                            <span className="text-[11px] font-black text-slate-600 group-hover:text-slate-900 uppercase tracking-widest transition-colors">{skill.name}</span>
                         </div>
                         {skill.desc && (
                           <span className="text-[9px] font-bold text-slate-400 uppercase italic opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">{skill.desc}</span>
                         )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
           </div>
        </div>


      </div>
    </AnimatedPage>
  );
};

export default Skills;
