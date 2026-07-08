import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Performance from './components/Performance';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageNav from './components/PageNav';
import InfinityScroll from './components/InfinityScroll';
import { useInfinityMode } from './context/InfinityModeContext';
import { InfinityScrollProvider } from './context/InfinityScrollContext';

function App() {
  const location = useLocation();
  const { isInfinityMode } = useInfinityMode();

  if (isInfinityMode) {
    // Infinity mode: viewport-locked container so scroll-snap works
    return (
      <InfinityScrollProvider>
        <div className="flex flex-col" style={{ height: '100dvh', overflow: 'hidden' }}>
          <Navbar />
          <InfinityScroll initialPath={location.pathname} />
        </div>
      </InfinityScrollProvider>
    );
  }

  // Normal mode: regular document flow, no height lock
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/performance" element={<Performance />} />
            </Routes>
          </AnimatePresence>
        </main>
        <PageNav />
        <Footer />
      </div>
    </>
  );
}

export default App;
