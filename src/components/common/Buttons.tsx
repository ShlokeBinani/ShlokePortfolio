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
      className={`inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base select-none cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
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
