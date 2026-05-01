import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Shield, Zap } from "lucide-react";
import PageHero from "../components/PageHero";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="About Us" subtitle="The Wholesale Vision" bgImage="/about_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-24 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-indigo-600 font-semibold tracking-[0.2em] uppercase mb-6 text-sm">
              SANG LTD
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10 leading-tight">
              The Heart of <br/> IT Procurement
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
              We are redefining IT procurement. Founded on the principles of
              reliability and speed, we connect businesses across the UK with the
              world's leading technology hardware and software. Our platform is dedicated to creating seamless logistics that resonate on a corporate level.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              With a focus on enterprise servers, high-performance peripherals, and 
              commercial licensing, we combine technical mastery with an intuitive business approach.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="text-indigo-500" /> Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To streamline the technology supply chain, providing corporate
                clients with unparalleled access to IT hardware and software
                through a simplified, reliable, and lightning-fast procurement
                process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="text-pink-400" /> Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the UK's most trusted and technologically advanced
                wholesale distribution platform, setting the gold standard for B2B
                tech logistics and enterprise support.
              </p>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={24} className="text-indigo-500" />,
                title: "Integrity",
                desc: "100% genuine products sourced directly from manufacturers.",
              },
              {
                icon: <Users size={24} className="text-pink-500" />,
                title: "Partnership",
                desc: "We act as an extension of your IT and procurement teams.",
              },
              {
                icon: <Zap size={24} className="text-pink-400" />,
                title: "Agility",
                desc: "Next-day delivery and rapid response to market demands.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all text-center"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
