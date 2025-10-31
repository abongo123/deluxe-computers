import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Repairs() {
  const navigate = useNavigate();
  const [selectedRepair, setSelectedRepair] = useState("");

  const repairs = ["Laptop Repair", "Monitor Repair", "Other Repairs"];

  const handleBooking = () => {
    if (!selectedRepair) {
      alert("Please select a repair type!");
      return;
    }
    navigate("/booking", {
      state: { repairType: selectedRepair },
    });
  };

  return (
    <div className="p-12 flex flex-col items-center gap-6">
      <h2 className="text-md text-white font-thin">Got computer issues? Let’s fix it. Book a repair and we’ll reach out!</h2>
      <div className="flex flex-col w-1/2">
        <label htmlFor="firstName" className="text-sm mb-1 text-gray-300">
          Name*
        </label>
        <input
          id="firstName"
          type="text"
          placeholder=""
          className="p-3 border-b text-white bg-black rounded-none focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <label htmlFor="lastName" className="text-sm mb-1 text-gray-300">
          Email*
        </label>
        <input
          id="email"
          type="email"
          placeholder=""
          className="p-3 border-b text-white bg-black rounded-none focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <label htmlFor="lastName" className="text-sm mb-1 text-gray-300">
          Phone Number*
        </label>
        <input
          id="phone"
          type="tel"
          placeholder=""
          className="p-3 border-b text-white bg-black rounded-none focus:outline-none focus:border-blue-400"
        />
      </div>
      

      <div className="w-full max-w-sm">
        <label className="block text-white font-semibold mb-2">Select Repair Type:</label>
        <select
          value={selectedRepair}
          onChange={(e) => setSelectedRepair(e.target.value)}
          className="w-full p-3 rounded-md text-black"
        >
          <option value="">Choose a Repair</option>
          {repairs.map((r, i) => (
            <option key={i} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleBooking}
        className="bg-indigo-600 text-white px-6 py-3 rounded-none hover:bg-indigo-700 transition">Book Now
      </button>
    </div>
  );
}
