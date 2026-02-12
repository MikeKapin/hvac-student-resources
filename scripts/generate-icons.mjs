// Generate PWA icons using node-canvas
// Run: npm install canvas --save-dev && node scripts/generate-icons.mjs

import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

function drawIcon(ctx, size) {
  const scale = size / 512;
  
  // Background gradient (simulated with solid color blend)
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#1a1a2e');
  gradient.addColorStop(1, '#16213e');
  
  // Rounded rectangle background
  const radius = size * 0.18;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Flame gradient
  const flameGradient = ctx.createLinearGradient(size/2, size * 0.75, size/2, size * 0.15);
  flameGradient.addColorStop(0, '#ff6b35');
  flameGradient.addColorStop(0.5, '#f7931e');
  flameGradient.addColorStop(1, '#ffcc00');
  
  // Draw flame shape
  ctx.save();
  ctx.translate(size/2, size/2);
  ctx.scale(scale * 0.7, scale * 0.7);
  
  ctx.beginPath();
  // Outer flame
  ctx.moveTo(0, -200);
  ctx.bezierCurveTo(-100, -100, -120, 50, -100, 120);
  ctx.bezierCurveTo(-80, 180, -40, 200, 0, 200);
  ctx.bezierCurveTo(40, 200, 80, 180, 100, 120);
  ctx.bezierCurveTo(120, 50, 100, -100, 0, -200);
  ctx.closePath();
  ctx.fillStyle = flameGradient;
  ctx.fill();
  
  // Inner flame (darker hole)
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-40, 40, -50, 80, -40, 120);
  ctx.bezierCurveTo(-30, 150, -15, 160, 0, 160);
  ctx.bezierCurveTo(15, 160, 30, 150, 40, 120);
  ctx.bezierCurveTo(50, 80, 40, 40, 0, 0);
  ctx.closePath();
  ctx.fillStyle = '#1a1a2e';
  ctx.fill();
  
  ctx.restore();
}

// Generate icons
const sizes = [32, 180, 192, 512];

for (const size of sizes) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  drawIcon(ctx, size);
  
  const buffer = canvas.toBuffer('image/png');
  const filename = size === 32 ? 'favicon.png' : 
                   size === 180 ? 'apple-touch-icon.png' : 
                   `icon-${size}.png`;
  writeFileSync(join(publicDir, filename), buffer);
  console.log(`Generated ${filename}`);
}

// Also create favicon.ico (just copy the 32px as ico)
console.log('Icons generated successfully!');
