import React from "react";
import { motion } from "framer-motion";

const Pengalaman: React.FC = () => {
  return (
    <div
      className="relative bg-white py-24 px-6 sm:py-32 sm:px-12 md:py-36 lg:px-20"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Konten Kiri */}
        <div className="text-left space-y-6 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.4] lg:leading-[1.3] text-black">
            Ciptakan Pengalaman<br />
            <span className="text-primary-50">Belajar yang Tak</span> <br />
            Terlupakan
          </h2>
          <p className="text-base sm:text-lg md:text-[22px] font-medium text-gray-600">
            Rasakan pengalaman mengajar yang lebih fleksibel dan menyenangkan!
          </p>
          <button className="bg-primary-50 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-70 transition text-sm sm:text-base md:text-[20px]">
            Coba gratis!
          </button>
        </div>

        {/* Gambar Kanan */}
        <div className="relative flex justify-center">
          {/* Lingkaran Blur Besar */}
          <motion.div
            className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-secondary-10 rounded-full blur-3xl opacity-50 -z-20"
            animate={{
              rotate: 360,
              x: [0, 50, 0, -50, 0], // Bergerak ke kanan, kembali, ke kiri, kembali
              y: [0, 50, 100, 50, 0], // Bergerak ke bawah dan kembali ke asal
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Lingkaran Blur Kecil */}
          <motion.div
            className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-primary-50 rounded-full blur-3xl opacity-70 -z-10"
            animate={{
              rotate: -360,
              x: [0, -50, 0, 50, 0], // Bergerak ke kiri, kembali, ke kanan, kembali
              y: [0, -50, -100, -50, 0], // Bergerak ke atas dan kembali ke asal
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Gambar */}
          <img
            src="/images/fotosamping.svg"
            alt="Gambar Samping"
            className="w-full max-w-[1200px] sm:max-w-[1400px] md:max-w-[1600px] lg:max-w-[1800px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Pengalaman;
