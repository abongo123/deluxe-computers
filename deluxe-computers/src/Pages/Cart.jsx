import { useCart } from "../context/cartcontext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-8 mt-24"> {/* mt-24 to avoid header overlap */}
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.key} className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded shadow">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">Ksh {item.price.toLocaleString()}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
              {item.ram && <p className="text-gray-500">RAM: {item.ram}</p>}
              {item.storage && <p className="text-gray-500">Storage: {item.storage}</p>}
              {item.generation && <p className="text-gray-500">Gen: {item.generation}</p>}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.key, -1)}
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.key, 1)}
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.key)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
