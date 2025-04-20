
import { registerSW } from 'virtual:pwa-register';

interface RegisterSWOptions {
  onNeedRefresh: () => void;
  onOfflineReady: () => void;
  onRegistered: (registration: ServiceWorkerRegistration | undefined) => void;
  onRegisterError: (error: any) => void;
}

export function registerServiceWorker(options: RegisterSWOptions) {
  const {
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;

  const updateSW = registerSW({
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  });

  return { updateSW };
}
