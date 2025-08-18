import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion';
import img from '../../assets/img/IMG-20250814-WA0069.jpg'
import About from '../../components//About/About';
import Projects from '../Projects/Projects';

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
                bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img2/abstract-luxury.jpg')" ,backgroundSize: 'cover' }}
    >
      {/* Layer شفاف عشان يغمق الخلفية ويظهر الكلام */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* المحتوى فوق الخلفية */}
      <div className="relative z-10 flex flex-col items-center">
        {/* صورة البروفايل */}
        <Motion.img
          src={img}
          alt="Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl border-4 border-white object-cover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* العنوان مع تأثير الكتابة */}
        <Motion.h1
          className="mt-8 text-3xl md:text-4xl font-bold text-white flex items-center"
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

    <About/>
    <Projects/>
    </>
  )
}
