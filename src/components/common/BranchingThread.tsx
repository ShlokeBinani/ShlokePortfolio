import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface BranchingThreadProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const BranchingThread: React.FC<BranchingThreadProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 15%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Staggered path length growth mapped to container scroll
  const trunkLength = useTransform(smoothProgress, [0, 0.95], [0, 1]);
  const branch1Length = useTransform(smoothProgress, [0.08, 0.55], [0, 1]);
  const branch2Length = useTransform(smoothProgress, [0.12, 0.65], [0, 1]);
  const branch3Length = useTransform(smoothProgress, [0.25, 0.75], [0, 1]);
  const branch4Length = useTransform(smoothProgress, [0.35, 0.85], [0, 1]);
  const branch5Length = useTransform(smoothProgress, [0.5, 0.95], [0, 1]);
  const branch6Length = useTransform(smoothProgress, [0.6, 1], [0, 1]);

  // Node scale pops when branch reaches junction
  const node1Scale = useTransform(smoothProgress, [0.07, 0.12], [0, 1]);
  const node2Scale = useTransform(smoothProgress, [0.11, 0.16], [0, 1]);
  const node3Scale = useTransform(smoothProgress, [0.24, 0.3], [0, 1]);
  const node4Scale = useTransform(smoothProgress, [0.48, 0.54], [0, 1]);
  const node5Scale = useTransform(smoothProgress, [0.62, 0.7], [0, 1]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
    >
      <svg
        viewBox="0 0 1000 2400"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Central Primary Trunk / Thread */}
        <motion.path
          d="M 500,0 C 490,150 460,300 480,450 C 500,600 530,750 510,900 C 490,1050 460,1200 480,1350 C 500,1500 535,1650 515,1800 C 495,1950 470,2100 490,2250 C 498,2310 500,2370 500,2400"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.32"
          strokeWidth="2.2"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: trunkLength }}
        />

        {/* Criss-Crossing Branch A: Weaves Left, Centers, Sweeps Right, and descends */}
        <motion.path
          d="M 480,220 C 420,280 250,340 180,440 C 110,540 120,680 220,780 C 320,880 580,820 680,940 C 780,1060 840,1220 780,1360 C 720,1500 460,1560 380,1700 C 300,1840 320,2000 420,2120 C 480,2200 500,2320 500,2400"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.26"
          strokeWidth="1.8"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch1Length }}
        />

        {/* Criss-Crossing Branch B: Weaves Right, Centers, Sweeps Left, and descends */}
        <motion.path
          d="M 485,260 C 550,320 740,380 820,480 C 900,580 890,720 790,820 C 690,920 420,860 320,980 C 220,1100 160,1260 220,1400 C 280,1540 540,1600 620,1740 C 700,1880 680,2040 580,2160 C 520,2240 500,2340 500,2400"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.26"
          strokeWidth="1.8"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch2Length }}
        />

        {/* Lateral Shoot Left */}
        <motion.path
          d="M 180,440 C 130,480 80,540 60,620 C 40,700 70,780 110,840"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch3Length }}
        />

        {/* Lateral Shoot Right */}
        <motion.path
          d="M 820,480 C 880,520 930,580 950,660 C 970,740 940,820 900,880"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch4Length }}
        />

        {/* Mid-Section Weave Left */}
        <motion.path
          d="M 220,1400 C 150,1460 90,1540 80,1640 C 70,1740 120,1820 180,1880"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.24"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch5Length }}
        />

        {/* Mid-Section Weave Right */}
        <motion.path
          d="M 780,1360 C 850,1420 910,1500 920,1600 C 930,1700 880,1780 820,1840"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.24"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch6Length }}
        />

        {/* Lower Convergence Forks */}
        <motion.path
          d="M 515,1800 C 450,1920 390,2040 430,2170 C 460,2260 485,2340 500,2400"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.24"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch5Length }}
        />
        <motion.path
          d="M 515,1800 C 580,1920 640,2040 600,2170 C 570,2260 530,2340 500,2400"
          fill="none"
          stroke="#0C0C0C"
          strokeOpacity="0.24"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: branch6Length }}
        />

        {/* Delicate Hollow Nodes at Branch Junctions */}
        <motion.circle
          cx="480"
          cy="220"
          r="4.5"
          fill="#FFFFFF"
          stroke="#0C0C0C"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ scale: node1Scale }}
        />
        <motion.circle
          cx="485"
          cy="260"
          r="4.5"
          fill="#FFFFFF"
          stroke="#0C0C0C"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ scale: node2Scale }}
        />
        <motion.circle
          cx="180"
          cy="440"
          r="4"
          fill="#FFFFFF"
          stroke="#0C0C0C"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ scale: node3Scale }}
        />
        <motion.circle
          cx="820"
          cy="480"
          r="4"
          fill="#FFFFFF"
          stroke="#0C0C0C"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ scale: node3Scale }}
        />
        <motion.circle
          cx="780"
          cy="1360"
          r="4"
          fill="#FFFFFF"
          stroke="#0C0C0C"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ scale: node4Scale }}
        />
        <motion.circle
          cx="515"
          cy="1800"
          r="4.5"
          fill="#FFFFFF"
          stroke="#0C0C0C"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          style={{ scale: node5Scale }}
        />
      </svg>
    </div>
  );
};
