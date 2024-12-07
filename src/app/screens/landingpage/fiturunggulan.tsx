import React from "react";

const FiturUnggulan: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-primary-50 to-primary-70 text-foreground py-16"
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Judul Responsif */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold mb-8 pt-10">
          Fitur Unggulan Kami
        </h2>
        {/* Deskripsi Responsif */}
        <p className="text-lg sm:text-xl md:text-[22px] font-medium mb-12">
          Semua fitur yang kamu butuhkan untuk belajar lebih cepat dan efisien—langsung <br />
          dalam genggaman tanganmu!
        </p>
        {/* Grid Konten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-secondary-50 rounded-full flex items-center justify-center absolute top-1 sm:top-3 sm:left-4 left-1/2 transform sm:translate-x-0 -translate-x-1/2 z-10">
              <span className="text-white text-2xl sm:text-4xl font-bold">1</span>
            </div>
            <div className="bg-white p-6 pb-6 rounded-[20px] shadow-md w-[362px] h-[418px] flex flex-col mx-auto mt-14 z-0 relative">
              <div className="mb-6 flex justify-center mt-8">
                <img
                  src="/images/card1.svg"
                  alt="Pembelajaran Interaktif"
                  className="h-16 sm:h-24 w-16 sm:w-24"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg sm:text-xl md:text-[28px] font-medium text-black mb-2">
                  Pembelajaran <br /> Interaktif
                </h3>
                <p className="text-sm sm:text-base md:text-[16px] font-normal text-black">
                  Video, kuis, dan latihan yang dapat diikuti langsung membuat pengalaman belajar lebih menarik dan
                  memudahkan pemahaman.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-secondary-50 rounded-full flex items-center justify-center absolute top-1 sm:top-3 sm:left-4 left-1/2 transform sm:translate-x-0 -translate-x-1/2 z-10">
              <span className="text-white text-2xl sm:text-4xl font-bold">2</span>
            </div>
            <div className="bg-white p-6 pb-6 rounded-[20px] shadow-md w-[362px] h-[418px] flex flex-col mx-auto mt-14 z-0 relative">
              <div className="mb-6 flex justify-center mt-8">
                <img
                  src="/images/card2.svg"
                  alt="Kelas Virtual & Kolaborasi"
                  className="h-16 sm:h-24 w-16 sm:w-24"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg sm:text-xl md:text-[28px] font-medium text-black mb-2">
                  Kelas Virtual & Kolaborasi
                </h3>
                <p className="text-sm sm:text-base md:text-[16px] font-normal text-black">
                  Kelas virtual memungkinkan siswa dan guru berinteraksi secara langsung melalui video dan forum diskusi.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-secondary-50 rounded-full flex items-center justify-center absolute top-1 sm:top-3 sm:left-4 left-1/2 transform sm:translate-x-0 -translate-x-1/2 z-10">
              <span className="text-white text-2xl sm:text-4xl font-bold">3</span>
            </div>
            <div className="bg-white p-6 pb-6 rounded-[20px] shadow-md w-[362px] h-[418px] flex flex-col mx-auto mt-14 z-0 relative">
              <div className="mb-6 flex justify-center mt-8">
                <img
                  src="/images/card3.svg"
                  alt="Pantau Penugasan"
                  className="h-16 sm:h-24 w-16 sm:w-24"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg sm:text-xl md:text-[28px] font-medium text-black mb-2">
                  Pantau <br /> Penugasan
                </h3>
                <p className="text-sm sm:text-base md:text-[16px] font-normal text-black">
                  Siswa dapat memantau penugasan dan tenggat waktu pengumpulan belajar secara real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturUnggulan;
