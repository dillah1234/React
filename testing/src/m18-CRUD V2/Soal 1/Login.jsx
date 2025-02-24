// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     axios
//       .post("https://api.escuelajs.co/api/v1/auth/login", {
//         email: email,
//         password: password,
//       })
//       .then((response) => {
//         localStorage.setItem("token", response.data.access_token);
//         localStorage.token ? navigate("/") : navigate("/login");
//       })
//       .catch((error) => {
//         alert(error.response.data);
//       });

//     setEmail("");
//     setPassword("");
//   };

//   const id = Math.floor(Math.random() * 30);
//   const [freeEmail, setFreeEmail] = useState("");
//   const [freePassword, setFreePassword] = useState("");

//   useEffect(() => {
//     axios
//       .get(`https://api.escuelajs.co/api/v1/users/${id}`)
//       .then((response) => {
//         setFreeEmail(response.data.email);
//         setFreePassword(response.data.password);
//       });
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-lg text-gray-600 mb-2">Username</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter your username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 bg-gray-50 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-lg text-gray-600 mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 bg-gray-50 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
//           >
//             Login
//           </button>
//         </form>
//         <a
//           onClick={() => navigate("/help")}
//           className="text-sm text-blue-500 mt-4 inline-block cursor-pointer hover:underline"
//         >
//           <b>Need help?</b>
//         </a>
//         <p className="text-sm text-gray-500 mt-4 text-center">
//           username: <span className="text-gray-700">{freeEmail}</span>, password: <span className="text-gray-700">{freePassword}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
