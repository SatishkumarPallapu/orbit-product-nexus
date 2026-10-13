
import { AboutStaggered } from '../components/AboutStaggered';
import { ToggleShowcase } from '../components/ToggleShowcase';
import { Icons3DShowcase } from '../components/Icons3DShowcase';
import { GlassEffectsShowcase } from '../components/GlassEffectsShowcase';
import { StatsCounter } from '../components/StatsCounter';
import { ParallaxSection } from '../components/ParallaxSection';

const About = () => {
  return (
    <div className="min-h-screen corporate-bg">
      <div className="max-w-7xl mx-auto px-4">
        <AboutStaggered />
        
        {/* <StatsCounter /> */}
      </div>

      <div className="py-12">
        {/* <ParallaxSection speed="medium">
          <GlassEffectsShowcase />
        </ParallaxSection> */}
        
        {/* <ParallaxSection speed="fast">
          <Icons3DShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="slow">
          <ToggleShowcase />
        </ParallaxSection> */}
      </div>
    </div>
  );
};

export default About;
