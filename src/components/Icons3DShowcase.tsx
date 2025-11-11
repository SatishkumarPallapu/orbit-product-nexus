import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Code, Palette, Zap, Heart, Star, 
  Sparkles, Trophy, Target, Crown, Flame, Award 
} from 'lucide-react';

const icons = [
  { Icon: Rocket, color: 'from-blue-500 to-cyan-500', label: 'Launch' },
  { Icon: Code, color: 'from-purple-500 to-pink-500', label: 'Code' },
  { Icon: Palette, color: 'from-orange-500 to-red-500', label: 'Design' },
  { Icon: Zap, color: 'from-yellow-500 to-orange-500', label: 'Speed' },
  { Icon: Heart, color: 'from-pink-500 to-rose-500', label: 'Passion' },
  { Icon: Star, color: 'from-amber-500 to-yellow-500', label: 'Quality' },
  { Icon: Sparkles, color: 'from-cyan-500 to-blue-500', label: 'Magic' },
  { Icon: Trophy, color: 'from-yellow-600 to-amber-600', label: 'Victory' },
  { Icon: Target, color: 'from-red-500 to-pink-500', label: 'Focus' },
  { Icon: Crown, color: 'from-yellow-500 to-amber-600', label: 'Premium' },
  { Icon: Flame, color: 'from-orange-600 to-red-600', label: 'Hot' },
  { Icon: Award, color: 'from-indigo-500 to-purple-500', label: 'Achievement' },
];

export const Icons3DShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
        3D Icon Gallery
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Hover over icons to see 3D transformations
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {icons.map((item, index) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ perspective: '1000px' }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 15,
                  rotateX: -15,
                  scale: 1.1,
                  z: 50,
                }}
                animate={{
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20 
                }}
                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} 
                  flex items-center justify-center cursor-pointer
                  shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  animate={{
                    rotateZ: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                
                {/* 3D Shadow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-black/20"
                  style={{ 
                    transform: 'translateZ(-10px)',
                    filter: 'blur(10px)',
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 0.6 : 0.3,
                  }}
                />
              </motion.div>

              <motion.span
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  color: hoveredIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                }}
                className="text-sm font-medium transition-colors"
              >
                {item.label}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Floating 3D Icon Example */}
      <motion.div
        className="mt-16 corporate-glass p-8 rounded-3xl border border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
          Floating 3D Animation
        </h3>
        <div className="flex justify-center" style={{ perspective: '1000px' }}>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 180, 360],
              rotateX: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 
              flex items-center justify-center shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Sparkles className="text-white" size={48} style={{ transform: 'translateZ(30px)' }} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
