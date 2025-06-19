
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, MapPin, Heart } from 'lucide-react';

export const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex lg:items-start items-center justify-center px-4 sm:px-6 lg:px-8  pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-12 sm:mb-16 mt-0"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Passionate about bridging the gap between user needs and business objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={isInView ? { rotateY: 0, opacity: 1 } : { rotateY: -90, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div 
              className="relative p-6 sm:p-8 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden"
              style={{ 
                transform: 'perspective(1000px) rotateY(5deg)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
              }}
            >
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
              </motion.div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Venkatesh Pallapu</h3>
                <p className="text-blue-300 text-base sm:text-lg"> Product Manager</p>
                
                <div className="flex items-center justify-center gap-4 sm:gap-6 text-white/60 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="sm:w-4 sm:h-4" />
                    <span>Hyderabad, TG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>3+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
               I'm Venkatesh Pallapu, a strategic Product Manager with 3+ years of experience, passionate about building impactful digital products and solving complex business problems. I specialize in <b>0→1 product development, SaaS platforms, and data-driven optimization</b> across eCommerce, campaign governance, and internal productivity tools. 
              </p>
              
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                I bring a unique blend of analytical rigor and user empathy, and thrive in fast-paced, agile environments. From defining product vision to shipping scalable MVPs, I lead cross-functional teams with clarity and ownership. I believe great products are born at the intersection of <b>user research, market understanding, and lean execution</b>
              </p>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                My goal? Build products that <i>empower users, drive engagement, and deliver measurable impact.</i>
              </p>
            </div>

            {/* Achievement Cards  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Award, title: 'Product Excellence Award', desc: '2023 Innovation Leader' },
                { icon: Heart, title: 'Team Favorite', desc: '95% Team Satisfaction' }
              ].map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotateY: -90 }}
                    animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: -90 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="p-4 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10"
                    style={{ transform: 'perspective(800px)' }}
                  >
                    <Icon className="text-orange-400 mb-2" size={20} />
                    <h4 className="text-white font-semibold text-sm sm:text-base">{achievement.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm">{achievement.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold text-sm sm:text-base"
              style={{ 
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
                transform: 'perspective(1000px)'
              }}
            >
              <Heart size={16} className="sm:w-5 sm:h-5" />
              <a href="/contact">Let's Connect</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
