import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion';

import About from '../../components/About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function Home() {
  const fullText = "Hay, I'm Marcelino Hany"
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 4
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section
        id="Home-section"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 
                   bg-gradient-to-br from-[#071034] via-[#0f172a] to-[#0f637a] overflow-hidden"
      >
        {/* Layer شفاف مع بلور */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        {/* المحتوى */}
        <div className="relative z-10 flex flex-col items-center">
          {/* العنوان مع تأثير الكتابة */}
          <Motion.h1
            className="mt-8 text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-400 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {displayedText}
          </Motion.h1>

          <Motion.p
            className="mt-4 md:mt-6 text-base md:text-lg text-gray-200 max-w-2xl shadow-sm rounded-3xl p-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          >
            I'm a <span className="font-semibold text-blue-300">Graphic Designer</span>
          </Motion.p>

          {/* زرار */}
          <Motion.button
            className="mt-6 md:mt-8 px-8 py-4 bg-cyan-600 text-white font-semibold rounded-full 
                       shadow-xl hover:bg-cyan-500 transition-all duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const aboutSection = document.getElementById('About-section');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Know More
          </Motion.button>
        </div>
      </section>

      <About />
      <Projects />
      <Contact />
    </>
  )
}