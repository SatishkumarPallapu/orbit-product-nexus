import React, { useRef, useState, useEffect } from 'react';
import Map, { Marker, Popup, NavigationControl, Source, Layer } from 'react-map-gl';
import { motion } from 'framer-motion';
import { MapPin, Plane, Navigation2 } from 'lucide-react';
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

// Flight paths from Bangalore to other cities
const flightPaths = locations.slice(1).map(city => ({
  from: { lng: 77.5946, lat: 12.9716 },
  to: { lng: city.longitude, lat: city.latitude },
  color: city.color
}));

// Compass Rose Component
const CompassRose = () => {
  return (
    <motion.div
      className="absolute bottom-4 right-4 z-20 w-20 h-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        {/* Parchment background */}
        <defs>
          <radialGradient id="parchmentGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4e7d3" />
            <stop offset="100%" stopColor="#d4c4a8" />
          </radialGradient>
          <filter id="vintage">
            <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle cx="50" cy="50" r="48" fill="url(#parchmentGrad)" stroke="#8B7355" strokeWidth="2" />
        
        {/* Decorative rings */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
        
        {/* Main compass points */}
        <polygon points="50,8 54,45 50,38 46,45" fill="#C41E3A" stroke="#8B0000" strokeWidth="0.5" />
        <polygon points="50,92 54,55 50,62 46,55" fill="#2F4F4F" stroke="#1C3A3A" strokeWidth="0.5" />
        <polygon points="8,50 45,54 38,50 45,46" fill="#2F4F4F" stroke="#1C3A3A" strokeWidth="0.5" />
        <polygon points="92,50 55,54 62,50 55,46" fill="#2F4F4F" stroke="#1C3A3A" strokeWidth="0.5" />
        
        {/* Diagonal points */}
        <polygon points="22,22 44,46 40,44 46,40" fill="#5C4033" opacity="0.7" />
        <polygon points="78,22 56,46 60,44 54,40" fill="#5C4033" opacity="0.7" />
        <polygon points="22,78 44,54 40,56 46,60" fill="#5C4033" opacity="0.7" />
        <polygon points="78,78 56,54 60,56 54,60" fill="#5C4033" opacity="0.7" />
        
        {/* Cardinal letters */}
        <text x="50" y="20" textAnchor="middle" fill="#8B0000" fontSize="8" fontFamily="serif" fontWeight="bold">N</text>
        <text x="50" y="88" textAnchor="middle" fill="#2F4F4F" fontSize="7" fontFamily="serif">S</text>
        <text x="15" y="53" textAnchor="middle" fill="#2F4F4F" fontSize="7" fontFamily="serif">W</text>
        <text x="85" y="53" textAnchor="middle" fill="#2F4F4F" fontSize="7" fontFamily="serif">E</text>
        
        {/* Center decoration */}
        <circle cx="50" cy="50" r="6" fill="#8B7355" />
        <circle cx="50" cy="50" r="4" fill="#f4e7d3" />
        <circle cx="50" cy="50" r="2" fill="#8B7355" />
      </svg>
    </motion.div>
  );
};

// Animated Flight Path with Particles
const FlightPathParticles = ({ pathIndex }: { pathIndex: number }) => {
  const [particleProgress, setParticleProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setParticleProgress(prev => (prev + 0.02) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-amber-400"
      style={{
        boxShadow: '0 0 10px rgba(245, 158, 11, 0.8), 0 0 20px rgba(245, 158, 11, 0.5)'
      }}
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0.5, 1, 0.5],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: pathIndex * 0.3
      }}
    />
  );
};

export const Bento3DMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [mainPlanePosition, setMainPlanePosition] = useState({ lng: 77.5946, lat: 13.2 });
  const [mainPlaneRotation, setMainPlaneRotation] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const mapRef = useRef<any>(null);

  const [viewState, setViewState] = useState({
    longitude: 77.5946,
    latitude: 20,
    zoom: 4.5,
    pitch: 50,
    bearing: -20
  });

  // Animate large plane above Bangalore with 3D effect
  useEffect(() => {
    let angle = 0;
    const radius = 0.3;
    const centerLng = 77.5946;
    const centerLat = 13.0;
    
    const animatePlane = setInterval(() => {
      angle += 0.015;
      const newLng = centerLng + radius * Math.cos(angle) * 1.5;
      const newLat = centerLat + radius * Math.sin(angle);
      
      setMainPlanePosition({ lng: newLng, lat: newLat });
      setMainPlaneRotation(angle * (180 / Math.PI) + 90);
    }, 50);

    return () => clearInterval(animatePlane);
  }, []);

  const handleMove = (evt: any) => {
    setViewState(evt.viewState);
  };

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    
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

  // Generate GeoJSON for flight paths
  const flightPathsGeoJSON = {
    type: 'FeatureCollection' as const,
    features: flightPaths.map((path, index) => ({
      type: 'Feature' as const,
      properties: { index },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [path.from.lng, path.from.lat],
          [
            (path.from.lng + path.to.lng) / 2,
            (path.from.lat + path.to.lat) / 2 + 1.5
          ],
          [path.to.lng, path.to.lat]
        ]
      }
    }))
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
          <div className="absolute inset-0 opacity-40 pointer-events-none z-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
          }} />
          
          {/* Vintage border */}
          <div className="absolute inset-2 border-2 border-amber-900/30 rounded-lg pointer-events-none z-10" style={{
            boxShadow: 'inset 0 0 30px rgba(139, 115, 85, 0.3)'
          }} />
          
          {/* Compass Rose */}
          <CompassRose />
          
          {mapError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
              <div className="text-center p-6">
                <Navigation2 className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-amber-800 font-semibold">Map Loading...</p>
                <p className="text-amber-600 text-sm mt-2">Please add a valid Mapbox token</p>
              </div>
            </div>
          ) : (
            <Map
              ref={mapRef}
              {...viewState}
              onMove={handleMove}
              onLoad={() => setMapLoaded(true)}
              onError={() => setMapError(true)}
              mapboxAccessToken="pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTRsMnlndXoxMDB5MmpzY2Z4bXJjY3FtIn0.Ui13hNypKxfvPdoJrMPXQQ"
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/mapbox/outdoors-v12"
              dragRotate={false}
            >
              <NavigationControl showCompass={false} />
              
              {/* Flight Paths - Dotted Lines */}
              {mapLoaded && (
                <Source id="flight-paths" type="geojson" data={flightPathsGeoJSON}>
                  <Layer
                    id="flight-paths-line"
                    type="line"
                    paint={{
                      'line-color': '#F59E0B',
                      'line-width': 2,
                      'line-dasharray': [2, 4],
                      'line-opacity': 0.8
                    }}
                  />
                </Source>
              )}
              
              {/* Animated particles on flight paths */}
              {flightPaths.map((path, index) => {
                const progress = ((Date.now() / 2000) + index * 0.3) % 1;
                const t = progress;
                const cx = (path.from.lng + path.to.lng) / 2;
                const cy = (path.from.lat + path.to.lat) / 2 + 1.5;
                
                // Quadratic bezier
                const x = (1-t)*(1-t)*path.from.lng + 2*(1-t)*t*cx + t*t*path.to.lng;
                const y = (1-t)*(1-t)*path.from.lat + 2*(1-t)*t*cy + t*t*path.to.lat;
                
                return (
                  <Marker key={`particle-${index}`} longitude={x} latitude={y}>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-amber-400"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                      style={{
                        boxShadow: '0 0 8px rgba(245, 158, 11, 0.8), 0 0 16px rgba(245, 158, 11, 0.4)'
                      }}
                    />
                  </Marker>
                );
              })}
              
              {/* Big Animated 3D Plane above Bangalore */}
              <Marker
                longitude={mainPlanePosition.lng}
                latitude={mainPlanePosition.lat}
              >
                <motion.div
                  animate={{ 
                    rotate: mainPlaneRotation,
                    y: [0, -8, 0]
                  }}
                  transition={{
                    rotate: { duration: 0.05 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Shadow */}
                  <motion.div
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full blur-md"
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
                    className="w-20 h-20 rounded-full flex items-center justify-center relative"
                    style={{ 
                      background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                      boxShadow: '0 8px 30px rgba(245, 158, 11, 0.6), 0 0 50px rgba(245, 158, 11, 0.4), inset 0 2px 10px rgba(255,255,255,0.3)',
                      transform: 'perspective(100px) rotateX(10deg)'
                    }}
                  >
                    <Plane size={40} className="text-white" strokeWidth={2} />
                    
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
                        className="absolute w-2 h-2 rounded-full bg-amber-300"
                        style={{
                          left: -10 - i * 8,
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
              </Marker>
              
              {/* City Markers */}
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
                          className="absolute rounded-full"
                          style={{
                            background: `radial-gradient(circle, ${location.color}50 0%, transparent 100%)`,
                            width: '100px',
                            height: '100px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 0.2, 0.6]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute rounded-full"
                          style={{
                            background: `radial-gradient(circle, ${location.color}70 0%, transparent 100%)`,
                            width: '70px',
                            height: '70px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                          }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.8, 0.3, 0.8]
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
                      className={`rounded-full flex items-center justify-center shadow-xl ${location.id === 1 ? 'w-14 h-14' : 'w-10 h-10'}`}
                      style={{ 
                        backgroundColor: location.color,
                        boxShadow: location.id === 1 
                          ? `0 6px 20px ${location.color}80, 0 0 30px ${location.color}50`
                          : `0 4px 12px ${location.color}60`
                      }}
                    >
                      <MapPin size={location.id === 1 ? 28 : 20} className="text-white" strokeWidth={location.id === 1 ? 2.5 : 2} />
                    </motion.div>
                    
                    {/* City name label */}
                    {(hoveredLocation === location.id || location.id === 1) && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white/95 px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap backdrop-blur-sm"
                        style={{ border: '1px solid rgba(139, 115, 85, 0.3)' }}
                      >
                        <div className="text-xs font-bold text-amber-900">
                          {location.name}
                        </div>
                        <div className="text-[10px] text-amber-700">
                          {location.subtitle}
                        </div>
                        <div 
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0"
                          style={{
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid rgba(255,255,255,0.95)'
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
          )}
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-white/50">
            Click on markers to explore • Mapbox
          </p>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-amber-500"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <p className="text-xs text-amber-500/80 font-semibold">Bangalore - Home Base</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
