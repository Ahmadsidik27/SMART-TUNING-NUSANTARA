// File index untuk mengekspor semua konfigurasi
// Memudahkan import konfigurasi dari satu tempat

export { images, getImage, getImageById } from './images';
export { features, isFeatureEnabled, getEnabledFeatures, getFeatureInfo } from './features';
export { content, getContent, getNavigationItem, getMessage } from './content';
export { theme, getButtonClass, getCardClass, getInputClass, getColor } from './theme';
export { 
  logos, 
  logoConfig, 
  getLogo, 
  getLogoBySize, 
  getFavicon, 
  getSocialLogo, 
  getLogoAltText,
  preloadImportantLogos 
} from './logos';

// Re-export semua konfigurasi dalam satu objek
export const config = {
  images,
  features,
  content,
  theme,
  logos
};

// Fungsi utilitas untuk debugging
export const debugConfig = () => {
  console.group('🔧 AutoTech Academy Configuration');
  console.log('📸 Images:', Object.keys(images));
  console.log('⚡ Features:', Object.keys(features));
  console.log('📝 Content:', Object.keys(content));
  console.log('🎨 Theme:', Object.keys(theme));
  console.log('🏷️ Logos:', Object.keys(logos));
  console.groupEnd();
};