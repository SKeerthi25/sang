import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function Pricing() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="Simple, Transparent Pricing" subtitle="Wholesale Rates" bgImage="/products_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-20 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-500">
              Choose the corporate tier that fits your procurement volume. No hidden fees.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {" "}
          {/* Tier 1 */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col"
          >
            {" "}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Startup
            </h3>{" "}
            <p className="text-gray-500 text-sm mb-6">
              Perfect for small teams and startups.
            </p>{" "}
            <div className="mb-8">
              <span className="text-4xl font-black text-gray-900">
                Standard
              </span>
            </div>{" "}
            <ul className="space-y-4 mb-8 flex-1">
              {" "}
              <li className="flex items-center gap-3 text-gray-600">
                <Check size={18} className="text-indigo-500" /> Access to
                complete catalog
              </li>{" "}
              <li className="flex items-center gap-3 text-gray-600">
                <Check size={18} className="text-indigo-500" /> Standard
                delivery
              </li>{" "}
              <li className="flex items-center gap-3 text-gray-600">
                <Check size={18} className="text-indigo-500" /> Email support
              </li>{" "}
            </ul>{" "}
            <Link
              to="/contact"
              className="w-full py-3 block text-center bg-slate-50 text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-colors border border-gray-200"
            >
              Contact Sales
            </Link>{" "}
          </motion.div>{" "}
          {/* Tier 2 */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-indigo-500 to-pink-600 rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4"
          >
            {" "}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-400 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
              Most Popular
            </div>{" "}
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>{" "}
            <p className="text-indigo-100 text-sm mb-6">
              For high-volume corporate procurement.
            </p>{" "}
            <div className="mb-8">
              <span className="text-4xl font-black text-white">Wholesale</span>
            </div>{" "}
            <ul className="space-y-4 mb-8 flex-1">
              {" "}
              <li className="flex items-center gap-3 text-white">
                <Check size={18} className="text-pink-400" /> Aggressive volume
                discounts
              </li>{" "}
              <li className="flex items-center gap-3 text-white">
                <Check size={18} className="text-pink-400" /> Next-day priority
                delivery
              </li>{" "}
              <li className="flex items-center gap-3 text-white">
                <Check size={18} className="text-pink-400" /> Priority 24/7
                Support
              </li>{" "}
              <li className="flex items-center gap-3 text-white">
                <Check size={18} className="text-pink-400" /> Dedicated Account
                Manager
              </li>{" "}
            </ul>{" "}
            <Link
              to="/contact"
              className="w-full py-3 block text-center bg-white text-indigo-600 hover:bg-gray-50 font-bold rounded-xl transition-colors shadow-sm"
            >
              Contact Sales
            </Link>{" "}
          </motion.div>{" "}
          {/* Tier 3 */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col"
          >
            {" "}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Public Sector
            </h3>{" "}
            <p className="text-gray-500 text-sm mb-6">
              Tailored for government & education.
            </p>{" "}
            <div className="mb-8">
              <span className="text-4xl font-black text-gray-900">Custom</span>
            </div>{" "}
            <ul className="space-y-4 mb-8 flex-1">
              {" "}
              <li className="flex items-center gap-3 text-gray-600">
                <Check size={18} className="text-indigo-500" /> Compliant
                procurement
              </li>{" "}
              <li className="flex items-center gap-3 text-gray-600">
                <Check size={18} className="text-indigo-500" /> 30-day Net Terms
              </li>{" "}
              <li className="flex items-center gap-3 text-gray-600">
                <Check size={18} className="text-indigo-500" /> SLA backed
                guarantees
              </li>{" "}
            </ul>{" "}
            <Link
              to="/contact"
              className="w-full py-3 block text-center bg-slate-50 text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-colors border border-gray-200"
            >
              Contact Sales
            </Link>{" "}
          </motion.div>{" "}
        </div>{" "}
        </div>
      </section>
    </div>
  );
}
