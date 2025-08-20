import React from "react";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const email = "your-email@example.com";
  const whatsappNumber = "201234567890";
  const linkedinLink = "https://www.linkedin.com/in/yourprofile/";

  return (
   <section
  id="Contact-section"
  className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 
             bg-[#0a1128] overflow-hidden"
>
  {/* glowing circles for effect */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl"></div>

  {/* overlay subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#071427]/80 via-[#0a192f]/70 to-[#0f637a]/60"></div>

  {/* content */}
  <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    {/* left side */}
    <div className="flex flex-col items-start justify-center gap-8">
      <Motion.h2
        className="text-4xl md:text-6xl font-extrabold 
                   bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400
                   bg-clip-text text-transparent drop-shadow-lg"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Let’s <span className="text-cyan-300">Connect</span>
      </Motion.h2>

      <Motion.p
        className="text-lg md:text-xl text-gray-200 leading-relaxed"
        variants={fadeIn}
        custom={0.2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Reach out anytime
      </Motion.p>

      {/* buttons */}
      <div className="flex flex-wrap gap-6">
        <Motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-2xl font-semibold text-white 
                     bg-gradient-to-r from-emerald-400 to-green-600
                     shadow-lg hover:shadow-emerald-400/40 hover:scale-105
                     transition-transform duration-300"
          variants={fadeIn}
          custom={0.4}
        >
          💬 WhatsApp
        </Motion.a>

        <Motion.a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-2xl font-semibold text-white 
                     bg-gradient-to-r from-sky-500 to-blue-700
                     shadow-lg hover:shadow-sky-400/40 hover:scale-105
                     transition-transform duration-300"
          variants={fadeIn}
          custom={0.6}
        >
          🔗 LinkedIn
        </Motion.a>
      </div>
    </div>

    {/* right side (form) */}
    <Motion.form
      action={`mailto:${email}`}
      method="POST"
      encType="text/plain"
      className="w-full bg-white/10 backdrop-blur-lg border border-white/20 
                 rounded-3xl p-10 flex flex-col gap-6 shadow-2xl"
      variants={fadeIn}
      custom={0.8}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <input
        type="text"
        name="Name"
        placeholder="Your Name"
        required
        className="w-full p-4 md:p-5 rounded-xl bg-white/15 text-white placeholder-white/70 
                   text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        required
        className="w-full p-4 md:p-5 rounded-xl bg-white/15 text-white placeholder-white/70 
                   text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        rows="6"
        required
        className="w-full p-4 md:p-5 rounded-xl bg-white/15 text-white placeholder-white/70 
                   text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <button
        type="submit"
        className="w-full py-4 md:py-5 text-lg font-semibold text-white rounded-xl
                   bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600
                   shadow-lg hover:scale-105 hover:shadow-cyan-300/40 
                   transition-transform duration-300"
      >
        🚀 Send Message
      </button>
    </Motion.form>
  </div>
</section>

  );
}
