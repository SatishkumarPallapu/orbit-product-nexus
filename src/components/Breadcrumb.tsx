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
      className="absolute top-20 left-4 right-4 z-40 md:left-8 md:right-auto"
    >
      <motion.div
        className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl"
        style={{
          background: 'hsl(var(--card) / 0.92)',
          backdropFilter: 'blur(16px)',
          border: '1px solid hsl(var(--border))',
          boxShadow: '0 8px 24px hsl(var(--background) / 0.16)',
        }}
      >
        {/* Home link */}
        <motion.div
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/15"
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
                <ChevronRight size={14} className="text-muted-foreground" />
              </motion.div>

              {/* Breadcrumb item */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.1 }}
                whileHover={!isLast ? { scale: 1.05, y: -2 } : {}}
              >
                {isLast ? (
                  <span className="relative z-10 rounded-lg bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                    {pathToName(name)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="relative z-10 rounded-lg px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {pathToName(name)}
                  </Link>
                )}
              </motion.div>
            </React.Fragment>
          );
        })}

      </motion.div>
    </motion.nav>
  );
};
