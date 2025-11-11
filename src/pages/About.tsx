
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { About as AboutComponent } from '../components/About';
import { ToggleShowcase } from '../components/ToggleShowcase';
import { Icons3DShowcase } from '../components/Icons3DShowcase';
import { GlassEffectsShowcase } from '../components/GlassEffectsShowcase';
import { ParallaxSection } from '../components/ParallaxSection';

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
      
      <ParallaxSection speed="slow">
        <AboutComponent />
      </ParallaxSection>

      <div className="py-12">
        <ParallaxSection speed="medium">
          <GlassEffectsShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="fast">
          <Icons3DShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="slow">
          <ToggleShowcase />
        </ParallaxSection>
      </div>
    </div>
  );
};

export default About;
