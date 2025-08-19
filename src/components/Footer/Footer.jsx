import React from "react";
import { motion as Motion } from "framer-motion";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const whatsappNumber = "201204470794";

  return (
    <Motion.footer
      className="w-full py-6 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row justify-center items-center gap-3 px-4 sm:px-0 shadow-lg"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-wrap justify-center items-center gap-2 text-center sm:text-left text-lg sm:text-xl font-semibold hover:scale-105 transition-transform duration-300"
      >
        Developed by <span className="text-yellow-300">Youssef Shoukry</span> | 💬 01204470794
      </a>
    </Motion.footer>
  );
}
