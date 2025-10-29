import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Laptops from "./Pages/Laptops";
import Desktops from "./Pages/Desktops";
import Accessories from "./Pages/Accessories";
import Printers from "./Pages/Printers";
import Toners from "./Pages/Toners";
import Mice from "./Pages/Mice";
import Keyboards from "./Pages/Keyboards";
import Payment from "./Pages/Payment";
import Cart from "./Pages/Cart";



export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/desktops" element={<Desktops />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/printers" element={<Printers/>} />
            <Route path="/toners" element={<Toners/>} />
            <Route path="/mice" element={<Mice/>} />
            <Route path="/keyboards" element={<Keyboards/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
