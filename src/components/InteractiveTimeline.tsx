import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Award, CheckCircle } from 'lucide-react';

interface Role {
  title: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface TimelineItemProps {
  company: string;
  logo: string;
  location: string;
  totalDuration: string;
  roles: Role[];
  index: number;
  isLast: boolean;
}

export const InteractiveTimeline: React.FC<TimelineItemProps> = ({
  company,
  logo,
  location,
  totalDuration,
  roles,
  index,
  isLast,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const connectorOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex gap-8 relative">
        {/* Timeline Connector */}
        <div className="relative flex flex-col items-center">
          {/* Milestone Marker */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2 + 0.3,
              type: "spring",
              stiffness: 200
            }}
            className="relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg cursor-pointer"
              style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
              }}
            >
              <Briefcase className="text-white" size={28} />
            </motion.div>

            {/* Pulsing Ring */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-4 border-blue-400"
            />

            {/* Date Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="absolute -left-28 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-full border border-blue-400/30">
                <span className="text-blue-300 font-semibold text-sm">{totalDuration}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Connector Line */}
          {!isLast && (
            <motion.div
              className="w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 flex-1 mt-4 relative overflow-hidden"
              style={{ opacity: connectorOpacity }}
            >
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"
              />
              
              {/* Animated Particles on Line */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: ["-100%", "300%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "linear"
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                  style={{ filter: 'blur(1px)' }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          className="flex-1 pb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
            style={{ 
              transform: 'perspective(1000px)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Company Header */}
            <div className="relative z-10 flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-white p-2 shadow-lg"
                >
                  <img 
                    src={logo} 
                    alt={company}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{company}</h3>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span className="text-sm">{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="text-sm">{totalDuration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30"
              >
                <Award className="text-yellow-400" size={20} />
              </motion.div>
            </div>

            {/* Roles */}
            <div className="relative z-10 space-y-6">
              {roles.map((role, roleIndex) => (
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.6 + roleIndex * 0.1 }}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4"
                >
                  {/* Role Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{role.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <span>{role.duration}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-blue-500/20 rounded-full text-blue-300">
                          {role.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">{role.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                      <Award size={16} />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {role.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + 0.8 + roleIndex * 0.1 + achIndex * 0.05 }}
                          className="flex items-start gap-3 text-white/70 text-sm"
                        >
                          <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                        transition={{ 
                          delay: index * 0.2 + 1 + roleIndex * 0.1 + techIndex * 0.03,
                          type: "spring"
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs font-medium text-blue-300 border border-blue-400/30 cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
