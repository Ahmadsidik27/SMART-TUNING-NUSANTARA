import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Download, FileText, Calendar, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const EbookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();

  // Mock ebook data - in real app, fetch by ID
  const ebook = {
    id: id || '1',
    title: 'The Complete Guide to Modern ECU Systems',
    author: 'Technical Experts',
    rating: 4.7,
    reviews: 234,
    price: 49,
    originalPrice: 69,
    pages: 480,
    format: 'PDF',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    category: 'ECU Programming',
    description: 'Comprehensive guide covering all aspects of modern ECU systems, programming techniques, and troubleshooting methods. This definitive resource provides in-depth coverage of electronic control units used in modern vehicles.',
    publishedDate: '2024',
    language: 'English',
    publisher: 'AutoTech Publications',
    isbn: '978-1-23456-789-0',
    tableOfContents: [
      'Chapter 1: Introduction to ECU Systems',
      'Chapter 2: ECU Hardware Architecture',
      'Chapter 3: Software and Firmware',
      'Chapter 4: Communication Protocols',
      'Chapter 5: Programming Techniques',
      'Chapter 6: Diagnostic Methods',
      'Chapter 7: Troubleshooting Guide',
      'Chapter 8: Advanced Applications',
      'Chapter 9: Future Technologies',
      'Chapter 10: Case Studies'
    ],
    whatYouWillLearn: [
      'Understanding ECU architecture and components',
      'Modern programming languages and tools',
      'Communication protocols (CAN, LIN, FlexRay)',
      'Diagnostic and troubleshooting techniques',
      'Real-world implementation strategies',
      'Industry best practices and standards'
    ],
    authorBio: 'A team of automotive industry experts with over 50 years of combined experience in ECU development, programming, and diagnostics. Contributors include engineers from major automotive manufacturers and leading diagnostic tool companies.',
    reviews: [
      {
        id: 1,
        user: 'John Smith',
        rating: 5,
        comment: 'Excellent resource! Very comprehensive and well-structured. Perfect for both beginners and experienced technicians.',
        date: '2 weeks ago'
      },
      {
        id: 2,
        user: 'Maria Garcia',
        rating: 5,
        comment: 'This ebook helped me understand complex ECU concepts. The diagrams and examples are very helpful.',
        date: '1 month ago'
      },
      {
        id: 3,
        user: 'Robert Johnson',
        rating: 4,
        comment: 'Great content and very detailed. Would recommend to anyone working with modern automotive systems.',
        date: '1 month ago'
      }
    ]
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: ebook.id,
        name: ebook.title,
        price: ebook.price,
        type: 'ebook',
        image: ebook.image
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Ebook Header */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={ebook.image} 
                  alt={ebook.title} 
                  className="w-full md:w-48 h-64 md:h-72 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded">
                      {ebook.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{ebook.title}</h1>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">by {ebook.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{ebook.rating}</span>
                      <span className="text-gray-500">({ebook.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>{ebook.pages} pages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>{ebook.format}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Published {ebook.publishedDate}</span>
                    </div>
                    <div>
                      <span>Language: {ebook.language}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{ebook.description}</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ebook.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <div className="space-y-3">
                {ebook.tableOfContents.map((chapter, index) => (
                  <div key={index} className="flex items-center space-x-3 py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-orange-600 font-semibold w-8">{index + 1}.</span>
                    <span className="text-gray-700">{chapter}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About the Author */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the Author</h2>
              <p className="text-gray-700 leading-relaxed">{ebook.authorBio}</p>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Customer Reviews</h2>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{ebook.rating}</span>
                  <span className="text-gray-500">({ebook.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {ebook.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {review.user.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h5 className="font-semibold text-gray-900">{review.user}</h5>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">${ebook.price}</span>
                  {ebook.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${ebook.originalPrice}</span>
                  )}
                </div>
                {ebook.originalPrice && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Save ${ebook.originalPrice - ebook.price}
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Buy Now - Instant Download
                </button>
              </div>

              <div className="space-y-4 text-sm border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">{ebook.format}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pages:</span>
                  <span className="font-medium">{ebook.pages}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">{ebook.language}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Publisher:</span>
                  <span className="font-medium">{ebook.publisher}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ISBN:</span>
                  <span className="font-medium text-xs">{ebook.isbn}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-orange-500" />
                    <span>Instant download after purchase</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-orange-500" />
                    <span>High-quality PDF format</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-orange-500" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookDetail;