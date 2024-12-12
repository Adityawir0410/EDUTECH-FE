"use client";

import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar and mobile detection
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 640);
      // Automatically close sidebar on mobile
      if (window.innerWidth < 640) {
        setIsSidebarOpen(false);
      }
    };

    // Check initial mobile view
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobileView);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "Dashboard", icon: "/images/vuesax.svg" },
    { name: "Classes", icon: "/images/classes.svg" },
    { name: "Calendar", icon: "/images/calender.svg" },
    { name: "Group Chat", icon: "/images/groupchat.svg" },
    { name: "Task", icon: "/images/task.svg" },
    { name: "Notes", icon: "/images/notes.svg" },
    { name: "Settings", icon: "/images/settings.svg" },
    { name: "Trash", icon: "/images/trash.svg" },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Burger Menu */}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {/* Logo */}
            <img
              src="/images/logo.svg"
              alt="EduTech Logo"
              className="h-6 sm:h-8 md:h-10"
            />
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Button - Gabung Kelas */}
            <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-white text-xs sm:text-sm font-medium rounded-lg shadow-md hover:bg-primary-60 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="inline sm:inline">Gabung Kelas</span>
            </button>

            {/* Notification Icon */}
            <button className="relative p-2 sm:p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar */}
            {/* <img
              src="/images/user-avatar.jpg"
              alt="User Avatar"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full object-cover shadow-md"
            /> */}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-40 transition-all duration-300 ${
          isMobile
            ? isSidebarOpen
              ? "w-10/13" // Reduced width to 10/12 (about 83%) in mobile mode
              : "w-0 overflow-hidden"
            : isSidebarOpen
            ? "w-64 sm:w-80"
            : "w-24"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div
          className={`flex flex-col items-start pt-20 sm:pt-24 px-4 sm:px-6 w-full ${
            isMobile && !isSidebarOpen ? "hidden" : ""
          }`}
        >
          <ul className="space-y-4 sm:space-y-6 w-full">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  if (isMobile) setIsSidebarOpen(false);
                }}
                className={`flex items-center gap-3 sm:gap-5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg cursor-pointer transition ${
                  activeIndex === index
                    ? "bg-primary-50 text-white"
                    : "text-gray-700"
                }`}
              >
                <div
                  className={`h-10 sm:h-14 w-10 sm:w-14 flex items-center justify-center rounded-lg transition ${
                    activeIndex === index ? "bg-primary-50" : "bg-transparent"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} Icon`}
                    className={`h-5 w-5 sm:h-7 sm:w-7 ${
                      activeIndex === index
                        ? "filter brightness-0 invert"
                        : ""
                    }`}
                  />
                </div>
                {(isSidebarOpen && !isMobile || isMobile) && (
                  <span
                    className={`text-sm sm:text-base font-medium ${
                      activeIndex === index
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;