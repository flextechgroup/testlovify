
import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  headLinkOptions: {
    preset: '2023'
  },
  preset: {
    // Apple platform icons
    apple: {
      sizes: [180],
      resizeOptions: {
        background: '#f8fafc',
        padding: 0.15,
      },
    },
    // Favicon
    favicon: {
      sizes: [16, 32, 48],
      transparent: true,
    },
    // PWA icons
    pwa: {
      sizes: [64, 192, 512],
      transparent: true,
      padding: 0.05,
      resizeOptions: {
        background: '#3b82f6',
      },
    },
    // PWA icons with maskable support
    maskable: {
      sizes: [512],
      padding: 0.2,
      resizeOptions: {
        background: '#3b82f6',
      },
    },
  },
  images: ['public/favicon.svg'],
});
