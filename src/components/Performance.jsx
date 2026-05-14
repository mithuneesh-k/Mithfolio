import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Activity, Flame, Trophy, Github as GithubIcon, Code2 } from 'lucide-react';
import LiveStats from './LiveStats';

const Performance = () => {
  // Custom theme for the GitHub Calendar to match the portfolio's blue aesthetic
  const explicitTheme = {
    light: ['#f1f5f9', '#bae6fd', '#7dd3fc', '#38bdf8', '#0284c7'],
    dark: ['#f1f5f9', '#bae6fd', '#7dd3fc', '#38bdf8', '#0284c7'],
  };

  return (
    <section className="min-h-[calc(100vh-80px)] py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-orange-500/5 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Metrics & Analytics
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-0 leading-[1.1]">Performance</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right hidden lg:block">
            Tracking consistency, problem-solving, and continuous learning through data.
          </p>
        </div>

        {/* The LiveStats cards */}
        <div className="mb-20">
          <LiveStats />
        </div>

        {/* Heatmaps Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* GitHub Section */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 relative group overflow-hidden">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl group-hover:bg-slate-900/10 transition-all"></div>
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                 <GithubIcon className="w-6 h-6 text-slate-700" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900">GitHub Contributions</h3>
                 <p className="text-sm font-semibold text-slate-400">Code pushes, PRs, and issues</p>
               </div>
             </div>
             
             <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
               <div className="min-w-[700px] p-2">
                 <GitHubCalendar 
                   username="mithuneesh-k" 
                   theme={explicitTheme}
                   blockSize={14}
                   blockMargin={6}
                   fontSize={14}
                 />
               </div>
             </div>
          </div>

          {/* LeetCode Section */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 relative group overflow-hidden">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center border border-orange-100">
                 <Code2 className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900">LeetCode Activity</h3>
                 <p className="text-sm font-semibold text-slate-400">Problem solving streak and heatmap</p>
               </div>
             </div>
             
             <div className="w-full flex justify-center items-center p-2 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden">
                {/* We use an external widget for LeetCode heatmap which provides gorgeous visuals out of the box */}
                <img 
                  src="https://leetcard.jacoblin.cool/mithuneesh-k?ext=heatmap" 
                  alt="LeetCode Stats" 
                  className="w-full object-contain max-w-[500px]"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Performance;
