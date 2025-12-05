import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cartQty: item.cartQty + 1 }
            : item
        );
      }

      return [...prev, { ...product, cartQty: 1 }];
    });
  }

  // ✅ Remove Item
  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // ✅ Update Quantity
  function updateQuantity(id, qty) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQty: qty } : item
      )
    );
  }

  // ✅ Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
