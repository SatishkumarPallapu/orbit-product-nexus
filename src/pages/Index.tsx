import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { FloatingElements } from '../components/FloatingElements';
import { ScrollProgress } from '../components/ScrollProgress';
import { Link } from 'react-router-dom';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Floating orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 180, 90],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [180, 270, 180],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-5"
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements mousePosition={mousePosition} />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
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
            className="text-gray-600 flex flex-col items-center cursor-pointer hover:text-cyan-500 transition-colors"
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
