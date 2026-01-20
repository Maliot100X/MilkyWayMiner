const fs = require('fs');
const path = require('path');

// Colors based on "neon blue/purple", "dark cosmic background"
const NEON_BLUE = '#00F0FF';
const NEON_PURPLE = '#BC13FE';
const DARK_BG = '#0B0E17';

const assets = [
  // User Requested Items
  { 
    name: 'icon.png', 
    width: 512, 
    height: 512, 
    color: 'transparent', // User asked for transparent BG
    text: 'VoidDrillersX Icon',
    stroke: NEON_BLUE 
  },
  { 
    name: 'splash.png', 
    width: 2000, 
    height: 2000, 
    color: DARK_BG, 
    text: 'VoidDrillersX Splash',
    stroke: NEON_PURPLE 
  },
  { 
    name: 'og.png', 
    width: 1200, 
    height: 630, 
    color: DARK_BG, 
    text: 'VoidDrillersX OG',
    stroke: NEON_BLUE 
  },
  { 
    name: 'frame.png', 
    width: 1200, 
    height: 630, 
    color: DARK_BG, 
    text: 'VoidDrillersX Frame',
    stroke: NEON_PURPLE 
  },
  { 
    name: 'hero.png', 
    width: 1920, 
    height: 1080, 
    color: DARK_BG, 
    text: 'Hero Image',
    stroke: NEON_BLUE 
  },
  { 
    name: 'screenshot1.png', 
    width: 1920, 
    height: 1080, 
    color: DARK_BG, 
    text: 'Screenshot 1',
    stroke: NEON_PURPLE 
  },
  { 
    name: 'screenshot2.png', 
    width: 1920, 
    height: 1080, 
    color: DARK_BG, 
    text: 'Screenshot 2',
    stroke: NEON_BLUE 
  }
];

const assetsDir = path.join(__dirname, 'public');

// Ensure public dir exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

assets.forEach(asset => {
  // SVG Generation
  // If transparent, we don't add a rect, or add a transparent one.
  // We adds a stroke rect to define the border.
  
  const bgRect = asset.color === 'transparent' 
    ? '' 
    : `<rect width="100%" height="100%" fill="${asset.color}"/>`;

  const svg = `
  <svg width="${asset.width}" height="${asset.height}" xmlns="http://www.w3.org/2000/svg">
    ${bgRect}
    <rect width="100%" height="100%" fill="none" stroke="${asset.stroke}" stroke-width="${Math.min(asset.width, asset.height) / 20}"/>
    <circle cx="50%" cy="50%" r="${Math.min(asset.width, asset.height) / 4}" fill="${asset.stroke}" opacity="0.5"/>
    <text x="50%" y="50%" font-family="Arial" font-weight="bold" font-size="${Math.min(asset.width, asset.height) / 10}" fill="white" text-anchor="middle" dy=".3em">${asset.text}</text>
  </svg>`;
  
  // Save as the requested filename (even if .png, content is SVG - project convention)
  fs.writeFileSync(path.join(assetsDir, asset.name), svg);
  console.log(`Created ${asset.name}`);
});
