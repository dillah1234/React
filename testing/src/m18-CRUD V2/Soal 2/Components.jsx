import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Home Component
const Home = () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
  }
  const navigate = useNavigate();

  const handleClear = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products.length === 0) {
      return alert("No products to clear");
    }

    window.confirm("Are you sure you want to clear all products?") &&
      localStorage.removeItem("products");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Product Manager</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/create")}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
        >
          New Product
        </button>
        <button
          onClick={() => navigate("/list")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Product List
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
        >
          Clear All Products
        </button>
      </div>
    </div>
  );
};

// CreateProduct Component
const CreateProduct = () => {
//   const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem("products"));

    const newProduct = {
      id: products.length + 1,
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));
    window.confirm(
      "Product " +
        productName +
        " created successfully! Do you want to go to the list?"
    ) && navigate("/list");
    setProductName("");
    setProductPrice("");
    setProductDescription("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
          />
          <input
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
          />
          <div className="flex justify-between items-center space-x-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Create Product
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full text-gray-600 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-200 transform hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ProductDetail Component
const ProductDetail = ({ id, name, price, description }) => {
  const navigate = useNavigate();

  const handleUpdate = () => navigate(`/Update/${id}`);
  const handleDelete = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    products.splice(id - 1, 1);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload();
  };

  const CurrencyFormatter = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{CurrencyFormatter(price)}</td>
      <td className="px-4 py-2">{description}</td>
      <td className="px-4 py-2">
        <button
          onClick={handleUpdate}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105 mr-2"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

// ProductList Component
const ProductList = () => {
//   const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("products"));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 mb-4"
          onClick={() => navigate("/list")}
        >
          Back to Home
        </button>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Product List</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-gray-700 border-b">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-red-500 py-4">
                  No products found
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <ProductDetail key={product.id} {...product} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Export
export { CreateProduct, ProductList };
export default Home;
