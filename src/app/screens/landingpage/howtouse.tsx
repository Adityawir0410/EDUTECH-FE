"use client";

import React from "react";

const HowToUse: React.FC = () => {
  return (
    <div className="relative bg-white text-black py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 pb-20 sm:pb-24 md:pb-32 lg:pb-40 flex justify-center">

      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center relative">
          {/* Bagian Kiri - Gambar SVG Kotak Lengkung */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-first">
  <div className="relative w-full flex justify-center items-center max-w-[400px]">
    {/* SVG Image */}
    <img
      src="/images/kotaklengkung.svg"
      alt="Kotak Lengkung"
      className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
    />

    {/* Kotak Kiri Atas */}
    <div className="absolute top-[8%] left-[5%] w-[60%] h-[25%] bg-white rounded-xl shadow-lg 
      md:w-[70%] md:-left-[5%] lg:w-[80%] lg:-left-[10%]"></div>

    {/* Kotak Kiri Tengah */}
    <div className="absolute top-[38%] right-[5%] w-[60%] h-[25%] bg-white rounded-xl shadow-lg 
      md:w-[70%] md:-right-[5%] lg:w-[80%] lg:-right-[10%]"></div>

    {/* Kotak Kiri Bawah */}
    <div className="absolute bottom-[8%] left-[5%] w-[60%] h-[25%] bg-white rounded-xl shadow-lg 
      md:w-[70%] md:-left-[5%] lg:w-[80%] lg:-left-[10%]"></div>
  </div>
</div>

          {/* Bagian Kanan - Konten */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6 sm:space-y-8">
            {/* Judul */}
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight text-center md:text-left">
              <span className="text-primary-50 block">Cara Menggunakan</span>
              <span className="mt-4 block md:mt-6">EduTech</span>
            </h2>

            {/* Langkah 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-primary-10 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] aspect-square flex items-center justify-center rounded-full p-2 shrink-0">
                <img
                  src="/images/icon-step1.svg"
                  alt="Ikon Langkah 1"
                  className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold mb-2">
                  Daftarkan akunmu
                </h3>
                <p className="text-sm sm:text-base md:text-[20px] text-gray-600">
                  Daftar akunmu di Edutech hanya dalam beberapa menit tanpa ribet!
                </p>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-primary-10 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] aspect-square flex items-center justify-center rounded-full p-2 shrink-0">
                <img
                  src="/images/icon-step2.svg"
                  alt="Ikon Langkah 2"
                  className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold mb-2">
                  Masukkan kode enrollment
                </h3>
                <p className="text-sm sm:text-base md:text-[20px] text-gray-600">
                  Mulai petualangan belajarmu dengan memasukkan kode enrollment kelas.
                </p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-primary-10 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] aspect-square flex items-center justify-center rounded-full p-2 shrink-0">
                <img
                  src="/images/icon-step3.svg"
                  alt="Ikon Langkah 3"
                  className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold mb-2">
                  Ikuti materi pembelajaran
                </h3>
                <p className="text-sm sm:text-base md:text-[20px] text-gray-600">
                  Ikuti materi pembelajaran interaktif yang seru, kerjakan tugas dan ujian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;