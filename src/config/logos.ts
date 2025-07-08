// Konfigurasi Logo untuk AutoTech Academy
// File ini memudahkan pengelolaan semua logo dan branding

export const logos = {
  // Logo Utama
  main: {
    // Logo dengan teks (untuk header, footer)
    withText: {
      light: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop', // Logo untuk background terang
      dark: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop', // Logo untuk background gelap
      color: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop' // Logo berwarna
    },
    
    // Logo tanpa teks (icon only)
    iconOnly: {
      light: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      dark: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      color: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop'
    },

    // Logo untuk berbagai ukuran
    sizes: {
      small: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=120&h=40&fit=crop', // 120x40px
      medium: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop', // 200x60px
      large: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300&h=100&fit=crop', // 300x100px
      xlarge: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=120&fit=crop' // 400x120px
    }
  },

  // Favicon dan Icon
  favicon: {
    ico: '/favicon.ico', // File .ico untuk browser lama
    png16: '/favicon-16x16.png', // 16x16px PNG
    png32: '/favicon-32x32.png', // 32x32px PNG
    png192: '/android-chrome-192x192.png', // 192x192px untuk Android
    png512: '/android-chrome-512x512.png', // 512x512px untuk Android
    appleTouchIcon: '/apple-touch-icon.png', // 180x180px untuk iOS
    safariPinnedTab: '/safari-pinned-tab.svg' // SVG untuk Safari pinned tab
  },

  // Logo untuk Social Media
  social: {
    facebook: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop', // 1200x630px
    twitter: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop', // 1200x600px
    linkedin: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200&h=627&fit=crop', // 1200x627px
    instagram: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1080&fit=crop', // 1080x1080px
    youtube: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1280&h=720&fit=crop' // 1280x720px
  },

  // Logo untuk Email dan Print
  email: {
    header: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600&h=150&fit=crop', // Email header
    signature: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop' // Email signature
  },

  // Logo untuk berbagai konteks
  contexts: {
    loading: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', // Loading spinner
    error: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop', // Error page
    maintenance: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', // Maintenance page
    certificate: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300&h=100&fit=crop' // Certificate
  },

  // Watermark dan Brand Mark
  watermark: {
    light: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=100&h=30&fit=crop', // Watermark terang
    dark: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=100&h=30&fit=crop', // Watermark gelap
    transparent: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=100&h=30&fit=crop' // Watermark transparan
  }
};

// Konfigurasi penggunaan logo
export const logoConfig = {
  // Pengaturan default
  defaults: {
    variant: 'withText' as keyof typeof logos.main,
    theme: 'light' as 'light' | 'dark' | 'color',
    size: 'medium' as keyof typeof logos.main.sizes
  },

  // Aturan penggunaan berdasarkan konteks
  usage: {
    header: {
      desktop: { variant: 'withText', theme: 'color', size: 'medium' },
      mobile: { variant: 'iconOnly', theme: 'color', size: 'small' }
    },
    footer: {
      variant: 'withText',
      theme: 'light',
      size: 'small'
    },
    loading: {
      variant: 'iconOnly',
      theme: 'color',
      size: 'medium'
    },
    email: {
      variant: 'withText',
      theme: 'color',
      size: 'medium'
    }
  },

  // Alternatif text untuk accessibility
  altText: {
    main: 'AutoTech Academy - Platform E-Learning Otomotif',
    icon: 'AutoTech Academy Logo',
    loading: 'AutoTech Academy Loading',
    error: 'AutoTech Academy Error'
  }
};

// Fungsi helper untuk mendapatkan logo
export const getLogo = (
  context: 'header' | 'footer' | 'loading' | 'email' | 'custom' = 'custom',
  device: 'desktop' | 'mobile' = 'desktop',
  customOptions?: {
    variant?: keyof typeof logos.main;
    theme?: 'light' | 'dark' | 'color';
    size?: keyof typeof logos.main.sizes;
  }
): string => {
  let config = logoConfig.defaults;

  // Gunakan konfigurasi berdasarkan konteks
  if (context !== 'custom') {
    const contextConfig = logoConfig.usage[context];
    if (typeof contextConfig === 'object' && 'desktop' in contextConfig) {
      config = { ...config, ...contextConfig[device] };
    } else {
      config = { ...config, ...contextConfig };
    }
  }

  // Override dengan custom options
  if (customOptions) {
    config = { ...config, ...customOptions };
  }

  // Ambil logo berdasarkan konfigurasi
  if (config.variant === 'iconOnly') {
    return logos.main.iconOnly[config.theme];
  } else if (config.variant === 'withText') {
    return logos.main.withText[config.theme];
  } else {
    return logos.main.sizes[config.size];
  }
};

// Fungsi untuk mendapatkan logo berdasarkan ukuran
export const getLogoBySize = (size: keyof typeof logos.main.sizes): string => {
  return logos.main.sizes[size];
};

// Fungsi untuk mendapatkan favicon
export const getFavicon = (type: keyof typeof logos.favicon = 'ico'): string => {
  return logos.favicon[type];
};

// Fungsi untuk mendapatkan logo social media
export const getSocialLogo = (platform: keyof typeof logos.social): string => {
  return logos.social[platform];
};

// Fungsi untuk mendapatkan alt text
export const getLogoAltText = (context: keyof typeof logoConfig.altText = 'main'): string => {
  return logoConfig.altText[context];
};

// Fungsi untuk validasi logo URL
export const isValidLogoUrl = (url: string): boolean => {
  try {
    new URL(url);
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  } catch {
    return false;
  }
};

// Fungsi untuk preload logo
export const preloadLogo = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load logo: ${url}`));
    img.src = url;
  });
};

// Fungsi untuk batch preload semua logo penting
export const preloadImportantLogos = async (): Promise<void> => {
  const importantLogos = [
    logos.main.withText.color,
    logos.main.iconOnly.color,
    logos.main.sizes.medium
  ];

  try {
    await Promise.all(importantLogos.map(url => preloadLogo(url)));
  } catch (error) {
    console.warn('Some logos failed to preload:', error);
  }
};