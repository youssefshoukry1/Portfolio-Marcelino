import React from "react";
import { motion as Motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";
import { LinkIcon } from "lucide-react";
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

  return (
    <section
  id="Contact-section"
  className="relative w-full min-h-screen flex flex-col justify-center items-center px-9 py-16 
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
  className="text-sm md:text-lg text-gray-200 leading-relaxed  max-w-2xl -mx-4"
  variants={fadeIn}
  custom={0.2}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {"I’m"} available for collaborations, freelance design projects, <br /> 
  and creative partnerships. 
  Feel free to reach out <br /> through the contact form or 
  connect with me <br />directly on social media.
</Motion.p>


      {/* buttons */}
      <div className="flex flex-wrap lg:gap-14 gap-4">
  <a
            href="https://wa.me/201204470794"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 lg:text-6xl text-4xl text-green-400 
                    hover:scale-125 transition-transform duration-300"
          >
            <FaWhatsapp />
          </a>

        <a
            href="https://www.linkedin.com/in/youssef-shoukry-4568a3348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 lg:text-6xl text-4xl text-cyan-400 
            hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
      </div>
    </div>

    {/* right side (form) */}
    <Motion.form
      action={`mailto:${email}`}
      method="POST"
      encType="text/html; charset=UTF-8"
      className="w-full bg-white/10 backdrop-blur-lg border border-white/20 
      rounded-3xl p-7 flex flex-col gap-6 shadow-2xl"
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
        rows="4"
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
          Send Message
      </button>
    </Motion.form>
  </div>
</section>

  );
}
