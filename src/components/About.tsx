
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Heart } from 'lucide-react';

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Passionate about bridging the gap between user needs and business objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div 
              className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
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
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center text-6xl font-bold text-white relative overflow-hidden">
                  AR
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                  />
                </div>
              </motion.div>

              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-white">Alex Rodriguez</h3>
                <p className="text-blue-300 text-lg">Senior Product Manager</p>
                
                <div className="flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>8+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                With over 8 years of experience in product management, I've led cross-functional teams 
                to launch 50+ successful products that have generated millions in revenue and delighted 
                users worldwide.
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed">
                I specialize in transforming complex business challenges into elegant product solutions 
                through data-driven insights, user research, and agile methodologies.
              </p>
            </div>

            {/* Achievement Cards */}
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
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
                    style={{ transform: 'perspective(800px)' }}
                  >
                    <Icon className="text-orange-400 mb-2" size={24} />
                    <h4 className="text-white font-semibold">{achievement.title}</h4>
                    <p className="text-white/60 text-sm">{achievement.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold"
              style={{ 
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
                transform: 'perspective(1000px)'
              }}
            >
              <Heart size={20} />
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
