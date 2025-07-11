import React from 'react';
import { motion } from 'framer-motion';
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
  ChevronRight,
  HandIcon,
  Calendar,
  Phone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const Features: React.FC = () => {
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
    },
    {
      icon: Star,
      title: 'Academic Tracking',
      description: 'Comprehensive tracking of student academic performance, including grades, attendance, and engagement metrics.'
    },
    {
      icon: HandIcon,
      title: 'Mentor Matching',
      description: 'AI-driven mentor matching based on student profiles, preferences, and academic needs.'
    },
    {
      icon: BookOpen,
      title: 'Progress Reports',
      description: 'Regularly updated reports on student progress, strengths, and areas for improvement.'
    },
    {
      icon: Bell,
      title: 'Alert and Notification ',
      description: 'Real-time alerts and notifications for students and mentors to stay updated on important events and deadlines.'
    },
    {
      icon: Calendar,
      title: 'Scheduling',
      description: 'Smart scheduling features to help students and mentors manage their time effectively.'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="container mx-auto px-2 py-8"
      >
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-10 py-10 ${darkMode ? 'text-white' : 'text-gray-900'} text-center`}>
          What Makes Us Stand Out
        </h1>
        <div className="flex justify-center my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 w-full max-w-5xl px-2 md:px-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col justify-between items-center rounded-xl shadow-md transition-shadow duration-300 p-5 min-h-[240px] w-full
                  ${darkMode
                    ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-[0_4px_24px_0_rgba(0,123,255,0.15)] hover:shadow-[0_8px_32px_0_rgba(0,123,255,0.25)] hover:border-blue-600'
                    : 'bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-blue-500'}
                `}
              >
                <div className="flex flex-col items-center w-full">
                  <div className={`flex items-center justify-center mb-3 w-12 h-12 rounded-full 
                    ${darkMode ? 'bg-blue-900/40' : 'bg-blue-50'}`}>
                    <feature.icon className={`w-7 h-7 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                  </div>
                  <h2 className={`text-base font-semibold mb-1 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}> 
                    {feature.title}
                  </h2>
                  <p className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    
    </div>
  );
}

export default Features;