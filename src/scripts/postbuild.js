
#!/usr/bin/env node

import { execSync } from 'child_process';

// Run the PWA assets generator if they don't exist yet
try {
  console.log('Checking for PWA assets...');
  const fs = await import('fs');
  
  if (!fs.existsSync('./public/pwa-64x64.png')) {
    console.log('PWA assets not found, generating...');
    execSync('npm run generate-pwa-assets', { stdio: 'inherit' });
  } else {
    console.log('PWA assets already exist. Skipping generation.');
  }
} catch (error) {
  console.error('Error in post-build process:', error);
}
