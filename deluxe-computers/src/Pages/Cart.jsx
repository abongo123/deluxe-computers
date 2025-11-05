import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 mt-24">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.key} className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded shadow">
              <div>
                <p className="font-semibold text-black">{item.name}</p>
                <p className="text-black">Ksh {item.price.toLocaleString()}</p>
                <p className="text-black">Qty: {item.quantity}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.key, -1)}
                  className="px-2 py-1 bg-black rounded">-
                </button>
                <button
                  onClick={() => updateQuantity(item.key, 1)}
                  className="px-2 py-1 bg-black rounded">+
                </button>
                <button
                  onClick={() => removeFromCart(item.key)}
                  className="px-2 py-1 bg-red-500 text-white rounded">Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold mb-3">
              Total: Ksh {total.toLocaleString()}
            </h2>

            <Link
              to="/checkout"
              className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700">
            Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
