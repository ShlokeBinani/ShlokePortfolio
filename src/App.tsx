import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { ProjectDrawer } from './components/ProjectDrawer';

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] selection:bg-[#F4ECE1] selection:text-black relative">
      {/* Fixed Full-Screen Cinema Noise Grain Overlay (Tactile Studio Depth) */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Top Floating Morphing Dock Navbar */}
      <Navbar />

      {/* Hero Section with Single-Wave Video & Volumetric Spotlight */}
      <Hero />

      {/* Main Content Sections */}
      <main className="relative z-10 bg-black">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
      </main>

      {/* Editorial Footer & Contact */}
      <Contact />

      {/* Expandable 3D Camera-Dolly Case Study Drawer */}
      <ProjectDrawer />
    </div>
  );
}

export default App;
