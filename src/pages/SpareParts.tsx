import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, Search, Truck, Wrench } from 'lucide-react';

const SpareParts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const spareParts = [
    {
      id: '1',
      name: 'Professional OBD-II Scanner',
      brand: 'AutoPro',
      rating: 4.9,
      reviews: 234,
      price: 299,
      originalPrice: 399,
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Diagnostic Tools',
      description: 'Advanced OBD-II scanner with live data streaming and comprehensive diagnostic capabilities.',
      inStock: true,
      compatibility: 'Universal (1996+ vehicles)'
    },
    {
      id: '2',
      name: 'ECU Programming Cable Kit',
      brand: 'TechTools',
      rating: 4.7,
      reviews: 156,
      price: 159,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Programming Tools',
      description: 'Complete cable kit for ECU programming with multiple connector types.',
      inStock: true,
      compatibility: 'BMW, Mercedes, Audi'
    },
    {
      id: '3',
      name: 'Engine Control Module (ECM)',
      brand: 'OEM Parts',
      rating: 4.8,
      reviews: 89,
      price: 450,
      originalPrice: 550,
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Engine Components',
      description: 'Genuine OEM engine control module for various vehicle models.',
      inStock: true,
      compatibility: 'Honda Civic 2016-2020'
    },
    {
      id: '4',
      name: 'CAN Bus Interface Adapter',
      brand: 'DiagPro',
      rating: 4.6,
      reviews: 178,
      price: 89,
      originalPrice: 119,
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Communication Tools',
      description: 'High-speed CAN bus interface for vehicle communication diagnostics.',
      inStock: false,
      compatibility: 'Universal CAN-enabled vehicles'
    },
    {
      id: '5',
      name: 'Fuel Injector Set (4pcs)',
      brand: 'Performance Plus',
      rating: 4.5,
      reviews: 267,
      price: 320,
      originalPrice: 380,
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Engine Components',
      description: 'High-performance fuel injectors for improved engine efficiency.',
      inStock: true,
      compatibility: 'Toyota Camry 2018-2023'
    },
    {
      id: '6',
      name: 'Automotive Oscilloscope',
      brand: 'ScopeMaster',
      rating: 4.9,
      reviews: 145,
      price: 899,
      originalPrice: 1199,
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Diagnostic Tools',
      description: 'Professional automotive oscilloscope for advanced electrical diagnostics.',
      inStock: true,
      compatibility: 'Universal'
    }
  ];

  const categories = ['All', 'Diagnostic Tools', 'Programming Tools', 'Engine Components', 'Communication Tools'];
  const brands = ['All', 'AutoPro', 'TechTools', 'OEM Parts', 'DiagPro', 'Performance Plus', 'ScopeMaster'];

  const filteredParts = spareParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || part.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const sortedParts = [...filteredParts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Automotive Spare Parts</h1>
          <p className="text-xl text-gray-600">Professional tools and components for automotive technicians</p>
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
                  placeholder="Search parts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand === 'All' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedParts.length} of {spareParts.length} parts
          </p>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedParts.map((part) => (
            <div key={part.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={part.image} alt={part.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {part.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {part.inStock ? (
                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {part.name}
                </h3>
                <p className="text-gray-600 mb-2">by {part.brand}</p>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{part.description}</p>
                
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{part.rating}</span>
                  </div>
                  <span>({part.reviews} reviews)</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Wrench className="h-4 w-4" />
                    <span>{part.compatibility}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${part.price}</span>
                    {part.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${part.originalPrice}</span>
                    )}
                  </div>
                  {part.originalPrice && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Save ${part.originalPrice - part.price}
                    </span>
                  )}
                </div>
                
                <Link 
                  to={`/spare-parts/${part.id}`}
                  className={`w-full py-2 px-4 rounded-lg transition-colors font-medium text-center block ${
                    part.inStock 
                      ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {part.inStock ? 'View Details' : 'Out of Stock'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sortedParts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No parts found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpareParts;