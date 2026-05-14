import React, { useState, useEffect } from 'react';
import { Github, ArrowUpRight, Star, GitFork, ExternalLink, Code2, Activity, Terminal } from 'lucide-react';

const languageColors = {
  JavaScript: 'from-yellow-400/20 to-yellow-500/10 text-yellow-600 border-yellow-200',
  TypeScript: 'from-blue-400/20 to-blue-500/10 text-blue-600 border-blue-200',
  Python: 'from-green-400/20 to-green-500/10 text-green-600 border-green-200',
  HTML: 'from-orange-400/20 to-orange-500/10 text-orange-600 border-orange-200',
  CSS: 'from-indigo-400/20 to-indigo-500/10 text-indigo-600 border-indigo-200',
  Dart: 'from-cyan-400/20 to-cyan-500/10 text-cyan-600 border-cyan-200',
  Java: 'from-red-400/20 to-red-500/10 text-red-600 border-red-200',
  default: 'from-slate-400/20 to-slate-500/10 text-slate-600 border-slate-200',
};

const getLanguageStyle = (lang) => {
  return languageColors[lang] || languageColors.default;
};

// Custom hook to fetch Github Repos with caching
const useGithubRepos = (username) => {
  const [repos, setRepos] = useState(() => {
    const cached = localStorage.getItem('github_repos');
    return cached ? JSON.parse(cached) : [];
  });
  const [loading, setLoading] = useState(!localStorage.getItem('github_repos'));

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=9`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        
        // Filter out forks if you only want original projects, or keep them. We'll keep all for now but prioritize non-forks.
        const filteredData = data.filter(repo => !repo.fork);
        
        setRepos(filteredData);
        localStorage.setItem('github_repos', JSON.stringify(filteredData));
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading };
};

const Projects = () => {
  const { repos, loading } = useGithubRepos('mithuneesh-k');

  return (
    <section className="min-h-[calc(100vh-80px)] py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-primary-blue/5 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Live from GitHub
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-0 leading-[1.1]">Latest Projects</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right hidden lg:block">
            Real-time fetch of my open-source contributions and personal projects directly from GitHub.
          </p>
        </div>
        
        {loading && repos.length === 0 ? (
          /* Skeleton Loader */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((sk) => (
              <div key={sk} className="h-80 bg-white rounded-3xl border border-slate-100 p-8 animate-pulse flex flex-col">
                <div className="w-12 h-12 bg-slate-100 rounded-xl mb-6"></div>
                <div className="h-6 bg-slate-100 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-5/6 mb-8"></div>
                <div className="mt-auto flex gap-4">
                  <div className="h-6 bg-slate-100 rounded-full w-16"></div>
                  <div className="h-6 bg-slate-100 rounded-full w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Real Data */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => {
              const langStyle = getLanguageStyle(repo.language);
              
              return (
                <div 
                  key={repo.id} 
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary-blue/30 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 relative"
                >
                  {/* Glassmorphism Header Area based on language */}
                  <div className={`h-24 bg-gradient-to-br ${langStyle} relative overflow-hidden flex items-center px-8 border-b`}>
                    <div className="absolute -right-4 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/40 transition-all duration-500"></div>
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-white/50 relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <Terminal className="w-6 h-6 currentColor" />
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary-blue transition-colors truncate">
                        {repo.name}
                      </h4>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-blue transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm flex-grow mb-8 line-clamp-3">
                      {repo.description || "No description provided. This project speaks for itself through its code."}
                    </p>
                    
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex gap-4">
                        {/* Language Tag */}
                        {repo.language && (
                          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${langStyle.split(' ')[0]}`}></span>
                            {repo.language}
                          </span>
                        )}
                        {/* Stars */}
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <Star className="w-3.5 h-3.5 text-yellow-500" />
                          {repo.stargazers_count}
                        </span>
                        {/* Forks */}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                            <GitFork className="w-3.5 h-3.5 text-slate-400" />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                      
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                         <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
