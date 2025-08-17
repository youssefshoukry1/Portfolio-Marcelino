import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion as Motion } from 'framer-motion'

import img from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/1.webp'
import img2 from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/1st2.webp'
import img3 from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/2ST.webp'
import img4 from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/bahr.webp'
import img5 from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/BENZEMA W1.webp'
import img6 from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/ceazar.webp'
import img7 from '../../../public/Manpulation-20250817T100646Z-1-001/Manpulation/الجسر.webp'

import socialMediaImg from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/544_social_media_post_template.webp'
import socialMediaIm2 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Client Success Story.webp'
import socialMediaImg3 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice//Dream Home.webp'
import socialMediaImg4 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Exclusive Luxury Listings.webp'
import socialMediaImg5 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Explore Egypts.webp'
import socialMediaImg6 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Home Buying Tips.webp'
import socialMediaIm7 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/luxury living in Egypt.webp'
import socialMediaImg8 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice//Maps.webp'
import socialMediaImg9 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Real Estate Tips.webp'
import socialMediaImg10 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Rent Vs. Buy.webp'
import socialMediaImg11 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/searching for your new Home.webp'
import socialMediaImg12 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-01.webp'
import socialMediaImg13 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-02.webp'
import socialMediaImg14 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-03.webp'
import socialMediaImg15 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-04.webp'
import socialMediaImg16 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/v952-bb-032-a-05.webp'
import socialMediaImg17 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/vibrant communities.webp'
import socialMediaImg18 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/Why Invest in Egypt.webp'
import socialMediaImg19 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/بين يديك1.webp'
import socialMediaImg20 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/حلمك يبدأمن هنا.webp'
import socialMediaImg21 from '../../../public/Social Media-20250817T100653Z-1-001/Social Media/REMAX 1st Choice/حول رؤيتك من الخيال الي الواقع.webp'

export default function Projects() {
  const Manpulation = [img, img2, img3, img4, img5, img6, img7]
  const socialMedia = [
    socialMediaImg, socialMediaIm2, socialMediaImg3, socialMediaImg4, socialMediaImg5, socialMediaImg6, socialMediaIm7,
    socialMediaImg8, socialMediaImg9, socialMediaImg10, socialMediaImg11, socialMediaImg12, socialMediaImg13, socialMediaImg14,
    socialMediaImg15, socialMediaImg16, socialMediaImg17, socialMediaImg18, socialMediaImg19, socialMediaImg20, socialMediaImg21
  ]

  // Variants for fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="Projects-section" className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 py-20 px-4">
      
      {/* Manipulation Section */}
      <Motion.h1 
        className="text-3xl md:text-4xl text-blue-950 text-center font-bold mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Manipulation Projects
      </Motion.h1>

      <Motion.div
        className="max-w-2xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl shadow-xl"
        >
          {Manpulation.map((item, index) => (
            <SwiperSlide key={index}>
              <Motion.div 
                className="flex justify-center items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <img
                loading='lazy'
                  src={item}
                  alt={`project-${index}`}
                  className="w-[200px] md:w-[260px] lg:w-[300px] h-[200px] md:h-[260px] lg:h-[300px] rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-500"
                />
              </Motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion.div>

      {/* Social Media Section */}
      <Motion.h1 
        className="text-3xl md:text-4xl text-blue-950 text-center font-bold mb-12 mt-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Social Media Projects
      </Motion.h1>

      <Motion.div
        className="max-w-3xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl shadow-xl"
        >
          {socialMedia.map((item, index) => (
            <SwiperSlide key={index}>
              <Motion.div 
                className="flex justify-center items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <img
                  src={item}
                  alt={`project-${index}`}
                  className="w-[220px] md:w-[300px] lg:w-[380px] h-[220px] md:h-[280px] lg:h-[320px] rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-500"
                />
              </Motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion.div>
    </section>
  )
}
