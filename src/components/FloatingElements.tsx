
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ mousePosition }) => {
  const elements = [
    { size: 40, color: 'from-blue-400 to-purple-600', delay: 0 },
    { size: 60, color: 'from-purple-400 to-pink-600', delay: 2 },
    { size: 30, color: 'from-orange-400 to-red-500', delay: 4 },
    { size: 50, color: 'from-green-400 to-blue-500', delay: 1 },
    { size: 35, color: 'from-yellow-400 to-orange-500', delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-${element.size} h-${element.size} bg-gradient-to-br ${element.color} rounded-full opacity-10`}
          style={{
            left: `${20 + index * 15}%`,
            top: `${10 + index * 20}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            x: mousePosition.x * (10 + index * 5),
            y: mousePosition.y * (10 + index * 5),
            rotateX: mousePosition.y * 20,
            rotateY: mousePosition.x * 20,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: element.delay,
          }}
          whileInView={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          viewport={{ once: false }}
          // @ts-ignore
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
          }}
        />
      ))}
    </div>
  );
};
