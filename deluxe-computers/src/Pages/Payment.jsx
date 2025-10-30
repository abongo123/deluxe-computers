import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const { state } = useLocation();
  const cart = state?.cart || [];

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [types, setTypes] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.name]: "" }), {})
  );
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.name]: item.quantity }), {})
  );

  if (cart.length === 0) {
    return <p className="p-12 text-red-500">No products selected.</p>;
  }
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * quantities[item.name],
    0
  );

  const handleTypeChange = (name, value) => {
    setTypes({ ...types, [name]: value });
  };

  const handleQuantityChange = (name, change) => {
    setQuantities({ ...quantities, [name]: Math.max(1, quantities[name] + change) });
  };

  return (
    <div className="flex flex-col md:flex-row p-12 gap-8 bg-[#030108] min-h-screen text-white">

  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
      alt="Computer"
      className="rounded-2xl shadow-2xl w-full md:w-auto"
    />
  </div>
  <div className="w-full md:w-1/2 space-y-8">
    {cart.map((item) => (
      <div key={item.name} className="flex items-center gap-4 p-4 rounded-lg bg-indigo-900/40">
        <img src={item.img} alt={item.name} className="w-32 h-32 rounded-lg" />
        <div className="flex-1 space-y-2">
          <h3 className="font-bold">{item.name}</h3>
          <p>Ksh {item.price.toLocaleString()}</p>

          <div>
            <label className="block mb-1 font-semibold">Type:</label>
            <select
              value={types[item.name]}
              onChange={(e) => handleTypeChange(item.name, e.target.value)}
              className="p-2 rounded w-full text-black"
            >
              <option value="">Select Type</option>
              <option value="Standard">Standard</option>
              <option value="Pro">Pro</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.name, -1)}
              className="px-3 py-1 bg-black rounded border-2"
            >
              −
            </button>
            <span>{quantities[item.name]}</span>
            <button
              onClick={() => handleQuantityChange(item.name, +1)}
              className="px-3 py-1 bg-black rounded border-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    ))}
    <div>
      <label className="block mb-1 font-semibold">Phone Number:</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 rounded-md w-full text-black"
      />
    </div>
    <div>
      <label className="block mb-1 font-semibold">Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 rounded-md w-full text-black"
      />
    </div>

    <p className="text-xl font-bold mt-4">
      Total: Ksh {totalPrice.toLocaleString()}
    </p>

    <button className="bg-[#c1cffb] hover:bg-gray-400 p-3 w-full rounded-full font-bold text-black">
      Submit Payment
    </button>

  </div>

</div>

  );
}
