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
        <div className="w-full h-80">
        <iframe
        title="Business Location"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31959.22175372815!2d34.54849038731055!3d0.5651145950449925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17843bd9dcb2800f%3A0x1b6f8c0b5af11155!2sDeluxe+Computers%2C+Kanduyi+Rd%2C+Bungoma!5e0!3m2!1sen!2ske!4v1698622612345!5m2!1sen!2ske"
       className="w-full h-full rounded-lg border-0"
       allowFullScreen=""
       loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"/>
      </div>
      </div>
    </div>
  );
}
