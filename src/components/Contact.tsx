
import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './contact/ContactForm';
import { ContactMethods } from './contact/ContactMethods';
import { SocialLinks } from './contact/SocialLinks';
import { CallToAction } from './contact/CallToAction';

export const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex lg:items-start justify-start px-4 pb-4 corporate-bg"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-corporate-primary mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">Connect</span>
          </h2>
          <p className="text-xl text-corporate-secondary max-w-3xl mx-auto">
            Ready to transform your product vision into reality? Let's discuss your next big idea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <ContactMethods />

            {/* Social Links */}
            <SocialLinks />

            {/* Call to Action */}
            <CallToAction />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
