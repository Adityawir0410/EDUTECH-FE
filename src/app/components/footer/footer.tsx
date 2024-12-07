import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-90 text-white py-12" style={{ fontFamily: "Manrope, sans-serif" }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo dan Informasi */}
          <div>
            <img
              src="/images/logofooter.svg"
              alt="Logo EduTech"
              className="w-[180px] mb-4"
            />
            <p className="text-[16px] font-bold mb-4">PT Edukasi Nasional Teknologi Makmur</p>
            <p className="text-[14px] font-medium leading-relaxed mb-4">
              Gedung Rektorat Lantai 2 <br />
              Jl. Veteran No.10-11, Ketawanggede, Kec. Lowokwaru, <br />
              Kota Malang, Jawa Timur, 65145.
            </p>
          </div>

          {/* Pages dan Address */}
          <div className="flex flex-col lg:flex-row lg:justify-end gap-8">
            {/* Pages */}
            <div>
              <h3 className="text-[22px] font-bold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[18px] font-medium hover:text-primary-30 transition-colors">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[18px] font-medium hover:text-primary-30 transition-colors">
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[18px] font-medium hover:text-primary-30 transition-colors">
                    Tentang
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-[22px] font-bold mb-4">Address</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:edutech@gmail.com"
                    className="text-[18px] font-medium flex items-center hover:text-primary-30 transition-colors"
                  >
                    <img
                      src="/images/email.svg"
                      alt="Email"
                      className="w-6 h-6 mr-2"
                    />
                    edutech@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0821456789011"
                    className="text-[18px] font-medium flex items-center hover:text-primary-30 transition-colors"
                  >
                    <img
                      src="/images/phone.svg"
                      alt="Phone"
                      className="w-6 h-6 mr-2"
                    />
                    0821456789011
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ikon Media Sosial */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-8 flex justify-end">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary-30 transition-colors">
            <img src="/images/FB.svg" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-primary-30 transition-colors">
            <img src="/images/insta.svg" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-primary-30 transition-colors">
            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-primary-30 transition-colors">
            <img src="/images/twitter.svg" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Garis Horizontal Penuh */}
      <div className="w-full border-t border-wj mt-8"></div>

      {/* Footer Bawah */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center pt-4">
          <p className="text-sm text-center">
            &copy; 2024 EduTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
