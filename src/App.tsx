import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { VectorBackground } from './components/VectorBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { Experience } from './components/Experience';
import { ProjectsSection } from './components/ProjectsSection';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { ProjectDrawer } from './components/ProjectDrawer';
import { ToastContainer } from './components/common/Toast';

export function App() {
  useEffect(() => {
    document.title = 'Shloke Binani';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F5F5F7] selection:bg-[#F4ECE1] selection:text-black relative overflow-x-clip">
      {/* Fixed Full-Screen Cinema Noise Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* High-Craft Animated SVG Vector Background */}
      <VectorBackground />

      {/* Floating Navbar */}
      <Navbar />

      {/* 1. Hero Section with Video + Typographic Gradient */}
      <Hero />

      {/* 2. Marquee Section with Dual-Row Scroll-Driven GIFs */}
      <MarqueeSection />

      {/* 3. About Section with 4 Corner 3D Magnets & Character-by-Character Scroll Reveal */}
      <About />

      {/* 4. Services Section (Editorial White Curve with 01-05 Offerings) */}
      <ServicesSection />

      {/* 5. Work Experience (Kofuku Technologies with 3D Impact Metrics) */}
      <Experience />

      {/* 6. Projects Section (Sticky-Stacking 3D Card Scale Deck) */}
      <ProjectsSection />

      {/* 7. Leadership & Initiatives (IEEE Chapters & Hackathons) */}
      <Leadership />

      {/* 8. Editorial Footer & Contact */}
      <Contact />

      {/* Interactive Project Deep-Dive Drawer */}
      <ProjectDrawer />

      {/* Global Non-Intrusive Toast System */}
      <ToastContainer />
    </div>
  );
}

export default App;
