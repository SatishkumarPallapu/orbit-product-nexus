import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Users, Lightbulb, BarChart3, Zap, Download, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Typewriter animation for role
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Product Manager', 'Innovation Catalyst', 'Strategic Thinker', 'Data-Driven Leader'];
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setRoleText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setRoleText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  // Product Management themed floating icons
  const pmIcons = [
    { icon: Target, delay: 0.5, x: -20, y: -10 },
    { icon: TrendingUp, delay: 1, x: 15, y: -15 },
    { icon: Users, delay: 1.5, x: -15, y: 10 },
    { icon: Lightbulb, delay: 2, x: 20, y: 12 },
    { icon: BarChart3, delay: 2.5, x: -25, y: -5 },
    { icon: Zap, delay: 3, x: 18, y: -8 }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Venkatesh_Product_Manager_Resume.pdf';
    link.download = 'Venkatesh_Product_Manager_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 sm:pt-24 md:pt-28"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          {/* Floating PM Icons */}
          {pmIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                animate={{ 
                  scale: 1, 
                  opacity: 0.6, 
                  rotateY: 0,
                  y: [0, -10, 0],
                  x: [0, item.x * 0.5, 0]
                }}
                transition={{ 
                  scale: { duration: 1, delay: item.delay },
                  opacity: { duration: 1, delay: item.delay },
                  rotateY: { duration: 1.5, delay: item.delay },
                  y: { duration: 3, repeat: Infinity, delay: item.delay },
                  x: { duration: 4, repeat: Infinity, delay: item.delay }
                }}
                className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 opacity-60"
                style={{ 
                  left: `${50 + item.x}%`, 
                  top: `${30 + item.y}%`,
                  transform: 'perspective(1000px) rotateX(15deg)'
                }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            );
          })}

          {/* Floating 3D Elements */}
          <motion.div
            style={{ y: y1 }}
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -top-10 sm:-top-16 md:-top-20 -left-5 sm:-left-10 md:-left-20 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl sm:rounded-2xl md:rounded-3xl transform rotate-12 opacity-20"
          />
          
          <motion.div
            style={{ y: y2 }}
            initial={{ scale: 0, rotateX: 180 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute -top-5 sm:-top-8 md:-top-10 -right-5 sm:-right-8 md:-right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl md:rounded-2xl transform -rotate-12 opacity-30"
          />

          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="relative inline-block"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto relative">
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 p-1 animate-pulse-glow"
                  >
                    <div className="w-full h-full rounded-full bg-white" />
                  </motion.div>
                  
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <img
                      src="/venky_full_suit_half.png"
                      alt="Venkatesh Pallapu"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback initials */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold" style={{ display: 'none' }}>
                      VP
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full mb-4 sm:mb-6 md:mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={12} className="text-blue-500 sm:w-4 sm:h-4" />
              <span className="text-foreground text-xs sm:text-sm font-medium">Product Manager & Innovation Catalyst</span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight font-display"
            >
              <motion.span className="animate-bounce-horizontal">
                Venkatesh
              </motion.span>
              <motion.span
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="block gradient-text"
              >
                Pallapu
              </motion.span>
            </motion.h1>

            {/* Typewriter role text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium"
            >
              {roleText}
              <span className="animate-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
            >
              Transforming ideas into impactful products through data-driven insights, 
              user-centered design, and strategic execution.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>venkatesh@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 12345 67890</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 gradient-bg rounded-full text-white font-semibold overflow-hidden text-sm sm:text-base hover-lift transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-primary rounded-full text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  Get In Touch
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 glass-card rounded-full text-foreground font-semibold hover-lift transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Stats Cards with PM Metrics */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-2 sm:px-4"
          >
            {[
              { value: '05+', label: 'Products Launched', color: 'from-cyan-400 to-cyan-600', icon: Target },
              { value: '98%', label: 'Client Satisfaction', color: 'from-sky-400 to-sky-600', icon: Users },
              { value: '5x', label: 'Average ROI Increase', color: 'from-blue-500 to-blue-600', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.3 + index * 0.2 }}
                  whileHover={{ 
                    rotateY: 10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="relative p-3 sm:p-4 md:p-6 bg-slate-800/80 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-700 group corporate-card"
                >
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotateZ: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                    className="mb-2 sm:mb-3 flex justify-center"
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  </motion.div>

                  <motion.div 
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 3 + index * 0.3 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-400 text-xs sm:text-sm md:text-base">{stat.label}</div>

                  {/* Pulsing dot indicator */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.4 
                    }}
                    className={`absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Product Lifecycle Visualization */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5 }}
            className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex justify-center items-center gap-1 sm:gap-2 md:gap-4 flex-wrap mb-10"
          >
            {['Ideate', 'Build', 'Launch', 'Scale'].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4 + index * 0.3, duration: 0.8 }}
                className="flex items-center gap-1 sm:gap-2"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${
                    index === 0 ? 'from-yellow-400 to-orange-500' :
                    index === 1 ? 'from-cyan-400 to-sky-500' :
                    index === 2 ? 'from-green-400 to-teal-500' :
                    'from-sky-400 to-blue-500'
                  }`}
                />
                <span className="text-slate-400 text-xs sm:text-sm font-medium">{phase}</span>
                {index < 3 && (
                  <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 4.5 + index * 0.5 
                    }}
                    className="w-2 sm:w-4 md:w-8 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
