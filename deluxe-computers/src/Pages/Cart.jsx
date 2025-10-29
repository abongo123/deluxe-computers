import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-12 text-white">
      <h2 className="text-3xl font-bold mb-6 text-black">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-indigo-500 p-4 rounded-lg"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Ksh {item.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-3">
                   <button
                    onClick={() => updateQuantity(item.name, -1)}
                    className="bg-white text-black px-2 rounded">−
                    </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, +1)}
                    className="bg-white text-black px-2 rounded">+
                    </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.name)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-4">Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h3 className="text-xl font-bold text-black">
              Total: Ksh {total.toLocaleString()}
            </h3>
            <Link
              to="/payment"
              state={{ cart }}
              className="inline-block mt-4 bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Proceed to Payment
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
