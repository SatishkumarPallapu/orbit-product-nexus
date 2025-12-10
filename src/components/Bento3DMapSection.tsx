import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import { MapPin, Plane, Navigation2 } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

// Create custom marker icons
const createCustomIcon = (color: string, isMain: boolean = false) => {
  const size = isMain ? 24 : 16;
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3), 0 0 20px ${color}50;
        ${isMain ? 'animation: pulse 2s infinite;' : ''}
      "></div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

// Compass Rose Component
const CompassRose = () => {
  return (
    <motion.div
      className="absolute bottom-4 right-4 z-[1000] w-20 h-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        <defs>
          <radialGradient id="parchmentGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4e7d3" />
            <stop offset="100%" stopColor="#d4c4a8" />
          </radialGradient>
        </defs>
        
        <circle cx="50" cy="50" r="48" fill="url(#parchmentGrad)" stroke="#8B7355" strokeWidth="2" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
        
        <polygon points="50,8 54,45 50,38 46,45" fill="#C41E3A" stroke="#8B0000" strokeWidth="0.5" />
        <polygon points="50,92 54,55 50,62 46,55" fill="#2F4F4F" stroke="#1C3A3A" strokeWidth="0.5" />
        <polygon points="8,50 45,54 38,50 45,46" fill="#2F4F4F" stroke="#1C3A3A" strokeWidth="0.5" />
        <polygon points="92,50 55,54 62,50 55,46" fill="#2F4F4F" stroke="#1C3A3A" strokeWidth="0.5" />
        
        <polygon points="22,22 44,46 40,44 46,40" fill="#5C4033" opacity="0.7" />
        <polygon points="78,22 56,46 60,44 54,40" fill="#5C4033" opacity="0.7" />
        <polygon points="22,78 44,54 40,56 46,60" fill="#5C4033" opacity="0.7" />
        <polygon points="78,78 56,54 60,56 54,60" fill="#5C4033" opacity="0.7" />
        
        <text x="50" y="20" textAnchor="middle" fill="#8B0000" fontSize="8" fontFamily="serif" fontWeight="bold">N</text>
        <text x="50" y="88" textAnchor="middle" fill="#2F4F4F" fontSize="7" fontFamily="serif">S</text>
        <text x="15" y="53" textAnchor="middle" fill="#2F4F4F" fontSize="7" fontFamily="serif">W</text>
        <text x="85" y="53" textAnchor="middle" fill="#2F4F4F" fontSize="7" fontFamily="serif">E</text>
        
        <circle cx="50" cy="50" r="6" fill="#8B7355" />
        <circle cx="50" cy="50" r="4" fill="#f4e7d3" />
        <circle cx="50" cy="50" r="2" fill="#8B7355" />
      </svg>
    </motion.div>
  );
};

// Animated 3D Plane Component
const AnimatedPlane = () => {
  const [position, setPosition] = useState({ x: 0, y: -20 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let angle = 0;
    const radius = 30;
    
    const animatePlane = setInterval(() => {
      angle += 0.02;
      const newX = radius * Math.cos(angle) * 1.5;
      const newY = radius * Math.sin(angle) - 20;
      
      setPosition({ x: newX, y: newY });
      setRotation(angle * (180 / Math.PI) + 90);
    }, 50);

    return () => clearInterval(animatePlane);
  }, []);

  return (
    <motion.div
      className="absolute z-[1000]"
      style={{ 
        left: '50%',
        top: '40%',
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${rotation}deg)`,
        transformStyle: 'preserve-3d'
      }}
      animate={{ 
        y: [0, -8, 0]
      }}
      transition={{
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {/* Shadow */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-20 h-6 bg-black/20 rounded-full blur-md"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.3, 0.15, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Plane */}
      <div 
        className="w-24 h-24 rounded-full flex items-center justify-center relative"
        style={{ 
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          boxShadow: '0 8px 30px rgba(245, 158, 11, 0.6), 0 0 50px rgba(245, 158, 11, 0.4), inset 0 2px 10px rgba(255,255,255,0.3)',
          transform: 'perspective(100px) rotateX(10deg)'
        }}
      >
        <Plane size={48} className="text-white" strokeWidth={2} />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Trail particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-amber-300"
            style={{
              left: -12 - i * 10,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            animate={{
              opacity: [0.8, 0.2, 0.8],
              scale: [1, 0.5, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Flight Path Component with animated particles
const FlightPaths = ({ particles }: { particles: { lat: number; lng: number }[] }) => {
  const bangalore = locations[0];
  const otherCities = locations.slice(1);
  
  // Create curved paths
  const createCurvedPath = (from: Location, to: Location): [number, number][] => {
    const points: [number, number][] = [];
    const steps = 50;
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      // Quadratic bezier for curve
      const midLat = (from.latitude + to.latitude) / 2 + 2; // Curve upward
      const midLng = (from.longitude + to.longitude) / 2;
      
      const lat = (1 - t) * (1 - t) * from.latitude + 2 * (1 - t) * t * midLat + t * t * to.latitude;
      const lng = (1 - t) * (1 - t) * from.longitude + 2 * (1 - t) * t * midLng + t * t * to.longitude;
      
      points.push([lat, lng]);
    }
    return points;
  };

  return (
    <>
      {otherCities.map((city, index) => (
        <Polyline
          key={city.id}
          positions={createCurvedPath(bangalore, city)}
          pathOptions={{
            color: '#F59E0B',
            weight: 2,
            opacity: 0.7,
            dashArray: '8, 12',
            lineCap: 'round',
          }}
        />
      ))}
    </>
  );
};

// Animated Particles along flight paths
const AnimatedParticles = () => {
  const [particles, setParticles] = useState<{ lat: number; lng: number; cityIndex: number }[]>([]);
  
  useEffect(() => {
    const bangalore = locations[0];
    const otherCities = locations.slice(1);
    
    const animateParticles = setInterval(() => {
      const newParticles = otherCities.map((city, index) => {
        const progress = ((Date.now() / 3000) + index * 0.15) % 1;
        const t = progress;
        
        const midLat = (bangalore.latitude + city.latitude) / 2 + 2;
        const midLng = (bangalore.longitude + city.longitude) / 2;
        
        const lat = (1 - t) * (1 - t) * bangalore.latitude + 2 * (1 - t) * t * midLat + t * t * city.latitude;
        const lng = (1 - t) * (1 - t) * bangalore.longitude + 2 * (1 - t) * t * midLng + t * t * city.longitude;
        
        return { lat, lng, cityIndex: index };
      });
      
      setParticles(newParticles);
    }, 50);
    
    return () => clearInterval(animateParticles);
  }, []);

  const particleIcon = L.divIcon({
    className: 'particle-marker',
    html: `<div style="
      width: 10px;
      height: 10px;
      background: #F59E0B;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(245, 158, 11, 0.8), 0 0 20px rgba(245, 158, 11, 0.5);
      animation: particlePulse 1s infinite;
    "></div>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });

  return (
    <>
      {particles.map((particle, index) => (
        <Marker
          key={`particle-${index}`}
          position={[particle.lat, particle.lng]}
          icon={particleIcon}
        />
      ))}
    </>
  );
};

// Map click handler component
const MapController = ({ onLocationClick }: { onLocationClick: (location: Location) => void }) => {
  const map = useMap();
  
  const flyToLocation = (location: Location, zoom: number = 6) => {
    map.flyTo([location.latitude, location.longitude], zoom, {
      duration: 2
    });
    onLocationClick(location);
  };

  return null;
};

export const Bento3DMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const mapRef = useRef<any>(null);

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
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 2px 10px rgba(0,0,0,0.3), 0 0 20px #F59E0B50; }
          50% { transform: scale(1.2); box-shadow: 0 2px 20px rgba(0,0,0,0.4), 0 0 40px #F59E0B80; }
        }
        @keyframes particlePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        .leaflet-container {
          background: linear-gradient(135deg, #f4e7d3 0%, #e8d5b7 100%) !important;
        }
        .leaflet-tile {
          filter: sepia(30%) saturate(80%) brightness(95%) !important;
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
          Location
        </h3>
        
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #f4e7d3 0%, #e8d5b7 100%)' }}>
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none z-[999]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
          }} />
          
          {/* Vintage border */}
          <div className="absolute inset-2 border-2 border-amber-900/30 rounded-lg pointer-events-none z-[999]" style={{
            boxShadow: 'inset 0 0 30px rgba(139, 115, 85, 0.3)'
          }} />
          
          {/* Compass Rose */}
          <CompassRose />
          
          {/* Animated 3D Plane above Bangalore */}
          <AnimatedPlane />

          <MapContainer
            ref={mapRef}
            center={[20, 78]}
            zoom={5}
            style={{ width: '100%', height: '100%' }}
            scrollWheelZoom={false}
            zoomControl={true}
          >
            {/* OpenStreetMap tiles - Free, no API key needed */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Alternative: Stamen Toner for vintage look - Also free */}
            {/* <TileLayer
              attribution='Map tiles by Stamen Design'
              url="https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
            /> */}
            
            <MapController onLocationClick={setSelectedLocation} />
            
            {/* Flight Paths */}
            <FlightPaths particles={[]} />
            
            {/* Animated Particles */}
            <AnimatedParticles />
            
            {/* City Markers */}
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.latitude, location.longitude]}
                icon={createCustomIcon(location.color, location.id === 1)}
                eventHandlers={{
                  click: () => setSelectedLocation(location)
                }}
              >
                <Popup>
                  <div className="text-center p-2">
                    <h4 className="font-bold text-lg" style={{ color: location.color }}>{location.name}</h4>
                    <p className="text-gray-600 text-sm">{location.subtitle}</p>
                    {location.id === 1 && (
                      <span className="inline-block mt-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                        📍 Current Location
                      </span>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Location Info Card */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 left-8 right-8 p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 z-[1000]"
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
                  Home Base
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
