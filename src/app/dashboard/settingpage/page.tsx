"use client";

import React, { useState } from "react";

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");

  // State for personal info
  const [userInfo, setUserInfo] = useState({
    name: "Aditya Wirayudha",
    email: "adit123man@gmail.com",
    username: "Adit123",
  });

  // State for password change
  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State for delete account confirmation
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Handler for personal info changes
  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Handler for password changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordInfo((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };

  // Save personal info
  const savePersonalInfo = () => {
    console.log("Saved Personal Info:", userInfo);
    alert("Informasi pribadi berhasil disimpan!");
  };

  // Save password
  const savePassword = () => {
    if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }
    console.log("Attempting to change password");
    alert("Password berhasil diubah!");
    setPasswordInfo({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // Delete account logic
  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDeleteAccount = () => {
    console.log("Deleting account...");
    alert("Akun berhasil dihapus.");
    setShowDeleteConfirm(false);
  };

  const cancelDeleteAccount = () => {
    setShowDeleteConfirm(false);
  };

  const renderForm = () => {
    if (activeTab === "info") {
      return (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <label className="w-full sm:w-48 font-manrope font-bold text-2xl sm:text-[24px] text-black">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInfoChange}
              className="w-full sm:flex-1 border border-primary-50 rounded-xl px-8 py-4 text-base sm:text-xl text-black focus:outline-none focus:ring-3 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <label className="w-full sm:w-48 font-manrope font-bold text-2xl sm:text-[24px] text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInfoChange}
              className="w-full sm:flex-1 border border-primary-50 rounded-xl px-8 py-4 text-base sm:text-xl text-black focus:outline-none focus:ring-3 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <label className="w-full sm:w-48 font-manrope font-bold text-2xl sm:text-[24px] text-black">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInfoChange}
              className="w-full sm:flex-1 border border-primary-50 rounded-xl px-8 py-4 text-base sm:text-xl text-black focus:outline-none focus:ring-3 focus:ring-primary-50"
            />
          </div>
          <button
            onClick={savePersonalInfo}
            className="self-end bg-primary-50 text-white px-8 py-4 text-base sm:text-xl rounded-xl hover:bg-primary-70 transition font-manrope"
          >
            Simpan Perubahan
          </button>
        </div>
      );
    }

    if (activeTab === "password") {
      return (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <label className="w-full sm:w-56 font-manrope font-bold text-2xl sm:text-[24px] text-black">
              Password Lama
            </label>
            <input
              type="password"
              name="oldPassword"
              value={passwordInfo.oldPassword}
              onChange={handlePasswordChange}
              placeholder="Masukkan password lama..."
              className="w-full sm:flex-1 border border-primary-50 rounded-xl px-8 py-4 text-base sm:text-xl text-black focus:outline-none focus:ring-3 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <label className="w-full sm:w-56 font-manrope font-bold text-2xl sm:text-[24px] text-black">
              Password Baru
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwordInfo.newPassword}
              onChange={handlePasswordChange}
              placeholder="Masukkan password baru..."
              className="w-full sm:flex-1 border border-primary-50 rounded-xl px-8 py-4 text-base sm:text-xl text-black focus:outline-none focus:ring-3 focus:ring-primary-50"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <label className="w-full sm:w-56 font-manrope font-bold text-2xl sm:text-[24px] text-black">
              Konfirmasi Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordInfo.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Konfirmasi password baru..."
              className="w-full sm:flex-1 border border-primary-50 rounded-xl px-8 py-4 text-base sm:text-xl text-black focus:outline-none focus:ring-3 focus:ring-primary-50"
            />
          </div>
          <button
            onClick={savePassword}
            className="self-end bg-primary-50 text-white px-8 py-4 text-base sm:text-xl rounded-xl hover:bg-primary-70 transition font-manrope"
          >
            Ubah Password
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full px-6 sm:px-10 py-16">
      <h1 className="font-manrope font-bold text-4xl sm:text-[40px] mb-8 text-black">Pengaturan</h1>
      <p className="text-gray-600 mb-12 text-xl sm:text-[22px] font-manrope text-black">
        Anda dapat memperbarui foto profil dan detail pribadi Anda di sini.
      </p>

      <div className="flex flex-col sm:flex-row gap-20">
        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-12 items-start">
          <div className="flex-shrink-0">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full"
            />
          </div>
          <div className="w-full sm:ml-10">{renderForm()}</div>
        </div>
        <div className="w-auto flex flex-col items-end gap-6">
          <button
            onClick={() => setActiveTab("info")}
            className={`text-xl sm:text-2xl font-manrope ${
              activeTab === "info"
                ? "text-primary-50 font-semibold"
                : "text-black"
            }`}
          >
            Info Pribadi
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`text-xl sm:text-2xl font-manrope ${
              activeTab === "password"
                ? "text-primary-50 font-semibold"
                : "text-black"
            }`}
          >
            Password
          </button>
          <button
            onClick={handleDeleteAccount}
            className="text-xl sm:text-2xl text-red-600 font-manrope"
          >
            Hapus Akun
          </button>
        </div>
      </div>

      {/* Delete Account Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-xl text-center w-[567px] h-[338px]">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* SVG (dengan elemen img untuk file SVG eksternal) */}
            <img
              src="/images/delete.svg"
              alt="Delete Icon"
              className="h-16 w-16"
            />
      
            {/* Title */}
            <h2 className="font-manrope font-bold text-[24px] text-black">
              Apa kamu yakin ingin menghapus akun?
            </h2>
      
            {/* Description */}
            <p className="text-[18px] text-gray-600 font-manrope">
              Jika ingin membatalkan tekan kembali
            </p>
          </div>
      
          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={cancelDeleteAccount}
              className="bg-gray-200 text-black px-8 py-3 text-base sm:text-xl rounded-xl hover:bg-gray-300 transition font-manrope"
            >
              Kembali
            </button>
            <button
              onClick={confirmDeleteAccount}
              className="bg-primary-50 text-white px-8 py-3 text-base sm:text-xl rounded-xl hover:bg-primary-70 transition font-manrope"
            >
              Hapus Akun
            </button>
          </div>
        </div>
      </div>
      
      
      
      )}
    </div>
  );
};

export default SettingsPage;
