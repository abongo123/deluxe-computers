import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white/5 rounded-lg overflow-hidden shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-300">{product.size}ml</p>
        <p className="font-bold mt-1">Kshs {product.price.toLocaleString("en-KE")}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full border border-white py-2 text-sm hover:bg-white hover:text-black transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

