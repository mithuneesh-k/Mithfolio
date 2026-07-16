import React from 'react';
import AnimatedPage from './AnimatedPage';
import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      school: 'Sri Shakthi Institute of Engineering and Technology',
      degree: 'Bachelor of Engineering - BE, Computer Science',
      period: 'Sep 2025 — May 2029',
      grade: '9.04 CGPA',
      details: 'Participated in Hackathons and Coding competitions. Member of Coding, Mathematics, Journal, and Startup club.',
      logo: '🎓'
    },
    {
      school: 'Vivekananda Vidyalaya',
      degree: 'High School, Computer Science',
      period: 'Jun 2023 — May 2025',
      grade: '86%',
      details: 'Focused on core Computer Science foundations and mathematics.',
      logo: '🏫'
    },
    {
      school: 'Bharath Matriculation School',
      degree: 'SSLC',
      period: 'Jun 2022 — May 2023',
      grade: '92%',
      details: 'Skills developed: English, English as a Second Language (ESL).',
      logo: '📚'
    }
  ];

  return (
    <AnimatedPage className="min-h-[calc(100vh-80px)] py-20 bg-white dark:bg-blue-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-16 items-start mb-24">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase mb-6">Identity</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-blue-50 leading-[1.1] tracking-tighter">My Journey <span className="text-slate-300 font-light">&</span> <br/><span className="text-primary-blue italic font-serif">Philosophy</span></h3>
          </div>
          <div className="lg:col-span-2 space-y-8 text-lg text-slate-500 dark:text-blue-300 font-medium leading-relaxed">
            <p>
              Hi, I'm <span className="text-slate-900 dark:text-blue-50 font-bold">Mithuneesh Kanagaraj</span>. I'm a computer science student who genuinely loves building things that work well. Lately, I've been diving deep into <strong>Machine Learning and AI</strong>, figuring out how to build systems that automate the boring stuff and solve real problems.
            </p>
            <p>
              For me, coding is just a tool to get ideas off the ground. Whether I'm putting together a mobile app for health tracking or writing a Python script to speed up my own workflow, I care a lot about the details. I like to keep things clean, simple, and actually useful.
            </p>
            <p>
              I'm always trying out new frameworks and tools—right now, I'm exploring vision-language models and sharpening my full-stack skills. I believe the best way to learn is to just build, which is why I spend most of my time working on side projects or joining communities with other builders.
            </p>
          </div>
        </div>

        <div className="pt-20 border-t border-slate-100 dark:border-blue-800">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase mb-12 text-center">Academic Foundation</h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {education.map((item, idx) => (
              <div key={idx} className="relative pl-12 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-[1px] before:bg-slate-100 last:before:hidden">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-50 border border-primary-blue/20 flex items-center justify-center text-lg z-10">
                  {item.logo}
                </div>
                <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-50 hover:border-primary-blue/20 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-blue-50 group-hover:text-primary-blue transition-colors">{item.school}</h4>
                      <p className="text-primary-blue font-semibold">{item.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-1 rounded-full bg-white dark:bg-blue-950 border border-slate-100 dark:border-blue-800 text-sm font-bold text-slate-500 dark:text-blue-300 shadow-sm">{item.period}</span>
                      <div className="text-primary-blue font-black mt-2">Grade: {item.grade}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium italic mb-4">{item.details}</p>
                  {idx === 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Coding Club', 'Mathematics Club', 'Journal Club', 'Startup Club'].map(club => (
                        <span key={club} className="px-3 py-1 rounded-lg bg-blue-100/50 text-primary-blue text-xs font-bold uppercase tracking-wider border border-primary-blue/10">
                          {club}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
