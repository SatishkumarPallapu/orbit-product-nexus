import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, BarChart3, Users, Lightbulb, Code, TrendingUp, Zap, Brain } from 'lucide-react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface SkillNode {
  name: string;
  level: number;
  icon: any;
  color: string;
  category: string;
  description: string;
  x: number;
  y: number;
}

export const SkillsGraphVisualization = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills: SkillNode[] = [
    // Core Skills (Center)
    { name: 'Product Strategy', level: 95, icon: Target, color: 'from-blue-500 to-cyan-500', category: 'Core', description: 'End-to-end product strategy, roadmapping, and market positioning', x: 50, y: 50 },
    
    // Strategic Skills (Top)
    { name: 'Data Analytics', level: 92, icon: BarChart3, color: 'from-purple-500 to-pink-500', category: 'Strategic', description: 'Advanced analytics, A/B testing, SQL, and data-driven decision making', x: 35, y: 20 },
    { name: 'Innovation', level: 88, icon: Lightbulb, color: 'from-green-500 to-teal-500', category: 'Strategic', description: 'Design thinking, rapid prototyping, and creative problem solving', x: 65, y: 20 },
    
    // Leadership Skills (Left & Right)
    { name: 'Leadership', level: 95, icon: Users, color: 'from-orange-500 to-red-500', category: 'Leadership', description: 'Cross-functional team leadership and stakeholder management', x: 15, y: 50 },
    { name: 'Growth', level: 90, icon: TrendingUp, color: 'from-yellow-500 to-orange-500', category: 'Leadership', description: 'Growth strategy, conversion optimization, and scaling', x: 85, y: 50 },
    
    // Technical Skills (Bottom)
    { name: 'Technical', level: 85, icon: Code, color: 'from-indigo-500 to-purple-500', category: 'Technical', description: 'API design, system architecture, and technical specifications', x: 35, y: 80 },
    { name: 'Execution', level: 93, icon: Zap, color: 'from-pink-500 to-rose-500', category: 'Technical', description: 'Agile methodologies, sprint planning, and delivery excellence', x: 65, y: 80 },
    { name: 'AI/ML', level: 82, icon: Brain, color: 'from-violet-500 to-purple-500', category: 'Technical', description: 'ML product management and AI integration strategies', x: 50, y: 95 },
  ];

  // Generate connections between related skills
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [1, 2], [1, 5], [3, 6], [4, 6], [5, 6], [6, 7]
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="w-full max-w-7xl mx-auto px-4 py-16"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Network</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Interactive visualization of interconnected competencies and expertise areas
        </p>
      </motion.div>

      {/* Graph Container */}
      <div className="relative w-full aspect-square max-w-4xl mx-auto backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map(([from, to], index) => {
            const fromSkill = skills[from];
            const toSkill = skills[to];
            const isActive = hoveredSkill === from || hoveredSkill === to;
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={`${fromSkill.x}%`}
                y1={`${fromSkill.y}%`}
                x2={`${toSkill.x}%`}
                y2={`${toSkill.y}%`}
                stroke={isActive ? "url(#gradient)" : "currentColor"}
                strokeWidth={isActive ? "2" : "1"}
                className={isActive ? "text-primary" : "text-muted-foreground/30"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: isActive ? 0.8 : 0.3 } : {}}
                transition={{ duration: 2, delay: 0.5 + index * 0.05 }}
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill Nodes */}
        {skills.map((skill, index) => (
          <SkillNode
            key={index}
            skill={skill}
            index={index}
            isSelected={selectedSkill === index}
            isHovered={hoveredSkill === index}
            isInView={isInView}
            onSelect={() => setSelectedSkill(selectedSkill === index ? null : index)}
            onHover={() => setHoveredSkill(index)}
            onLeave={() => setHoveredSkill(null)}
          />
        ))}
      </div>

      {/* Category Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        {['Core', 'Strategic', 'Leadership', 'Technical'].map((category, index) => (
          <div key={category} className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
            />
            <span className="text-sm text-muted-foreground">{category}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

interface SkillNodeProps {
  skill: SkillNode;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  isInView: boolean;
  onSelect: () => void;
  onHover: () => void;
  onLeave: () => void;
}

const SkillNode: React.FC<SkillNodeProps> = ({
  skill,
  index,
  isSelected,
  isHovered,
  isInView,
  onSelect,
  onHover,
  onLeave,
}) => {
  const Icon = skill.icon;
  const nodeRef = useRef<HTMLDivElement>(null);
  const animatedLevel = useCountAnimation(skill.level, 2000, nodeRef);

  const nodeSize = skill.category === 'Core' ? 'w-24 h-24' : 'w-20 h-20';
  const iconSize = skill.category === 'Core' ? 'w-10 h-10' : 'w-8 h-8';

  return (
    <>
      <motion.div
        ref={nodeRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { 
          scale: 1, 
          opacity: 1,
          y: isHovered ? -8 : 0,
        } : {}}
        transition={{ 
          duration: 0.5, 
          delay: 0.5 + index * 0.1,
          type: "spring",
          stiffness: 300
        }}
        whileHover={{ scale: 1.1 }}
        onClick={onSelect}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={`absolute ${nodeSize} -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
        style={{
          left: `${skill.x}%`,
          top: `${skill.y}%`,
        }}
      >
        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
          animate={isSelected ? { opacity: 0.4, scale: 1.5 } : {}}
        />

        {/* Node */}
        <motion.div
          className={`relative w-full h-full rounded-full backdrop-blur-xl bg-card border-2 border-border flex items-center justify-center overflow-hidden`}
          animate={{
            borderColor: isHovered || isSelected ? "hsl(var(--primary))" : "hsl(var(--border))",
            boxShadow: isHovered || isSelected 
              ? "0 0 30px hsla(var(--primary), 0.5)" 
              : "0 4px 12px rgba(0,0,0,0.1)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
          
          {/* Icon */}
          <Icon className={`${iconSize} text-foreground relative z-10`} />

          {/* Level Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1 + index * 0.1 }}
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-lg"
          >
            {animatedLevel}
          </motion.div>
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered || isSelected ? 1 : 0,
            y: isHovered || isSelected ? 0 : 10,
            pointerEvents: isHovered || isSelected ? 'auto' : 'none'
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 backdrop-blur-xl bg-card/95 border border-border rounded-xl shadow-2xl z-50"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">{skill.name}</h4>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {skill.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isHovered || isSelected ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <span className="text-sm font-semibold text-foreground">{skill.level}%</span>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45" />
        </motion.div>
      </motion.div>
    </>
  );
};
