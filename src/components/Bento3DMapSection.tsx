import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plane, X, Building2, Users, Briefcase, Globe, TrendingUp } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface Location {
  id: number;
  name: string;
  subtitle: string;
  lat: number;
  lng: number;
  color: string;
  population: string;
  industry: string;
  highlights: string[];
}

// Major Indian cities - Bangalore (Work) & Hyderabad (Home) highlighted
const locations: Location[] = [
  { 
    id: 1, 
    name: 'Bangalore', 
    subtitle: '💼 Work Location', 
    lat: 12.9716, 
    lng: 77.5946, 
    color: '#F59E0B',
    population: '12.3M',
    industry: 'Technology & Startups',
    highlights: ['Silicon Valley of India', 'Current Workplace', 'Tech Hub']
  },
  { 
    id: 2, 
    name: 'Hyderabad', 
    subtitle: '🏠 Home Town', 
    lat: 17.3850, 
    lng: 78.4867, 
    color: '#10B981',
    population: '10.5M',
    industry: 'IT & Pharmaceuticals',
    highlights: ['Born & Raised', 'HITEC City', 'City of Pearls']
  },
  { 
    id: 3, 
    name: 'Mumbai', 
    subtitle: 'Financial Capital', 
    lat: 19.0760, 
    lng: 72.8777, 
    color: '#8B5CF6',
    population: '20.7M',
    industry: 'Finance & Entertainment',
    highlights: ['Stock Exchange', 'Bollywood', 'Business Hub']
  },
  { 
    id: 4, 
    name: 'Delhi', 
    subtitle: 'National Capital', 
    lat: 28.7041, 
    lng: 77.1025, 
    color: '#EC4899',
    population: '32M',
    industry: 'Government & Commerce',
    highlights: ['Political Center', 'Historical Sites', 'Metro Network']
  },
  { 
    id: 5, 
    name: 'Chennai', 
    subtitle: 'Gateway to South', 
    lat: 13.0827, 
    lng: 80.2707, 
    color: '#3B82F6',
    population: '11.5M',
    industry: 'Automobile & IT',
    highlights: ['Detroit of India', 'Cultural Capital', 'Port City']
  },
];

const bangalore = locations[0];
const hyderabad = locations[1];

// Custom marker icon creator
const createCustomIcon = (color: string, isMain: boolean, isHome: boolean, isSelected: boolean) => {
  const size = isMain || isHome ? 44 : isSelected ? 40 : 28;
  const glowSize = size + 20;
  
  return L.divIcon({
    html: `
      <div class="marker-container" style="position: relative; width: ${glowSize}px; height: ${glowSize}px;">
        ${isMain || isHome || isSelected ? `<div class="marker-glow" style="
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, ${color}60 0%, transparent 70%);
          border-radius: 50%;
          animation: glow-pulse 2s ease-in-out infinite;
        "></div>` : ''}
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(135deg, ${color} 0%, ${color}dd 100%);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 20px ${color}80, 0 0 40px ${color}40;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        ">
          ${isMain ? '<span style="font-size: 18px;">💼</span>' : isHome ? '<span style="font-size: 18px;">🏠</span>' : ''}
        </div>
        ${isMain || isHome ? `<div class="pulse-ring" style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border: 2px solid ${color};
          border-radius: 50%;
          animation: pulse-expand 2s ease-out infinite;
        "></div>` : ''}
      </div>
    `,
    className: 'custom-marker-wrapper',
    iconSize: [glowSize, glowSize],
    iconAnchor: [glowSize/2, glowSize/2],
  });
};

// Map controller for zoom animations
const MapController = ({ selectedCity, onReset }: { selectedCity: Location | null; onReset: () => void }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedCity) {
      map.flyTo([selectedCity.lat, selectedCity.lng], 10, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    } else {
      map.flyTo([20.5937, 78.9629], 5, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [selectedCity, map]);

  return null;
};

// Animated flight paths
const FlightPath = ({ from, to, isActive }: { from: Location; to: Location; isActive: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);
  
  // Create curved path
  const midLat = (from.lat + to.lat) / 2;
  const midLng = (from.lng + to.lng) / 2;
  const arcHeight = Math.sqrt(Math.pow(to.lat - from.lat, 2) + Math.pow(to.lng - from.lng, 2)) * 0.2;
  
  return (
    <>
      {[...Array(15)].map((_, i) => {
        const t = i / 14;
        const lat = from.lat + (to.lat - from.lat) * t + Math.sin(t * Math.PI) * arcHeight;
        const lng = from.lng + (to.lng - from.lng) * t;
        return (
          <Circle
            key={i}
            center={[lat, lng]}
            radius={isActive ? 8000 : 5000}
            pathOptions={{
              color: isActive ? '#F59E0B' : '#F59E0B',
              fillColor: '#F59E0B',
              fillOpacity: isActive ? 0.8 - (t * 0.5) : 0.3 - (t * 0.2),
              weight: 0,
            }}
          />
        );
      })}
    </>
  );
};

// Animated plane marker
const AnimatedPlane = ({ from, to }: { from: Location; to: Location }) => {
  const map = useMap();
  const [position, setPosition] = useState<[number, number]>([from.lat, from.lng]);
  const animationRef = useRef<number>();

  useEffect(() => {
    let startTime: number;
    const duration = 5000;
    const arcHeight = Math.sqrt(Math.pow(to.lat - from.lat, 2) + Math.pow(to.lng - from.lng, 2)) * 0.2;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawT = (elapsed % (duration * 2)) / duration;
      const t = rawT <= 1 ? rawT : 2 - rawT;

      const lat = from.lat + (to.lat - from.lat) * t + Math.sin(t * Math.PI) * arcHeight;
      const lng = from.lng + (to.lng - from.lng) * t;
      setPosition([lat, lng]);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [from, to]);

  const angle = Math.atan2(to.lat - from.lat, to.lng - from.lng) * (180 / Math.PI);
  
  const planeIcon = L.divIcon({
    html: `
      <div style="transform: rotate(${angle - 90}deg); filter: drop-shadow(0 2px 8px rgba(245, 158, 11, 0.6));">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#F59E0B"/>
        </svg>
      </div>
    `,
    className: 'plane-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  return <Marker position={position} icon={planeIcon} />;
};

export const Bento3DMapSection = () => {
  const [selectedCity, setSelectedCity] = useState<Location | null>(null);
  const [hoveredCity, setHoveredCity] = useState<Location | null>(null);

  const handleCityClick = (city: Location) => {
    setSelectedCity(selectedCity?.id === city.id ? null : city);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <style>{`
        .custom-marker-wrapper {
          background: transparent !important;
          border: none !important;
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes pulse-expand {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        .plane-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-container {
          background: linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%);
        }
        .leaflet-control-attribution {
          display: none !important;
        }
        .modern-map {
          filter: saturate(1.2) contrast(1.05);
        }
        .modern-map .leaflet-tile {
          filter: hue-rotate(-5deg) brightness(0.95);
        }
      `}</style>
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
            <MapPin className="w-5 h-5 text-amber-400" />
            Location
          </h3>
          
          {selectedCity && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedCity(null)}
              className="px-3 py-1.5 bg-muted/80 hover:bg-muted rounded-full text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              View All Cities
            </motion.button>
          )}
        </div>

        {/* City Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {locations.map((city) => (
            <motion.button
              key={city.id}
              onClick={() => handleCityClick(city)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                selectedCity?.id === city.id
                  ? 'text-white shadow-lg'
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              style={{
                background: selectedCity?.id === city.id ? city.color : undefined,
                boxShadow: selectedCity?.id === city.id ? `0 4px 20px ${city.color}60` : undefined,
              }}
            >
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ background: selectedCity?.id === city.id ? 'white' : city.color }}
              />
              {city.name}
            </motion.button>
          ))}
        </div>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-border/50">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ width: '100%', height: '100%' }}
            className="modern-map"
            zoomControl={false}
            attributionControl={false}
          >
            <MapController selectedCity={selectedCity} onReset={() => setSelectedCity(null)} />
            
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {/* Flight paths from Bangalore */}
            {!selectedCity && locations.slice(1).map((loc) => (
              <FlightPath 
                key={`path-${loc.id}`} 
                from={bangalore} 
                to={loc} 
                isActive={hoveredCity?.id === loc.id}
              />
            ))}

            {/* Animated planes */}
            {!selectedCity && locations.slice(1).map((loc, index) => (
              <AnimatedPlane 
                key={`plane-${loc.id}`} 
                from={bangalore} 
                to={loc}
              />
            ))}

            {/* City markers */}
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={createCustomIcon(location.color, location.id === 1, location.id === 2, selectedCity?.id === location.id)}
                eventHandlers={{
                  click: () => handleCityClick(location),
                  mouseover: () => setHoveredCity(location),
                  mouseout: () => setHoveredCity(null),
                }}
              />
            ))}
          </MapContainer>

          {/* Large animated plane at Bangalore when not zoomed */}
          {!selectedCity && (
            <motion.div
              className="absolute z-[1001] pointer-events-none"
              style={{ top: '55%', left: '52%' }}
              animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl scale-150" />
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    boxShadow: '0 8px 32px rgba(245, 158, 11, 0.5)',
                  }}
                >
                  <Plane size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-30" />
              </div>
            </motion.div>
          )}
        </div>

        {/* City Detail Panel */}
        <AnimatePresence>
          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div 
                className="p-5 rounded-xl border backdrop-blur-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${selectedCity.color}15 0%, ${selectedCity.color}05 100%)`,
                  borderColor: `${selectedCity.color}40`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${selectedCity.color}30` }}
                    >
                      {selectedCity.id === 1 ? (
                        <Briefcase className="w-6 h-6" style={{ color: selectedCity.color }} />
                      ) : selectedCity.id === 2 ? (
                        <MapPin className="w-6 h-6" style={{ color: selectedCity.color }} />
                      ) : (
                        <Building2 className="w-6 h-6" style={{ color: selectedCity.color }} />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{selectedCity.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedCity.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="p-1.5 rounded-full hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-xs">Population</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{selectedCity.population}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span className="text-xs">Industry</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{selectedCity.industry}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">Key Highlights</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCity.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          background: `${selectedCity.color}20`,
                          color: selectedCity.color,
                          border: `1px solid ${selectedCity.color}40`,
                        }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {selectedCity.id === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30"
                  >
                    <p className="text-xs text-amber-400 font-medium flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      💼 Currently working here as a Product Manager
                    </p>
                  </motion.div>
                )}

                {selectedCity.id === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30"
                  >
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      🏠 My hometown - Where I grew up and my roots are!
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Bento3DMapSection;
