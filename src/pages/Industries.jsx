import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building,
  ShoppingBag,
  Landmark,
  Laptop2,
  HeartPulse,
} from "lucide-react";
export default function Industries() {
  const industries = [
    {
      icon: <GraduationCap size={32} />,
      title: "Education",
      desc: "Providing institutions with affordable, reliable computers and networking for modern classrooms.",
    },
    {
      icon: <Building size={32} />,
      title: "Corporate Offices",
      desc: "Outfitting enterprise workspaces with high-performance workstations and productivity software.",
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Retail",
      desc: "Supplying point-of-sale systems, inventory management software, and back-office hardware.",
    },
    {
      icon: <Laptop2 size={32} />,
      title: "IT Companies",
      desc: "Wholesale components and server infrastructure for tech startups and established MSPs.",
    },
    {
      icon: <Landmark size={32} />,
      title: "Government",
      desc: "Secure, compliant hardware and software solutions for public sector organizations.",
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Healthcare",
      desc: "Specialized diagnostic displays, secure terminals, and compliance-ready infrastructure.",
    },
    ,
    {
      icon: <Building size={32} />,
      title: "Hospitality",
      desc: "Providing robust POS systems, digital signage, and guest Wi-Fi infrastructure.",
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Manufacturing",
      desc: "Rugged computing devices and specialized software for factory floor operations.",
    },
  ];
  return (
    <div className="py-20 bg-white min-h-screen overflow-hidden">
      {" "}
      <div className="container mx-auto px-4 lg:px-8">
        {" "}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {" "}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>{" "}
          <p className="text-lg text-gray-500 ">
            Our wholesale technology solutions power growth and efficiency
            across diverse sectors.
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center hover:bg-indigo-500 hover:text-white transition-colors duration-300 group shadow-sm hover:shadow-xl"
            >
              {" "}
              <div className="w-16 h-16 bg-gray-50 text-indigo-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                {" "}
                {ind.icon}{" "}
              </div>{" "}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3">
                {ind.title}
              </h3>{" "}
              <p className="text-gray-500 group-hover:text-indigo-100 leading-relaxed">
                {ind.desc}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
