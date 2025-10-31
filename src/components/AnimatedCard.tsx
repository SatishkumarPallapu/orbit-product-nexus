import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '@/utils/animationVariants';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tiltEffect?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  tiltEffect = true 
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const tiltStyle = tiltEffect && isHovered ? {
    transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * -10}deg) scale3d(1.02, 1.02, 1.02)`,
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      variants={cardHover}
      whileHover="hover"
      whileTap="tap"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative transition-all duration-300 ${className}`}
      style={tiltStyle}
    >
      {children}
      
      {/* Shine effect on hover */}
      {tiltEffect && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0"
            style={{
              transform: `translate(${(mousePosition.x - 0.5) * 100}%, ${(mousePosition.y - 0.5) * 100}%)`,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
