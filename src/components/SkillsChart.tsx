import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Award, Target, Zap, Users, Code, BarChart3, Lightbulb } from 'lucide-react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface SkillData {
  name: string;
  level: number;
  icon: any;
  color: string;
  description: string;
}

export const SkillsChart = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills: SkillData[] = [
    {
      name: 'Product Strategy',
      level: 95,
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      description: 'Market research, roadmapping, and go-to-market strategies'
    },
    {
      name: 'Data Analytics',
      level: 92,
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      description: 'A/B testing, SQL, KPI definition, and insights generation'
    },
    {
      name: 'Leadership',
      level: 95,
      icon: Users,
      color: 'from-orange-500 to-red-500',
      description: 'Team management, stakeholder alignment, and mentoring'
    },
    {
      name: 'Innovation',
      level: 88,
      icon: Lightbulb,
      color: 'from-green-500 to-teal-500',
      description: 'Design thinking, user research, and rapid prototyping'
    },
    {
      name: 'Technical Acumen',
      level: 85,
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      description: 'API design, system architecture, and technical documentation'
    },
    {
      name: 'Growth Hacking',
      level: 90,
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      description: 'Conversion optimization, viral loops, and growth experiments'
    }
  ];

  const maxLevel = Math.max(...skills.map(s => s.level));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Proficiency</span>
        </h2>
        <p className="text-white/70 text-lg">
          Comparative analysis of core competencies
        </p>
      </motion.div>

      {/* Skills Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          
          return (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              Icon={Icon}
              maxLevel={maxLevel}
              isHovered={hoveredSkill === index}
              onHover={() => setHoveredSkill(index)}
              onLeave={() => setHoveredSkill(null)}
            />
          );
        })}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-12 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
            <span className="text-white/70 text-sm">Expert (90-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
            <span className="text-white/70 text-sm">Advanced (80-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
            <span className="text-white/70 text-sm">Proficient (70-79%)</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface SkillCardProps {
  skill: SkillData;
  index: number;
  Icon: any;
  maxLevel: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  index, 
  Icon, 
  maxLevel, 
  isHovered,
  onHover,
  onLeave 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatedValue = useCountAnimation(skill.level, 2000, ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50,
        rotateY: isInView ? 0 : -30
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="relative group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateY: isHovered ? 5 : 0,
          z: isHovered ? 50 : 0
        }}
        transition={{ duration: 0.3 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered 
              ? `0 0 30px ${skill.color.includes('cyan') ? 'rgba(34, 211, 238, 0.5)' : 
                           skill.color.includes('purple') ? 'rgba(168, 85, 247, 0.5)' :
                           skill.color.includes('orange') ? 'rgba(251, 146, 60, 0.5)' :
                           skill.color.includes('green') ? 'rgba(45, 212, 191, 0.5)' :
                           skill.color.includes('yellow') ? 'rgba(251, 191, 36, 0.5)' :
                           'rgba(99, 102, 241, 0.5)'}`
              : 'none'
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{
            rotateZ: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mx-auto`}
          style={{
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            transform: 'translateZ(20px)'
          }}
        >
          <Icon className="text-white" size={28} />
        </motion.div>

        {/* Skill name */}
        <h3 className="text-xl font-bold text-white text-center mb-2">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm text-center mb-4 h-12 line-clamp-2">
          {skill.description}
        </p>

        {/* Proficiency level */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm">Proficiency</span>
            <motion.span 
              className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent tabular-nums`}
              animate={{ scale: isInView ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              {animatedValue}%
            </motion.span>
          </div>

          {/* Progress bar background */}
          <div className="relative h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Animated fill */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${skill.level}%` : 0 }}
              transition={{ 
                duration: 1.5,
                delay: 0.5 + index * 0.1,
                ease: "easeOut"
              }}
              className={`h-full bg-gradient-to-r ${skill.color} relative`}
              style={{
                boxShadow: `0 0 20px ${skill.color.includes('cyan') ? 'rgba(34, 211, 238, 0.4)' : 
                                       skill.color.includes('purple') ? 'rgba(168, 85, 247, 0.4)' :
                                       skill.color.includes('orange') ? 'rgba(251, 146, 60, 0.4)' :
                                       skill.color.includes('green') ? 'rgba(45, 212, 191, 0.4)' :
                                       skill.color.includes('yellow') ? 'rgba(251, 191, 36, 0.4)' :
                                       'rgba(99, 102, 241, 0.4)'}`
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: [-100, 200] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              {/* Pulsing indicator */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Badge for top skills */}
        {skill.level >= 90 && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1 + index * 0.1, type: "spring" }}
            className="absolute top-4 right-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Award className="text-yellow-400" size={24} />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 blur-md bg-yellow-400/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Comparison indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 1.5 + index * 0.1 }}
          className="absolute bottom-2 right-2"
        >
          <div className="flex items-center gap-1">
            <Zap size={12} className={`${skill.level >= 90 ? 'text-green-400' : skill.level >= 80 ? 'text-blue-400' : 'text-purple-400'}`} />
            <span className="text-xs text-white/50">
              {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
