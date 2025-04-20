
import React from 'react';
import { usePWA } from '@/pwa/PWAContext';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Wifi, X } from 'lucide-react';
import { toast } from 'sonner';

interface PWABadgeProps {
  className?: string;
}

const PWABadge: React.FC<PWABadgeProps> = ({ className }) => {
  const { 
    offlineReady, 
    needRefresh, 
    updateServiceWorker, 
    installPrompt, 
    installApp,
    isAppInstalled,
    dismissedMessages,
    dismissMessage
  } = usePWA();

  // Handle update click
  const handleUpdate = () => {
    toast.promise(updateServiceWorker(), {
      loading: 'Updating application...',
      success: 'Application updated successfully!',
      error: 'Failed to update. Please refresh the page.',
    });
  };

  // Handle install click
  const handleInstall = () => {
    installApp();
    toast('Installing application...');
  };

  // Handle dismiss click
  const handleDismiss = (messageType: string) => {
    dismissMessage(messageType);
  };

  if (needRefresh && !dismissedMessages.includes('update')) {
    return (
      <div className={`flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 p-3 text-sm text-orange-700 ${className}`}>
        <RefreshCw className="h-4 w-4" />
        <span className="flex-1">New version available!</span>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-7 border-orange-300 bg-orange-50 hover:bg-orange-100"
          onClick={handleUpdate}
        >
          Update
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-7 text-orange-700 hover:bg-orange-100"
          onClick={() => handleDismiss('update')}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    );
  }

  if (offlineReady && !dismissedMessages.includes('offline')) {
    return (
      <div className={`flex items-center gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700 ${className}`}>
        <Wifi className="h-4 w-4" />
        <span>App ready for offline use</span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto h-7 text-green-700 hover:bg-green-100"
          onClick={() => handleDismiss('offline')}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    );
  }

  if (installPrompt && !isAppInstalled && !dismissedMessages.includes('install')) {
    return (
      <div className={`flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 ${className}`}>
        <Download className="h-4 w-4" />
        <span>Install this app on your device</span>
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-auto h-7 border-blue-300 bg-blue-50 hover:bg-blue-100"
          onClick={handleInstall}
        >
          Install
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-7 text-blue-700 hover:bg-blue-100"
          onClick={() => handleDismiss('install')}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    );
  }

  return null;
};

export default PWABadge;
