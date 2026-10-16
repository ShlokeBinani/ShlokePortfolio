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
      {/* Fixed Full-Screen Cinema Noise Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Top Floating Morphing Telemetry Navigation */}
      <Navbar />

      {/* Hero Section with Volumetric Spotlight & 3D Tilt */}
      <Hero />

      {/* Main Content Sections */}
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
      </main>

      {/* Minimalist Editorial Footer & Contact */}
      <Contact />
    </div>
  );
}

export default App;
