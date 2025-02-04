import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const products = JSON.parse(localStorage.getItem("products"));
    const target = products[id - 1];

    const [productName, setProductName] = useState(target.name);
    const [productPrice, setProductPrice] = useState(target.price);
    const [productDescription, setProductDescription] = useState(target.description);

    const handleSubmit = (e) => {
        alert("Product " + target.name + " updated successfully!");
        target.name = productName;
        target.price = productPrice;
        target.description = productDescription;
        products[id - 1] = target;
        localStorage.setItem("products", JSON.stringify(products));
        e.preventDefault();
        navigate("/list");
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update Product</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input 
                            type="text" 
                            placeholder="Product Name" 
                            value={productName} 
                            required 
                            onChange={(e) => setProductName(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <input 
                            type="number" 
                            placeholder="Product Price" 
                            value={productPrice} 
                            required 
                            onChange={(e) => setProductPrice(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Product Description" 
                            value={productDescription} 
                            required 
                            onChange={(e) => setProductDescription(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button 
                            type="submit" 
                            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
                        >
                            Update Product
                        </button>
                        <button 
                            type="button" 
                            onClick={() => navigate("/list")} 
                            className="w-full text-gray-600 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-200 transform hover:scale-105"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;
