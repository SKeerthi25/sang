import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 pt-20 pb-10 border-t border-gray-200">
      {" "}
      <div className="container mx-auto px-4 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {" "}
          <div className="space-y-6">
            {" "}
            <Link
              to="/"
              className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2"
            >
              <img src="/logo.png" alt="SANG LTD Logo" className="h-24 w-auto object-contain scale-110 origin-left" />
            </Link>{" "}
            <p className="text-sm leading-relaxed text-gray-400">
              {" "}
              Empowering technology distribution across the UK. Your trusted
              wholesale partner for computers, peripherals, and software
              solutions.{" "}
            </p>{" "}
            <div className="flex items-center gap-4">
              {" "}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <FaFacebook size={18} />
              </a>{" "}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <FaTwitter size={18} />
              </a>{" "}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <FaLinkedin size={18} />
              </a>{" "}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-gray-900 font-semibold mb-6">
              Quick Links
            </h4>{" "}
            <ul className="space-y-3">
              {" "}
              {["About Us", "Products", "Services", "Pricing", "Blog"].map(
                (item) => (
                  <li key={item}>
                    {" "}
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "")}`}
                      className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                    >
                      {" "}
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />{" "}
                      {item}{" "}
                    </Link>{" "}
                  </li>
                ),
              )}{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-gray-900 font-semibold mb-6">
              Support & Legal
            </h4>{" "}
            <ul className="space-y-3">
              {" "}
              {[
                "Careers",
                "FAQ",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  {" "}
                  <Link
                    to={
                      item.includes("Policy") || item.includes("Terms")
                        ? "/legal"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    {" "}
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />{" "}
                    {item}{" "}
                  </Link>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-gray-900 font-semibold mb-6">
              Contact Info
            </h4>{" "}
            <ul className="space-y-4">
              {" "}
              <li className="flex items-start gap-3">
                {" "}
                <MapPin
                  size={18}
                  className="text-indigo-500 shrink-0 mt-0.5"
                />{" "}
                <span className="text-sm leading-relaxed">
                  14 Thanet Place,
                  <br />
                  Croydon, England,
                  <br />
                  CR0 1QP
                </span>{" "}
              </li>{" "}
              <li className="flex items-center gap-3">
                {" "}
                <Phone size={18} className="text-indigo-500 shrink-0" />{" "}
                <a
                  href="tel:+447884379597"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  +44 7884 379597
                </a>{" "}
              </li>{" "}
              <li className="flex items-center gap-3">
                {" "}
                <Mail size={18} className="text-indigo-500 shrink-0" />{" "}
                <a
                  href="mailto:Sangeethauk1947@gmail.com"
                  className="text-sm hover:text-indigo-400 transition-colors break-all"
                >
                  Sangeethauk1947@gmail.com
                </a>{" "}
              </li>{" "}
              <li className="flex items-start gap-3">
                {" "}
                <Clock size={18} className="text-indigo-500 shrink-0 mt-0.5" />{" "}
                <span className="text-sm leading-relaxed">
                  Mon - Fri: 09:00 - 18:00
                  <br />
                  Sat - Sun: 10:00 - 16:00
                </span>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {" "}
          <p className="text-xs text-gray-400">
            {" "}
            &copy; {new Date().getFullYear()} SANG LTD All rights
            reserved.{" "}
          </p>{" "}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            {" "}
            <Link to="/legal" className="hover:text-indigo-500">
              Privacy
            </Link>{" "}
            <Link to="/legal" className="hover:text-indigo-500">
              Terms
            </Link>{" "}
            <Link to="/legal" className="hover:text-indigo-500">
              Cookies
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
