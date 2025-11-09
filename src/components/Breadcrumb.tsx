import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const pathToName = (path: string) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  if (pathnames.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 left-4 right-4 md:left-8 md:right-auto z-40"
    >
      <motion.div
        className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Glass shine effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Home link */}
        <motion.div
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="relative z-10 flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 text-cyan-400 hover:bg-white/20 transition-all duration-300"
          >
            <Home size={14} />
          </Link>
        </motion.div>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              {/* Separator */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ChevronRight size={14} className="text-white/40" />
              </motion.div>

              {/* Breadcrumb item */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.1 }}
                whileHover={!isLast ? { scale: 1.05, y: -2 } : {}}
              >
                {isLast ? (
                  <span className="relative z-10 text-sm font-medium text-white px-2 py-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    {pathToName(name)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="relative z-10 text-sm text-white/70 hover:text-white px-2 py-1 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    {pathToName(name)}
                  </Link>
                )}
              </motion.div>
            </React.Fragment>
          );
        })}

        {/* 3D depth shadow */}
        <div 
          className="absolute inset-0 rounded-2xl bg-black/20 -z-10"
          style={{
            transform: 'translateZ(-10px) translateY(5px)',
            filter: 'blur(5px)',
          }}
        />
      </motion.div>
    </motion.nav>
  );
};
