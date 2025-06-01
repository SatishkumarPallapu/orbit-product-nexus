
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';
import { FloatingElements } from '../components/FloatingElements';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Set initial window size
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-advance sections on mobile with touch gestures
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > swipeThreshold) {
        const sections = ['hero', 'about', 'projects', 'skills', 'process', 'contact'];
        const currentIndex = sections.indexOf(activeSection);
        
        if (diff > 0 && currentIndex < sections.length - 1) {
          // Swipe up - next section
          setActiveSection(sections[currentIndex + 1]);
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe down - previous section
          setActiveSection(sections[currentIndex - 1]);
        }
      }
    };

    if (windowSize.width <= 768) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeSection, windowSize.width]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 180, 90]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [180, 270, 180]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements mousePosition={mousePosition} />

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && <Hero key="hero" />}
          {activeSection === 'about' && <About key="about" />}
          {activeSection === 'projects' && <Projects key="projects" />}
          {activeSection === 'skills' && <Skills key="skills" />}
          {activeSection === 'process' && <Process key="process" />}
          {activeSection === 'contact' && <Contact key="contact" />}
        </AnimatePresence>
      </main>

      {/* Scroll Indicator */}
      {activeSection === 'hero' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 flex flex-col items-center cursor-pointer"
            onClick={() => setActiveSection('about')}
          >
            <span className="text-xs sm:text-sm mb-2">Explore</span>
            <ChevronDown size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      )}

      {/* Mobile swipe indicator */}
      {windowSize.width <= 768 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="fixed bottom-4 left-4 right-4 text-center text-white/40 text-xs z-40"
        >
          Swipe up/down to navigate sections
        </motion.div>
      )}
    </div>
  );
};

export default Index;
