import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#828c51]">TEDBEL PERFUMES</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop All</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-4 text-sm">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setOpen(false)}>Shop All</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link to="/cart" onClick={() => setOpen(false)}>Cart</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
