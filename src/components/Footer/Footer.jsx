import React from "react";
import { motion as Motion } from "framer-motion";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const whatsappNumber = "201204470794";

  return (
    <Motion.footer
      className="w-full py-3 bg-gradient-to-r from-cyan-950 via-blue-950 to-indigo-950 
      text-white flex justify-center items-center px-2 shadow-md"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-wrap justify-center items-center gap-1 text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300"
      >
        Developed by <span className="text-yellow-300 ml-1">Youssef Shoukry</span> | 💬 01204470794
      </a>
    </Motion.footer>
  );
}