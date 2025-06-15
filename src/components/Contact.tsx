
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@productmanager.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'from-sky-400 to-sky-600' },
    { icon: Github, label: 'GitHub', href: '#', color: 'from-gray-700 to-gray-900' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex lg:items-start justify-start px-4 pb-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your product vision into reality? Let's discuss your next big idea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotateY: 5 }}
              className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
              style={{ 
                transform: 'perspective(1000px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-white/80 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors backdrop-blur-md"
                        placeholder="Your name"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="block text-white/80 font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors backdrop-blur-md"
                        placeholder="Company name"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-white/80 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors backdrop-blur-md"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    <label className="block text-white/80 font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors backdrop-blur-md resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </motion.div>
                  
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full relative px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl text-white font-semibold overflow-hidden disabled:opacity-50"
                    style={{ 
                      boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)',
                      transform: 'perspective(1000px)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitted ? (
                        <>
                          <CheckCircle size={20} />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </span>
                    
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                    whileHover={{ 
                      rotateY: 10, 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="relative p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 cursor-pointer group"
                    style={{ 
                      transform: 'perspective(1000px)',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          rotateZ: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${method.color}`}
                        style={{ 
                          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                          transform: 'perspective(800px) rotateX(10deg)'
                        }}
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white">{method.label}</h4>
                        <p className="text-white/70">{method.value}</p>
                      </div>
                      
                      <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors ml-auto" size={20} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
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

            {/* Call to Action */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.0 }}
              className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-white/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h4>
              <p className="text-white/70 mb-4">
                Let's schedule a free consultation to discuss your product goals and how I can help achieve them.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
