import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { cart } = useCart();

  return (
    <header>
      <nav className="flex justify-between items-center p-4 bg-indigo-800 shadow-lg fixed top-0 w-full z-50">
        <ul className="flex gap-6 flex-wrap">
          <li><Link to="/" className="hover:text-indigo-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-indigo-300">Products</Link></li>
          <li><Link to="/about" className="hover:text-indigo-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-300">Contact</Link></li>
        </ul>
        <Link to="/cart" className="relative text-white">
          <FaShoppingCart className="text-3xl hover:text-indigo-300" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
      <div className="h-20 md:h-16" />
    </header>
  );
}

