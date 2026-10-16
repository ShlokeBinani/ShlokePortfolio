import React from 'react';

export const VectorBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-black"
      aria-hidden="true"
    >
      {/* Background Animated SVG Topological Grid & Waveforms */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Grid Pattern */}
          <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#F4ECE1"
              strokeWidth="0.6"
              strokeOpacity="0.4"
            />
            <circle cx="0" cy="0" r="1.5" fill="#D6C3B0" fillOpacity="0.6" />
          </pattern>

          {/* Linear Gradient for flowing waveforms */}
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D6C3B0" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#F4ECE1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D6C3B0" stopOpacity="0.1" />
          </linearGradient>

          {/* Radial mask for soft center spotlight */}
          <radialGradient id="center-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="80%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>

          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#center-fade)" />
          </mask>
        </defs>

        {/* 1. Underlying Perspective Grid */}
        <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#grid-mask)" />

        {/* 2. Flowing Topological Waveform Path 1 */}
        <path
          d="M -200,320 Q 250,180 600,340 T 1400,260 T 2200,380"
          fill="none"
          stroke="url(#wave-grad)"
          strokeWidth="1.2"
          strokeDasharray="8 12"
          className="animate-pulse"
          style={{ animationDuration: '8s' }}
        />

        {/* 3. Flowing Topological Waveform Path 2 */}
        <path
          d="M -200,680 Q 350,560 850,700 T 1650,620 T 2400,740"
          fill="none"
          stroke="url(#wave-grad)"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="animate-pulse"
          style={{ animationDuration: '11s' }}
        />

        {/* 4. Subtle Interconnecting Network Nodes */}
        <g stroke="#D6C3B0" strokeWidth="0.5" strokeOpacity="0.3" fill="none">
          <line x1="180" y1="240" x2="340" y2="380" />
          <line x1="340" y1="380" x2="520" y2="280" />
          <line x1="520" y1="280" x2="700" y2="420" />
          <line x1="700" y1="420" x2="920" y2="310" />
          <line x1="920" y1="310" x2="1140" y2="440" />

          {/* Node Points with subtle pulse */}
          <circle cx="180" cy="240" r="3" fill="#F4ECE1" fillOpacity="0.6" />
          <circle cx="340" cy="380" r="2.5" fill="#D6C3B0" fillOpacity="0.6" />
          <circle cx="520" cy="280" r="3.5" fill="#F4ECE1" fillOpacity="0.7" />
          <circle cx="700" cy="420" r="2" fill="#D6C3B0" fillOpacity="0.5" />
          <circle cx="920" cy="310" r="3" fill="#F4ECE1" fillOpacity="0.6" />
          <circle cx="1140" cy="440" r="2.5" fill="#D6C3B0" fillOpacity="0.6" />
        </g>
      </svg>

      {/* Radial Studio Vignette to ensure center content reads with high contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 90%, #000000 100%)',
        }}
      />
    </div>
  );
};
