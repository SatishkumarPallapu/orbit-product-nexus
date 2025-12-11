import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
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
}

// Bangalore as main + other Indian cities
const locations: Location[] = [
  { id: 1, name: 'Bangalore', subtitle: 'My Home City - Tech Capital', lat: 12.9716, lng: 77.5946, color: '#F59E0B' },
  { id: 2, name: 'Mumbai', subtitle: 'Financial Capital', lat: 19.0760, lng: 72.8777, color: '#8B5CF6' },
  { id: 3, name: 'Delhi', subtitle: 'National Capital', lat: 28.7041, lng: 77.1025, color: '#EC4899' },
  { id: 4, name: 'Chennai', subtitle: 'Cultural Hub', lat: 13.0827, lng: 80.2707, color: '#10B981' },
  { id: 5, name: 'Hyderabad', subtitle: 'Tech & History', lat: 17.3850, lng: 78.4867, color: '#3B82F6' },
  { id: 6, name: 'Kolkata', subtitle: 'City of Joy', lat: 22.5726, lng: 88.3639, color: '#EF4444' },
  { id: 7, name: 'Pune', subtitle: 'Oxford of the East', lat: 18.5204, lng: 73.8567, color: '#06B6D4' },
  { id: 8, name: 'Ahmedabad', subtitle: 'Manchester of India', lat: 23.0225, lng: 72.5714, color: '#84CC16' },
  { id: 9, name: 'Jaipur', subtitle: 'Pink City', lat: 26.9124, lng: 75.7873, color: '#F472B6' },
  { id: 10, name: 'Kochi', subtitle: 'Queen of Arabian Sea', lat: 9.9312, lng: 76.2673, color: '#A855F7' },
];

const bangalore = locations[0];

// Custom marker icon creator
const createCustomIcon = (color: string, isMain: boolean) => {
  const size = isMain ? 40 : 24;
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="${color}" stroke="white" stroke-width="3"/>
      ${isMain ? `<circle cx="${size/2}" cy="${size/2}" r="${size/2 - 8}" fill="white" opacity="0.3"/>` : ''}
    </svg>
  `;
  return L.divIcon({
    html: `<div style="position:relative;">${svg}${isMain ? '<div class="pulse-ring"></div>' : ''}</div>`,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
};

// Animated flight component
const AnimatedFlight = ({ from, to, delay }: { from: Location; to: Location; delay: number }) => {
  const map = useMap();
  const [position, setPosition] = useState<[number, number]>([from.lat, from.lng]);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let startTime: number;
    const duration = 4000; // 4 seconds per flight

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min((elapsed % (duration * 2)) / duration, 1);
      
      // Ping-pong animation
      const actualProgress = t <= 1 ? t : 2 - t;
      setProgress(actualProgress);

      // Interpolate position with a slight arc
      const lat = from.lat + (to.lat - from.lat) * actualProgress;
      const lng = from.lng + (to.lng - from.lng) * actualProgress;
      // Add arc effect
      const arcHeight = Math.sin(actualProgress * Math.PI) * 2;
      
      setPosition([lat + arcHeight * 0.5, lng]);
      animationRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [from, to, delay]);

  const planeIcon = L.divIcon({
    html: `
      <div class="animated-plane" style="transform: rotate(${Math.atan2(to.lat - from.lat, to.lng - from.lng) * (180 / Math.PI) - 90}deg);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#F59E0B"/>
        </svg>
      </div>
    `,
    className: 'plane-icon',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return <Marker position={position} icon={planeIcon} />;
};

// Flight path lines
const FlightPath = ({ from, to }: { from: Location; to: Location }) => {
  // Create curved path points
  const midLat = (from.lat + to.lat) / 2;
  const midLng = (from.lng + to.lng) / 2;
  const arcHeight = Math.sqrt(Math.pow(to.lat - from.lat, 2) + Math.pow(to.lng - from.lng, 2)) * 0.15;
  
  const pathPoints: [number, number][] = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const lat = from.lat + (to.lat - from.lat) * t + Math.sin(t * Math.PI) * arcHeight;
    const lng = from.lng + (to.lng - from.lng) * t;
    pathPoints.push([lat, lng]);
  }

  return (
    <Polyline
      positions={pathPoints}
      pathOptions={{
        color: '#F59E0B',
        weight: 2,
        opacity: 0.4,
        dashArray: '8, 8',
      }}
    />
  );
};

// Map controller for initial view
const MapController = () => {
  const map = useMap();
  
  useEffect(() => {
    // Set bounds to show India with world context
    map.setView([20.5937, 78.9629], 4);
  }, [map]);

  return null;
};

export const Bento3DMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

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
        .parchment-map {
          filter: sepia(30%) saturate(80%) brightness(95%);
        }
        .parchment-map .leaflet-tile {
          filter: sepia(20%) saturate(90%);
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border: 3px solid #F59E0B;
          border-radius: 50%;
          animation: pulse-expand 2s ease-out infinite;
        }
        @keyframes pulse-expand {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        .animated-plane {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          animation: plane-bob 1s ease-in-out infinite;
        }
        @keyframes plane-bob {
          0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
          50% { transform: translateY(-3px) rotate(var(--rotation)); }
        }
        .plane-icon {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-container {
          background: linear-gradient(135deg, #d4c4a8 0%, #c4b393 50%, #b8a683 100%);
          font-family: 'Georgia', serif;
        }
        .leaflet-popup-content-wrapper {
          background: rgba(62, 47, 35, 0.95) !important;
          color: #f5e6d3 !important;
          border-radius: 8px !important;
          border: 2px solid #8b7355 !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
        }
        .leaflet-popup-tip {
          background: rgba(62, 47, 35, 0.95) !important;
          border: 1px solid #8b7355 !important;
        }
        .leaflet-popup-close-button {
          color: #f5e6d3 !important;
        }
        .india-highlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1000;
        }
        .compass-rose {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 80px;
          height: 80px;
          z-index: 1000;
          animation: compass-spin 60s linear infinite;
        }
        @keyframes compass-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .map-overlay-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          background: 
            radial-gradient(ellipse 60% 40% at 75% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 70%),
            linear-gradient(to bottom, transparent 0%, rgba(139, 115, 85, 0.1) 100%);
        }
        .leaflet-control-attribution {
          display: none !important;
        }
      `}</style>
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <div 
        className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-border/60"
        style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
      >
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
          <MapPin className="w-5 h-5 text-amber-400" />
          Location
        </h3>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-amber-900/30">
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 z-[998] pointer-events-none opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Map gradient overlay for India highlight */}
          <div className="map-overlay-gradient" />

          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            style={{ width: '100%', height: '100%' }}
            className="parchment-map"
            zoomControl={false}
            attributionControl={false}
          >
            <MapController />
            
            {/* Stamen Watercolor style for parchment look */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            />

            {/* Flight paths from Bangalore */}
            {locations.slice(1).map((loc) => (
              <FlightPath key={`path-${loc.id}`} from={bangalore} to={loc} />
            ))}

            {/* Animated planes */}
            {locations.slice(1).map((loc, index) => (
              <AnimatedFlight 
                key={`flight-${loc.id}`} 
                from={bangalore} 
                to={loc} 
                delay={index * 500}
              />
            ))}

            {/* City markers */}
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={createCustomIcon(location.color, location.id === 1)}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div className="text-center p-1">
                    <h4 className="font-bold text-lg" style={{ color: location.color }}>{location.name}</h4>
                    <p className="text-amber-200/80 text-sm">{location.subtitle}</p>
                    {location.id === 1 && (
                      <span className="inline-block mt-2 px-2 py-1 bg-amber-500/30 text-amber-300 text-xs rounded-full border border-amber-500/50">
                        📍 Base Location
                      </span>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Compass Rose */}
          <div className="compass-rose">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="rgba(139, 115, 85, 0.3)" stroke="#8b7355" strokeWidth="2"/>
              <polygon points="50,5 55,45 50,40 45,45" fill="#d4a574" stroke="#8b7355" strokeWidth="1"/>
              <polygon points="50,95 55,55 50,60 45,55" fill="#a08060" stroke="#8b7355" strokeWidth="1"/>
              <polygon points="5,50 45,45 40,50 45,55" fill="#c4a070" stroke="#8b7355" strokeWidth="1"/>
              <polygon points="95,50 55,45 60,50 55,55" fill="#c4a070" stroke="#8b7355" strokeWidth="1"/>
              <text x="50" y="18" textAnchor="middle" fill="#5c4a3a" fontSize="10" fontWeight="bold">N</text>
              <text x="50" y="92" textAnchor="middle" fill="#5c4a3a" fontSize="10" fontWeight="bold">S</text>
              <text x="12" y="54" textAnchor="middle" fill="#5c4a3a" fontSize="10" fontWeight="bold">W</text>
              <text x="88" y="54" textAnchor="middle" fill="#5c4a3a" fontSize="10" fontWeight="bold">E</text>
              <circle cx="50" cy="50" r="5" fill="#8b7355"/>
            </svg>
          </div>

          {/* Large animated plane at Bangalore */}
          <motion.div
            className="absolute z-[1001] pointer-events-none"
            style={{ top: '45%', left: '52%', transform: 'translate(-50%, -50%)' }}
            animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/40 rounded-full blur-xl scale-150" />
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  boxShadow: '0 8px 32px rgba(245, 158, 11, 0.5)',
                }}
              >
                <Plane size={32} className="text-white" strokeWidth={1.5} />
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-40" />
              <div className="absolute inset-0 rounded-full border border-amber-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        </div>

        {/* Selected location card */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-card/60 backdrop-blur-xl rounded-xl border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedLocation.color }} />
              <div>
                <h4 className="text-foreground font-bold">{selectedLocation.name}</h4>
                <p className="text-muted-foreground text-sm">{selectedLocation.subtitle}</p>
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
