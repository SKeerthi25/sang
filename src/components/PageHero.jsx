import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative w-full h-[50vh] min-h-[350px] flex flex-col items-center justify-center -mt-20">
      <div className="absolute inset-0 bg-gray-900/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 z-10" />
      <img 
        src={bgImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-20 text-center px-4 mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-lg text-sm md:text-base"
        >
          {subtitle}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight drop-shadow-2xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
