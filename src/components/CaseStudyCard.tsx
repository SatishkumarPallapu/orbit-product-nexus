
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Calendar, Users, Target, TrendingUp } from 'lucide-react';

interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  documentPdf?: string;
  images?: string[];
  duration: string;
  teamSize: string;
  objective: string;
  outcome: string;
  tags: string[];
  color: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
  index: number;
  onClick: () => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);
    
    setTiltPosition({
      x: distanceY * 15, // Tilt on X axis when mouse moves on Y
      y: -distanceX * 15, // Tilt on Y axis when mouse moves on X
    });
  };

  const handleMouseLeave = () => {
    setTiltPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ 
        opacity: 1,
        rotateX: tiltPosition.x,
        rotateY: tiltPosition.y,
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        rotateX: { type: 'spring', stiffness: 150, damping: 20 },
        rotateY: { type: 'spring', stiffness: 150, damping: 20 }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer group h-full"
      style={{ 
        transform: 'perspective(1000px)',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden h-full flex flex-col">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
        
        {/* Document Icon */}
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotateZ: [0, 2, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: index * 0.5
          }}
          className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${caseStudy.color} rounded-full flex items-center justify-center text-white shadow-lg`}
        >
          <FileText size={20} />
        </motion.div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Thumbnail/Preview */}
          {caseStudy.thumbnail && (
            <div className="mb-4 rounded-2xl overflow-hidden bg-white/5 h-32">
              <img 
                src={caseStudy.thumbnail} 
                alt={caseStudy.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="text-orange-400 text-sm font-medium uppercase tracking-wide flex items-center gap-2">
                <FileText size={14} />
                {caseStudy.category}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
                {caseStudy.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-3 py-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Calendar size={12} />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Users size={12} />
                <span>{caseStudy.teamSize}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {caseStudy.tags.slice(0, 3).map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                >
                  {tag}
                </span>
              ))}
              {caseStudy.tags.length > 3 && (
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60">
                  +{caseStudy.tags.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <ExternalLink size={14} />
              <span>View Details</span>
            </motion.div>
            
            {caseStudy.documentPdf && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(caseStudy.documentPdf, '_blank');
                }}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Download size={14} className="text-white/80" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
