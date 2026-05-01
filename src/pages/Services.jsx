import React from "react";
import { motion } from "framer-motion";
import { Box, Building2, Truck, Wrench } from "lucide-react";
import PageHero from "../components/PageHero";

export default function Services() {
  const services = [
    {
      icon: <Box size={40} />,
      title: "Bulk Supply Solutions",
      desc: "Comprehensive bulk procurement for businesses of all sizes, ensuring consistent availability and competitive pricing.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Corporate Partnerships",
      desc: "Dedicated account managers and tailored technology supply chains for enterprise and corporate clients.",
    },
    {
      icon: <Truck size={40} />,
      title: "Logistics & Delivery",
      desc: "Advanced warehousing and next-day nationwide delivery network to keep your business running without delays.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Custom Procurement",
      desc: "Sourcing specific, hard-to-find components and specialized software licenses tailored to unique project requirements.",
    },
    ,
    {
      icon: <Box size={40} />,
      title: "Asset Tagging & Configuration",
      desc: "Pre-configuration of hardware, software imaging, and physical asset tagging before delivery to save your IT team time.",
    },
    {
      icon: <Building2 size={40} />,
      title: "E-Waste Recycling",
      desc: "Secure, compliant disposal and recycling of your legacy IT hardware with certified data destruction.",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="Comprehensive Tech Solutions" subtitle="Our Services" bgImage="/products_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-20 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-500">
              Beyond just supplying hardware, we offer end-to-end logistics and
              procurement services designed to optimize your operations.
            </p>
          </div>
        <div className="grid md:grid-cols-2 gap-8">
          {" "}
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative"
            >
              {" "}
              <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500 transform group-hover:scale-150 transition-transform duration-700">
                {" "}
                {service.icon}{" "}
              </div>{" "}
              <div className="w-20 h-20 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-500">
                {" "}
                {service.icon}{" "}
              </div>{" "}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                {service.title}
              </h3>{" "}
              <p className="text-gray-500 leading-relaxed relative z-10 text-lg">
                {service.desc}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        </div>
      </section>
    </div>
  );
}
