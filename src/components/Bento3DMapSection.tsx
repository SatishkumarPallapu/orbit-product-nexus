import React, { useRef, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, BookOpen, Grid3X3, TrendingUp, Users, Target, Lightbulb } from 'lucide-react';
import Map, { Marker, Popup, GeolocateControl, FullscreenControl } from 'react-map-gl';
import type { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Loading skeleton for the map
const MapLoadingPlaceholder = () => (
  <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-2 border-amber-400 border-t-transparent mx-auto mb-3" />
      <p className="text-white/70 text-sm">Loading map...</p>
    </div>
  </div>
);

// PM Theories & Frameworks Data
const pmFrameworks = [
  {
    id: 1,
    name: 'SWOT Analysis',
    icon: '📊',
    description: 'Strengths, Weaknesses, Opportunities, Threats - Strategic analysis framework',
    category: 'Strategic',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'PESTEL',
    icon: '🌍',
    description: 'Political, Economic, Social, Technological, Environmental, Legal factors',
    category: 'Environmental',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'Jobs Theory',
    icon: '🎯',
    description: 'Clayton Christensen - Understanding what jobs customers want done',
    category: 'Discovery',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    name: 'OKR Framework',
    icon: '🎪',
    description: 'Objectives & Key Results - Goal setting and alignment',
    category: 'Execution',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    name: 'Kano Model',
    icon: '📈',
    description: 'Basic, Performance, and Delighter features categorization',
    category: 'Prioritization',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    name: 'Product Roadmap',
    icon: '🗺️',
    description: 'Now-Next-Later roadmap for product planning',
    category: 'Planning',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 7,
    name: 'Value Chain',
    icon: '🔗',
    description: 'Michael Porter - Primary and support activities analysis',
    category: 'Strategic',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 8,
    name: 'Design Thinking',
    icon: '💡',
    description: 'Empathize, Define, Ideate, Prototype, Test methodology',
    category: 'Innovation',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 9,
    name: 'Lean Canvas',
    icon: '📋',
    description: 'One-page business model canvas for MVPs and startups',
    category: 'Planning',
    color: 'from-fuchsia-500 to-purple-500'
  },
  {
    id: 10,
    name: 'Growth Loops',
    icon: '🔄',
    description: 'Viral, Referral, and Retention loops for scaling',
    category: 'Growth',
    color: 'from-lime-500 to-green-500'
  },
  {
    id: 11,
    name: 'RICE Scoring',
    icon: '🍚',
    description: 'Reach, Impact, Confidence, Effort - prioritization framework',
    category: 'Prioritization',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 12,
    name: 'MoSCoW Method',
    icon: '🏰',
    description: 'Must, Should, Could, Wont - prioritization approach',
    category: 'Prioritization',
    color: 'from-violet-500 to-indigo-500'
  },
];

// Roadmap Types
const roadmapTypes = [
  { name: 'Now-Next-Later', icon: '⏰', desc: 'Timeline-based roadmap' },
  { name: 'Theme-Based', icon: '🎭', desc: 'Feature grouping by theme' },
  { name: 'Goal-Based', icon: '🎯', desc: 'OKR-aligned roadmap' },
  { name: 'Technical', icon: '⚙️', desc: 'Tech debt & infrastructure' },
  { name: 'Swimlane', icon: '🏊', desc: 'Cross-team dependencies' },
  { name: 'Kanban', icon: '📊', desc: 'Continuous delivery flow' },
];

interface Location {
  id: number;
  name: string;
  subtitle: string;
  longitude: number;
  latitude: number;
  color: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Bangalore',
    subtitle: 'My Home City - Tech Capital',
    longitude: 77.5946,
    latitude: 12.9716,
    color: '#F59E0B'
  },
  {
    id: 2,
    name: 'Mumbai',
    subtitle: 'Financial Capital',
    longitude: 72.8777,
    latitude: 19.0760,
    color: '#8B5CF6'
  },
  {
    id: 3,
    name: 'Delhi',
    subtitle: 'National Capital',
    longitude: 77.1025,
    latitude: 28.7041,
    color: '#EC4899'
  },
  {
    id: 4,
    name: 'Chennai',
    subtitle: 'Cultural Hub',
    longitude: 80.2707,
    latitude: 13.0827,
    color: '#10B981'
  },
  {
    id: 5,
    name: 'Hyderabad',
    subtitle: 'Tech & History',
    longitude: 78.4867,
    latitude: 17.3850,
    color: '#3B82F6'
  },
  {
    id: 6,
    name: 'Kolkata',
    subtitle: 'City of Joy',
    longitude: 88.3639,
    latitude: 22.5726,
    color: '#EF4444'
  },
  {
    id: 7,
    name: 'Pune',
    subtitle: 'Oxford of the East',
    longitude: 73.8567,
    latitude: 18.5204,
    color: '#06B6D4'
  },
  {
    id: 8,
    name: 'Ahmedabad',
    subtitle: 'Manchester of India',
    longitude: 72.5714,
    latitude: 23.0225,
    color: '#84CC16'
  },
  {
    id: 9,
    name: 'Jaipur',
    subtitle: 'Pink City',
    longitude: 75.7873,
    latitude: 26.9124,
    color: '#F472B6'
  },
  {
    id: 10,
    name: 'Kochi',
    subtitle: 'Queen of Arabian Sea',
    longitude: 76.2673,
    latitude: 9.9312,
    color: '#A855F7'
  }
];

// Optimized marker component - reduced animation complexity
const CustomMarker = ({ location, isMain, onClick }: { location: Location; isMain: boolean; onClick: () => void }) => {
  const size = isMain ? 48 : 28;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {/* Glow background for main location - CSS animation */}
      {isMain && (
        <div
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            left: '-16px',
            top: '-16px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse-marker 2s infinite',
            willChange: 'transform'
          }}
        />
      )}
      
      {/* Main marker */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: location.color,
          borderRadius: '50%',
          border: isMain ? '4px solid white' : '3px solid white',
          boxShadow: isMain 
            ? `0 4px 15px rgba(0,0,0,0.4), 0 0 30px ${location.color}80, 0 0 50px ${location.color}40`
            : `0 2px 10px rgba(0,0,0,0.3), 0 0 15px ${location.color}60`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMain ? '20px' : '14px',
          fontWeight: 'bold',
          color: 'white',
          transition: 'all 0.3s ease',
          animation: isMain ? 'pulse-marker-core 2s infinite' : 'none',
          willChange: isMain ? 'transform' : 'auto'
        }}
        className="marker hover:scale-125"
      >
        {isMain ? '📍' : ''}
      </div>
    </div>
  );
};

// Optimized lightweight plane overlay - minimal SVG, CSS-based animations
const AnimatedPlaneOverlay = () => {
  return (
    <motion.div className="absolute inset-0 z-[500] pointer-events-none overflow-hidden">
      {/* Main animated plane at Bangalore center - simplified */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-[500] transform -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      >
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center relative"
          style={{ 
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            boxShadow: '0 8px 30px rgba(245, 158, 11, 0.6)',
          }}
        >
          <Plane size={48} className="text-white" strokeWidth={1.5} />
          
          {/* Optimized pulse ring effect - CSS only */}
          <div
            className="absolute inset-0 rounded-full border-2 border-amber-300"
            style={{
              animation: 'pulse-ring 2s infinite',
            }}
          />
        </div>
      </motion.div>

      {/* Lightweight flight particles - reduced count */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-amber-400"
          style={{
            left: '50%',
            top: '50%',
            boxShadow: '0 0 8px rgba(245, 158, 11, 0.8)',
            willChange: 'transform, opacity'
          }}
          animate={{
            x: Math.cos((i / 2) * Math.PI * 2) * 40,
            y: Math.sin((i / 2) * Math.PI * 2) * 40,
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

// Flight Path Component with animated particles
const FlightPaths = ({ particles }: { particles: { lat: number; lng: number }[] }) => {
  // No longer needed for Mapbox, but keeping for interface compatibility
  return null;
};

// Animated Particles along flight paths
const AnimatedParticles = () => {
  // No longer needed for Mapbox, but keeping for interface compatibility
  return null;
};

// Map click handler component
const MapController = ({ onLocationClick }: { onLocationClick: (location: Location) => void }) => {
  // No longer needed for Mapbox, but keeping for interface compatibility
  return null;
};

export const Bento3DMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<number | null>(null);
  const [activeRoadmapType, setActiveRoadmapType] = useState<string>('Now-Next-Later');
  const mapRef = useRef<MapRef>(null);
  const [viewState, setViewState] = useState({
    longitude: 77.5946,
    latitude: 12.9716,
    zoom: 12,
    pitch: 60,
    bearing: 45,
  });

  // Get Mapbox token from environment variables or use a placeholder
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative group"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <style>{`
        @keyframes pulse-marker {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 0.3; }
        }
        @keyframes pulse-marker-core {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .mapboxgl-popup-content {
          background: rgba(17, 24, 39, 0.95) !important;
          color: white !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 8px !important;
          padding: 12px !important;
        }
        .mapboxgl-popup-close-button {
          color: white !important;
        }
        .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
          border-bottom-color: rgba(17, 24, 39, 0.95) !important;
        }
        .mapboxgl-ctrl-attrib {
          display: none !important;
        }
        .mapboxgl-ctrl-logo {
          display: none !important;
        }
        .mapbox-improve-map {
          display: none !important;
        }
        .map-container-wrapper {
          position: relative;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
        }
      `}</style>
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div 
        className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(20px)',
        }}
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
          <MapPin className="w-5 h-5 text-amber-400" />
          India Map - Base Location
        </h3>

        {/* PM Frameworks & Theories Tabs */}
        {/* <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-card/50 border border-border/50 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-primary" />
            <p className="text-xs font-semibold text-muted-foreground">PM FRAMEWORKS & THEORIES</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {pmFrameworks.map((fw) => (
              <motion.button
                key={fw.id}
                onClick={() => setSelectedFramework(selectedFramework === fw.id ? null : fw.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-all text-center text-xs font-medium ${
                  selectedFramework === fw.id
                    ? `bg-gradient-to-br ${fw.color} text-white shadow-lg`
                    : 'bg-muted/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="text-lg mb-1">{fw.icon}</div>
                <div className="line-clamp-1 text-[10px]">{fw.name}</div>
              </motion.button>
            ))}
          </div>
        </motion.div> */}

        {/* Roadmap Types */}
        {/* <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-card/50 border border-border/50 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-primary" />
            <p className="text-xs font-semibold text-muted-foreground">ROADMAP TYPES</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {roadmapTypes.map((rm) => (
              <motion.button
                key={rm.name}
                onClick={() => setActiveRoadmapType(activeRoadmapType === rm.name ? '' : rm.name)}
                whileHover={{ scale: 1.05 }}
                className={`p-2 rounded-lg transition-all text-center text-xs font-medium ${
                  activeRoadmapType === rm.name
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="text-lg mb-1">{rm.icon}</div>
                <div className="line-clamp-1 text-[10px]">{rm.name}</div>
              </motion.button>
            ))}
          </div>
        </motion.div> */}

        {/* Framework Details Panel */}
        {/* {selectedFramework !== null && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-6 p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg"
          >
            {pmFrameworks.find(fw => fw.id === selectedFramework) && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{pmFrameworks.find(fw => fw.id === selectedFramework)?.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{pmFrameworks.find(fw => fw.id === selectedFramework)?.name}</h4>
                      <p className="text-xs text-blue-300">{pmFrameworks.find(fw => fw.id === selectedFramework)?.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedFramework(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-white/80">{pmFrameworks.find(fw => fw.id === selectedFramework)?.description}</p>
              </div>
            )}
          </motion.div>
        )} */}

        {/* Roadmap Description Panel */}
        {/* {activeRoadmapType && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-6 p-4 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-lg"
          >
            {roadmapTypes.find(rm => rm.name === activeRoadmapType) && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{roadmapTypes.find(rm => rm.name === activeRoadmapType)?.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{roadmapTypes.find(rm => rm.name === activeRoadmapType)?.name}</h4>
                      <p className="text-xs text-cyan-300">Roadmap Type</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveRoadmapType('')}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-white/80">{roadmapTypes.find(rm => rm.name === activeRoadmapType)?.desc}</p>
              </div>
            )}
          </motion.div>
        )} */}
        
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg map-container-wrapper">
          {/* Mapbox Map */}
          <Map
            ref={mapRef}
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            attributionControl={false}
            reuseMaps
          >
            {/* Marker for Bangalore */}
            <Marker
              longitude={locations[0].longitude}
              latitude={locations[0].latitude}
              anchor="bottom"
            >
              <CustomMarker 
                location={locations[0]} 
                isMain={true}
                onClick={() => setSelectedLocation(locations[0])}
              />
            </Marker>

            {/* Markers for other cities */}
            {locations.slice(1).map((location) => (
              <Marker
                key={location.id}
                longitude={location.longitude}
                latitude={location.latitude}
                anchor="bottom"
              >
                <CustomMarker 
                  location={location} 
                  isMain={false}
                  onClick={() => setSelectedLocation(location)}
                />
              </Marker>
            ))}

            {/* Popup for selected location */}
            {selectedLocation && (
              <Popup
                longitude={selectedLocation.longitude}
                latitude={selectedLocation.latitude}
                anchor="top"
                onClose={() => setSelectedLocation(null)}
              >
                <div className="text-center p-2">
                  <h4 className="font-bold text-lg" style={{ color: selectedLocation.color }}>{selectedLocation.name}</h4>
                  <p className="text-gray-400 text-sm">{selectedLocation.subtitle}</p>
                  {selectedLocation.id === 1 && (
                    <span className="inline-block mt-2 px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">
                      📍 Base Location
                    </span>
                  )}
                </div>
              </Popup>
            )}

            {/* Map Controls */}
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-right" />
          </Map>

          {/* Animated Plane Overlay - on top */}
          <AnimatedPlaneOverlay />
        </div>

        {/* Location Info Card */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 left-8 right-8 p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 z-[100]"
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: selectedLocation.color }}
              />
              <div>
                <h4 className="text-white font-bold">{selectedLocation.name}</h4>
                <p className="text-white/70 text-sm">{selectedLocation.subtitle}</p>
              </div>
              {selectedLocation.id === 1 && (
                <span className="ml-auto px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">
                  Base
                </span>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Bento3DMapSection;
