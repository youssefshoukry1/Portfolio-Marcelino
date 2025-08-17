import React from 'react'
import { motion as Motion } from 'framer-motion';

export default function About() {

  const cards = [
    [
      "I am a Social Media Graphic Designer",
      "with hands-on experience creating content for various platforms."
    ],
    [
      "I have an intermediate level in video editing and motion graphics,",
      "and I am proficient in Adobe Photoshop and Illustrator."
    ],
    [
      "I have solid experience with Adobe After Effects, Premiere Pro, and XD,",
      "and I am confident in using these tools to bring creative projects to life."
    ]
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section 
      id="About-section" 
      className="min-h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-b from-white via-blue-50 to-blue-100 px-6 py-12"
    >
      <Motion.h2 
        className="text-3xl md:text-4xl font-semibold text-blue-950 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </Motion.h2>

      <Motion.div 
        className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {cards.map((paragraphs, index) => (
          <Motion.div 
            key={index} 
            className="w-full md:w-80 p-6 bg-white rounded-xl shadow-md hover:shadow-xl 
            transition-shadow duration-300 border-l-4 border-blue-900 text-left"
            variants={cardVariants}
          >
            {paragraphs.map((line, i) => (
              <p key={i} className="text-gray-900 text-base md:text-lg leading-relaxed mb-3">
                {line}
              </p>
            ))}
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  )
}
