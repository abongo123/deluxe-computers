export default function Contact() {
  return (
   <div className="flex flex-col md:flex-row p-12 gap-10 mt-4">
  <div className="w-full md:w-1/2 bg-[#c1cffb] flex justify-center items-center rounded-2xl shadow-xl">
    <h2 className="text-4xl font-bold text-black">Contact Us</h2>
  </div>

  <div className="w-full md:w-1/2 p-6 rounded-2xl shadow-lg space-y-4">
    <div className="flex gap-4">
      <div className="flex flex-col w-1/2">
        <label htmlFor="firstName" className="text-sm mb-1 text-gray-300">
          First Name*
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
          Last Name*
        </label>
        <input
          id="lastName"
          type="text"
          placeholder=""
          className="p-3 border-b text-white bg-black rounded-none focus:outline-none focus:border-blue-400"
        />
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex flex-col w-1/2">
        <label htmlFor="email" className="text-sm mb-1 text-gray-300">
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
        <label htmlFor="phone" className="text-sm mb-1 text-gray-300">
          Phone*
        </label>
        <input
          id="phone"
          type="tel"
          placeholder=""
          className="p-3 border-b text-white bg-black rounded-none focus:outline-none focus:border-blue-400"
        />
      </div>
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="text-sm mb-1 text-gray-300">
        Message
      </label>
      <textarea
        id="message"
        placeholder=""
        className="w-full p-3 rounded-none text-black h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
    </div>
    <button className="bg-indigo-900 hover:bg-indigo-950 text-white p-3 rounded-full w-full font-bold">
      Submit
    </button>
  </div>
</div>

  );
}
