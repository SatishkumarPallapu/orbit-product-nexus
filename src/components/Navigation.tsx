
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Target, TrendingUp, Mail, Home, Menu, X, Award, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Home', icon: Home },
    { id: '/about', label: 'About', icon: User },
    { id: '/experience', label: 'Experience', icon: Award },
    { id: '/projects', label: 'Projects', icon: Briefcase },
    { id: '/skills', label: 'Skills', icon: Target },
    { id: '/certifications', label: 'Certifications', icon: Shield },
    { id: '/process', label: 'Process', icon: TrendingUp },
    { id: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 hidden md:block"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30"
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.id;
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <Link
                      to={item.id}
                      className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white/20'
                      }`}
                    >
                      <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span className="hidden lg:block text-sm font-medium">{item.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:hidden"
      >
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30"
          >
            <Link to="/" className="text-gray-800 font-semibold text-lg">VP</Link>
          </motion.div>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 text-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30"
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.id}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-white/20'
                        }`}
                      >
                        <Icon size={18} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
