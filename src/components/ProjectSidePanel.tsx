import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Users, DollarSign, Clock, ExternalLink, Code2 } from 'lucide-react';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  metrics: {
    revenue: string;
    conversion: string;
    users: string;
    timeline: string;
  };
  color: string;
  roles: string[];
  impact: string;
}

interface ProjectSidePanelProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectSidePanel: React.FC<ProjectSidePanelProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-end"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Side Panel */}
        <motion.div
          initial={{ x: '100%', rotateY: -15 }}
          animate={{ x: 0, rotateY: 0 }}
          exit={{ x: '100%', rotateY: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-2xl h-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95))',
            backdropFilter: 'blur(40px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.5)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Glass shine effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent"
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-white/10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-xl"
              >
                <X size={20} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-2">
                  {project.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {/* Metrics Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign size={18} className="text-green-400" />
                    <span className="text-white/60 text-sm">Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{project.metrics.revenue}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={18} className="text-cyan-400" />
                    <span className="text-white/60 text-sm">Conversion</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{project.metrics.conversion}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-purple-400" />
                    <span className="text-white/60 text-sm">Users</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{project.metrics.users}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-orange-400" />
                    <span className="text-white/60 text-sm">Timeline</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{project.metrics.timeline}</div>
                </div>
              </motion.div>

              {/* Detailed Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  Project Overview
                </h3>
                <div className="space-y-3">
                  {project.longDescription.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies/Roles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code2 size={20} className="text-blue-400" />
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r ${project.color} backdrop-blur-xl border border-white/20 cursor-default`}
                    >
                      {role}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-green-400" />
                  Impact & Results
                </h3>
                <p className="text-white/80 leading-relaxed">{project.impact}</p>
              </motion.div>
            </div>

            {/* Edge highlights */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
