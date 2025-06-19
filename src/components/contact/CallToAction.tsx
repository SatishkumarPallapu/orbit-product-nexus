
import React from 'react';
import { motion } from 'framer-motion';

export const CallToAction = () => {
  return (
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
  );
};
