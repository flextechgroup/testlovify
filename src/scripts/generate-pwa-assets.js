
#!/usr/bin/env node

import { resolve } from 'path';
import { execSync } from 'child_process';

console.log('Generating PWA assets...');

// Execute the assets generator
try {
  execSync('npx @vite-pwa/assets-generator', { stdio: 'inherit' });
  console.log('PWA assets generated successfully!');
} catch (error) {
  console.error('Error generating PWA assets:', error);
  process.exit(1);
}
