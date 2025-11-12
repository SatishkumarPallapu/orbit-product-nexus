import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, MapPin, Heart, Sparkles, Target, Rocket } from 'lucide-react';

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    rotateY: 15
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const AboutStaggered = () => {
  const headerRef = useRef(null);
  const profileRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const profileInView = useInView(profileRef, { once: true, margin: "-100px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen flex lg:items-start items-center justify-center px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerParent}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 mt-0"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
            </h2>
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-4"
          >
            Passionate about bridging the gap between user needs and business objectives
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            ref={profileRef}
            variants={slideInLeft}
            initial="hidden"
            animate={profileInView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 8 }}
              className="relative p-6 sm:p-8 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden"
              style={{ 
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Floating avatar */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative mb-6"
              >
                <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center text-4xl sm:text-6xl font-bold text-white relative overflow-hidden">
                  VP
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                  />
                </div>

                {/* Sparkle effects */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute"
                    style={{
                      top: `${25 + Math.cos(i * Math.PI / 2) * 40}%`,
                      left: `${25 + Math.sin(i * Math.PI / 2) * 40}%`,
                    }}
                  >
                    <Sparkles className="text-yellow-300" size={16} />
                  </motion.div>
                ))}
              </motion.div>

              <div className="relative z-10 text-center space-y-4">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={profileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                >
                  Venkatesh Pallapu
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={profileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="text-blue-300 text-base sm:text-lg"
                >
                  Product Manager
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={profileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-4 sm:gap-6 text-white/60 text-sm sm:text-base"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="sm:w-4 sm:h-4" />
                    <span>Hyderabad, TG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>3+ Years</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={contentRef}
            variants={staggerParent}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Text Content */}
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
              <motion.p 
                variants={slideInRight}
                className="text-white/80 text-base sm:text-lg leading-relaxed"
              >
                I'm Venkatesh Pallapu, a strategic Product Manager with 3+ years of experience, passionate about building impactful digital products and solving complex business problems. I specialize in <b>0→1 product development, SaaS platforms, and data-driven optimization</b> across eCommerce, campaign governance, and internal productivity tools.
              </motion.p>
              
              <motion.p 
                variants={slideInRight}
                className="text-white/80 text-base sm:text-lg leading-relaxed"
              >
                With over 3+ years of experience in product management, I've led cross-functional teams to launch 4+ successful products that have generated millions in revenue and delighted users worldwide.
              </motion.p>

              <motion.p 
                variants={slideInRight}
                className="text-white/80 text-base sm:text-lg leading-relaxed"
              >
                I bring a unique blend of analytical rigor and user empathy, and thrive in fast-paced, agile environments. From defining product vision to shipping scalable MVPs, I lead cross-functional teams with clarity and ownership. I believe great products are born at the intersection of <b>user research, market understanding, and lean execution</b>
              </motion.p>

              <motion.p 
                variants={slideInRight}
                className="text-white/80 text-base sm:text-lg leading-relaxed"
              >
                My goal? Build products that <i>empower users, drive engagement, and deliver measurable impact.</i>
              </motion.p>
            </motion.div>

            {/* Achievement Cards */}
            <motion.div 
              variants={staggerParent}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: Award, title: 'Product Excellence Award', desc: '2023 Innovation Leader', color: 'from-yellow-500 to-orange-500' },
                { icon: Heart, title: 'Team Favorite', desc: '95% Team Satisfaction', color: 'from-pink-500 to-red-500' },
                { icon: Target, title: 'Goal Crusher', desc: '150% Target Achievement', color: 'from-blue-500 to-cyan-500' },
                { icon: Rocket, title: 'Fast Learner', desc: '4+ Products Launched', color: 'from-purple-500 to-indigo-500' }
              ].map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="p-4 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 group cursor-pointer relative overflow-hidden"
                    style={{ transform: 'perspective(1000px)' }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-orange-400 mb-2 group-hover:text-orange-300 transition-colors" size={24} />
                      </motion.div>
                      <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm">{achievement.desc}</p>
                    </div>

                    {/* Hover shine effect */}
                    <motion.div
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold text-sm sm:text-base relative overflow-hidden group"
                style={{ 
                  boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
                  transform: 'perspective(1000px)'
                }}
              >
                {/* Animated background */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundSize: '200% 200%' }}
                />
                <Heart size={16} className="sm:w-5 sm:h-5 relative z-10" />
                <a href="/contact" className="relative z-10">Let's Connect</a>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          variants={staggerParent}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '3+', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
            { label: 'Products Launched', value: '4+', icon: Rocket, color: 'from-purple-500 to-pink-500' },
            { label: 'Team Members Led', value: '15+', icon: Award, color: 'from-orange-500 to-red-500' },
            { label: 'Success Rate', value: '95%', icon: Target, color: 'from-green-500 to-teal-500' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-center group cursor-pointer overflow-hidden"
                style={{ transform: 'perspective(1000px)' }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <Icon className={`mx-auto mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} size={32} />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
