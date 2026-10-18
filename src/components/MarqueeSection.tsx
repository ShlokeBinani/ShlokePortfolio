import React, { useRef, useState, useEffect } from 'react';
import { FadeIn } from './common/FadeIn';

export interface MemoryItem {
  id: number;
  src: string;
  fallbackSrc: string;
}

const MEMORIES: MemoryItem[] = [
  {
    id: 1,
    src: 'images/memories/memory1.webp',
    fallbackSrc: 'images/memories/memory1.jpg',
  },
  {
    id: 2,
    src: 'images/memories/memory2.webp',
    fallbackSrc: 'images/memories/memory2.jpg',
  },
  {
    id: 3,
    src: 'images/memories/memory3.webp',
    fallbackSrc: 'images/memories/memory3.jpg',
  },
  {
    id: 4,
    src: 'images/memories/memory4.webp',
    fallbackSrc: 'images/memories/memory4.jpg',
  },
  {
    id: 5,
    src: 'images/memories/memory5.webp',
    fallbackSrc: 'images/memories/memory5.jpg',
  },
];

// Row 1 and Row 2 shuffled sequences for visual variety
const ROW1_ITEMS: MemoryItem[] = [
  MEMORIES[0],
  MEMORIES[1],
  MEMORIES[2],
  MEMORIES[3],
  MEMORIES[4],
];

const ROW2_ITEMS: MemoryItem[] = [
  MEMORIES[2],
  MEMORIES[4],
  MEMORIES[0],
  MEMORIES[3],
  MEMORIES[1],
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quadruple items to ensure smooth infinite reel across 4K displays
  const row1Loop = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
  const row2Loop = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      id="memory-slide"
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-x-clip select-none"
    >
      {/* Anchor for backward compatibility with #marquee */}
      <span id="marquee" className="absolute -top-24" aria-hidden="true" />

      {/* Editorial Section Header: Memory Slide */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 mb-12 sm:mb-16">
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-kanit">
                <span className="text-stroke-hollow mr-3">Memory</span>
                <span className="hero-heading">Slide</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wider max-w-md text-left sm:text-right">
              Frames from mountain treks, coastlines and late-night horizons
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Row 1: Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden mb-4 sm:mb-5">
        <div
          className="flex gap-4 sm:gap-5 will-change-transform"
          style={{
            transform: `translateX(${scrollOffset - 300}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {row1Loop.map((item, index) => {
            const errorKey = `r1-${index}-${item.id}`;
            const isError = imageErrors[errorKey];
            const imgSrc = `${import.meta.env.BASE_URL}${isError ? item.fallbackSrc : item.src}`;

            return (
              <div
                key={`row1-${index}`}
                className="relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] h-[200px] sm:h-[250px] md:h-[285px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141419] border border-white/10 hover:border-white/30 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt="Memory Photograph"
                  loading="lazy"
                  onError={() => handleImageError(errorKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 sm:gap-5 will-change-transform"
          style={{
            transform: `translateX(-${scrollOffset - 150}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {row2Loop.map((item, index) => {
            const errorKey = `r2-${index}-${item.id}`;
            const isError = imageErrors[errorKey];
            const imgSrc = `${import.meta.env.BASE_URL}${isError ? item.fallbackSrc : item.src}`;

            return (
              <div
                key={`row2-${index}`}
                className="relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] h-[200px] sm:h-[250px] md:h-[285px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141419] border border-white/10 hover:border-white/30 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt="Memory Photograph"
                  loading="lazy"
                  onError={() => handleImageError(errorKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
