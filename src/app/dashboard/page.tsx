"use client";

import React, { useState } from "react";
import Headerdua from "@/app/dashboard/navbar/headerdashboard";
import CardVideo from "@/app/dashboard/component/cardvideo";
import UpcomingTask from "@/app/dashboard/component/upcomingtask";
import Lesson from "@/app/dashboard/component/leason";
import GroupChat from "@/app/dashboard/component/groupchat";
// Impor halaman Classes
import ClassesPage from "@/app/dashboard/classes/page";

const LoginSuccess: React.FC = () => {
  const userName = "Adit";
  const [activePage, setActivePage] = useState("dashboard"); // State untuk mengontrol halaman aktif

  // Fungsi untuk mengganti halaman
  const handleMenuClick = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Headerdua onMenuClick={handleMenuClick} />

      {/* Dashboard Content */}
      <div className="flex-grow p-6 pt-8 sm:pt-6 md:pt-16 sm:p-12 md:p-24 md:pr-12 bg-white m-6 rounded-lg">
        {activePage === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {/* Dashboard Content */}
            <div className="col-span-3 flex flex-col items-start relative">
              <div className="relative w-full">
                {/* SVG Banner */}
                <img
                  src="/images/banner.svg"
                  alt="Banner"
                  className="w-full max-h-130 object-contain rounded-lg"
                />
                {/* Teks Overlay */}
                <div className="absolute top-6 sm:top-12 lg:top-20 lg:left-12 w-full lg:w-3/4 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-12 text-white">
                  <h1 className="font-manrope font-bold text-sm sm:text-lg md:text-4xl lg:text-6xl mb-4">
                    Welcome back, {userName} 👋
                  </h1>
                  <p className="font-manrope text-[8px] sm:text-[10px] md:text-lg lg:text-2xl leading-snug">
                    Setiap langkah kecil menuju ilmu membawa <br />
                    Anda lebih dekat dengan kesuksesan. Ayo mulai hari ini!
                  </p>
                </div>
              </div>

              {/* Title Above Search Bar */}
              <h2
                className="font-manrope font-semibold text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 text-black"
                style={{ fontSize: "calc(12px + 1vw)" }}
              >
                Kelas Anda
              </h2>

              {/* Search Bar */}
              <div className="relative mt-3 sm:mt-4 w-full">
                <img
                  src="/images/search.svg"
                  alt="Search Icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Cari Sekarang..."
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 text-xs sm:text-sm text-black border-2 border-blue-500 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              {/* Card Video Section */}
              <div className="mt-6 w-full">
                <CardVideo />
              </div>
            </div>

            <div className="col-span-1">
              <UpcomingTask />
              <Lesson />
              <GroupChat />
            </div>
          </div>
        )}

        {activePage === "classes" && (
          <div>
            {/* Tampilkan halaman Classes */}
            <ClassesPage />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSuccess;
