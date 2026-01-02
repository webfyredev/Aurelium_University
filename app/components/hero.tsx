"use client";
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { hero } from '../pageData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer'
gsap.registerPlugin(ScrollTrigger)
export default function Hero(){
    const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
    triggerOnce : false,
    threshold : 0.5,
    });
    const [activeSlide, setActiveSlide] = useState(0);

    const titleRefs = useRef<Array<HTMLHeadingElement | null>> ([]);
    const descRefs = useRef<Array<HTMLParagraphElement | null>> ([]);
    const ctaGroupRefs = useRef<Array<HTMLDivElement | null>> ([]);

    useEffect(() => {
        titleRefs.current.forEach(el => el && gsap.set(el, {y: 30, opacity : 0}));
        descRefs.current.forEach(el => el && gsap.set(el, {y: 20, opacity : 0}));
        ctaGroupRefs.current.forEach(el => el && gsap.set(el, {y: 20, opacity : 0}));
        const tl = gsap.timeline();
        const titleEl = titleRefs.current[activeSlide];
        const descEl = descRefs.current[activeSlide];
        const ctaEl = ctaGroupRefs.current[activeSlide];
        if(titleEl)
            tl.to(titleEl, {
                y : 0, 
                opacity : 1, 
                duration : 0.6, 
                ease : "power3.out"
            });
        if(descEl)
            tl.to(
                descEl, {
                    y : 0,
                    opacity : 1, 
                    duration : 0.45,
                },
                "-=0.3"
            );
        if(ctaEl)    
            tl.to(ctaEl, {
                y : 0,
                opacity : 1,
                duration : 0.4
            },
            "-=0.25"
            );
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
                                <h1
                                    ref={el => (titleRefs.current[index] = el)}
                                    className='text-3xl md:text-4xl lg:text-5xl font-bold mt-25'>
                                    {slide.title}
                                </h1>
                                <p
                                    ref={el => (descRefs.current[index] = el)}
                                    className='mt-4 max-w-2xl'>
                                    {slide.description}
                                </p>
                                <div 
                                    ref={el => (ctaGroupRefs.current[index] = el)}
                                    className='mt-8 flex space-x-5 items-center'>
                                        <button
                                            className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-purple-600'>
                                            <Link href={slide.cta1_link}>
                                                {slide.cta1}
                                            </Link>
                                        </button>
                                        <button 
                                            className='px-8 py-3 shadow-md hover:shadow-xl text-sm font-semibold rounded-sm cursor-pointer bg-white text-purple-500'>
                                            <Link href={slide.cta2_link}>
                                                {slide.cta2}
                                            </Link>
                                        </button>
                                </div>
                                <div 
                                    ref = {sectionOneRef}
                                    className='hidden md:grid relative top-15 w-[85%] lg:w-[70%] mt-5 p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    {hero.map((hero, index) => (
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
                ))}
            </Swiper>
        </section>
    );
}
