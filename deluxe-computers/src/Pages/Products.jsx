import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    { name: "Dell Inspiron", price: "Ksh 75,000", img: "https://via.placeholder.com/200" },
    { name: "HP Pavilion", price: "Ksh 82,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
    { name: "MacBook Air", price: "Ksh 150,000", img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="flex p-12 gap-8">
      <div className="w-1/8 p-6 rounded-none space-y-4 text-start border-r border-gray-400">
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
      <div className="w-3/4 grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <Link key={i} 
            to={`/payment/${encodeURIComponent(p.name)}`} 
            state={{ product: p }}>
          <div className="bg-indigo-500 rounded-xl p-5 text-center shadow-lg hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="rounded-lg mb-4 mx-auto" />
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-indigo-200">{p.price}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
