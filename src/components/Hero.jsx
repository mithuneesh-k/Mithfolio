import React from 'react';
import { MoveRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import { useInfinityMode } from '../context/InfinityModeContext';

const Hero = () => {
  const { isInfinityMode } = useInfinityMode();

  const content = (
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary-blue text-xs font-bold uppercase tracking-widest mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary-blue animate-pulse" />
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 !leading-[1.1] tracking-tighter">
          Building software that{' '}
          <span className="text-primary-blue font-serif italic">actually helps.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
          I'm <span className="font-bold text-slate-900">Mithuneesh</span>, a computer science
          student exploring <strong>AI, Machine Learning</strong>, and how to build digital
          products from the ground up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link
            to="/projects"
            className="btn-primary flex items-center justify-center gap-2 group px-8 py-4 text-base"
          >
            Explore My Work
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:mithuneesh.k@gmail.com"
            className="btn-secondary text-center px-8 py-4 text-base font-mono tracking-tight flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            mithuneesh.k@gmail.com
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatedPage className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />
      {content}
    </AnimatedPage>
  );
};

export default Hero;
