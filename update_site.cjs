const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath, replacements) => {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const { search, replace } of replacements) {
    if (search instanceof RegExp) {
        content = content.replace(search, replace);
    } else {
        content = content.split(search).join(replace);
    }
  }
  // Change colors
  content = content.replace(/blue-/g, 'teal-');
  content = content.replace(/purple-/g, 'emerald-');
  fs.writeFileSync(filePath, content);
};

// 1. About.jsx: Remove image
replaceInFile(path.join(__dirname, 'src/pages/About.jsx'), [
  {
    search: '<img src="https://i.pravatar.cc/150?img=32" alt="Director" className="w-full h-full object-cover" />',
    replace: '<div className="w-full h-full flex items-center justify-center text-3xl font-black text-slate-400">SR</div>'
  }
]);

// 2. Navbar.jsx: Remove dark mode and Get a Quote
const navbarPath = path.join(__dirname, 'src/components/Navbar.jsx');
let navbarContent = fs.readFileSync(navbarPath, 'utf8');
// Remove dark mode state and effect
navbarContent = navbarContent.replace(/const \[isDark, setIsDark\] = useState\(false\);\n/g, '');
navbarContent = navbarContent.replace(/useEffect\(\(\) => \{\n\s*if \(isDark\) \{\n\s*document\.documentElement\.classList\.add\('dark'\);\n\s*\} else \{\n\s*document\.documentElement\.classList\.remove\('dark'\);\n\s*\}\n\s*\}, \[isDark\]\);\n/g, '');
// Remove Sun/Moon buttons
navbarContent = navbarContent.replace(/<button onClick=\{\(\) => setIsDark\(!isDark\)\} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">\s*\{isDark \? <Sun size=\{18\} \/> : <Moon size=\{18\} \/>\}\s*<\/button>/g, '');
navbarContent = navbarContent.replace(/<button onClick=\{\(\) => setIsDark\(!isDark\)\} className="p-2 text-slate-700 dark:text-slate-300">\s*\{isDark \? <Sun size=\{20\} \/> : <Moon size=\{20\} \/>\}\s*<\/button>/g, '');
// Remove Get a Quote buttons
navbarContent = navbarContent.replace(/<Link to="\/contact" className="px-5 py-2\.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full shadow-lg shadow-blue-500\/30 transition-all hover:-translate-y-0\.5">\s*Get a Quote\s*<\/Link>/g, '');
navbarContent = navbarContent.replace(/<div className="pt-4 border-t border-slate-100 dark:border-slate-800">\s*<Link to="\/contact" onClick=\{\(\) => setIsOpen\(false\)\} className="w-full py-3 bg-blue-600 text-white rounded-xl text-center font-medium block">\s*Get a Quote\s*<\/Link>\s*<\/div>/g, '');
// remove Sun, Moon imports
navbarContent = navbarContent.replace(/Sun, Moon, /g, '');
navbarContent = navbarContent.replace(/blue-/g, 'teal-');
fs.writeFileSync(navbarPath, navbarContent);

// 3. Add more FAQs
const faqPath = path.join(__dirname, 'src/pages/FAQ.jsx');
let faqContent = fs.readFileSync(faqPath, 'utf8');
const newFaqs = `,
    { q: 'Do you offer drop-shipping services?', a: 'Currently, we focus on bulk wholesale deliveries directly to your warehouses or retail locations. However, we can discuss custom fulfillment options for Enterprise Partners.' },
    { q: 'What payment methods do you accept?', a: 'We accept BACS, CHAPS, major credit/debit cards, and offer 30-day net credit terms for approved corporate accounts.' },
    { q: 'Are your software licenses perpetual or subscription-based?', a: 'We offer both. Depending on the software vendor (e.g., Microsoft, Adobe), we can supply perpetual licenses or manage your annual subscription renewals.' },
    { q: 'Can I track my bulk shipment?', a: 'Yes, all our logistics partners provide real-time GPS tracking. Your account manager will share the tracking portal link upon dispatch.' }`;
faqContent = faqContent.replace(/\];\n\n  return/g, newFaqs + '  ];\n\n  return');
faqContent = faqContent.replace(/blue-/g, 'teal-');
fs.writeFileSync(faqPath, faqContent);

// 4. Add more Products
const productsPath = path.join(__dirname, 'src/pages/Products.jsx');
let productsContent = fs.readFileSync(productsPath, 'utf8');
const newProducts = `,
  { id: 7, name: "Ergonomic Office Chair V2", category: "Peripherals", price: "£250", icon: <Monitor />, specs: ["Lumbar Support", "Breathable Mesh", "Adjustable Arms"] },
  { id: 8, name: "Cloud Storage Array 100TB", category: "Computers", price: "£8,999", icon: <HardDrive />, specs: ["100TB Usable", "RAID 6", "10GbE Network"] },
  { id: 9, name: "Graphic Design Software Suite", category: "Software", price: "£499/yr", icon: <Cpu />, specs: ["Vector Editing", "Photo Manipulation", "Cloud Assets"] },
  { id: 10, name: "Wireless Presentation Mouse", category: "Peripherals", price: "£45", icon: <Monitor />, specs: ["Laser Pointer", "50m Range", "USB-C Charge"] },
  { id: 11, name: "Mini PC Thin Client", category: "Computers", price: "£199", icon: <Cpu />, specs: ["Intel N100", "8GB RAM", "256GB SSD"] },
  { id: 12, name: "Accounting ERP License", category: "Software", price: "£1,200/yr", icon: <Cpu />, specs: ["Payroll", "Inventory", "Multi-Currency"] }`;
productsContent = productsContent.replace(/\];\n\nexport default/g, newProducts + '];\n\nexport default');
productsContent = productsContent.replace(/blue-/g, 'teal-');
fs.writeFileSync(productsPath, productsContent);

// 5. Add more Services
const servicesPath = path.join(__dirname, 'src/pages/Services.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');
const newServices = `,
    { icon: <Box size={40} />, title: 'Asset Tagging & Configuration', desc: 'Pre-configuration of hardware, software imaging, and physical asset tagging before delivery to save your IT team time.' },
    { icon: <Building2 size={40} />, title: 'E-Waste Recycling', desc: 'Secure, compliant disposal and recycling of your legacy IT hardware with certified data destruction.' }`;
servicesContent = servicesContent.replace(/\];\n\n  return/g, newServices + '  ];\n\n  return');
servicesContent = servicesContent.replace(/blue-/g, 'teal-');
fs.writeFileSync(servicesPath, servicesContent);

// 6. Add more Industries
const industriesPath = path.join(__dirname, 'src/pages/Industries.jsx');
let industriesContent = fs.readFileSync(industriesPath, 'utf8');
const newIndustries = `,
    { icon: <Building size={32} />, title: 'Hospitality', desc: 'Providing robust POS systems, digital signage, and guest Wi-Fi infrastructure.' },
    { icon: <ShoppingBag size={32} />, title: 'Manufacturing', desc: 'Rugged computing devices and specialized software for factory floor operations.' }`;
industriesContent = industriesContent.replace(/\];\n\n  return/g, newIndustries + '  ];\n\n  return');
industriesContent = industriesContent.replace(/blue-/g, 'teal-');
fs.writeFileSync(industriesPath, industriesContent);

// 7. Add more Blog posts
const blogPath = path.join(__dirname, 'src/pages/Blog.jsx');
let blogContent = fs.readFileSync(blogPath, 'utf8');
const newBlogs = `,
    { title: 'The Rise of AI in Procurement', date: 'Aug 05, 2024', author: 'Sangeetha R.', category: 'Industry' },
    { title: 'Choosing the Right Monitors for Productivity', date: 'Jul 22, 2024', author: 'Tech Team', category: 'Hardware' },
    { title: 'Cybersecurity Essentials for SMEs', date: 'Jul 10, 2024', author: 'Security Dept', category: 'Software' }`;
blogContent = blogContent.replace(/\];\n\n  return/g, newBlogs + '  ];\n\n  return');
blogContent = blogContent.replace(/blue-/g, 'teal-');
fs.writeFileSync(blogPath, blogContent);

// Extra file replacements for color
const extraFiles = ['src/pages/Home.jsx', 'src/pages/Pricing.jsx', 'src/pages/Contact.jsx', 'src/components/Footer.jsx', 'src/components/Layout.jsx', 'src/pages/Testimonials.jsx', 'src/pages/Careers.jsx', 'src/pages/Legal.jsx'];
extraFiles.forEach(file => {
    let p = path.join(__dirname, file);
    if(fs.existsSync(p)) {
        let c = fs.readFileSync(p, 'utf8');
        c = c.replace(/blue-/g, 'teal-');
        c = c.replace(/purple-/g, 'emerald-');
        fs.writeFileSync(p, c);
    }
});

console.log('Update complete');
