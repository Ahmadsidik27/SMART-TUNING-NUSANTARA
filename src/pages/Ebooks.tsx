import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Download, Filter, Search } from 'lucide-react';

const Ebooks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const ebooks = [
    {
      id: '1',
      title: 'The Complete Guide to Modern ECU Systems',
      author: 'Technical Experts',
      rating: 4.7,
      reviews: 234,
      price: 49,
      originalPrice: 69,
      pages: 480,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'ECU Programming',
      description: 'Comprehensive guide covering all aspects of modern ECU systems, programming techniques, and troubleshooting methods.',
      publishedDate: '2024'
    },
    {
      id: '2',
      title: 'Automotive Diagnostic Troubleshooting Manual',
      author: 'Industry Professionals',
      rating: 4.8,
      reviews: 189,
      price: 39,
      originalPrice: 59,
      pages: 320,
      format: 'PDF + EPUB',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'Diagnostics',
      description: 'Step-by-step troubleshooting guide for common automotive diagnostic issues and solutions.',
      publishedDate: '2024'
    },
    {
      id: '3',
      title: 'OBD-II Protocols and Communication',
      author: 'Dr. Sarah Chen',
      rating: 4.6,
      reviews: 156,
      price: 34,
      originalPrice: 49,
      pages: 280,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'Communication',
      description: 'Deep dive into OBD-II protocols, communication standards, and implementation techniques.',
      publishedDate: '2023'
    },
    {
      id: '4',
      title: 'Advanced Engine Management Systems',
      author: 'Michael Rodriguez',
      rating: 4.9,
      reviews: 298,
      price: 54,
      originalPrice: 74,
      pages: 420,
      format: 'PDF + Interactive',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'Engine Systems',
      description: 'Advanced concepts in engine management, fuel injection systems, and performance optimization.',
      publishedDate: '2024'
    },
    {
      id: '5',
      title: 'Automotive Electrical Systems Handbook',
      author: 'Lisa Martinez',
      rating: 4.5,
      reviews: 167,
      price: 42,
      originalPrice: 62,
      pages: 380,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'Electrical',
      description: 'Complete handbook for automotive electrical systems, wiring diagrams, and circuit analysis.',
      publishedDate: '2023'
    },
    {
      id: '6',
      title: 'CAN Bus Networks in Automotive',
      author: 'David Thompson',
      rating: 4.7,
      reviews: 143,
      price: 36,
      originalPrice: 51,
      pages: 240,
      format: 'PDF + EPUB',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'Communication',
      description: 'Understanding CAN bus networks, protocols, and troubleshooting in modern vehicles.',
      publishedDate: '2023'
    }
  ];

  const categories = ['All', 'ECU Programming', 'Diagnostics', 'Engine Systems', 'Electrical', 'Communication'];

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ebook.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedEbooks = [...filteredEbooks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return parseInt(b.publishedDate) - parseInt(a.publishedDate);
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Ebooks</h1>
          <p className="text-xl text-gray-600">Comprehensive automotive guides and manuals for professionals</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search ebooks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            Showing {sortedEbooks.length} of {ebooks.length} ebooks
          </p>
        </div>

        {/* Ebooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEbooks.map((ebook) => (
            <div key={ebook.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="flex">
                <img src={ebook.image} alt={ebook.title} className="w-32 h-48 object-cover flex-shrink-0" />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                        {ebook.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {ebook.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-2">by {ebook.author}</p>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{ebook.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({ebook.reviews} reviews)</span>
                    </div>
                    
                    <div className="text-xs text-gray-500 space-y-1 mb-3">
                      <div className="flex items-center space-x-4">
                        <span>{ebook.pages} pages</span>
                        <span>{ebook.format}</span>
                      </div>
                      <div>Published: {ebook.publishedDate}</div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">${ebook.price}</span>
                        {ebook.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${ebook.originalPrice}</span>
                        )}
                      </div>
                      {ebook.originalPrice && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          Save ${ebook.originalPrice - ebook.price}
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      to={`/ebooks/${ebook.id}`}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded-lg transition-colors font-medium text-center text-sm block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedEbooks.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No ebooks found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ebooks;