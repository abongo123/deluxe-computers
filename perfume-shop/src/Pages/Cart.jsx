import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white/5 p-4 rounded"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-300">
                  ${item.price} • {item.size}ml
                </p>
              </div>

              <input
                type="number"
                min="1"
                value={item.cartQty}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-16 p-1 text-black rounded"
              />

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm underline text-red-400"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-xl font-bold mt-6">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  );
}

