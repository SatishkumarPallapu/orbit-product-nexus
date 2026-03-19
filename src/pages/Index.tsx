import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      <ScrollProgress />
      
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <Navigation />

      <main className="relative z-10">
        <Hero />
      </main>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Link to="/about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 flex flex-col items-center cursor-pointer hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs sm:text-sm mb-2">Explore More</span>
            <ChevronDown size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
