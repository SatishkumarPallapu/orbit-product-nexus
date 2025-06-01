
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Users, Lightbulb, BarChart3, Zap } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Product Management themed floating icons
  const pmIcons = [
    { icon: Target, delay: 0.5, x: -20, y: -10 },
    { icon: TrendingUp, delay: 1, x: 15, y: -15 },
    { icon: Users, delay: 1.5, x: -15, y: 10 },
    { icon: Lightbulb, delay: 2, x: 20, y: 12 },
    { icon: BarChart3, delay: 2.5, x: -25, y: -5 },
    { icon: Zap, delay: 3, x: 18, y: -8 }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
              className="absolute w-8 h-8 sm:w-12 sm:h-12 text-blue-400 opacity-60"
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

        {/* Floating 3D Elements - Responsive */}
        <motion.div
          style={{ 
            y: y1,
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)'
          }}
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -top-10 sm:-top-20 -left-5 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl sm:rounded-3xl transform rotate-12 opacity-20"
        />
        
        <motion.div
          style={{ 
            y: y2,
            transform: 'perspective(800px) rotateX(-30deg) rotateY(-30deg)'
          }}
          initial={{ scale: 0, rotateX: 180 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl sm:rounded-2xl transform -rotate-12 opacity-30"
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
            className="mb-6 sm:mb-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="relative inline-block"
              style={{ transform: 'perspective(1000px)' }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative">
                {/* Animated border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 p-1"
                >
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </motion.div>
                
                {/* Image container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  {/* Placeholder - replace src with your actual image */}
                  <img
                    src="/placeholder.svg"
                    alt="Alex Rodriguez"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold" style={{ display: 'none' }}>
                    AR
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 sm:mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={14} className="text-orange-400 sm:w-4 sm:h-4" />
            <span className="text-white/80 text-xs sm:text-sm">Product Manager & Innovation Catalyst</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Alex
            <motion.span
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400"
            >
              Rodriguez
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-base sm:text-xl md:text-2xl text-white/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Transforming ideas into impactful products through data-driven insights, 
            user-centered design, and strategic execution.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden"
              style={{ 
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                transform: 'perspective(1000px)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
              </span>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-full text-white font-semibold backdrop-blur-md hover:border-white/50 transition-colors"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3D Stats Cards with PM Metrics - Responsive Grid */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 px-4"
        >
          {[
            { value: '50+', label: 'Products Launched', color: 'from-blue-400 to-blue-600', icon: Target },
            { value: '98%', label: 'Client Satisfaction', color: 'from-purple-400 to-purple-600', icon: Users },
            { value: '5x', label: 'Average ROI Increase', color: 'from-orange-400 to-orange-600', icon: TrendingUp }
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
                className="relative p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 group"
                style={{ 
                  transform: 'perspective(1000px)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                }}
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
                  className="mb-3 flex justify-center"
                >
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </motion.div>

                <motion.div 
                  className={`text-2xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
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
                <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>

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
                  className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${stat.color}`}
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
          className="mt-16 sm:mt-20 flex justify-center items-center gap-2 sm:gap-4"
        >
          {['Ideate', 'Build', 'Launch', 'Scale'].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 4 + index * 0.3, duration: 0.8 }}
              className="flex items-center gap-2"
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
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${
                  index === 0 ? 'from-yellow-400 to-orange-500' :
                  index === 1 ? 'from-blue-400 to-purple-500' :
                  index === 2 ? 'from-green-400 to-teal-500' :
                  'from-purple-400 to-pink-500'
                }`}
              />
              <span className="text-white/60 text-xs sm:text-sm font-medium">{phase}</span>
              {index < 3 && (
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 4.5 + index * 0.5 
                  }}
                  className="w-4 sm:w-8 h-0.5 bg-gradient-to-r from-white/20 to-white/40 origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
