"use client";

import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { research_latest_news } from "../research/research";
import Link from "next/link";
export default function Latest_Research_News(){
    return(
        <>
            <div className="bg-white py-10 flex flex-col items-center">
                <div className="flex items-center justify-between p-5 w-full">
                    <h3 className="font-bold text-purple-950 text-xl">
                        Latest Research News
                    </h3>
                    <a href="" className="font-semibold text-purple-950 text-sm flex items-center hover:text-purple-500 transition-transform duration-300">ALL NEWS <FaChevronRight  className="ml-1"/></a>
                </div>
                <div className="w-full p-5" id="research_news">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop
                        autoplay = {{delay : 5000}}
                        navigation
                        pagination = {{clickable : true}}
                        breakpoints={{
                            0 : {slidesPerView : 1},
                            640 : {slidesPerView : 1},
                            768 : {slidesPerView : 2},
                            1024 : {slidesPerView : 4},
                        }}
                    
                    >
                        {research_latest_news.map((news, index) => (
                            <SwiperSlide key={index} className="relative">
                                <div key={index} className="w-full bg-white shadow-md overflow-hidden relative cursor-pointer">
                                    <Link href="#">
                                        <img src={news.image} alt={news.text} className="w-full h-50 object-cover" />
                                        
                                    <div className="absolute w-full h-full top-0 inset-0 bg-black/45"></div>
                                    <div className="px-3 absolute top-5 right-5 text-[12px] font-semibold py-1 rounded-xl text-purple-500 bg-white">
                                        {news.year}
                                    </div>
                                    <div className="absolute bottom-0 p-5">
                                        <p className="text-xs text-white font-semibold">{news.text}</p>
                                    </div>
                                    </Link>
                                    
                                </div>
                                
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>  
        </>
    );
}