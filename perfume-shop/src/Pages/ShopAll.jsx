import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";

export default function ShopAll() {
  const categories = ["Floral", "Woody", "Fresh", "Citrus"];

  const maxPrice = products.length
    ? Math.max(...products.map((p) => p.price))
    : 0;

  const [filters, setFilters] = useState({
    type: "All",
    price: maxPrice,
    quantity: 0,
    size: "All",
  });

  const filteredProducts = products.filter((product) => {
    const matchType =
      filters.type === "All" || product.type === filters.type;
    const matchPrice = product.price <= filters.price;
    const matchQty = product.quantity >= filters.quantity;
    const matchSize =
      filters.size === "All" || product.size === Number(filters.size);

    return matchType && matchPrice && matchQty && matchSize;
  });

  function clearFilters() {
    setFilters({
      type: "All",
      price: maxPrice,
      quantity: 0,
      size: "All",
    });
  }

  return (
    <div
      className="flex min-h-screen pt-24"
      style={{
        background: "linear-gradient(to bottom,#f7c8b3,#FFFFFF,#F2F2F2)",
      }}
    >
      <SidebarFilters
        categories={categories}
        filters={filters}
        setFilters={setFilters}
        maxPrice={maxPrice}
      />

      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <Link to="/" className="underline mr-2">
              Home
            </Link>
            / <span className="ml-2">All Products</span>
          </div>

          <button
            onClick={clearFilters}
            className="border border-[#828c51] text-[#828c51] px-3 py-1 text-sm rounded-md hover:bg-[#828c51] hover:text-white transition"
          >
            Clear Filters
          </button>
        </div>

        <p className="text-sm mb-4 text-gray-600">
          Showing {filteredProducts.length} products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white border border-[#F2F2F2] shadow-md rounded-lg">
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products match your filters.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
