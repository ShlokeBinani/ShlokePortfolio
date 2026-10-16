import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] selection:bg-[#F4ECE1] selection:text-black">
      {/* Top Floating Minimal Navigation */}
      <Navbar />

      {/* Hero Section with Seamless Studio Spotlight Video Integration */}
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
