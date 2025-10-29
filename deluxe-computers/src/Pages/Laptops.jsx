import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function Laptops() {
  const { addToCart } = useCart();

  const products = [
    { name: "Dell Inspiron", price: 75000, img: "https://via.placeholder.com/200" },
    { name: "HP Pavilion", price: 82000, img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: 150000, img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-12 grid md:grid-cols-3 gap-8">
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
  );
}
