
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { registerServiceWorker } from './registerSW';
import useLocalStorage from '@/hooks/useLocalStorage';

interface PWAContextType {
  offlineReady: boolean;
  needRefresh: boolean;
  updateServiceWorker: () => Promise<void>;
  installPrompt: Event | null;
  installApp: () => Promise<void>;
  isAppInstalled: boolean;
  dismissedMessages: string[];
  dismissMessage: (messageType: string) => void;
}

const PWAContext = createContext<PWAContextType>({
  offlineReady: false,
  needRefresh: false,
  updateServiceWorker: async () => {},
  installPrompt: null,
  installApp: async () => {},
  isAppInstalled: false,
  dismissedMessages: [],
  dismissMessage: () => {},
});

export const usePWA = () => useContext(PWAContext);

interface PWAProviderProps {
  children: ReactNode;
}

export const PWAProvider: React.FC<PWAProviderProps> = ({ children }) => {
  const [offlineReady, setOfflineReady] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [updateSW, setUpdateSW] = useState<() => Promise<void>>(() => async () => {});
  const [dismissedMessages, setDismissedMessages] = useLocalStorage<string[]>('pwa-dismissed-messages', []);

  useEffect(() => {
    // Check if app is installed (or in standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as any).standalone === true) {
      setIsAppInstalled(true);
    }

    // Listen for display mode changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsAppInstalled(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Capture the install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', () => setIsAppInstalled(true));

    // Register service worker
    const { updateSW: update } = registerServiceWorker({
      onNeedRefresh: () => {
        setNeedRefresh(true);
      },
      onOfflineReady: () => {
        setOfflineReady(true);
      },
      onRegistered: (registration) => {
        console.log('SW Registered:', registration);
      },
      onRegisterError: (error) => {
        console.error('SW registration error', error);
      }
    });

    setUpdateSW(() => update);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installApp = async () => {
    if (!installPrompt) return;
    
    try {
      // Show the install prompt
      (installPrompt as any).prompt();
      
      // Wait for the user to respond to the prompt
      const choiceResult = await (installPrompt as any).userChoice;
      
      // Reset the install prompt
      setInstallPrompt(null);
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    } catch (error) {
      console.error('Error installing app:', error);
    }
  };

  const updateServiceWorker = async () => {
    await updateSW();
  };

  const dismissMessage = (messageType: string) => {
    setDismissedMessages([...dismissedMessages, messageType]);
  };

  return (
    <PWAContext.Provider 
      value={{
        offlineReady,
        needRefresh,
        updateServiceWorker,
        installPrompt,
        installApp,
        isAppInstalled,
        dismissedMessages,
        dismissMessage
      }}
    >
      {children}
    </PWAContext.Provider>
  );
};
