import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-2 bg-indigo-800 shadow-lg flex-col fixed top-0 w-full">
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
