import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Card, Button } from '../components/ui';
import { Alert } from '../components/ui';
import { formatCurrency } from '../utils/helpers';

const Home: React.FC = () => {
  const { user, loading } = useAuth();
  const { cartItems, getCartCount } = useCart();

  const featuredCourses = [
    { id: '1', title: 'Dasar Pemrograman JavaScript', level: 'beginner', rating: 4.8, price: 299000, students: 1250 },
    { id: '2', title: 'Advanced React Patterns', level: 'advanced', rating: 4.9, price: 499000, students: 820 },
    { id: '3', title: 'Mobile App Development', level: 'intermediate', rating: 4.7, price: 399000, students: 950 },
  ];

  const featuredEbooks = [
    { id: '1', title: 'JavaScript Modern Guide', author: 'John Doe', price: 99000, format: 'pdf', pages: 350 },
    { id: '2', title: 'React Hooks Mastery', author: 'Jane Smith', price: 129000, format: 'pdf', pages: 280 },
    { id: '3', title: 'Mobile Development Tips', author: 'Mike Johnson', price: 79000, format: 'pdf', pages: 220 },
  ];

  const featuredSpareParts = [
    { id: '1', name: 'OBD-II Scanner', brand: 'AutoTech', price: 799000, stock: 45 },
    { id: '2', name: 'ECU Diagnostic Tool', brand: 'AutoMaster', price: 1299000, stock: 32 },
    { id: '3', name: 'ECU Programmer', brand: 'ECUFlash', price: 2499000, stock: 18 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di SMART-TUNING-NUSANTARA</h1>
          <p className="text-xl mb-6">Platform e-learning komprehensif untuk sektor otomotif</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-white text-white">
              Lihat Kursus
            </Button>
            <Button variant="outline" className="border-white text-white">
              Beli Ebook
            </Button>
            <Button variant="outline" className="border-white text-white">
              Toko Suku Cadang
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
          <div className="text-gray-600">Kursus Terbaik</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Ebook Profesional</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
          <div className="text-gray-600">Suku Cadang Otomotif</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
          <div className="text-gray-600">Siswa Aktif</div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kursus Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map(course => (
            <Card key={course.id} className="overflow-hidden">
              <div className="p-6">
                <div className="text-yellow-500 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(course.rating) ? '★' : i < course.rating ? '★' : '☆'}
                    </span>
                  ))}
                  <span className="ml-1 text-gray-600">({course.rating})</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.title}</p>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                    {course.level}
                  </span>
                  <span>{course.students}+ siswa</span>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">
                  {formatCurrency(course.price)}
                </div>
                <Button variant="primary" className="w-full">
                  Daftar Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Ebooks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Ebook Terpopuler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEbooks.map(ebook => (
            <Card key={ebook.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{ebook.title}</h3>
                    <p className="text-sm text-gray-600">{ebook.author}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {ebook.format.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-600">
                    {ebook.pages} halaman
                  </span>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">
                  {formatCurrency(ebook.price)}
                </div>
                <Button variant="primary" className="w-full">
                  Beli Ebook
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Spare Parts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Suku Cadang Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSpareParts.map(part => (
            <Card key={part.id} className="overflow-hidden">
              <div className="p-6">
                <div className="bg-gray-200 p-3 rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{part.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{part.brand}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Stok: {part.stock}
                  </span>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">
                  {formatCurrency(part.price)}
                </div>
                <Button variant="primary" className="w-full">
                  Beli Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Testimoni Siswa</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-600">Siswa</p>
              </div>
            </div>
            <p className="text-gray-700">"Kursus JavaScript sangat membantu saya memahami pemrograman. Materi mudah dipahami dan praktis."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">JS</span>
              </div>
              <div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-sm text-gray-600">Pengembang Web</p>
              </div>
            </div>
            <p className="text-gray-700">"Ebook React Hooks Mastery sangat detail dan membantu saya menguasi React Hooks dengan cepat."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">MJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Mike Johnson</h4>
                <p className="text-sm text-gray-600">Teknisi Otomotif</p>
              </div>
            </div>
            <p className="text-gray-700">"Alat-alat diagnostic yang dijual sangat berkualitas dan membantu saya dalam pekerjaan sehari-hari."</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Mulai Belajar?</h2>
        <p className="mb-6">Gabung sekarang dan mulai karir Anda di dunia otomotif!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="border-white text-white">
            Daftar Akun
          </Button>
          <Button variant="outline" className="border-white text-white">
            Hubungi Kami
          </Button>
        </div>
      </div>

      {/* Cart Summary */}
      {user && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-10">
          <div className="flex items-center">
            <div className="relative mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold">Keranjang Belanja</p>
              <p className="text-xs text-gray-600">{getCartCount()} item(s)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function for formatting currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Helper function for generating star ratings
const getCartCount = () => {
  // In a real app, this would be from context
  return 0;
};

export default Home;