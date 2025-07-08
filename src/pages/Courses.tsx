import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Filter, Search } from 'lucide-react';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const courses = [
    {
      id: '1',
      title: 'Complete ECU Programming Masterclass',
      instructor: 'Dr. Michael Rodriguez',
      rating: 4.9,
      students: 2340,
      duration: '8 weeks',
      price: 299,
      originalPrice: 399,
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Advanced',
      category: 'ECU Programming',
      description: 'Master advanced ECU programming techniques used by professionals worldwide.'
    },
    {
      id: '2',
      title: 'OBD-II Diagnostic Fundamentals',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 1890,
      duration: '6 weeks',
      price: 149,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Beginner',
      category: 'Diagnostics',
      description: 'Learn the basics of OBD-II systems and diagnostic procedures.'
    },
    {
      id: '3',
      title: 'Advanced Car Scanner Techniques',
      instructor: 'James Wilson',
      rating: 4.9,
      students: 1560,
      duration: '10 weeks',
      price: 199,
      originalPrice: 249,
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Intermediate',
      category: 'Diagnostics',
      description: 'Advanced techniques for using professional car scanners effectively.'
    },
    {
      id: '4',
      title: 'Engine Management Systems',
      instructor: 'Robert Chen',
      rating: 4.7,
      students: 1200,
      duration: '7 weeks',
      price: 179,
      originalPrice: 229,
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Intermediate',
      category: 'Engine Systems',
      description: 'Comprehensive guide to modern engine management systems.'
    },
    {
      id: '5',
      title: 'Automotive Electrical Systems',
      instructor: 'Lisa Martinez',
      rating: 4.6,
      students: 980,
      duration: '9 weeks',
      price: 229,
      originalPrice: 299,
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Advanced',
      category: 'Electrical',
      description: 'Master automotive electrical systems and troubleshooting.'
    },
    {
      id: '6',
      title: 'CAN Bus Communication',
      instructor: 'David Thompson',
      rating: 4.8,
      students: 750,
      duration: '5 weeks',
      price: 129,
      originalPrice: 169,
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      level: 'Intermediate',
      category: 'Communication',
      description: 'Understanding CAN bus protocols and communication systems.'
    }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categories = ['All', 'ECU Programming', 'Diagnostics', 'Engine Systems', 'Electrical', 'Communication'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.students - a.students;
      default:
        return b.students - a.students;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Courses</h1>
          <p className="text-xl text-gray-600">Master automotive technology with our expert-led courses</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level} Level</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-blue-600 text-xs font-medium px-2 py-1 rounded">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-2">by {course.instructor}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Save ${course.originalPrice - course.price}
                    </span>
                  )}
                </div>
                
                <Link 
                  to={`/courses/${course.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-center block"
                >
                  View Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;