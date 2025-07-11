import React, { useState } from 'react';
import { Card, Button, Input } from '../components/ui';
import { formatCurrency } from '../utils/helpers';

const CourseDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const course = {
    id: '1',
    title: 'Dasar Pemrograman JavaScript',
    description: 'Belajar JavaScript dari dasar hingga menengah. Kursus ini dirancang untuk pemula yang ingin memulai perjalanan di dunia pemrograman. Anda akan mempelajari konsep dasar pemrograman, variabel, tipe data, fungsi, objek, array, dan banyak lagi.',
    instructor: {
      name: 'John Doe',
      bio: 'Pengembang web berpengalaman dengan lebih dari 10 tahun pengalaman dalam pengembangan web dan mobile.',
      courses: 12,
      students: 1250,
      rating: 4.8,
    },
    level: 'beginner',
    rating: 4.8,
    price: 299000,
    duration: '8 minggu',
    language: 'Indonesia',
    students: 1250,
    lastUpdated: '2024-01-15',
    learning: [
      'Pemahaman dasar pemrograman',
      'Variabel dan tipe data',
      'Fungsi dan method',
      'Objek dan array',
      'DOM manipulation',
      'Event handling',
      'Async programming',
      'Modern JavaScript (ES6+)',
    ],
    requirements: [
      'Tidak ada pengetahuan pemrograman sebelumnya',
      'Laptop atau komputer',
      'Koneksi internet',
    ],
    image: 'https://picsum.photos/seed/javascript/800/450.jpg',
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Image and Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({course.students})</span>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-b mb-4">
                <div className="flex">
                  <button
                    className={`py-2 px-4 font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('description')}
                  >
                    Deskripsi
                  </button>
                  <button
                    className={`py-2 px-4 font-medium ${activeTab === 'curriculum' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('curriculum')}
                  >
                    Kurikulum
                  </button>
                  <button
                    className={`py-2 px-4 font-medium ${activeTab === 'instructor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('instructor')}
                  >
                    Instruktur
                  </button>
                  <button
                    className={`py-2 px-4 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Ulasan
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === 'description' && (
                  <div>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <h3 className="text-lg font-semibold mb-2">Apa yang akan Anda pelajari?</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {course.learning.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-semibold mb-2">Persyaratan</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {course.requirements.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'curriculum' && (
                  <div>
                    <p className="text-gray-700">Kurikulum akan ditampilkan di sini.</p>
                  </div>
                )}
                
                {activeTab === 'instructor' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <img 
                        src={`https://picsum.photos/seed/${course.instructor.name}/64/64.jpg`} 
                        alt={course.instructor.name} 
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{course.instructor.name}</h3>
                        <p className="text-gray-600">{course.instructor.bio}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-2xl font-bold text-blue-600">{course.instructor.courses}</div>
                        <div className="text-sm text-gray-600">Kursus</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-2xl font-bold text-blue-600">{course.instructor.students}</div>
                        <div className="text-sm text-gray-600">Siswa</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-2xl font-bold text-blue-600">{course.instructor.rating}</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <p className="text-gray-700">Ulasan akan ditampilkan di sini.</p>
                  </div>
                )}
              </div>
              
              {/* Price and Action */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-4 border-t">
                <div className="mb-4 md:mb-0">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {formatCurrency(course.price)}
                  </div>
                  <p className="text-gray-600">Harga asli: {formatCurrency(course.price * 1.2)}</p>
                  <p className="text-green-600 font-semibold">Diskon: 16.7%</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center border rounded mr-4">
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-3">{quantity}</span>
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <Button variant="primary" className="text-lg px-8">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div>
          <Card className="h-full">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Ringkasan Kursus</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-gray-700">Durasi: {course.duration}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-700">{course.students}+ siswa terdaftar</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Terakhir diperbarui: {new Date(course.lastUpdated).toLocaleDateString()}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">Bahasa: {course.language}</span>
                </li>
              </ul>

              <div className="mt-6">
                <Button variant="outline" className="w-full mb-2" onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}>
                  Kurangi
                </Button>
                <Button variant="primary" className="w-full">
                  Tambah ke Keranjang
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;