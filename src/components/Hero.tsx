
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Users, Lightbulb, BarChart3, Zap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParallaxSection, ParallaxLayer } from './ParallaxSection';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

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
    link.href = '/Venkatesh_ProductManager_Resume.pdf';
    link.download = 'Venkatesh_ProductManager_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 sm:pt-24 md:pt-28 bg-slate-900"
    >
      {/* Layered Parallax Background Elements */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/15 to-orange-500/15 rounded-full blur-2xl" />
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl" />
      </motion.div>

      <motion.div 
        style={{ opacity, scale }} 
        className="max-w-6xl mx-auto text-center relative z-10 w-full"
      >
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
              className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-400 opacity-60"
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

        {/* Parallax 3D Elements */}
        <ParallaxLayer speed={-0.5} className="absolute -top-10 sm:-top-16 md:-top-20 -left-5 sm:-left-10 md:-left-20">
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-xl sm:rounded-2xl md:rounded-3xl transform rotate-12 opacity-20"
          />
        </ParallaxLayer>
        
        

        {/* Main Content with Parallax */}
        <ParallaxSection speed="slow" className="relative">
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
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-400 p-1"
                >
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </motion.div>
                
                {/* Image container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center">
                  <img
                    src="/venky_full_suit_half.webp"
                    alt="Venkatesh Pallapu"
                    className="w-full h-full object-cover rounded-full"
                    loading='eager'
                    decoding='async'
                    width="120px"
                    height="120px"
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
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/80 backdrop-blur-md rounded-full border border-slate-700 mb-4 sm:mb-6 md:mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={12} className="text-cyan-400 sm:w-4 sm:h-4" />
            <span className="text-slate-300 text-xs sm:text-sm">AI Product Manager</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-slate-50 mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            Venkatesh
            <motion.span
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="block gradient-text"
            >
              Pallapu
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-400 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Transforming ideas into impactful products through data-driven insights, 
            user-centered design, and strategic execution.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold overflow-hidden text-sm sm:text-base hover:glow-cyan transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                </span>
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-slate-600 rounded-full text-slate-300 font-semibold backdrop-blur-md hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <Download size={16} className="sm:w-5 sm:h-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
        </ParallaxSection>

        {/* 3D Stats Cards with PM Metrics and Parallax */}
        <ParallaxSection speed="medium">
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
        </ParallaxSection>

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
      </motion.div>
    </motion.section>
  );
};
