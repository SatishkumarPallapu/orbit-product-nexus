# 🗺️ Enhanced 3D Mapbox Location Component - Setup Guide

## 🎯 Overview
Your Bento3DMapSection component has been successfully upgraded with:
- ✅ **Mapbox GL 3D mapping** for advanced visualization
- ✅ **Bangalore highlighted as base location** with enhanced glow effects
- ✅ **Animated flight paths** showing connections to Indian cities
- ✅ **Clean Indian map view** focused on 10 major metros
- ✅ **Removed Mapbox branding** for a seamless UI
- ✅ **Enhanced plane animation** with particle effects

---

## ✨ Key Features

### 1. **3D Map Focused on Bangalore**
```
- Center: Bangalore (12.9716°N, 77.5946°E)
- Zoom: Level 12 (City view)
- Pitch: 60° (3D perspective)
- Bearing: 45° (Rotated view)
- Style: Dark theme with modern design
```

### 2. **Animated Plane & Flight Paths**
- Central animated plane at Bangalore center
- Animated flight paths from 3 major cities to Bangalore
- Gradient dashed line effects
- Particle trails following the plane
- Continuous pulsing glow animation

### 3. **Enhanced Location Markers**
**Bangalore Marker (Base):**
- Size: 48px (larger)
- Continuous pulsing glow effect
- Enhanced shadow with multiple layers
- 📍 emoji indicator

**Other Cities:**
- Size: 28px (standard)
- Color-coded by city
- Smooth hover effects

### 4. **Indian Metropolitan Areas Included**
| City | Color | Lat | Lng |
|------|-------|-----|-----|
| Bangalore | Amber | 12.97 | 77.59 |
| Mumbai | Purple | 19.08 | 72.88 |
| Delhi | Pink | 28.70 | 77.10 |
| Chennai | Green | 13.08 | 80.27 |
| Hyderabad | Blue | 17.39 | 78.49 |
| Kolkata | Red | 22.57 | 88.36 |
| Pune | Cyan | 18.52 | 73.86 |
| Ahmedabad | Lime | 23.03 | 72.57 |
| Jaipur | Rose | 26.91 | 75.79 |
| Kochi | Violet | 9.93 | 76.27 |

---

## 🚀 Setup Instructions

### Step 1: Dependencies Already Installed ✅
```bash
# Already installed in your project:
mapbox-gl@^1.9.4
react-map-gl@^7.1.7
```

### Step 2: Get Your Mapbox Token
1. Visit https://www.mapbox.com/
2. Create a free account or sign in
3. Go to Account > Tokens
4. Click "Create a token"
5. Give it a name (e.g., "Orbit Portfolio")
6. Ensure "Public (Scopes)" scope is enabled
7. Copy the token

### Step 3: Configure Token (Already Done ✅)
Your `.env.local` file is ready:
```env
VITE_MAPBOX_TOKEN=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example
```

**Replace the token with your actual Mapbox token:**
```env
VITE_MAPBOX_TOKEN=pk.eyJ1IjoieW91rX... (your actual token)
```

### Step 4: Verify in Development
```bash
npm run dev
```
Navigate to the location page - your map should load and display!

---

## 📦 Component Usage

### Basic Import
```tsx
import { Bento3DMapSection } from '@/components/Bento3DMapSection';

export default function LocationPage() {
  return (
    <section className="py-12">
      <Bento3DMapSection />
    </section>
  );
}
```

### How It Works
1. **Map initializes** centered on Bangalore with 3D perspective
2. **Markers render** for all 10 cities (Bangalore highlighted)
3. **Plane animates** continuously above Bangalore
4. **Flight paths** connect cities with animated lines
5. **Click any marker** to see city details in a popup and info card

---

## 🎨 Customization

### Change Map Style
```tsx
// In Bento3DMapSection.tsx, change the mapStyle prop:
mapStyle="mapbox://styles/mapbox/light-v11"     // Light theme
mapStyle="mapbox://styles/mapbox/streets-v12"   // Streets view
mapStyle="mapbox://styles/mapbox/satellite-v9"  // Satellite
mapStyle="mapbox://styles/mapbox/outdoors-v12"  // Outdoors
```

### Adjust Initial View
```tsx
const [viewState, setViewState] = useState({
  longitude: 77.5946,  // Centered longitude
  latitude: 12.9716,   // Centered latitude
  zoom: 12,            // Change zoom level (5=country, 15=street)
  pitch: 60,           // 3D tilt (0=flat, 85=extreme)
  bearing: 45,         // Rotation in degrees
});
```

### Add More Cities
```tsx
const locations: Location[] = [
  // ... existing cities ...
  {
    id: 11,
    name: 'Surat',
    subtitle: 'Diamond City',
    longitude: 72.8479,
    latitude: 21.1702,
    color: '#FBBF24'
  }
];
```

---

## 🎮 Interactive Features

### User Interactions
- **Click marker** → View city details popup and info card
- **Close popup** → Click X or click elsewhere on map
- **Pan** → Drag the map with mouse
- **Zoom** → Scroll wheel or pinch on mobile
- **Rotate** → Right-click + drag (or Ctrl + drag)
- **Tilt** → Ctrl + scroll
- **Geolocation** → Click compass icon to find yourself
- **Fullscreen** → Click fullscreen icon to expand map

---

## 🔧 Technical Details

### State Management
```tsx
// Selected location for popup
const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

// Map view state (position, zoom, angle)
const [viewState, setViewState] = useState({
  longitude: number,
  latitude: number,
  zoom: number,
  pitch: number,
  bearing: number,
});
```

### Component Tree
```
Bento3DMapSection (Main)
├── AnimatedPlaneOverlay
│   ├── SVG Flight Paths
│   ├── Animated Plane
│   └── Trail Particles
├── Map (Mapbox GL)
│   ├── Marker (Bangalore)
│   │   └── CustomMarker
│   ├── Marker (Other Cities)
│   │   └── CustomMarker
│   ├── Popup (Selected Location)
│   ├── GeolocateControl
│   └── FullscreenControl
└── Info Card (Location Details)
```

---

## 📊 Performance Tips

### Optimize Bundle Size
Mapbox GL adds ~1.6MB to your build. For better performance:

1. **Lazy Load the Component**
```tsx
import { lazy, Suspense } from 'react';

const Bento3DMapSection = lazy(() => 
  import('@/components/Bento3DMapSection')
);

export function LocationPage() {
  return (
    <Suspense fallback={<div>Loading map...</div>}>
      <Bento3DMapSection />
    </Suspense>
  );
}
```

2. **Code Splitting in Vite Config**
```ts
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'mapbox': ['mapbox-gl', 'react-map-gl']
        }
      }
    }
  }
});
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Blank white map** | Check VITE_MAPBOX_TOKEN is valid and has public scope |
| **"Failed to fetch token" error** | Verify token format starts with `pk.` |
| **Markers not showing** | Ensure coordinates are within valid ranges (lat: -90 to 90, lng: -180 to 180) |
| **Map not responsive** | Check that parent container has defined height |
| **Mapbox logo/attribution showing** | Already hidden with `attributionControl={false}` |
| **Performance is slow** | Consider reducing marker count or using layers instead |

---

## 🌍 Browser Support
- Chrome/Chromium (✅ Full support)
- Firefox (✅ Full support)
- Safari (✅ Full support)
- Edge (✅ Full support)
- Mobile browsers (✅ Full support with touch gestures)

**Requirements:**
- Modern browser with WebGL support
- Stable internet connection
- HTTPS in production (Mapbox requirement)

---

## 📚 Additional Resources

### Official Documentation
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [Mapbox API Reference](https://docs.mapbox.com/api/)

### Create Custom Styles
- [Mapbox Studio](https://studio.mapbox.com/) - Design custom map styles

### Map Layers & Features
- [Mapbox Tilesets](https://docs.mapbox.com/mapbox-gl-js/overview/)
- [GeoJSON Support](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/)

---

## ✅ Deployment Checklist

Before deploying to production:

- [ ] Replace placeholder token in `.env.local` with real Mapbox token
- [ ] Test on production domain (token is domain-restricted)
- [ ] Verify map loads without errors
- [ ] Check all markers display correctly
- [ ] Test on mobile devices
- [ ] Verify attribution is hidden (clean UI)
- [ ] Check performance on slower connections
- [ ] Enable HTTPS (required by Mapbox)

---

## 🎉 You're All Set!

Your enhanced 3D location map is ready to showcase Bangalore as your base location with beautiful flight path animations connecting to India's major metropolitan areas!

**Need help?**
- Check browser console (F12) for error messages
- Verify Mapbox token has correct permissions
- Ensure `.env.local` is in project root
- Restart dev server after env changes

Happy mapping! 🗺️✈️
