"use client";
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { hero } from '../pageData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { scrollUpEffects } from '../animations/animation';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer'
gsap.registerPlugin(ScrollTrigger)
export default function Hero(){
    const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
    triggerOnce : false,
    threshold : 0.5,
  });
    const [activeSlide, setActiveSlide] = useState(0);
    const titleRefs = useRef<HTMLElement []>([]);
    const descRefs = useRef<HTMLElement []>([]);
    const ctaGroupRefs = useRef<HTMLDivElement []>([]);

    const titleRef = useRef<HTMLHeadingElement | null >(null);
    useEffect(() =>{
        // if(titleRef.current && isActive)
    });
    useEffect(() => {
        titleRefs.current = titleRefs.current.slice(0, slidesCount);
        descRefs.current = descRefs.current.slice(0, slidesCount);
        ctaGroupRefs.current = ctaGroupRefs.current.slice(0, slidesCount);
    }, []);

    const slidesCount = 5;
    useEffect(() => {
        gsap.killTweensOf("*");

        titleRefs.current.forEach((el) => {
            if(el) gsap.set(el, {y : 30, opacity : 0});
        });
        descRefs.current.forEach((el) => {
            if(el) gsap.set(el, {y :20, opacity : 0});
        });
        ctaGroupRefs.current.forEach((el) =>{
            if(el) gsap.set(el, {y :20, opacity : 0});
        });
        const titleEl = titleRefs.current[activeSlide];
        const descEl = descRefs.current[activeSlide];
        const ctaEl = ctaGroupRefs.current[activeSlide];
        const tl = gsap.timeline();
        if(titleEl) tl.to(titleEl, {y : 0, opacity : 1, duration : 0.5, ease : "power2.out"});
        if(descEl) tl.to(descEl, {y:0, opacity : 1, duration : 0.45, ease : "power2.out"}, "-=0.25");
        if(ctaEl) tl.to(ctaEl.children, {y : 0, opacity : 1, duration : 0.35, ease: "power2.out", stagger : 0.8}, "-=0.2");

        return () => {
            tl.kill();
        };

    }, [activeSlide]);

    const countKey = sectionOneInView ? "start" : "idle";
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
                    // const isActive = index  === activeSlide;
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
                                    {/* <motion.h1 
                                    initial = {{opacity : 0, y :30}}
                                    // whileInView = {{opacity : 1, y : 0}}
                                    animate = {isActive ? {opacity : 1, y :0} : {opacity : 0, y : 30}}
                                    transition={{duration : 0.5}}
                                    exit={{opacity : 0, y : 30}}
                                    className='text-3xl md:text-4xl lg:text-5xl font-bold mt-25'>
                                        {slide.title}
                                    </motion.h1> */}
                                    <h1
                                        ref={(el) => {if (el) titleRefs.current[index] = el;}}
                                    className='text-3xl md:text-4xl lg:text-5xl font-bold mt-25'>
                                        {slide.title}
                                    </h1>
                                    {/* <motion.p 
                                        initial = {{opacity : 0, y : 20}}
                                        animate = {isActive ? {opacity : 1, y : 0} : {opacity : 0, y :20}}
                                        transition={{duration : 0.5, delay: 0.2}}
                                        className='mt-4 max-w-2xl'>
                                        {slide.description}
                                    </motion.p> */}
                                    <p
                                        ref={(el) => {if (el) descRefs.current[index] = el;}}
                                        className='mt-4 max-w-2xl'>
                                        {slide.description}
                                    </p>
                                    {/* <motion.div 
                                        initial = {{opacity : 0, x : 30}}
                                        animate = {isActive ? {opacity : 1, x : 0} : {opacity :0, x:30}}
                                        transition={{duration : 0.5, delay : 0.4}}
                                        className='mt-8 flex space-x-5 items-center'>
                                            <motion.button
                                                variants={buttonHoverEffects} whileHover="whileHover" whileTap="whileTap"
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-purple-600'>
                                                <Link href={slide.cta1_link}>
                                                    {slide.cta1}
                                                </Link>
                                            </motion.button>
                                            <motion.button 
                                                variants={buttonHoverEffects} whileHover="whileHover" whileTap="whileTap"
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-white text-purple-500'>
                                                <Link href={slide.cta2_link}>
                                                    {slide.cta2}
                                                </Link>
                                            </motion.button>
                                    </motion.div> */}
                                    <div 
                                        ref={(el) => {
                                            if (el) ctaGroupRefs.current[index] = el;
                                        }}
                                        className='mt-8 flex space-x-5 items-center'>
                                            {/* <motion.button
                                                variants={buttonHoverEffects} whileHover="whileHover" whileTap="whileTap"
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-purple-600'>
                                                <Link href={slide.cta1_link}>
                                                    {slide.cta1}
                                                </Link>
                                            </motion.button> */}
                                            <button
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-purple-600'>
                                                <Link href={slide.cta1_link}>
                                                    {slide.cta1}
                                                </Link>
                                            </button>
                                            {/* <motion.button 
                                                variants={buttonHoverEffects} whileHover="whileHover" whileTap="whileTap"
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-white text-purple-500'>
                                                <Link href={slide.cta2_link}>
                                                    {slide.cta2}
                                                </Link>
                                            </motion.button> */}
                                            <button 
                                                className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-white text-purple-500'>
                                                <Link href={slide.cta2_link}>
                                                    {slide.cta2}
                                                </Link>
                                            </button>
                                    </div>
                                    {/* <motion.div 
                                        ref = {sectionOneRef}
                                        variants={scrollUpEffects}
                                        initial = "initial"
                                        whileInView = "whileInView"
                                        exit = "exit"
                                        className='relative top-15 w-[70%] mt-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
                                        {hero.map((hero, index) => (
                                            <motion.div variants={cardHoverEffects}  whileHover="whileHover" key={index} className='border-1 p-3 rounded-md flex flex-col items-center space-y-1.5 bg-white/10 border border-white/10 backdrop-blur-md shadow-lg transition duration-300 hover:bg-white/20 hover:shadow-xl cursor-pointer'>
                                                <hero.icon  className="w-6 h-6 "/>
                                                <h3 className='font-bold text-2xl'>
                                                    {sectionOneInView ? <CountUp end={hero.count} duration={5} /> : 0}{hero.sign}
                                                </h3>
                                                <p className='text-purple-100 font-semibold text-sm'>
                                                    {hero.title}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </motion.div> */}
                                    <div 
                                        ref = {sectionOneRef}
                                        className='relative top-15 w-[70%] mt-5 p-3 grid grid-cols-none sm:grid-cols-none md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
                                        {hero.map((hero, index) => (
                                            // <motion.div variants={cardHoverEffects}  whileHover="whileHover" key={index} className='border-1 p-3 rounded-md flex flex-col items-center space-y-1.5 bg-white/10 border border-white/10 backdrop-blur-md shadow-lg transition duration-300 hover:bg-white/20 hover:shadow-xl cursor-pointer'>
                                            //     <hero.icon  className="w-6 h-6 "/>
                                            //     <h3 className='font-bold text-2xl'>
                                            //         {sectionOneInView ? <CountUp end={hero.count} duration={5} /> : 0}{hero.sign}
                                            //     </h3>
                                            //     <p className='text-purple-100 font-semibold text-sm'>
                                            //         {hero.title}
                                            //     </p>
                                            // </motion.div>
                                            <div key={index} className='border-1 p-3 rounded-md flex flex-col items-center space-y-1.5 bg-white/10 border border-white/10 backdrop-blur-md shadow-lg transition duration-300 hover:bg-white/20 hover:shadow-xl cursor-pointer'>
                                                <hero.icon  className="w-6 h-6 "/>
                                                <h3 className='font-bold text-2xl'>
                                                    {sectionOneInView ? <CountUp key={countKey + "-" + index} end={hero.count} duration={2.5} /> : 0}{hero.sign}
                                                </h3>
                                                <p className='text-purple-100 font-semibold text-sm'>
                                                    {hero.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </section>
    );
}
