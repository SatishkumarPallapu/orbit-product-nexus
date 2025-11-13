import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountAnimation } from '../hooks/useCountAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useCountAnimation(end, duration, ref);
  
  const displayValue = decimals > 0 
    ? count.toFixed(decimals)
    : count.toString();

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};
