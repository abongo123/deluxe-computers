import { useState } from "react";
import { useCart } from "../context/cartcontext";

export default function Checkout() {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (deliveryType === "delivery" && !address.trim()) {
      alert("Please enter your delivery address");
      return;
    }

    alert(`Order confirmed! Thank you ${name}.`);
  };

  return (
    <div className="p-8 mt-24 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <label className="font-semibold">Your Name</label>
      <input
        type="text"
        className="w-full border p-2 rounded mb-4"
        placeholder="Enter full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="font-semibold">Delivery Option</label>
      <div className="flex gap-4 mb-4">
        <label>
          <input
            type="radio"
            name="delivery"
            value="pickup"
            checked={deliveryType === "pickup"}
            onChange={() => setDeliveryType("pickup")}
          />{" "}
          Pick-up
        </label>

        <label>
          <input
            type="radio"
            name="delivery"
            value="delivery"
            checked={deliveryType === "delivery"}
            onChange={() => setDeliveryType("delivery")}
          />{" "}
          Delivery
        </label>
      </div>

      {deliveryType === "delivery" && (
        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      )}

      <h2 className="text-lg font-bold mb-4">Total: Ksh {total.toLocaleString()}</h2>

      <button
        onClick={handleConfirm}
        className="w-full py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700"
      >
        Confirm Order
      </button>
    </div>
  );
}
