"use client";

import React, { useState } from "react";

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");

  const renderForm = () => {
    if (activeTab === "info") {
      return (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <label className="w-full sm:w-40 font-manrope font-bold text-[20px] text-black">
              Nama
            </label>
            <input
              type="text"
              defaultValue="Aditya Wirayudha"
              className="w-full sm:flex-1 border border-primary-50 rounded-lg px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <label className="w-full sm:w-40 font-manrope font-bold text-[20px] text-black">
              Email
            </label>
            <input
              type="email"
              defaultValue="adit123man@gmail.com"
              className="w-full sm:flex-1 border border-primary-50 rounded-lg px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <label className="w-full sm:w-40 font-manrope font-bold text-[20px] text-black">
              Username
            </label>
            <input
              type="text"
              defaultValue="Adit123"
              className="w-full sm:flex-1 border border-primary-50 rounded-lg px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <button className="self-end bg-primary-50 text-white px-6 py-3 text-sm sm:text-lg rounded-lg hover:bg-primary-70 transition font-manrope">
            Save Change
          </button>
        </div>
      );
    }

    if (activeTab === "password") {
      return (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <label className="w-full sm:w-48 font-manrope font-bold text-[20px] text-black">
              Password Lama
            </label>
            <input
              type="password"
              placeholder="Input your password..."
              className="w-full sm:flex-1 border border-primary-50 rounded-lg px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <label className="w-full sm:w-48 font-manrope font-bold text-[20px] text-black">
              Password Baru
            </label>
            <input
              type="password"
              placeholder="Input your password..."
              className="w-full sm:flex-1 border border-primary-50 rounded-lg px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <label className="w-full sm:w-48 font-manrope font-bold text-[20px] text-black">
              Konfirmasi Password
            </label>
            <input
              type="password"
              placeholder="Input your password..."
              className="w-full sm:flex-1 border border-primary-50 rounded-lg px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
          <button className="self-end bg-primary-50 text-white px-6 py-3 text-sm sm:text-lg rounded-lg hover:bg-primary-70 transition font-manrope">
            Save Change
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full px-4 sm:px-6 py-12">
      <h1 className="font-manrope font-bold text-[32px] mb-6 text-black">Settings</h1>
      <p className="text-gray-600 mb-10 text-[18px] font-manrope text-black">
        You can update your profile photo and personal details here.
      </p>

      <div className="flex flex-col sm:flex-row gap-16">
        {/* Content */}
        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-8 items-start">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full"
            />
          </div>
          {/* Form */}
          <div className="w-full sm:ml-6">{renderForm()}</div>
        </div>

        {/* Navigation */}
        <div className="w-auto sm:w-auto flex flex-col items-end gap-4">
          <button
            onClick={() => setActiveTab("info")}
            className={`text-lg sm:text-xl font-manrope ${
              activeTab === "info"
                ? "text-primary-50 font-semibold"
                : "text-black"
            }`}
          >
            Info Personal
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`text-lg sm:text-xl font-manrope ${
              activeTab === "password"
                ? "text-primary-50 font-semibold"
                : "text-black"
            }`}
          >
            Password
          </button>
          <button className="text-lg sm:text-xl text-red-600 font-manrope">Hapus Akun</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
