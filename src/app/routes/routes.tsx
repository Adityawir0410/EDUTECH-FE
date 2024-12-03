"use client";

import React, { useState } from "react";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import Home from "../screens/home/home";

const Routes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("login"); // 'login' or 'register'

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Home />
      ) : currentPage === "login" ? (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onRegister={() => setCurrentPage("register")}
        />
      ) : (
        <Register onGoToLogin={() => setCurrentPage("login")} />
      )}
    </div>
  );
};

export default Routes;
