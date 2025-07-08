import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, TrendingUp, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Modern ECU Architecture: A Deep Dive',
      excerpt: 'Explore the intricate world of Electronic Control Units and how they manage every aspect of modern vehicle operation.',
      content: 'Modern vehicles rely heavily on Electronic Control Units (ECUs) to manage everything from engine performance to safety systems...',
      author: 'Dr. Michael Rodriguez',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ECU Programming',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['ECU', 'Programming', 'Automotive Technology'],
      featured: true
    },
    {
      id: '2',
      title: 'OBD-II Diagnostic Codes: Complete Reference Guide',
      excerpt: 'Master the art of reading and interpreting OBD-II diagnostic codes with our comprehensive guide.',
      content: 'OBD-II diagnostic codes are the key to understanding what your vehicle is trying to tell you...',
      author: 'Sarah Johnson',
      authorImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Diagnostics',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['OBD-II', 'Diagnostics', 'Troubleshooting'],
      featured: false
    },
    {
      id: '3',
      title: 'CAN Bus Communication: Protocols and Implementation',
      excerpt: 'Learn how Controller Area Network (CAN) bus enables communication between different vehicle systems.',
      content: 'The Controller Area Network (CAN) bus is the backbone of modern vehicle communication systems...',
      author: 'James Wilson',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Communication',
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['CAN Bus', 'Communication', 'Protocols'],
      featured: false
    },
    {
      id: '4',
      title: 'Advanced Engine Management Systems in 2024',
      excerpt: 'Discover the latest innovations in engine management technology and their impact on performance.',
      content: 'Engine management systems have evolved significantly, incorporating AI and machine learning...',
      author: 'Lisa Martinez',
      authorImage: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Engine Systems',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Engine Management', 'Performance', 'Innovation'],
      featured: true
    },
    {
      id: '5',
      title: 'Troubleshooting Electrical Issues in Modern Vehicles',
      excerpt: 'A systematic approach to diagnosing and fixing electrical problems in contemporary automotive systems.',
      content: 'Electrical issues can be among the most challenging problems to diagnose in modern vehicles...',
      author: 'Robert Chen',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Electrical',
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Electrical', 'Troubleshooting', 'Diagnostics'],
      featured: false
    },
    {
      id: '6',
      title: 'The Future of Automotive Diagnostics: AI and Machine Learning',
      excerpt: 'Explore how artificial intelligence is revolutionizing automotive diagnostic procedures.',
      content: 'Artificial intelligence and machine learning are transforming the automotive industry...',
      author: 'Dr. Michael Rodriguez',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-03',
      readTime: '12 min read',
      category: 'Technology Trends',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['AI', 'Machine Learning', 'Future Tech'],
      featured: false
    }
  ];

  const categories = ['All', 'ECU Programming', 'Diagnostics', 'Communication', 'Engine Systems', 'Electrical', 'Technology Trends'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AutoTech Blog</h1>
          <p className="text-xl text-gray-600">Latest insights, tutorials, and industry news</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
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
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <p className="text-gray-600 mb-6">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.author}</div>
                      <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-6">
            Subscribe to our newsletter for the latest automotive technology insights
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;