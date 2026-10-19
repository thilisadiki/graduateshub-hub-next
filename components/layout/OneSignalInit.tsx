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

          // Keep the bell so users can manage their subscription at any time
          notifyButton: { enable: true, position: 'bottom-left' } as any,

          // Slide-down prompt shown before the browser's native permission dialog.
          // Giving users a branded prompt first significantly increases opt-in rates
          // compared to hitting them with the raw browser dialog cold.
          promptOptions: {
            slidedown: {
              prompts: [
                {
                  type: 'push',
                  autoPrompt: true,
                  // Delay: show after 30 s on page and 1 page view so first-time
                  // visitors see some content before being interrupted.
                  delay: {
                    pageViews: 1,
                    timeDelay: 30,
                  },
                  text: {
                    actionMessage:
                      "Don't miss new career guides - get notified the moment we publish.",
                    acceptButton: 'Subscribe',
                    cancelButton: 'Maybe later',
                  },
                },
              ],
            },
          } as any,
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
