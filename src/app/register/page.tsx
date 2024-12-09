"use client";

import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Image */}
      <div className="relative w-1/2 hidden md:block">
        <img
          src="/images/gambarlogin.svg" // Pastikan path file SVG benar
          alt="Library"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 bg-white">
        <div className="max-w-md w-full">
          {/* Welcome Text */}
          <h1 className="text-[30px] font-bold text-gray-900 font-manrope">Buat Akun</h1>
          <p className="mt-2 text-[18px] font-normal text-gray-600 font-manrope">
            Silahkan buat akun anda sebelum memulai!
          </p>

          {/* Register Form */}
          <form className="mt-6 space-y-4">
            {/* Nama Lengkap */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-[18px] font-normal text-gray-700 font-manrope"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your name"
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[18px] font-normal text-gray-700 font-manrope"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-[18px] font-normal text-gray-700 font-manrope"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-[18px] font-normal text-gray-700 font-manrope"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
              />
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-[18px] font-normal text-gray-700 font-manrope"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Your password"
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[44px] py-2 px-4 bg-primary-50 text-white text-[18px] font-semibold rounded-lg shadow-md hover:bg-primary-60 focus:outline-none font-manrope"
            >
              Daftar
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-[18px] text-center text-gray-600 font-manrope">
            Sudah Punya Akun?{" "}
            <a href="#" className="font-medium text-primary-50 hover:underline">
              Masuk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
