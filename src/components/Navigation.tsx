import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Target, TrendingUp, Mail, Home, Menu, X, Award, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 24) {
        setIsNavVisible(true);
      } else if (scrollDelta > 6) {
        setIsNavVisible(false);
        setIsMobileMenuOpen(false);
      } else if (scrollDelta < -6) {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Desktop Navigation - 3D Glass Box */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isNavVisible ? 0 : -140, opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: isNavVisible ? 0.48 : 0.24, ease: 'easeInOut' }}
        style={{ pointerEvents: isNavVisible ? 'auto' : 'none' }}
        className="sticky top-0 left-0 right-0 z-50 hidden p-4 sm:p-6 md:block"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
              style={{ 
                perspective: '1200px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* 3D Glass Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center gap-1 sm:gap-2 px-6 py-4 rounded-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--card) / 0.9) 0%, hsl(var(--background) / 0.96) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.4),
                    inset 0 1px 1px rgba(255, 255, 255, 0.1),
                    inset 0 -1px 1px rgba(0, 0, 0, 0.2),
                    0 0 40px rgba(34, 211, 238, 0.1)
                  `,
                  border: '1px solid hsl(var(--border) / 0.9)',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)'
                }}
              >
                {/* Shine effect overlay */}
                <motion.div
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-2xl opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    backgroundSize: '200% 100%',
                    pointerEvents: 'none'
                  }}
                />

                {/* Top edge highlight */}
                <div 
                  className="absolute top-0 left-4 right-4 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)'
                  }}
                />
                
                {/* Bottom shadow */}
                <div 
                  className="absolute -bottom-1 left-4 right-4 h-px blur-sm"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5), transparent)'
                  }}
                />
                {/* Navigation Items */}
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, rotateY: -45 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + index * 0.08,
                        type: "spring",
                        stiffness: 100
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Link
                        to={item.id}
                        className="relative group"
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.08,
                            rotateY: 5,
                            z: 20,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            relative flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl
                            transition-all duration-300
                            ${isActive 
                              ? 'text-primary-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                            }
                          `}
                          style={{
                            background: isActive ? 'hsl(var(--primary))' : 'transparent',
                            boxShadow: isActive 
                              ? '0 4px 14px hsl(var(--primary) / 0.22)'
                              : 'none',
                            border: isActive 
                              ? '1px solid hsl(var(--primary) / 0.45)'
                              : '1px solid transparent',
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          {/* Icon with 3D depth */}
                          <motion.div
                            animate={isActive ? {
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1]
                            } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          >
                            <Icon size={18} className="relative z-10" />
                          </motion.div>
                          
                          <span className="hidden lg:block text-sm font-medium relative z-10">
                            {item.label}
                          </span>

                          {/* Hover glow effect */}
                          {!isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                                backdropFilter: 'blur(8px)'
                              }}
                            />
                          )}

                          {/* Active indicator with depth */}
                          {isActive && (
                            <>
                              <motion.div
                                layoutId="activeIndicator"
                                className="absolute inset-0 rounded-xl -z-10"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)',
                                  filter: 'blur(10px)',
                                  transform: 'translateZ(-5px)'
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                              
                              {/* Pulsing dot */}
                              <motion.div
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity
                                }}
                                className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"
                                style={{
                                  boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
                                }}
                              />
                            </>
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - 3D Glass Box */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isNavVisible ? 0 : -140, opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: isNavVisible ? 0.48 : 0.24, ease: 'easeInOut' }}
        style={{ pointerEvents: isNavVisible ? 'auto' : 'none' }}
        className="sticky top-0 left-0 right-0 z-50 p-4 md:hidden"
      >
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="px-5 py-2.5 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--card) / 0.9) 0%, hsl(var(--background) / 0.96) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
              border: '1px solid hsl(var(--border) / 0.9)'
            }}
          >
            <Link to="/" className="text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              VP
            </Link>
          </motion.div>

          <motion.button
            initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-xl text-foreground relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--card) / 0.9) 0%, hsl(var(--background) / 0.96) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
              border: '1px solid hsl(var(--border) / 0.9)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(34, 211, 238, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            aria-label='menu-button'
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
            
            {/* Button glow */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl"
              />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu - 3D Glass Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, scale: 0.9, rotateX: -10 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-full left-4 right-4 mt-3 p-5 rounded-2xl"
              style={{
                background: 'hsl(var(--card) / 0.97)',
                backdropFilter: 'blur(24px)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.5),
                  inset 0 1px 2px rgba(255, 255, 255, 0.1),
                  0 0 40px rgba(34, 211, 238, 0.15)
                `,
                border: '1px solid hsl(var(--border))',
                perspective: '1000px'
              }}
            >
              {/* Top highlight */}
              <div 
                className="absolute top-0 left-8 right-8 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.6), transparent)'
                }}
              />
              
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, rotateY: -20 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.06,
                        type: "spring",
                        stiffness: 200
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Link
                        to={item.id}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.05,
                            rotateY: 3,
                            z: 10
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            flex items-center gap-3 p-3.5 rounded-xl 
                            transition-all duration-300 relative overflow-hidden
                          `}
                          style={{
                            background: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted) / 0.7)',
                            boxShadow: isActive 
                              ? '0 4px 14px hsl(var(--primary) / 0.22)'
                              : '0 2px 8px rgba(0, 0, 0, 0.1)',
                            border: isActive 
                              ? '1px solid hsl(var(--primary) / 0.45)'
                              : '1px solid hsl(var(--border))',
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          <Icon 
                            size={20} 
                            className={isActive ? 'text-primary-foreground' : 'text-muted-foreground'}
                          />
                          <span 
                            className={`font-medium ${
                              isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                            }`}
                          >
                            {item.label}
                          </span>

                          {/* Active indicator dot */}
                          {isActive && (
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                              className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"
                              style={{
                                boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                              }}
                            />
                          )}
                          
                          {/* Hover glow */}
                          {!isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)'
                              }}
                            />
                          )}
                        </motion.div>
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
