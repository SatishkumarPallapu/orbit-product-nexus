import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';

export const AnimatedGridBackground = () => {
  // Generate grid lines
  const verticalLines = Array.from({ length: 20 }, (_, i) => i);
  const horizontalLines = Array.from({ length: 15 }, (_, i) => i);

  // Floating cards data
  const floatingCards = [
    { x: '10%', y: '15%', delay: 0, color: 'from-cyan-500/20 to-blue-500/20' },
    { x: '75%', y: '25%', delay: 1, color: 'from-purple-500/20 to-pink-500/20' },
    { x: '85%', y: '70%', delay: 2, color: 'from-orange-500/20 to-red-500/20' },
    { x: '20%', y: '80%', delay: 1.5, color: 'from-green-500/20 to-teal-500/20' },
    { x: '50%', y: '10%', delay: 0.5, color: 'from-yellow-500/20 to-amber-500/20' },
    { x: '60%', y: '60%', delay: 2.5, color: 'from-indigo-500/20 to-violet-500/20' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Grid Lines with Parallax */}
      <ParallaxSection speed="slow" className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path 
                d="M 80 0 L 0 0 0 80" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </ParallaxSection>

      {/* Animated Grid Dots */}
      <ParallaxSection speed="medium" className="absolute inset-0">
        <div className="relative w-full h-full">
          {verticalLines.map((v) =>
            horizontalLines.map((h) => (
              <motion.div
                key={`${v}-${h}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  delay: (v + h) * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute w-1 h-1 rounded-full bg-primary/40"
                style={{
                  left: `${(v / 20) * 100}%`,
                  top: `${(h / 15) * 100}%`,
                }}
              />
            ))
          )}
        </div>
      </ParallaxSection>

      {/* Floating Glassmorphic Cards */}
      {floatingCards.map((card, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: card.x,
            top: card.y,
          }}
        >
          <ParallaxSection speed={index % 2 === 0 ? "fast" : "slow"}>
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ 
                scale: 1,
                rotate: 0,
                opacity: 1,
                y: [0, -20, 0],
                rotateY: [0, 180, 360],
              }}
              transition={{
                scale: { duration: 1, delay: card.delay },
                rotate: { duration: 1, delay: card.delay },
                opacity: { duration: 1, delay: card.delay },
                y: { 
                  duration: 4 + index, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: card.delay 
                },
                rotateY: { 
                  duration: 8 + index, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: card.delay 
                }
              }}
              className={`w-32 h-32 md:w-40 md:h-40 rounded-2xl 
                backdrop-blur-xl bg-gradient-to-br ${card.color}
                border border-white/10 shadow-2xl`}
              style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${index * 5}deg)`
              }}
            >
              {/* Inner glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: card.delay
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"
              />
              
              {/* Pulse rings */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: card.delay
                }}
                className="absolute inset-0 rounded-2xl border-2 border-white/30"
              />
            </motion.div>
          </ParallaxSection>
        </div>
      ))}

      {/* Animated Diagonal Lines */}
      <ParallaxSection speed="fast" className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3].map((i) => (
            <motion.line
              key={i}
              x1="0"
              y1={`${i * 25}%`}
              x2="100%"
              y2={`${(i + 1) * 25}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}
        </svg>
      </ParallaxSection>
    </div>
  );
};
