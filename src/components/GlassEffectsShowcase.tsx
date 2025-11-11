import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Eye } from 'lucide-react';

export const GlassEffectsShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
        Glassmorphism Effects
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Modern glass-like UI components with blur and transparency
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Classic Glass Card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30" />
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Classic Glass</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              A beautiful glassmorphism effect with backdrop blur and subtle transparency. 
              Perfect for modern UI designs.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-sm font-medium text-foreground">
                Blur: 12px
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-sm font-medium text-foreground">
                Opacity: 10%
              </div>
            </div>
          </div>
        </motion.div>

        {/* Layered Glass */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/30 to-pink-500/30" />
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Layers className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Layered Glass</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Multiple layers of glass with varying opacity create depth and visual interest.
            </p>
            <div className="space-y-3">
              <div className="backdrop-blur-lg bg-white/10 p-4 rounded-2xl border border-white/10">
                <p className="text-sm text-foreground/80">Layer 1 - 10% opacity</p>
              </div>
              <div className="backdrop-blur-md bg-white/15 p-4 rounded-2xl border border-white/15 ml-4">
                <p className="text-sm text-foreground/80">Layer 2 - 15% opacity</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Frosted Glass */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
          <div className="relative backdrop-blur-2xl bg-white/15 border border-white/30 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Frosted Glass</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Heavy blur and higher opacity for a frosted window effect. Great for overlays and modals.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="px-4 py-3 rounded-xl bg-white/25 backdrop-blur-md text-sm font-medium text-foreground">
                Heavy Blur
              </div>
              <div className="px-4 py-3 rounded-xl bg-white/25 backdrop-blur-md text-sm font-medium text-foreground">
                15% Opacity
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Glass */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative overflow-hidden rounded-3xl group"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-teal-500/30 to-cyan-500/30" />
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl 
            hover:bg-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="text-white" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">Interactive Glass</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Hover to see the glass effect intensify. Perfect for interactive elements and cards.
            </p>
            <motion.div 
              className="mt-6 px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-center font-medium text-foreground
                group-hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hover Me!
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Glass Button Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 corporate-glass p-8 rounded-3xl border border-white/20"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
          Glass Buttons
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Primary', 'Secondary', 'Accent', 'Success'].map((variant, index) => (
            <motion.button
              key={variant}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20
                hover:bg-white/20 hover:border-white/30 transition-all duration-300
                text-foreground font-medium"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              {variant} Glass
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
