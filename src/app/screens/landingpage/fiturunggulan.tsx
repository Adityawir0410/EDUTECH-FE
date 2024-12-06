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
        <h2 className="text-3xl font-bold mb-8">Fitur Unggulan Kami</h2>
        <p className="text-lg mb-12">
          Semua fitur yang kamu butuhkan untuk belajar lebih cepat dan efisien—langsung dalam genggaman tanganmu!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-[362px] h-[418px] flex flex-col justify-between mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary-50 rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-90"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5h4V7h2v5h4l-5 5z" />
              </svg>
            </div>
            <h3 className="text-[28px] font-medium text-black mb-2">Pembelajaran Interaktif</h3>
            <p className="text-[16px] font-normal text-black">
              Video, kuis, dan latihan yang dapat diikuti langsung membuat pengalaman belajar lebih menarik dan
              memudahkan pemahaman.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-[362px] h-[418px] flex flex-col justify-between mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary-50 rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-90"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14H7v-2h6v2zm0-4H7v-2h6v2zm0-4H7V7h6v2zm4 8h-2v-6h2v6z" />
              </svg>
            </div>
            <h3 className="text-[28px] font-medium text-black mb-2">Kelas Virtual & Kolaborasi</h3>
            <p className="text-[16px] font-normal text-black">
              Kelas virtual memungkinkan siswa dan guru berinteraksi secara langsung melalui video dan forum diskusi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-[362px] h-[418px] flex flex-col justify-between mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary-50 rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-90"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 4v2h14V4H5zm0 14v2h14v-2H5zm0-6v2h14v-2H5z" />
              </svg>
            </div>
            <h3 className="text-[28px] font-medium text-black mb-2">Pantau Penugasan</h3>
            <p className="text-[16px] font-normal text-black">
              Siswa dapat memantau penugasan dan tenggat waktu pengumpulan belajar secara real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturUnggulan;
