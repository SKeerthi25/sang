import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
        { name: "Industries", path: "/industries" },
        { name: "Pricing", path: "/pricing" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Blog", path: "/blog" },
        { name: "FAQ", path: "/faq" },
        { name: "Testimonials", path: "/testimonials" },
      ],
    },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={
        "fixed w-full z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm"
          : "bg-white py-5 border-b border-transparent")
      }
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2"
          >
            <img src="/logo.png" alt="SANG LTD Logo" className="h-12 md:h-24 w-auto object-contain scale-[1.3] origin-left" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group">
                  {link.dropdown ? (
                    <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                      {link.name}{" "}
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-xl py-2 w-48 flex flex-col">
                          {link.dropdown.map((sub, i) => (
                            <NavLink
                              key={i}
                              to={sub.path}
                              className={({ isActive }) =>
                                `px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${isActive ? "text-indigo-600 font-semibold" : "text-gray-500"}`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors ${isActive ? "text-indigo-600 font-bold" : "text-gray-600 hover:text-indigo-600"}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-2">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {link.name}
                      </div>
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-200">
                        {link.dropdown.map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-lg font-medium transition-colors ${isActive ? "text-indigo-600 font-bold" : "text-gray-900 hover:text-indigo-600"}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
