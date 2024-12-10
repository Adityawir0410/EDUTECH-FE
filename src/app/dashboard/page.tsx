"use client";

import React from "react";
import Headerdua from "@/app/dashboard/navbar/headerdashboard"; // Impor Header sesuai path

const LoginSuccess: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Headerdua />

      {/* Dashboard Content */}
      <div className="flex-grow p-6 pt-8 sm:pt-6 md:pt-16 sm:p-12 md:p-24 md:pr-12 bg-white shadow-md m-6 rounded-lg">
        {/* Row Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {/* Left Column (3/4 width) */}
          <div className="col-span-3 bg-white rounded-lg shadow-inner flex flex-col items-center">
            <img
              src="/images/banner.svg"
              alt="Banner"
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Search Bar */}
            <div className="relative mt-6 w-full">
              <img
                src="/images/search.svg"
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
              />
              <input
                type="text"
                placeholder="Cari Sekarang..."
                className="w-full pl-12 pr-4 py-3 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>

          {/* Right Column (1/4 width) */}
          <div className="col-span-1 p-6 md:pr-3 bg-gray-100 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-700">Right Column</h2>
            <p className="text-gray-600 mt-4">
              This is the right column. Padding-right is reduced on tablet screens for better alignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
