import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  color: string;
}

interface ParticleExplosionProps {
  trigger: boolean;
  onComplete?: () => void;
}

export const ParticleExplosion: React.FC<ParticleExplosionProps> = ({ trigger, onComplete }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles: Particle[] = [];
      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))'];
      
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: 0,
          y: 0,
          angle: (Math.PI * 2 * i) / 20,
          velocity: 100 + Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setParticles(newParticles);
      
      setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 1000);
    }
  }, [trigger, onComplete]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 1,
              opacity: 1 
            }}
            animate={{
              x: Math.cos(particle.angle) * particle.velocity,
              y: Math.sin(particle.angle) * particle.velocity,
              scale: 0,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
            style={{ backgroundColor: particle.color }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
