import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Users, Lightbulb, Target, Code, TrendingUp, Zap, Brain } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';
import { staggerContainer } from '@/utils/animationVariants';
import { useCountAnimation } from '@/hooks/useCountAnimation';

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Product Strategy',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Market Research', level: 95 },
        { name: 'Competitive Analysis', level: 90 },
        { name: 'Product Roadmapping', level: 98 },
        { name: 'Go-to-Market', level: 85 }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Data Analysis', level: 92 },
        { name: 'A/B Testing', level: 95 },
        { name: 'KPI Definition', level: 90 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Leadership',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Team Management', level: 95 },
        { name: 'Stakeholder Alignment', level: 90 },
        { name: 'Cross-functional Collaboration', level: 98 },
        { name: 'Mentoring', level: 85 }
      ]
    },
    {
      title: 'Innovation',
      icon: Lightbulb,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Design Thinking', level: 88 },
        { name: 'User Research', level: 92 },
        { name: 'Prototyping', level: 80 },
        { name: 'Innovation Management', level: 90 }
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Skills</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience
          </p>
        </motion.div>

        {/* 3D Skill Tree */}
        <div className="relative">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center z-10"
            style={{ 
              boxShadow: '0 20px 40px rgba(251, 191, 36, 0.4)',
              transform: 'perspective(1000px) rotateX(20deg) rotateY(20deg) translate(-50%, -50%)'
            }}
          >
            <Brain className="text-white" size={48} />
          </motion.div>

          {/* Skill Categories in 3D Space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const angle = (categoryIndex * 90) - 45; // Distribute around center
              
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ 
                    opacity: 0, 
                    rotateY: -90,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: 1, 
                    rotateY: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.8 + categoryIndex * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  onHoverStart={() => setHoveredSkill(categoryIndex)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative"
                  style={{ transform: 'perspective(1000px)' }}
                >
                  <motion.div
                    whileHover={{ 
                      rotateY: 15, 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
                    style={{ 
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                      transform: `rotateY(${hoveredSkill === categoryIndex ? 15 : 0}deg)`
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                    
                    {/* Floating Icon */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotateZ: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: categoryIndex * 0.5
                      }}
                      className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto`}
                      style={{ 
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                        transform: 'perspective(800px) rotateX(10deg)'
                      }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    <div className="relative z-10 space-y-6">
                      <h3 className="text-2xl font-bold text-white text-center">
                        {category.title}
                      </h3>

                      {/* Skills List with Animated Progress Bars */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillProgressBar = () => {
                            const ref = useRef<HTMLDivElement>(null);
                            const isInView = useInView(ref, { once: true });
                            const animatedValue = useCountAnimation(skill.level, 1500, ref);

                            return (
                              <motion.div
                                ref={ref}
                                key={skillIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ 
                                  delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                                  duration: 0.6
                                }}
                                className="space-y-2"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="text-white/90 font-medium">{skill.name}</span>
                                  <motion.span 
                                    className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent tabular-nums`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: isInView ? 1 : 0 }}
                                    transition={{ delay: 1.5 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                                  >
                                    {animatedValue}%
                                  </motion.span>
                                </div>
                                
                                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                                    transition={{ 
                                      delay: 1.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                                      duration: 1.5,
                                      ease: "easeOut"
                                    }}
                                    className={`h-full bg-gradient-to-r ${category.color} rounded-full relative shadow-lg`}
                                    style={{
                                      boxShadow: `0 0 20px ${category.color.includes('cyan') ? 'rgba(34, 211, 238, 0.4)' : 
                                                          category.color.includes('purple') ? 'rgba(168, 85, 247, 0.4)' :
                                                          category.color.includes('orange') ? 'rgba(251, 146, 60, 0.4)' :
                                                          'rgba(45, 212, 191, 0.4)'}`
                                    }}
                                  >
                                    <motion.div
                                      animate={{ x: [-10, 10, -10] }}
                                      transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                      }}
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    />
                                    
                                    {/* Animated dots */}
                                    <motion.div
                                      animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                      }}
                                      transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity,
                                        delay: skillIndex * 0.2
                                      }}
                                      className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"
                                    />
                                  </motion.div>
                                </div>
                              </motion.div>
                            );
                          };

                          return <SkillProgressBar key={skillIndex} />;
                        })}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredSkill === categoryIndex ? 1 : 0,
                        opacity: hoveredSkill === categoryIndex ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"
                    />
                  </motion.div>

                  {/* Connection Lines to Center */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.3 }}
                    transition={{ delay: 1.5 + categoryIndex * 0.2, duration: 1 }}
                    className={`absolute top-1/2 ${
                      categoryIndex % 2 === 0 ? 'left-full' : 'right-full'
                    } w-16 h-0.5 bg-gradient-to-r ${category.color} transform -translate-y-1/2 origin-left`}
                    style={{ 
                      display: window.innerWidth >= 768 ? 'block' : 'none'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Skills Showcase */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiencies</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Agile/Scrum', 'Jira', 'Figma', 'Tableau', 'Google Analytics', 
              'Mixpanel', 'Amplitude', 'Slack', 'Notion', 'Miro', 'Confluence', 'Git', 'N8N', 'Firebase'
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, rotateY: -90 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.15, 
                  rotateY: 10,
                  boxShadow: '0 10px 30px rgba(34, 211, 238, 0.3)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20 hover:border-cyan-400 transition-colors cursor-pointer card-shadow"
                style={{ transform: 'perspective(800px)' }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
