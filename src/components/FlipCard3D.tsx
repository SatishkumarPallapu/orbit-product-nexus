import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCard3DProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  flipOnHover?: boolean;
}

export const FlipCard3D: React.FC<FlipCard3DProps> = ({ 
  front, 
  back, 
  className = '',
  flipOnHover = true 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!flipOnHover) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`relative w-full min-w-0 ${className}`}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => flipOnHover && setIsFlipped(true)}
      onMouseLeave={() => flipOnHover && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative grid w-full min-h-[440px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ 
          transformStyle: 'preserve-3d',
          cursor: flipOnHover ? 'default' : 'pointer'
        }}
      >
        {/* Front Face */}
        <motion.div
          className="col-start-1 row-start-1 w-full min-w-0"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {front}
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="col-start-1 row-start-1 w-full min-w-0"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            rotateY: 180
          }}
          initial={{ rotateY: 180 }}
        >
          {back}
        </motion.div>
      </motion.div>
    </div>
  );
};
