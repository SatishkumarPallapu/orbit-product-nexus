# Mapbox Integration - Setup Instructions

## Overview
The Bento3DMapSection component now uses **Mapbox GL** for rendering a 3D interactive map with Bangalore highlighted as your base location. A beautiful animated plane flies over Bangalore to indicate it as your home base.

## Features
- **3D Map Visualization**: Modern dark-themed Mapbox 3D map
- **Base Location Highlight**: Bangalore marked as your primary location (home base) with an animated plane overlay
- **Location Markers**: All major Indian cities displayed as markers
- **Interactive**: Click on markers to view location details
- **Responsive Controls**: Geolocate, Fullscreen, and Scale controls
- **Animation**: Smooth plane animation hovering over Bangalore

## Setup Instructions

### 1. Get a Mapbox Access Token
1. Sign up at [https://www.mapbox.com/](https://www.mapbox.com/)
2. Go to your Account Settings → Tokens
3. Create a new token (keep default scopes for public access)
4. Copy your token

### 2. Add Token to Environment Variables
Edit the `.env.local` file in your project root:

```env
VITE_MAPBOX_TOKEN=pk.your_actual_token_here
```

Replace `pk.your_actual_token_here` with your actual Mapbox token.

### 3. Install Dependencies
The following dependencies have been added:
- `mapbox-gl`: Core Mapbox library
- `react-map-gl`: React wrapper for Mapbox
- `@types/mapbox-gl`: TypeScript type definitions

```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

The map will be available on your portfolio page. The Bangalore location will be centered with the animated plane flying over it, indicating it as your base location.

## Component Structure

### Key Features Implemented:
- **Bangalore as Base Location**: Positioned at the center with a larger animated marker and a floating 3D plane above it
- **3D Plane Animation**: Continuously hovers and animates above Bangalore with a glow effect
- **Dark Theme**: Mapbox dark-v11 style for a modern, professional look
- **Location Markers**: All 10 Indian cities marked with color-coded pins
- **Interactive Popups**: Click any marker to see location details
- **Responsive**: Fully responsive design that works on all screen sizes

## Files Modified
- `src/components/Bento3DMapSection.tsx` - Complete rewrite to use Mapbox GL

## Important Notes
- **Public Token Security**: The token in `.env.local` is safe for public use if you keep URL restrictions enabled in Mapbox dashboard
- **Vite Environment Variables**: Vite prefixes environment variables with `VITE_` by default, so use `import.meta.env.VITE_MAPBOX_TOKEN`
- **Build Size**: Mapbox GL adds ~463KB (gzipped) to your bundle. Consider lazy-loading the component if needed
- **Free Tier**: Mapbox provides 50,000 map loads/month free

## Customization

### Change Map Center/Zoom
Edit the initial `viewState` in the component:
```typescript
const [viewState, setViewState] = useState({
  longitude: 77.5946,  // Bangalore longitude
  latitude: 12.9716,   // Bangalore latitude
  zoom: 13,            // Zoom level
  pitch: 45,           // 3D tilt angle
  bearing: 0,          // Map rotation
});
```

### Change Map Style
Replace the mapStyle prop:
- `mapbox://styles/mapbox/dark-v11` (current)
- `mapbox://styles/mapbox/light-v11`
- `mapbox://styles/mapbox/streets-v12`
- `mapbox://styles/mapbox/outdoors-v12`

### Adjust Plane Animation
Edit the `AnimatedPlaneOverlay` component's animation properties for different speeds and heights.

## Troubleshooting

### Map not loading?
1. Check if Mapbox token is correctly set in `.env.local`
2. Ensure token has proper scopes and URL restrictions disabled (or your domain added)
3. Check browser console for error messages

### Black/blank map?
- Verify your Mapbox token is valid
- Try a different style in the mapStyle prop
- Check if WebGL is supported in your browser

### Performance issues?
- Reduce `zoom` value to load fewer map tiles
- Disable 3D tilt: set `pitch: 0`
- Remove or optimize animations
