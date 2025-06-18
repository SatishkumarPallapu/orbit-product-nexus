# Quick Start - Mapbox 3D Map Component

## ⚡ 30-Second Setup

### 1. Add Your Mapbox Token to `.env.local`
```env
VITE_MAPBOX_TOKEN=pk.your_actual_token_here
```

### 2. Get token from: https://account.mapbox.com/tokens/

### 3. Use the component
```tsx
import { Bento3DMapSection } from '@/components/Bento3DMapSection';

export default function Page() {
  return <Bento3DMapSection />;
}
```

---

## 🎯 What You Get

✅ **3D Interactive Map** - Dark theme with Bangalore centered  
✅ **Animated Plane** - Hovering above your base location  
✅ **Flight Paths** - Connecting to 9 other Indian cities  
✅ **Interactive Markers** - Click to see city details  
✅ **Responsive Design** - Works on desktop & mobile  
✅ **No Mapbox Branding** - Clean UI with controls hidden  

---

## 📍 Features at a Glance

| Feature | Details |
|---------|---------|
| Base Location | Bangalore (12.97°N, 77.59°E) |
| Map Style | Dark theme with 3D perspective |
| Included Cities | 10 major Indian metros |
| Zoom Level | 12 (City view) |
| Pitch | 60° (3D tilt) |
| Bearing | 45° (Rotated) |

---

## 🎮 How to Use

1. **Click any marker** → See city popup
2. **Drag map** → Pan around
3. **Scroll wheel** → Zoom in/out
4. **Click geolocation** (🧭) → Find yourself
5. **Click fullscreen** (⛶) → Expand map

---

## 🔑 Mapbox Token Setup

### Get Free Token (1 minute)
```
1. Visit: https://www.mapbox.com/
2. Sign up (free account)
3. Go to: Account → Tokens
4. Click: Create a token
5. Copy the token (starts with "pk.")
```

### Add to Project
```env
# .env.local (in project root)
VITE_MAPBOX_TOKEN=pk.eyJ1IjoieW91cm...
```

---

## ⚙️ Customize

### Change Zoom Level
```tsx
zoom: 5,    // See whole country
zoom: 12,   // See city (default)
zoom: 15,   // See streets
```

### Change Map Style
```tsx
mapStyle="mapbox://styles/mapbox/light-v11"      // Light
mapStyle="mapbox://styles/mapbox/satellite-v9"   // Satellite
mapStyle="mapbox://styles/mapbox/streets-v12"    // Streets
```

### Add New City
```tsx
{
  id: 11,
  name: 'City Name',
  subtitle: 'Description',
  longitude: 77.0,
  latitude: 28.0,
  color: '#FF6B6B'
}
```

---

## ✅ Verification Checklist

- [ ] Token pasted in `.env.local`
- [ ] Dev server restarted (`npm run dev`)
- [ ] Map loads without white background
- [ ] Markers show all 10 cities
- [ ] Plane animation visible above Bangalore
- [ ] Click marker shows popup
- [ ] Zoom/pan controls work

---

## 🆘 Quick Troubleshooting

**Map shows blank/white?**
- Check token is correct in `.env.local`
- Verify token has "Public" scope enabled
- Restart dev server: `npm run dev`

**Markers not showing?**
- Zoom out to see wider area
- Check browser console for errors
- Verify latitude/longitude are correct

**Token error?**
- Ensure token starts with `pk.`
- Check no extra spaces in `.env.local`
- Visit https://account.mapbox.com/tokens/ to verify

---

## 📦 What's Installed

```json
{
  "mapbox-gl": "^1.9.4",
  "react-map-gl": "^7.1.7"
}
```

---

## 🚀 Production Deploy

Before going live:
```bash
# 1. Replace token with production token
# Edit .env.local with your real Mapbox token

# 2. Build project
npm run build

# 3. Deploy (Vercel, Netlify, etc.)
# Make sure VITE_MAPBOX_TOKEN is set in hosting platform
```

---

## 📚 Learn More

- Mapbox Docs: https://docs.mapbox.com/mapbox-gl-js/
- React Map GL: https://visgl.github.io/react-map-gl/
- Custom Styles: https://studio.mapbox.com/

---

## 💡 Pro Tips

1. **Lazy load map** if not immediately visible for better performance
2. **Use layers** instead of many markers for 100+ locations
3. **Cache token** in environment for faster dev experience
4. **Restrict token to domain** in production for security

---

**All set! Your Bangalore-centered 3D map is ready! 🗺️✈️**
