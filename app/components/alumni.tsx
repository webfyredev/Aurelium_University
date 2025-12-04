"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { alumni_stories } from "../about/about";
export default function Alumni_Stories(){
    return(
        <>
            <div className="w-full p-10 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    ALUMNI IMPACTS
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Alumni Success Stories
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-full p-5" id="alumni">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination = {{clickable : true}}
                        autoplay = {{delay : 5000}}
                        loop
                        breakpoints={{
                            0 : {slidesPerView : 1},
                            640 : {slidesPerView : 1},
                            768 : {slidesPerView : 2},
                            1024 : {slidesPerView : 3},

                        }}
                        className="rounded-xl"
                    >
                        {alumni_stories.map((alumni, index) => (
                            <SwiperSlide key={index} className="cursor-pointer rounded-xl">
                                <div className="relative w-full h-[250px] overflow-hidden">
                                    <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover rounded-t-md" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-700/30 to-transparent rounded-t-md"></div>
                                </div>
                                <div className="p-3 flex flex-col rounded-b-md shadow-md">
                                    <h3 className="font-bold text-purple-950 text-base">{alumni.name}</h3>
                                    <p className="italic font-semibold text-purple-500">{alumni.achievement}</p>
                                    <p className="text-xs my-1">{alumni.story}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    )
}