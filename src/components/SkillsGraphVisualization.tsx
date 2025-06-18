import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, BarChart3, Users, Lightbulb, Code, TrendingUp, Zap, Brain,
  GitBranch, LineChart, Layers, Network, Compass, PieChart, Activity,
  Rocket, Shield, Eye, Cpu, Workflow, Gauge
} from 'lucide-react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface SkillNode {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
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
    // CORE FRAMEWORKS (Center) - PM Theories & Frameworks
    { 
      name: 'Product Strategy', 
      level: 98, 
      icon: Target, 
      color: 'from-blue-500 to-cyan-500', 
      category: 'Core Frameworks',
      description: 'Vision, roadmap planning, competitive positioning, market entry strategies',
      x: 50, 
      y: 50 
    },
    
    // DISCOVERY & INSIGHTS LAYER
    { 
      name: 'Jobs to be Done', 
      level: 94, 
      icon: Users, 
      color: 'from-emerald-500 to-teal-500', 
      category: 'Discovery',
      description: 'Understanding customer progress desired, functional/emotional/social jobs',
      x: 15, 
      y: 20 
    },
    { 
      name: 'User Research', 
      level: 93, 
      icon: Eye, 
      color: 'from-teal-500 to-cyan-500', 
      category: 'Discovery',
      description: 'Qualitative & quantitative research, user interviews, surveys, ethnography',
      x: 30, 
      y: 12 
    },
    { 
      name: 'Market Sizing', 
      level: 91, 
      icon: BarChart3, 
      color: 'from-cyan-500 to-blue-500', 
      category: 'Discovery',
      description: 'TAM/SAM/SOM analysis, market opportunity identification, segment analysis',
      x: 50, 
      y: 10 
    },
    
    // ANALYTICS & DECISION LAYER
    { 
      name: 'Metrics & OKRs', 
      level: 96, 
      icon: LineChart, 
      color: 'from-purple-500 to-violet-500', 
      category: 'Analytics',
      description: 'KPI definition, OKR framework, goal setting, success metrics',
      x: 70, 
      y: 15 
    },
    { 
      name: 'Data Analytics', 
      level: 94, 
      icon: TrendingUp, 
      color: 'from-indigo-500 to-purple-500', 
      category: 'Analytics',
      description: 'SQL, A/B testing, cohort analysis, dashboards, statistical thinking',
      x: 85, 
      y: 25 
    },
    { 
      name: 'Experimentation', 
      level: 92, 
      icon: Activity, 
      color: 'from-violet-500 to-purple-500', 
      category: 'Analytics',
      description: 'Hypothesis testing, experiment design, MVPs, rapid iteration cycles',
      x: 90, 
      y: 50 
    },
    
    // DESIGN & PRIORITIZATION LAYER
    { 
      name: 'Design Thinking', 
      level: 90, 
      icon: Lightbulb, 
      color: 'from-pink-500 to-rose-500', 
      category: 'Design',
      description: 'Empathy, ideation, prototyping, iterative design, user-centric approach',
      x: 70, 
      y: 70 
    },
    { 
      name: 'Prioritization Matrix', 
      level: 97, 
      icon: Zap, 
      color: 'from-orange-500 to-amber-500', 
      category: 'Design',
      description: 'RICE scoring, MoSCoW, Kano model, impact vs effort, roadmap sequencing',
      x: 50, 
      y: 85 
    },
    { 
      name: 'Information Architecture', 
      level: 89, 
      icon: Layers, 
      color: 'from-amber-500 to-orange-500', 
      category: 'Design',
      description: 'IA design, navigation flows, taxonomy, wireframing, user journey mapping',
      x: 30, 
      y: 75 
    },
    
    // GROWTH & GTM LAYER
    { 
      name: 'Growth Loops', 
      level: 92, 
      icon: Rocket, 
      color: 'from-green-500 to-emerald-500', 
      category: 'Growth',
      description: 'Acquisition, activation, retention loops, viral mechanics, network effects',
      x: 80, 
      y: 65 
    },
    { 
      name: 'Go-to-Market', 
      level: 91, 
      icon: Compass, 
      color: 'from-yellow-500 to-orange-500', 
      category: 'Growth',
      description: 'Launch strategy, positioning, pricing, channel selection, customer segments',
      x: 75, 
      y: 85 
    },
    { 
      name: 'Monetization', 
      level: 88, 
      icon: PieChart, 
      color: 'from-orange-500 to-red-500', 
      category: 'Growth',
      description: 'Pricing strategy, revenue models, unit economics, LTV/CAC optimization',
      x: 85, 
      y: 75 
    },
    
    // EXECUTION & LEADERSHIP LAYER
    { 
      name: 'Agile/Scrum', 
      level: 95, 
      icon: Workflow, 
      color: 'from-red-500 to-pink-500', 
      category: 'Leadership',
      description: 'Sprint planning, story mapping, velocity tracking, iterative delivery',
      x: 15, 
      y: 70 
    },
    { 
      name: 'Stakeholder Mgmt', 
      level: 96, 
      icon: Users, 
      color: 'from-pink-500 to-rose-500', 
      category: 'Leadership',
      description: 'Cross-functional alignment, negotiation, influence, requirement gathering',
      x: 10, 
      y: 50 
    },
    { 
      name: 'Communication', 
      level: 97, 
      icon: Zap, 
      color: 'from-fuchsia-500 to-pink-500', 
      category: 'Leadership',
      description: 'Storytelling, presentations, documentation, product narrative, alignment',
      x: 15, 
      y: 30 
    },
    
    // TECHNICAL & ARCHITECTURE
    { 
      name: 'Technical Fluency', 
      level: 90, 
      icon: Code, 
      color: 'from-slate-400 to-slate-600', 
      category: 'Technical',
      description: 'System design, API architecture, database concepts, technical trade-offs',
      x: 40, 
      y: 45 
    },
    
    // ADVANCED FRAMEWORKS
    { 
      name: 'SaaS Metrics', 
      level: 91, 
      icon: Gauge, 
      color: 'from-blue-600 to-blue-500', 
      category: 'Advanced',
      description: 'MRR/ARR, churn rate, NPS, CAC payback period, expansion revenue',
      x: 65, 
      y: 40 
    },
    { 
      name: 'Jobs Theory', 
      level: 93, 
      icon: Brain, 
      color: 'from-indigo-600 to-indigo-500', 
      category: 'Advanced',
      description: 'Clayton Christensen\'s Jobs to be Done framework, customer progress',
      x: 25, 
      y: 55 
    },
  ];

  // Complex meaningful connections between PM competencies
  const connections = [
    // Core strategy connects to all (hub and spoke)
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9],
    [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18],
    
    // Discovery cluster (Jobs Theory → User Research → Market Sizing)
    [1, 18], [1, 2], [2, 3], [18, 1],
    
    // Analytics cluster (Metrics → Data Analytics → Experimentation)
    [4, 5], [5, 6], [4, 6], [4, 17],
    
    // Design cluster (Design Thinking → Prioritization → IA)
    [7, 8], [8, 9], [7, 9],
    
    // Growth cluster (Growth Loops → GTM → Monetization)
    [10, 11], [11, 12], [10, 12],
    
    // Leadership cluster (Agile → Stakeholder → Communication)
    [13, 14], [14, 15], [13, 15],
    
    // Cross-functional bridges
    [2, 4], [3, 4], [5, 8], [6, 8], [8, 10], [4, 10], [17, 7],
    [15, 1], [15, 7], [15, 10], [16, 4], [16, 6],
    
    // Advanced frameworks connecting back
    [17, 5], [17, 6], [18, 2], [18, 15],
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
          Product Manager <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Competency Network</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A comprehensive framework integrating PM theories, methodologies, and skills. From Jobs Theory to Growth Loops, 
          this network shows how PMs combine discovery insights, data analytics, design thinking, go-to-market strategies, 
          and leadership execution to build successful products.
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

      {/* Category Legend with Theories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-16"
      >
        <p className="text-center text-muted-foreground text-sm mb-8 font-semibold">PM SKILL CLUSTERS & FRAMEWORKS</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Core', theories: 'Strategy Framework', emoji: '🎯' },
            { name: 'Discovery', theories: 'Jobs to be Done', emoji: '🔍' },
            { name: 'Analytics', theories: 'OKRs & Metrics', emoji: '📊' },
            { name: 'Design', theories: 'RICE/MoSCoW', emoji: '🎨' },
            { name: 'Growth', theories: 'Growth Loops', emoji: '🚀' },
            { name: 'Leadership', theories: 'Agile & Alignment', emoji: '👥' },
            { name: 'Technical', theories: 'System Design', emoji: '⚙️' },
            { name: 'Advanced', theories: 'SaaS Metrics', emoji: '📈' }
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.7 + index * 0.08, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="text-2xl">{category.emoji}</div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{category.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{category.theories}</p>
              </div>
            </motion.div>
          ))}
        </div>
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

        {/* Tooltip with Framework Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered || isSelected ? 1 : 0,
            y: isHovered || isSelected ? 0 : 10,
            pointerEvents: isHovered || isSelected ? 'auto' : 'none'
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-72 p-4 backdrop-blur-xl bg-card/95 border border-border rounded-xl shadow-2xl z-50"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-sm">{skill.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{skill.category}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isHovered || isSelected ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <span className="text-xs font-semibold text-foreground">{skill.level}%</span>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45" />
        </motion.div>
      </motion.div>
    </>
  );
};
