import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion as Motion } from 'framer-motion'

export default function Projects() {
  const Manpulation = [
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

  return (
    <section id="Projects-section" className="w-full">

      {/* Social Media */}
      <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-100 via-blue-50 to-white py-20 px-4">
        <Motion.h1
          className="text-4xl md:text-5xl text-blue-950 text-center font-bold mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Social Media Projects
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
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 }, 
              768: { slidesPerView: 2 }, 
              1024: { slidesPerView: 3 } // برضو 3 صور على الكمبيوتر
            }}
            className="rounded-3xl shadow-2xl"
          >
            {socialMedia.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="bg-white p-3 rounded-2xl shadow-md flex justify-center items-center">
                  <img
                    src={encodeURI(item)}
                    alt={`social-${index}`}
                    className="w-[250px] md:w-[300px] lg:w-[320px] h-[250px] md:h-[300px] lg:h-[320px] rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Motion.div>
      </div>


      {/* Manipulation */}
      <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100 py-20 px-4">
        <Motion.h1
          className="text-4xl md:text-5xl text-blue-950 text-center font-bold mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Manipulation Projects
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
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 }, // Mobile
              768: { slidesPerView: 2 }, // Tablet
              1024: { slidesPerView: 3 } // Desktop = 3 صور
            }}
            className="rounded-3xl shadow-2xl"
          >
            {Manpulation.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="bg-white p-3 rounded-2xl shadow-md flex justify-center items-center">
                  <img
                    src={encodeURI(item)}
                    alt={`project-${index}`}
                    className="w-[250px] md:w-[300px] lg:w-[320px] h-[250px] md:h-[300px] lg:h-[320px] rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Motion.div>
      </div>
    </section>
  )
}
