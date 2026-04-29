const fs = require('fs');
const path = require('path');

const applyBlobToPage = (fileName) => {
  const filePath = path.join(__dirname, 'src/pages', fileName);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // If it already has the blob, skip
  if (content.includes('bg-indigo-500/5 rounded-full blur-[100px]')) return;

  // Replace top div with blob wrapper
  content = content.replace(/<div className="pt-24 pb-20/g, '<div className="bg-white min-h-screen pt-24 pb-20 relative"><div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />');
  content = content.replace(/<div className="py-24/g, '<div className="bg-white min-h-screen pt-24 pb-20 relative"><div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />');
  
  // Make sure cards are white with gray border
  content = content.replace(/bg-gray-50 p-8 rounded-3xl/g, 'bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md');
  content = content.replace(/bg-white p-8 rounded-3xl/g, 'bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md');
  content = content.replace(/bg-gray-50 p-6 rounded-3xl/g, 'bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md');

  fs.writeFileSync(filePath, content);
};

['Services.jsx', 'Industries.jsx', 'Blog.jsx', 'Testimonials.jsx', 'Careers.jsx', 'FAQ.jsx', 'Legal.jsx'].forEach(applyBlobToPage);

console.log("Applied SaaS layouts to minor pages");
