"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { newEvents, upcomingEvents } from "../pageData";
import { FaArrowRight, FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function NewsEvents(){
    return(
        <>
            <div className="w-full p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
                LATEST UPDATES
                </h4>
                <h2 className="text-4xl font-bold mt-2 text-purple-900">
                News & Events
                </h2>
                <div className="w-20 mt-5 border-2 border-purple-700"></div>
                <div className="w-full mt-5 p-5 flex space-x-5">
                    <div className="w-[65%] rounded-md" id="slider">
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
                                    <div className="relative h-[380px] w-full">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50"></div>
                                        <div className="absolute bottom-10 left-6 right-6 text-white">
                                            <span className="bg-gradient-to-t from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {slide.tags}
                                            </span>
                                            <h2 className="mt-3 text-3xl font-bold text-white leading-snug">
                                                {slide.title}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-100">
                                                {slide.text}
                                            </p>
                                            <div className="flex justify-between mt-3 text-xs">
                                                <span className="flex items-center text-xs font-semibold"> <FaCalendar className="w-2.5 h-2.5  mr-1"/> {slide.date}</span>
                                                <p className="flex items-center text-purple-200 font-semibold">
                                                    <a href="#">Read More </a><FaArrowRight  className="w-2 h-2 mt-0.5 ml-0.5"/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-[35%] flex flex-col rounded-md space-y-4">
                        {newEvents.slice(0,3).map((data, index) => (
                            <div key={index} className="flex rounded-md shadow-sm bg-white overflow-hidden group">
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
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-10 p-5 flex flex-col items-center">
                    <h2 className="font-bold text-2xl text-purple-950">
                        Upcoming Events
                    </h2>
                    <p className="w-150 text-sm text-center text-gray-600 mt-2">
                        Mark your calender and join us for these exciting events
                    </p>
                    <div className="w-[90%] p-5 mt-5 grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {upcomingEvents.map((events, index) => (
                            <div key={index} className="bg-white p-5 cursor-pointer shadow-md rounded-md flex flex-col items-center">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}