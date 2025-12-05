import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom,#f7c8b3,#FFFFFF,#F2F2F2)",
      }}
      className="px-6 py-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Luxury Fragrances
        </h1>

        <p className="text-sm md:text-base mb-6 text-gray-600">
          Premium perfumes crafted for elegance, confidence and long-lasting impression.
        </p>

        <Link to="/shop">
          <button className="bg-[#828c51] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#6f7845] hover:text-white transition">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Product preview cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="h-56 bg-white rounded-lg border border-[#F2F2F2] shadow-md"></div>
        <div className="h-56 bg-white rounded-lg border border-[#F2F2F2] shadow-md"></div>
        <div className="h-56 bg-white rounded-lg border border-[#F2F2F2] shadow-md"></div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Long Lasting</h3>
            <p className="text-sm text-gray-600">
              Our fragrances last all day with rich premium oils.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Authentic</h3>
            <p className="text-sm text-gray-600">
              100% original designer and niche fragrances.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Affordable Luxury</h3>
            <p className="text-sm text-gray-600">
              Premium quality at competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
