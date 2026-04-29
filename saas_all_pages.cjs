const fs = require('fs');
const path = require('path');

const writePage = (fileName, content) => {
  const filePath = path.join(__dirname, 'src/pages', fileName);
  fs.writeFileSync(filePath, content);
};

// 1. About.jsx
writePage('About.jsx', `import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-20 overflow-hidden relative">
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">About SANG LTD</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            We are redefining IT procurement. Founded on the principles of reliability and speed, we connect businesses across the UK with the world's leading technology hardware and software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-50 p-10 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><Target className="text-indigo-500" /> Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">To streamline the technology supply chain, providing corporate clients with unparalleled access to IT hardware and software through a simplified, reliable, and lightning-fast procurement process.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-50 p-10 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><Zap className="text-pink-400" /> Our Vision</h2>
            <p className="text-gray-500 leading-relaxed">To become the UK's most trusted and technologically advanced wholesale distribution platform, setting the gold standard for B2B tech logistics and enterprise support.</p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield size={24} className="text-indigo-500" />, title: 'Integrity', desc: '100% genuine products sourced directly from manufacturers.' },
            { icon: <Users size={24} className="text-blue-500" />, title: 'Partnership', desc: 'We act as an extension of your IT and procurement teams.' },
            { icon: <Zap size={24} className="text-pink-400" />, title: 'Agility', desc: 'Next-day delivery and rapid response to market demands.' }
          ].map((val, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-100">{val.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
              <p className="text-gray-500 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`);

// 2. Products.jsx
writePage('Products.jsx', `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Monitor, Cpu, HardDrive, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Enterprise Server Rack", category: "Computers", price: "£4,500", icon: <HardDrive className="text-indigo-500" /> },
  { id: 2, name: "Business Laptop Pro", category: "Computers", price: "£1,200", icon: <Cpu className="text-blue-500" /> },
  { id: 3, name: "4K IPS Monitor 27\\"", category: "Peripherals", price: "£350", icon: <Monitor className="text-pink-400" /> },
  { id: 4, name: "Mechanical Keyboard", category: "Peripherals", price: "£120", icon: <Monitor className="text-indigo-500" /> },
  { id: 5, name: "Cloud OS License (1yr)", category: "Software", price: "£89/mo", icon: <HardDrive className="text-blue-500" /> },
  { id: 6, name: "Antivirus Suite Enterprise", category: "Software", price: "£2,500/yr", icon: <Cpu className="text-pink-400" /> },
  { id: 7, name: "Ergonomic Office Chair V2", category: "Peripherals", price: "£250", icon: <Monitor className="text-indigo-500" /> },
  { id: 8, name: "Cloud Storage Array 100TB", category: "Computers", price: "£8,999", icon: <HardDrive className="text-blue-500" /> }
];

export default function Products() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => 
    (filter === 'All' || p.category === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
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
          <div className="flex gap-2 bg-slate-50 p-1 rounded-xl border border-gray-200">
            {['All', 'Computers', 'Peripherals', 'Software'].map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={\`px-6 py-2 rounded-lg text-sm font-semibold transition-all \${filter === c ? 'bg-white text-indigo-600 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900'}\`}
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
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

// 3. Pricing.jsx
writePage('Pricing.jsx', `import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-500">Choose the corporate tier that fits your procurement volume. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Startup</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for small teams and startups.</p>
            <div className="mb-8"><span className="text-4xl font-black text-gray-900">Standard</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-600"><Check size={18} className="text-indigo-500" /> Access to complete catalog</li>
              <li className="flex items-center gap-3 text-gray-600"><Check size={18} className="text-indigo-500" /> Standard delivery</li>
              <li className="flex items-center gap-3 text-gray-600"><Check size={18} className="text-indigo-500" /> Email support</li>
            </ul>
            <Link to="/contact" className="w-full py-3 block text-center bg-slate-50 text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-colors border border-gray-200">Contact Sales</Link>
          </motion.div>

          {/* Tier 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-b from-indigo-500 to-blue-600 rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-400 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Most Popular</div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-indigo-100 text-sm mb-6">For high-volume corporate procurement.</p>
            <div className="mb-8"><span className="text-4xl font-black text-white">Wholesale</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white"><Check size={18} className="text-pink-400" /> Aggressive volume discounts</li>
              <li className="flex items-center gap-3 text-white"><Check size={18} className="text-pink-400" /> Next-day priority delivery</li>
              <li className="flex items-center gap-3 text-white"><Check size={18} className="text-pink-400" /> Priority 24/7 Support</li>
              <li className="flex items-center gap-3 text-white"><Check size={18} className="text-pink-400" /> Dedicated Account Manager</li>
            </ul>
            <Link to="/contact" className="w-full py-3 block text-center bg-white text-indigo-600 hover:bg-gray-50 font-bold rounded-xl transition-colors shadow-sm">Contact Sales</Link>
          </motion.div>

          {/* Tier 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Public Sector</h3>
            <p className="text-gray-500 text-sm mb-6">Tailored for government & education.</p>
            <div className="mb-8"><span className="text-4xl font-black text-gray-900">Custom</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-600"><Check size={18} className="text-indigo-500" /> Compliant procurement</li>
              <li className="flex items-center gap-3 text-gray-600"><Check size={18} className="text-indigo-500" /> 30-day Net Terms</li>
              <li className="flex items-center gap-3 text-gray-600"><Check size={18} className="text-indigo-500" /> SLA backed guarantees</li>
            </ul>
            <Link to="/contact" className="w-full py-3 block text-center bg-slate-50 text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-colors border border-gray-200">Contact Sales</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}`);

// 4. Contact.jsx
writePage('Contact.jsx', `import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Contact Sales</h1>
          <p className="text-lg text-gray-500">Have a question or need to place a bulk order? Reach out to our team.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100"><MapPin className="text-indigo-500" /></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-500 leading-relaxed">14 Thanet Place,<br />Croydon, England,<br />CR0 1QP</p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100"><Phone className="text-blue-500" /></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-500">+44 7884 379597</p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100"><Mail className="text-pink-400" /></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-500 break-all">Sangeethauk1947@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}`);

// Update Navbar to be slightly transparent white with border
let navbarPath = path.join(__dirname, 'src/components/Navbar.jsx');
let navbarContent = fs.readFileSync(navbarPath, 'utf8');
navbarContent = navbarContent.replace(/className={\`fixed w-full z-50 transition-all duration-300 \${scrolled \? 'glass py-3' : 'bg-transparent py-5 dark:bg-transparent dark:text-white'}\`}/, 
"className={\`fixed w-full z-50 transition-all duration-300 \${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-white py-5 border-b border-transparent'}\`}");
fs.writeFileSync(navbarPath, navbarContent);

console.log("Applied SaaS layouts to all major pages");
