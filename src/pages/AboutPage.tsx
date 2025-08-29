'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  BookOpen, 
  Globe, 
  Target, 
  TrendingUp,
  Building,
  GraduationCap,
  Star,
  Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const achievements = [
    {
      icon: Award,
      title: 'NIRF Ranking',
      description: 'Ranked among Top 100 Universities in India by NIRF 2023',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Student Community',
      description: 'Over 15,000 students across various disciplines',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Academic Programs',
      description: '100+ undergraduate and postgraduate programs',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International collaborations with 50+ universities worldwide',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const facilities = [
    {
      title: 'State-of-the-Art Infrastructure',
      description: 'Modern classrooms, laboratories, and research facilities equipped with latest technology.'
    },
    {
      title: 'Central Library',
      description: 'Extensive collection of books, journals, and digital resources for comprehensive learning.'
    },
    {
      title: 'Research Centers',
      description: '40+ specialized research centers fostering innovation and academic excellence.'
    },
    {
      title: 'Sports Complex',
      description: 'World-class sports facilities promoting physical fitness and competitive sports.'
    },
    {
      title: 'Hostels',
      description: 'Comfortable accommodation facilities for students from across the country.'
    },
    {
      title: 'Medical Center',
      description: '24/7 healthcare services ensuring student well-being and health support.'
    }
  ];

  const stats = [
    { number: '1963', label: 'Established' },
    { number: '15,000+', label: 'Students' },
    { number: '800+', label: 'Faculty Members' },
    { number: '85%', label: 'Placement Rate' },
    { number: '40+', label: 'Research Centers' },
    { number: '100+', label: 'Programs Offered' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                JSS STU
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              JSS Science and Technology University (JSS STU) is a premier institution dedicated to excellence in education, research, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* University Overview */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Legacy of Excellence
              </h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Established in 1963, JSS Science and Technology University has been at the forefront of higher education in India. Located in the cultural city of Mysuru, Karnataka, our university has consistently maintained its commitment to academic excellence and holistic development.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                With a rich heritage spanning over six decades, JSS STU has evolved into a comprehensive university offering diverse programs in engineering, management, sciences, and humanities. Our institution is recognized for its innovative teaching methodologies, cutting-edge research, and strong industry partnerships.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Founded in 1963</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Over 60 years of educational excellence
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-lg shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To provide quality education, foster research and innovation, and develop competent professionals who contribute to society's progress and global development.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To be a globally recognized university that transforms lives through excellence in education, research, and service to humanity.
              </p>
            </motion.div>
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
              JSS STU by Numbers
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our achievements and milestones speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
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

      {/* Achievements Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Recognition and accolades that define our excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              World-Class Facilities
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Infrastructure that supports learning, research, and personal growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the JSS STU Legacy
            </h2>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Be part of an institution that has been shaping futures for over six decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.jssstuniv.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 inline-flex items-center justify-center"
              >
                Visit Official Website
                <Globe className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Footer darkMode={darkMode} /> */}
    </div>
  );
};

export default AboutPage;