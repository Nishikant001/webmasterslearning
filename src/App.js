import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
// Import components
import Wow from './wow/Wow.jsx';
import Navbar from "./Navbar/Nav"; 
import Navbar_Student from "./peopls/students/Navbar_Student/Nav_Student.jsx";
import Footer from "./Footer/Footer.jsx";
import InstructorSection from "./Herioc 1/Herioc1.jsx"; 
import StudentDashboard from "./peopls/students/StudentsDashboard/DashBoard.jsx";
// import StudentRegistrationForm from "./peopls/students/Signup/Signup.jsx";
import LoginForm from "./peopls/students/Signup/Login.jsx";
import CoursesSection from "./courses/Course.jsx";
import PopularCoursesSection from "./courses/Course2.jsx";
import TeamSection from "./Team/Team.jsx";
import BlogSection from "./Blog/Blog.jsx";
import ContactForm from "./contact/Contact.jsx";
import PrivacyPolicy from "./PrivecyPolicy/Privecy.jsx";
import TermsAndPrivacy from "./PrivecyPolicy/Term.jsx";
import CookiesPolicy from "./PrivecyPolicy/Cookies.jsx";
import ReviewsSection from "./Team/Reviews.jsx";
import NotFoundPage from "./404/Notfound.jsx";
import QueryForm from "./peopls/students/quaryform/Queryform.jsx";
// import StudentAttendance from "./atten/attend.jsx";
import NotificationsPage from "./notification/Notification.jsx";
import FloatingLogo from "./FloatingLogo.js";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setUserRole] = useState(null);

  const loadAuthStateFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (token && storedRole) {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
    }
  };

  useEffect(() => {
    loadAuthStateFromLocalStorage();
  }, []);

  const handleLogin = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const renderNavbar = () => {
    if (!isAuthenticated) {
      return <Navbar />;
    } else if (role === "student") {
      return <Navbar_Student onLogout={handleLogout} />;
    }
  };

  return (
    <div className="App">
      <HelmetProvider>
      {renderNavbar()}

      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<InstructorSection />} />
            <Route path="/course" element={<CoursesSection />} />
            <Route path="/course2" element={<PopularCoursesSection />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndPrivacy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/reviews" element={<ReviewsSection />} />
           
            
            <Route path="/student-not" element={<NotificationsPage />} />
            <Route path="/student-login" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="*" element={<NotFoundPage />} />
          
          </>
        ) : (
          <>
            {role === "student" && (
              <>
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/course" element={<CoursesSection />} />
                <Route path="/course2" element={<PopularCoursesSection />} />
                <Route path="/team" element={<TeamSection />} />
                <Route path="/blog" element={<BlogSection />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndPrivacy />} />
                <Route path="/cookies" element={<CookiesPolicy />} />
                <Route path="/reviews" element={<ReviewsSection />} />
                <Route path="/queryform" element={<QueryForm />} /> {/* Use lowercase here */}
                <Route path="*" element={<NotFoundPage />} />
              </>
            )}
          </>
        )}
      </Routes>

      <Footer />
      <FloatingLogo/>
      <Wow />
     
      </HelmetProvider>
    </div>
  );
}

export default App;
