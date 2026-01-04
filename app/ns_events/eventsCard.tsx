"use client";
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaMapMarker, FaCalendarCheck } from "react-icons/fa";
import { borderFadeShow, buttonHoverEffects, cardFadeShow } from "../animations/framer";
import { motion } from 'framer-motion'
export default function EventsCard({ item }:any ){
    return(
        <>
            <motion.div 
                {...cardFadeShow}
                className="flex flex-col rounded-xl overflow-hidden shadow-lg relative hover:shadow-xl transition group mb-5">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-xl  hover:scale-105 transition duration-300 " />
                <div className="absolute top-0 left-0 w-full h-48 z-1 rounded-t-xl inset-0 bg-black/15 hover:bg-black/0 transition duration-300 cursor-pointer group">
                    <p className="absolute right-2 text-[10px] top-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 px-2 py-1 rounded-xl group-hover:hidden transition duration-300">{item.category}</p>
                </div>
                <div className="p-4 rounded-b-xl flex flex-col space-y-2">
                    <div className="flex space-x-3 items-center">
                        <div className="flex flex-col items-center justify-center space-y-0.5 px-3 py-1.5 rounded-xl bg-purple-100">
                            <p className="font-bold text-purple-500 text-xs">{item.day}</p>
                            <p className="text-[10px] text-purple-500">{item.month}</p>
                        </div>
                        <a href="" className="text-sm font-semibold text-purple-950 group-hover:text-purple-500 transition">{item.title}</a>
                    </div>
                    <p className="text-[10.5px] text-gray-600">{item.text}</p>
                    <p className="flex items-center text-[10px] text-purple-950"><FaClock className="mr-1.5"/> {item.time}</p>
                    <p className="flex items-center text-[10px] text-purple-950"><FaMapMarker className="mr-1.5"/> {item.venue}</p>
                    <motion.button 
                        {...buttonHoverEffects}
                        className=" mt-1.5 py-2 mb-3 text-xs rounded-sm font-semibold bg-purple-100 group-hover:bg-purple-200 text-purple-500 cursor-pointer transition-all duration-300">
                        <a href="#" className="flex items-center justify-center"><FaCalendarCheck  className="mr-1.5"/> Register Now</a>
                    </motion.button>

                </div>
            </motion.div>
        </>
    );
}