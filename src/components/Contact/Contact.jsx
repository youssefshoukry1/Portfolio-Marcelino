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
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden 
      bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#1e3a8a]"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-2xl">
        {/* title */}
        <Motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 text-center drop-shadow-lg"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Let's <span className="text-yellow-300">Connect</span>
        </Motion.h1>

        {/* description */}
        <Motion.p
          className="text-white/90 text-center text-lg md:text-xl max-w-lg"
          variants={fadeIn}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Have a project in mind or just want to say hi? Reach out and let’s talk.
        </Motion.p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-6 py-3 
            bg-green-500/80 text-white font-medium border border-green-400 rounded-2xl shadow-md 
            hover:scale-105 hover:bg-green-500 transition-transform duration-300 text-base"
            variants={fadeIn}
            custom={0.4}
          >
            💬 WhatsApp
          </Motion.a>

          <Motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-6 py-3 
            bg-blue-600/80 text-white font-medium border border-blue-400 rounded-2xl shadow-md 
            hover:scale-105 hover:bg-blue-600 transition-transform duration-300 text-base"
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
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 
          rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
          variants={fadeIn}
          custom={0.8}
        >
          <Motion.input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 
            text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
            variants={fadeIn}
            custom={0.9}
          />
          <Motion.textarea
            name="Message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 
            text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
            variants={fadeIn}
            custom={1.0}
          />
          <Motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
            text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:brightness-110 
            transition-transform duration-300 text-base"
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