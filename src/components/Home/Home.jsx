import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion';
import img from '../../assets/img/IMG-20250814-WA0069.jpg'

export default function Home() {
  const fullText = "Hello, I'm Marcelino Hany"
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 4 // بدء الكتابة من الحرف الخامس
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(interval)
    }, 80) // سرعة الكتابة (ملي ثانية لكل حرف)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="Home-section" 
      className="min-h-screen flex flex-col justify-center items-center text-center 
                  bg-gradient-to-b from-indigo-200 via-white to-indigo-100"
    >
      {/* صورة البروفايل */}
      <Motion.img
        src={img}
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-xl border-4 border-white object-cover"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* العنوان مع تأثير الكتابة */}
      <Motion.h1
        className="mt-6 text-4xl font-bold text-indigo-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {displayedText}
        <span className="animate-pulse">|</span> {/* مؤشر الكتابة */}
      </Motion.h1>

      {/* الوصف */}
      <Motion.p
        className="mt-3 text-lg text-gray-800"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      >
        I'm a <span className="font-semibold text-indigo-950">Graphic Designer</span>
      </Motion.p>

      {/* زرار */}
      <Motion.button
        className="mt-6 px-6 py-3 bg-indigo-950 text-white font-medium rounded-full 
                  shadow-lg hover:bg-indigo-900 transition-colors duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#About-section">Know More</a>
      </Motion.button>
    </section>
  )
}
