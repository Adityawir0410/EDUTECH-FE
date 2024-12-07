import React from "react";

const Pengalaman: React.FC = () => {
  return (
    <div className="relative bg-white py-16 px-6 sm:py-20 sm:px-12 md:py-24 lg:px-20">
      <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Konten Kiri */}
        <div className="text-left space-y-6 max-w-[400px]">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-[1.4] text-black">
            Ciptakan Pengalaman<br />
            <span className="text-primary-50">Belajar yang Tak</span> <br />
            Terlupakan
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-600">
            Rasakan pengalaman mengajar yang lebih fleksibel dan menyenangkan!
          </p>
          <button className="bg-primary-50 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-70 transition">
            Coba gratis!
          </button>
        </div>

        {/* Gambar Kanan */}
        <div className="flex justify-center">
          <img
            src="/images/fotosamping.svg"
            alt="Gambar Samping"
            className="w-full max-w-[700px] lg:max-w-[800px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Pengalaman;
