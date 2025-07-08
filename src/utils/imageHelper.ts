// Utility functions untuk mengelola gambar
import { getImageById } from '../config/images';

// Fungsi untuk mendapatkan gambar dengan fallback
export const getImageWithFallback = (
  primaryUrl: string, 
  fallbackUrl?: string
): string => {
  return primaryUrl || fallbackUrl || 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop';
};

// Fungsi untuk mengoptimalkan URL gambar Pexels
export const optimizePexelsImage = (
  url: string, 
  width: number = 400, 
  height: number = 300, 
  fit: 'crop' | 'cover' = 'crop'
): string => {
  if (!url.includes('pexels.com')) return url;
  
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=${fit}`;
};

// Fungsi untuk mendapatkan gambar berdasarkan kategori dan ID
export const getCategoryImage = (
  category: 'course' | 'ebook' | 'sparePart',
  id: string,
  size?: { width: number; height: number }
): string => {
  let image = getImageById(category, id);
  
  if (size) {
    image = optimizePexelsImage(image, size.width, size.height);
  }
  
  return image;
};

// Fungsi untuk mendapatkan gambar avatar
export const getAvatarImage = (name: string): string => {
  // Menggunakan initial untuk menentukan avatar
  const initial = name.charAt(0).toLowerCase();
  const avatarMap: Record<string, string> = {
    'm': 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    's': 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    'j': 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    'l': 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  };
  
  return avatarMap[initial] || avatarMap['m'];
};

// Fungsi untuk generate placeholder image
export const getPlaceholderImage = (
  width: number = 400,
  height: number = 300,
  text?: string
): string => {
  const placeholderText = text || `${width}x${height}`;
  return `https://via.placeholder.com/${width}x${height}/e5e7eb/6b7280?text=${encodeURIComponent(placeholderText)}`;
};

// Fungsi untuk validasi URL gambar
export const isValidImageUrl = (url: string): boolean => {
  try {
    new URL(url);
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  } catch {
    return false;
  }
};

// Fungsi untuk preload gambar
export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
};

// Fungsi untuk batch preload gambar
export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};