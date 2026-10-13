import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    
    // Update body background
    document.body.style.background = 'hsl(var(--background))';
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-20 z-[60] flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-border bg-card/90 shadow-lg backdrop-blur-xl group md:right-6 md:top-6 md:h-12 md:w-12"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />

      {/* Icons */}
      <motion.div
        className="relative"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-foreground relative z-10" />
        ) : (
          <Sun className="w-5 h-5 text-foreground relative z-10" />
        )}
      </motion.div>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-primary/30 rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};
