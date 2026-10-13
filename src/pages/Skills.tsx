
import { Skills as SkillsComponent } from '../components/Skills';
import { SkillsChart } from '../components/SkillsChart';
import { SkillsNetwork3D } from '../components/SkillsNetwork3D';
import { ParallaxSection } from '../components/ParallaxSection';

const Skills = () => {
  return (
    <div className="min-h-screen corporate-bg">
      <ParallaxSection speed="slow">
        <SkillsComponent />
      </ParallaxSection>
      
      <ParallaxSection speed="medium">
        <SkillsChart />
      </ParallaxSection>

      <ParallaxSection speed="slow">
        <SkillsNetwork3D />
      </ParallaxSection>

      {/* <div className="py-12">
        <ParallexSection speed="fast">
          <ToggleShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="slow">
          <Icons3DShowcase />
        </ParallaxSection>
        
        <ParallaxSection speed="medium">
          <GlassEffectsShowcase />
        </ParallaxSection>
      </div> */}
    </div>
  );
};

export default Skills;
