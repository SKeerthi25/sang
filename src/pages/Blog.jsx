import React from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import PageHero from "../components/PageHero";

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
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="Insights & News" subtitle="Tech Distribution" bgImage="/industries_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-20 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-500">
              Stay updated with the latest trends in technology distribution.
            </p>
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
      </section>
    </div>
  );
}