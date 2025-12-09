"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { researchAreas } from "../research/research";
export default function ResearchSlider(){
    return(
        <>
            <div className="w-full flex flex-col items-center p-10">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    RESEARCH AREAS
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950">
                    Our Research Areas
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-full py-5 lg:py-10" id="research">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination = {{clickable : true}}
                        autoplay = {{delay : 4000}}
                        loop
                        breakpoints={{
                            0 : {slidesPerView : 1},
                            640 : {slidesPerView : 1},
                            768 : {slidesPerView : 2},
                            1024 : {slidesPerView : 3},
        

                        }}
                        className="w-full"
                    >
                        {researchAreas.map((area, index) => (
                            <SwiperSlide key={index} className="cursor-pointer">
                                <div className="relative w-full h-[330px] rounded-xl overflow-hidden bg-gray-100">
                                    <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-700/30 to-transparent"></div>
                                    <div className="absolute bottom-0 p-5">
                                            <h3 className="text-white text-lg font-semibold">
                                                {area.title}
                                            </h3>
                                            <p className="text-white/90 text-[13px] mt-2 leading-tight">
                                                {area.subtitle}
                                            </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
}