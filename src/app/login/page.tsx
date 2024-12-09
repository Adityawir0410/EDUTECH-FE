"use client";

import React from "react";

const Login: React.FC = () => {
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
          <h1 className="text-[30px] font-bold text-gray-900 font-manrope">Selamat Datang!</h1>
          <p className="mt-2 text-[18px] font-normal text-gray-600 font-manrope">
            Silahkan masukkan akun anda
          </p>

          {/* Login Form */}
          <form className="mt-6 space-y-4">
            {/* Email Input */}
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

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-[18px] font-normal text-gray-700 font-manrope"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12h.01M12 12h.01M9 12h.01M4 6h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex justify-center items-center py-2 px-4 h-[44px] border border-gray-300 rounded-lg shadow-sm bg-white text-[18px] font-normal font-manrope text-gray-700 hover:bg-gray-50"
            >
              <img
                src="/images/google logo.svg" // Pastikan path file Google logo benar
                alt="Google Icon"
                className="h-5 w-5 mr-2"
              />
              Sign in with Google
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[44px] py-2 px-4 bg-primary-50 text-white text-[18px] font-semibold rounded-lg shadow-md hover:bg-primary-60 focus:outline-none font-manrope"
            >
              Masuk
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-[18px] text-center text-gray-600 font-manrope">
            Tidak Punya Akun?{" "}
            <a href="#" className="font-medium text-primary-50 hover:underline">
              Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
