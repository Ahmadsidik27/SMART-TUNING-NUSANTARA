import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, Wrench, ShoppingCart, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const SparePartDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();

  // Mock spare part data - in real app, fetch by ID
  const part = {
    id: id || '1',
    name: 'Professional OBD-II Scanner',
    brand: 'AutoPro',
    rating: 4.9,
    reviews: 234,
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Diagnostic Tools',
    description: 'Advanced OBD-II scanner with live data streaming and comprehensive diagnostic capabilities. This professional-grade tool is designed for automotive technicians who need reliable and accurate diagnostic information.',
    inStock: true,
    stockQuantity: 15,
    compatibility: 'Universal (1996+ vehicles)',
    partNumber: 'AP-OBD2-PRO-2024',
    warranty: '2 years manufacturer warranty',
    weight: '1.2 kg',
    dimensions: '25cm x 15cm x 5cm',
    features: [
      'Live data streaming from all vehicle sensors',
      'Read and clear diagnostic trouble codes (DTCs)',
      'Freeze frame data capture',
      'O2 sensor monitoring and testing',
      'Emission readiness status check',
      'Battery and charging system analysis',
      'Large color LCD display',
      'Wireless connectivity via Bluetooth',
      'Regular software updates',
      'Multi-language support'
    ],
    specifications: [
      { label: 'Protocol Support', value: 'OBD-II, EOBD, JOBD' },
      { label: 'Display', value: '5-inch color LCD' },
      { label: 'Connectivity', value: 'Bluetooth, USB, Wi-Fi' },
      { label: 'Operating Temperature', value: '-10°C to 60°C' },
      { label: 'Power Supply', value: '12V vehicle power or internal battery' },
      { label: 'Memory', value: '32GB internal storage' },
      { label: 'Update Method', value: 'Over-the-air (OTA)' }
    ],
    includedItems: [
      'OBD-II Scanner Device',
      'OBD-II Cable (16-pin)',
      'USB Cable',
      'Carrying Case',
      'User Manual',
      'Quick Start Guide',
      '2-Year Warranty Card'
    ],
    shippingInfo: {
      freeShipping: true,
      estimatedDelivery: '3-5 business days',
      expeditedAvailable: true
    },
    reviews: [
      {
        id: 1,
        user: 'Mike Thompson',
        rating: 5,
        comment: 'Excellent scanner! Very accurate readings and the live data feature is incredibly useful for diagnostics.',
        date: '2 weeks ago',
        verified: true
      },
      {
        id: 2,
        user: 'Sarah Martinez',
        rating: 5,
        comment: 'Professional quality tool. The wireless connectivity makes it so much easier to use in the shop.',
        date: '1 month ago',
        verified: true
      },
      {
        id: 3,
        user: 'Robert Chen',
        rating: 4,
        comment: 'Great scanner with lots of features. The only minor issue is the battery life could be better.',
        date: '1 month ago',
        verified: true
      }
    ]
  };

  const handleAddToCart = () => {
    if (part.inStock) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: part.id,
          name: part.name,
          price: part.price,
          type: 'spare-part',
          image: part.image
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img 
              src={part.image} 
              alt={part.name} 
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <div className="grid grid-cols-4 gap-2">
              {/* Thumbnail images would go here */}
              <img src={part.image} alt="Thumbnail 1" className="w-full h-20 object-cover rounded cursor-pointer opacity-60 hover:opacity-100" />
              <img src={part.image} alt="Thumbnail 2" className="w-full h-20 object-cover rounded cursor-pointer opacity-60 hover:opacity-100" />
              <img src={part.image} alt="Thumbnail 3" className="w-full h-20 object-cover rounded cursor-pointer opacity-60 hover:opacity-100" />
              <img src={part.image} alt="Thumbnail 4" className="w-full h-20 object-cover rounded cursor-pointer opacity-60 hover:opacity-100" />
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded">
                {part.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{part.name}</h1>
            <p className="text-lg text-gray-600 mb-4">by {part.brand}</p>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{part.rating}</span>
                <span className="text-gray-500">({part.reviews.length} reviews)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-900">${part.price}</span>
                {part.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${part.originalPrice}</span>
                )}
              </div>
              {part.originalPrice && (
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Save ${part.originalPrice - part.price}
                </span>
              )}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                {part.inStock ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700 font-medium">In Stock ({part.stockQuantity} available)</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-700 font-medium">Out of Stock</span>
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">Compatible with: {part.compatibility}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{part.warranty}</span>
              </div>
              
              {part.shippingInfo.freeShipping && (
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Free shipping • {part.shippingInfo.estimatedDelivery}</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!part.inStock}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  part.inStock 
                    ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{part.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
              
              {part.inStock && (
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Buy Now
                </button>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Part Number:</span>
                  <div className="font-medium">{part.partNumber}</div>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <div className="font-medium">{part.weight}</div>
                </div>
                <div>
                  <span className="text-gray-600">Dimensions:</span>
                  <div className="font-medium">{part.dimensions}</div>
                </div>
                <div>
                  <span className="text-gray-600">Category:</span>
                  <div className="font-medium">{part.category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button className="py-4 text-sm font-medium border-b-2 border-teal-600 text-teal-600">
                Description
              </button>
              <button className="py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Features
              </button>
              <button className="py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Specifications
              </button>
              <button className="py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                What's Included
              </button>
              <button className="py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Reviews
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Description Tab Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">{part.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {part.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {part.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{spec.label}:</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {part.includedItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{part.rating}</span>
              <span className="text-gray-500">({part.reviews.length} reviews)</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {part.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h5 className="font-semibold text-gray-900">{review.user}</h5>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          Verified Purchase
                        </span>
                      )}
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
    </div>
  );
};

export default SparePartDetail;