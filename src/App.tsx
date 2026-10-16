import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Scene3D } from './components/Scene3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { ProjectDrawer } from './components/ProjectDrawer';
import { webglState } from './utils/webglState';

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const handleWindowScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        webglState.scrollProgress = Math.max(0, Math.min(1, window.scrollY / total));
      }
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    lenis.on('scroll', (e: any) => {
      if (typeof e.progress === 'number') {
        webglState.scrollProgress = e.progress;
      }
      if (typeof e.velocity === 'number') {
        webglState.scrollVelocity = e.velocity;
      }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track mouse coordinates normalized between -1 and 1
    const handleMouseMove = (e: MouseEvent) => {
      webglState.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      webglState.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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

      {/* Persistent Full-Viewport WebGL Canvas (PeachWeb Architecture) */}
      <Scene3D />

      {/* Top Floating Morphing Dock Navbar */}
      <Navbar />

      {/* Hero Section with Single-Wave Video & Volumetric Spotlight */}
      <Hero />

      {/* Main Content Sections (Transparent backdrops over WebGL Canvas) */}
      <main className="relative z-10">
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
