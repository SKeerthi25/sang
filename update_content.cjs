const fs = require('fs');
const path = require('path');

const writePage = (fileName, content) => {
  const filePath = path.join(__dirname, 'src/pages', fileName);
  fs.writeFileSync(filePath, content);
};

// 1. Blog.jsx
writePage('Blog.jsx', `import React from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Enterprise Hardware in 2024",
      excerpt: "Explore how next-generation processors and scalable server architectures are redefining data center efficiency and operational overhead for large enterprises.",
      date: "Oct 12, 2024",
      author: "Sangeetha R.",
      category: "Hardware",
    },
    {
      title: "Why Volume Licensing is Crucial for Startups",
      excerpt: "Discover the hidden cost savings and scalability benefits of securing volume software licensing early in your startup's growth trajectory.",
      date: "Sep 28, 2024",
      author: "Tech Team",
      category: "Software",
    },
    {
      title: "Navigating Supply Chain Logistics in Tech",
      excerpt: "An in-depth analysis of how geopolitical shifts are affecting IT hardware availability and strategies to future-proof your procurement.",
      date: "Sep 15, 2024",
      author: "Logistics Dept",
      category: "Industry",
    },
    {
      title: "The Rise of AI in Procurement",
      excerpt: "How artificial intelligence is streamlining vendor management, predictive ordering, and cost-analysis in B2B tech distribution.",
      date: "Aug 05, 2024",
      author: "Sangeetha R.",
      category: "Industry",
    },
    {
      title: "Choosing the Right Monitors for Productivity",
      excerpt: "A comprehensive guide to ultrawide, high-refresh-rate, and color-accurate displays to maximize employee workflow and eye comfort.",
      date: "Jul 22, 2024",
      author: "Tech Team",
      category: "Hardware",
    },
    {
      title: "Cybersecurity Essentials for SMEs",
      excerpt: "The critical software tools and enterprise policies small businesses must adopt to protect against modern ransomware and phishing attacks.",
      date: "Jul 10, 2024",
      author: "Security Dept",
      category: "Software",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insights & News</h1>
          <p className="text-lg text-gray-500 ">Stay updated with the latest trends in technology distribution.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a href="#" className="block h-full bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all group flex flex-col">
                <div className="mb-6">
                  <span className="inline-block bg-pink-50 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`);

// 2. Products.jsx
writePage('Products.jsx', `import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Monitor, Cpu, HardDrive, ShoppingCart, Shield, Layout, Database } from "lucide-react";

const products = [
  { id: 1, name: "Enterprise Server Rack 42U", category: "Computers", price: "£4,500", icon: <HardDrive className="text-indigo-500" /> },
  { id: 2, name: "Business Laptop Pro 15\\"", category: "Computers", price: "£1,200", icon: <Cpu className="text-pink-500" /> },
  { id: 3, name: "4K IPS Professional Monitor 27\\"", category: "Peripherals", price: "£350", icon: <Monitor className="text-pink-400" /> },
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
    <div className="bg-white min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Product Catalog</h1>
          <p className="text-lg text-gray-500">Explore our comprehensive range of high-performance hardware and software solutions.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2 bg-slate-50 p-1 rounded-xl border border-gray-200">
            {["All", "Computers", "Peripherals", "Software"].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={\`px-6 py-2 rounded-lg text-sm font-semibold transition-all \${filter === c ? "bg-white text-indigo-600 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-900"}\`}
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
    </div>
  );
}`);

// 3. Careers.jsx
writePage('Careers.jsx', `import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Code, Server, Headset } from "lucide-react";

export default function Careers() {
  const jobs = [
    { title: "Senior B2B Sales Executive", location: "Croydon, UK", type: "Full-time", department: "Sales", icon: <Briefcase /> },
    { title: "Supply Chain Coordinator", location: "London, UK / Hybrid", type: "Full-time", department: "Logistics", icon: <MapPin /> },
    { title: "IT Hardware Technician", location: "Croydon, UK", type: "Part-time", department: "Hardware", icon: <Server /> },
    { title: "Senior React Native Developer", location: "Remote, UK", type: "Full-time", department: "Software", icon: <Code /> },
    { title: "Cloud Infrastructure Engineer", location: "London, UK / Hybrid", type: "Full-time", department: "Software", icon: <Server /> },
    { title: "Technical Support Specialist", location: "Croydon, UK", type: "Full-time", department: "Support", icon: <Headset /> },
    { title: "Software Licensing Manager", location: "Remote, UK", type: "Full-time", department: "Sales", icon: <Briefcase /> },
    { title: "Full Stack Node.js Developer", location: "Remote, UK", type: "Contract", department: "Software", icon: <Code /> }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-lg text-gray-500 ">Help us shape the future of technology distribution and software solutions in the UK.</p>
        </div>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex w-12 h-12 bg-slate-50 border border-gray-100 rounded-xl items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                  {job.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1 font-medium text-pink-500 bg-pink-50 px-2 py-0.5 rounded-md">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                  </div>
                </div>
              </div>
              <button className="px-8 py-3 bg-white border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 text-gray-900 rounded-xl font-bold transition-all w-full md:w-auto">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`);

console.log("Updated Blog, Products, and Careers pages successfully!");
