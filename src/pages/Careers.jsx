import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Code, Server, Headset } from "lucide-react";

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
    <div className="bg-white min-h-screen overflow-hidden pt-24 pb-20 relative">
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-lg text-gray-500 ">Help us shape the future of technology distribution and software solutions in the UK.</p>
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
              <button className="px-8 py-3 bg-white border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 text-gray-900 rounded-xl font-bold transition-all w-full md:w-auto">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}