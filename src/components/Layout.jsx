import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      {" "}
      <Navbar />{" "}
      <main className="flex-grow pt-20">
        {" "}
        <Outlet />{" "}
      </main>{" "}
      <Footer /> {/* Floating WhatsApp Button */}{" "}
      <a
        href="https://wa.me/447884379597"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/30 z-50 transition-all hover:scale-110 flex items-center justify-center"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>{" "}
      </a>{" "}
      <AnimatePresence>
        {" "}
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-xl shadow-indigo-500/30 z-50 transition-colors"
          >
            {" "}
            <ArrowUp size={24} />{" "}
          </motion.button>
        )}{" "}
      </AnimatePresence>{" "}
    </div>
  );
}
