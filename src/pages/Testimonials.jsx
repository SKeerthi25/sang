import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
export default function Testimonials() {
  const reviews = [
    {
      name: "David Smith",
      role: "IT Director, EduTech UK",
      text: "SANG LTD has been instrumental in upgrading our entire school network. Their bulk pricing and next-day delivery saved our project timeline.",
    },
    {
      name: "Sarah Jenkins",
      role: "Procurement Manager",
      text: "Professional, reliable, and always competitive. The dedicated account manager makes sourcing hard-to-find components incredibly easy.",
    },
    {
      name: "James Wilson",
      role: "CEO, TechStart",
      text: "Their enterprise software licensing solutions helped us scale without breaking the bank. Highly recommend their corporate partnership tier.",
    },
  ];
  return (
    <div className="py-20 bg-white min-h-screen">
      {" "}
      <div className="container mx-auto px-4 lg:px-8">
        {" "}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {" "}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h1>{" "}
          <p className="text-lg text-gray-500 ">
            Hear what our B2B partners have to say about working with us.
          </p>{" "}
        </div>{" "}
        <div className="grid md:grid-cols-3 gap-8">
          {" "}
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative"
            >
              {" "}
              <Quote
                className="absolute top-6 right-6 text-slate-100 "
                size={60}
              />{" "}
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {" "}
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} fill="currentColor" size={16} />
                ))}{" "}
              </div>{" "}
              <p className="text-gray-500 mb-8 relative z-10 text-lg italic">
                "{rev.text}"
              </p>{" "}
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  {" "}
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 40}`}
                    alt="Client"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="font-bold text-gray-900 ">{rev.name}</h4>{" "}
                  <p className="text-xs text-gray-400">{rev.role}</p>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
