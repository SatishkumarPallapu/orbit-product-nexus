import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface Section {
  id: string;
  label: string;
  path: string;
}

const sections: Section[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'certifications', label: 'Certifications', path: '/certifications' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const FloatingNavigator: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentIndex = sections.findIndex(s => s.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveSection(currentIndex);
    }

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 100 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavigate = (index: number) => {
    setActiveSection(index);
    navigate(sections[index].path);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          <div className="relative bg-background/80 backdrop-blur-lg border border-border rounded-full p-2 shadow-lg">
            <motion.div
              className="absolute w-10 h-10 bg-primary/20 rounded-full"
              animate={{ 
                y: activeSection * 48 + 4,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
            />
            
            <div className="relative space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleNavigate(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors group ${
                    activeSection === index 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label={`Navigate to ${section.label}`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                  
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-4 px-3 py-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg text-sm font-medium text-foreground whitespace-nowrap pointer-events-none"
                  >
                    {section.label}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
