"use client";

import React from "react";
import Header from "@/app/components/navbar/header";
import Headerdua from "@/app/components/navbar/headerdashboard";
import Ussergain from "./ussergain";
import HowToUse from "./howtouse";
import FiturUnggulan from "./fiturunggulan";
import Pengalaman from "./pengalaman";
import Pendapat from "./pendapat";
import Footer from "@/app/components/footer/footer";

const LandingPage: React.FC = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      {/* <Header /> */}
      <Headerdua />

      {/* Hero Section */}
      <div className="bg-white w-full py-36 relative font-manrope">
        {/* Decorative Circle - Left */}
        <div className="absolute top-0 left-0 transform scale-x-[-1] z-0">
          <img
            src="/images/lingkaransetengahpt2.svg"
            alt="Lingkaran Kiri"
            className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]"
          />
        </div>

        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left lg:pt-24">
            <h1 className="text-[32px] sm:text-[48px] lg:text-[54px] font-bold text-gray-900 leading-snug">
              Maksimalkan <span className="text-primary-50">Potensi</span>
              <br />
              <span className="text-primary-50">Belajarmu</span>, Dimana
              <br />
              Kapan Saja!
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal text-gray-700 mt-4">
              Platform pembelajaran interaktif yang membuat belajar lebih{" "}
              <br className="hidden lg:block" />
              menyenangkan dan efektif.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-700">
                Bergabung
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-300">
                Kunjungi Kelas
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <img
              src="/images/jempol 1.png"
              alt="Student"
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] mx-auto lg:relative transform sm:translate-y-12 lg:translate-y-6 md:translate-y-16 xl:translate-y-6"
            />

            {/* Floating Boxes */}
            <div className="absolute bottom-[20px] left-[90%] transform -translate-x-1/2 bg-white bg-opacity-80 w-[100px] h-[40px] sm:w-[120px] sm:h-[50px] md:w-[140px] md:h-[60px] lg:w-[160px] lg:h-[70px] rounded-lg shadow-lg z-10">
              <div className="py-2 text-center">
                <img
                  src="/images/Frame 2667.png"
                  alt="Frame 2667"
                  className="inline-block"
                />
              </div>
            </div>

            <div className="absolute bottom-[90px] left-[15%] transform -translate-x-1/2 bg-white bg-opacity-80 w-[100px] h-[40px] sm:w-[120px] sm:h-[50px] md:w-[140px] md:h-[60px] lg:w-[160px] lg:h-[70px] rounded-lg shadow-lg z-10">
              <div className="py-2 text-center">
                <img
                  src="/images/Frame 2668.png"
                  alt="Frame 2668"
                  className="inline-block"
                />
              </div>
            </div>
            <div className="absolute bottom-[240px] sm:bottom-[300px] md:bottom-[380px] left-[19%] transform -translate-x-1/2 bg-primary-50 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] rounded-lg shadow-lg z-10">
  <div className="flex items-center justify-center h-full">
    <img
      src="/images/Group 8749.svg"
      alt="Frame 2668"
      className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]"
    />
  </div>
</div>

<div className="absolute bottom-[200px] sm:bottom-[350px] md:bottom-[300px] left-[80%] transform -translate-x-1/2 bg-primary-50 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] rounded-lg shadow-lg z-10">
  <div className="flex items-center justify-center h-full">
    <img
      src="/images/Group 8749.svg"
      alt="Frame 2668"
      className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]"
    />
  </div>
</div>


          </div>
        </div>

        {/* Blue Decorative Bar */}
        <div className="absolute inset-x-0 -bottom-[30px] sm:-bottom-[40px] md:-bottom-[20px] lg:-bottom-[52.5px] bg-primary-50 w-full h-[180px]"></div>
      </div>

      {/* Additional Sections */}
      <Ussergain />
      <HowToUse />
      <FiturUnggulan />
      <Pengalaman />
      <Pendapat />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
