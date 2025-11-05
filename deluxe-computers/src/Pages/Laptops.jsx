// src/Pages/Laptops.jsx
import { useState, useMemo } from "react";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Laptops() {
  const { addToCart } = useCart();

  const products = [
    {
      brand: "Dell",
      name: "Dell Inspiron 15",
      img: "https://via.placeholder.com/400x300?text=Dell+Inspiron+15",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "Core i5", price: 75000 },
        { ram: "16GB", storage: "512GB SSD", generation: "Core i7", price: 90000 },
      ],
    },
    {
      brand: "HP",
      name: "HP Pavilion 14",
      img: "https://via.placeholder.com/400x300?text=HP+Pavilion+14",
      variants: [
        { ram: "8GB", storage: "512GB SSD", generation: "Core i5", price: 82000 },
        { ram: "16GB", storage: "1TB SSD", generation: "Core i7", price: 100000 },
      ],
    },
    {
      brand: "Apple",
      name: "MacBook Air",
      img: "https://via.placeholder.com/400x300?text=MacBook+Air",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "M1", price: 160000 },
        { ram: "16GB", storage: "512GB SSD", generation: "M2", price: 180000 },
      ],
    },
    {
      brand: "HP",
      name: "HP Elitebook 840",
      img: "https://via.placeholder.com/400x300?text=HP+Elitebook+840",
      variants: [
        { ram: "8GB", storage: "256GB SSD", generation: "Core i5", price: 140000 },
        { ram: "16GB", storage: "512GB SSD", generation: "Core i7", price: 170000 },
      ],
    },
  ];

  const [selectedVariants, setSelectedVariants] = useState(products.map(() => 0));
  const [ramFilter, setRamFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [generationFilter, setGenerationFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleVariantChange = (productIndex, variantIndex) => {
    const copy = [...selectedVariants];
    copy[productIndex] = variantIndex;
    setSelectedVariants(copy);
  };
  const availableRams = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.variants.forEach((v) => set.add(v.ram)));
    return [...set];
  }, [products]);

  const availableStorages = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.variants.forEach((v) => set.add(v.storage)));
    return [...set];
  }, [products]);

  const availableGenerations = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.variants.forEach((v) => set.add(v.generation)));
    return [...set];
  }, [products]);

  const availableBrands = useMemo(() => {
    const set = new Set(products.map((p) => p.brand));
    return [...set];
  }, [products]);
  const filteredProducts = products.filter((product, idx) => {
    const variant = product.variants[selectedVariants[idx]] || product.variants[0];

    if (ramFilter && variant.ram !== ramFilter) return false;
    if (storageFilter && variant.storage !== storageFilter) return false;
    if (generationFilter && variant.generation !== generationFilter) return false;
    if (brandFilter && product.brand !== brandFilter) return false;

    const price = variant.price;
    if (minPrice && price < Number(minPrice)) return false;
    if (maxPrice && price > Number(maxPrice)) return false;

    return true;
  });

  return (
    <div className="pt-24 min-h-scree">
      <div className="max-w-6xl mx-auto p-6 md:p-10 flex gap-8 flex-col md:flex-row">
        <div className="w-full md:w-1/5">
          <Link to="/products" className="inline-flex items-center gap-2 mb-4">
            <FaArrowLeft /> <span>Back to Products</span>
          </Link>
          <div className="p-4 shadow-md sticky top-28">
            <h3 className="text-lg font-semibold mb-3">Filters</h3>

            <label className="block text-sm font-medium mb-1">Brand</label>
            <select
              className="w-full p-2 rounded border mb-3 bg-black"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="">All</option>
              {availableBrands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            <label className="block text-sm font-medium mb-1">RAM</label>
            <select
              className="w-full p-2 rounded border mb-3 bg-black"
              value={ramFilter}
              onChange={(e) => setRamFilter(e.target.value)}
            >
              <option value="">All</option>
              {availableRams.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>

            <label className="block text-sm font-medium mb-1">Storage</label>
            <select
              className="w-full p-2 rounded border mb-3 bg-black"
              value={storageFilter}
              onChange={(e) => setStorageFilter(e.target.value)}
            >
              <option value="">All</option>
              {availableStorages.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <label className="block text-sm font-medium mb-1">Generation</label>
            <select
              className="w-full p-2 rounded border mb-3 bg-black"
              value={generationFilter}
              onChange={(e) => setGenerationFilter(e.target.value)}
            >
              <option value="">All</option>
              {availableGenerations.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Min Price</label>
                <input
                  type="number"
                  className="w-full p-2 rounded border bg-black"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="e.g. 50000"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Max Price</label>
                <input
                  type="number"
                  className="w-full p-2 rounded border bg-black"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="e.g. 200000"
                />
              </div>
            </div>

            <button
              onClick={() => {
                setBrandFilter(""); setRamFilter(""); setStorageFilter(""); setGenerationFilter(""); setMinPrice(""); setMaxPrice("");
              }}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded"
            >
              Clear Filters
            </button>

            <Link to="/cart" className="mt-4 block w-full text-center bg-green-600 text-white py-2 rounded">
              View Cart
            </Link>
          </div>
        </div>
        <div className="w-full md:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.length ? (
              filteredProducts.map((product, idx) => {
                const variantIndex = selectedVariants[idx];
                const variant = product.variants[variantIndex] || product.variants[0];

                return (
                  <div key={`${product.name}-${idx}`} className="bg-indigo-600 rounded-2xl p-4 shadow-md flex flex-col">
                    <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-3" />

                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{product.brand} — {product.name}</h4>
                      <p className="text-sm mt-1">
                        <span className="font-medium">{variant.ram}</span> • {variant.storage} • {variant.generation}
                      </p>

                      <p className="font-bold text-xl mt-3">Ksh {variant.price.toLocaleString()}</p>
                    </div>
                    <select
                      className="mt-3 p-2 rounded border"
                      value={selectedVariants[idx]}
                      onChange={(e) => handleVariantChange(idx, Number(e.target.value))}>
                      {product.variants.map((v, vi) => (
                        <option key={vi} value={vi}>
                          {v.ram} / {v.storage} / {v.generation} — Ksh {v.price.toLocaleString()}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => addToCart({ brand: product.brand, name: product.name, img: product.img, ...variant })}
                      className="mt-3 bg-white text-indigo-600 py-2 rounded-lg w-full hover:underline">
                      Add to Cart
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="col-span-3 text-center">No products match the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
