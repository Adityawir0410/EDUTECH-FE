import React from "react";
import { motion } from "framer-motion";

const Pengalaman: React.FC = () => {
  return (
    <div
      className="relative bg-white py-24 px-6 sm:py-32 sm:px-12 md:py-36 lg:px-20"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* SVG di Kanan Atas */}
      <div className="absolute top-[-50px] right-0 z-0 flex justify-end">
        <img
          src="/images/lingkaransetengahpt2.svg"
          alt="Lingkaran Setengah"
          className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px]"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Konten Kiri */}
        <div className="text-left space-y-6 w-full relative">
          {/* Bulatan Kecil di Atas Kata "Ciptakan" */}
          <motion.div
            className="absolute top-[-20px] left-[20px] w-6 h-6 bg-secondary-50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Teks */}
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.4] lg:leading-[1.3] text-black">
            Ciptakan Pengalaman<br />
            <span className="text-primary-50">Belajar yang Tak</span> <br />
            Terlupakan
          </h2>
          <p className="text-base sm:text-lg md:text-[22px] font-medium text-gray-600">
            Rasakan pengalaman mengajar yang lebih fleksibel dan menyenangkan!
          </p>
          <div className="relative">
            <button className="bg-primary-50 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-70 transition text-sm sm:text-base md:text-[20px]">
              Coba gratis!
            </button>
            {/* Bulatan Kecil di Bawah Tombol */}
            <motion.div
              className="absolute left-[35%] transform -translate-x-1/2 top-[100px] w-4 h-4 bg-primary-50 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div className="relative flex justify-center">
          {/* Lingkaran Blur Besar */}
          <motion.div
            className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-secondary-10 rounded-full blur-3xl opacity-50 -z-20"
            animate={{
              rotate: 360,
              x: [0, 50, 0, -50, 0],
              y: [0, 50, 100, 50, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Lingkaran Blur Kecil */}
          <motion.div
            className="absolute w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-primary-50 rounded-full blur-3xl opacity-70 -z-10"
            animate={{
              rotate: -360,
              x: [0, -50, 0, 50, 0],
              y: [0, -50, -100, -50, 0],
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
            className="w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] h-auto"
          />

          {/* Lingkaran di Bawah SVG */}
          <div className="absolute bottom-[-20px] left-[80%] flex space-x-2">
            <motion.div
              className="w-5 h-5 bg-secondary-50 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="w-3 h-3 bg-secondary-50 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>

          {/* Lingkaran di Atas SVG */}
          <div className="absolute right-[20%] flex space-x-2">
            <motion.div
              className="w-4 h-4 bg-primary-50 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengalaman;
