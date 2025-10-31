import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const sections = [
    {
      title: "Affordable PCs",
      desc: "Quality desktops and laptops that match your budget, perfect for students, freelancers & small businesses.",
      img: "https://images.unsplash.com/photo-1587202372775-98907b3a5b1e",
      link: "/products"
    },
    {
      title: "High-End Laptops",
      desc: "Powerful performance for gaming, editing & advanced computing. Only top-tier brands!",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      link: "/laptops"
    }
    ,
    {
      title: "Accessories & Gadgets",
      desc: "Keyboards, mice, webcams, RAM, storage & more, everything your computer needs.",
      img: "https://images.unsplash.com/photo-1586952518485-11b5c7bfa0f6",
      link: "/accessories"
    },
    {
      title: "Expert Repairs",
      desc: "Faulty computer? We fix hardware & software issues with trusted professional care.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "/repairs"
    }
  ];

  return (
    <div className="p-12 space-y-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="Computer"
          className="w-full md:w-1/2 rounded-2xl shadow-2xl"
        />
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center pt-6 md:pt-0">
          <h1 className="text-5xl font-bold mb-3">Deluxe Computers</h1>
          <p className="text-lg">Your Trusted Partner in Tech Products💻</p>
        </div>
      </div>

      <div className="space-y-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            className="bg-[#1f1e1e] p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />

            <div className="text-center md:text-left flex-1 space-y-2">
              <h3 className="text-2xl font-bold">{section.title}</h3>
              <p className="text-gray-300">{section.desc}</p>

              <Link
                to={section.link}
                className="inline-block bg-blue-500 px-5 py-2 mt-2 rounded-lg text-white font-semibold hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
