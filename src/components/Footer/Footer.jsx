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
      className="w-full py-3 bg-gradient-to-t from-[#0b1f29] via-[#0d2c38] to-[#103846]
      text-gray-200 flex justify-center items-center px-2 shadow-lg"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-wrap justify-center items-center gap-1 text-xs sm:text-sm font-medium 
                   hover:text-cyan-400 hover:scale-105 transition-all duration-300"
      >
        Developed by <span className="text-cyan-300 ml-1">Youssef Shoukry</span> | 💬 01204470794
      </a>
    </Motion.footer>
  );
}
