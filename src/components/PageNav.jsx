import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const pages = [
  { name: 'Home',         href: '/' },
  { name: 'About',        href: '/about' },
  { name: 'Skills',       href: '/skills' },
  { name: 'Experience',   href: '/experience' },
  { name: 'Performance',  href: '/performance' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Projects',     href: '/projects' },
];

const PageNav = () => {
  const { pathname } = useLocation();
  const currentIdx = pages.findIndex(p => p.href === pathname);

  const prev = currentIdx > 0 ? pages[currentIdx - 1] : null;
  const next = currentIdx < pages.length - 1 ? pages[currentIdx + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="border-t border-slate-100 dark:border-blue-800 bg-white dark:bg-blue-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-stretch justify-between min-h-[80px]">
          {/* Prev */}
          {prev ? (
            <Link
              to={prev.href}
              className="group flex items-center gap-4 py-6 pr-8 text-left hover:text-primary-blue transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary-blue group-hover:text-primary-blue group-hover:bg-blue-50 transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Previous</div>
                <div className="text-sm font-bold text-slate-700 group-hover:text-primary-blue transition-colors">{prev.name}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Page dots */}
          <div className="hidden md:flex items-center gap-2 self-center">
            {pages.map((p, i) => (
              <Link
                key={p.href}
                to={p.href}
                title={p.name}
                className={`transition-all rounded-full ${
                  i === currentIdx
                    ? 'w-6 h-2 bg-primary-blue'
                    : i < currentIdx
                    ? 'w-2 h-2 bg-primary-blue/40 hover:bg-primary-blue/70'
                    : 'w-2 h-2 bg-slate-200 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          {next ? (
            <Link
              to={next.href}
              className="group flex items-center gap-4 py-6 pl-8 text-right hover:text-primary-blue transition-colors"
            >
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Next</div>
                <div className="text-sm font-bold text-slate-700 group-hover:text-primary-blue transition-colors">{next.name}</div>
              </div>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary-blue group-hover:text-primary-blue group-hover:bg-blue-50 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageNav;
