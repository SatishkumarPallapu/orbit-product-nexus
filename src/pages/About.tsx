
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { About as AboutComponent } from '../components/About';

const About = () => {
  return (
    <div className="min-h-screen corporate-bg">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors pt-5"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>
      <AboutComponent />
    </div>
  );
};

export default About;
