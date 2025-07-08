import React from 'react';
import { getLogo, getLogoAltText } from '../config/logos';

interface LogoProps {
  // Konteks penggunaan logo
  context?: 'header' | 'footer' | 'loading' | 'email' | 'custom';
  
  // Device type untuk responsive
  device?: 'desktop' | 'mobile';
  
  // Custom options
  variant?: 'withText' | 'iconOnly';
  theme?: 'light' | 'dark' | 'color';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  
  // HTML attributes
  className?: string;
  alt?: string;
  onClick?: () => void;
  
  // Link wrapper
  href?: string;
  linkClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  context = 'custom',
  device = 'desktop',
  variant,
  theme,
  size,
  className = '',
  alt,
  onClick,
  href,
  linkClassName = ''
}) => {
  // Dapatkan URL logo berdasarkan konfigurasi
  const logoUrl = getLogo(context, device, { variant, theme, size });
  
  // Dapatkan alt text
  const altText = alt || getLogoAltText(context === 'custom' ? 'main' : context);
  
  // Komponen gambar logo
  const logoImage = (
    <img
      src={logoUrl}
      alt={altText}
      className={`logo ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  );
  
  // Jika ada href, bungkus dengan link
  if (href) {
    return (
      <a href={href} className={linkClassName}>
        {logoImage}
      </a>
    );
  }
  
  return logoImage;
};

export default Logo;