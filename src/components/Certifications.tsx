import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, BarChart3, Database, Cpu, ShieldCheck } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';
import { FadeIn } from './common/FadeIn';
import { showToast } from './common/Toast';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full rounded-[32px] p-8 sm:p-10 overflow-hidden bg-[#121217] border border-white/10 hover:border-[#D7E2EA]/40 transition-all duration-300 flex flex-col justify-between shadow-xl ${className}`}
      >
        {/* Specular Spotlight Gradient */}
        {mousePos.active && (
          <div
            className="pointer-events-none absolute -inset-px opacity-20 transition-opacity duration-300 rounded-[32px]"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(215, 226, 234, 0.2), transparent 80%)`,
            }}
          />
        )}
        <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

function getCertIcon(id: string) {
  switch (id) {
    case 'matlab-onramp':
      return <Cpu className="w-4 h-4 text-[#D6C3B0]" />;
    case 'statistics-onramp':
      return <BarChart3 className="w-4 h-4 text-[#D6C3B0]" />;
    case 'pandas-kaggle':
      return <Database className="w-4 h-4 text-[#D6C3B0]" />;
    case 'leadership-vit':
      return <Award className="w-4 h-4 text-[#D6C3B0]" />;
    default:
      return <ShieldCheck className="w-4 h-4 text-[#D6C3B0]" />;
  }
}

export const Certifications: React.FC = () => {
  const certs = portfolioData.certifications;

  const handleCredentialClick = (cert: CertificationItem) => {
    if (cert.credentialUrl && cert.credentialUrl !== '#') {
      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
    } else {
      showToast(`${cert.name} credential link will be linked soon`, 'info');
    }
  };

  return (
    <section id="certifications" className="relative py-28 bg-[#0C0C0C] text-[#F5F5F7] select-none">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <FadeIn delay={0.1} y={30}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#D6C3B0]" />
                <span className="font-mono text-xs text-[#D6C3B0] tracking-widest uppercase font-semibold">
                  Accredited Credentials & Proof of Work
                </span>
              </div>
              <h2 className="font-kanit font-black text-4xl sm:text-6xl uppercase tracking-tight">
                <span className="hero-heading mr-3">Verified</span>
                <span className="text-stroke-hollow">Certifications</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} y={20}>
            <p className="text-sm font-mono text-zinc-400 max-w-md">
              Industry credentials and university awards validating systems, statistics, and organizational leadership.
            </p>
          </FadeIn>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certs.map((cert) => {
            const hasLiveUrl = Boolean(cert.credentialUrl && cert.credentialUrl !== '#');

            return (
              <TiltCard key={cert.id}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        {getCertIcon(cert.id)}
                        <span className="font-mono text-xs text-[#D6C3B0] tracking-wider uppercase font-semibold">
                          {cert.issuer}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        {cert.year}
                      </span>
                    </div>

                    {/* Title & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-kanit text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                        {cert.name}
                      </h3>
                      {cert.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4ECE1]/10 text-[#F4ECE1] border border-[#F4ECE1]/25">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#F4ECE1]" />
                          {cert.badge}
                        </span>
                      )}
                    </div>

                    {/* Category Label */}
                    <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4">
                      Field: <span className="text-[#D7E2EA] font-medium">{cert.category}</span>
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#D7E2EA]/80 font-kanit font-light leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 hover:border-[#D6C3B0]/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Completion</span>
                    </div>

                    {hasLiveUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-black bg-[#F4ECE1] hover:bg-white transition-all shadow-md group"
                      >
                        <span>View Credential</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleCredentialClick(cert)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-zinc-300 bg-white/5 border border-white/10 hover:border-[#F4ECE1]/40 hover:text-white transition-all cursor-pointer group"
                      >
                        <span>View Credential</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    )}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
