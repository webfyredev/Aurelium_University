"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { newEvents, upcomingEvents } from "../pageData";
import { FaArrowRight, FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
import { borderFadeShow, scrollLeftEffects, scrollupDelayEffects, scrollUpEffect } from "../animations/framer";

export default function NewsEvents(){
    return(
        <>
            <div className="w-full p-5 lg:p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <motion.h4
                    {...borderFadeShow} 
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
                LATEST UPDATES
                </motion.h4>
                <motion.h2 {...scrollUpEffect} className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-purple-900">
                News & Events
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 mt-5 border-2 border-purple-700"></motion.div>
                <div className="w-full mt-5 lg:p-5 flex space-x-5">
                    <div className="w-full lg:w-[65%] rounded-md h-full" id="slider">
                        <Swiper
                            modules={[Autoplay, Pagination, EffectFade]}
                            autoplay = {{delay : 4000}}
                            pagination = {{clickable : true}}
                            effect="fade"
                            loop = {true}
                            className="rounded-md"
                        >
                            {newEvents.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative h-full md:h-[380px] w-full">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 h-full"></div>
                                        <div className="absolute bottom-10 left-6 right-6 text-white">
                                            <span className="bg-gradient-to-t from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {slide.tags}
                                            </span>
                                            <h2 className="mt-3 md:text-2xl lg:text-3xl font-bold text-white leading-snug">
                                                {slide.title}
                                            </h2>
                                            <p className="hidden md:flex mt-2 text-sm text-gray-100">
                                                {slide.text}
                                            </p>
                                            <div className="flex justify-between mt-3 text-xs">
                                                <span className="flex items-center text-xs font-semibold"> <FaCalendar className="w-2.5 h-2.5  mr-1"/> {slide.date}</span>
                                                <p className="flex items-center text-white font-semibold">
                                                    <Link href="/ns_events" className="flex items-center">
                                                        Read More <FaArrowRight  className="w-2 h-2 mt-0.5 ml-0.5"/>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-[35%] hidden lg:flex flex-col rounded-md space-y-4">
                        {newEvents.slice(0,3).map((data, index) => (
                            <motion.div {...scrollUpEffect} key={index} className="flex rounded-md shadow-sm bg-white overflow-hidden group">
                                <img src={data.image} alt={data.title} className="w-[40%] h-28.5 rounded-l-md object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="h-full space-y-1.5 w-full p-2 rounded-r-md">
                                    <p className="mt-2 text-[13px] font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">{data.tags}</p>
                                    <h2 className="text-xs font-semibold">
                                        {data.title}
                                    </h2>
                                    <p className="flex items-center text-[10px] text-gray-400">
                                        <FaCalendar  className="w-2.5 h-2.5 mr-1"/> {data.date}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-10 p-5 flex flex-col items-center">
                    <motion.h2 
                        {...scrollUpEffect}
                        className="font-bold text-2xl text-purple-950">
                        Upcoming Events
                    </motion.h2>
                    <motion.p 
                        {...scrollupDelayEffects}
                        className="w-85 md:w-150 text-sm text-center text-gray-600 mt-2">
                        Mark your calender and join us for these exciting events
                    </motion.p>
                    <div className="w-full lg:w-[90%] md:p-5 mt-5 grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {upcomingEvents.map((events, index) => (
                            <motion.div 
                                {...scrollLeftEffects}
                                key={index} className="bg-white p-5 cursor-pointer shadow-md rounded-md flex flex-col items-center">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col items-center text-white">
                                    <p className="text-[9px] mt-1 font-semibold">{events.month}</p>
                                    <h3 className="text-lg font-semibold">
                                        {events.date}
                                    </h3>
                                </div>
                                <div className="mt-2.5 rounded-lg px-4 py-0.5 text-[11px] font-semibold bg-purple-100 text-purple-500">
                                    {events.tag}
                                </div>
                                <p className="text-sm mt-2.5 font-semibold text-purple-950">
                                    {events.title}
                                </p>
                                <p className="flex items-center text-[10px] mt-2 text-gray-600">
                                    <FaClock  className="w-2.5 h-2.5 mt-0.5 mr-1"/> {events.time}
                                </p>
                                <p className="flex items-center text-[10px] mt-0.5 text-gray-600">
                                    <FaMapMarkerAlt  className="w-2.5 h-2.5 mt mr-1"/> {events.time}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}