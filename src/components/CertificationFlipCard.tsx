import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface CertificationFlipCardProps {
  cert: {
    id: number;
    title: string;
    issuer: string;
    date: string;
    validUntil: string;
    credentialId?: string;
    description: string;
    skills: string[];
    verificationUrl?: string;
    color: string;
    status: string;
    logoUrl: string;
  };
  index: number;
}

export const CertificationFlipCard: React.FC<CertificationFlipCardProps> = ({ cert, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);
    
    setTiltPosition({
      x: distanceY * 10,
      y: -distanceX * 10,
    });
  };

  const handleMouseLeave = () => {
    setTiltPosition({ x: 0, y: 0 });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'progress': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div ref={ref} className="h-[400px]">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50, rotateY: -90 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          rotateY: isFlipped ? 180 : tiltPosition.y,
          rotateX: tiltPosition.x,
        } : { opacity: 0, y: 50, rotateY: -90 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          rotateY: { duration: 0.6, type: 'spring', stiffness: 100 }
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-full cursor-pointer"
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 w-full h-full p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10`} />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cert.status)}`}>
              {cert.status === 'active' ? 'Active' : 'In Progress'}
            </span>
          </div>

          {/* Certificate Logo */}
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotateY: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative mb-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg p-2"
          >
            <img 
              src={cert.logoUrl} 
              alt={`${cert.issuer} logo`}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="relative z-10 space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-blue-300 font-medium">{cert.issuer}</p>
            </div>

            <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>
              {cert.status === 'active' && (
                <div className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Valid</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white/70 text-sm text-center line-clamp-3">
                {cert.description}
              </p>
            </div>

            {/* Flip Indicator */}
            <div className="text-center">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-xs text-white/50"
              >
                <span>Click to view details</span>
                <Award size={14} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`} />

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto">
              <div>
                <h4 className="text-sm font-semibold text-white/60 mb-2">Description</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {cert.credentialId && (
                <div>
                  <h4 className="text-sm font-semibold text-white/60 mb-2">Credential ID</h4>
                  <code className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                    {cert.credentialId}
                  </code>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-white/60 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 6).map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white/60 mb-2">Valid Until</h4>
                <p className="text-white/80 text-sm">{cert.validUntil}</p>
              </div>
            </div>

            {/* Verification Link */}
            {cert.verificationUrl && (
              <motion.a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${cert.color} rounded-2xl text-white font-semibold text-sm`}
              >
                <span>Verify Certificate</span>
                <ExternalLink size={16} />
              </motion.a>
            )}

            {/* Flip Back Indicator */}
            <div className="text-center mt-2">
              <span className="text-xs text-white/50">Click to flip back</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
