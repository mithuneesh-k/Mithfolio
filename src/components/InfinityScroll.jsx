import React, { useRef, useEffect, useCallback } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Performance from './Performance';
import Certificates from './Certificates';
import Projects from './Projects';
import Footer from './Footer';
import { useInfinityScroll } from '../context/InfinityScrollContext';

export const SECTIONS = [
  { label: 'Home',         path: '/',              Component: Hero         },
  { label: 'About',        path: '/about',         Component: About        },
  { label: 'Skills',       path: '/skills',        Component: Skills       },
  { label: 'Experience',   path: '/experience',    Component: Experience   },
  { label: 'Performance',  path: '/performance',   Component: Performance  },
  { label: 'Certificates', path: '/certificates',  Component: Certificates },
  { label: 'Projects',     path: '/projects',      Component: Projects     },
];

const InfinityScroll = ({ initialPath = '/' }) => {
  const containerRef   = useRef(null);
  const sectionRefs    = useRef([]);
  const dotRefs        = useRef([]);
  const labelTextRef   = useRef(null);
  const labelCountRef  = useRef(null);
  const labelWrapRef   = useRef(null);
  const currentIdxRef  = useRef(0);
  const labelTimerRef  = useRef(null);
  const ctxDebounceRef = useRef(null);
  const scrollLockRef  = useRef(false);

  const { setActiveIdx: setCtxIdx } = useInfinityScroll();

  // ── Pure DOM update — zero React re-renders during scroll ──
  const activateSection = useCallback((idx) => {
    if (idx === currentIdxRef.current && idx !== 0) return;
    currentIdxRef.current = idx;

    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      dot.style.width           = i === idx ? '8px'  : '6px';
      dot.style.height          = i === idx ? '24px' : '6px';
      dot.style.backgroundColor = i === idx ? '#2563eb' : 'rgba(100,116,139,0.35)';
    });

    if (labelTextRef.current)  labelTextRef.current.textContent  = SECTIONS[idx]?.label ?? '';
    if (labelCountRef.current) labelCountRef.current.textContent = `${idx + 1} / ${SECTIONS.length}`;
    if (labelWrapRef.current) {
      labelWrapRef.current.style.opacity   = '1';
      labelWrapRef.current.style.transform = 'translateX(-50%) translateY(0px)';
      clearTimeout(labelTimerRef.current);
      labelTimerRef.current = setTimeout(() => {
        if (labelWrapRef.current) {
          labelWrapRef.current.style.opacity   = '0';
          labelWrapRef.current.style.transform = 'translateX(-50%) translateY(6px)';
        }
      }, 1400);
    }

    clearTimeout(ctxDebounceRef.current);
    ctxDebounceRef.current = setTimeout(() => setCtxIdx(idx), 120);
  }, [setCtxIdx]);

  // Jump to initial section instantly
  useEffect(() => {
    const idx = Math.max(0, SECTIONS.findIndex(s => s.path === initialPath));
    currentIdxRef.current = idx;
    setCtxIdx(idx);
    if (idx > 0 && containerRef.current) {
      const el = sectionRefs.current[idx];
      if (el) containerRef.current.scrollTop = el.offsetTop;
    }
    requestAnimationFrame(() => activateSection(idx));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // IntersectionObserver — watches section tops
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null;
        let bestRatio = 0;
        for (const entry of entries) {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = entry;
          }
        }
        if (best && bestRatio > 0) {
          const idx = sectionRefs.current.indexOf(best.target);
          if (idx !== -1) activateSection(idx);
        }
      },
      // Use a narrow top strip of the viewport as the detection zone
      { root: container, rootMargin: '-10% 0px -85% 0px', threshold: 0 }
    );

    sectionRefs.current.forEach(el => el && observer.observe(el));

    return () => {
      observer.disconnect();
      clearTimeout(labelTimerRef.current);
      clearTimeout(ctxDebounceRef.current);
    };
  }, [activateSection]);

  // Scroll to section by index
  const scrollTo = useCallback((idx) => {
    const container = containerRef.current;
    const el = sectionRefs.current[idx];
    if (!container || !el || scrollLockRef.current) return;
    scrollLockRef.current = true;
    container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    setTimeout(() => { scrollLockRef.current = false; }, 900);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollTo(Math.min(currentIdxRef.current + 1, SECTIONS.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollTo(Math.max(currentIdxRef.current - 1, 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [scrollTo]);

  return (
    /*
     * Single scrolling document.
     * scroll-snap-type: y proximity — snaps only when you're close to a boundary,
     * so content longer than 100vh is still fully reachable by normal scrolling.
     * (mandatory would lock you inside short sections and prevent reaching tall content)
     */
    <div
      ref={containerRef}
      style={{
        flex: 1,
        overflowY: 'scroll',
        scrollSnapType: 'y proximity',
        overscrollBehavior: 'none',
        willChange: 'scroll-position',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {SECTIONS.map(({ label, Component }, i) => (
        /*
         * Snap anchor sits at the TOP of each section.
         * No height constraints — content is as tall as it needs to be.
         */
        <div
          key={label}
          ref={el => { sectionRefs.current[i] = el; }}
          style={{ scrollSnapAlign: 'start' }}
        >
          <Component />
        </div>
      ))}

      <div style={{ scrollSnapAlign: 'start' }}>
        <Footer />
      </div>

      {/* ── Side dot navigator ── */}
      <div
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2"
        style={{ pointerEvents: 'auto' }}
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s.label}
            onClick={() => scrollTo(i)}
            title={s.label}
            className="group relative flex items-center justify-end"
            style={{ width: 48, height: 20 }}
          >
            <span className="absolute right-7 text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-white border border-slate-100 shadow-md rounded-full px-2 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
              {s.label}
            </span>
            <span
              ref={el => { dotRefs.current[i] = el; }}
              style={{
                display: 'block',
                borderRadius: '9999px',
                width: '6px',
                height: '6px',
                backgroundColor: 'rgba(100,116,139,0.35)',
                transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Section label chip ── */}
      <div
        ref={labelWrapRef}
        className="fixed bottom-6 left-1/2 z-50 pointer-events-none"
        style={{
          opacity: 0,
          transform: 'translateX(-50%) translateY(6px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          willChange: 'opacity, transform',
        }}
      >
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span ref={labelTextRef} />
          <span ref={labelCountRef} className="text-white/40 font-normal" />
        </div>
      </div>
    </div>
  );
};

export default InfinityScroll;
