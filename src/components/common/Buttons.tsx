import React from 'react';
import { Magnet } from './Magnet';

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  href = '#contact',
  onClick,
  label = 'Contact Me',
  className = '',
}) => {
  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full text-[#0A0A0C] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base select-none cursor-pointer bg-[#F4ECE1] hover:bg-white hover:text-black border-2 border-white shadow-[0_4px_24px_rgba(244,236,225,0.25)] hover:shadow-[0_6px_32px_rgba(255,255,255,0.35)] ${className}`}
    >
      {label}
    </span>
  );

  return (
    <Magnet padding={60} strength={4}>
      {onClick ? (
        <button onClick={onClick} type="button" className="inline-block">
          {content}
        </button>
      ) : (
        <a href={href} className="inline-block">
          {content}
        </a>
      )}
    </Magnet>
  );
};

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  label = 'Live Project',
  className = '',
}) => {
  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:shadow-[0_0_20px_rgba(215,226,234,0.25)] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base select-none cursor-pointer ${className}`}
    >
      {label}
    </span>
  );

  return (
    <Magnet padding={40} strength={4}>
      {onClick ? (
        <button onClick={onClick} type="button" className="inline-block">
          {content}
        </button>
      ) : href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {content}
        </a>
      ) : (
        <span className="inline-block">{content}</span>
      )}
    </Magnet>
  );
};
