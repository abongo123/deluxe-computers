import { useCart } from "../context/cartcontext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-8 mt-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <p>{item.name} x {item.quantity}</p>
            <div>
              <button
                onClick={() => updateQuantity(item.name, -1)}
                className="px-2 py-1 bg-gray-200 rounded mr-1"
              >-</button>
              <button
                onClick={() => updateQuantity(item.name, 1)}
                className="px-2 py-1 bg-gray-200 rounded mr-1"
              >+</button>
              <button
                onClick={() => removeFromCart(item.name)}
                className="px-2 py-1 bg-red-500 text-white rounded"
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
