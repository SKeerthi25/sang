import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  Truck,
  Zap,
  PackageOpen,
  LayoutDashboard,
  Code,
  Server,
  Smartphone,
  ShoppingCart,
  Headset,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };
  return (
    <div className="overflow-hidden min-h-screen text-white relative">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="flex flex-col items-center text-center gap-16">
            <motion.div
              className="w-full max-w-4xl flex flex-col items-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.3em] text-white uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                SANG LTD
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md text-pink-300 rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]"
              >
                <span className="flex h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
                The Modern IT Wholesale Platform
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-xl"
              >
                One distributor to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.4)]">
                  power them all.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
              >
                SANG LTD is your premier wholesale partner for computers,
                peripherals, and high-performance software. Plan, procure, and
                deploy your entire tech infrastructure from one place.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
              >
                <Link
                  to="/products"
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] transition-all flex items-center justify-center gap-3 group text-lg"
                >
                  Get Started
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-lg transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Contact Sales
                </Link>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={16} className="text-pink-400" /> Free
                consultation. No commitments.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-t border-white/10 relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">
            Join 500+ Highly Productive Teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <h2 className="text-2xl font-black font-sans text-white tracking-tighter">SAMSUNG</h2>
            <h2 className="text-2xl font-bold font-serif text-white">IBM</h2>
            <h2 className="text-2xl font-bold font-mono text-white">Booking.com</h2>
            <h2 className="text-2xl font-black italic text-white">PADRES</h2>
            <h2 className="text-2xl font-bold text-white">STANLEY</h2>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Simplify supply and get more done.
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Procure, track, and manage any type of hardware with a
                  wholesale partner that flexes to your team's needs.
                </p>
                <div className="mb-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Replaces:
                  </p>
                  <p className="text-white font-medium flex flex-col gap-3">
                    <span className="flex items-center gap-2"><span className="text-pink-400">×</span> <span className="line-through text-gray-400">Multiple Vendors</span></span>
                    <span className="flex items-center gap-2"><span className="text-pink-400">×</span> <span className="line-through text-gray-400">Slow Logistics</span></span>
                  </p>
                </div>
                <Link
                  to="/products"
                  className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                >
                  Browse Products
                </Link>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Server className="text-indigo-400" size={32} />,
                  title: "Hardware Wholesale",
                  desc: "Bulk supply of top-tier computers, servers, and processing units.",
                },
                {
                  icon: <Code className="text-pink-400" size={32} />,
                  title: "Software Licensing",
                  desc: "Enterprise software solutions and volume licensing programs.",
                },
                {
                  icon: <Smartphone className="text-indigo-300" size={32} />,
                  title: "Peripherals",
                  desc: "Comprehensive range of networking gear, monitors, and accessories.",
                },
                {
                  icon: <Truck className="text-pink-300" size={32} />,
                  title: "Fast Logistics",
                  desc: "Next-day delivery across the UK for all in-stock bulk orders.",
                },
                {
                  icon: <LayoutDashboard className="text-indigo-400" size={32} />,
                  title: "Asset Tagging",
                  desc: "Pre-configuration of hardware before delivery to save you time.",
                },
                {
                  icon: <Headset className="text-pink-400" size={32} />,
                  title: "Dedicated Support",
                  desc: "Account managers specialized in IT procurement and logistics.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-bold mb-8 border border-pink-500/30">
            <TrendingUp size={18} /> Ready to scale?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
            The UK's most powerful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              wholesale technology partner.
            </span>
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto font-light">
            Join hundreds of growing businesses that rely on SANG LTD for their
            complete hardware and software procurement needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-white text-gray-900 hover:bg-gray-100 font-extrabold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all text-lg"
          >
            Open a Corporate Account
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 text-indigo-400/20 hidden lg:block animate-pulse">
          <PackageOpen size={120} />
        </div>
        <div className="absolute bottom-1/4 right-10 text-pink-400/20 hidden lg:block animate-pulse" style={{ animationDelay: "1s" }}>
          <Cpu size={150} />
        </div>
      </section>
    </div>
  );
}
