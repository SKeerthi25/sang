import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Code, Server, Headset } from "lucide-react";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

export default function Careers() {
  const jobs = [
    { title: "Senior B2B Sales Executive", location: "Croydon, UK", type: "Full-time", department: "Sales", icon: <Briefcase /> },
    { title: "Supply Chain Coordinator", location: "London, UK / Hybrid", type: "Full-time", department: "Logistics", icon: <MapPin /> },
    { title: "IT Hardware Technician", location: "Croydon, UK", type: "Part-time", department: "Hardware", icon: <Server /> },
    { title: "Senior React Native Developer", location: "Remote, UK", type: "Full-time", department: "Software", icon: <Code /> },
    { title: "Cloud Infrastructure Engineer", location: "London, UK / Hybrid", type: "Full-time", department: "Software", icon: <Server /> },
    { title: "Technical Support Specialist", location: "Croydon, UK", type: "Full-time", department: "Support", icon: <Headset /> },
    { title: "Software Licensing Manager", location: "Remote, UK", type: "Full-time", department: "Sales", icon: <Briefcase /> },
    { title: "Full Stack Node.js Developer", location: "Remote, UK", type: "Contract", department: "Software", icon: <Code /> }
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="Join Our Team" subtitle="Careers" bgImage="/industries_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-20 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-500">
              Help us shape the future of technology distribution and software solutions in the UK.
            </p>
          </div>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex w-12 h-12 bg-slate-50 border border-gray-100 rounded-xl items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                  {job.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1 font-medium text-pink-500 bg-pink-50 px-2 py-0.5 rounded-md">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="w-full md:w-auto">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-8 py-3 bg-white border-2 border-indigo-100 text-indigo-600 rounded-xl font-bold transition-all w-full md:w-auto group shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:border-transparent flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Glowing pulse effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></span>

                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                    Apply Now
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}