// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// // CurrencyFormatter component
// const CurrencyFormatter = ({ number }) => {
//   const formattedNumber = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format(number);

//   return <span>{formattedNumber}</span>;
// };

// // Product component
// const Product = ({ product, onChange }) => {
//   const [count, setCount] = useState(0);
//   const totalPrice = count * product.price;

//   const handleTambah = () => {
//     const newCount = count + 1;
//     setCount(newCount);
//     onChange(product.id, newCount, totalPrice + product.price);
//   };

//   const handleKurang = () => {
//     const newCount = count ? count - 1 : 0;
//     setCount(newCount);
//     onChange(product.id, newCount, totalPrice - product.price);
//   };

//   const handleClick = () => {
//     window.open(`/product/${product.id}`, '_self');
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 transition-all hover:scale-105 hover:shadow-xl">
//       <img
//         src={product.image}
//         className="w-full h-auto rounded-lg mb-4 cursor-pointer transition-all hover:scale-105"
//         alt=""
//         onClick={handleClick}
//       />
//       <div className="text-center">
//         <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
//         <p className="text-gray-600">{<CurrencyFormatter number={product.price} />}</p>
//         <p className="text-gray-500 text-sm mt-2">{product.description}</p>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <div className="flex space-x-2">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             onClick={handleTambah}
//           >
//             Tambah
//           </button>
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//             onClick={handleKurang}
//           >
//             Kurang
//           </button>
//         </div>
//         <div className="text-xl font-bold">{count}</div>
//       </div>

//       {count > 0 && (
//         <p className="mt-4 text-lg font-semibold text-gray-800">
//           Total Harga: <CurrencyFormatter number={totalPrice} />
//         </p>
//       )}
//     </div>
//   );
// };

// // Summary component
// const Summary = ({ summary }) => {
//   const totalHargaKeseluruhan = summary.reduce(
//     (total, product) => total + product.totalPrice,
//     0
//   );

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 mt-6 transition-all hover:scale-105 hover:shadow-xl">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ringkasan Pembelian</h2>
//       <ul className="space-y-2">
//         {summary
//           .filter((product) => product.quantity > 0)
//           .map((product) => (
//             <li key={product.id} className="text-lg text-gray-700">
//               {product.title} x {product.quantity} ={' '}
//               <CurrencyFormatter number={product.totalPrice} />
//             </li>
//           ))}
//       </ul>
//       <h3 className="mt-4 text-xl font-bold text-gray-900">
//         Total Keseluruhan:{' '}
//         <CurrencyFormatter number={totalHargaKeseluruhan} />
//       </h3>
//     </div>
//   );
// };

// // HeaderHome component
// const HeaderHome = () => {
//   const [profile, setProfile] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decode = jwtDecode(token);
//       axios
//         .get(`https://api.escuelajs.co/api/v1/users/${decode.sub}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setProfile(response.data);
//         });
//     }
//   }, []);

//   if (!profile.name) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex justify-between items-center bg-blue-500 text-white p-4">
//       <h1 className="text-xl font-bold">Product List</h1>
//       <div className="flex items-center">
//         Welcome, {profile.name}
//         <img
//           src={profile.avatar}
//           alt="User Logo"
//           className="w-10 h-10 rounded-full ml-2 cursor-pointer"
//           onClick={() => navigate('/profile')}
//         />
//         <button
//           className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
//           onClick={LogOut}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// // ProfileDetail component
// const ProfileDetail = () => {
//   const [profile, setProfile] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decode = jwtDecode(token);
//       axios
//         .get(`https://api.escuelajs.co/api/v1/users/${decode.sub}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setProfile(response.data);
//         });
//     }
//   }, []);

//   if (!profile.name) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="outer-profile flex justify-center items-center h-screen bg-gray-100">
//       <div className="inner-profile bg-white rounded-lg p-6 shadow-lg w-full sm:w-96">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Detail</h2>
//         <img
//           src={profile.avatar}
//           alt="Avatar"
//           className="w-20 h-20 rounded-full mx-auto mb-4"
//         />
//         <p className="text-lg font-medium text-gray-700">Name: {profile.name}</p>
//         <p className="text-lg font-medium text-gray-700">Email: {profile.email}</p>
//         <p className="text-lg font-medium text-gray-700">Role: {profile.role}</p>
//         <button
//           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//           onClick={() => navigate('/')}
//         >
//           Go Back
//         </button>
//       </div>
//     </div>
//   );
// };

// // ProductList component
// const ProductList = () => {
//   const navigate = useNavigate();
//   const [summary, setSummary] = useState([]);
//   const [products, setProducts] = useState([]);

//   const handleNavigate = () => {
//     navigate('/login');
//   };

//   localStorage.token ? null : handleNavigate();

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products').then((response) => {
//       setProducts(response.data);
//     });
//   }, []);

//   const handleProductChange = (id, quantity, totalPrice) => {
//     setSummary((prevSummary) => {
//       const productIndex = prevSummary.findIndex(
//         (product) => product.id === id
//       );
//       if (productIndex === -1 && quantity > 0) {
//         return [
//           ...prevSummary,
//           {
//             id,
//             title: products.find((p) => p.id === id).title,
//             quantity,
//             totalPrice,
//           },
//         ];
//       } else if (quantity > 0) {
//         const newSummary = [...prevSummary];
//         newSummary[productIndex] = {
//           ...newSummary[productIndex],
//           quantity,
//           totalPrice,
//         };
//         return newSummary;
//       } else {
//         return prevSummary.filter((product) => product.id !== id);
//       }
//     });
//   };

//   return (
//     <div>
//       <HeaderHome />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {products.map((product) => (
//           <Product key={product.id} product={product} onChange={handleProductChange} />
//         ))}
//       </div>
//       <Summary summary={summary} />
//     </div>
//   );
// };

// // LogOut function
// const LogOut = () => {
//   localStorage.removeItem('token');
//   window.location.reload();
// };

// // ProductDetail component
// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
//       setProduct(response.data);
//     });
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="product-detail">
//       <div className="product-detail-wrapper flex items-center p-4">
//         <img src={product.image} alt={product.title} className="w-48 h-48 rounded-lg mr-6" />
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
//           <CurrencyFormatter number={product.price} />
//           <p className="text-gray-600 mt-4">{product.description}</p>
//         </div>
//       </div>
//       <Link to={"/"} className="back-button bg-gray-300 text-white px-4 py-2 rounded-md mt-6 inline-block">
//         Back
//       </Link>
//     </div>
//   );
// }

// export { ProductList, ProductDetail, ProfileDetail };
