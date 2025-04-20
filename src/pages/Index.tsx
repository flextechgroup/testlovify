
import PWABadge from "@/components/PWABadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Server, Cog, Laptop, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-5 w-5 text-blue-500" />,
    title: "Progressive Web App",
    description: "Fully configured PWA with offline support, installation, and update notifications."
  },
  {
    icon: <Server className="h-5 w-5 text-green-500" />,
    title: "Service Worker Support",
    description: "Pre-configured service worker for advanced caching and offline functionality."
  },
  {
    icon: <Cog className="h-5 w-5 text-purple-500" />,
    title: "Asset Generation",
    description: "Automated PWA asset generation for all required icons and splash screens."
  },
  {
    icon: <Laptop className="h-5 w-5 text-orange-500" />,
    title: "Responsive Design",
    description: "Mobile-first responsive layout that works on all devices and screen sizes."
  },
  {
    icon: <Smartphone className="h-5 w-5 text-pink-500" />,
    title: "Installation Ready",
    description: "Meets all the criteria for installation on desktop and mobile browsers."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-blue-600">PWA Scaffold</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="https://github.com/your-repo/pwa-scaffold" className="text-slate-600 hover:text-blue-600 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://vitejs.dev/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Vite
                </a>
              </li>
              <li>
                <a href="https://vite-pwa-org.netlify.app/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Vite PWA
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <PWABadge className="mb-6" />

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">React PWA Scaffold</h2>
            <p className="text-xl text-slate-600">
              A production-ready Progressive Web App foundation built with Vite, React, and TypeScript.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-2">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Getting Started</h3>
            <p className="text-blue-700 mb-4">
              This scaffold is ready to use and can be customized for your specific needs.
            </p>
            <div className="bg-blue-900 text-blue-100 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>
                  # Clone the repository{'\n'}
                  git clone https://github.com/your-repo/pwa-scaffold.git{'\n\n'}
                  # Install dependencies{'\n'}
                  npm install{'\n\n'}
                  # Start development server{'\n'}
                  npm run dev{'\n\n'}
                  # Build for production{'\n'}
                  npm run build
                </code>
              </pre>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <img src="/favicon.svg" alt="Logo" className="w-6 h-6" />
                <span className="font-semibold">PWA Scaffold</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">A reusable PWA foundation for your projects</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                License
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
