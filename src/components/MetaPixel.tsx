import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (command: string, ...args: unknown[]) => void;
  }
}

interface MetaPixelProps {
  pixelId: string;
}

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  useEffect(() => {
    if (!pixelId || typeof window === 'undefined') return;

    // If fbq already exists, just re-init
    if (window.fbq) {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.async = true;

    script.onload = () => {
      if (window.fbq) {
        window.fbq('init', pixelId);
        window.fbq('track', 'PageView');
      }
    };

    document.head.appendChild(script);
  }, [pixelId]);

  return null;
}