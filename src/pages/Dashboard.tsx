import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Download, 
  ShoppingBag, 
  User, 
  Settings, 
  Award, 
  Clock, 
  TrendingUp,
  Play,
  FileText,
  Package
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, this would come from API
  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete ECU Programming Masterclass',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      instructor: 'Dr. Michael Rodriguez',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      lastAccessed: '2 days ago'
    },
    {
      id: '2',
      title: 'OBD-II Diagnostic Fundamentals',
      progress: 90,
      totalLessons: 18,
      completedLessons: 16,
      instructor: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      lastAccessed: '1 week ago'
    },
    {
      id: '3',
      title: 'Advanced Car Scanner Techniques',
      progress: 25,
      totalLessons: 20,
      completedLessons: 5,
      instructor: 'James Wilson',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      lastAccessed: '3 days ago'
    }
  ];

  const purchasedEbooks = [
    {
      id: '1',
      title: 'The Complete Guide to Modern ECU Systems',
      author: 'Technical Experts',
      downloadUrl: '#',
      purchaseDate: '2024-01-10',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Automotive Diagnostic Troubleshooting Manual',
      author: 'Industry Professionals',
      downloadUrl: '#',
      purchaseDate: '2024-01-05',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop'
    }
  ];

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      items: ['Complete ECU Programming Masterclass'],
      total: 299,
      status: 'Completed'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      items: ['The Complete Guide to Modern ECU Systems'],
      total: 49,
      status: 'Completed'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      items: ['Professional OBD-II Scanner', 'ECU Programming Cable Kit'],
      total: 458,
      status: 'Shipped'
    }
  ];

  const achievements = [
    { name: 'First Course Completed', icon: '🎓', earned: true },
    { name: 'ECU Programming Expert', icon: '🔧', earned: true },
    { name: 'Diagnostic Master', icon: '🔍', earned: false },
    { name: 'Community Contributor', icon: '👥', earned: false }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'courses', label: 'My Courses', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'ebooks', label: 'My Ebooks', icon: <FileText className="h-5 w-5" /> },
    { id: 'orders', label: 'Order History', icon: <Package className="h-5 w-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Track your learning progress and manage your account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={user?.avatar || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'} 
                  alt={user?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{user?.name}</h3>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                        <p className="text-2xl font-bold text-gray-900">{enrolledCourses.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Download className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Ebooks Owned</p>
                        <p className="text-2xl font-bold text-gray-900">{purchasedEbooks.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Achievements</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {achievements.filter(a => a.earned).length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Continue Learning</h2>
                  <div className="space-y-4">
                    {enrolledCourses.slice(0, 2).map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img src={course.image} alt={course.title} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600">by {course.instructor}</p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <Link 
                          to={`/courses/${course.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Continue
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`text-center p-4 rounded-lg border-2 ${
                          achievement.earned 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{achievement.icon}</div>
                        <p className={`text-sm font-medium ${
                          achievement.earned ? 'text-green-800' : 'text-gray-600'
                        }`}>
                          {achievement.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">My Courses</h2>
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <img src={course.image} alt={course.title} className="w-24 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                          <p className="text-gray-600 mb-2">by {course.instructor}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                            <span>Last accessed {course.lastAccessed}</span>
                          </div>
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <Link 
                              to={`/courses/${course.id}`}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                            >
                              <Play className="h-4 w-4" />
                              <span>Continue Learning</span>
                            </Link>
                            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
                              View Certificate
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ebooks' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">My Ebooks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {purchasedEbooks.map((ebook) => (
                    <div key={ebook.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex space-x-4">
                        <img src={ebook.image} alt={ebook.title} className="w-16 h-20 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{ebook.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {ebook.author}</p>
                          <p className="text-xs text-gray-500 mb-3">
                            Purchased: {new Date(ebook.purchaseDate).toLocaleDateString()}
                          </p>
                          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm transition-colors flex items-center space-x-2">
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                          <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${order.total}</p>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                            order.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Items:</p>
                        <ul className="text-sm text-gray-800">
                          {order.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={user?.avatar || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'} 
                      alt={user?.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{user?.name}</h3>
                      <p className="text-gray-600">{user?.email}</p>
                      <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Change Photo
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="City, Country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Save Changes
                    </button>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;