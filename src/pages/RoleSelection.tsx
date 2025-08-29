import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, GraduationCap, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const RoleSelection: React.FC = () => {
  const { darkMode } = useTheme();

  const roles = [
    {
      title: 'Admin',
      description: 'Manage platform and monitor performance.',
      icon: Shield,
      path: '/admin-login',
      color: 'from-red-500 to-pink-600',
      hoverColor: 'from-red-600 to-pink-700'
    },
    {
      title: 'Mentor',
      description: 'Guide students, track progress, schedule meetings.',
      icon: Users,
      path: '/mentor-login',
      color: 'from-blue-500 to-purple-600',
      hoverColor: 'from-blue-600 to-purple-700'
    },
    {
      title: 'Student',
      description: 'Connect with mentors, view performance, and feedback.',
      icon: GraduationCap,
      path: '/student-login',
      color: 'from-green-500 to-teal-600',
      hoverColor: 'from-green-600 to-teal-700'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      <Header />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Role
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Select your role to access the MentorConnect platform
            </p>
          </motion.div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={role.path}
                  className={`block p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center group-hover:bg-gradient-to-r ${role.hoverColor} transition-all duration-300`}>
                    <role.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-center mb-4 transition-colors duration-300 ${
                    darkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'
                  }`}>
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-center mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {role.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center group-hover:bg-gradient-to-r ${role.hoverColor} transition-all duration-300`}>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Need help choosing? Contact our support team for assistance.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } shadow-md`}
              >
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  📧 support@mentorconnect.edu
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } shadow-md`}
              >
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  📞 +91 821 2548 400
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

     
    </div>
  );
};

export default RoleSelection;