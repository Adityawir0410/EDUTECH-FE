"use client";

import React from "react";
import Header from "@/app/components/navbar/header";
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
      <Header />

      <div className="bg-white w-full py-36 relative font-manrope">
        {/* Lingkaran Kiri - Mirror dan Besar */}
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
              Platform pembelajaran interaktif yang membuat belajar lebih <br className="hidden lg:block" />
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
            {/* Dualingkaran SVG - Responsive Sizing */}
            {/* <div className="absolute top-[20px] -right-[100px] sm:-right-[120px] md:-right-[170px] lg:-right-[220px] xl:-right-[270px] z-0 flex justify-end overflow-visible">
  <img
    src="/images/dualingkaran.svg"
    alt="Lingkaran Setengah"
    className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] max-w-none"
  />
</div> */}


            <img
              src="/images/jempol 1.png"
              alt="Student"
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] mx-auto lg:relative 
              transform sm:translate-y-12 lg:translate-y-6 
              md:translate-y-16 xl:translate-y-6"
            />
          </div>  
        </div>
        
        {/* Kotak Biru - Keep absolute positioning unchanged */}
        <div className="absolute inset-x-0 -bottom-[30px] sm:-bottom-[40px] md:-bottom-[20px] lg:-bottom-[52.5px] bg-primary-50 w-full h-[180px]"></div>
      </div>

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