import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function Keyboards() {
  const { addToCart } = useCart();

  const products = [
    { name: "Keyboard2", price: 1200, img: "https://via.placeholder.com/200" },
    { name: "Keyboard3", price: 1700, img: "https://via.placeholder.com/200" },
    { name: "Keyboard4", price: 2500, img: "https://via.placeholder.com/200" },
    { name: "Keyboard5", price: 3200, img: "https://via.placeholder.com/200" },
    { name: "Keyboard6", price: 3000, img: "https://via.placeholder.com/200" },
    { name: "Keyboard7", price: 4000, img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-12 flex gap-10">
      
      <div className="w-1/5 p-6 border-r border-gray-400 space-y-4">
        <h2 className="text-xl font-semibold border-b text-center">Go to</h2>
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
      </div>

      <div className="w-4/5 grid md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div key={i} className="bg-indigo-500 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="rounded-lg mb-4 mx-auto" />
            <h3 className="font-bold text-lg text-white">{p.name}</h3>
            <p className="text-indigo-200 mb-3">Ksh {p.price.toLocaleString()}</p>
            
            <button
              onClick={() => addToCart(p)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}

        <div className="col-span-3 text-center mt-8">
          <Link
            to="/cart"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            View Cart
          </Link>
        </div>
      </div>

    </div>
  );
}
