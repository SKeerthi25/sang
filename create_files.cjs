const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/pages',
];

dirs.forEach(d => {
  const p = path.join(__dirname, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

const pages = [
  'Home.jsx',
  'About.jsx',
  'Products.jsx',
  'Services.jsx',
  'Industries.jsx',
  'Pricing.jsx',
  'Blog.jsx',
  'Careers.jsx',
  'FAQ.jsx',
  'Testimonials.jsx',
  'Contact.jsx',
  'Legal.jsx'
];

pages.forEach(page => {
  const name = page.replace('.jsx', '');
  const content = `import React from 'react';
import { motion } from 'framer-motion';

export default function ${name}() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">${name}</h1>
        <p className="text-slate-600 dark:text-slate-300">Welcome to the ${name} page of SANG LTD.</p>
      </div>
    </motion.div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src/pages', page), content);
});

const components = [
  'Navbar.jsx',
  'Footer.jsx',
  'Layout.jsx',
];

components.forEach(comp => {
  const name = comp.replace('.jsx', '');
  let content = '';
  if (name === 'Layout') {
    content = `import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
`;
  } else {
    content = `import React from 'react';

export default function ${name}() {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4">
      ${name} Component
    </div>
  );
}
`;
  }
  fs.writeFileSync(path.join(__dirname, 'src/components', comp), content);
});

console.log('Files created');
