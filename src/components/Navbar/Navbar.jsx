import React from 'react'
import { motion as Motion } from 'framer-motion';

export default function Navbar() {

  const navItem = [
    { name: 'Home', id: 'Home-section'},
    { name: 'About', id: 'About-section' },
    { name: 'Services', id: 'Services-section' },
    { name: 'Contact', id: 'Contact-section' },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">

        {/* Nav Items */}
        <Motion.ul
          className="flex gap-10 uppercase tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItem.map(({ name, id }) => (
            <Motion.li
              key={id}
              variants={itemVariants}
              className="relative group text-blue-950 text-lg font-semibold cursor-pointer 
                        hover:text-blue-700 transition-colors duration-300"
            >
              <a href={`#${id}`} className="relative">
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Motion.li>
          ))}
        </Motion.ul>
      </div>
    </nav>
  )
}
