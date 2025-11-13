import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Sparkles } from 'lucide-react';

interface TimelineCardProps {
  company: string;
  logo: string;
  location: string;
  totalDuration: string;
  roles: Array<{
    title: string;
    duration: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }>;
  index: number;
  isLast: boolean;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  logo,
  location,
  totalDuration,
  roles,
  index,
  isLast
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-[1.875rem] top-32 w-0.5 h-full origin-top"
          style={{
            background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.6), rgba(59, 130, 246, 0.3))',
          }}
        />
      )}

      {/* Company Badge */}
      <div className="flex items-start gap-6 mb-8">
        {/* Timeline Dot */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-0.5 shadow-xl">
            <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src={logo}
                alt={company}
                loading="lazy"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop";
                }}
              />
            </div>
          </div>
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl -z-10"
          />
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-2">
            {company}
            <Sparkles size={20} className="text-cyan-400" />
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-white/70">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-400" />
              <span>{totalDuration}</span>
            </div>
            {roles.length > 1 && (
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm">
                {roles.length} Roles
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Roles Cards */}
      <div className="ml-24 space-y-6">
        {roles.map((role, roleIndex) => (
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, x: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: roleIndex * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
            className="relative group"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Card */}
            <div className="relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transform: 'translateZ(10px)',
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)',
                    'linear-gradient(225deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative z-10">
                {/* Role Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {role.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {role.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Calendar size={14} />
                    <span>{role.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 mb-4 leading-relaxed">
                  {role.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-white/70 text-sm"
                      >
                        <ChevronRight size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* 3D depth shadow */}
            <div 
              className="absolute inset-0 rounded-2xl bg-black/30 -z-10"
              style={{
                transform: 'translateZ(-5px) translateY(5px)',
                filter: 'blur(10px)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
