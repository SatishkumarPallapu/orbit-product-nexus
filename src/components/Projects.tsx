import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Revolution',
      category: 'Mobile App',
      description: 'Redesigned checkout flow resulting in 40% increase in conversion rates',
      longDescription: [
        'Led a comprehensive redesign of the mobile checkout experience',
        'Implemented progressive disclosure, one-click payments, and smart form validation',
        'Conducted extensive A/B testing and user research to optimize every step of the funnel'
      ],
      metrics: {
        revenue: '+$2.5M ARR',
        conversion: '+40%',
        users: '500K+',
        timeline: '6 months'
      },
      color: 'from-blue-500 to-purple-600',
      technologies: ['React Native', 'GraphQL', 'Stripe', 'Analytics'],
      impact: 'Increased company revenue by $2.5M annually and improved user satisfaction scores by 35%'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics',
      category: 'SaaS Platform',
      description: 'Built ML-driven insights platform serving 10K+ businesses',
      longDescription: [
        'Spearheaded the development of an AI-powered analytics platform',
        'Provided automated insights and recommendations to business users',
        'Collaborated with data science teams to translate complex ML models into actionable business intelligence'
      ],
      metrics: {
        revenue: '+$5M ARR',
        conversion: '+60%',
        users: '10K+',
        timeline: '12 months'
      },
      color: 'from-purple-500 to-pink-600',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      impact: 'Enabled data-driven decision making for 10,000+ businesses and reduced analysis time by 80%'
    },
    {
      id: 3,
      title: 'Fintech Innovation',
      category: 'Financial App',
      description: 'Launched digital banking features with 95% user adoption',
      longDescription: [
        'Led the product strategy and execution for a suite of digital banking features',
        'Developed budgeting tools, savings goals, and investment tracking capabilities',
        'Worked closely with regulatory teams to ensure compliance while maintaining exceptional UX'
      ],
      metrics: {
        revenue: '+$8M ARR',
        conversion: '+95%',
        users: '1M+',
        timeline: '18 months'
      },
      color: 'from-orange-500 to-red-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: 'Achieved 95% feature adoption rate and positioned company as fintech innovation leader'
    },
    {
      id: 4,
      title: 'TImesheet Guru',
      category: ' Internal Employee Productivity & Time Tracking Tool',
      description: 'An internal time tracking and productivity tool - streamline timesheet logging, and performance reporting across departments',
      longDescription: [
        'Conceptualized, developed, and launched in just 60 days as a 0→1 internal web application',
        'Led a 5-member cross-functional team (PM, FE, BE, QA, and UI/UX)',
        'Replaced manual logging with a scalable, automated system',
        'Enabled session tracking, role-based access, compliance, and real-time dashboards for 500+ users',
        'Reduced payroll and timesheet discrepancies and improved reporting accuracy'
      ],
      metrics: {
        revenue: ' NA',
        conversion: '100%',
        users: '500+',
        timeline: 'August 2022 – September 2022 (60 days)'
      },
      color: 'from-yellow-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `The tool achieved company-wide adoption as the daily standard for time reporting, significantly improving operational transparency. It enabled proactive resource planning and more effective performance reviews by providing accurate, real-time visibility into task-level efforts. By replacing manual logging processes, it reduced friction and human error, leading to increased efficiency. Additionally, the success and feedback from this tool directly informed the development of further automation solutions for HR and operations teams`
    },
    {
      id: 5,
      title: 'Payment Page Abandonment Optimization',
      category: 'Conversion Optimization',
      description: 'A strategic redesign of the e-commerce payment flow to reduce checkout abandonment by integrating trusted payment methods, predictive incentives, and behavioral nudges.',
      longDescription: [
        'Led a complete revamp of the payment experience with a 6-member team',
        'Conducted in-depth funnel and session analysis to identify friction points',
        'Launched instant wallet checkout with KakaoPay and NaverPay',
        'Introduced a real-time coupon engine and implemented exit recovery modals',
        'Added secure design cues and refund guarantees to boost trust',
        'Achieved measurable conversion lifts and increased revenue from repeat buyers'
      ],
      metrics: {
        revenue: '+22%',
        conversion: '+13%',
        users: '500k+',
        timeline: 'November 2022 – April 2023'
      },
      color: 'from-orange-500 to-yellow-600',
      technologies: ['Flutter', 'Node.js', 'Blockchain', 'Plaid API'],
      impact: `The redesigned payment experience led to a 16% reduction in checkout abandonment, outperforming industry benchmarks. One-tap wallet integration improved the checkout completion rate by 19%, while behavioral enhancements such as predictive coupon suggestions and exit-intent modals significantly boosted user engagement and retention. These changes resulted in a 4x increase in coupon usage and a 22% revenue lift from returning users. Overall, A/B testing validated a 13% improvement in conversion rates across over half a million sessions, demonstrating the substantial business value of these UX and behavioral optimizations.`
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex lg:items-start justify-center px-4 "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transforming ideas into market-leading products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ 
                rotateY: 10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project.id)}
              className="relative cursor-pointer group"
              style={{ transform: 'perspective(1000px)' }}
            >
              <div className={`relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden h-full`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Floating Number */}
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
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {String(project.id).padStart(2, '0')}
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <div className="text-orange-400 text-sm font-medium uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Quick Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.metrics.conversion}
                      </div>
                      <div className="text-white/60 text-xs">Conversion</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.metrics.users}
                      </div>
                      <div className="text-white/60 text-xs">Users</div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl flex items-center justify-center"
                  >
                    <ExternalLink className="text-white/80" size={32} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                style={{ transform: 'perspective(1000px)' }}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="text-center space-y-4">
                        <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                        <div className="text-left max-w-none">
                          <ul className="text-xl text-white/70 space-y-2">
                            {project.longDescription.map((point, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-blue-400 mt-2 flex-shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                          { icon: DollarSign, label: 'Revenue Impact', value: project.metrics.revenue },
                          { icon: TrendingUp, label: 'Conversion Lift', value: project.metrics.conversion },
                          { icon: Users, label: 'Users Reached', value: project.metrics.users },
                          { icon: Clock, label: 'Timeline', value: project.metrics.timeline }
                        ].map((metric, index) => {
                          const Icon = metric.icon;
                          return (
                            <motion.div
                              key={index}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-center p-4 bg-white/5 rounded-2xl border border-white/10"
                            >
                              <Icon className={`mx-auto mb-2 text-2xl bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} size={32} />
                              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                              <div className="text-white/60 text-sm">{metric.label}</div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-full text-white font-medium`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Business Impact</h4>
                        <p className="text-white/80 text-lg leading-relaxed">{project.impact}</p>
                      </div>

                      {/* Close Button */}
                      <div className="text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(null)}
                          className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:border-white/40 transition-colors"
                        >
                          Close
                        </motion.button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
