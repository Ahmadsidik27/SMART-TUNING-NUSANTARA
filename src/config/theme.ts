// Konfigurasi Tema untuk AutoTech Academy
// File ini memudahkan pengelolaan warna, font, dan styling

export const theme = {
  // Palet Warna Utama
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Biru utama
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    secondary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Orange utama
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    accent: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6', // Teal utama
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a'
    },
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c'
    }
  },

  // Tipografi
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem'   // 60px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    }
  },

  // Spacing (menggunakan sistem 8px)
  spacing: {
    0: '0',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem',    // 96px
    32: '8rem'     // 128px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px'
  },

  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  },

  // Breakpoints untuk Responsive Design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Animasi dan Transisi
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  // Komponen Styling
  components: {
    button: {
      primary: {
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-white',
        padding: 'px-6 py-3',
        rounded: 'rounded-lg',
        font: 'font-semibold',
        transition: 'transition-colors'
      },
      secondary: {
        bg: 'bg-orange-500',
        hover: 'hover:bg-orange-600',
        text: 'text-white',
        padding: 'px-6 py-3',
        rounded: 'rounded-lg',
        font: 'font-semibold',
        transition: 'transition-colors'
      },
      outline: {
        bg: 'bg-transparent',
        border: 'border-2 border-blue-600',
        hover: 'hover:bg-blue-600',
        text: 'text-blue-600 hover:text-white',
        padding: 'px-6 py-3',
        rounded: 'rounded-lg',
        font: 'font-semibold',
        transition: 'transition-colors'
      }
    },
    card: {
      base: {
        bg: 'bg-white',
        shadow: 'shadow-lg',
        rounded: 'rounded-lg',
        padding: 'p-6',
        hover: 'hover:shadow-xl',
        transition: 'transition-shadow'
      }
    },
    input: {
      base: {
        bg: 'bg-white',
        border: 'border border-gray-300',
        rounded: 'rounded-lg',
        padding: 'px-4 py-2',
        focus: 'focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        placeholder: 'placeholder-gray-400'
      }
    }
  }
};

// Fungsi helper untuk mendapatkan kelas CSS
export const getButtonClass = (variant: 'primary' | 'secondary' | 'outline' = 'primary'): string => {
  const button = theme.components.button[variant];
  return Object.values(button).join(' ');
};

export const getCardClass = (): string => {
  const card = theme.components.card.base;
  return Object.values(card).join(' ');
};

export const getInputClass = (): string => {
  const input = theme.components.input.base;
  return Object.values(input).join(' ');
};

// Fungsi untuk mendapatkan warna berdasarkan nama
export const getColor = (color: string, shade: number = 500): string => {
  const colorMap = theme.colors as any;
  return colorMap[color]?.[shade] || theme.colors.neutral[500];
};