export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center p-10 gap-10">
      <img
        src="https://images.unsplash.com/photo-1587202372775-98927f7f1cf9"
        alt="About"
        className="w-full md:w-1/2 rounded-2xl shadow-2xl"
      />
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p>
          At Deluxe Computers, we provide top-quality computers and accessories with unmatched
          service and technical support. Our mission is to bring modern tech closer to you.
        </p>
      </div>
    </div>
  );
}
