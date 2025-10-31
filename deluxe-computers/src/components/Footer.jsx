import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-indigo-900 p-6 text-center md:text-left">
      <div>Email: support@deluxecomputers.com</div>
      <div>Phone: +254720722001</div>
      <div className="text-wrap">Location: Opposite Christ The King Catholic Church</div>

   <div className="flex justify-center space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-blue-300 mx-auto"/>
            </a>
        </div>
    </footer>
  );
}
