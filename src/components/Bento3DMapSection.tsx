import React, { useRef, useState, useEffect } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { motion } from 'framer-motion';
import { MapPin, Plane } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

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
    name: 'San Francisco',
    subtitle: 'Silicon Valley Hub',
    longitude: -122.4194,
    latitude: 37.7749,
    color: '#8B5CF6'
  },
  {
    id: 3,
    name: 'London',
    subtitle: 'Innovation Center',
    longitude: -0.1278,
    latitude: 51.5074,
    color: '#EC4899'
  },
  {
    id: 4,
    name: 'Tokyo',
    subtitle: 'Tech & Design',
    longitude: 139.6917,
    latitude: 35.6762,
    color: '#10B981'
  },
  {
    id: 5,
    name: 'Singapore',
    subtitle: 'Asian Tech Hub',
    longitude: 103.8198,
    latitude: 1.3521,
    color: '#3B82F6'
  }
];

export const Bento3DMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [planePosition, setPlanePosition] = useState({ lng: 77.5946, lat: 12.9716 });
  const [planeRotation, setPlaneRotation] = useState(0);
  const mapRef = useRef<any>(null);

  const [viewState, setViewState] = useState({
    longitude: 77.5946,
    latitude: 20,
    zoom: 4.5,
    pitch: 50,
    bearing: -20
  });

  // Animate plane around Bangalore
  useEffect(() => {
    const radius = 0.15; // Distance from center
    const centerLng = 77.5946;
    const centerLat = 12.9716;
    let angle = 0;
    
    const animatePlane = setInterval(() => {
      angle += 0.02;
      const newLng = centerLng + radius * Math.cos(angle);
      const newLat = centerLat + radius * Math.sin(angle);
      
      setPlanePosition({ lng: newLng, lat: newLat });
      setPlaneRotation(angle * (180 / Math.PI) + 90);
    }, 50);

    return () => clearInterval(animatePlane);
  }, []);

  const handleMove = (evt: any) => {
    setViewState(evt.viewState);
  };

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    
    // Smooth fly to location
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [location.longitude, location.latitude],
        zoom: location.id === 1 ? 8 : 6,
        duration: 2000,
        pitch: 50,
        bearing: -20,
        essential: true
      });
    }
  };

  const handleClosePopup = () => {
    setSelectedLocation(null);
    
    // Return to India view
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [77.5946, 20],
        zoom: 4.5,
        duration: 2000,
        pitch: 50,
        bearing: -20,
        essential: true
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative group"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div 
        className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(20px)',
        }}
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
          Travel Map
        </h3>
        
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #f4e7d3 0%, #e8d5b7 100%)' }}>
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none z-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
          }} />
          
          <Map
            ref={mapRef}
            {...viewState}
            onMove={handleMove}
            mapboxAccessToken="pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTRsMnlndXoxMDB5MmpzY2Z4bXJjY3FtIn0.Ui13hNypKxfvPdoJrMPXQQ"
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            dragRotate={false}
          >
            <NavigationControl showCompass={false} />
            
            {/* Animated Plane Marker - Larger size */}
            <Marker
              longitude={planePosition.lng}
              latitude={planePosition.lat}
            >
              <motion.div
                animate={{ 
                  rotate: planeRotation,
                  scale: [1, 1.08, 1]
                }}
                transition={{
                  rotate: { duration: 0.05 },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="relative"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center relative"
                  style={{ 
                    backgroundColor: '#F59E0B',
                    boxShadow: '0 6px 20px rgba(245, 158, 11, 0.7), 0 0 30px rgba(245, 158, 11, 0.5)'
                  }}
                >
                  <Plane size={32} className="text-white" strokeWidth={2.5} />
                  {/* Animated trail effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0.2, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </Marker>
            
            {locations.map((location) => (
              <Marker
                key={location.id}
                longitude={location.longitude}
                latitude={location.latitude}
              >
                <motion.div
                  initial={{ scale: 0, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: location.id * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.3, y: -8 }}
                  onHoverStart={() => setHoveredLocation(location.id)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  onClick={() => handleMarkerClick(location)}
                  className="cursor-pointer relative"
                >
                  {/* Special highlight for Bangalore */}
                  {location.id === 1 && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${location.color}40 0%, transparent 100%)`,
                          width: '80px',
                          height: '80px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 0.3, 0.6]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${location.color}60 0%, transparent 100%)`,
                          width: '60px',
                          height: '60px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0.4, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                    </>
                  )}
                  
                  <motion.div
                    animate={hoveredLocation === location.id ? {
                      boxShadow: `0 10px 30px ${location.color}80`
                    } : location.id === 1 ? {
                      boxShadow: `0 8px 24px ${location.color}70, 0 0 40px ${location.color}50`
                    } : {}}
                    className={`rounded-full flex items-center justify-center shadow-xl ${location.id === 1 ? 'w-12 h-12' : 'w-8 h-8'}`}
                    style={{ 
                      backgroundColor: location.color,
                      boxShadow: location.id === 1 
                        ? `0 6px 20px ${location.color}80, 0 0 30px ${location.color}50`
                        : `0 4px 12px ${location.color}60`
                    }}
                  >
                    <MapPin size={location.id === 1 ? 24 : 16} className="text-white" strokeWidth={location.id === 1 ? 2.5 : 2} />
                  </motion.div>
                  
                  {/* Marker label on hover */}
                  {hoveredLocation === location.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap"
                    >
                      <div className="text-xs font-semibold text-slate-800">
                        {location.name}
                      </div>
                      <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0"
                        style={{
                          borderLeft: '4px solid transparent',
                          borderRight: '4px solid transparent',
                          borderTop: '4px solid white'
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </Marker>
            ))}

            {selectedLocation && (
              <Popup
                longitude={selectedLocation.longitude}
                latitude={selectedLocation.latitude}
                anchor="top"
                onClose={handleClosePopup}
                closeButton={true}
                closeOnClick={false}
                className="location-popup"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 min-w-[180px]"
                >
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {selectedLocation.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {selectedLocation.subtitle}
                  </p>
                </motion.div>
              </Popup>
            )}
          </Map>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-white/50">
            Click on markers to explore • {locations.length} locations
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-xs text-amber-500/80 font-semibold">Bangalore - Home</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
