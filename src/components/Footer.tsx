import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Home, User, Briefcase, FolderOpen, Award, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Bento3DMapSection } from './Bento3DMapSection';

export const Footer = () => {
  const quickLinks = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Briefcase, label: 'Experience', path: '/experience' },
    { icon: FolderOpen, label: 'Projects', path: '/projects' },
    { icon: Award, label: 'Skills', path: '/skills' },
    { icon: Send, label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/venkateshpallapu-6b2b0a144/', color: 'from-blue-500 to-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/venkateshpallapu2122', color: 'from-gray-600 to-gray-700' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'from-sky-400 to-sky-500' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'venkateshpallapu999@gmail.com', href: 'mailto:venkateshpallapu999@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8074416697', href: 'tel:+918074416697' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
  ];

  return (
    <footer className="relative mt-20 py-12 px-4">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Navigation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group/link"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-white/10 group-hover/link:scale-110 transition-all duration-300">
                          <Icon size={16} />
                        </div>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full" />
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Bento 3D Travel Map */}
          <Bento3DMapSection />
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Venkatesh Pallapu. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Designed & Built with ❤️ using React & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
