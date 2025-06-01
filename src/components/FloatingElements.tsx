
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ mousePosition }) => {
  const elements = [
    { size: 40, color: 'from-blue-400 to-purple-600', delay: 0, speed: 0.02 },
    { size: 60, color: 'from-purple-400 to-pink-600', delay: 2, speed: 0.03 },
    { size: 30, color: 'from-orange-400 to-red-500', delay: 4, speed: 0.015 },
    { size: 50, color: 'from-green-400 to-blue-500', delay: 1, speed: 0.025 },
    { size: 35, color: 'from-yellow-400 to-orange-500', delay: 3, speed: 0.02 },
    { size: 25, color: 'from-indigo-400 to-blue-600', delay: 5, speed: 0.018 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${element.color} opacity-20 blur-sm`}
          style={{
            left: `${10 + index * 12}%`,
            top: `${5 + index * 15}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            x: mousePosition.x * (100 + index * 20) * element.speed,
            y: mousePosition.y * (100 + index * 20) * element.speed,
            scale: [1, 1.2, 1],
            rotate: mousePosition.x * 30 + mousePosition.y * 20,
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 20 },
            y: { type: "spring", stiffness: 50, damping: 20 },
            scale: { 
              duration: 4 + index, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: element.delay 
            },
            rotate: { type: "spring", stiffness: 30, damping: 15 },
          }}
        />
      ))}
      
      {/* Additional dynamic particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: mousePosition.x * (10 + index * 2),
            y: mousePosition.y * (10 + index * 2),
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            x: { type: "spring", stiffness: 20, damping: 10 },
            y: { type: "spring", stiffness: 20, damping: 10 },
            opacity: { 
              duration: 3 + index * 0.1, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
          }}
        />
      ))}
    </div>
  );
};
