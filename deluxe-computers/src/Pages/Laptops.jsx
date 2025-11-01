import { useState } from "react";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Laptops() {
  const { addToCart } = useCart();

  const products = [
    {
      name: "Dell Inspiron 15",
      img: "https://via.placeholder.com/200",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "Core i7", price: 75000 },
        { ram: "16GB", storage: "512GB SSD", generation: "Core i5", price: 90000 },
      ],
    },
    {
      name: "Dell Inspiron 15",
      img: "https://via.placeholder.com/200",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "Core i7", price: 75000 },
        { ram: "16GB", storage: "512GB SSD", generation: "Core i5", price: 90000 },
      ],
    },

    {
      name: "Dell Inspiron 15",
      img: "https://via.placeholder.com/200",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "Core i7", price: 75000 },
        { ram: "16GB", storage: "512GB SSD", generation: "Core i5", price: 90000 },
      ],
    },

    {
      name: "Dell Inspiron 15",
      img: "https://via.placeholder.com/200",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "Core i7", price: 75000 },
        { ram: "16GB", storage: "512GB SSD", generation: "Core i5", price: 90000 },
      ],
    },

    {
      name: "HP Pavilion 14",
      img: "https://via.placeholder.com/200",
      variants: [
        { ram: "8GB", storage: "512GB SSD", generation: "Core i5", price: 82000 },
        { ram: "16GB", storage: "1TB SSD", generation: "Core i7", price: 100000 },
      ],
    },
    {
      name: "MacBook Air",
      img: "https://via.placeholder.com/200",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "M1", price: 150000 },
        { ram: "16GB", storage: "512GB SSD", generation: "M2", price: 180000 },
      ],
    },
  
  ];

  const [selectedVariants] = useState(products.map(() => 0));
  const [ramFilter, setRamFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [generationFilter, setGenerationFilter] = useState("");

  const filteredProducts = products.filter((product, i) => {
    const variant = product.variants[selectedVariants[i]];
    const ramMatch = ramFilter ? variant.ram === ramFilter : true;
    const storageMatch = storageFilter ? variant.storage === storageFilter : true;
    const generationMatch = generationFilter ? variant.generation === generationFilter : true;
    return ramMatch && storageMatch && generationMatch;
  });

  return (
    <div className="pt-28 p-6 md:p-10 flex flex-col md:flex-row gap-8">

      <Link to="/products" className="absolute top-24 left-6 text-white text-2xl">
        <FaArrowLeft />
      </Link>
      <div className="w-full md:w-1/5 p-6 border-r border-gray-600 space-y-6">
        <h2 className="text-xl font-semibold border-b text-center">Filters</h2>

        <div>
          <label className="block mb-1 font-semibold">RAM</label>
          <select
            className="w-full p-2 rounded border bg-black text-white"
            value={ramFilter}
            onChange={(e) => setRamFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="8GB">8GB</option>
            <option value="16GB">16GB</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Storage</label>
          <select
            className="w-full p-2 rounded border bg-black text-white"
            value={storageFilter}
            onChange={(e) => setStorageFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="256GB SSD">256GB SSD</option>
            <option value="512GB SSD">512GB SSD</option>
            <option value="1TB SSD">1TB SSD</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Generation</label>
          <select
            className="w-full p-2 rounded border bg-black text-white"
            value={generationFilter}
            onChange={(e) => setGenerationFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Core i5">Core i5</option>
            <option value="Core i7">Core i7</option>
            <option value="M1">M1</option>
            <option value="M2">M2</option>
          </select>
        </div>

        <button
          onClick={() => {
            setRamFilter("");
            setStorageFilter("");
            setGenerationFilter("");
          }}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Clear Filters
        </button>

        <Link
          to="/cart"
          className="block mt-6 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          View Cart
        </Link>
      </div>

      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => {
            const variant = product.variants[selectedVariants[i]];

            return (
              <div key={i} className="bg-indigo-500 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition mt-8">
                <img src={product.img} alt={product.name} className="rounded-lg mb-4 mx-auto" />
                <h3 className="font-bold text-lg text-white">{product.name}</h3>
                <p className="text-indigo-200 text-sm mt-2">
                  {variant.ram} / {variant.storage} / {variant.generation}
                </p>

                <p className="text-white font-bold text-lg mt-2">
                  Ksh {variant.price.toLocaleString()}
                </p>

                <button
                  onClick={() => addToCart({ ...product, ...variant })}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition w-full mt-4"
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        ) : (
          <p className="col-span-3 text-center text-gray-300 mt-10">
            No products match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
