import { createContext, useContext, useState, useEffect } from "react";

// Create Cart Context
const CartContext = createContext();

// Key for localStorage
const STORAGE_KEY = "deluxe_cart_v1";

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // Generate a unique key for each product variant
  const generateKey = (product) => {
    return `${product.brand || ""}::${product.name}::${product.ram || ""}::${product.storage || ""}::${product.generation || ""}`;
  };

  // Add item to cart
  const addToCart = (product) => {
    const key = generateKey(product);
    const existing = cart.find((item) => item.key === key);

    if (existing) {
      setCart((prev) =>
        prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, key, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  // Update quantity (+/-)
  const updateQuantity = (key, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.key === key
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Named export for hooks
export const useCart = () => useContext(CartContext);

// Default export
export default CartContext;
