import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code2, Activity, GitCommit, GitPullRequest, Trophy, Users } from 'lucide-react';

const LiveStats = () => {
  const [githubData, setGithubData] = useState({ repos: 0, followers: 0, loading: true });
  const [leetcodeData, setLeetcodeData] = useState({ solved: 0, easy: 0, medium: 0, hard: 0, loading: true });
  // LinkedIn doesn't offer a public unauthenticated API, so we use static/placeholder data 
  // but style it to match the real-time aesthetic.
  const [linkedinData] = useState({ connections: '500+', followers: '1.2K', loading: false });

  const fetchStats = async () => {
    try {
      // Fetch GitHub Data
      const ghRes = await fetch('https://api.github.com/users/mithuneesh-k');
      if (ghRes.ok) {
        const ghData = await ghRes.json();
        setGithubData({
          repos: ghData.public_repos,
          followers: ghData.followers,
          loading: false
        });
      } else {
        setGithubData(prev => ({ ...prev, loading: false }));
      }

      // Fetch LeetCode Data
      const lcRes = await fetch('https://alfa-leetcode-api.onrender.com/mithuneesh-k/solved');
      if (lcRes.ok) {
        const lcData = await lcRes.json();
        setLeetcodeData({
          solved: lcData.solvedProblem,
          easy: lcData.easySolved,
          medium: lcData.mediumSolved,
          hard: lcData.hardSolved,
          loading: false
        });
      } else {
        setLeetcodeData(prev => ({ ...prev, loading: false }));
      }
    } catch (error) {
      console.error("Error fetching live stats:", error);
      setGithubData(prev => ({ ...prev, loading: false }));
      setLeetcodeData(prev => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchStats();
    
    // Auto-update every 5 minutes to stay within API rate limits
    const interval = setInterval(() => {
      fetchStats();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 border-t border-slate-100">
      <div className="flex items-center justify-center gap-3 mb-12">
        <Activity className="w-5 h-5 text-green-500 animate-pulse" />
        <h2 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase text-center">Live Statistics</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* GitHub Card */}
        <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-50 hover:border-slate-200 transition-all group relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-900/5 rounded-full blur-2xl group-hover:bg-slate-900/10 transition-all"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">GitHub</h3>
              <p className="text-xs font-semibold text-slate-400">@mithuneesh-k</p>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            {githubData.loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
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

        {/* LeetCode Card */}
        <div className="bg-orange-50/30 p-8 rounded-3xl border border-orange-100/50 hover:border-orange-200 transition-all group relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-orange-100 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">LeetCode</h3>
              <p className="text-xs font-semibold text-slate-400">@mithuneesh-k</p>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            {leetcodeData.loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-orange-200/50 rounded w-full"></div>
                <div className="h-4 bg-orange-200/50 rounded w-2/3"></div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-4 border-b border-orange-100/50">
                  <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Trophy className="w-4 h-4 text-orange-400"/> Total Solved</span>
                  <span className="font-black text-slate-900 text-lg">{leetcodeData.solved}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
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

        {/* LinkedIn Card */}
        <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-100/50 hover:border-blue-200 transition-all group relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">LinkedIn</h3>
              <p className="text-xs font-semibold text-slate-400">Network</p>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-center pb-4 border-b border-blue-100/50">
              <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Users className="w-4 h-4 text-blue-500"/> Connections</span>
              <span className="font-black text-slate-900 text-lg">{linkedinData.connections}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-500 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500"/> Followers</span>
              <span className="font-black text-slate-900 text-lg">{linkedinData.followers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;
