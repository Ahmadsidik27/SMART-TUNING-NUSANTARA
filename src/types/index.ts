// Base types
export type ID = string | number;

export interface ApiResponse<T = any> {
  data: T;
  message: string;
  status: 'success' | 'error';
  statusCode: number;
}

// User types
export interface User {
  id: ID;
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'admin' | 'instructor';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  bio?: string;
  phone?: string;
  address?: string;
  education?: string;
  experience?: string;
}

// Course types
export interface Course {
  id: ID;
  title: string;
  description: string;
  instructorId: ID;
  categoryId: ID;
  price: number;
  discountPrice?: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  reviewCount: number;
  studentsCount: number;
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CourseContent {
  id: ID;
  courseId: ID;
  title: string;
  description?: string;
  videoUrl?: string;
  duration: string;
  order: number;
  isFree: boolean;
  createdAt: string;
  updatedAt: string;
}

// Ebook types
export interface Ebook {
  id: ID;
  title: string;
  description: string;
  authorId: ID;
  categoryId: ID;
  price: number;
  discountPrice?: number;
  pages: number;
  fileSize: number;
  format: 'pdf' | 'epub' | 'mobi';
  coverImage?: string;
  sampleUrl?: string;
  rating: number;
  reviewCount: number;
  downloadCount: number;
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// Spare Part types
export interface SparePart {
  id: ID;
  name: string;
  description: string;
  categoryId: ID;
  brandId: ID;
  price: number;
  discountPrice?: number;
  stock: number;
  sku: string;
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  compatibility: string[];
  warranty: string;
  isFeatured: boolean;
  isPublished: boolean;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

// Category types
export interface Category {
  id: ID;
  name: string;
  description?: string;
  parentCategoryId?: ID;
  image?: string;
  order: number;
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// Order types
export interface Order {
  id: ID;
  userId: ID;
  items: OrderItem[];
  totalAmount: number;
  discountAmount: number;
  shippingFee: number;
  paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  shippingAddress: string;
  billingAddress: string;
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: ID;
  orderId: ID;
  productId: ID;
  productType: 'course' | 'ebook' | 'spare_part';
  quantity: number;
  price: number;
  discountPrice?: number;
  name: string;
  thumbnail?: string;
}

// Review types
export interface Review {
  id: ID;
  userId: ID;
  productId: ID;
  productType: 'course' | 'ebook' | 'spare_part';
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

// Cart types
export interface CartItem {
  id: ID;
  userId: ID;
  productId: ID;
  productType: 'course' | 'ebook' | 'spare_part';
  quantity: number;
  price: number;
  discountPrice?: number;
  name: string;
  thumbnail?: string;
}

export interface Cart {
  userId: ID;
  items: CartItem[];
  totalAmount: number;
  discountAmount: number;
  createdAt: string;
  updatedAt: string;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// Payment types
export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'created' | 'succeeded' | 'failed';
  clientSecret: string;
}

// Search types
export interface SearchParams {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
  sortBy?: 'price_asc' | 'price_desc' | 'rating' | 'newest';
  level?: 'beginner' | 'intermediate' | 'advanced';
  format?: 'pdf' | 'epub' | 'mobi';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Utility types
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
export type RequiredExcept<T, K extends keyof T> = Required<T> & Partial<Pick<T, K>>;
export type Nullable<T> = { [K in keyof T]: T[K] | null };
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] extends any[] ? T[P] : T[P] extends object ? DeepPartial<T[P]> : T[P]>;
};