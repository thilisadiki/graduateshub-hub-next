'use client';
import { useEffect } from 'react';

export default function OneSignalInit() {
  useEffect(() => {
    // Defer the OneSignal SDK past the critical load window so its main-thread
    // work doesn't count against Total Blocking Time / hydration.
    const start = () => {
      import('react-onesignal').then(({ default: OneSignal }) => {
        OneSignal.init({
          appId: 'ab8387b0-92e7-4da6-9596-ccef9aae0600',
          allowLocalhostAsSecureOrigin: process.env.NODE_ENV === 'development',
          notifyButton: { enable: true, position: 'bottom-left' } as any,
        });
      });
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(start, { timeout: 5000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(start, 3000);
    return () => clearTimeout(id);
  }, []);
  return null;
}
