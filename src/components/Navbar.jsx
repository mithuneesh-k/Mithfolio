import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Infinity, Home, User, Code2, 
  Briefcase, Activity, Award, FolderGit2, Moon, Sun 
} from 'lucide-react';
import { useInfinityMode } from '../context/InfinityModeContext';
import { useInfinityScroll } from '../context/InfinityScrollContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null); // 'on' | 'off' | null
  const location = useLocation();
  const { isInfinityMode, toggleInfinityMode } = useInfinityMode();
  const { activeIdx } = useInfinityScroll();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleToggle = () => {
    toggleInfinityMode();
    setToast(isInfinityMode ? 'off' : 'on');
  };

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  const navLinks = [
    { name: 'Home',         href: '/',            icon: Home },
    { name: 'About',        href: '/about',       icon: User },
    { name: 'Skills',       href: '/skills',      icon: Code2 },
    { name: 'Experience',   href: '/experience',  icon: Briefcase },
    { name: 'Performance',  href: '/performance', icon: Activity },
    { name: 'Certificates', href: '/certificates',icon: Award },
    { name: 'Projects',     href: '/projects',    icon: FolderGit2 },
  ];

  const isActive = (link, index) => {
    if (isInfinityMode) return activeIdx === index;
    return location.pathname === link.href;
  };

  return (
    <>
      <nav className="bg-primary-blue dark:bg-blue-950/95 dark:backdrop-blur-xl shadow-lg sticky top-0 z-50 py-4 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-white group flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <span className="text-white text-lg leading-none mt-[-2px]">M</span>
              </div>
              <span className="hidden sm:block">Mithuneesh <span className="text-white/60 inline-block group-hover:translate-x-1 transition-transform">.</span></span>
            </Link>

            {/* Desktop Nav - Modern Pill Design */}
            <div className="hidden lg:flex items-center p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-inner">
              {navLinks.map((link, index) => {
                const active = isActive(link, index);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`group flex items-center rounded-full text-[13px] font-bold uppercase tracking-tight transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      active
                        ? 'bg-white text-primary-blue shadow-md px-4 py-2 dark:bg-primary-blue dark:text-white dark:shadow-[0_0_15px_rgba(3,136,252,0.4)]'
                        : 'text-white/60 hover:bg-white/15 hover:text-white px-3 py-2'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span
                      className={`overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        active ? 'max-w-[120px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/15 focus:outline-none"
              >
                {isDarkMode ? (
                  <Moon className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
                ) : (
                  <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
                )}
              </button>

              {/* Infinity Mode Button */}
              <button
                onClick={handleToggle}
                aria-label={isInfinityMode ? 'Disable Infinity Mode' : 'Enable Infinity Mode'}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isInfinityMode
                    ? 'bg-white text-primary-blue shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/15'
                }`}
              >
                {isInfinityMode && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-400 border border-white animate-pulse" />
                )}
                <Infinity className={`w-5 h-5 transition-transform duration-300 ${isInfinityMode ? 'scale-110' : ''}`} />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/15 transition-all focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col gap-2 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              {navLinks.map((link, index) => {
                const active = isActive(link, index);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-tight transition-all duration-200 ${
                      active
                        ? 'bg-white text-primary-blue shadow-sm'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${active ? 'text-primary-blue' : 'text-white/50'}`} />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Toast notification */}
      <div
        className="fixed top-24 right-4 z-[200] pointer-events-none"
        style={{
          opacity: toast ? 1 : 0,
          transform: toast ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-full shadow-2xl border border-white/10">
          <Infinity className="w-4 h-4 text-blue-400" />
          {toast === 'on' ? 'Infinity Mode On' : 'Infinity Mode Off'}
        </div>
      </div>
    </>
  );
};

export default Navbar;
