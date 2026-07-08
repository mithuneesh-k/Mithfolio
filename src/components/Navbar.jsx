import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Infinity } from 'lucide-react';
import { useInfinityMode } from '../context/InfinityModeContext';
import { useInfinityScroll } from '../context/InfinityScrollContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null); // 'on' | 'off' | null
  const location = useLocation();
  const { isInfinityMode, toggleInfinityMode } = useInfinityMode();
  const { activeIdx } = useInfinityScroll();

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
    { name: 'Home',         href: '/' },
    { name: 'About',        href: '/about' },
    { name: 'Skills',       href: '/skills' },
    { name: 'Experience',   href: '/experience' },
    { name: 'Performance',  href: '/performance' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Projects',     href: '/projects' },
  ];

  const isActive = (link, index) => {
    if (isInfinityMode) return activeIdx === index;
    return location.pathname === link.href;
  };

  return (
    <>
      <nav className="bg-primary-blue shadow-lg sticky top-0 z-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-white group" onClick={() => setIsMobileMenuOpen(false)}>
              Mithuneesh <span className="text-white/60 inline-block group-hover:translate-x-1 transition-transform">.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-[13px] font-bold uppercase tracking-tight transition-all duration-200 ${
                    isActive(link, index)
                      ? 'bg-white text-primary-blue shadow-sm'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Infinity Mode Button */}
              <button
                onClick={handleToggle}
                aria-label={isInfinityMode ? 'Disable Infinity Mode' : 'Enable Infinity Mode'}
                className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isInfinityMode
                    ? 'bg-white text-primary-blue shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/15'
                }`}
              >
                {isInfinityMode && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                )}
                <Infinity className={`w-4 h-4 transition-transform duration-300 ${isInfinityMode ? 'scale-110' : ''}`} />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4 border-t border-white/20 pt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-tight transition-all duration-200 ${
                    isActive(link, index)
                      ? 'bg-white text-primary-blue shadow-sm'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Toast notification */}
      <div
        className="fixed top-20 right-4 z-[200] pointer-events-none"
        style={{
          opacity: toast ? 1 : 0,
          transform: toast ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <div className="flex items-center gap-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full shadow-2xl">
          <Infinity className="w-3.5 h-3.5" />
          {toast === 'on' ? 'Infinity Mode On' : 'Infinity Mode Off'}
        </div>
      </div>
    </>
  );
};

export default Navbar;
