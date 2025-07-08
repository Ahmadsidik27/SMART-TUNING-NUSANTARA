import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Users, Clock, PlayCircle, BookOpen, Award, CheckCircle, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data - in real app, fetch by ID
  const course = {
    id: id || '1',
    title: 'Complete ECU Programming Masterclass',
    instructor: 'Dr. Michael Rodriguez',
    instructorBio: 'Dr. Rodriguez has over 15 years of experience in automotive engineering and ECU programming. He has worked with major automotive manufacturers and has trained thousands of technicians worldwide.',
    instructorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 4.9,
    students: 2340,
    duration: '8 weeks',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    level: 'Advanced',
    category: 'ECU Programming',
    description: 'Master advanced ECU programming techniques used by professionals worldwide. This comprehensive course covers everything from basic concepts to advanced programming strategies.',
    whatYouWillLearn: [
      'Advanced ECU programming techniques',
      'Understanding automotive communication protocols',
      'Hands-on experience with professional tools',
      'Troubleshooting complex ECU issues',
      'Industry best practices and safety procedures',
      'Real-world case studies and projects'
    ],
    requirements: [
      'Basic knowledge of automotive systems',
      'Access to a computer with internet connection',
      'Recommended: Basic electronics knowledge',
      'Willingness to learn and practice'
    ],
    curriculum: [
      {
        module: 'Module 1: Introduction to ECU Programming',
        lessons: [
          'What is ECU Programming?',
          'Types of ECUs in Modern Vehicles',
          'Programming Tools and Software',
          'Safety Considerations'
        ]
      },
      {
        module: 'Module 2: Communication Protocols',
        lessons: [
          'CAN Bus Fundamentals',
          'K-Line and L-Line Protocols',
          'Ethernet-based Protocols',
          'Protocol Selection and Implementation'
        ]
      },
      {
        module: 'Module 3: Programming Techniques',
        lessons: [
          'Flash Programming Methods',
          'Calibration and Mapping',
          'Error Handling and Recovery',
          'Advanced Programming Strategies'
        ]
      },
      {
        module: 'Module 4: Practical Applications',
        lessons: [
          'Engine Management Programming',
          'Transmission Control Programming',
          'Body Control Module Programming',
          'Integration Testing'
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Mike Johnson',
        rating: 5,
        comment: 'Excellent course! Dr. Rodriguez explains complex concepts in an easy-to-understand way.',
        date: '2 weeks ago'
      },
      {
        id: 2,
        user: 'Sarah Davis',
        rating: 5,
        comment: 'This course has transformed my career. The practical examples are invaluable.',
        date: '1 month ago'
      },
      {
        id: 3,
        user: 'Tom Wilson',
        rating: 4,
        comment: 'Great content and well-structured. Would recommend to anyone in the field.',
        date: '1 month ago'
      }
    ]
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: course.id,
        name: course.title,
        price: course.price,
        type: 'course',
        image: course.image
      }
    });
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating} ({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>by {course.instructor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 text-sm font-medium border-b-2 ${
                        activeTab === tab.id
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Course Curriculum</h3>
                    {course.curriculum.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border border-gray-200 rounded-lg">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-900">{module.module}</h4>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-3">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center space-x-3">
                                <PlayCircle className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Meet Your Instructor</h3>
                    <div className="flex items-start space-x-6">
                      <img 
                        src={course.instructorImage} 
                        alt={course.instructor}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{course.instructor}</h4>
                        <p className="text-gray-600 leading-relaxed">{course.instructorBio}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">Student Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold">{course.rating}</span>
                        <span className="text-gray-500">({course.students.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {course.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
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
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                  )}
                </div>
                {course.originalPrice && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Save ${course.originalPrice - course.price}
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Add to Cart
                </button>
                
                {user ? (
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Enroll Now
                  </button>
                ) : (
                  <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Login to Enroll
                  </button>
                )}
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Certificate:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Lifetime Access:</span>
                  <span className="font-medium">Yes</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">This course includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <PlayCircle className="h-4 w-4 text-blue-600" />
                    <span>8 hours of video content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>Community access</span>
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

export default CourseDetail;