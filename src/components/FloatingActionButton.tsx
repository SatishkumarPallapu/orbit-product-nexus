import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Home, User, Briefcase, FolderOpen, Award, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Home, label: 'Home', path: '/', color: 'from-cyan-500 to-blue-500' },
    { icon: User, label: 'About', path: '/about', color: 'from-blue-500 to-purple-500' },
    { icon: Briefcase, label: 'Experience', path: '/experience', color: 'from-purple-500 to-pink-500' },
    { icon: FolderOpen, label: 'Projects', path: '/projects', color: 'from-pink-500 to-orange-500' },
    { icon: Award, label: 'Skills', path: '/skills', color: 'from-orange-500 to-yellow-500' },
    { icon: Mail, label: 'Contact', path: '/contact', color: 'from-green-500 to-cyan-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Action Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 right-0 flex flex-col items-end gap-3 mb-2"
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.path}
                  initial={{ opacity: 0, y: 20, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { delay: index * 0.05 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 20, 
                    scale: 0,
                    transition: { delay: (actions.length - index) * 0.03 }
                  }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 group"
                >
                  {/* Label */}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium shadow-lg whitespace-nowrap"
                  >
                    {action.label}
                  </motion.span>

                  {/* Icon Button */}
                  <Link
                    to={action.path}
                    onClick={() => setIsOpen(false)}
                    className="relative"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white shadow-lg`}
                      style={{
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${action.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glass shine effect */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center h-full"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Plus size={28} className="text-white" />
          )}
        </motion.div>

        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl"
          animate={{
            opacity: isOpen ? 0.6 : 0.3,
            scale: isOpen ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* 3D depth shadow */}
        <div 
          className="absolute inset-0 rounded-2xl bg-black/30 -z-10"
          style={{
            transform: 'translateZ(-10px) translateY(5px)',
            filter: 'blur(5px)',
          }}
        />
      </motion.button>
    </div>
  );
};
