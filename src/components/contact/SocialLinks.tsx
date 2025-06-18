
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'from-sky-400 to-sky-600' },
    { icon: Github, label: 'GitHub', href: '#', color: 'from-gray-700 to-gray-900' }
  ];

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="space-y-4"
    >
      <h4 className="text-xl font-semibold text-white">Follow Me</h4>
      <div className="flex gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          
          return (
            <motion.a
              key={index}
              href={social.href}
              initial={{ scale: 0, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${social.color} text-white`}
              style={{ 
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                transform: 'perspective(800px)'
              }}
            >
              <Icon size={24} />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};
