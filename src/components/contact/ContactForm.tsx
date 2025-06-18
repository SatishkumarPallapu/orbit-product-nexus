
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}${formData.company ? ` from ${formData.company}` : ''}.

Email: ${formData.email}

Message: ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = '+15551234567'; // Replace with your WhatsApp number
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
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
          <h3 className="text-3xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-white/60 text-sm mb-8">Your message will be sent via WhatsApp</p>
          
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
              className="w-full relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white font-semibold overflow-hidden disabled:opacity-50"
              style={{ 
                boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)',
                transform: 'perspective(1000px)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Sent to WhatsApp!
                  </>
                ) : (
                  <>
                    <MessageCircle size={20} />
                    Send via WhatsApp
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
  );
};
