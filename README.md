
# React PWA Scaffold

A comprehensive Progressive Web App (PWA) scaffold built with Vite, React, and TypeScript. This project provides a solid foundation for building modern web applications with full PWA support.

## Features

- **Complete PWA Setup** - Service worker registration, offline support, and app updates
- **Install Prompts** - Native install prompt handling for both manual and automatic installation
- **Offline Ready** - Built-in offline detection and notification
- **Update Notifications** - Notifies users when a new version is available
- **Asset Generation** - Automated PWA asset generation for all required icons and splash screens

## Prerequisites

- Node.js >= 18
- npm >= 9

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/pwa-scaffold.git
cd pwa-scaffold
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## PWA Assets

The project includes a custom favicon SVG and configuration for generating all required PWA assets.

### Regenerating PWA Assets

To regenerate all PWA assets from the source SVG:

```bash
npm run generate-pwa-assets
```

This will use the `@vite-pwa/assets-generator` package to create all necessary icons and splash screens.

## Building for Production

To build the application for production:

```bash
npm run build
```

The build output will be in the `dist` directory.

## PWA Install Criteria

For the PWA install prompt to appear in browsers, the following criteria must be met:

1. The app must have a valid web manifest with required fields:
   - `name`
   - `icons` (including a 192px and a 512px icon)
   - `start_url`
   - `display` (standalone or fullscreen)

2. The app must be served over HTTPS

3. The app must have a registered service worker

4. The user must have engaged with the site for at least 30 seconds

All of these criteria are met by this scaffold by default.

## Service Worker Strategies

This scaffold uses the `generateSW` strategy from Workbox by default. For advanced service worker customization, you can:

1. Uncomment and modify the `src/service-worker.ts` file
2. Update the Vite PWA plugin configuration in `vite.config.ts` to use the `injectManifest` strategy

## Project Structure

```
├── public/
│   ├── favicon.svg              # Source SVG for all PWA icons
│   ├── screenshot-desktop.png   # Desktop screenshot for the manifest
│   └── screenshot-mobile.png    # Mobile screenshot for the manifest
├── src/
│   ├── components/
│   │   └── PWABadge.tsx         # PWA notification component
│   ├── pages/
│   │   ├── Index.tsx            # Main page
│   │   └── NotFound.tsx         # 404 page
│   ├── pwa/
│   │   ├── PWAContext.tsx       # PWA state and functionality provider
│   │   └── registerSW.ts        # Service worker registration
│   ├── service-worker.ts        # Custom service worker for injectManifest strategy
│   ├── App.tsx                  # Main application component
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML template with PWA meta tags
├── pwa-assets.config.ts         # PWA asset generation configuration
├── vite.config.ts               # Vite configuration with PWA plugin
└── package.json                 # Project dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate-pwa-assets` - Generate PWA assets from source SVG

## License

This project is licensed under the MIT License.
