'use client';
import { useEffect, useRef } from 'react';

export default function OneSignalInit() {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a full-screen dim overlay and append it to the body.
    // It stays hidden (opacity 0, pointer-events none) until the OneSignal
    // slidedown appears, at which point it fades in to focus the prompt.
    const overlay = document.createElement('div');
    overlay.setAttribute('aria-hidden', 'true');
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,0)',
      backdropFilter: 'blur(0px)',
      transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
      zIndex: '9998', // sits just below OneSignal's z-index (9999)
      pointerEvents: 'none',
    });
    document.body.appendChild(overlay);
    overlayRef.current = overlay;

    const showOverlay = () => {
      overlay.style.background = 'rgba(0,0,0,0.55)';
      overlay.style.backdropFilter = 'blur(2px)';
      overlay.style.pointerEvents = 'auto';
    };
    const hideOverlay = () => {
      overlay.style.background = 'rgba(0,0,0,0)';
      overlay.style.backdropFilter = 'blur(0px)';
      overlay.style.pointerEvents = 'none';
    };

    // MutationObserver watches for OneSignal injecting its slidedown container.
    // OneSignal uses the class `onesignal-slidedown-container` on its prompt element.
    const observer = new MutationObserver(() => {
      const slidedown =
        document.querySelector('.onesignal-slidedown-container') ||
        document.querySelector('#onesignal-slidedown-container') ||
        document.querySelector('[class*="slidedown"]');
      if (slidedown) {
        showOverlay();
        // Clicking the overlay dismisses the prompt (same as "Maybe later")
        overlay.onclick = () => {
          const cancelBtn = document.querySelector<HTMLElement>(
            '.onesignal-slidedown-cancel-button, [class*="cancel"]'
          );
          cancelBtn?.click();
          hideOverlay();
        };
      } else {
        hideOverlay();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

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
          promptOptions: {
            slidedown: {
              prompts: [
                {
                  type: 'push',
                  autoPrompt: true,
                  // Delay: show after 30 s and 1 page view so first-time
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

    let timerId: ReturnType<typeof setTimeout>;
    let idleId: ReturnType<typeof requestIdleCallback>;

    if ('requestIdleCallback' in window) {
      idleId = requestIdleCallback(start, { timeout: 5000 });
    } else {
      timerId = setTimeout(start, 3000);
    }

    return () => {
      observer.disconnect();
      overlay.remove();
      if (idleId) cancelIdleCallback(idleId);
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return null;
}
