import React from 'react'
import { motion as Motion } from 'framer-motion';

export default function About() {

  const cards = [
    {
      title: "Graphic Designer",
      text: "I am a Social Media Graphic Designer with hands-on experience creating content for various platforms."
    },
    {
      title: "Motion & Editing",
      text: "I have an intermediate level in video editing and motion graphics, and I am proficient in Adobe Photoshop and Illustrator."
    },
    {
      title: "Creative Tools",
      text: "I have solid experience with Adobe After Effects, Premiere Pro, and XD, and I am confident in using these tools to bring creative projects to life."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="About-section" 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative 
                 bg-gradient-to-br from-[#071034] via-[#0f172a] to-[#0f637a] overflow-hidden"
    >
      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* محتوى */}
      <div className="relative z-10 w-full max-w-6xl">
        <Motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-400 
          mb-16 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </Motion.h2>

        <Motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {cards.map((card, index) => (
            <Motion.div 
              key={index} 
              className="p-8 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 
                         backdrop-blur-lg border border-white/20 shadow-lg 
                         hover:shadow-[0_0_35px_rgba(0,200,255,0.4)] 
                         hover:-translate-y-3 hover:rotate-1 
                         transition-all duration-500 ease-out"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-md">
                {card.title}
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {card.text}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}