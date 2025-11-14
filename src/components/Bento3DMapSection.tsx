import React, { useRef, useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
    subtitle: 'Tech Capital of India',
    longitude: 77.5946,
    latitude: 12.9716,
    color: '#3B82F6'
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
    color: '#F59E0B'
  }
];

export const Bento3DMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const mapRef = useRef<any>(null);

  const [viewState, setViewState] = useState({
    longitude: 77.5946,
    latitude: 20,
    zoom: 1.5,
    pitch: 50,
    bearing: -20
  });

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    
    // Smooth fly to location
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [location.longitude, location.latitude],
        zoom: 6,
        duration: 2000,
        pitch: 50,
        bearing: -20,
        essential: true
      });
    }
  };

  const handleClosePopup = () => {
    setSelectedLocation(null);
    
    // Return to initial view
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [77.5946, 20],
        zoom: 1.5,
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
        
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-slate-800/50 shadow-lg">
          <Map
            ref={mapRef}
            {...viewState}
            onViewportChange={(viewport: any) => setViewState(viewport)}
            mapboxApiAccessToken="pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTRsMnlndXoxMDB5MmpzY2Z4bXJjY3FtIn0.Ui13hNypKxfvPdoJrMPXQQ"
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/light-v11"
            dragRotate={false}
            touchRotate={false}
          >
            <NavigationControl showCompass={false} />
            
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
                  whileHover={{ scale: 1.2, y: -5 }}
                  onHoverStart={() => setHoveredLocation(location.id)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  onClick={() => handleMarkerClick(location)}
                  className="cursor-pointer relative"
                >
                  <motion.div
                    animate={hoveredLocation === location.id ? {
                      boxShadow: `0 10px 30px ${location.color}80`
                    } : {}}
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-xl"
                    style={{ 
                      backgroundColor: location.color,
                      boxShadow: `0 4px 12px ${location.color}60`
                    }}
                  >
                    <MapPin size={16} className="text-white" />
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
        
        <p className="text-xs text-white/50 mt-3 text-center">
          Click on markers to explore • {locations.length} locations
        </p>
      </div>
    </motion.div>
  );
};
