"use client";
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { hero } from '../pageData';
import CountUp from "react-countup";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { buttonHoverEffects, scrollRightEffects, scrollupDelayEffects, scrollUpEffect } from '../animations/framer';
export default function Hero(){
    const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
    triggerOnce : false,
    threshold : 0.5,
    });

    const countKey = sectionOneInView ? "start" : "idle";
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
        title: "Empowering Minds Through Quality Education",
        description: "We provide world-class academic programs designed to shape innovative leaders, critical thinkers, and problem solvers.",
        cta1:"Explore Programs",
        cta1_link : '/academics#programs',
        cta2 : 'Contact Us',
        cta2_link : '/contacts#contact-sec',
        media: "/hero/hero7.webp",
        },
        {
        title: "A Campus Designed for Innovation",
        description: "Experience modern classrooms, digital libraries, and collaborative spaces built for academic excellence.",
        cta1:"Discover Facilities",
        cta1_link : '#school_facilites',
        cta2 : 'Take a Tour',
        cta2_link : '/gallery#tour',
        media: "/hero/hero6.webp",

        },
        {
        title: "Learn From Industry-Leading Faculty",
        description: "Our experienced lecturers guide students with years of academic expertise and real-world knowledge.",
        cta1:"Meet Faculty",
        cta1_link : '',
        cta2 : 'View Courses',
        cta2_link : '/academics#programs',
        media: "/hero/hero3.webp",

        },
        {
        title: "Driving Research That Shapes the Future",
        description: "Join our community of innovators conducting cutting-edge research across multiple disciplines.",
        cta1:"Explore Research",
        cta1_link : '/research#research_details',
        cta2 : 'Join Labs',
        cta2_link : '/research#join_labs',
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
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                className='w-full h-full'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative w-full h-screen'>
                            <Image
                                src={slide.media}
                                alt={slide.title}
                                fill
                                className='object-cover'
                                priority
                             />                            
                            <div className='absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-800/90'></div>
                            <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6'>
                                <motion.h1
                                key={`title-${activeSlide}`}
                                    {...scrollUpEffect}
                                    className='text-3xl md:text-4xl lg:text-5xl font-bold mt-25'>
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    key={`desc-${activeSlide}`}
                                    {...scrollupDelayEffects}
                                    className='mt-4 max-w-2xl'>
                                    {slide.description}
                                </motion.p>
                                <motion.div
                                    key={`buts-${activeSlide}`}
                                    {...scrollRightEffects} 
                                    className='mt-8 flex space-x-5 items-center'>
                                        <motion.button
                                            {...buttonHoverEffects}
                                            className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-purple-600'>
                                            <Link href={slide.cta1_link}>
                                                {slide.cta1}
                                            </Link>
                                        </motion.button>
                                        <motion.button
                                            {...buttonHoverEffects} 
                                            className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-white text-purple-500'>
                                            <Link href={slide.cta2_link}>
                                                {slide.cta2}
                                            </Link>
                                        </motion.button>
                                </motion.div>
                                {activeSlide === 0 &&(
                                    <motion.div
                                        {...scrollupDelayEffects}
                                        ref = {sectionOneRef}
                                        className='hidden lg:grid relative top-15 w-[85%] lg:w-[70%] mt-5 p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                        {hero.map((hero, index) => (
                                            <div key={index} className='border-1 p-3 rounded-md flex flex-col items-center space-y-1.5 bg-white/10 border border-white/10 backdrop-blur-md shadow-lg transition duration-300 hover:bg-white/20 hover:shadow-xl cursor-pointer hover:scale-105'>
                                                <hero.icon  className="w-6 h-6 "/>
                                                {/* <h3 className='font-bold text-2xl'>
                                                    {sectionOneInView ? <CountUp key={`count-${activeSlide}-${index}`} end={hero.count} duration={2.5} /> : 0}{hero.sign}
                                                </h3> */}
                                                <h3 className="font-bold text-2xl">
                                                    <CountUp
                                                        key={`count-${activeSlide}-${index}`}
                                                        end={hero.count}
                                                        duration={2.5}
                                                    />
                                                    {hero.sign}
                                                </h3>
                                                <p className='text-purple-100 font-semibold text-sm'>
                                                    {hero.title}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                                
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
