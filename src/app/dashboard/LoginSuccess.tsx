// "use client";

// import React, { useState } from "react";
// import Headerdua from "@/app/dashboard/navbar/headerdashboard";
// import ClassesPage from "@/app/dashboard/classes/page";

// const LoginSuccess: React.FC = () => {
//   const [activePage, setActivePage] = useState("dashboard"); // State halaman aktif

//   // Fungsi untuk mengganti halaman
//   const handleMenuClick = (page: string) => {
//     setActivePage(page);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Navbar */}
//       <Headerdua activePage={activePage} onMenuClick={handleMenuClick} />

//       {/* Konten */}
//       <div className="pt-20 sm:pt-24">
//         {activePage === "dashboard" && (
//           <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
//           </div>
//         )}
//         {activePage === "classes" && <ClassesPage />}
//       </div>
//     </div>
//   );
// };

// export default LoginSuccess;
