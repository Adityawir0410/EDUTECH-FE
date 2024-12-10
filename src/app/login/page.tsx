"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Ganti dengan next/navigation

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Tetap gunakan useRouter di sini

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch("https://edutech-be.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
  
      const data = await response.json();
      console.log("Login successful", data);
  
      // Simpan token di cookies
      document.cookie = `authToken=${data.token}; path=/;`;
  
      // Redirect ke dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Image */}
      <div className="relative w-1/2 hidden md:block">
        <img
          src="/images/gambarlogin.svg"
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
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
                required
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
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 h-[44px] border border-gray-300 rounded-lg text-[18px] font-manrope text-black focus:ring-primary-50 focus:border-primary-50 outline-none"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[44px] py-2 px-4 bg-primary-50 text-white text-[18px] font-semibold rounded-lg shadow-md hover:bg-primary-60 focus:outline-none font-manrope"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Masuk"}
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
