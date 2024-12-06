"use client";

import React from "react";

const Ussergain: React.FC = () => {
  return (
    <div className="relative bg-white text-black pt-6 sm:pt-8 md:pt-10 lg:pt-12">
      {/* Lingkaran Kiri - Mirror dan Besar */}
      <div className="absolute bottom-0 left-0 transform scale-x-[-1] z-0">
        <img
          src="/images/lingkaransetengahpt2.svg"
          alt="Lingkaran Kiri"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
        />
      </div>

      {/* Lingkaran Kanan - Tengah Kanan dan Besar */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-0">
        <img
          src="/images/lingkaransetengahpt2.svg"
          alt="Lingkaran Kanan"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
        />
      </div>

      {/* Konten */}
      <div className="container relative z-10 mx-auto px-6 md:px-16 lg:px-32 py-16">
        {/* Judul */}
        <h2 className="text-black text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold font-manrope text-center mb-4">
          Apa yang Didapat di <span className="text-primary-50">EduTech?</span>
        </h2>
        <p className="text-[18px] sm:text-[20px] md:text-[22px] text-center font-manrope font-normal text-black leading-relaxed mb-10">
          Platform pembelajaran interaktif yang membuat belajar lebih <br />
          menyenangkan dan efektif.
        </p>

        {/* Kartu Konten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 pb-20">
          {/* Kartu 1 */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center w-full max-w-[420px] mx-auto h-[333px]">
            <div className="bg-secondary-50 w-[110px] h-[110px] rounded-full flex items-center justify-center mb-4">
              <img src="/images/icon1.svg" alt="Ikon 1" className="w-[60px] h-[60px]" />
            </div>
            <h3 className="text-[28px] font-semibold font-manrope mb-2 text-black">
              Fleksibilitas Penuh
            </h3>
            <p className="text-[16px] font-manrope text-black">
              Akses materi pelajaran kapan saja, di mana saja. Belajar tanpa batasan, dari layar ponsel atau komputer.
            </p>
          </div>

          {/* Kartu 2 */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center w-full max-w-[420px] mx-auto h-[333px]">
            <div className="bg-secondary-50 w-[110px] h-[110px] rounded-full flex items-center justify-center mb-4">
              <img src="/images/icon2.svg" alt="Ikon 2" className="w-[60px] h-[60px]" />
            </div>
            <h3 className="text-[28px] font-semibold font-manrope mb-2 text-black">
              Kolaborasi Tanpa Batas
            </h3>
            <p className="text-[16px] font-manrope text-black">
              Belajar dengan teman sekelas, diskusi dengan guru, dan buat proyek bersama dalam satu platform.
            </p>
          </div>

          {/* Kartu 3 */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center w-full max-w-[420px] mx-auto h-[333px]">
            <div className="bg-secondary-50 w-[110px] h-[110px] rounded-full flex items-center justify-center mb-4">
              <img src="/images/icon3.svg" alt="Ikon 3" className="w-[60px] h-[60px]" />
            </div>
            <h3 className="text-[28px] font-semibold font-manrope mb-2 text-black">
              Kelola Tugas
            </h3>
            <p className="text-[16px] font-manrope text-black">
              Kirim tugas, ikuti ujian, dan dapatkan umpan balik instan. Semua dalam satu klik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ussergain;
