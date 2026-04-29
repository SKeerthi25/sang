const fs = require('fs');
const path = require('path');

const writePage = (name, content) => {
  fs.writeFileSync(path.join(__dirname, 'src/pages', name), content);
};

writePage('Blog.jsx', `import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    { title: 'The Future of Enterprise Hardware in 2024', date: 'Oct 12, 2024', author: 'Sangeetha R.', category: 'Hardware' },
    { title: 'Why Volume Licensing is Crucial for Startups', date: 'Sep 28, 2024', author: 'Tech Team', category: 'Software' },
    { title: 'Navigating Supply Chain Logistics in Tech', date: 'Sep 15, 2024', author: 'Logistics Dept', category: 'Industry' },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Insights & News</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Stay updated with the latest trends in technology distribution.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{post.category}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">Read Article <ArrowRight size={16} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

writePage('Careers.jsx', `import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

export default function Careers() {
  const jobs = [
    { title: 'Senior B2B Sales Executive', location: 'Croydon, UK', type: 'Full-time' },
    { title: 'Supply Chain Coordinator', location: 'London, UK / Hybrid', type: 'Full-time' },
    { title: 'IT Hardware Technician', location: 'Croydon, UK', type: 'Part-time' },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Join Our Team</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Help us shape the future of technology distribution in the UK.</p>
        </div>
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-500 transition-colors">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase size={16} /> {job.type}</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">Apply Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

writePage('FAQ.jsx', `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: 'What is the typical delivery time for bulk orders?', a: 'For in-stock items, we offer next-day delivery across the UK for orders placed before 2 PM. For specialized or extremely large bulk orders, delivery typically takes 3-5 business days.' },
    { q: 'Do you offer bulk discounts?', a: 'Yes, we have tiered pricing based on monthly volume. Please visit our Pricing page or contact our sales team to discuss Enterprise Partner discounts.' },
    { q: 'What are your warranty policies?', a: 'All our hardware products come with standard manufacturer warranties. We also offer extended warranty and rapid replacement options for enterprise clients.' },
    { q: 'Can I request specific software licenses not listed?', a: 'Absolutely. Our custom procurement team can source specific enterprise software and specialized licenses based on your unique requirements.' },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to know about partnering with SANG LTD.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full px-6 py-4 flex items-center justify-between font-bold text-slate-900 dark:text-white text-left focus:outline-none">
                {faq.q}
                <ChevronDown className={\`transition-transform \${open === i ? 'rotate-180 text-blue-600' : 'text-slate-400'}\`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-slate-600 dark:text-slate-400">
                    <p className="pt-2 border-t border-slate-100 dark:border-slate-800">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

writePage('Testimonials.jsx', `import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: 'David Smith', role: 'IT Director, EduTech UK', text: 'SANG LTD has been instrumental in upgrading our entire school network. Their bulk pricing and next-day delivery saved our project timeline.' },
    { name: 'Sarah Jenkins', role: 'Procurement Manager', text: 'Professional, reliable, and always competitive. The dedicated account manager makes sourcing hard-to-find components incredibly easy.' },
    { name: 'James Wilson', role: 'CEO, TechStart', text: 'Their enterprise software licensing solutions helped us scale without breaking the bank. Highly recommend their corporate partnership tier.' },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Client Testimonials</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Hear what our B2B partners have to say about working with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-slate-100 dark:text-slate-800" size={60} />
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={16} />)}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 relative z-10 text-lg italic">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                   <img src={\`https://i.pravatar.cc/100?img=\${i+40}\`} alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

writePage('Legal.jsx', `import React from 'react';
import { motion } from 'framer-motion';

export default function Legal() {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">Legal & Policies</h1>
          
          <div className="space-y-12 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h2>
              <p className="mb-4">At SANG LTD, we take your privacy seriously. We only collect essential business data required to process your wholesale orders and maintain our B2B relationship. We never sell your data to third parties.</p>
              <p>For any privacy-related concerns, please contact our data protection officer at our head office in Croydon.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Terms & Conditions</h2>
              <p className="mb-4">By engaging in wholesale trade with SANG LTD, you agree to our standard B2B terms. All goods remain the property of SANG LTD until paid for in full.</p>
              <p>Standard payment terms for approved credit accounts are 30 days from date of invoice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Refund Policy</h2>
              <p>For B2B transactions, returns are only accepted for defective merchandise within 14 days of delivery. All returned items must be in their original packaging and require a Return Merchandise Authorization (RMA) number.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
`);

console.log('Extra pages created.');
