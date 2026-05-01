import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Monitor, Cpu, HardDrive, ShoppingCart, Shield, Layout, Database } from "lucide-react";

import PageHero from "../components/PageHero";

const products = [
  { id: 1, name: "Enterprise Server Rack 42U", category: "Computers", price: "£4,500", icon: <HardDrive className="text-indigo-500" /> },
  { id: 2, name: "Business Laptop Pro 15\"", category: "Computers", price: "£1,200", icon: <Cpu className="text-pink-500" /> },
  { id: 3, name: "4K IPS Professional Monitor 27\"", category: "Peripherals", price: "£350", icon: <Monitor className="text-pink-400" /> },
  { id: 4, name: "Ergonomic Mechanical Keyboard", category: "Peripherals", price: "£120", icon: <Monitor className="text-indigo-500" /> },
  { id: 5, name: "Cloud OS Enterprise License (1yr)", category: "Software", price: "£89/mo", icon: <Layout className="text-pink-500" /> },
  { id: 6, name: "Antivirus Suite Endpoint Security", category: "Software", price: "£2,500/yr", icon: <Shield className="text-indigo-500" /> },
  { id: 7, name: "Premium Office Chair V2", category: "Peripherals", price: "£250", icon: <Monitor className="text-indigo-500" /> },
  { id: 8, name: "Cloud Storage Array 100TB", category: "Computers", price: "£8,999", icon: <Database className="text-pink-500" /> },
  { id: 9, name: "Microsoft 365 E5 License", category: "Software", price: "£34/mo", icon: <Layout className="text-indigo-500" /> },
  { id: 10, name: "Adobe Creative Cloud Teams", category: "Software", price: "£65/mo", icon: <Layout className="text-pink-400" /> },
  { id: 11, name: "Windows Server 2022 Datacenter", category: "Software", price: "£4,800", icon: <Database className="text-indigo-500" /> },
  { id: 12, name: "Enterprise Firewall Appliance", category: "Computers", price: "£3,200", icon: <Shield className="text-pink-500" /> },
  { id: 13, name: "Wireless Access Point Wi-Fi 6E", category: "Peripherals", price: "£450", icon: <Monitor className="text-indigo-500" /> },
  { id: 14, name: "Virtualization Pro Management", category: "Software", price: "£1,100", icon: <Layout className="text-pink-500" /> },
  { id: 15, name: "Dual-Socket Workstation PC", category: "Computers", price: "£3,800", icon: <Cpu className="text-indigo-500" /> }
];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="Product Catalog" subtitle="Hardware & Software" bgImage="/products_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-20 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2 bg-slate-50 p-1 rounded-xl border border-gray-200">
            {["All", "Computers", "Peripherals", "Software"].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${filter === c ? "bg-white text-indigo-600 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-900"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-900 shadow-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <div className="text-xs font-bold tracking-widest text-indigo-500 uppercase mb-2">{product.category}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex-1">{product.name}</h3>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xl font-black text-gray-900">{product.price}</span>
                <button className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}