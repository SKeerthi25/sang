import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/PageHero";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: "What is the typical delivery time for bulk orders?",
      a: "For in-stock items, we offer next-day delivery across the UK for orders placed before 2 PM. For specialized or extremely large bulk orders, delivery typically takes 3-5 business days.",
    },
    {
      q: "Do you offer bulk discounts?",
      a: "Yes, we have tiered pricing based on monthly volume. Please visit our Pricing page or contact our sales team to discuss Enterprise Partner discounts.",
    },
    {
      q: "What are your warranty policies?",
      a: "All our hardware products come with standard manufacturer warranties. We also offer extended warranty and rapid replacement options for enterprise clients.",
    },
    {
      q: "Can I request specific software licenses not listed?",
      a: "Absolutely. Our custom procurement team can source specific enterprise software and specialized licenses based on your unique requirements.",
    },
    ,
    {
      q: "Do you offer drop-shipping services?",
      a: "Currently, we focus on bulk wholesale deliveries directly to your warehouses or retail locations. However, we can discuss custom fulfillment options for Enterprise Partners.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept BACS, CHAPS, major credit/debit cards, and offer 30-day net credit terms for approved corporate accounts.",
    },
    {
      q: "Are your software licenses perpetual or subscription-based?",
      a: "We offer both. Depending on the software vendor (e.g., Microsoft, Adobe), we can supply perpetual licenses or manage your annual subscription renewals.",
    },
    {
      q: "Can I track my bulk shipment?",
      a: "Yes, all our logistics partners provide real-time GPS tracking. Your account manager will share the tracking portal link upon dispatch.",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <PageHero title="Frequently Asked Questions" subtitle="Support & Info" bgImage="/contact_bg.png" />
      <section className="bg-white text-gray-900 relative z-30 py-20 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-500">
              Everything you need to know about partnering with SANG LTD.
            </p>
          </div>
        <div className="space-y-4">
          {" "}
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              {" "}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-gray-900 text-left focus:outline-none"
              >
                {" "}
                {faq.q}{" "}
                <ChevronDown
                  className={`transition-transform ${open === i ? "rotate-180 text-indigo-500" : "text-gray-400"}`}
                />{" "}
              </button>{" "}
              <AnimatePresence>
                {" "}
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-500 "
                  >
                    {" "}
                    <p className="pt-2 border-t border-gray-200 ">
                      {faq.a}
                    </p>{" "}
                  </motion.div>
                )}{" "}
              </AnimatePresence>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        </div>
      </section>
    </div>
  );
}
