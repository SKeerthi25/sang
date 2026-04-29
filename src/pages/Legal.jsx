import React from "react";
import { motion } from "framer-motion";
export default function Legal() {
  return (
    <div className="py-20 bg-white min-h-screen overflow-hidden">
      {" "}
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
        {" "}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-6">
            Legal & Policies
          </h1>{" "}
          <div className="space-y-12 text-gray-500 ">
            {" "}
            <section>
              {" "}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h2>{" "}
              <p className="mb-4">
                At SANG LTD, we take your privacy seriously. We only collect
                essential business data required to process your wholesale
                orders and maintain our B2B relationship. We never sell your
                data to third parties.
              </p>{" "}
              <p>
                For any privacy-related concerns, please contact our data
                protection officer at our head office in Croydon.
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Terms & Conditions
              </h2>{" "}
              <p className="mb-4">
                By engaging in wholesale trade with SANG LTD, you agree to our
                standard B2B terms. All goods remain the property of SANG LTD
                until paid for in full.
              </p>{" "}
              <p>
                Standard payment terms for approved credit accounts are 30 days
                from date of invoice.
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Refund Policy
              </h2>{" "}
              <p>
                For B2B transactions, returns are only accepted for defective
                merchandise within 14 days of delivery. All returned items must
                be in their original packaging and require a Return Merchandise
                Authorization (RMA) number.
              </p>{" "}
            </section>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
}
