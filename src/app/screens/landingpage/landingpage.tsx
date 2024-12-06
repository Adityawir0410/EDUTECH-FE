"use client";

import React from "react";
import Header from "@/app/components/navbar/header";
import Ussergain from "./ussergain";
import HowToUse from "./howtouse";
import FiturUnggulan from "./fiturunggulan";

const LandingPage: React.FC = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white px-6 md:px-16 lg:px-32 relative overflow-hidden pt-[100px] sm:pt-[120px] md:pt-[140px] lg:pt-[80px] xl:pt-[60px]">
        {/* Left Section */}
        <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          {/* Heading */}
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[65px] font-bold font-manrope leading-tight text-black mb-4 sm:mb-6">
            Maksimalkan{" "}
            <span className="text-primary-50">Potensi</span> <br />
            <span className="text-primary-50">Belajarmu</span>, Dimana <br />
            Saja, Kapan Saja!
          </h1>

          {/* Subheading */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-manrope font-normal text-black leading-relaxed mb-6 sm:mb-8">
            Platform pembelajaran interaktif yang membuat belajar lebih <br />
            menyenangkan dan efektif.
          </p>

          {/* Buttons */}
          <div className="mt-2 sm:mt-2 md:mt-2 lg:mt-1 flex flex-row gap-4 items-center justify-center lg:justify-start">


            <button className="px-6 py-3 bg-primary-50 text-white text-[16px] sm:text-[18px] lg:text-[20px] font-manrope font-semibold rounded-lg shadow-md hover:bg-primary-70 transition w-auto">
              Bergabung
            </button>
            <button className="px-6 py-3 bg-primary-10 text-primary-70 text-[16px] sm:text-[18px] lg:text-[20px] font-manrope font-semibold rounded-lg shadow-md hover:bg-primary-30 hover:text-primary-90 transition w-auto">
              Kunjungi Kelas
            </button>
          </div>
        </div>
        
        {/* New Box Below */}
        <div className="bg-primary-50 absolute bottom-0 left-0 right-0 bg-primary-10 h-[105px] sm:h-[90px] md:h-[80px] lg:h-[105px]">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 h-full flex items-center justify-between ">
            {/* Placeholder for additional content if needed */}
            <div className="text-primary-70 font-manrope">
              {/* You can add content here if required */}
            </div>
          </div>
        </div>
      </div>
      <Ussergain/>
      <HowToUse/>
      <FiturUnggulan/>
    </div>
  );
};

export default LandingPage;