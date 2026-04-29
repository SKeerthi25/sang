import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Shield, Zap } from "lucide-react";
export default function About() {
  return (
    <div className="bg-white min-h-screen pt-20 overflow-hidden relative">
      {" "}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />{" "}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />{" "}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {" "}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About SANG LTD
          </h1>{" "}
          <p className="text-lg text-gray-500 leading-relaxed">
            {" "}
            We are redefining IT procurement. Founded on the principles of
            reliability and speed, we connect businesses across the UK with the
            world's leading technology hardware and software.{" "}
          </p>{" "}
        </motion.div>{" "}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-10 rounded-2xl border border-gray-200"
          >
            {" "}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Target className="text-indigo-500" /> Our Mission
            </h2>{" "}
            <p className="text-gray-500 leading-relaxed">
              To streamline the technology supply chain, providing corporate
              clients with unparalleled access to IT hardware and software
              through a simplified, reliable, and lightning-fast procurement
              process.
            </p>{" "}
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-10 rounded-2xl border border-gray-200"
          >
            {" "}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Zap className="text-pink-400" /> Our Vision
            </h2>{" "}
            <p className="text-gray-500 leading-relaxed">
              To become the UK's most trusted and technologically advanced
              wholesale distribution platform, setting the gold standard for B2B
              tech logistics and enterprise support.
            </p>{" "}
          </motion.div>{" "}
        </div>{" "}
        <div className="text-center mb-12">
          {" "}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Core Values
          </h2>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {" "}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center"
            >
              {" "}
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-100">
                {val.icon}
              </div>{" "}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {val.title}
              </h3>{" "}
              <p className="text-gray-500 text-sm">{val.desc}</p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
