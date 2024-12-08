"use client";

import React, { useState } from "react";
// import Login from "../screens/auth/login";
// import Register from "../screens/auth/register";
import Home from "../screens/home/home";
import LandingPage from "../screens/landingpage/landingpage";

const Routes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing"); // 'landing', 'login', or 'register'

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {currentPage === "landing" ? (
        <LandingPage />
      ) : isAuthenticated ? (
        <Home />
      ) : currentPage === "login" ? (
        // <Login
        //   onLoginSuccess={handleLoginSuccess}
        //   onRegister={() => setCurrentPage("register")}
        // />
        <div>Login is temporarily disabled</div>
      ) : (
        // <Register onGoToLogin={() => setCurrentPage("login")} />
        <div>Register is temporarily disabled</div>
      )}
    </div>
  );
};

export default Routes;
