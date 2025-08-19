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

  const email = "";
  const whatsappNumber = "+";

  return (
    <section
      id="contact-section"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/img2/grdiant.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-2xl">

        {/* title */}
        <Motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-center drop-shadow-lg"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Let's <span className="text-yellow-300">Connect</span>
        </Motion.h1>

        {/* description */}
        <Motion.p
          className="text-white/90 text-center text-base sm:text-lg md:text-xl"
          variants={fadeIn}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Have a project in mind or just want to say hi? Reach out!
        </Motion.p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full sm:w-auto px-5 py-2 sm:px-6 sm:py-3 bg-green-500/50 text-white border-2 border-green-400 rounded-lg shadow-md hover:scale-105 hover:bg-green-500/70 transition-transform duration-300 text-sm sm:text-base"
            variants={fadeIn}
            custom={0.4}
          >
            💬 WhatsApp
          </Motion.a>

          <Motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full sm:w-auto px-5 py-2 sm:px-6 sm:py-3 bg-blue-500/50 text-white border-2 border-blue-400 rounded-lg shadow-md hover:scale-105 hover:bg-blue-500/70 transition-transform duration-300 text-sm sm:text-base"
            variants={fadeIn}
            custom={0.6}
          >
            🔗 LinkedIn
          </Motion.a>
        </div>

        {/* form */}
        <Motion.form
          action={`mailto:${email}`}
          method="POST"
          encType="text/plain"
          className="w-full bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-lg p-4 sm:p-5 flex flex-col gap-3 shadow-md"
          variants={fadeIn}
          custom={0.8}
        >
          <Motion.input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="w-full p-2 sm:p-3 rounded-lg bg-white/20 text-white placeholder-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
            variants={fadeIn}
            custom={0.9}
          />
          <Motion.textarea
            name="Message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-2 sm:p-3 rounded-lg bg-white/20 text-white placeholder-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
            variants={fadeIn}
            custom={1.0}
          />
          <Motion.button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300 text-sm sm:text-base"
            variants={fadeIn}
            custom={1.1}
          >
            Send Message
          </Motion.button>
        </Motion.form>
      </div>
    </section>
  );
}
