import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-12 space-y-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="Computer"
          className="w-full md:w-1/2 rounded-2xl shadow-2xl"
        />
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center -translate-y-10">
          <h1 className="text-4xl font-bold mb-3">Deluxe Computers</h1>
          <p className="text-lg">Your Trusted Partner in Tech Innovation 💻</p>
        </div>
      </div>

      <div className="space-y-10">
        {["Affordable PCs", "High-End Laptops", "Accessories & Gadgets", "Expert Repairs"].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#1f1e1e] p-6 rounded-xl shadow-xl text-center text-lg font-bold"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
