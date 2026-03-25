'use client';
import { useEffect } from 'react';

export default function OneSignalInit() {
  useEffect(() => {
    import('react-onesignal').then(({ default: OneSignal }) => {
      OneSignal.init({
        appId: 'ab8387b0-92e7-4da6-9596-ccef9aae0600',
        allowLocalhostAsSecureOrigin: true,
        notifyButton: { enable: true, position: 'bottom-left' } as any,
      }).then(() => {
        OneSignal.Slidedown.promptPush({ force: true });
      });
    });
  }, []);
  return null;
}
