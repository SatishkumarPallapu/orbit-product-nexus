
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Mail, 
  ArrowRight,
  Code,
  BarChart3,
  Users,
  Lightbulb,
  ChevronDown
} from 'lucide-react';
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = ['hero', 'about', 'projects', 'skills', 'process', 'contact'];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 flex flex-col items-center cursor-pointer"
            onClick={() => setActiveSection('about')}
          >
            <span className="text-sm mb-2">Explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
