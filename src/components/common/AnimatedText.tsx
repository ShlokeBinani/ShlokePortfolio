import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.24, 1]);
  return (
    <motion.span style={{ opacity }} className="transition-opacity">
      {char}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'end 0.35'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wIdx) => {
        const wordChars = word.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const start = globalCharIndex / totalChars;
              const end = Math.min(1, (globalCharIndex + 1) / totalChars);
              globalCharIndex++;

              return (
                <Character
                  key={globalCharIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
};
