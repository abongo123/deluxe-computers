import { useState } from "react";
import { useCart } from "../context/cartcontext";

export default function Checkout() {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!phone.trim()) {
  alert("Please enter your phone number");
  return;
     }
    if (deliveryType === "delivery" && !address.trim()) {
      alert("Please enter your delivery address");
      return;
    }

    alert(`Order Confirmed! Thank you ${name}.`);
  };

  return (
    <div className="p-8 mt-24 max-w-lg mx-auto bg-[#c1cffb] shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">Checkout</h1>
      <label className="font-semibold text-black">Your Name</label>
      <input
        type="text"
        className="w-full border p-2 rounded-none mb-4 bg-black"
        placeholder="Enter full name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        <label className="font-semibold text-black">Phone Number</label>
      <input
        type="tel"
        className="w-full border p-2 rounded-none mb-4 bg-black"
        placeholder="Input your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}/>

      <label className="font-semibold text-black">Delivery Option</label>
      <div className="flex gap-4 mb-4 text-black">
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
          className="w-full border p-2 rounded mb-4 bg-black"
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
