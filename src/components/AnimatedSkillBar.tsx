import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface AnimatedSkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
  icon?: React.ReactNode;
}

export const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ 
  name, 
  level, 
  color = 'from-blue-500 to-purple-500',
  delay = 0,
  icon
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatedValue = useCountAnimation(level, 2000, ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-3"
    >
      {/* Skill Name and Percentage */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && <span className="text-white/80">{icon}</span>}
          <span className="text-white font-semibold text-lg">{name}</span>
        </div>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: isInView ? 1 : 0, 
            rotate: isInView ? 0 : -180 
          }}
          transition={{ 
            delay: delay + 0.3,
            duration: 0.6,
            type: 'spring',
            stiffness: 200
          }}
          className={`px-3 py-1 bg-gradient-to-r ${color} rounded-full`}
        >
          <span className="text-white font-bold text-sm tabular-nums">
            {animatedValue}%
          </span>
        </motion.div>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-4 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        {/* Background shimmer effect */}
        <motion.div
          animate={{ 
            x: ['-100%', '100%']
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "linear",
            delay: delay
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ 
            delay: delay + 0.2,
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className={`relative h-full bg-gradient-to-r ${color} rounded-full overflow-hidden`}
          style={{
            boxShadow: `0 0 20px ${getColorShadow(color)}`
          }}
        >
          {/* Animated shimmer on the bar */}
          <motion.div
            animate={{ 
              x: ['-200%', '200%']
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "linear",
              delay: delay + 0.5
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />

          {/* Glowing dots */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              delay: delay + 0.3
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
            style={{
              filter: 'blur(1px)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
            }}
          />

          {/* Multiple trailing dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: delay + 0.3 + (i * 0.2)
              }}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/70 rounded-full"
              style={{
                right: `${(i + 1) * 12}px`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </motion.div>

        {/* End glow effect */}
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: delay + 1
            }}
            className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent to-white/20"
            style={{
              left: `${level - 10}%`,
              filter: 'blur(8px)'
            }}
          />
        )}
      </div>

      {/* Skill level indicator text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: delay + 0.8 }}
        className="flex justify-end"
      >
        <span className={`text-xs font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {level >= 90 ? '🏆 Expert' : level >= 75 ? '⭐ Advanced' : level >= 60 ? '✓ Proficient' : '📚 Learning'}
        </span>
      </motion.div>
    </motion.div>
  );
};

// Helper function to get shadow color from gradient class
const getColorShadow = (colorClass: string): string => {
  if (colorClass.includes('blue')) return 'rgba(59, 130, 246, 0.4)';
  if (colorClass.includes('purple')) return 'rgba(139, 92, 246, 0.4)';
  if (colorClass.includes('pink')) return 'rgba(236, 72, 153, 0.4)';
  if (colorClass.includes('green')) return 'rgba(34, 197, 94, 0.4)';
  if (colorClass.includes('orange')) return 'rgba(251, 146, 60, 0.4)';
  if (colorClass.includes('cyan')) return 'rgba(34, 211, 238, 0.4)';
  if (colorClass.includes('red')) return 'rgba(239, 68, 68, 0.4)';
  return 'rgba(139, 92, 246, 0.4)';
};
