import React, { useRef, useState, useEffect } from 'react';
import { FadeIn } from './common/FadeIn';

const ROW1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple arrays for infinite seamless visual scroll
  const tripledRow1 = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  const tripledRow2 = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  return (
    <section
      id="marquee"
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-x-clip select-none"
    >
      {/* Editorial Section Header with Hollow / Solid Styling */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 mb-12 sm:mb-16">
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-kanit">
                <span className="text-stroke-hollow mr-3">Selected</span>
                <span className="hero-heading">Motion Reels</span>
              </h2>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Row 1: Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden mb-3">
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer"
            >
              <img
                src={src}
                alt="3D Motion Reel"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-mono text-white/90 tracking-wider uppercase">Explore Shot</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(-${scrollOffset - 200}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden bg-[#141419] border border-white/10 group cursor-pointer"
            >
              <img
                src={src}
                alt="3D Motion Reel"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-mono text-white/90 tracking-wider uppercase">Interactive View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
