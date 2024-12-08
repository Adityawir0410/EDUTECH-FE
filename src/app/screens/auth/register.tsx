// "use client";

// import React, { useState } from "react";

// interface RegisterProps {
//   onGoToLogin: () => void;
// }

// const Register: React.FC<RegisterProps> = ({ onGoToLogin }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess(false);
  
//     try {
//       const response = await fetch(
//         "https://edutech-be.up.railway.app/auth/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ firstName, lastName, email, password }),
//         }
//       );
  
//       const data = await response.json();
//       console.log(data); // Logging respons server
  
//       if (response.ok) {
//         setSuccess(true);
//         alert("Registration successful! Please login.");
//         onGoToLogin();
//       } else {
//         setError(data.message || "Registration failed");
//       }
//     } catch (err) {
//       console.error(err); // Logging error
//       setError("An unexpected error occurred");
//     }
//   };
  

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create an Account</h2>
//         <p className="text-gray-600 mb-6">Get started now!</p>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="Your first name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Your last name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Your password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-4 w-full bg-gray-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
//           >
//             Register
//           </button>
//           <button
//             type="button"
//             onClick={onGoToLogin}
//             className="mt-2 w-full text-sm text-gray-700 underline"
//           >
//             Already have an account? Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
