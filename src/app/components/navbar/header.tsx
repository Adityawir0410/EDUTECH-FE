"use client";

import React, { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="EduTech Logo"
            className="w-25 h-25 sm:w-25 sm:h-25 lg:w-25 lg:h-25"
          />
        </div>

        {/* Navigation + Button Section */}
        <div className="flex items-center justify-end gap-4 md:gap-8 w-full">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-[14px] md:text-[16px] font-manrope">
            <a href="#fitur" className="text-primary-50 hover:underline">
              Fitur
            </a>
            <a href="#carakerja" className="text-primary-50 hover:underline">
              Cara Kerja
            </a>
            <a href="#tentang" className="text-primary-50 hover:underline">
              Tentang
            </a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button className="w-[120px] sm:w-[139px] px-4 py-2 bg-primary-50 text-white font-manrope font-semibold rounded-lg hover:bg-primary-70 transition">
              Login
            </button>
            <button className="w-[120px] sm:w-[139px] px-4 py-2 bg-primary-10 text-primary-70 font-manrope font-semibold rounded-lg hover:bg-primary-30 hover:text-primary-90 transition">
              Daftar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="flex md:hidden text-primary-50 focus:outline-none"
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col gap-4 py-4 px-6 md:hidden"
          >
            <a 
              href="#fitur" 
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-50 hover:underline"
            >
              Fitur
            </a>
            <a 
              href="#carakerja" 
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-50 hover:underline"
            >
              Cara Kerja
            </a>
            <a 
              href="#tentang" 
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-50 hover:underline"
            >
              Tentang
            </a>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-4 py-2 bg-primary-50 text-white font-manrope font-semibold rounded-lg hover:bg-primary-70 transition"
            >
              Login
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-4 py-2 bg-primary-10 text-primary-70 font-manrope font-semibold rounded-lg hover:bg-primary-30 hover:text-primary-90 transition"
            >
              Daftar
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;