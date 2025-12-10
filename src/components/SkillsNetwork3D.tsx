import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, BarChart3, Users, Lightbulb, Code, TrendingUp, Zap, Brain,
  GitBranch, LineChart, Layers, Network, Compass, PieChart, Activity,
  Rocket, Shield, Eye, Cpu, Workflow, Gauge
} from 'lucide-react';

interface Node3D {
  id: number;
  name: string;
  level: number;
  color: { r: number; g: number; b: number };
  category: string;
  description: string;
  x: number;
  y: number;
  z: number;
}

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export const SkillsNetwork3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef({ rotationX: 0, rotationY: 0 });

  // 3D Nodes positioned in 3D space
  const nodes3D: Node3D[] = useMemo(() => [
    // Core (center)
    { id: 0, name: 'Product Strategy', level: 98, color: { r: 34, g: 211, b: 238 }, category: 'Core Frameworks', description: 'Vision, roadmap planning, competitive positioning, market entry strategies', x: 0, y: 0, z: 0 },
    
    // Discovery (front-left)
    { id: 1, name: 'Jobs to be Done', level: 94, color: { r: 16, g: 185, b: 129 }, category: 'Discovery', description: 'Understanding customer progress desired, functional/emotional/social jobs', x: -150, y: -80, z: 100 },
    { id: 2, name: 'User Research', level: 93, color: { r: 20, g: 184, b: 166 }, category: 'Discovery', description: 'Qualitative & quantitative research, user interviews, surveys, ethnography', x: -100, y: -120, z: 80 },
    { id: 3, name: 'Market Sizing', level: 91, color: { r: 34, g: 211, b: 238 }, category: 'Discovery', description: 'TAM/SAM/SOM analysis, market opportunity identification, segment analysis', x: 0, y: -150, z: 120 },
    
    // Analytics (front-right)
    { id: 4, name: 'Metrics & OKRs', level: 96, color: { r: 147, g: 51, b: 234 }, category: 'Analytics', description: 'KPI definition, OKR framework, goal setting, success metrics', x: 100, y: -120, z: 100 },
    { id: 5, name: 'Data Analytics', level: 94, color: { r: 99, g: 102, b: 241 }, category: 'Analytics', description: 'SQL, A/B testing, cohort analysis, dashboards, statistical thinking', x: 150, y: -80, z: 80 },
    { id: 6, name: 'Experimentation', level: 92, color: { r: 139, g: 92, b: 246 }, category: 'Analytics', description: 'Hypothesis testing, experiment design, MVPs, rapid iteration cycles', x: 180, y: 0, z: 50 },
    
    // Design (right)
    { id: 7, name: 'Design Thinking', level: 90, color: { r: 236, g: 72, b: 153 }, category: 'Design', description: 'Empathy, ideation, prototyping, iterative design, user-centric approach', x: 150, y: 80, z: 100 },
    { id: 8, name: 'Prioritization Matrix', level: 97, color: { r: 249, g: 115, b: 22 }, category: 'Design', description: 'RICE scoring, MoSCoW, Kano model, impact vs effort, roadmap sequencing', x: 0, y: 150, z: 120 },
    { id: 9, name: 'Information Architecture', level: 89, color: { r: 251, g: 146, b: 60 }, category: 'Design', description: 'IA design, navigation flows, taxonomy, wireframing, user journey mapping', x: -100, y: 120, z: 100 },
    
    // Growth (back-right)
    { id: 10, name: 'Growth Loops', level: 92, color: { r: 34, g: 197, b: 94 }, category: 'Growth', description: 'Acquisition, activation, retention loops, viral mechanics, network effects', x: 150, y: 80, z: -80 },
    { id: 11, name: 'Go-to-Market', level: 91, color: { r: 234, g: 179, b: 8 }, category: 'Growth', description: 'Launch strategy, positioning, pricing, channel selection, customer segments', x: 100, y: 120, z: -100 },
    { id: 12, name: 'Monetization', level: 88, color: { r: 239, g: 68, b: 68 }, category: 'Growth', description: 'Pricing strategy, revenue models, unit economics, LTV/CAC optimization', x: 120, y: 60, z: -120 },
    
    // Leadership (back-left)
    { id: 13, name: 'Agile/Scrum', level: 95, color: { r: 239, g: 68, b: 68 }, category: 'Leadership', description: 'Sprint planning, story mapping, velocity tracking, iterative delivery', x: -150, y: 100, z: -80 },
    { id: 14, name: 'Stakeholder Mgmt', level: 96, color: { r: 236, g: 72, b: 153 }, category: 'Leadership', description: 'Cross-functional alignment, negotiation, influence, requirement gathering', x: -180, y: 0, z: -100 },
    { id: 15, name: 'Communication', level: 97, color: { r: 168, g: 85, b: 247 }, category: 'Leadership', description: 'Storytelling, presentations, documentation, product narrative, alignment', x: -100, y: -80, z: -120 },
    
    // Technical
    { id: 16, name: 'Technical Fluency', level: 90, color: { r: 100, g: 116, b: 139 }, category: 'Technical', description: 'System design, API architecture, database concepts, technical trade-offs', x: -80, y: 0, z: 80 },
    
    // Advanced
    { id: 17, name: 'SaaS Metrics', level: 91, color: { r: 37, g: 99, b: 235 }, category: 'Advanced', description: 'MRR/ARR, churn rate, NPS, CAC payback period, expansion revenue', x: 100, y: -60, z: -80 },
    { id: 18, name: 'Jobs Theory', level: 93, color: { r: 79, g: 70, b: 229 }, category: 'Advanced', description: 'Clayton Christensen\'s Jobs to be Done framework, customer progress', x: -80, y: -60, z: 120 },
  ], []);

  // Connections between nodes (meaningful relationships)
  const connections = useMemo(() => [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9],
    [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18],
    [1, 18], [1, 2], [2, 3], [18, 1],
    [4, 5], [5, 6], [4, 6], [4, 17],
    [7, 8], [8, 9], [7, 9],
    [10, 11], [11, 12], [10, 12],
    [13, 14], [14, 15], [13, 15],
    [2, 4], [3, 4], [5, 8], [6, 8], [8, 10], [4, 10], [16, 7],
    [15, 1], [15, 7], [15, 10], [16, 4], [16, 6],
    [17, 5], [17, 6], [18, 2], [18, 15],
  ], []);

  // Matrix multiplication for 3D transformation
  const multiply3D = (v: Vector3, rotX: number, rotY: number): Vector3 => {
    let x = v.x;
    let y = v.y;
    let z = v.z;

    // Rotate around X axis
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const tempY = y * cosX - z * sinX;
    const tempZ = y * sinX + z * cosX;
    y = tempY;
    z = tempZ;

    // Rotate around Y axis
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const tempX = x * cosY + z * sinY;
    const tempZ2 = -x * sinY + z * cosY;
    x = tempX;
    z = tempZ2;

    return { x, y, z };
  };

  // Perspective projection
  const project3D = (v: Vector3, width: number, height: number): { x: number; y: number; z: number } => {
    const scale = 500 / (500 + v.z);
    return {
      x: width / 2 + v.x * scale,
      y: height / 2 + v.y * scale,
      z: v.z,
    };
  };

  // Render 3D scene
  useEffect(() => {
    if (!canvasRef.current || !isInView) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const nodesData = nodes3D;
    const connectionsData = connections;

    // Animation loop
    const animate = () => {
      // Smooth rotation towards mouse position
      animationRef.current.rotationY += (mousePos.x * 0.005 - animationRef.current.rotationY) * 0.1;
      animationRef.current.rotationX += (mousePos.y * 0.005 - animationRef.current.rotationX) * 0.1;

      // Auto-rotation when not interacting
      if (Math.abs(mousePos.x - width / 2) < 50 && Math.abs(mousePos.y - height / 2) < 50) {
        animationRef.current.rotationY += 0.001;
      }

      // Clear canvas
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, 0, width, height);

      // Draw background gradient
      const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
      bgGradient.addColorStop(0, 'rgba(34, 211, 238, 0.05)');
      bgGradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Transform and project all nodes
      const projectedNodes = nodesData.map((node) => {
        const rotated = multiply3D(
          { x: node.x, y: node.y, z: node.z },
          animationRef.current.rotationX,
          animationRef.current.rotationY
        );
        const projected = project3D(rotated, width, height);
        return { ...node, ...projected };
      });

      // Sort by Z for depth (painter's algorithm)
      const sortedIndices = projectedNodes
        .map((_, i) => i)
        .sort((a, b) => projectedNodes[a].z - projectedNodes[b].z);

      // Draw connections first (back layer)
      connectionsData.forEach(([from, to]) => {
        const fromNode = projectedNodes[from];
        const toNode = projectedNodes[to];

        const isActive = hoveredNode === from || hoveredNode === to || selectedNode === from || selectedNode === to;
        const opacity = isActive ? 0.8 : 0.15;
        const width = isActive ? 2.5 : 1;

        // Calculate depth for opacity
        const avgZ = (fromNode.z + toNode.z) / 2;
        const depthOpacity = Math.max(0.05, (avgZ + 200) / 400);

        // Gradient line
        const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        gradient.addColorStop(0, `rgba(${Math.round(nodesData[from].color.r)}, ${Math.round(nodesData[from].color.g)}, ${Math.round(nodesData[from].color.b)}, ${opacity * depthOpacity})`);
        gradient.addColorStop(1, `rgba(${Math.round(nodesData[to].color.r)}, ${Math.round(nodesData[to].color.g)}, ${Math.round(nodesData[to].color.b)}, ${opacity * depthOpacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();

        // Glow effect for active connections
        if (isActive) {
          ctx.shadowColor = `rgba(${nodesData[from].color.r}, ${nodesData[from].color.g}, ${nodesData[from].color.b}, 0.6)`;
          ctx.shadowBlur = 15;
          ctx.stroke();
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
      });

      // Draw nodes
      sortedIndices.forEach((idx) => {
        const node = projectedNodes[idx];
        const isHovered = hoveredNode === idx;
        const isSelected = selectedNode === idx;

        const baseSize = 20;
        const size = isHovered ? baseSize * 1.5 : isSelected ? baseSize * 1.3 : baseSize;
        const depthScale = Math.max(0.5, (node.z + 200) / 400);
        const finalSize = size * depthScale;

        // Draw glow
        if (isHovered || isSelected) {
          ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0.3)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw node
        const gradient = ctx.createRadialGradient(node.x - finalSize / 3, node.y - finalSize / 3, 0, node.x, node.y, finalSize);
        gradient.addColorStop(0, `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 1)`);
        gradient.addColorStop(1, `rgba(${Math.round(node.color.r * 0.7)}, ${Math.round(node.color.g * 0.7)}, ${Math.round(node.color.b * 0.7)}, 0.8)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        ctx.fill();

        // Border
        ctx.strokeStyle = `rgba(248, 250, 252, ${isHovered || isSelected ? 0.9 : 0.4})`;
        ctx.lineWidth = isHovered || isSelected ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        ctx.stroke();

        // Skill level badge
        if (finalSize > 8) {
          ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0.9)`;
          ctx.beginPath();
          ctx.arc(node.x + finalSize * 0.6, node.y + finalSize * 0.6, finalSize * 0.4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'white';
          ctx.font = `bold ${Math.round(finalSize * 0.5)}px Inter`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${node.level}`, node.x + finalSize * 0.6, node.y + finalSize * 0.6);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [isInView, mousePos, hoveredNode, selectedNode, nodes3D, connections]);

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Get hovered node
  const handleMouseOver = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Simple distance-based hit detection (would need projection for accuracy)
    let closestNode = -1;
    let minDist = 40;

    nodes3D.forEach((node, idx) => {
      // Rough approximation - would need actual projection
      const projX = canvasRef.current!.width / 2 + node.x * 0.3;
      const projY = canvasRef.current!.height / 2 + node.y * 0.3;
      const dist = Math.hypot(projX - mouseX, projY - mouseY);
      if (dist < minDist) {
        minDist = dist;
        closestNode = idx;
      }
    });

    setHoveredNode(closestNode === -1 ? null : closestNode);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="w-full max-w-7xl mx-auto px-4 py-16"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          3D PM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Competency Network</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Interactive 3D visualization of interconnected PM competencies. Rotate, explore, and discover how product manager skills form a complete ecosystem. Move your mouse to rotate the network.
        </p>
      </motion.div>

      {/* 3D Canvas */}
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl">
        <canvas
          ref={canvasRef}
          width={900}
          height={700}
          className="w-full bg-background cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseOver}
          onClick={(e) => {
            // Simple click handling (would need proper projection)
            handleMouseOver(e);
          }}
        />
        
        {/* Loading indicator */}
        {!isInView && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent mx-auto mb-3" />
              <p className="text-muted-foreground">Loading 3D network...</p>
            </div>
          </div>
        )}
      </div>

      {/* Info Panel */}
      {hoveredNode !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-8 max-w-2xl mx-auto p-6 bg-card border border-border rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg"
              style={{
                background: `linear-gradient(135deg, rgb(${nodes3D[hoveredNode].color.r}, ${nodes3D[hoveredNode].color.g}, ${nodes3D[hoveredNode].color.b}), rgb(${Math.round(nodes3D[hoveredNode].color.r * 0.7)}, ${Math.round(nodes3D[hoveredNode].color.g * 0.7)}, ${Math.round(nodes3D[hoveredNode].color.b * 0.7)}))`,
              }}
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">{nodes3D[hoveredNode].name}</h3>
              <p className="text-sm text-primary mb-2">{nodes3D[hoveredNode].category}</p>
              <p className="text-sm text-muted-foreground mb-3">{nodes3D[hoveredNode].description}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${nodes3D[hoveredNode].level}%`,
                      background: `linear-gradient(90deg, rgb(${nodes3D[hoveredNode].color.r}, ${nodes3D[hoveredNode].color.g}, ${nodes3D[hoveredNode].color.b}), rgb(${Math.round(nodes3D[hoveredNode].color.r * 1.2)}, ${Math.round(nodes3D[hoveredNode].color.g * 1.2)}, ${Math.round(nodes3D[hoveredNode].color.b * 1.2)}))`,
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{nodes3D[hoveredNode].level}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 text-center text-muted-foreground text-sm"
      >
        <p>💡 Move your mouse to rotate • Explore the interconnected PM ecosystem in 3D</p>
      </motion.div>
    </motion.div>
  );
};

export default SkillsNetwork3D;
