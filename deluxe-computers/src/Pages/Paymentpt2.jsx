import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");

  if (!product) return <p className="p-12 text-center text-red-500">No product selected!</p>;

  const totalPrice = parseInt(product.price.replace(/[^\d]/g, "")) * quantity;

  return (
    <div className="flex flex-col md:flex-row p-12 gap-12 bg-[#030108] min-h-screen text-white">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={product.img} alt={product.name} className="rounded-2xl shadow-lg w-80" />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-lg">Price: {product.price}</p>

        <div>
          <label className="block mb-1 font-semibold">Choose Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-3 rounded-md w-full text-black"
          >
            <option value="">Select Type</option>
            <option value="New">New</option>
            <option value="Refurbished">Refurbished</option>
          </select>
        </div>

        <div className="flex items-center gap-4 rounded-sm p-4">
          <label className="font-semibold">Quantity:</label>
          <div className="border-2 border-gray-300">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className=" px-3 py-1 rounded-md"
          >−</button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className=" px-3 py-1 rounded-md"
          >+</button>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="p-3 rounded-md w-full text-black"
          />
        </div>

        <p className="text-xl font-bold mt-4">Total: Ksh {totalPrice.toLocaleString()}</p>
        <button className="bg-[#c1cffb] hover:bg-gray-400 p-3 w-full rounded-full font-bold mt-4 text-black">
          Submit Order
        </button>
      </div>
    </div>
  );
}
