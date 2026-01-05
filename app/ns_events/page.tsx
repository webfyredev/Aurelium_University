"use client";
import { FaArrowRight, FaCalendar, FaEnvelope, FaUser} from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { highlights, press_media, social_media } from "./events";
import Latest_Research_News from "../components/research_news";
import { news_data, event_data } from "./events";
import { useState } from "react";
import NewsCard from "./newsCard";
import EventsCard from "./eventsCard";
import { borderFadeShow, buttonHoverEffects, cardFadeShow, scrollRightEffects, scrollupDelayEffects, scrollUpEffect } from "../animations/framer";
import { motion } from 'framer-motion'

export default function News_Events(){
    const [activeTabs, setActiveTabs] = useState<"news" | "events" >("news");
    const [activeCategory, setActiveCategory] = useState("All");
    const newsCategory = ["All", "Rankings", "Research", "Campus", "International", "Student Achievements", "Events"];
    const eventsCategory = ["All", "Admissions", "Research", "Career", "Cultural", "Workshop", "Sports"]
    const categories = activeTabs === "news" ? newsCategory : eventsCategory;
    const data = activeTabs === "news" ? news_data : event_data;
    const filteredItems = activeCategory === "All" ? data : data.filter((item) => item.category === activeCategory);
    return(
        <>
            <DefaultNavBar />
            <Header 
            image = '/header/ns1.webp'
            title = 'News & Events'
            text = 'Stay updated with the latest happenings at Aurelium University'/>
            <Latest_Research_News />
            <div className="lg:p-10">
                <div className="flex justify-center gap-2 mb-6">
                    <button onClick={() => {setActiveTabs("news"); setActiveCategory("All");}} className={`px-4 py-2 rounded-full cursor-pointer text-[13px] font-semibold ${activeTabs === "news" ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white" : " bg-white text-purple-950 border border-purple-600"}`}>
                        News
                    </button>
                    <button onClick={() => {setActiveTabs("events"); setActiveCategory("All");}} className={`px-4 py-2 rounded-full cursor-pointer text-[13px] font-semibold ${activeTabs === "events" ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white" : " bg-white text-purple-950 border border-purple-600"}`}>
                        Events
                    </button>
                </div>
                <div className="hidden md:flex flex-wrap gap-2 justify-center mb-6">
                    {categories.map((cat) => (
                        <button key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-2 md:px-3 lg:px-4 py-1.5 rounded-full border cursor-pointer text-[10px] md:text-[11px] lg:text-xs transition ${activeCategory === cat ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold" : "bg-white text-purple-600 border-purple-600"}`}>
                            {cat}
                        </button>
                    ))}

                </div>
                <div className="p-5 w-full grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredItems.map((item, index) => (
                        activeTabs === "news" ? (
                            <NewsCard key={index}  item={item}/>
                        ) : (
                            <EventsCard key={index} item={item} />
                        )
                    ))}
                </div>
            </div>
            <div className="w-full lg:p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center mt-10 lg:mt-0">
                <motion.h4 
                    {...borderFadeShow}
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    COMING SOON
                </motion.h4>
                <motion.h2 
                    {...scrollUpEffect}
                    className="text-xl md:text-3xl font-bold text-purple-950 text-center">
                    Upcoming Events Highlights
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-700"></motion.div>
                <div className="w-full lg:w-[90%] p-5 rounded-sm mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {highlights.map((data, index) => (
                        <motion.div {...cardFadeShow} key={index} className="flex flex-col items-center p-5 rounded-xl shadow-sm hover:shadow-lg bg-white transition duration-300 group hover:scale-105">
                            <data.icon  className="w-12 h-12 p-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <p className="text-xs font-semibold text-purple-500 mt-3">{data.date}</p>
                            <h3 className="font-semibold text-purple-950 mt-2 group-hover:text-purple-500 transition-all duration-300">{data.title}</h3>
                            <p className="text-xs text-center mt-3">{data.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="lg:p-15 w-full flex flex-col items-center bg-white">
                <motion.h4 
                    {...borderFadeShow}
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    IN THE MEDIA
                </motion.h4>
                <motion.h2 
                    {...scrollUpEffect}
                    className="text-xl md:text-3xl font-bold text-purple-950 text-center">
                    Press Releases & Media Coverage
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-700"></motion.div>
                <div className="w-full lg:w-[90%] p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {press_media.map((media, index) =>(
                        <motion.div 
                            {...scrollUpEffect}
                            key={index} className=" rounded-md hover:rounded-xl p-5 flex space-x-2 shadow-sm hover:shadow-lg transition duration-300 hover:scale-105 group">
                            <media.icon  className="w-10 h-10 p-3 rounded-lg bg-purple-100 text-purple-500"/>
                            <div className="flex flex-col">
                                <p className="text-[10px]"><span className="mr-2 font-semibold text-purple-500 text-xs">{media.tits}</span>{media.date}</p>
                                <h3 className="font-semibold text-purple-950 text-[11px] md:text-sm group-hover:text-purple-500 transition-all duration-300">{media.title}</h3>
                                <a href="" className="mt-2 text-[10px] font-bold text-purple-500 flex items-center">Read Article <FaArrowRight  className="w-2 h-2 mt-0.5 ml-0.5"/></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="lg:p-10 md:bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <motion.h4 
                    {...borderFadeShow}
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    STAY CONNECTED
                </motion.h4>
                <motion.h2 
                    {...scrollUpEffect}
                    className="text-xl md:text-3xl font-bold text-purple-950">
                    Follow Us on Social Media
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-700"></motion.div>
                <motion.p {...scrollupDelayEffects} className="text-xs md:text-[13px] md:w-150 w-85 text-center mt-2 text-gray-500">
                    Join our vibrant community and stay updated with daily news, events and student life.
                </motion.p>
                <div className="w-full lg:w-[90%] p-5 mt-5 rounded-sm grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {social_media.map((media, index) => (
                        <motion.div {...scrollRightEffects} key={index} className="p-5 rounded-xl flex flex-col items-center space-y-2 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <media.icon  className="w-12 h-12 border-1 p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <p className="font-semibold text-purple-950 text-sm group-hover:text-purple-500 transition-all duration-300">{media.name}</p>
                            <h3 className="text-lg font-bold text-purple-500">{media.value}</h3>
                            <p className="text-xs">{media.text} daily interactions</p>
                            <motion.a href="" {...buttonHoverEffects} className="w-full py-2 lg:py-1.5 text-xs font-semibold text-center rounded-sm bg-purple-100 text-purple-500 group-hover:bg-purple-200 transition-all duration-300">Follow</motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div 
                {...scrollUpEffect}
                className="px-15 py-10 w-full bg-gradient-to-r from-purple-500 to-purple-600 hidden md:flex justify-between items-center">
                <motion.div 
                    {...scrollUpEffect}
                    className="flex space-x-3">
                    <FaEnvelope  className="w-10 h-10 rounded-full p-3 bg-purple-300 text-white"/>
                    <div className="flex flex-col space-y-1.5">
                        <h3 className="font-semibold text-white">Subscribe to our Newsletter</h3>
                        <p className="text-xs text-purple-100">Get weekly updated delivered to your inbox</p>
                    </div>
                </motion.div>
                <motion.a {...scrollUpEffect} {...buttonHoverEffects} href="#" className="flex items-center bg-white rounded-full text-xs font-semibold px-5 h-8 text-purple-500 cursor-pointer">
                    <FaEnvelope className="mr-1" /> Subscribe Now
                </motion.a>
            </motion.div>
        </>
    );
}