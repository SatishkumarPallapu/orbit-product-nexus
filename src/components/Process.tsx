
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 0,
      title: 'Discovery & Research',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      description: 'Understanding user needs, market dynamics, and business objectives',
      details: [
        'User interviews and surveys',
        'Market research and analysis',
        'Stakeholder alignment sessions',
        'Technical feasibility assessment'
      ],
      deliverables: ['Research Report', 'User Personas', 'Market Analysis'],
      timeline: '2-3 weeks'
    },
    {
      id: 1,
      title: 'Ideation & Strategy',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      description: 'Generating innovative solutions and defining product strategy',
      details: [
        'Brainstorming sessions',
        'Solution prioritization',
        'Strategic roadmap creation',
        'Success metrics definition'
      ],
      deliverables: ['Product Strategy', 'Feature Roadmap', 'Success Metrics'],
      timeline: '1-2 weeks'
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      description: 'Creating user-centered designs and interactive prototypes',
      details: [
        'Wireframe development',
        'UI/UX design creation',
        'Interactive prototyping',
        'Design system establishment'
      ],
      deliverables: ['Wireframes', 'UI Designs', 'Interactive Prototype'],
      timeline: '3-4 weeks'
    },
    {
      id: 3,
      title: 'Development & Build',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      description: 'Agile development with continuous collaboration and feedback',
      details: [
        'Sprint planning and execution',
        'Daily standups and reviews',
        'Continuous integration',
        'Quality assurance processes'
      ],
      deliverables: ['MVP Build', 'Technical Documentation', 'QA Reports'],
      timeline: '8-12 weeks'
    },
    {
      id: 4,
      title: 'Testing & Validation',
      icon: TestTube,
      color: 'from-indigo-500 to-purple-500',
      description: 'Rigorous testing and user validation before launch',
      details: [
        'User acceptance testing',
        'A/B testing setup',
        'Performance optimization',
        'Security audits'
      ],
      deliverables: ['Test Results', 'Performance Report', 'Launch Plan'],
      timeline: '2-3 weeks'
    },
    {
      id: 5,
      title: 'Launch & Scale',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500',
      description: 'Strategic launch execution and post-launch optimization',
      details: [
        'Go-to-market execution',
        'User onboarding optimization',
        'Performance monitoring',
        'Iterative improvements'
      ],
      deliverables: ['Launch Metrics', 'User Feedback', 'Optimization Plan'],
      timeline: 'Ongoing'
    },
    {
      id: 6,
      title: 'Measure & Iterate',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500',
      description: 'Continuous improvement based on data and user feedback',
      details: [
        'Performance analytics',
        'User behavior analysis',
        'Feature usage tracking',
        'ROI measurement'
      ],
      deliverables: ['Analytics Dashboard', 'Improvement Roadmap', 'ROI Report'],
      timeline: 'Ongoing'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Process</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A proven methodology for delivering exceptional products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Process Flow */}
          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`relative cursor-pointer group ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  } transition-transform duration-300`}
                >
                  <motion.div
                    whileHover={{ rotateY: 5 }}
                    className={`relative p-6 rounded-3xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/15 border-white/30 shadow-2xl' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                    style={{ 
                      transform: 'perspective(1000px)',
                      boxShadow: isActive ? '0 25px 50px rgba(0, 0, 0, 0.3)' : 'none'
                    }}
                  >
                    {/* Step Number & Connection Line */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{ 
                          scale: isActive ? 1.2 : 1,
                          rotateY: isActive ? 10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color}`}
                        style={{ 
                          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                          transform: 'perspective(800px) rotateX(10deg)'
                        }}
                      >
                        <Icon className="text-white" size={24} />
                        
                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800">
                          {index + 1}
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/80'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-sm">{step.description}</p>
                      </div>

                      <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className={`transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/40'
                        }`} size={20} />
                      </motion.div>
                    </div>

                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        className="absolute left-8 top-full w-0.5 h-4 bg-gradient-to-b from-white/30 to-transparent origin-top"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Step Details */}
          <div className="sticky top-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20"
                style={{ 
                  transform: 'perspective(1000px)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                }}
              >
                {(() => {
                  const step = processSteps[activeStep];
                  const Icon = step.icon;
                  
                  return (
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          animate={{ 
                            y: [0, -5, 0],
                            rotateZ: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity
                          }}
                          className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${step.color}`}
                          style={{ 
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                            transform: 'perspective(800px) rotateX(15deg)'
                          }}
                        >
                          <Icon className="text-white" size={32} />
                        </motion.div>
                        
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Key Activities</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {step.details.map((detail, index) => (
                            <motion.div
                              key={index}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className={`text-green-400 flex-shrink-0`} size={16} />
                              <span className="text-white/80">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables & Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Deliverables</h4>
                          <div className="space-y-2">
                            {step.deliverables.map((deliverable, index) => (
                              <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className={`px-3 py-2 bg-gradient-to-r ${step.color} bg-opacity-20 rounded-full text-white text-sm`}
                              >
                                {deliverable}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Timeline</h4>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-2xl font-bold text-orange-400"
                          >
                            {step.timeline}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
