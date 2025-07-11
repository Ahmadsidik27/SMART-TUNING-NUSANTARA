import React, { useState } from 'react';
import { Card, Button, Input } from '../components/ui';
import { formatCurrency } from '../utils/helpers';

const Courses: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const courses = [
    {
      id: '1',
      title: 'Dasar Pemrograman JavaScript',
      description: 'Belajar JavaScript dari dasar hingga menengah',
      instructor: 'John Doe',
      level: 'beginner',
      rating: 4.8,
      price: 299000,
      students: 1250,
      image: 'https://picsum.photos/seed/javascript/400/225.jpg',
    },
    {
      id: '2',
      title: 'Advanced React Patterns',
      description: 'Pola desain React yang efektif untuk aplikasi kompleks',
      instructor: 'Jane Smith',
      level: 'advanced',
      rating: 4.9,
      price: 499000,
      students: 820,
      image: 'https://picsum.photos/seed/react/400/225.jpg',
    },
    {
      id: '3',
      title: 'Mobile App Development',
      description: 'Membangun aplikasi mobile dengan React Native',
      instructor: 'Mike Johnson',
      level: 'intermediate',
      rating: 4.7,
      price: 399000,
      students: 950,
      image: 'https://picsum.photos/seed/mobile/400/225.jpg',
    },
    {
      id: '4',
      title: 'Database Design',
      description: 'Desain database yang optimal untuk aplikasi web',
      instructor: 'Sarah Williams',
      level: 'intermediate',
      rating: 4.6,
      price: 349000,
      students: 780,
      image: 'https://picsum.photos/seed/database/400/225.jpg',
    },
    {
      id: '5',
      title: 'Machine Learning Fundamentals',
      description: 'Dasar-dasar machine learning dan penerapannya',
      instructor: 'David Brown',
      level: 'advanced',
      rating: 4.9,
      price: 599000,
      students: 620,
      image: 'https://picsum.photos/seed/ml/400/225.jpg',
    },
    {
      id: '6',
      title: 'UI/UX Design Principles',
      description: 'Prinsip desain UI/UX untuk pengalaman pengguna yang baik',
      instructor: 'Emma Davis',
      level: 'beginner',
      rating: 4.8,
      price: 279000,
      students: 1100,
      image: 'https://picsum.photos/seed/uiux/400/225.jpg',
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = search === '' || 
      course.title.toLowerCase().includes(search.toLowerCase()) || 
      course.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = category === '' || course.level === category;
    
    const matchesLevel = level === '' || course.level === level;
    
    const matchesMinPrice = minPrice === '' || course.price >= parseInt(minPrice);
    
    const matchesMaxPrice = maxPrice === '' || course.price <= parseInt(maxPrice);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kursus</h1>
      
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Cari kursus..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Semua Level</option>
              <option value="beginner">Pemula</option>
              <option value="intermediate">Menengah</option>
              <option value="advanced">Ahli</option>
            </select>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Harga minimal"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Harga maksimal"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <Card key={course.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {course.level}
                </div>
              </div>
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
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://picsum.photos/seed/${course.instructor}/32/32.jpg`} 
                    alt={course.instructor} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    {formatCurrency(course.price)}
                  </span>
                  <Button variant="primary" className="text-sm">
                    Daftar
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600">Tidak ada kursus yang sesuai dengan kriteria pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;