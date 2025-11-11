
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skills as SkillsComponent } from '../components/Skills';
import { SkillsChart } from '../components/SkillsChart';
import { ToggleShowcase } from '../components/ToggleShowcase';
import { Icons3DShowcase } from '../components/Icons3DShowcase';
import { GlassEffectsShowcase } from '../components/GlassEffectsShowcase';
import { ParallaxSection } from '../components/ParallaxSection';

const Skills = () => {
  return (
    <div className="min-h-screen corporate-bg">
      <div className="px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>
      
      <ParallaxSection speed="slow">
        <SkillsComponent />
      </ParallaxSection>
      
      <ParallaxSection speed="medium">
        <SkillsChart />
      </ParallaxSection>

      <div className="py-12">
        <ParallaxSection speed="fast">
          <ToggleShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="slow">
          <Icons3DShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="medium">
          <GlassEffectsShowcase />
        </ParallaxSection>
      </div>
    </div>
  );
};

export default Skills;
