
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

// Create desktop screenshot (1280x800)
function createDesktopScreenshot() {
  const canvas = createCanvas(1280, 800);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 1280, 800);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 1280, 70);
  ctx.fillStyle = '#3b82f6';
  ctx.font = 'bold 24px Arial';
  ctx.fillText('PWA Scaffold', 80, 45);
  
  // Content
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 32px Arial';
  ctx.fillText('React PWA Scaffold', 120, 200);
  
  ctx.fillStyle = '#64748b';
  ctx.font = '18px Arial';
  ctx.fillText('A production-ready Progressive Web App foundation', 120, 240);
  ctx.fillText('built with Vite, React, and TypeScript', 120, 270);
  
  // Feature boxes
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(120 + i * 340, 320, 300, 180);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.strokeRect(120 + i * 340, 320, 300, 180);
  }
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join('public', 'screenshot-desktop.png'), buffer);
  console.log('Created desktop screenshot');
}

// Create mobile screenshot (750x1334 - iPhone resolution)
function createMobileScreenshot() {
  const canvas = createCanvas(750, 1334);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 750, 1334);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 750, 100);
  ctx.fillStyle = '#3b82f6';
  ctx.font = 'bold 28px Arial';
  ctx.fillText('PWA Scaffold', 50, 65);
  
  // Content
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 36px Arial';
  ctx.fillText('React PWA Scaffold', 50, 200);
  
  ctx.fillStyle = '#64748b';
  ctx.font = '22px Arial';
  ctx.fillText('A production-ready Progressive', 50, 250);
  ctx.fillText('Web App foundation', 50, 280);
  
  // Feature boxes
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(50, 320 + i * 220, 650, 180);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.strokeRect(50, 320 + i * 220, 650, 180);
  }
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join('public', 'screenshot-mobile.png'), buffer);
  console.log('Created mobile screenshot');
}

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Create screenshots if they don't exist
if (!fs.existsSync(path.join('public', 'screenshot-desktop.png'))) {
  console.log('Creating desktop screenshot...');
  createDesktopScreenshot();
} else {
  console.log('Desktop screenshot already exists');
}

if (!fs.existsSync(path.join('public', 'screenshot-mobile.png'))) {
  console.log('Creating mobile screenshot...');
  createMobileScreenshot();
} else {
  console.log('Mobile screenshot already exists');
}
