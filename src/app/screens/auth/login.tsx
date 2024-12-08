// "use client";

// import React, { useState } from "react";

// interface LoginProps {
//   onLoginSuccess: () => void;
//   onRegister: () => void;
// }

// const Login: React.FC<LoginProps> = ({ onLoginSuccess, onRegister }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(
//         "https://edutech-be.up.railway.app/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         onLoginSuccess();
//         alert("Login successful");
//       } else {
//         setError(data.message || "Failed to login");
//       }
//     } catch (err) {
//       setError("An unexpected error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back!</h2>
//         <p className="text-gray-600 mb-6">Login your account</p>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <form onSubmit={handleLogin}>
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
//             disabled={loading}
//             className={`mt-4 w-full py-2 px-4 rounded-md shadow-sm text-white ${
//               loading ? "bg-gray-400" : "bg-gray-700 hover:bg-gray-800"
//             } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <button
//             type="button"
//             onClick={onRegister}
//             className="mt-2 w-full text-sm text-gray-700 underline"
//           >
//             Don't have an account? Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
