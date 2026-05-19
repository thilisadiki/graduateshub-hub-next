'use client';

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import Script from 'next/script';
import { ShieldCheck } from 'lucide-react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export interface TurnstileWidgetHandle {
  reset: () => void;
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  ({ onVerify, onExpire, onError }, ref) => {
    const [isReady, setIsReady] = useState(!SITE_KEY);
    const turnstileRef = useRef<HTMLDivElement>(null);
    const widgetId = useRef<string | null>(null);

    // Use refs for callbacks to avoid re-running useEffect if they change
    const callbacks = useRef({ onVerify, onExpire, onError });
    useEffect(() => {
      callbacks.current = { onVerify, onExpire, onError };
    }, [onVerify, onExpire, onError]);

    const renderTurnstile = () => {
      if (!SITE_KEY || !turnstileRef.current || !window.turnstile) return;
      
      // If already rendered, don't render again
      if (widgetId.current) return;

      widgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => {
          setIsReady(true);
          callbacks.current.onVerify(token);
        },
        'expired-callback': () => {
          setIsReady(false);
          callbacks.current.onExpire?.();
        },
        'error-callback': () => {
          setIsReady(false);
          callbacks.current.onError?.();
        },
      });
    };

    useEffect(() => {
      if (!SITE_KEY) {
        callbacks.current.onVerify('');
      }

      return () => {
        if (SITE_KEY && widgetId.current && window.turnstile) {
          window.turnstile.remove(widgetId.current);
          widgetId.current = null;
        }
      };
    }, []);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setIsReady(!SITE_KEY);
        if (SITE_KEY && widgetId.current && window.turnstile) {
          window.turnstile.reset(widgetId.current);
        }
      }
    }));

    return (
      <>
        {SITE_KEY && (
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
            onLoad={renderTurnstile}
          />
        )}
        {SITE_KEY && (
          <div>
            <div ref={turnstileRef} />
            {!isReady && (
              <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                <ShieldCheck size={12} /> Loading security check...
              </p>
            )}
          </div>
        )}
      </>
    );
  }
);

TurnstileWidget.displayName = 'TurnstileWidget';

export default TurnstileWidget;
