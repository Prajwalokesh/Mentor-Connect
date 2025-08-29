import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Bell, 
  Star, 
  Award, 
  BookOpen,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const LandingPage: React.FC = () => {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: Target,
      title: 'Smart Matching System',
      description: 'AI-powered algorithm matches students with the most suitable mentors based on academic needs and personality.'
    },
    {
      icon: TrendingUp,
      title: 'Personalized Progress Tracking',
      description: 'Real-time monitoring of student progress with detailed analytics and performance insights.'
    },
    {
      icon: Users,
      title: 'Parent-Teacher Feedback Loop',
      description: 'Seamless communication between parents, teachers, and mentors for comprehensive support.'
    },
    {
      icon: Bell,
      title: 'Real-time Alerts & Scheduling',
      description: 'Smart notifications and automated scheduling system for mentoring sessions and important updates.'
    }
  ];

  const statistics = [
    { number: '5000+', label: 'Active Students Enrolled' },
    { number: '200+', label: 'Faculty Mentors' },
    { number: 'Top 100', label: 'NIRF Universities in India' },
    { number: '85%', label: 'Placement Success Rate' },
    { number: '40+', label: 'Research Centers' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Final Year Student',
      content: 'MentorConnect transformed my academic journey. My mentor helped me improve my grades by 40% and secure an internship at a top tech company.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Faculty Mentor',
      content: 'The platform makes it easy to track student progress and provide personalized guidance. I\'ve seen remarkable improvements in my mentees.',
      rating: 5
    },
    {
      name: 'Mrs. Lakshmi Devi',
      role: 'Parent',
      content: 'As a parent, I appreciate the transparency and regular updates about my child\'s progress. The mentoring system has been invaluable.',
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Empowering Students Through{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mentorship
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl md:text-2xl mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Bridge the gap between potential and performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Link
                to="/select-role"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Better Learning
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Everything you need to create a successful mentoring experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by JSS STU Community
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our platform serves thousands of students and faculty members
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Real feedback from students, mentors, and parents
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-lg shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonials[currentTestimonial].content}"
              </p>
              <div>
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Student Success?
            </h2>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of students and mentors who are already part of the MentorConnect community.
            </p>
            <Link
              to="/select-role"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;