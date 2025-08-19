import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { motion as Motion } from 'framer-motion'

export default function Projects() {
  const manipulation = [
    "/Manpulation-20250817T100646Z-1-001/Manpulation/1.webp",
    "/Manpulation-20250817T100646Z-1-001/Manpulation/1st2.webp",
    "/Manpulation-20250817T100646Z-1-001/Manpulation/2ST.webp",
    "/Manpulation-20250817T100646Z-1-001/Manpulation/bahr.webp",
    "/Manpulation-20250817T100646Z-1-001/Manpulation/BENZEMA W1.webp",
    "/Manpulation-20250817T100646Z-1-001/Manpulation/ceazar.webp",
    "/Manpulation-20250817T100646Z-1-001/Manpulation/الجسر.webp"
  ]

  const socialMedia = [
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/544_social_media_post_template.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Client Success Story.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Dream Home.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Exclusive Luxury Listings.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Explore Egypts.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Home Buying Tips.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/luxury living in Egypt.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Maps.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Real Estate Tips.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Rent Vs. Buy.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/searching for your new Home.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-01.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-02.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-03.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-04.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-05.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/vibrant communities.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Why Invest in Egypt.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/بين يديك1.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/حلمك يبدأمن هنا.webp",
    "/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/حول رؤيتك من الخيال الي الواقع.webp"
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
const Section = ({ title, items, bgImage }) => (
  <div
    className={`relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 py-16 md:py-20 
      ${bgImage ? "bg-cover bg-center bg-no-repeat" : "bg-gradient-to-br from-[#1b2963] via-[#1e2e55] to-[#1fa9cf] overflow-hidden"}`}
    style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
  >
    {/* Blur Layer */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

    {/* المحتوى */}
    <div className="relative z-10 w-full flex flex-col items-center">
      <Motion.h1
        className="text-3xl md:text-5xl text-transparent bg-clip-text 
                   bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-400 
                   font-extrabold mb-10 md:mb-12 drop-shadow-lg text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </Motion.h1>

      <Motion.div
        className="max-w-6xl mx-auto w-full"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-3xl shadow-2xl"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={encodeURI(item)}
                alt={`${title}-${index}`}
                className="w-[270px] sm:w-[260px] md:w-[300px] lg:w-[320px] 
                h-[270px] sm:h-[260px] md:h-[300px] lg:h-[320px] 
                rounded-2xl shadow-lg hover:scale-105 
                transition-transform duration-500 object-cover mx-auto"
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion.div>
    </div>
  </div>
);
  return (
    <section id="Projects-section" className="w-full">
      <Section 
        title="Social Media Projects" 
        items={socialMedia} 
        bgImage="" 
      />
      <Section 
        title="Manipulation Projects" 
        items={manipulation} 
        bgImage="/img2/pexels-manuel.webp" 
      />
    </section>
  )
}
