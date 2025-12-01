"use client";
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
// import { section } from 'framer-motion/client';
import Link from 'next/link';
import {motion} from 'framer-motion'
import { useState } from 'react';
export default function Hero(){
    const [activeSlide, setActiveSlide] = useState(0)
    const slides = [
    {
      title: "Empowering Minds Through Quality Education",
      description: "We provide world-class academic programs designed to shape innovative leaders, critical thinkers, and problem solvers.",
      cta1:"Explore Programs",
      cta1_link : '',
      cta2 : 'Contact Us',
      cta2_link : '',
      media: "/hero/hero7.webp",
    },
    {
      title: "A Campus Designed for Innovation",
      description: "Experience modern classrooms, digital libraries, and collaborative spaces built for academic excellence.",
      cta1:"Discover Facilities",
      cta1_link : '',
      cta2 : 'Take a Tour',
      cta2_link : '',
      media: "/hero/hero6.webp",

    },
    {
      title: "Learn From Industry-Leading Faculty",
      description: "Our experienced lecturers guide students with years of academic expertise and real-world knowledge.",
      cta1:"Meet Faculty",
      cta1_link : '',
      cta2 : 'View Courses',
      cta2_link : '',
      media: "/hero/hero3.webp",

    },
    {
      title: "Driving Research That Shapes the Future",
      description: "Join our community of innovators conducting cutting-edge research across multiple disciplines.",
      cta1:"Explore Research",
      cta1_link : '',
      cta2 : 'Join Labs',
      cta2_link : '',
      media: "/hero/hero4.webp",

    },
    {
      title: "Begin Your Academic Journey With Us",
      description: "Admissions into undergraduate and postgraduate programs are now open. Become part of something great.",
      cta1:"Apply Now",
      cta1_link : '',
      cta2 : 'Request Info',
      cta2_link : '',
      media: "/hero/hero5.webp",

    },
  ];
    return(
        <section className='relative w-full h-screen' id='swiperSec'>
            <Swiper 
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                effect = "fade"
                autoplay = {{delay : 7000}}
                navigation
                pagination = {{clickable : true}}
                loop
                onSlideChange={(swiper => setActiveSlide(swiper.realIndex))}
                className='w-full h-full'
            >
                {slides.map((slide, index) => {
                    const isActive = index  === activeSlide;
                    return(
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-screen'>
                                <Image
                                    src={slide.media}
                                    alt={slide.title}
                                    fill
                                    className='object-cover'
                                >

                                </Image>
                                <div className='absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-800/90'></div>
                                <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6'>
                                    <motion.h1 
                                    initial = {{opacity : 0, y :30}}
                                    // whileInView = {{opacity : 1, y : 0}}
                                    animate = {isActive ? {opacity : 1, y :0} : {opacity : 0, y : 30}}
                                    transition={{duration : 0.5}}
                                    exit={{opacity : 0, y : 30}}
                                    className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p 
                                        initial = {{opacity : 0, y : 20}}
                                        animate = {isActive ? {opacity : 1, y : 0} : {opacity : 0, y :20}}
                                        transition={{duration : 0.5, delay: 0.2}}
                                    className='mt-4 max-w-2xl'>
                                        {slide.description}
                                    </motion.p>
                                    <motion.div 
                                        initial = {{opacity : 0, x : 30}}
                                        animate = {isActive ? {opacity : 1, x : 0} : {opacity :0, x:30}}
                                        transition={{duration : 0.5, delay : 0.4}}
                                        className='mt-8 flex space-x-5 items-center'>
                                            <motion.button
                                                whileHover={{scale : 1.05}} 
                                                whileTap={{scale : 0.95}}
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-purple-600'>
                                                <Link href={slide.cta1_link}>
                                                    {slide.cta1}
                                                </Link>
                                            </motion.button>
                                            <motion.button 
                                                whileHover={{scale : 1.05}} 
                                                whileTap={{scale : 0.95}}
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-white text-purple-500'>
                                                <Link href={slide.cta2_link}>
                                                    {slide.cta2}
                                                </Link>
                                            </motion.button>
                                    </motion.div>
                                    {/* <div className='w-full border-1 mt-2 p-5'> */}

                                    {/* </div> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </section>
    );
}