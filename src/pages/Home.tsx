import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Wrench, TrendingUp, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const featuredCourses = [
    {
      id: '1',
      title: 'Kelas Master Pemrograman ECU Lengkap',
      instructor: 'Dr. Michael Rodriguez',
      rating: 4.9,
      students: 2340,
      price: 299,
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Lanjutan'
    },
    {
      id: '2',
      title: 'Dasar-Dasar Diagnostik OBD-II',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 1890,
      price: 149,
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Pemula'
    },
    {
      id: '3',
      title: 'Teknik Scanner Mobil Lanjutan',
      instructor: 'James Wilson',
      rating: 4.9,
      students: 1560,
      price: 199,
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Menengah'
    }
  ];

  const featuredEbooks = [
    {
      id: '1',
      title: 'Panduan Lengkap Sistem ECU Modern',
      author: 'Para Ahli Teknis',
      rating: 4.7,
      price: 49,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Manual Troubleshooting Diagnostik Otomotif',
      author: 'Profesional Industri',
      rating: 4.8,
      price: 39,
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    }
  ];

  const featuredParts = [
    {
      id: '1',
      name: 'Scanner OBD-II Profesional',
      brand: 'AutoPro',
      rating: 4.9,
      price: 299,
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: '2',
      name: 'Kit Kabel Pemrograman ECU',
      brand: 'TechTools',
      rating: 4.7,
      price: 159,
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kuasai Teknologi 
                <span className="text-blue-300"> Otomotif</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Pelajari pemrograman ECU, teknik diagnostik, dan teknologi otomotif canggih 
                dari para ahli industri. Dapatkan sertifikat dan tingkatkan karir Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/courses" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  Jelajahi Kursus <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Peralatan diagnostik otomotif"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">5.000+ Siswa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Kursus Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.000+</div>
              <div className="text-gray-600">Siswa Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Ebook Teknis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1.000+</div>
              <div className="text-gray-600">Suku Cadang</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kursus Unggulan</h2>
            <p className="text-xl text-gray-600">Belajar dari para ahli industri dan tingkatkan karir otomotif Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-3">oleh {course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">${course.price}</div>
                  </div>
                  <Link 
                    to={`/courses/${course.id}`}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Lihat Kursus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/courses" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Semua Kursus <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Ebooks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ebook Teknis</h2>
            <p className="text-xl text-gray-600">Panduan lengkap dan manual untuk profesional otomotif</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featuredEbooks.map((ebook) => (
              <div key={ebook.id} className="bg-gray-50 rounded-lg p-6 flex space-x-6 hover:shadow-lg transition-shadow">
                <img src={ebook.image} alt={ebook.title} className="w-24 h-32 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{ebook.title}</h3>
                  <p className="text-gray-600 mb-2">oleh {ebook.author}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{ebook.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">${ebook.price}</div>
                    <Link 
                      to={`/ebooks/${ebook.id}`}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/ebooks" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Jelajahi Semua Ebook <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Spare Parts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alat & Suku Cadang Profesional</h2>
            <p className="text-xl text-gray-600">Alat otomotif berkualitas dan suku cadang untuk profesional</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featuredParts.map((part) => (
              <div key={part.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={part.image} alt={part.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{part.name}</h3>
                  <p className="text-gray-600 mb-2">oleh {part.brand}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{part.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">${part.price}</div>
                    <Link 
                      to={`/spare-parts/${part.id}`}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Lihat Produk
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/spare-parts" 
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Belanja Semua Suku Cadang <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih AutoTech Academy?</h2>
            <p className="text-xl text-gray-600">Semua yang Anda butuhkan untuk sukses dalam teknologi otomotif</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kursus Dipimpin Ahli</h3>
              <p className="text-gray-600">Belajar dari profesional industri dengan pengalaman dunia nyata bertahun-tahun</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pembelajaran Bersertifikat</h3>
              <p className="text-gray-600">Dapatkan sertifikat yang diakui industri untuk memajukan karir Anda</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Alat Berkualitas</h3>
              <p className="text-gray-600">Akses ke alat otomotif tingkat profesional dan suku cadang</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pembelajaran Fleksibel</h3>
              <p className="text-gray-600">Belajar sesuai kecepatan Anda dengan akses seumur hidup ke materi kursus</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dukungan Komunitas</h3>
              <p className="text-gray-600">Terhubung dengan sesama siswa dan profesional dalam komunitas kami</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pertumbuhan Karir</h3>
              <p className="text-gray-600">Pelatihan lanjutan untuk meningkatkan keterampilan dan potensi penghasilan Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Bergabunglah dengan ribuan profesional otomotif yang telah memajukan karir mereka dengan AutoTech Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Mulai Belajar Hari Ini
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;