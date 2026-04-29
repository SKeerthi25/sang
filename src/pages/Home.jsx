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
    <div className="overflow-hidden bg-white">
      {" "}
      {/* Hero Section */}{" "}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {" "}
        {/* Soft Background Gradients (ClickUp/Stripe style) */}{" "}
        <div className="absolute inset-0 bg-white" />{" "}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />{" "}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />{" "}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          {" "}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {" "}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {" "}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full text-sm font-semibold mb-6 border border-indigo-100"
              >
                {" "}
                <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>{" "}
                The Modern IT Wholesale Platform{" "}
              </motion.div>{" "}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight"
              >
                {" "}
                One distributor to <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                  power them all.
                </span>{" "}
              </motion.h1>{" "}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                {" "}
                SANG LTD is your premier wholesale partner for computers,
                peripherals, and high-performance software. Plan, procure, and
                deploy your entire tech infrastructure from one place.{" "}
              </motion.p>{" "}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                {" "}
                <Link
                  to="/products"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group"
                >
                  {" "}
                  Get Started{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />{" "}
                </Link>{" "}
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  {" "}
                  Contact Sales{" "}
                </Link>{" "}
              </motion.div>{" "}
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-2"
              >
                {" "}
                <CheckCircle2 size={16} className="text-pink-400" /> Free
                consultation. No commitments.{" "}
              </motion.p>{" "}
            </motion.div>{" "}
            <motion.div
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {" "}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-indigo-500/10 border border-gray-200">
                {" "}
                {/* Mockup Top Bar */}{" "}
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                  {" "}
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>{" "}
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>{" "}
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>{" "}
                </div>{" "}
                {/* Mockup Content */}{" "}
                <div className="p-2 bg-white">
                  {" "}
                  <img
                    src="/tech_hero.png"
                    alt="Platform Dashboard Mockup"
                    className="w-full h-auto rounded-xl object-cover aspect-[4/3] opacity-90"
                  />{" "}
                </div>{" "}
                {/* Floating Elements */}{" "}
                <div
                  className="absolute top-12 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce"
                  style={{ animationDuration: "4s" }}
                >
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-400">
                      {" "}
                      <Zap size={20} />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <p className="text-xs text-gray-500 font-medium">
                        Fulfillment
                      </p>{" "}
                      <p className="text-sm font-bold text-gray-900">
                        Next-Day Delivery
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Trusted By Section */}{" "}
      <section className="py-12 border-t border-gray-100 bg-white">
        {" "}
        <div className="container mx-auto px-4 text-center">
          {" "}
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">
            Join 500+ Highly Productive Teams
          </p>{" "}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {" "}
            {/* Minimal SVG Logos */}{" "}
            <h2 className="text-xl font-black font-sans text-gray-900 tracking-tighter">
              SAMSUNG
            </h2>{" "}
            <h2 className="text-xl font-bold font-serif text-gray-900">IBM</h2>{" "}
            <h2 className="text-xl font-bold font-mono text-gray-900">
              Booking.com
            </h2>{" "}
            <h2 className="text-xl font-black italic text-gray-900">PADRES</h2>{" "}
            <h2 className="text-xl font-bold text-gray-900">STANLEY</h2>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Services Overview */}{" "}
      <section className="py-24 bg-slate-50 relative border-t border-gray-200">
        {" "}
        <div className="container mx-auto px-4 lg:px-8">
          {" "}
          <div className="flex flex-col md:flex-row gap-16">
            {" "}
            <div className="md:w-1/3">
              {" "}
              <div className="sticky top-32">
                {" "}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Simplify supply and get more done.
                </h2>{" "}
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  Procure, track, and manage any type of hardware with a
                  wholesale partner that flexes to your team's needs.
                </p>{" "}
                <div className="mb-8">
                  {" "}
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Replaces:
                  </p>{" "}
                  <p className="text-gray-900 font-medium flex gap-4">
                    {" "}
                    <span className="line-through text-gray-400">
                      Multiple Vendors
                    </span>{" "}
                    <span className="line-through text-gray-400">
                      Slow Logistics
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                <Link
                  to="/products"
                  className="inline-block px-8 py-4 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-pink-400/20 transition-all"
                >
                  {" "}
                  Browse Products{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {" "}
              {[
                {
                  icon: <Server className="text-indigo-500" size={28} />,
                  title: "Hardware Wholesale",
                  desc: "Bulk supply of top-tier computers, servers, and processing units.",
                },
                {
                  icon: <Code className="text-pink-500" size={28} />,
                  title: "Software Licensing",
                  desc: "Enterprise software solutions and volume licensing programs.",
                },
                {
                  icon: <Smartphone className="text-pink-400" size={28} />,
                  title: "Peripherals",
                  desc: "Comprehensive range of networking gear, monitors, and accessories.",
                },
                {
                  icon: <Truck className="text-indigo-500" size={28} />,
                  title: "Fast Logistics",
                  desc: "Next-day delivery across the UK for all in-stock bulk orders.",
                },
                {
                  icon: <LayoutDashboard className="text-pink-500" size={28} />,
                  title: "Asset Tagging",
                  desc: "Pre-configuration of hardware before delivery to save you time.",
                },
                {
                  icon: <Headset className="text-pink-400" size={28} />,
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
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                >
                  {" "}
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
                    {" "}
                    {feature.icon}{" "}
                  </div>{" "}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>{" "}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Call to Action Banner */}{" "}
      <section className="py-24 bg-white relative border-t border-gray-200">
        {" "}
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
          {" "}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-500 rounded-full text-sm font-semibold mb-6 border border-pink-100">
            {" "}
            <TrendingUp size={16} /> Ready to scale?{" "}
          </div>{" "}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The UK's most powerful <br />
            wholesale technology partner.
          </h2>{" "}
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of growing businesses that rely on SANG LTD for their
            complete hardware and software procurement needs.
          </p>{" "}
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            {" "}
            Open a Corporate Account{" "}
          </Link>{" "}
        </div>{" "}
        {/* Decorative elements */}{" "}
        <div className="absolute top-1/4 left-10 text-gray-200 opacity-50 hidden lg:block">
          <PackageOpen size={80} />
        </div>{" "}
        <div className="absolute bottom-1/4 right-10 text-gray-200 opacity-50 hidden lg:block">
          <Cpu size={100} />
        </div>{" "}
      </section>{" "}
    </div>
  );
}
