import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function Printers() {
  const { addToCart } = useCart();

  const products = [
    { name: "Printer2", price: 1200, img: "https://via.placeholder.com/200" },
    { name: "Printer3", price: 1700, img: "https://via.placeholder.com/200" },
    { name: "Printer4", price: 2500, img: "https://via.placeholder.com/200" },
    { name: "Printer5", price: 3200, img: "https://via.placeholder.com/200" },
    { name: "Printer6", price: 3000, img: "https://via.placeholder.com/200" },
    { name: "Printer7", price: 4000, img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-6 md:p-12 pt-24 flex flex-col md:flex-row gap-6 md:gap-10">

      {/* Sidebar */}
      <div className="w-full md:w-1/5 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-400 space-y-4">
        <h2 className="text-xl font-semibold border-b text-center pb-2">Go to</h2>
        <ul className="space-y-2">
          <li><Link to="/products" className="hover:underline">All Products</Link></li>
          <li><Link to="/laptops" className="hover:underline">Laptops</Link></li>
          <li><Link to="/desktops" className="hover:underline">Desktops</Link></li>
          <li><Link to="/accessories" className="hover:underline">Accessories</Link></li>
          <li><Link to="/printers" className="hover:underline">Printers</Link></li>
          <li><Link to="/toners" className="hover:underline">Toners</Link></li>
          <li><Link to="/mice" className="hover:underline">Mice</Link></li>
          <li><Link to="/keyboards" className="hover:underline">Keyboards</Link></li>
          <li><Link to="/repairs" className="hover:underline">Repairs</Link></li>
        </ul>

        {/* View Cart Button */}
        <Link
          to="/cart"
          className="mt-6 w-full inline-block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          View Cart
        </Link>
      </div>

      {/* Products Grid */}
      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-indigo-500 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition"
          >
            <img src={p.img} alt={p.name} className="rounded-lg mb-4 mx-auto" />
            <h3 className="font-bold text-lg text-white">{p.name}</h3>
            <p className="text-indigo-200 mb-3">Ksh {p.price.toLocaleString()}</p>

            <button
              onClick={() => addToCart(p)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
