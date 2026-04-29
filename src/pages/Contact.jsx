import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Using the exact format required by @emailjs/browser
    emailjs.sendForm('service_w5wrgmx', 'template_pgmhkf3', form.current, {
      publicKey: 'UN_Qav5DTTLveif90',
    })
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.error("EmailJS Error:", error);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 relative">
      {" "}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />{" "}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {" "}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Contact Sales
          </h1>{" "}
          <p className="text-lg text-gray-500">
            Have a question or need to place a bulk order? Reach out to our
            team.
          </p>{" "}
        </motion.div>{" "}
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {" "}
          {/* Contact Info */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {" "}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <MapPin className="text-indigo-500" />
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Office Address
                </h3>{" "}
                <p className="text-gray-500 leading-relaxed">
                  14 Thanet Place,
                  <br />
                  Croydon, England,
                  <br />
                  CR0 1QP
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <Phone className="text-pink-500" />
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Phone
                </h3>{" "}
                <p className="text-gray-500">+44 7884 379597</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <Mail className="text-pink-400" />
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Email
                </h3>{" "}
                <p className="text-gray-500 break-all">
                  Sangeethauk1947@gmail.com
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <Clock className="text-indigo-500" />
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Business Hours
                </h3>{" "}
                <p className="text-gray-500 leading-relaxed">
                  Mon - Fri: 09:00 - 18:00
                  <br />
                  Sat - Sun: 10:00 - 16:00
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          {/* Contact Form */}{" "}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            {" "}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
              {" "}
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a message
              </h3>{" "}
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {" "}
                <div className="grid md:grid-cols-2 gap-6">
                  {" "}
                  <div>
                    {" "}
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name
                    </label>{" "}
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900"
                      placeholder="John"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name
                    </label>{" "}
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900"
                      placeholder="Doe"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Work Email
                  </label>{" "}
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900"
                    placeholder="john@company.com"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>{" "}
                  <textarea
                    rows="4"
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>{" "}
                </div>{" "}
                
                {status === 'success' && <p className="text-green-600 text-sm font-semibold">Message sent successfully! We'll get back to you soon.</p>}
                {status === 'error' && <p className="text-red-600 text-sm font-semibold">Failed to send message. Please try again or email us directly.</p>}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {" "}
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 w-full h-[400px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
        >
          <iframe 
            src="https://www.google.com/maps?q=14+Thanet+Place,+Croydon,+England,+CR0+1QP&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SANG LTD Location Map"
          ></iframe>
        </motion.div>
      </div>{" "}
    </div>
  );
}
