// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import RoleSelection from './pages/RoleSelection';
import AdminLogin from './pages/AdminLogin';
import MentorLogin from './pages/MentorLogin';
import StudentLogin from './pages/StudentLogin';
import Footer from './components/Footer';
import Features from './pages/features';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/select-role" element={<RoleSelection />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/mentor-login" element={<MentorLogin />} />
              <Route path="/student-login" element={<StudentLogin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;