import { useState, useEffect } from 'react';
import { getLogo, preloadLogo } from '../config/logos';

interface UseLogoOptions {
  context?: 'header' | 'footer' | 'loading' | 'email' | 'custom';
  device?: 'desktop' | 'mobile';
  variant?: 'withText' | 'iconOnly';
  theme?: 'light' | 'dark' | 'color';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  preload?: boolean;
}

interface UseLogoReturn {
  logoUrl: string;
  isLoading: boolean;
  error: string | null;
  reload: () => void;
}

export const useLogo = (options: UseLogoOptions = {}): UseLogoReturn => {
  const {
    context = 'custom',
    device = 'desktop',
    variant,
    theme,
    size,
    preload = false
  } = options;

  const [isLoading, setIsLoading] = useState(preload);
  const [error, setError] = useState<string | null>(null);

  // Dapatkan URL logo
  const logoUrl = getLogo(context, device, { variant, theme, size });

  // Fungsi untuk reload logo
  const reload = () => {
    if (preload) {
      setIsLoading(true);
      setError(null);
      
      preloadLogo(logoUrl)
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  };

  // Preload logo jika diminta
  useEffect(() => {
    if (preload) {
      reload();
    }
  }, [logoUrl, preload]);

  return {
    logoUrl,
    isLoading,
    error,
    reload
  };
};

// Hook untuk responsive logo
export const useResponsiveLogo = (
  context: 'header' | 'footer' | 'loading' | 'email' | 'custom' = 'custom',
  options?: Omit<UseLogoOptions, 'context' | 'device'>
) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Deteksi ukuran layar
  useEffect(() => {
    const checkDevice = () => {
      setDevice(window.innerWidth < 768 ? 'mobile' : 'desktop');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return useLogo({ ...options, context, device });
};