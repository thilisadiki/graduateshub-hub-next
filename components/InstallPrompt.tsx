'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!promptEvent) return;
    await promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') setVisible(false);
    setPromptEvent(null);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm bg-white border border-gray-200 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300">
      <div className="relative w-10 h-10 shrink-0">
        <Image src="/logo-192x192.png" alt="Graduates Hub" fill sizes="40px" className="rounded-xl object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 text-sm leading-tight">Add to Home Screen</p>
        <p className="text-xs text-gray-500 truncate">Access Graduates Hub like an app</p>
      </div>
      <button
        onClick={handleInstall}
        className="shrink-0 bg-primary hover:bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
      >
        Install
      </button>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
