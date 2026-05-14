import React, { useState, useEffect, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Activity, Github as GithubIcon, Code2, GitCommit, Trophy, Users, Linkedin } from 'lucide-react';

// Custom hook for aggressive optimization (Caching, Parallel Fetching, Abort Controllers)
const useLiveStats = () => {
  const [githubData, setGithubData] = useState(() => {
    const cached = localStorage.getItem('github_stats');
    return cached ? { ...JSON.parse(cached), loading: false } : { repos: 0, followers: 0, loading: true };
  });

  const [leetcodeData, setLeetcodeData] = useState(() => {
    const cached = localStorage.getItem('leetcode_stats');
    return cached ? { ...JSON.parse(cached), loading: false } : { solved: 0, easy: 0, medium: 0, hard: 0, loading: true };
  });

  const [linkedinData] = useState({ connections: '500+', followers: '1.2K', loading: false });

  const abortControllerRef = useRef(null);

  const fetchStats = async () => {
    // Cancel any ongoing requests if a new one fires
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      // 1. Parallelize Network Requests
      const [ghResult, lcResult] = await Promise.allSettled([
        fetch('https://api.github.com/users/mithuneesh-k', { signal }).then(res => {
          if (!res.ok) throw new Error('GitHub API Error');
          return res.json();
        }),
        fetch('https://alfa-leetcode-api.onrender.com/mithuneesh-k/solved', { signal }).then(res => {
          if (!res.ok) throw new Error('LeetCode API Error');
          return res.json();
        })
      ]);

      // 2. Process GitHub Data
      if (ghResult.status === 'fulfilled') {
        const ghData = ghResult.value;
        const newGhState = { repos: ghData.public_repos, followers: ghData.followers, loading: false };
        setGithubData(newGhState);
        localStorage.setItem('github_stats', JSON.stringify(newGhState)); // Cache
      } else if (ghResult.reason.name !== 'AbortError') {
        setGithubData(prev => ({ ...prev, loading: false }));
      }

      // 3. Process LeetCode Data
      if (lcResult.status === 'fulfilled') {
        const lcData = lcResult.value;
        const newLcState = {
          solved: lcData.solvedProblem,
          easy: lcData.easySolved,
          medium: lcData.mediumSolved,
          hard: lcData.hardSolved,
          loading: false
        };
        setLeetcodeData(newLcState);
        localStorage.setItem('leetcode_stats', JSON.stringify(newLcState)); // Cache
      } else if (lcResult.reason.name !== 'AbortError') {
        setLeetcodeData(prev => ({ ...prev, loading: false }));
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error("Critical error in live stats:", error);
      }
    }
  };

  useEffect(() => {
    fetchStats();

    // Background refetch every 5 minutes
    const interval = setInterval(() => {
      fetchStats();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(interval);
      if (abortControllerRef.current) abortControllerRef.current.abort(); // Cleanup on unmount
    };
  }, []);

  return { githubData, leetcodeData, linkedinData };
};

const Performance = () => {
  const { githubData, leetcodeData, linkedinData } = useLiveStats();

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
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
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

        <div className="space-y-16">
          {/* ================= GITHUB SECTION ================= */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">GitHub Open Source</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* GitHub Card */}
              <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-500/5">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-900/5 rounded-full blur-2xl group-hover:bg-slate-900/10 transition-all"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Stats</h3>
                    <p className="text-xs font-semibold text-slate-400">@mithuneesh-k</p>
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                  {githubData.loading ? (
                    <div className="animate-pulse space-y-4">
                      <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                        <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><GitCommit className="w-4 h-4"/> Repositories</span>
                        <span className="font-black text-slate-900 text-lg">{githubData.repos}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Users className="w-4 h-4"/> Followers</span>
                        <span className="font-black text-slate-900 text-lg">{githubData.followers}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* GitHub Heatmap & Extra Stats */}
              <div className="lg:col-span-2 space-y-6">
                {/* 365-Day Heatmap */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 relative group overflow-hidden flex flex-col justify-center">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl group-hover:bg-slate-900/10 transition-all"></div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">365-Day Contribution Graph</h4>
                  
                  {/* Flex justify-end keeps the latest (rightmost) stats visible while hiding overflow, eliminating scrollbars */}
                  <div className="w-full overflow-hidden flex justify-end pb-4">
                    <div className="min-w-max p-2">
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

                {/* Extra Stats (Streak & Languages) */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all flex items-center justify-center">
                    <img 
                      src="https://github-readme-streak-stats.herokuapp.com/?user=mithuneesh-k&theme=transparent&hide_border=true&title_color=0f172a&text_color=64748b&icon_color=0284c7" 
                      alt="GitHub Streak" 
                      className="w-full max-w-[400px] object-contain hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all flex items-center justify-center">
                    <img 
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=mithuneesh-k&layout=compact&theme=transparent&hide_border=true&title_color=0f172a&text_color=64748b" 
                      alt="Top Languages" 
                      className="w-full max-w-[400px] object-contain hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= LEETCODE SECTION ================= */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">LeetCode Problem Solving</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* LeetCode Card */}
              <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-orange-100/50 hover:border-orange-200 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-500/5">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shadow-sm border border-orange-100 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Stats</h3>
                    <p className="text-xs font-semibold text-slate-400">@mithuneesh-k</p>
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                  {leetcodeData.loading ? (
                    <div className="animate-pulse space-y-4">
                      <div className="h-4 bg-orange-50 rounded w-full"></div>
                      <div className="h-4 bg-orange-50 rounded w-2/3"></div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center pb-4 border-b border-orange-50">
                        <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Trophy className="w-4 h-4 text-orange-400"/> Total Solved</span>
                        <span className="font-black text-slate-900 text-lg">{leetcodeData.solved}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm pt-2">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-green-500 uppercase">Easy</span>
                          <span className="font-black text-slate-700">{leetcodeData.easy}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-yellow-500 uppercase">Med</span>
                          <span className="font-black text-slate-700">{leetcodeData.medium}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-red-500 uppercase">Hard</span>
                          <span className="font-black text-slate-700">{leetcodeData.hard}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* LeetCode Heatmap */}
              <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-orange-100/50 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 relative group overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Activity Heatmap & Streak</h4>
                <div className="w-full flex justify-center items-center rounded-2xl overflow-hidden relative z-10">
                  <img 
                    src="https://leetcard.jacoblin.cool/mithuneesh-k?ext=heatmap" 
                    alt="LeetCode Stats" 
                    className="w-full object-contain max-w-[600px] hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= LINKEDIN SECTION ================= */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">LinkedIn Network</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* LinkedIn Card */}
              <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-blue-100/50 hover:border-blue-200 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Stats</h3>
                    <p className="text-xs font-semibold text-slate-400">Connections</p>
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center pb-4 border-b border-blue-50">
                    <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Users className="w-4 h-4 text-blue-500"/> Connections</span>
                    <span className="font-black text-slate-900 text-lg">{linkedinData.connections}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500"/> Followers</span>
                    <span className="font-black text-slate-900 text-lg">{linkedinData.followers}</span>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for future LinkedIn features */}
              <div className="lg:col-span-2 bg-white/50 p-8 rounded-3xl border border-slate-100 border-dashed flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                   <Activity className="w-8 h-8 text-slate-300" />
                 </div>
                 <h4 className="text-slate-500 font-bold mb-2">More Network Analytics Coming Soon</h4>
                 <p className="text-slate-400 text-sm max-w-sm">Advanced networking metrics and engagement heatmaps are not currently available via public APIs.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Performance;
